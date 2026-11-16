# Après le Seuil · maquette v2

Maquette du site d'Après le Seuil (Christel Ketterlin, Largentière, Ardèche) : accompagnement dans les transitions de vie et de lieux.
Adresse prévue : https://apresleseuil-maquette.vercel.app

Pages : accueil, Particuliers, Professionnels, À propos, Contact (prise de rendez-vous en 4 étapes), 404.
Direction « Le seuil doré » : ivoire et sable, bleu de porte, or ; Fraunces (titres) et Jost (texte) ; l'arche du logo redessinée en traits sert de motif (intro, photos en arche, appel final).

## Fiche : ce que le client doit fournir (à compléter)

- **Mentions légales** : à compléter (éditeur 45NordEst SASU, capital 1 000 €, RCS Aubenas 983 111 378, TVA FR64 983 111 378, siège 1794 route de Vente Cual, 07110 Largentière ; responsable de la publication Christel Ketterlin ; médiateur CM2C). **Hébergeur du site définitif** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse des conditions d'utilisation de Vercel, vérifiée le 16 novembre 2026).
- **Politique de confidentialité** : à compléter (pied de page ; ajouter aussi un lien sous le formulaire de rendez-vous quand elle existera).
- **Conditions générales de vente** et **code de déontologie** (PDF) : à fournir, ils étaient liés dans le pied du site actuel.
- **SIRET** : absent du site actuel, à compléter.
- **Réseaux sociaux** : adresses exactes des comptes Facebook, Instagram et TikTok (retirés du pied de page faute de liens).
- **Crédits des illustrations générées** : 12 images créées avec Grok (8 d'entre elles, floues car agrandies depuis des planches, peuvent être régénérées en pleine définition avec `_suivi/apresleseuil-images-grok-hd.docx`) (marquées « Illustration générée » sur le site, mention à garder sur le site définitif).

### Retiré ou remplacé faute d'information

- **Tarifs** (toutes les pages) : non affichés. Le site actuel se contredit : l'accueil annonce un tarif défini après le premier échange, mais la page de réservation cachée (/book-online, hors menu) affiche Coaching Transition 120 € (1 h 30), Organisation Espaces 100 €, Atelier Créatif 80 €, avec des textes de modèle Wix. À trancher avec la cliente.
- **Agenda des ateliers** (Particuliers) : vide sur le site actuel ; remplacé par « Les thèmes, les dates et les modalités changent avec les saisons : le programme est donné sur demande ».
- **Séjours / La Villa** : la page actuelle ne montre que le logo ; la maquette présente la Villa « en rénovation » avec la vraie photo de la terrasse. Dates d'ouverture, capacité et formules à fournir.
- **Avis et témoignages** : aucun sur le site actuel, aucun inventé.
- **Certifications** : MasterCoach ICI et coach RNCP niveau 6 affichées « en cours », comme sur le site actuel ; à mettre à jour une fois obtenues.

### Incohérences relevées sur le site actuel

- Deux adresses e-mail : apresleseuil@gmail.com (partout) et christel.ketterlin@gmail.com (fiche de service Wix). La maquette n'utilise que la première.
- « EPAHD » au lieu de « EHPAD », accents manquants dans plusieurs titres, « CVG » au lieu de « CGV », bouton « Log In » inutile, adresses de pages /blank-1, /blank-2…
- La praticienne n'était nommée que dans les mentions légales et les textes alternatifs : la maquette la nomme sur l'accueil et À propos.

## À la mise en ligne définitive

- Retirer `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`).
- Brancher le formulaire de rendez-vous (aujourd'hui simulé, rien n'est envoyé) et retirer la mention « Maquette » du pied de page.
- Remplacer « à compléter » du pied de page par de vrais liens vers les mentions légales et la politique de confidentialité.
- Garder la mention « Illustration générée » sur les images créées par IA.

## Travailler sur la maquette

- Textes : `donnees/textes/fr.json` ; pages : `source/pages/*.mjs` ; style : `assets/css/site.css` ; effets : `assets/js/site.js`.
- Générer les pages : `node outils/generer.mjs` (jamais de modification à la main des fichiers .html).
- Images : `plan-images.json`, puis le pipeline de la bibliothèque (`images/produire.mjs`, `images/partage.mjs`).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).
- Modules de la bibliothèque repris : `avant-apres` (réglet avant / après) et `formulaire-par-etapes` (rendez-vous), dans `assets/js/modules/`.
