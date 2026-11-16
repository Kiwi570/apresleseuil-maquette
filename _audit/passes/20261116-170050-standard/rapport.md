# Rapport d’audit

Projet : `apresleseuil-maquette` · 16/11/2026 18:19:07 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261116-170050-standard` · version ?v=1
- Échecs : **9**
- À regarder : **30**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (4), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-162752-rapide-cible | rapide | /,/particuliers,/professionnels,/a-propos,/contact | toutes | 42 | 53 | 1 | échecs |
| **20261116-170050-standard** (celle-ci) | standard | toutes | toutes | 9 | 30 | 1 | échecs |

## Échecs

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Des vies et des lieux » — avec h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne > em « en transition » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **textes qui se chevauchent** — `/a-propos` — div.ap-texte:nth-of-type(2) > h1.ap-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Accompagner les passages, » — avec h1.ap-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « autrement. » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/contact` — div.ct-texte:nth-of-type(1) > h1.ct-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Un premier échange, » — avec h1.ct-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « simplement. » _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/particuliers` — div.p-ouverture-texte > h1.p-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Accompagner » — avec h1.p-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « vos passages » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/professionnels` — div.conteneur.pro-tete:nth-of-type(1) > h1.pro-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Coaching » — avec h1.pro-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « d’entreprise » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/professionnels` — h1.pro-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « d’entreprise » — avec section#debut > div.conteneur.pro-tete:nth-of-type(1) > div.pro-colonne > p.pro-intro.masque-ecran-bas:nth-of-type(1) « Les entreprises traversent elles aussi des période » _(390×844 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl)_

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/particuliers` — div.acc-image:nth-of-type(2) > figure.media.arche-cadre > picture > img « Un coin salon baigné de lumière : lin, coussins et » — grok/carte-chezsoi (4/5, faible, 45 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/particuliers` — div.ateliers-tete > figure.media.ateliers-media > picture > img « Pinceaux, bol en céramique et carnet sur une table » — grok/carte-atelier (4/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/particuliers` — div.acc-image:nth-of-type(2) > figure.media.arche-cadre > picture > img « Un coin salon baigné de lumière : lin, coussins et » — grok/carte-chezsoi (4/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

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

### texte de contenu sous 13 px (ordinateur) (18)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-porte.cadre-arche:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#seuil > div.seuil-collant > figure.media.seuil-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(1) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(2) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(3) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(4) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(5) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#professionnels > div.conteneur.pros-grille > figure.media.pros-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — div.conteneur.introuvable-grille > div.introuvable-image.cadre-arche:nth-of-type(2) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.ct-grille > div.ct-fenetre:nth-of-type(2) > figure.media.ct-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — section#debut > div.p-bande-cadre:nth-of-type(1) > figure.media.p-bande > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.acc-grille:nth-of-type(1) > div.acc-image.cadre-arche:nth-of-type(1) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.acc-grille:nth-of-type(1) > div.acc-image:nth-of-type(2) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.place-grille > div.place-image:nth-of-type(2) > figure.media.place-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.cap-grille > div.cap-image:nth-of-type(1) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur > div.ateliers-tete > figure.media.ateliers-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/professionnels` — section#debut > div.pro-bande-cadre:nth-of-type(2) > figure.media.pro-bande > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/professionnels` — div.conteneur > div.axes-tete > figure.media.axes-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### section sans visuel (3)

- **section sans visuel** — `/a-propos` — section#volets « Un parcours entre transmission, lieux et accompagn » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/a-propos` — section#parcours « Parcours et certifications Professeure des écoles, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/professionnels` — section#formats « Un accompagnement sur mesure Après un premier écha » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/particuliers` — à 42 ms (différence 55 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/particuliers` — à 51 ms (différence 50 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 67 ms (différence 43 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

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
- Journal v1 : 5 étape(s) notée(s), 71 min de travail pour 115 min de budget, 43 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 9 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /a-propos, /contact, /particuliers, /professionnels.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2742 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2718 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2656 ms depuis le premier octet
- Ouverture /particuliers (1366×768) : 2787 ms depuis le premier octet
- Ouverture /professionnels (1366×768) : 2683 ms depuis le premier octet
- Ouverture / (390×844) : 2708 ms depuis le premier octet
- Ouverture /a-propos (390×844) : 2749 ms depuis le premier octet
- film de l'ouverture /a-propos 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2613 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /particuliers (390×844) : 2853 ms depuis le premier octet
- Ouverture /professionnels (390×844) : 2637 ms depuis le premier octet
- bords de l’écran /a-propos 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 500 images d’intro, 12 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /particuliers : aucune section épinglée ou plein écran.
- Tient dans l'écran /professionnels : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 475, tâche la plus longue 55 ms
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 279, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 137, tâche la plus longue 0 ms
- Fluidité /particuliers 1366×768 (molette) : 0 % d'images lentes sur 386, tâche la plus longue 0 ms
- Fluidité /professionnels 1366×768 (molette) : 0 % d'images lentes sur 250, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1383, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /particuliers 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /professionnels 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Vitesse / : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /particuliers : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /professionnels : 0.42 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/a-propos,/contact,/particuliers,/professionnels --seulement=fichiers,mesures
```
