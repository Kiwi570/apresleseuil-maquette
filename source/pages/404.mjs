/* Page 404 aux couleurs du client : une porte qui ne mène nulle part. */
import { html } from '../../outils/gabarit.mjs';
import { contour } from '../gabarits/commun.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  <div class="conteneur introuvable-grille">
    <div class="introuvable-texte">
      <p class="surtitre surtitre--clair" data-anime>404</p>
      <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
      <p data-anime>${c.t('introuvable.texte')}</p>
      <p class="actions" data-anime>${c.lien('accueil', { classe: 'bouton bouton--or', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('contact', { classe: 'lien-fleche lien-fleche--clair', texte: c.t('introuvable.contact') })}</p>
      <p class="info-cle" data-info-cle>${c.site.contact.telephone}</p>
    </div>
    <div class="introuvable-image cadre-arche" data-iris-centre>
      ${contour('', 'data-fx="trace"')}
      ${c.media({ nom: 'grok/page-404', alt: c.donnees.images['grok/page-404']?.alt || '', classe: 'arche-cadre', priorite: true, sizes: '(max-width: 760px) 64vw, 32vw', attrs: 'data-effet="porte"' })}
    </div>
  </div>
</section>
`;
