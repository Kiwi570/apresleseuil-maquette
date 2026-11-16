/* Contact : un premier échange, simplement. Fenêtre ouverte, trois promesses, formulaire de rendez-vous en quatre étapes
   (module formulaire-par-etapes), coordonnées et boussole qui tourne au défilement. */
import { html } from '../../outils/gabarit.mjs';
import { icone, porte } from '../gabarits/icones.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

const passages = ['depart', 'chezsoi', 'place', 'cap', 'atelier', 'entreprise', 'villa', 'autre'];
const t = (c, k) => c.t('contact.form.' + k);

export default (c) => html`
<section class="ct-ouverture" id="debut">
  <div class="conteneur ct-grille">
    <div class="ct-texte">
      <p class="surtitre" data-anime="gsap">${c.t('pages.contact.nav')}</p>
      <h1 class="ct-titre"><span class="ligne-masque"><span class="titre-ligne">${c.t('contact.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne"><em>${c.t('contact.titre2')}</em></span></span></h1>
      <ul class="promesses" data-anime="gsap">
        ${[['p1', 'mains'], ['p2', 'maison'], ['p3', 'echange']].map(([k, ic], i) => html`<li${i === 0 ? html` data-info-cle` : html` class="masque-petit-tel"`}>${icone(ic)}<span>${c.t('contact.' + k)}</span></li>`)}
      </ul>
      <p class="actions" data-anime="gsap"><a class="bouton" href="#rendez-vous" data-sans-transition data-action-principale data-survol="magnetique">${c.t('contact.action')}</a> <a class="lien-tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    </div>
    <div class="ct-fenetre" data-iris-centre>
      ${c.media({ nom: 'grok/contact-ouverture', alt: c.donnees.images['grok/contact-ouverture']?.alt || '', cadrage: '50% 50%', priorite: true, classe: 'ct-media', sizes: '(max-width: 760px) 90vw, 42vw', attrs: 'data-effet="fenetre"' })}
      <span class="ct-meneaux" aria-hidden="true"></span>
    </div>
  </div>
</section>

<section class="fpe rdv fond-sable" id="rendez-vous" data-module="formulaire-par-etapes" aria-labelledby="rdv-titre">
  <div class="conteneur fpe__cadre">
    <div class="fpe__tete">
      ${icone('plume', 'rdv-icone', 'data-fx="trace"')}
      <h2 class="fpe__h2" id="rdv-titre" data-anime="lignes">${t(c, 'titre')}</h2>
      <p class="fpe__intro" data-anime>${t(c, 'texte')}</p>
      <p class="fpe__note" data-anime>${c.t('commun.maquette')}</p>
    </div>
    <div class="fpe__carton">
      <form class="fpe__form" action="#" method="post" novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e1')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${t(c, 'e1q')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.form.e1')}">
            <label class="fpe__carte"><input type="radio" name="profil" value="particulier" required>${icone('maison', 'fpe__icone')}
              <span class="fpe__carte-titre">${t(c, 'particulier')}</span><span class="fpe__carte-texte">${t(c, 'particulierD')}</span></label>
            <label class="fpe__carte"><input type="radio" name="profil" value="entreprise">${icone('equipe', 'fpe__icone')}
              <span class="fpe__carte-titre">${t(c, 'entreprise')}</span><span class="fpe__carte-texte">${t(c, 'entrepriseD')}</span></label>
          </div>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e2')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${t(c, 'e2q')}</h3></legend>
          <fieldset class="fpe__groupe" data-min="1" data-libelle="${c.s('contact.form.e2')}">
            <legend class="fpe__groupe-titre">${t(c, 'e2aide')}</legend>
            <div class="fpe__puces">
              ${passages.map((p) => html`<label class="fpe__puce"><input type="checkbox" name="sujet" value="${p}"><span class="fpe__choix-texte">${t(c, 'c_' + p)}</span></label>`)}
            </div>
          </fieldset>
          <fieldset class="fpe__groupe" data-libelle="${c.s('contact.form.format')}">
            <legend class="fpe__groupe-titre">${t(c, 'format')}</legend>
            <div class="fpe__puces">
              ${['distance', 'presentiel', 'egal'].map((f, i) => html`<label class="fpe__puce"><input type="radio" name="format" value="${f}"${i === 2 ? html` checked` : ''}><span class="fpe__choix-texte">${t(c, 'f_' + f)}</span></label>`)}
            </div>
          </fieldset>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e3')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${t(c, 'e3q')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="rdv-prenom">${t(c, 'prenom')} <i aria-hidden="true">*</i></label><input id="rdv-prenom" name="prenom" autocomplete="given-name" required></div>
            <div class="fpe__champ"><label for="rdv-nom">${t(c, 'nom')} <i aria-hidden="true">*</i></label><input id="rdv-nom" name="nom" autocomplete="family-name" required></div>
            <div class="fpe__champ"><label for="rdv-email">${t(c, 'email')} <i aria-hidden="true">*</i></label><input id="rdv-email" name="email" type="email" autocomplete="email" required></div>
            <div class="fpe__champ"><label for="rdv-tel">${t(c, 'tel')}</label><input id="rdv-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}"></div>
          </div>
          <div class="fpe__champ"><label for="rdv-message">${t(c, 'message')} <i aria-hidden="true">*</i></label><textarea id="rdv-message" name="message" rows="5" minlength="10" required></textarea></div>
          <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${t(c, 'accord')} <i aria-hidden="true">*</i></span></label>
          <p class="fpe__aide mention-donnees">${t(c, 'donnees')}</p>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e4')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${t(c, 'e4q')}</h3></legend>
          <div class="fpe__recap"><p>${t(c, 'texte')}</p></div>
        </fieldset>

        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${t(c, 'precedent')}</button>
          <button class="fpe__bouton" type="button" data-suivant data-retour="${c.s('contact.form.e4')}">${t(c, 'suivant')}</button>
          <button class="fpe__bouton" type="submit">${t(c, 'envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" hidden>
        <span class="rdv-porte" aria-hidden="true" data-grille="retour">${porte('rdv-porte-svg')}</span>
        <h3>${t(c, 'merciTitre')}</h3>
        <p class="rdv-merci">${t(c, 'merci')}</p>
        <p data-resume></p>
        <p>${t(c, 'merciTexte')}</p>
        <div class="fpe__fin-actions">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${t(c, 'recommencer')}</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="coordonnees" id="coordonnees">
  <div class="conteneur coord-grille">
    <div class="coord-boussole" data-effet="boussole">${icone('boussole')}</div>
    <div>
      <h2 data-anime="lignes">${c.t('contact.coord.titre')}</h2>
      <dl class="coord-liste" data-anime="cascade">
        <div><dt>${c.t('contact.coord.telephone')}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></dd></div>
        <div><dt>${c.t('contact.coord.email')}</dt><dd><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></dd></div>
        <div><dt>${c.t('contact.coord.lieu')}</dt><dd>${c.t('contact.coord.lieuTexte')}</dd></div>
      </dl>
      <p class="coord-delai" data-anime>${c.t('contact.coord.delai')}</p>
    </div>
  </div>
  <div class="valeurs">
    <h2 class="visuellement-cache">${c.t('contact.valeurs.titre')}</h2>
    <ul class="valeurs-liste conteneur" data-anime="cascade">
      ${[['v1', 'mains'], ['v2', 'etagere'], ['v3', 'fauteuil'], ['v4', 'soleil']].map(([k, ic]) => html`<li>${icone(ic)}<span>${c.t('contact.valeurs.' + k)}</span></li>`)}
    </ul>
  </div>
</section>
`;
