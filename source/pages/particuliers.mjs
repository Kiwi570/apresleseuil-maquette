/* Particuliers : ouverture en enfilade de portes, sommaire de cinq arches, puis un accompagnement par section,
   chacune dans sa propre mise en page (même système : titres, arches, listes dorées, étapes). */
import { html } from '../../outils/gabarit.mjs';
import { contour, appelFinal } from '../gabarits/commun.mjs';
import { icone, porte } from '../gabarits/icones.mjs';

/* « Faire de la place » : lettres entassées qui se rangent au défilement (site.js, titreRange). Le texte reste lu d'un bloc.
   data-superpose : les lettres en vrac se chevauchent exprès avant de se ranger (vérifié sur les captures). */
const titreRange = (texte) => html`<h2 class="titre-range" data-grille="typo"><span class="visuellement-cache">${texte}</span><span class="titre-range-lettres" aria-hidden="true" data-superpose>${texte.split(' ').map((m, k) => html`${k ? ' ' : ''}<span class="tr-mot">${[...m].map((l) => html`<span class="tr-l">${l}</span>`)}</span>`)}</span></h2>`;

export const page = { cle: 'particuliers', fichier: 'particuliers', imagePartage: 'grok/particuliers-ouverture-1280.webp' };

const sommaire = [
  ['depart', 'depart', 'maison'],
  ['chez-soi', 'chezsoi', 'fauteuil'],
  ['faire-de-la-place', 'place', 'etagere'],
  ['retrouver-un-cap', 'cap', 'boussole'],
  ['ateliers', 'ateliers', 'plume'],
];
const liste = (c, base, cles) => html`<ul class="liste-or" data-anime="cascade">${cles.map((k) => html`<li>${c.t(base + k)}</li>`)}</ul>`;
const demarrer = (c, sujet, texte) => html`<a class="bouton" href="${c.url('contact', 'rendez-vous', 'sujet=' + sujet)}" data-libelle="${c.libelle('contact')}">${texte || c.t('particuliers.demarrer')}</a>`;

export default (c) => html`
<section class="p-ouverture" id="debut">
  <div class="p-bande-cadre">
    ${c.media({ nom: 'grok/particuliers-ouverture', alt: c.donnees.images['grok/particuliers-ouverture']?.alt || '', cadrage: '50% 60%', priorite: true, classe: 'p-bande', sizes: '(max-width: 760px) 100vw, 1240px', attrs: 'data-effet="enfilade"' })}
  </div>
  <div class="conteneur p-ouverture-grille">
    <div class="p-ouverture-texte">
      <p class="surtitre" data-anime="gsap">${c.t('particuliers.surtitre')}</p>
      <h1 class="p-titre"><span class="ligne-masque"><span class="titre-ligne">${c.t('particuliers.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne"><em>${c.t('particuliers.titre2')}</em></span></span></h1>
      <p class="p-intro masque-ecran-bas masque-petit-tel" data-anime="gsap">${c.t('particuliers.texte')}</p>
      <p class="actions" data-anime="gsap"><a class="bouton" href="${c.url('contact', 'rendez-vous')}" data-libelle="${c.libelle('contact')}" data-action-principale data-survol="magnetique">${c.t('particuliers.action')}</a></p>
      <p class="info-cle" data-info-cle data-anime="gsap">${c.t('particuliers.info')}</p>
    </div>
    <nav class="portes-sommaire" aria-label="${c.s('particuliers.sommaire')}" data-iris-centre>
      <ul data-anime="gsap">
        ${sommaire.map(([ancre, cle, image]) => html`<li><a href="#${ancre}" data-sans-transition>
          <span class="porte-vignette" aria-hidden="true">${icone(image)}</span>
          <span>${c.t(`particuliers.${cle}.nav`)}</span></a></li>`)}
      </ul>
    </nav>
  </div>
</section>

<nav class="suivi" data-grille="fil" data-sommaire aria-label="${c.s('particuliers.suivre')}">
  <ul>
    ${sommaire.map(([ancre, cle]) => html`<li><a href="#${ancre}" data-sans-transition><span class="suivi-arche" aria-hidden="true"></span><span class="suivi-nom">${c.t(`particuliers.${cle}.nav`)}</span></a></li>`)}
    <li><a href="#villa" data-sans-transition><span class="suivi-arche" aria-hidden="true"></span><span class="suivi-nom">${c.t('particuliers.villa.titre')}</span></a></li>
  </ul>
</nav>

<section class="acc acc--depart" id="depart">
  <div class="conteneur acc-grille">
    <div class="acc-image cadre-arche">
      ${contour('', 'data-fx="trace"')}
      ${c.media({ nom: 'grok/carte-depart', alt: c.donnees.images['grok/carte-depart']?.alt || '', classe: 'arche-cadre', sizes: '(max-width: 760px) 72vw, 32vw', attrs: 'data-effet="arche"' })}
    </div>
    <div class="acc-texte">
      <h2 data-anime="lignes">${c.t('particuliers.depart.titre')}</h2>
      <p class="sous-titre" data-anime>${c.t('particuliers.depart.sous')}</p>
      <p class="contexte" data-anime>${c.t('particuliers.depart.contexte')}</p>
      ${liste(c, 'particuliers.depart.', ['l1', 'l2', 'l3', 'l4'])}
      <p class="phrase-or" data-anime>${c.t('particuliers.depart.phrase')}</p>
    </div>
  </div>
  <div class="conteneur">
    <h3 class="etapes-mini-titre">${c.t('particuliers.etapesTitre')}</h3>
    <ol class="etapes-mini" data-anime="cascade">
      ${['e1', 'e2', 'e3'].map((k, i) => html`<li><span class="etape-num">${i + 1}</span><p>${c.t('particuliers.depart.' + k)}</p></li>`)}
    </ol>
    <p class="acc-action" data-anime>${demarrer(c, 'depart')}</p>
  </div>
</section>

<section class="acc acc--chezsoi fond-sable" id="chez-soi">
  <div class="conteneur acc-grille acc-grille--inverse">
    <div class="acc-texte">
      <p class="etiquette" data-anime>${c.t('particuliers.chezsoi.etiquette')}</p>
      <h2 data-anime="lignes">${c.t('particuliers.chezsoi.titre')}</h2>
      <p class="sous-titre" data-anime>${c.t('particuliers.chezsoi.sous')}</p>
      ${liste(c, 'particuliers.chezsoi.', ['l1', 'l2', 'l3', 'l4'])}
    </div>
    <div class="acc-image">
      ${c.media({ nom: 'grok/carte-chezsoi', alt: c.donnees.images['grok/carte-chezsoi']?.alt || '', classe: 'arche-cadre', sizes: '(max-width: 760px) 72vw, 32vw', attrs: 'data-effet="arche"' })}
    </div>
  </div>
  <div class="conteneur">
    <ol class="trois-cartes" data-anime="cascade">
      ${[['e1', 'echange'], ['e2', 'fauteuil'], ['e3', 'maison']].map(([k, ic], i) => html`<li>
        <span class="trois-icone">${icone(ic)}</span>
        <span class="etape-num">${i + 1}</span>
        <h3>${c.t(`particuliers.chezsoi.${k}t`)}</h3>
        <p>${c.t('particuliers.chezsoi.' + k)}</p>
      </li>`)}
    </ol>
    <p class="acc-action" data-anime>${demarrer(c, 'chezsoi')}</p>
  </div>
</section>

<section class="acc acc--place" id="faire-de-la-place">
  <div class="conteneur place-grille">
    <div class="place-tete">
      <p class="etiquette" data-anime>${c.t('particuliers.place.etiquette')}</p>
      ${titreRange(c.s('particuliers.place.titre'))}
      <p class="sous-titre" data-anime>${c.t('particuliers.place.sous')}</p>
      ${liste(c, 'particuliers.place.', ['l1', 'l2', 'l3', 'l4'])}
    </div>
    <div class="place-image">
      ${c.media({ nom: 'grok/carte-place', alt: c.donnees.images['grok/carte-place']?.alt || '', classe: 'place-media', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-anime="rideau"' })}
    </div>
    <blockquote class="engagement" data-anime>
      ${icone('etagere', 'engagement-icone')}
      <p>${c.t('particuliers.place.engagement')}</p>
    </blockquote>
    <ol class="frise" data-anime="cascade">
      ${['e1', 'e2', 'e3', 'e4'].map((k, i) => html`<li><span class="etape-num">${i + 1}</span><p>${c.t('particuliers.place.' + k)}</p></li>`)}
    </ol>
    <p class="acc-action" data-anime>${demarrer(c, 'place')}</p>
  </div>
</section>

<section class="acc acc--cap fond-bleu" id="retrouver-un-cap">
  <div class="conteneur cap-grille">
    <div class="cap-image">
      ${c.media({ nom: 'grok/carte-cap', alt: c.donnees.images['grok/carte-cap']?.alt || '', classe: 'arche-cadre', sizes: '(max-width: 760px) 72vw, 30vw', attrs: 'data-effet="arche"' })}
      <span class="cap-boussole" data-effet="boussole">${icone('boussole')}</span>
    </div>
    <div class="cap-texte">
      <p class="etiquette etiquette--clair" data-anime>${c.t('particuliers.cap.etiquette')}</p>
      <h2 data-anime="lignes">${c.t('particuliers.cap.titre')}</h2>
      <p class="sous-titre" data-anime>${c.t('particuliers.cap.sous')}</p>
      <p data-anime>${c.t('particuliers.cap.intro')}</p>
      ${liste(c, 'particuliers.cap.', ['l1', 'l2', 'l3', 'l4'])}
      <ul class="modalites" data-anime="cascade">
        ${['m1', 'm2', 'm3', 'm4'].map((k) => html`<li>${c.t('particuliers.cap.' + k)}</li>`)}
      </ul>
      <p class="acc-action" data-anime><a class="bouton bouton--or" href="${c.url('contact', 'rendez-vous', 'sujet=cap')}" data-libelle="${c.libelle('contact')}">${c.t('particuliers.demarrer')}</a></p>
    </div>
  </div>
</section>

<section class="acc acc--ateliers fond-sable" id="ateliers">
  <div class="conteneur">
    <div class="ateliers-tete">
      <div>
        <h2 data-anime="lignes">${c.t('particuliers.ateliers.titre')}</h2>
        <p class="sous-titre" data-anime>${c.t('particuliers.ateliers.sous')}</p>
        <p data-anime>${c.t('particuliers.ateliers.intro')}</p>
      </div>
      ${c.media({ nom: 'grok/carte-atelier', alt: c.donnees.images['grok/carte-atelier']?.alt || '', classe: 'ateliers-media', sizes: '(max-width: 760px) 80vw, 40vw', attrs: 'data-anime="rideau"' })}
    </div>
    <ul class="themes" data-anime="cascade">
      ${[['t1', 'maison'], ['t2', 'plume'], ['t3', 'equipe']].map(([k, ic]) => html`<li>
        <span class="trois-icone">${icone(ic)}</span>
        <h3>${c.t('particuliers.ateliers.' + k)}</h3>
        <p>${c.t(`particuliers.ateliers.${k}d`)}</p>
      </li>`)}
    </ul>
    <p class="note" data-anime>${c.t('particuliers.ateliers.note')}</p>
    <p class="acc-action" data-anime>${demarrer(c, 'atelier', c.t('particuliers.ateliers.action'))}</p>
  </div>
</section>

<section class="villa villa--page" id="villa">
  <div class="conteneur villa-grille">
    <div class="villa-image">
      ${c.media({ nom: 'villa', alt: c.donnees.images.villa.alt, cadrage: '40% 60%', classe: 'villa-media', sizes: '(max-width: 760px) 68vw, 500px', attrs: 'data-anime="rideau"' })}
      <span class="villa-badge">${c.t('particuliers.villa.badge')}</span>
    </div>
    <div class="villa-texte">
      <h2 data-anime="lignes">${c.t('particuliers.villa.titre')}</h2>
      <p class="sous-titre" data-anime>${c.t('particuliers.villa.sous')}</p>
      <p data-anime>${c.t('particuliers.villa.texte')}</p>
      <p data-anime><a class="lien-fleche" href="${c.url('contact', 'rendez-vous', 'sujet=villa')}" data-libelle="${c.libelle('contact')}">${c.t('particuliers.villa.action')}</a></p>
    </div>
  </div>
</section>

${appelFinal(c)}
`;
