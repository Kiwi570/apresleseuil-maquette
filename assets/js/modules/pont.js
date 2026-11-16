/* Pont entre les modules de la bibliothèque (avant-apres, formulaire-par-etapes) et le socle de la maquette :
   GSAP est déjà chargé par la page, le défilement et les mesures sont ceux du socle. Pas de mode calme. */
export async function pret() {
  return {
    gsap: window.gsap || null,
    ScrollTrigger: window.ScrollTrigger || null,
    lenis: null,
    get calme() { return false; },
    get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
    get telephone() { return innerWidth < 700; },
    rafraichir() { window.ScrollTrigger && window.ScrollTrigger.refresh(); },
  };
}
