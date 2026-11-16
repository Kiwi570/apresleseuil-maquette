/* Professionnels : un très grand titre, puis un bandeau d'image qui s'élargit au défilement ; quatre axes,
   quatre formats, « Sortir du cadre » avec la vraie Villa. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/commun.mjs';
import { icone } from '../gabarits/icones.mjs';

export const page = { cle: 'professionnels', fichier: 'professionnels', imagePartage: 'grok/pros-table-1280.webp' };

const ICONES = { a1: 'boussole', a2: 'equipe', a3: 'chemin', a4: 'arbre' };

export default (c) => html`
<section class="pro-ouverture" id="debut">
  <div class="conteneur pro-tete">
    <p class="surtitre" data-anime="gsap">${c.t('professionnels.surtitre')}</p>
    <h1 class="pro-titre"><span class="ligne-masque"><span class="titre-ligne">${c.t('professionnels.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne"><em>${c.t('professionnels.titre2')}</em></span></span></h1>
    <div class="pro-colonne">
      <p class="pro-intro masque-ecran-bas masque-petit-tel" data-anime="gsap">${c.t('professionnels.texte')}</p>
      <p class="actions" data-anime="gsap"><a class="bouton" href="${c.url('contact', 'rendez-vous', 'sujet=entreprise')}" data-libelle="${c.libelle('contact')}" data-action-principale data-survol="magnetique">${c.t('professionnels.action')}</a> <span class="info-cle" data-info-cle>${c.t('professionnels.info')}</span></p>
    </div>
  </div>
  <div class="pro-bande-cadre">
    ${c.media({ nom: 'grok/pros-table', alt: c.donnees.images['grok/pros-table']?.alt || '', cadrage: '50% 60%', priorite: true, classe: 'pro-bande', sizes: '100vw', attrs: 'data-effet="bandeau" data-iris-centre' })}
  </div>
</section>

<section class="pro-intro-bloc" id="collectif">
  <div class="conteneur pro-intro-grille">
    <h2 data-anime="lignes">${c.t('professionnels.intro.titre')}</h2>
    <div>
      ${icone('arbre', 'pro-intro-icone', 'data-fx="trace"')}
      <p class="grand-texte" data-anime="mots">${c.t('professionnels.intro.texte')}</p>
    </div>
  </div>
</section>

<section class="axes fond-sable" id="axes">
  <div class="conteneur">
    <div class="axes-tete">
      <h2 data-anime="lignes">${c.t('professionnels.axes.titre')}</h2>
      ${c.media({ nom: 'grok/pros-ouverture', alt: c.donnees.images['grok/pros-ouverture']?.alt || '', cadrage: '40% 55%', classe: 'axes-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-anime="rideau"' })}
    </div>
    <ul class="axes-grille" data-anime="cascade">
      ${c.donnees.axes.map((a) => html`<li class="axe">
        <span class="trois-icone">${icone(ICONES[a.cle])}</span>
        <h3>${c.t('professionnels.axes.' + a.cle)}</h3>
        <ul class="liste-or">${a.items.map((x) => html`<li>${x}</li>`)}</ul>
      </li>`)}
    </ul>
  </div>
</section>

<section class="formats" id="formats">
  <div class="conteneur formats-grille">
    <div>
      <h2 data-anime="lignes">${c.t('professionnels.formats.titre')}</h2>
      <p data-anime>${c.t('professionnels.formats.texte')}</p>
    </div>
    <ol class="formats-liste" data-anime="cascade">
      ${['f1', 'f2', 'f3', 'f4'].map((k, i) => html`<li><span class="etape-num">${i + 1}</span><span>${c.t('professionnels.formats.' + k)}</span></li>`)}
    </ol>
  </div>
</section>

<section class="cadre fond-sable" id="sortir-du-cadre">
  <div class="conteneur cadre-grille">
    <div class="cadre-texte">
      <h2 data-anime="lignes">${c.t('professionnels.cadre.titre')}</h2>
      <p data-anime>${c.t('professionnels.cadre.texte')}</p>
      <p class="cadre-formats" data-anime>${c.t('professionnels.cadre.formats')}</p>
      <p data-anime><a class="bouton" href="${c.url('contact', 'rendez-vous', 'sujet=entreprise')}" data-libelle="${c.libelle('contact')}">${c.t('professionnels.cadre.action')}</a></p>
    </div>
    <div class="villa-image">
      ${c.media({ nom: 'villa', alt: c.donnees.images.villa.alt, cadrage: '40% 60%', classe: 'villa-media', sizes: '(max-width: 760px) 72vw, 44vw', attrs: 'data-effet="arche"' })}
    </div>
  </div>
</section>

${appelFinal(c)}
`;
