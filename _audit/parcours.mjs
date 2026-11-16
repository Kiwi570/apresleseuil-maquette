/* Parcours propres à Après le Seuil : formulaire de rendez-vous en quatre étapes (prérempli par ?sujet=…, double clic),
   curseur avant / après (clavier et onglets). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* 1. Formulaire prérempli depuis la page Particuliers, puis parcouru jusqu'à l'envoi simulé. */
    await page.goto(BASE + '/contact?sujet=cap#rendez-vous', { waitUntil: 'load' });
    await attendrePret(page);
    await attendre(600);
    const pre = await page.evaluate(() => ({
      sujet: !!document.querySelector('input[name="sujet"][value="cap"]:checked'),
      profil: !!document.querySelector('input[name="profil"][value="particulier"]:checked'),
    }));
    if (!pre.sujet || !pre.profil) R.echec('formulaire de rendez-vous', `choix non prérempli par ?sujet=cap (sujet ${pre.sujet}, profil ${pre.profil})`, { page: '/contact', taille: '390×844' });
    const suivant = page.locator('.fpe [data-suivant]');
    await suivant.click(); await attendre(500);
    await suivant.click(); await attendre(500);
    await page.fill('#rdv-prenom', 'Anne');
    await page.fill('#rdv-nom', 'Martin');
    await page.fill('#rdv-email', 'pas-un-email');
    await suivant.click(); await attendre(400);
    const erreur = await page.evaluate(() => document.querySelector('#rdv-email')?.getAttribute('aria-invalid') === 'true');
    if (!erreur) R.echec('formulaire de rendez-vous', 'une adresse e-mail invalide passe sans erreur', { page: '/contact', taille: '390×844' });
    await page.fill('#rdv-email', 'anne.martin@exemple.fr');
    await page.fill('#rdv-message', 'Je prépare un déménagement et je cherche à y voir clair.');
    await page.locator('.fpe__case input[name="accord"]').check({ force: true });
    await suivant.click(); await attendre(600);
    const recap = await page.evaluate(() => document.querySelector('.fpe__recap')?.textContent || '');
    if (!/Retrouver un cap/.test(recap) || !/Anne/.test(recap)) R.echec('formulaire de rendez-vous', 'le récapitulatif ne reprend pas les choix', { page: '/contact', taille: '390×844' });
    const envoyer = page.locator('.fpe button[type="submit"]');
    await envoyer.dblclick(); await attendre(900);
    const fin = await page.evaluate(() => { const f = document.querySelector('.fpe__fin'); return f && !f.hidden; });
    if (!fin) R.echec('formulaire de rendez-vous', 'pas d’écran de confirmation après l’envoi simulé', { page: '/contact', taille: '390×844' });

    /* 2. Avant / après : le curseur répond au clavier et les onglets changent de paire. */
    await page.goto(BASE + '/#realisations', { waitUntil: 'load' });
    await attendrePret(page);
    await attendre(1500);
    const avant = await page.evaluate(() => document.querySelector('.ava__paire:not([hidden]) .ava__cadre')?.style.getPropertyValue('--pos'));
    const curseur = page.locator('.ava__paire:not([hidden]) input[type="range"]').first();
    if (await curseur.count()) {
      await curseur.focus();
      for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowRight');
      await attendre(400);
      const apres = await page.evaluate(() => document.querySelector('.ava__paire:not([hidden]) .ava__cadre')?.style.getPropertyValue('--pos'));
      if (avant === apres) R.echec('avant / après', 'le curseur ne bouge pas au clavier', { page: '/', taille: '390×844' });
    } else R.echec('avant / après', 'curseur accessible introuvable', { page: '/', taille: '390×844' });
    const onglets = page.locator('[data-ava-onglets] [role="tab"]');
    if ((await onglets.count()) < 3) R.echec('avant / après', 'les trois onglets (dressing, buffet, bahut) manquent', { page: '/', taille: '390×844' });
  } finally { await ctx.close(); }
}
