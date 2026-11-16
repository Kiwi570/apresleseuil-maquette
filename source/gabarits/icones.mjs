/* Pictogrammes au trait doré, redessinés d'après ceux du site actuel (portes, maison, boussole, chemin, mains).
   Traits seuls (stroke) : ils se tracent au défilement avec data-fx="trace". */
import { html, brut } from '../../outils/gabarit.mjs';

const svg = (vb, corps, classe = '', attrs = '') => html`<svg class="icone ${classe}" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-visuel${brut(attrs ? ' ' + attrs : '')}>${brut(corps)}</svg>`;

/* Porte en arche dont le battant s'ouvre (classe .battant animée par site.js). */
export const porte = (classe = '', attrs = '') => svg('0 0 40 52', '<path d="M6 50V20a14 14 0 0 1 28 0v30"/><path d="M2 50h36"/><path class="battant" d="M10 49V21a10 10 0 0 1 10-10v0a10 10 0 0 1 10 10v28z"/><circle class="poignee" cx="26" cy="32" r="1.2"/>', classe, attrs);

export const icones = {
  echange: '<path d="M8 40c0-8 5-13 12-13"/><circle cx="16" cy="17" r="6"/><path d="M56 40c0-8-5-13-12-13"/><circle cx="48" cy="17" r="6"/><path d="M26 44c2-6 10-6 12 0"/><path d="M32 44V34"/><path d="M32 36c-3-1-5-4-5-7 3 0 5 2 5 5"/><path d="M32 33c2-2 5-3 7-2-1 3-4 4-7 4"/><path d="M4 52h56"/>',
  boussole: '<circle cx="32" cy="30" r="22"/><circle cx="32" cy="30" r="16"/><path d="M32 6v6M32 48v6M8 30h6M50 30h6"/><path d="M32 16l4 14-4 14-4-14z"/><path d="M18 30l14-4 14 4-14 4z"/>',
  chemin: '<circle cx="46" cy="14" r="7"/><path d="M6 54c14-2 18-8 12-14s2-12 20-14"/><path d="M18 56c10 0 16-4 13-10s5-10 17-12"/><path d="M10 24c0-4 2-8 4-10M14 14c2 2 2 6 0 10M10 24c2-1 4-1 4 0"/>',
  maison: '<path d="M6 30L32 8l26 22"/><path d="M12 25v29h40V25"/><path d="M27 54V40a5 5 0 0 1 10 0v14"/><path d="M46 14v-5h5v10"/>',
  fauteuil: '<path d="M14 40V26a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v14"/><path d="M10 32a4 4 0 0 1 4 4v6h36v-6a4 4 0 0 1 8 0v10H6V36a4 4 0 0 1 4-4z"/><path d="M14 46v6M50 46v6"/>',
  etagere: '<path d="M10 6v52M54 6v52M10 22h44M10 40h44M10 58h44"/><path d="M16 22v-8h12v8M34 22v-6h8v6"/><path d="M16 40c0-4 4-6 8-6s8 2 8 6M40 40v-9h8v9"/><path d="M16 58v-8h20v8"/>',
  plume: '<path d="M8 50c6-4 10-4 14 0M56 50c-6-4-10-4-14 0"/><path d="M10 50V38c0-4 3-6 6-6M54 50V38c0-4-3-6-6-6"/><path d="M42 6C30 10 24 22 26 38l4-2c-2-12 4-24 12-30z"/><path d="M28 30l6-4M30 22l6-3"/>',
  mains: '<path d="M14 54l8-12c2-3 6-3 8 0"/><path d="M50 54l-8-12c-2-3-6-3-8 0"/><path d="M32 40V12"/><path d="M32 22c-6 0-10-4-10-10 6 0 10 4 10 10zM32 30c6 0 10-4 10-10-6 0-10 4-10 10z"/>',
  equipe: '<circle cx="32" cy="18" r="8"/><path d="M18 50c0-10 6-18 14-18s14 8 14 18"/><circle cx="12" cy="24" r="6"/><path d="M2 50c0-8 4-14 10-14"/><circle cx="52" cy="24" r="6"/><path d="M62 50c0-8-4-14-10-14"/>',
  arbre: '<path d="M32 58V26"/><path d="M32 40l-10-8M32 34l9-7"/><path d="M32 26c-10 0-18-6-18-14 8-4 14-2 18 4 4-6 10-8 18-4 0 8-8 14-18 14z"/><path d="M24 58c2-4 6-6 8-6s6 2 8 6"/>',
  soleil: '<path d="M8 44h48"/><path d="M18 44a14 14 0 0 1 28 0"/><path d="M32 22v-8M17 29l-6-5M47 29l6-5M12 38l-7-2M52 38l7-2"/>',
};
export const icone = (nom, classe = '', attrs = '') => svg('0 0 64 64', icones[nom], classe, attrs);
