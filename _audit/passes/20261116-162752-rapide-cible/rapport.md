# Rapport d’audit

Projet : `apresleseuil-maquette` · 16/11/2026 17:44:34 · 17 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/particuliers,/professionnels,/a-propos,/contact

## Résumé

- Statut : **42 échec(s)**
- Passe : `20261116-162752-rapide-cible` · version ?v=1
- Échecs : **42**
- À regarder : **53**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (2), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `a-propos.html` — fichier introuvable : /assets/partage/a-propos-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `particuliers.html` — fichier introuvable : /assets/partage/particuliers-fr.jpg
- **image de partage** — `professionnels.html` — fichier introuvable : /assets/partage/professionnels-fr.jpg

### texte coupé (15)

- **texte coupé** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Des vies et des lieux » — coupé par section#debut > div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) « Des vies et des lieux » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne > em « en transition » — coupé par section#debut > div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) « en transition » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/a-propos` — div.ap-texte:nth-of-type(2) > h1.ap-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Accompagner les passages, » — coupé par div.conteneur.ap-grille > div.ap-texte:nth-of-type(2) > h1.ap-titre > span.ligne-masque:nth-of-type(1) « Accompagner les passages, » _(1366×768 normal)_
- **texte coupé** — `/a-propos` — h1.ap-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « autrement. » — coupé par div.conteneur.ap-grille > div.ap-texte:nth-of-type(2) > h1.ap-titre > span.ligne-masque:nth-of-type(2) « autrement. » _(1366×768 normal)_
- **texte coupé** — `/contact` — div.ct-texte:nth-of-type(1) > h1.ct-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Un premier échange, » — coupé par div.conteneur.ct-grille > div.ct-texte:nth-of-type(1) > h1.ct-titre > span.ligne-masque:nth-of-type(1) « Un premier échange, » _(1366×768 normal)_
- **texte coupé** — `/contact` — h1.ct-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « simplement. » — coupé par div.conteneur.ct-grille > div.ct-texte:nth-of-type(1) > h1.ct-titre > span.ligne-masque:nth-of-type(2) « simplement. » _(1366×768 normal)_
- **texte coupé** — `/particuliers` — li:nth-of-type(1) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — coupé par ul > li:nth-of-type(1) > a > figure.media.arche-cadre « Illustration générée » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/particuliers` — li:nth-of-type(2) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — coupé par ul > li:nth-of-type(2) > a > figure.media.arche-cadre « Illustration générée » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/particuliers` — li:nth-of-type(3) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — coupé par ul > li:nth-of-type(3) > a > figure.media.arche-cadre « Illustration générée » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/particuliers` — li:nth-of-type(4) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — coupé par ul > li:nth-of-type(4) > a > figure.media.arche-cadre « Illustration générée » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/particuliers` — li:nth-of-type(5) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — coupé par ul > li:nth-of-type(5) > a > figure.media.arche-cadre « Illustration générée » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/particuliers` — div.p-ouverture-texte > h1.p-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Accompagner » — coupé par div.conteneur.p-ouverture-grille:nth-of-type(2) > div.p-ouverture-texte > h1.p-titre > span.ligne-masque:nth-of-type(1) « Accompagner » _(1366×768 normal)_
- **texte coupé** — `/particuliers` — h1.p-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « vos passages » — coupé par div.conteneur.p-ouverture-grille:nth-of-type(2) > div.p-ouverture-texte > h1.p-titre > span.ligne-masque:nth-of-type(2) « vos passages » _(1366×768 normal)_
- **texte coupé** — `/professionnels` — div.conteneur.pro-tete:nth-of-type(1) > h1.pro-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Coaching » — coupé par section#debut > div.conteneur.pro-tete:nth-of-type(1) > h1.pro-titre > span.ligne-masque:nth-of-type(1) « Coaching » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/professionnels` — h1.pro-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « d’entreprise » — coupé par section#debut > div.conteneur.pro-tete:nth-of-type(1) > h1.pro-titre > span.ligne-masque:nth-of-type(2) « d’entreprise » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Des vies et des lieux » — avec h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne > em « en transition » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/a-propos` — div.ap-texte:nth-of-type(2) > h1.ap-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Accompagner les passages, » — avec h1.ap-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « autrement. » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs, 844×390 normal)_
- **textes qui se chevauchent** — `/contact` — div.ct-texte:nth-of-type(1) > h1.ct-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Un premier échange, » — avec h1.ct-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « simplement. » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/particuliers` — div.p-ouverture-texte > h1.p-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Accompagner » — avec h1.p-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « vos passages » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/professionnels` — div.conteneur.pro-tete:nth-of-type(1) > h1.pro-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Coaching » — avec h1.pro-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « d’entreprise » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/professionnels` — h1.pro-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « d’entreprise » — avec section#debut > div.conteneur.pro-tete:nth-of-type(1) > div.pro-colonne > p.pro-intro.masque-ecran-bas:nth-of-type(1) « Les entreprises traversent elles aussi des période » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — section#seuil > div.seuil-collant > p.seuil-mots:nth-of-type(1) > span.seuil-mot:nth-of-type(1) « Franchir » — 1.00:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — div.seuil-collant > p.seuil-mots:nth-of-type(1) > span.seuil-mot:nth-of-type(2) > em « le seuil » — 1.77:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — div.villa-image:nth-of-type(2) > figure.media.villa-media > picture > img « La terrasse de la Villa Après le Seuil au coucher  » — villa (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.villa-image:nth-of-type(2) > figure.media.villa-media > picture > img « La terrasse de la Villa Après le Seuil au coucher  » — villa (4/5, faible, 42 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > div.hero-actions > a.bouton.bouton--or:nth-of-type(1) « Premier échange offert » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/a-propos` — div.conteneur.ap-grille > div.ap-texte:nth-of-type(2) > p.actions:nth-of-type(4) > a.bouton « Premier échange offert » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.ct-grille > div.ct-texte:nth-of-type(1) > p.actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Prendre rendez-vous » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/particuliers` — div.conteneur.p-ouverture-grille:nth-of-type(2) > div.p-ouverture-texte > p.actions:nth-of-type(3) > a.bouton « Premier échange offert » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « Sans engagement · à distance ou dans le sud de l’A » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/a-propos` — div.conteneur.ap-grille > div.ap-texte:nth-of-type(2) > p.actions:nth-of-type(4) > span.info-cle « À distance ou dans le sud de l’Ardèche » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/particuliers` — section#debut > div.conteneur.p-ouverture-grille:nth-of-type(2) > div.p-ouverture-texte > p.info-cle:nth-of-type(4) « Premier échange offert et sans engagement » _(320×568 sansJs)_

### accessibilité (axe) : link-name (5)

- **accessibilité (axe) : link-name** — `/` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/a-propos` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/contact` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/particuliers` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/professionnels` — .entete-logo — Links must have discernible text _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (39)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « LARGENTIÈRE · ARDÈCHE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-porte.cadre-arche:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#seuil > div.seuil-collant > figure.media.seuil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(1) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(2) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(3) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(4) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(5) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#realisations > div.conteneur.ava-grille > div.ava-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « RÉALISATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#christel > div.conteneur.christel-grille > div.christel-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « QUI VOUS ACCOMPAGNE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#professionnels > div.conteneur.pros-grille > figure.media.pros-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#professionnels > div.conteneur.pros-grille > div.pros-texte > p.surtitre:nth-of-type(1) « PROFESSIONNELS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#villa > div.conteneur.villa-grille > div.villa-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA VILLA APRÈS LE SEUIL » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#debut > div.conteneur.ap-grille > div.ap-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « CHRISTEL KETTERLIN » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — ul.mosaique.fx-fini > li.mosaique-item.mosaique-item--1:nth-of-type(1) > p > span.mosaique-cat « TRANSFORMER UN LIEU » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — ul.mosaique.fx-fini > li.mosaique-item.mosaique-item--2:nth-of-type(2) > p > span.mosaique-cat « TRANSFORMER UN LIEU » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — ul.mosaique.fx-fini > li.mosaique-item.mosaique-item--3:nth-of-type(3) > p > span.mosaique-cat « TRANSFORMER UN LIEU » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — ul.mosaique.fx-fini > li.mosaique-item.mosaique-item--4:nth-of-type(4) > p > span.mosaique-cat « RECYCLER ET RÉNOVER » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.ct-grille > div.ct-fenetre:nth-of-type(2) > figure.media.ct-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#rendez-vous > div.conteneur.fpe__cadre > div.fpe__tete:nth-of-type(1) > p.fpe__note:nth-of-type(2) « Maquette : les formulaires sont simulés, rien n’es » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOUS ÊTES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — section#debut > div.p-bande-cadre:nth-of-type(1) > figure.media.p-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — section#debut > div.conteneur.p-ouverture-grille:nth-of-type(2) > div.p-ouverture-texte > p.surtitre:nth-of-type(1) « PARTICULIERS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — li:nth-of-type(1) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — li:nth-of-type(2) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 14 autres (rapport.json)

### section sans visuel (3)

- **section sans visuel** — `/a-propos` — section#volets « Un parcours entre transmission, lieux et accompagn » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/a-propos` — section#parcours « Parcours et certifications Professeure des écoles, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs, 844×390 normal)_
- **section sans visuel** — `/professionnels` — section#formats « Un accompagnement sur mesure Après un premier écha » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/a-propos` — li.mosaique-item.mosaique-item--2:nth-of-type(2) > figure.media.mosaique-media > picture > img « Cuisine rénovée : façades claires, crédence en car » — real-cuisine (3/5, 48 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 81 ms (différence 47 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 62 ms (différence 44 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/particuliers` — à 75 ms (différence 53 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/particuliers` — à 53 ms (différence 44 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 15 min de travail pour 30 min de budget, 3 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /, /a-propos, /contact, /particuliers, /professionnels.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2896 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2900 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2866 ms depuis le premier octet
- Ouverture /particuliers (1366×768) : 2893 ms depuis le premier octet
- film de l'ouverture /particuliers 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /professionnels (1366×768) : 2896 ms depuis le premier octet
- Ouverture / (390×844) : 2907 ms depuis le premier octet
- Ouverture /a-propos (390×844) : 2909 ms depuis le premier octet
- Ouverture /contact (390×844) : 2895 ms depuis le premier octet
- Ouverture /particuliers (390×844) : 2895 ms depuis le premier octet
- Ouverture /professionnels (390×844) : 2898 ms depuis le premier octet
- film de l'ouverture /professionnels 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 498 images d’intro, 5 de voile et 112 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /particuliers : aucune section épinglée ou plein écran.
- Tient dans l'écran /professionnels : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 505, tâche la plus longue 0 ms
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 218, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 188, tâche la plus longue 0 ms
- Fluidité /particuliers 1366×768 (molette) : 0 % d'images lentes sur 431, tâche la plus longue 0 ms
- Fluidité /professionnels 1366×768 (molette) : 0 % d'images lentes sur 229, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /particuliers 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /professionnels 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse / : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /particuliers : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /professionnels : 0.43 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
