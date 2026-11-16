# Rapport d’audit

Projet : `apresleseuil-maquette` · 16/11/2026 23:40:55 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261116-221816-complet` · version ?v=2
- Échecs : **3**
- À regarder : **29**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (4), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (8), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — section#situations > div.conteneur.situations-fin:nth-of-type(2) > p.situations-question:nth-of-type(2) > a.lien-fleche « Et si nous commencions simplement par en parler ? » — 415 × 26 px _(844×390 normal, 768×1024 normal, 1024×768 normal, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +3)_

### image non chargée (1)

- **image non chargée** — `/a-propos` — section#realisations > div.visionneuse:nth-of-type(2) > figure.visionneuse-cadre > img _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### débordement horizontal (1)

- **débordement horizontal** — `/a-propos` — page large de 386 px — largeurs : 320 à 780 px (24 largeurs) _(balayage 320–1920 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (3)

- **section sans visuel** — `/` — section#etapes « Comment ça se passe Faisons connaissance Un premie » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/a-propos` — section#parcours « Parcours et certifications Professeure des écoles, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/professionnels` — section#formats « Un accompagnement sur mesure Après un premier écha » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (18)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-porte.cadre-arche:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#seuil > div.seuil-collant > figure.media.seuil-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(1) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(2) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(3) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(4) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(5) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#professionnels > div.pros-photo:nth-of-type(1) > figure.media.pros-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — div.conteneur.introuvable-grille > div.introuvable-image.cadre-arche:nth-of-type(2) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.ct-grille > div.ct-fenetre:nth-of-type(2) > figure.media.ct-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — section#debut > div.p-bande-cadre:nth-of-type(1) > figure.media.p-bande > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.acc-grille:nth-of-type(1) > div.acc-image.cadre-arche:nth-of-type(1) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.acc-grille:nth-of-type(1) > div.acc-image:nth-of-type(2) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.place-grille > div.place-image:nth-of-type(2) > figure.media.place-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.cap-grille > div.cap-image:nth-of-type(1) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur > div.ateliers-tete > figure.media.ateliers-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/professionnels` — section#debut > div.pro-bande-cadre:nth-of-type(2) > figure.media.pro-bande > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/professionnels` — div.conteneur > div.axes-tete > figure.media.axes-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/particuliers` — à 62 ms (différence 54 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 77 ms (différence 43 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/particuliers` — écran différent à la même position après rechargement (4.0 %), voir comparaisons/rechargement-particuliers-*.png _(1366×768)_

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

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 43 min de travail pour 60 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2871 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2816 ms depuis le premier octet
- film de l'ouverture /a-propos 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2727 ms depuis le premier octet
- Ouverture /particuliers (1366×768) : 2888 ms depuis le premier octet
- Ouverture /professionnels (1366×768) : 2700 ms depuis le premier octet
- Ouverture / (390×844) : 2815 ms depuis le premier octet
- Ouverture /a-propos (390×844) : 2745 ms depuis le premier octet
- Ouverture /contact (390×844) : 2682 ms depuis le premier octet
- Ouverture /particuliers (390×844) : 2892 ms depuis le premier octet
- Ouverture /professionnels (390×844) : 2688 ms depuis le premier octet
- bords de l’écran /particuliers 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 460 images d’intro, 17 de voile et 128 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /particuliers : aucune section épinglée ou plein écran.
- Tient dans l'écran /professionnels : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 487, tâche la plus longue 0 ms
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 254, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 137, tâche la plus longue 0 ms
- Fluidité /particuliers 1366×768 (molette) : 0 % d'images lentes sur 417, tâche la plus longue 0 ms
- Fluidité /professionnels 1366×768 (molette) : 0 % d'images lentes sur 245, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1378, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /particuliers 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /professionnels 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.57 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /particuliers : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /professionnels : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/a-propos --seulement=fichiers,mesures
```
