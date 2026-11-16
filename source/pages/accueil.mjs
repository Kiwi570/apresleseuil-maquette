/* Accueil : l'arche du logo devient la page. Ouverture bleu de porte, situations qui s'éclairent, arche qui s'ouvre
   en plein écran, accompagnements en arches, avant / après, Christel, étapes, professionnels, Villa, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { contour, appelFinal } from '../gabarits/commun.mjs';
import { porte, icone } from '../gabarits/icones.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-porte-800.webp' };

const cartes = [
  { cle: 'depart', image: 'grok/carte-depart', groupe: 'lieu', ancre: 'depart' },
  { cle: 'chezsoi', image: 'grok/carte-chezsoi', groupe: 'lieu', ancre: 'chez-soi' },
  { cle: 'place', image: 'grok/carte-place', groupe: 'lieu', ancre: 'faire-de-la-place' },
  { cle: 'cap', image: 'grok/carte-cap', groupe: 'passage', ancre: 'retrouver-un-cap' },
  { cle: 'ateliers', image: 'grok/carte-atelier', groupe: 'passage', ancre: 'ateliers' },
];

const paires = [
  { cle: 'dressing', avant: 'dressing-avant', apres: 'dressing-apres' },
  { cle: 'buffet', avant: 'buffet-avant', apres: 'buffet-apres' },
  { cle: 'bahut', avant: 'bahut-avant', apres: 'bahut-apres' },
];
const img = (c, nom, alt, sizes, cls = '') => {
  const d = c.donnees.images[nom] || {};
  const ws = d.largeurs || [480, 800];
  return html`<img class="${cls}" src="/assets/images/${nom}-${ws[ws.length - 1]}.webp" srcset="${ws.map((w) => `/assets/images/${nom}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}" width="800" height="800" alt="${alt}" loading="lazy" decoding="async">`;
};

export default (c) => html`
<section class="hero ecran" id="debut">
  <div class="hero-texte">
    <p class="surtitre surtitre--clair" data-anime="gsap">${c.t('commun.lieu')}</p>
    <h1 class="hero-titre"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('accueil.hero.titre2')}</em></span></span></h1>
    <p class="hero-intro masque-ecran-tres-bas masque-petit-tel" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      <a class="bouton bouton--or" href="${c.url('contact', 'rendez-vous')}" data-libelle="${c.libelle('contact')}" data-action-principale data-survol="magnetique">${c.t('accueil.hero.action')}</a>
      <a class="lien-fleche lien-fleche--clair" href="#accompagnements" data-sans-transition>${c.t('accueil.hero.action2')}</a>
    </div>
    <p class="hero-info" data-info-cle data-anime="gsap">${c.t('accueil.hero.info')}</p>
  </div>
  <div class="hero-porte cadre-arche" data-effet="porte">
    ${contour('hero-contour', '', true)}
    ${c.media({ nom: 'grok/accueil-porte', alt: c.s('accueil.hero.alt'), cadrage: '50% 55%', priorite: true, classe: 'hero-media arche-cadre', sizes: '(max-width: 760px) 70vw, 34vw', attrs: 'data-iris-centre' })}
  </div>
</section>

<section class="situations" id="situations">
  <div class="conteneur situations-grille">
    <div class="situations-tete">
      ${porte('situations-porte', 'data-fx="trace"')}
      <h2 data-anime="lignes">${c.t('accueil.situations.titre')}</h2>
    </div>
    <ol class="situations-liste">
      ${['s1', 's2', 's3', 's4', 's5'].map((k) => html`<li class="situation" data-effet="eclaire">${porte('situation-porte')}<span>${c.t('accueil.situations.' + k)}</span></li>`)}
    </ol>
  </div>
  <div class="conteneur situations-fin">
    <p class="situations-conclusion" data-anime="lignes">${c.t('accueil.situations.conclusion')}</p>
    <p class="situations-question" data-anime>${c.lien('contact', { ancre: 'rendez-vous', texte: c.t('accueil.situations.question'), classe: 'lien-fleche' })}</p>
  </div>
</section>

<section class="seuil" id="seuil" data-scene data-entete-cache>
  <div class="seuil-collant" data-collant data-plein-ecran>
    ${c.media({ nom: 'grok/accueil-seuil', alt: c.s('accueil.seuil.alt'), cadrage: '50% 50%', classe: 'seuil-media', sizes: '100vw', attrs: 'data-effet="seuil"' })}
    <p class="seuil-mots" aria-hidden="true"><span class="seuil-mot" data-cote="g">${c.t('accueil.seuil.mot1')}</span><span class="seuil-mot" data-cote="d"><em>${c.t('accueil.seuil.mot2')}</em></span></p>
    <h2 class="visuellement-cache">${c.t('accueil.seuil.mot1')} ${c.t('accueil.seuil.mot2')}</h2>
    <p class="seuil-apres">${c.t('accueil.seuil.apres')}</p>
  </div>
</section>

<section class="accompagnements fond-sable" id="accompagnements">
  <div class="conteneur">
    <div class="section-tete">
      <h2 data-anime="lignes">${c.t('accueil.accompagnements.titre')}</h2>
      <p data-anime>${c.t('accueil.accompagnements.texte')}</p>
    </div>
    <div class="groupes" aria-hidden="true">
      <p class="groupe groupe--lieu"><span>${c.t('accueil.accompagnements.lieu')}</span><small>${c.t('accueil.accompagnements.lieuSous')}</small></p>
      <p class="groupe groupe--passage"><span>${c.t('accueil.accompagnements.passage')}</span><small>${c.t('accueil.accompagnements.passageSous')}</small></p>
    </div>
  </div>
  <div class="cartes-piste" tabindex="0" role="region" aria-label="${c.s('accueil.accompagnements.titre')}">
    <ul class="cartes" data-anime="cascade">
      ${cartes.map((k) => html`<li class="carte-arche carte-arche--${k.groupe}">
        <a href="${c.url('particuliers', k.ancre)}" data-libelle="${c.libelle('particuliers')}">
          ${c.media({ nom: k.image, alt: '', classe: 'arche-cadre carte-media', sizes: '(max-width: 760px) 62vw, 20vw', attrs: 'data-effet="arche"' })}
          <span class="carte-groupe">${c.t('accueil.accompagnements.' + k.groupe)}</span>
          <span class="carte-titre">${c.t(`particuliers.${k.cle}.titre`)}</span>
          <span class="carte-sous">${c.t(`particuliers.${k.cle}.sous`)}</span>
          <span class="carte-voir">${c.t('accueil.accompagnements.voir')}</span>
        </a>
      </li>`)}
    </ul>
  </div>
  <p class="conteneur cartes-pros" data-anime>${c.t('accueil.accompagnements.pros')} ${c.lien('professionnels', { texte: c.t('accueil.accompagnements.prosLien'), classe: 'lien-fleche' })}</p>
</section>

<section class="ava-section" id="realisations">
  <div class="conteneur ava-grille">
    <div class="ava-texte">
      <p class="surtitre" data-anime>${c.t('accueil.avantApres.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.avantApres.titre')}</h2>
      <p data-anime>${c.t('accueil.avantApres.texte')}</p>
      <p class="ava-consigne" data-anime><span class="consigne-souris">${c.t('accueil.avantApres.consigne')}</span><span class="consigne-doigt">${c.t('accueil.avantApres.consigneTactile')}</span></p>
      <p data-anime>${c.lien('a-propos', { ancre: 'realisations', texte: c.t('accueil.avantApres.lien'), classe: 'lien-fleche' })}</p>
    </div>
    <div class="ava" data-module="avant-apres" data-mode="reglet" data-onglets data-onglets-libelle="${c.s('accueil.avantApres.onglets')}">
      <div class="ava__onglets" data-ava-onglets></div>
      <div class="ava__paires">
        ${paires.map((p) => html`<figure class="ava__paire" data-titre="${c.s('accueil.avantApres.' + p.cle)}">
          <div class="ava__cadre" style="--ratio: 1 / 1" data-effet="avant-apres">
            <div class="ava__vue ava__vue--avant">${img(c, p.avant, c.s('accueil.avantApres.avant') + ' : ' + c.donnees.images[p.avant].alt, '(max-width: 760px) 90vw, 40vw')}<span class="ava__etiquette">${c.t('accueil.avantApres.avant')}</span></div>
            <div class="ava__vue ava__vue--apres">${img(c, p.apres, c.s('accueil.avantApres.apres') + ' : ' + c.donnees.images[p.apres].alt, '(max-width: 760px) 90vw, 40vw')}<span class="ava__etiquette">${c.t('accueil.avantApres.apres')}</span></div>
          </div>
          <figcaption class="ava__legende"><b>${c.t('accueil.avantApres.' + p.cle)}</b><span>${c.t('accueil.avantApres.' + p.cle + 'Legende')}</span></figcaption>
        </figure>`)}
      </div>
    </div>
  </div>
</section>

<section class="christel fond-sable" id="christel">
  <div class="conteneur christel-grille">
    <div class="christel-portrait cadre-arche">
      ${contour('', 'data-fx="trace"')}
      ${c.media({ nom: 'christel', alt: c.donnees.images.christel.alt, cadrage: '50% 30%', classe: 'arche-cadre christel-media', sizes: '(max-width: 760px) 72vw, 30vw', attrs: 'data-effet="arche"' })}
    </div>
    <div class="christel-texte">
      <p class="surtitre" data-anime>${c.t('accueil.christel.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.christel.titre')}</h2>
      <p data-anime>${c.t('accueil.christel.texte1')}</p>
      <p data-anime>${c.t('accueil.christel.texte2')}</p>
      <p class="signature" data-anime>${c.t('accueil.christel.signature')}</p>
      <ul class="parcours-court" data-anime="cascade">
        ${['p1', 'p2', 'p3', 'p4'].map((k) => html`<li>${c.t('apropos.parcours.' + k)}${k === 'p3' || k === 'p4' ? html` <small>(${c.t('apropos.parcours.' + k + 'e')})</small>` : ''}</li>`)}
      </ul>
      <p data-anime>${c.lien('a-propos', { texte: c.t('accueil.christel.action'), classe: 'bouton bouton--contour' })}</p>
    </div>
  </div>
</section>

<section class="etapes" id="etapes">
  <div class="conteneur">
    <h2 class="etapes-titre" data-anime="lignes">${c.t('accueil.etapes.titre')}</h2>
    <div class="etapes-scene">
      <svg class="etapes-chemin" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" data-fx="trace" data-visuel><path d="M10 90 C 200 20, 330 20, 420 60 S 700 110, 800 60 S 1050 10, 1190 40"/></svg>
      <ol class="etapes-liste" data-anime="cascade">
        ${[['e1', 'echange'], ['e2', 'boussole'], ['e3', 'chemin']].map(([k, ic], i) => html`<li class="etape">
          <span class="etape-icone">${icone(ic)}</span>
          <span class="etape-num">${i + 1}</span>
          <h3>${c.t(`accueil.etapes.${k}t`)}</h3>
          <p>${c.t('accueil.etapes.' + k)}</p>
        </li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="pros-bande fond-sable" id="professionnels">
  <div class="conteneur pros-grille">
    ${c.media({ nom: 'grok/pros-table', alt: c.donnees.images['grok/pros-table']?.alt || '', cadrage: '50% 55%', classe: 'pros-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe"' })}
    <div class="pros-texte">
      <p class="surtitre" data-anime>${c.t('accueil.pros.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.pros.titre')}</h2>
      <p data-anime>${c.t('accueil.pros.texte')}</p>
      <ul class="pastilles" data-anime="cascade">
        ${['a1', 'a2', 'a3', 'a4'].map((k) => html`<li>${c.t('professionnels.axes.' + k)}</li>`)}
      </ul>
      <p data-anime>${c.lien('professionnels', { texte: c.t('accueil.pros.action'), classe: 'bouton' })}</p>
    </div>
  </div>
</section>

<section class="villa" id="villa">
  <div class="conteneur villa-grille">
    <div class="villa-texte">
      <p class="surtitre" data-anime>${c.t('accueil.villa.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.villa.titre')}</h2>
      <p data-anime>${c.t('accueil.villa.texte')}</p>
      <p data-anime>${c.lien('particuliers', { ancre: 'villa', texte: c.t('accueil.villa.action'), classe: 'lien-fleche' })}</p>
    </div>
    <div class="villa-image">
      ${c.media({ nom: 'villa', alt: c.donnees.images.villa.alt, cadrage: '40% 60%', classe: 'villa-media', sizes: '(max-width: 760px) 68vw, 500px', attrs: 'data-effet="arche"' })}
      <span class="villa-badge">${c.t('accueil.villa.badge')}</span>
    </div>
  </div>
</section>

${appelFinal(c)}
`;
