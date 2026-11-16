/* Après le Seuil : effets propres au client. Le socle gère l'ouverture, le voile (rideau), l'en-tête, le menu,
   les mesures et la bibliothèque d'effets (lignes, cascade, rideau, parallaxe, zoom, trace, vitesse…).
   Effets du plan (data-effet) : porte, eclaire, seuil, arche, avant-apres, soleil, enfilade, bandeau, boussole,
   portrait, fenetre. */
import { demarrer, quand, etat, boucle } from './socle/index.js?v=1';
import { versObjet } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ARCHE_FERMEE = 'inset(100% 0% 0% 0% round 9999px 9999px 6px 6px)';
const ARCHE_OUVERTE = 'inset(0% 0% 0% 0% round 9999px 9999px 6px 6px)';

/* ---------- Accueil : la porte de l'ouverture s'éloigne au défilement (effet « porte »). ---------- */
function porte() {
  const el = $('.hero-porte[data-effet="porte"]');
  if (!el || !window.ScrollTrigger) return;
  const img = el.querySelector('img');
  gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true } })
    .fromTo(el, { y: 0 }, { y: () => window.innerHeight * 0.12, ease: 'none' }, 0)
    .fromTo(img, { scale: 1 }, { scale: 1.12, ease: 'none' }, 0);
}

/* ---------- La lumière respire dans la porte de l'ouverture (bouge seule, s'arrête hors écran). ---------- */
function respire() {
  const pic = $('.hero-media picture');
  if (!pic) return;
  boucle(pic, (dt, t) => {
    const s = 1.035 + Math.sin(t * 0.7) * 0.035, x = Math.sin(t * 0.45) * 1.2;
    pic.style.transform = `translate3d(${x.toFixed(2)}%, 0, 0) scale(${s.toFixed(4)})`;
  });
}

/* ---------- Situations qui s'éclairent, leur petite porte s'ouvre (effet « eclaire »). ---------- */
function eclaire() {
  $$('.situation[data-effet="eclaire"]').forEach((li) => {
    const battant = li.querySelector('.battant');
    const tl = gsap.timeline({ paused: true })
      .fromTo(li, { opacity: 0.22 }, { opacity: 1, duration: 0.9, ease: 'power2.out' }, 0)
      .fromTo(battant, { scaleX: 1 }, { scaleX: 0.3, duration: 1.1, ease: 'power3.inOut' }, 0.1);
    /* Une phrase allumée le reste : jamais de texte pâle derrière soi. */
    window.ScrollTrigger.create({ trigger: li, start: 'top 72%', once: true, onEnter: () => tl.play() });
  });
}

/* ---------- L'arche qui s'ouvre jusqu'au plein écran (effet « seuil ») : cadre collant, aucune mesure au défilement. ---------- */
function seuil() {
  const section = $('.seuil');
  const media = section && section.querySelector('[data-effet="seuil"]');
  if (!media) return;
  const mots = $$('.seuil-mot', section), apres = $('.seuil-apres', section);
  /* Largeurs mesurées au rafraîchissement seulement. */
  let W = window.innerWidth, H = window.innerHeight;
  const etatS = { p: 0 };
  const dessiner = () => {
    const p = etatS.p, e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    const tel = W < 761, l = (tel ? 20 : 34) * (1 - e), t = (tel ? 22 : 18) * (1 - e);
    const largeur = W * (1 - 2 * l / 100);
    const r = Math.max(0, (largeur / 2) * (1 - Math.max(0, (e - 0.55) / 0.45)));
    media.style.clipPath = `inset(${t.toFixed(2)}% ${l.toFixed(2)}% 0% ${l.toFixed(2)}% round ${r.toFixed(1)}px ${r.toFixed(1)}px 0px 0px)`;
  };
  gsap.timeline({
    scrollTrigger: {
      trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
      onRefresh: () => { W = window.innerWidth; H = window.innerHeight; dessiner(); },
    },
  })
    .to(etatS, { p: 1, ease: 'none', duration: 1, onUpdate: dessiner }, 0)
    .fromTo(mots[0], { xPercent: 0 }, { xPercent: -40, ease: 'power1.in', duration: 0.8 }, 0)
    .fromTo(mots[1], { xPercent: 0 }, { xPercent: 40, ease: 'power1.in', duration: 0.8 }, 0)
    .fromTo(mots, { opacity: 1 }, { opacity: 0, duration: 0.16 }, 0.3)
    .fromTo(apres, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.18 }, 0.8);
  dessiner();
}

/* ---------- Photos en arche qui se révèlent de bas en haut (effet « arche »). ---------- */
function arches() {
  $$('[data-effet="arche"]').forEach((fig) => {
    const img = fig.querySelector('img');
    gsap.set(fig, { clipPath: ARCHE_FERMEE });
    gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 88%', once: true } })
      .to(fig, { clipPath: ARCHE_OUVERTE, duration: 1.4, ease: 'expo.out' }, 0)
      .fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0);
  });
}

/* ---------- Soleil qui se lève derrière l'appel final (effet « soleil »). ---------- */
function soleil() {
  $$('.fin-soleil[data-effet="soleil"]').forEach((s) => {
    gsap.timeline({ scrollTrigger: { trigger: s.closest('.fin'), start: 'top bottom', end: 'bottom bottom', scrub: 0.8, invalidateOnRefresh: true } })
      .fromTo(s, { yPercent: 18, rotation: -12 }, { yPercent: 0, rotation: 0, ease: 'none' }, 0);
  });
}

/* ---------- Boussole qui tourne au défilement (effet « boussole »). ---------- */
function boussoles() {
  $$('[data-effet="boussole"]').forEach((b) => {
    gsap.fromTo(b, { rotation: -60 }, { rotation: 60, ease: 'none', scrollTrigger: { trigger: b, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });
}

/* ---------- Particuliers : l'enfilade de portes s'ouvre comme deux battants, puis glisse (effet « enfilade »). ---------- */
function enfilade() {
  const fig = $('[data-effet="enfilade"]');
  if (!fig) return;
  gsap.fromTo(fig, { y: 0 }, { y: () => window.innerHeight * 0.06, ease: 'none', scrollTrigger: { trigger: '.p-ouverture', start: 'top top', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true } });
  gsap.fromTo(fig.querySelector('img'), { scale: 1 }, { scale: 1.1, ease: 'none', scrollTrigger: { trigger: '.p-ouverture', start: 'top top', end: 'bottom top', scrub: 0.6 } });
}

/* ---------- Professionnels : le bandeau s'élargit jusqu'aux bords (effet « bandeau »). ---------- */
function bandeau() {
  const fig = $('[data-effet="bandeau"]');
  if (!fig) return;
  gsap.fromTo(fig, { clipPath: 'inset(0% 9% 0% 9% round 24px)' }, { clipPath: 'inset(0% 0% 0% 0% round 6px)', ease: 'none',
    scrollTrigger: { trigger: fig, start: 'top 85%', end: 'bottom 45%', scrub: 0.6, invalidateOnRefresh: true } });
}

/* ---------- À propos et contact : portrait et fenêtre qui glissent et s'ouvrent au défilement. ---------- */
function portrait() {
  const fig = $('[data-effet="portrait"]');
  if (fig) gsap.fromTo(fig, { y: 0 }, { y: () => -window.innerHeight * 0.05, ease: 'none', scrollTrigger: { trigger: '.ap-ouverture', start: 'top top', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true } });
  const fen = $('[data-effet="fenetre"]');
  if (fen) gsap.fromTo(fen, { scale: 1 }, { scale: 0.94, ease: 'none', scrollTrigger: { trigger: '.ct-ouverture', start: 'top top', end: 'bottom top', scrub: 0.6 } });
}

/* ---------- 404 : la porte se referme doucement au défilement (effet « porte »). ---------- */
function porte404() {
  const fig = $('.introuvable [data-effet="porte"]');
  if (fig) gsap.fromTo(fig, { y: 0 }, { y: 30, ease: 'none', scrollTrigger: { trigger: '.introuvable', start: 'top top', end: 'bottom top', scrub: 0.6 } });
}

/* ---------- Modules de la bibliothèque : avant / après et formulaire par étapes. ---------- */
async function modules() {
  const ava = $('[data-module="avant-apres"]');
  if (ava) {
    const { init } = await import('./modules/avant-apres.js?v=1');
    init(ava, { mode: 'reglet', depart: 50 });
  }
  const fpe = $('[data-module="formulaire-par-etapes"]');
  if (fpe) {
    /* Choix déjà fait selon la page d'où l'on vient (?sujet=…). */
    const sujet = new URLSearchParams(location.search).get('sujet');
    if (sujet) {
      const c = fpe.querySelector(`input[name="sujet"][value="${CSS.escape(sujet)}"]`);
      if (c) c.checked = true;
      const profil = fpe.querySelector(`input[name="profil"][value="${sujet === 'entreprise' ? 'entreprise' : 'particulier'}"]`);
      if (profil) profil.checked = true;
    }
    const { init } = await import('./modules/formulaire-par-etapes.js?v=1');
    init(fpe, { animation: true });
  }
}

/* ---------- Intro : l'arche du logo se trace en or, le nom apparaît, puis l'arche glisse jusqu'à l'objet de la page
   ([data-iris-centre]) et le panneau s'ouvre en cercle depuis lui. Fin vers 2,5 s. ---------- */
function preparerTraits(svg) {
  const traits = svg ? [...svg.querySelectorAll('path')] : [];
  traits.forEach((p) => { p.setAttribute('pathLength', '1'); p.style.strokeDasharray = '1'; p.style.strokeDashoffset = '1'; });
  return traits;
}
const premierEcran = () => $$('main [data-anime="gsap"]');

function entreePremierEcran(tl, a) {
  const lignes = $$('.hero-ligne, .titre-ligne');
  const autres = premierEcran().filter((el) => !lignes.includes(el));
  if (lignes.length) tl.fromTo(lignes, { yPercent: 135, y: 0, opacity: 1 }, { yPercent: 0, y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, a);
  if (autres.length) tl.fromTo(autres, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out' }, a + 0.2);
  const contour = $('.hero-contour, .ap-contour');
  if (contour) {
    const t = preparerTraits(contour);
    tl.to(t, { strokeDashoffset: 0, duration: 0.9, stagger: 0.08, ease: 'power2.inOut' }, a - 0.15);
  }
  const sommaire = $$('.portes-sommaire li');
  if (sommaire.length) tl.fromTo(sommaire, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out' }, a + 0.15);
  const enf = $('[data-effet="enfilade"]');
  if (enf) tl.fromTo(enf, { clipPath: 'inset(0% 50% 0% 50% round 6px)' }, { clipPath: 'inset(0% 0% 0% 0% round 6px)', duration: 1.0, ease: 'power3.inOut' }, a - 0.25);
}

demarrer({
  preparer() {
    if (!gsap || !window.ScrollTrigger) return;
    porte(); respire(); eclaire(); seuil(); arches(); soleil(); boussoles(); enfilade(); bandeau(); portrait(); porte404();
    quand('pret', () => { modules().catch((e) => console.error('[modules]', e)); });
    /* Ombre de l'en-tête dès qu'on a quitté le haut de la page. */
    window.addEventListener('scroll', () => document.documentElement.classList.toggle('defile', window.scrollY > 8), { passive: true });
  },
  jouer() {
    if (!gsap) return null;
    const panneau = $('[data-ouverture]');
    const traits = preparerTraits(panneau && panneau.querySelector('.intro-arche'));
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to(traits.slice(0, 4), { strokeDashoffset: 0, duration: 0.9, stagger: 0.1, ease: 'power2.inOut' }, 0.05)
      .to(traits.slice(4), { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, 0.45)
      .fromTo('.ouverture-nom', { opacity: 0, letterSpacing: '.6em' }, { opacity: 1, letterSpacing: '.32em', duration: 0.8 }, 0.35)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 1.0);
    versObjet(tl, { a: 1.05, duree: 0.45, ouverture: 0.7 });
    entreePremierEcran(tl, 1.55);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set(premierEcran(), { clearProps: 'transform,opacity' });
    gsap.set($$('.hero-ligne, .titre-ligne'), { yPercent: 0, y: 0 });
    $$('.hero-contour path, .ap-contour path, .intro-arche path').forEach((p) => { p.style.strokeDashoffset = '0'; });
    const enf = $('[data-effet="enfilade"]');
    if (enf) gsap.set(enf, { clearProps: 'clipPath' });
    $$('[data-effet="arche"]').forEach((f) => gsap.set(f, { clipPath: ARCHE_OUVERTE }));
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ delay: 0.1 });
    entreePremierEcran(tl, 0);
  },
});

/* Pour l'audit et le débogage : l'état du socle. */
window.__seuil = etat;
