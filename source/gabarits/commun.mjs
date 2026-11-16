/* Gabarit commun : head, en-tête, menu, pied de page, barre fixe du téléphone, voile, panneau de l'intro.
   Les conventions data-* sont celles que lisent le socle JavaScript et l'audit (voir le README du socle). */
import { html, brut } from '../../outils/gabarit.mjs';

const navigation = (c) => c.site.navigation.filter((cle) => c.pages[cle] && (c.pages[cle].langues || c.langues).includes(c.l));

/* L'arche du logo, redessinée en traits (elle se trace à l'intro, et sert de motif partout). */
const ARCHE_TXT = ('<path d="M180 470V202a164 164 0 0 1 328 0v158"/><path d="M222 418V204a122 122 0 0 1 244 0v168"/><path d="M268 470V204a76 76 0 0 1 152 0v174"/><path d="M180 470h88"/><path d="M60 470c100-18 170-65 284-80s196-28 291-75"/>');
export const ARCHE = brut(ARCHE_TXT);
export const arche = (classe = '', attrs = '', unitaire = false) => html`<svg class="arche-svg ${classe}" viewBox="40 20 620 470" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${brut(attrs ? ' ' + attrs : '')}>${unitaire ? brut(ARCHE_TXT.replace(/<path /g, '<path pathLength="1" ')) : ARCHE}</svg>`;

function tete(c) {
  const p = c.page, cle = p.cle;
  const titre = c.s(`pages.${cle}.titre`), description = c.s(`pages.${cle}.description`);
  const ici = c.abs(c.url(cle));
  const imagePartage = c.abs(`/assets/partage/${p.partage === false ? 'accueil' : cle}-${c.l}.jpg`);
  const structure = c.donnees.structure ? JSON.stringify(c.donnees.structure).replace(/</g, '\\u003c') : '';
  return html`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${titre}</title>
<meta name="description" content="${description}">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="${ici}">
<style>${brut(c.critique.css)}</style>
<script>${brut(c.critique.js)}</script>
${(c.site.polices || []).map((f) => html`<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>\n`)}<link rel="stylesheet" href="${c.asset('css/socle.css')}">
<link rel="stylesheet" href="${c.asset('css/site.css')}">
${c.page.cle === 'accueil' || c.page.cle === 'contact' ? html`<link rel="stylesheet" href="${c.asset('css/modules.css')}">` : ''}
<link rel="modulepreload" href="${c.asset('js/site.js')}">
<link rel="modulepreload" href="${c.asset('js/socle/index.js')}">
<script src="/assets/vendor/gsap.min.js" defer></script>
<script src="/assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/vendor/SplitText.min.js" defer></script>
<script type="module" src="${c.asset('js/site.js')}"></script>
<meta name="theme-color" content="${c.site.couleurs.theme || c.site.couleurs.fond}">
<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${c.site.nom}">
<meta property="og:locale" content="fr_FR">
<meta property="og:title" content="${titre}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${ici}">
<meta property="og:image" content="${imagePartage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${c.s(`pages.${p.partage === false ? 'accueil' : cle}.partageAlt`)}">
<meta name="twitter:card" content="summary_large_image">
${structure ? html`<script type="application/ld+json">${brut(structure)}</script>` : ''}
</head>`;
}

function entete(c) {
  return html`<header data-entete>
  <div class="entete-rangee">
    <a class="entete-logo" href="${c.url('accueil')}" aria-label="${c.site.nom} · ${c.libelle('accueil')}" data-libelle="${c.libelle('accueil')}"${c.page.cle === 'accueil' ? brut(' aria-current="page"') : ''}>
      <img src="/assets/images/logo.svg" alt="" width="46" height="35"><span class="entete-nom">${c.site.nom}</span>
    </a>
    <nav data-nav aria-label="${c.s('commun.navigation')}">
      <ul>${navigation(c).filter((k) => k !== 'accueil').map((k) => html`<li>${c.lien(k)}</li>`)}</ul>
    </nav>
    <div class="entete-actions">
      <a class="bouton bouton--petit" href="${c.url(c.site.actionEntete.page, c.site.actionEntete.ancre || '')}" data-libelle="${c.libelle(c.site.actionEntete.page)}"><span class="masque-etroit">${c.t('commun.actionEntete')}</span><span class="seul-etroit">${c.t('commun.actionCourte')}</span></a>
      <button type="button" data-menu-bouton aria-controls="menu" aria-expanded="false" data-libelle-ouvrir="${c.s('commun.menu')}" data-libelle-fermer="${c.s('commun.fermer')}"><span data-libelle-bouton>${c.t('commun.menu')}</span></button>
      <a class="menu-sansjs" href="#menu" data-menu-lien>${c.t('commun.menu')}</a>
    </div>
  </div>
</header>
<script>/* Avant le premier affichage : rangées de la navigation (même règle que ajusterNav dans assets/js/socle/entete.js)
   et hauteur réelle de l'en-tête, pour que rien ne saute quand le JavaScript du site prend la main. */
(function () {
  var h = document.documentElement, u = document.querySelector('[data-nav] ul'), e = document.querySelector('[data-entete]');
  if (u) {
    var deborde = function () { return u.scrollWidth > u.clientWidth + 1; }, c = deborde();
    if (c && window.matchMedia('(min-width: 900px)').matches) {
      h.classList.add('nav-deux-rangees'); c = deborde();
      if (c) { h.classList.add('nav-deux-lignes'); var a = u.querySelector('a'); c = !a || u.getBoundingClientRect().height > a.getBoundingClientRect().height * 2.5; }
      if (c) h.classList.remove('nav-deux-rangees', 'nav-deux-lignes');
    }
    if (c) h.classList.add('nav-compacte');
  }
  if (e) h.style.setProperty('--entete-h', Math.round(e.getBoundingClientRect().height) + 'px');
})();</script>
<span id="menu-ferme" aria-hidden="true"></span>
<div id="menu" data-menu role="dialog" aria-modal="true" aria-label="${c.s('commun.menu')}">
  <p class="menu-sansjs-fermer"><a href="#menu-ferme">${c.t('commun.fermer')}</a></p>
  <ul>${navigation(c).map((k, i) => html`<li style="--i:${i}">${c.lien(k, { classe: 'menu-lien' })}</li>`)}</ul>
  <p class="menu-actions"><a class="bouton" href="${c.url('contact', 'rendez-vous')}" data-libelle="${c.libelle('contact')}">${c.t('commun.actionEntete')}</a>
  <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
  ${arche('menu-arche')}
</div>`;
}

function pied(c) {
  return html`<footer class="pied" id="pied">
  <div class="conteneur pied-grille">
    <div class="pied-marque">
      ${arche('pied-arche')}
      <p class="pied-nom">${c.site.nom}</p>
      <p class="pied-signature">${c.t('commun.signature')}</p>
      <p class="pied-action"><a class="lien-fleche" href="${c.url('contact', 'rendez-vous')}" data-libelle="${c.libelle('contact')}">${c.t('commun.piedAction')}</a></p>
    </div>
    <div>
      <p class="pied-titre">${c.t('commun.contact')}</p>
      <p><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a><br><span class="pied-lieu">${c.site.contact.adresse}</span></p>
    </div>
    <nav aria-label="${c.s('commun.sommaire')}">
      <p class="pied-titre">${c.t('commun.sommaire')}</p>
      <ul>${navigation(c).map((k) => html`<li>${c.lien(k)}</li>`)}</ul>
    </nav>
  </div>
  <div class="conteneur pied-bas">
    <p>${c.t('commun.legal')}</p>
    <p>${c.t('commun.maquette')}</p>
    <p><a href="#haut" data-sans-transition>${c.t('commun.retourHaut')}</a></p>
  </div>
</footer>`;
}

function barre(c) {
  return html`<div data-barre-fixe>
  <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')}</a>
  <a class="bouton" href="${c.url('contact', 'rendez-vous')}" data-libelle="${c.libelle('contact')}">${c.t('commun.actionCourte')}</a>
</div>`;
}

/* Voile en « rideau » : deux battants bleus qui se ferment, comme une porte, puis s'ouvrent depuis le centre. */
const FORMES_VOILE = ['glisse', 'iris', 'vague', 'rideau'];
function voile(c) {
  const forme = FORMES_VOILE.includes(c.site.formeVoile) ? c.site.formeVoile : 'glisse';
  return html`<div data-voile data-forme="${forme}" aria-hidden="true"><div class="voile-contenu"><img src="/assets/images/logo-clair.svg" alt="" width="74" height="56"><span data-voile-libelle>${c.libelle(c.page.cle)}</span></div></div>`;
}

export function page(c, contenu) {
  return html`<!doctype html>
<html lang="${c.l}" data-v="${c.v}"${c.site.curseur ? brut(' data-curseur') : ''}>
${tete(c)}
<body id="haut" class="page-${c.page.cle}">
${voile(c)}
<div class="ouverture-panneau" data-ouverture aria-hidden="true">
  <div class="intro-objet" data-ouverture-objet>${arche('intro-arche', '', true)}</div>
  <p class="ouverture-nom">${c.site.nom}</p>
  <p class="ouverture-ligne">${c.t('commun.introLigne')}</p>
</div>
<a class="evitement" href="#contenu">${c.t('commun.evitement')}</a>
${entete(c)}
<main id="contenu" tabindex="-1"${c.page.sansAction ? brut(' data-sans-action') : ''}${c.page.sansEffet ? brut(' data-sans-effet') : ''}>
${contenu}
</main>
${pied(c)}
${barre(c)}
</body>
</html>`;
}

/* Appel final commun à toutes les pages : bleu de porte, petite arche du logo qui se trace, soleil levant
   qui monte depuis la limite du pied de page (rayons en éventail qui tournent lentement). */
const RAYONS = Array.from({ length: 17 }, (_, i) => {
  const a = Math.PI + (i / 16) * Math.PI, r1 = 150, r2 = i % 2 ? 230 : 280;
  return `<line x1="${(Math.cos(a) * r1).toFixed(1)}" y1="${(Math.sin(a) * r1).toFixed(1)}" x2="${(Math.cos(a) * r2).toFixed(1)}" y2="${(Math.sin(a) * r2).toFixed(1)}"/>`;
}).join('');
export function appelFinal(c, { id = 'fin' } = {}) {
  return html`<section class="fin" id="${id}">
  <div class="fin-soleil" data-effet="soleil" aria-hidden="true">
    <svg viewBox="-300 -300 600 300" class="soleil" data-visuel>
      <defs><radialGradient id="soleil-halo" cx="0" cy="0" r="140" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E9C88C" stop-opacity=".95"/><stop offset=".72" stop-color="#D7B072" stop-opacity=".55"/><stop offset="1" stop-color="#D7B072" stop-opacity="0"/></radialGradient></defs>
      <g class="soleil-rayons">${brut(RAYONS)}</g>
      <circle class="soleil-disque" cx="0" cy="0" r="120" fill="url(#soleil-halo)"/>
      <path class="soleil-bord" d="M-120 0a120 120 0 0 1 240 0"/>
    </svg>
  </div>
  <div class="fin-texte conteneur">
    ${arche('fin-arche', '', true)}
    <h2 data-anime="lignes">${c.t('commun.fin.titre')}</h2>
    <p data-anime>${c.t('commun.fin.texte')}</p>
    <p class="fin-actions" data-anime>
      <a class="bouton bouton--or" href="${c.url('contact', 'rendez-vous')}" data-libelle="${c.libelle('contact')}" data-survol="magnetique">${c.t('commun.fin.action')}</a>
      <span class="fin-tel">${c.t('commun.fin.ou')} <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></span>
    </p>
  </div>
</section>`;
}

/* Contour doré autour d'une photo en arche : deux arches concentriques et l'onde du logo.
   À poser dans un cadre .cadre-arche (4:5), la photo y est placée en 5:7 (voir site.css). */
export const contour = (classe = '', attrs = '', unitaire = false) => html`<svg class="contour ${classe}" viewBox="0 0 480 600" preserveAspectRatio="none" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true" data-visuel${brut(attrs ? ' ' + attrs : '')}>${brut(['M26 600V240a214 214 0 0 1 428 0v330', 'M8 560V240a232 232 0 0 1 464 0v300', 'M-20 596C110 580 190 535 300 522S440 492 500 452'].map((d) => `<path vector-effect="non-scaling-stroke"${unitaire ? ' pathLength="1"' : ''} d="${d}"/>`).join(''))}</svg>`;
