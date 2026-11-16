/* À propos : le portrait de Christel en très grand dans une arche, les trois volets, le parcours et les réalisations. */
import { html } from '../../outils/gabarit.mjs';
import { contour, appelFinal } from '../gabarits/commun.mjs';
import { icone } from '../gabarits/icones.mjs';

export const page = { cle: 'a-propos', fichier: 'a-propos', imagePartage: 'christel-bleu-960.webp' };

const realisations = [
  ['real-entree', 'entree', 'lieu'],
  ['real-cuisine', 'cuisine', 'lieu'],
  ['real-sejour', 'sejour', 'lieu'],
  ['real-valet', 'valet', 'renover'],
  ['real-lampe', 'lampe', 'creer'],
];

export default (c) => html`
<section class="ap-ouverture" id="debut">
  <div class="conteneur ap-grille">
    <div class="ap-portrait cadre-arche" data-iris-centre>
      ${contour('ap-contour', '', true)}
      ${c.media({ nom: 'christel-bleu', alt: c.donnees.images['christel-bleu'].alt, cadrage: '50% 30%', priorite: true, classe: 'arche-cadre ap-media', sizes: '(max-width: 760px) 64vw, 34vw', attrs: 'data-effet="portrait"' })}
    </div>
    <div class="ap-texte">
      <p class="surtitre" data-anime="gsap">${c.t('apropos.nom')}</p>
      <h1 class="ap-titre"><span class="ligne-masque"><span class="titre-ligne">${c.t('apropos.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne"><em>${c.t('apropos.titre2')}</em></span></span></h1>
      <p class="masque-ecran-bas masque-petit-tel" data-anime="gsap">${c.t('apropos.texte1')}</p>
      <p class="masque-ecran-tres-bas masque-petit-tel" data-anime="gsap">${c.t('apropos.texte2')}</p>
      <p class="actions" data-anime="gsap"><a class="bouton" href="${c.url('contact', 'rendez-vous')}" data-libelle="${c.libelle('contact')}" data-action-principale>${c.t('apropos.action')}</a> <span class="info-cle" data-info-cle>${c.t('apropos.info')}</span></p>
    </div>
  </div>
</section>

<section class="volets fond-sable" id="volets">
  <div class="conteneur">
    <h2 class="volets-titre" data-anime="lignes">${c.t('apropos.volets.titre')}</h2>
    <ol class="volets-liste" data-anime="cascade">
      ${[['v1', 'plume'], ['v2', 'maison'], ['v3', 'chemin']].map(([k, ic]) => html`<li class="volet">
        <span class="volet-arche">${icone(ic)}</span>
        <h3>${c.t('apropos.volets.' + k)}</h3>
        <p>${c.t(`apropos.volets.${k}d`)}</p>
      </li>`)}
    </ol>
  </div>
</section>

<section class="parcours" id="parcours">
  <div class="conteneur parcours-grille">
    <h2 data-anime="lignes">${c.t('apropos.parcours.titre')}</h2>
    <div class="parcours-cadre">
    <svg class="parcours-trait" viewBox="0 0 4 400" preserveAspectRatio="none" aria-hidden="true" data-fx="trace" data-visuel><path d="M2 0V400"/></svg>
    <ol class="parcours-liste">
      ${['p1', 'p2', 'p3', 'p4'].map((k) => html`<li data-anime><span class="parcours-point" aria-hidden="true"></span><span class="parcours-nom">${c.t('apropos.parcours.' + k)}</span>${k === 'p3' || k === 'p4' ? html`<span class="parcours-encours">${c.t('apropos.parcours.' + k + 'e')}</span>` : ''}</li>`)}
    </ol>
    </div>
  </div>
</section>

<section class="realisations fond-sable" id="realisations">
  <div class="conteneur">
    <div class="section-tete">
      <h2 data-anime="lignes">${c.t('apropos.realisations.titre')}</h2>
      <p data-anime>${c.t('apropos.realisations.texte')}</p>
    </div>
    <ul class="mosaique" data-anime="cascade">
      ${realisations.map(([nom, cle, cat], i) => html`<li class="mosaique-item mosaique-item--${i + 1}">
        ${c.media({ nom, alt: c.donnees.images[nom].alt, classe: 'mosaique-media', sizes: '(max-width: 760px) 80vw, 30vw', attrs: 'data-fx="vitesse"' })}
        <p><span class="mosaique-cat">${c.t('apropos.realisations.' + cat)}</span>${c.t('apropos.realisations.' + cle)}</p>
      </li>`)}
    </ul>
    <p class="note" data-anime>${c.lien('accueil', { ancre: 'realisations', texte: c.t('accueil.avantApres.titre'), classe: 'lien-fleche' })}</p>
  </div>
</section>

${appelFinal(c)}
`;
