# Rapport d’audit

Projet : `apresleseuil-maquette` · 16/11/2026 18:28:41 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261116-172222-complet-partiel` · version ?v=1
- Échecs : **3**
- À regarder : **21**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-162752-rapide-cible | rapide | /,/particuliers,/professionnels,/a-propos,/contact | toutes | 42 | 53 | 1 | échecs |
| 20261116-170050-standard | standard | toutes | toutes | 9 | 30 | 1 | échecs |
| **20261116-172222-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 3 | 21 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « Sans engagement · à distance ou dans le sud de l’A » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### texte coupé (2)

- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(2) > span.fpe__nom:nth-of-type(2) « Votre passage » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (18)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-porte.cadre-arche:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#seuil > div.seuil-collant > figure.media.seuil-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(1) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(2) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--lieu:nth-of-type(3) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(4) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-arche.carte-arche--passage:nth-of-type(5) > a > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#professionnels > div.conteneur.pros-grille > figure.media.pros-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — div.conteneur.introuvable-grille > div.introuvable-image.cadre-arche:nth-of-type(2) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.ct-grille > div.ct-fenetre:nth-of-type(2) > figure.media.ct-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — section#debut > div.p-bande-cadre:nth-of-type(1) > figure.media.p-bande > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.acc-grille:nth-of-type(1) > div.acc-image.cadre-arche:nth-of-type(1) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.acc-grille:nth-of-type(1) > div.acc-image:nth-of-type(2) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.place-grille > div.place-image:nth-of-type(2) > figure.media.place-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur.cap-grille > div.cap-image:nth-of-type(1) > figure.media.arche-cadre > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/particuliers` — div.conteneur > div.ateliers-tete > figure.media.ateliers-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/professionnels` — section#debut > div.pro-bande-cadre:nth-of-type(2) > figure.media.pro-bande > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/professionnels` — div.conteneur > div.axes-tete > figure.media.axes-media > figcaption.mention-ia « Illustration générée » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

### section sans visuel (3)

- **section sans visuel** — `/a-propos` — section#volets « Un parcours entre transmission, lieux et accompagn » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +15)_
- **section sans visuel** — `/a-propos` — section#parcours « Parcours et certifications Professeure des écoles, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/professionnels` — section#formats « Un accompagnement sur mesure Après un premier écha » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /particuliers : aucune section épinglée ou plein écran.
- Tient dans l'écran /professionnels : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact --seulement=fichiers,mesures
```
