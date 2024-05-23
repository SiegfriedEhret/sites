---
date: "2022-09-13T00:00:00.000Z"
updatedAt: "2022-09-13T19:47:13.293Z"
title: Le stack
description: Quelques détails sur l'extravagance technologique utilisée pour mes sites.
tags: []
image: >-
  ../../../public/assets/contentful/1hhfrXPLbw7UIdWoJUwZAM/e93e864db30b8101a2c36dee30b09385/l_estaque.jpg
imageDescription: Georges Braque - Paysage à l'Estaque
---

J'ai longtemps utilisé mon propre générateur de site statique pour mon site. D'abord réalisé en Node.js, je me suis ensuite tourné vers Crystal pour [la deuxième version](https://git.sr.ht/~siegfriedehret/beulogue). Ça fait maintenant plus d'un an que je suis passé à la troisième version, que j'ai gardée pour moi jusqu'à maintenant. Satisfait des derniers changements, voici donc venu le temps - des rires et des chants - du partage de ce qui est devenu la base de mon site en anglais ([ehret.me](https://ehret.me/)), avant d'être repris pour mon site en français ([sieg.fr/ied](https://sieg.fr/ied)).

Le code pour mes sites est disponible sur [git.sr.ht/~siegfriedehret/sites](https://git.sr.ht/~siegfriedehret/sites).

## De beulogue (Crystal) à beulogue (Svelte / SvelteKit)

J'ai commencé à m'amuser avec [Svelte](https://svelte.dev/) quasiment à ses débuts, et je suis vite tombé dans [Sapper](https://sapper.svelte.dev/); j'en ai même causé de à [Devoxx France en 2019](https://www.youtube.com/watch?v=VyUpXyQHaAs). Sapper est désormais hors jeu car remplacé par [SvelteKit](https://kit.svelte.dev/). Aujourd'hui c'est SvelteKit qui est derrière mes sites.

Au début je faisais beaucoup de copié-collé entre le site en anglais et celui en français. Je me suis donc attaqué au chantier de regrouper ce que je pouvais. J'utilise [Turborepo](https://turborepo.org/) et [pnpm](https://pnpm.io/) pour organiser mes deux sites ([ehretdotme](https://git.sr.ht/~siegfriedehret/sites/tree/main/item/apps/ehretdotme) et [siegdotfr](https://git.sr.ht/~siegfriedehret/sites/tree/main/item/apps/siegdotfr)) ainsi qu'[un paquet avec des composants Svelte](https://git.sr.ht/~siegfriedehret/sites/tree/main/item/packages/ui) et [un paquet avec des utilitaires](https://git.sr.ht/~siegfriedehret/sites/tree/main/item/packages/utils).

J'utilisais [PrismJS](https://prismjs.com/) pour la coloration des bouts de codes, et après m'être battu - et perdu - 2 fois contre [shiki](https://shiki.matsu.io/) pour des problèmes de performances, c'est maintenant [highlight.js](https://highlightjs.org/) qui est utilisé.

## Des fichiers dans le dépôt à Contentful

Pour des histoires de taille du paquet qui est déployé, j'ai abandonné les fichiers markdown et images associés dans le dépôt pour utiliser [Contentful](https://www.contentful.com/), un gestionnaire de contenu. La version payante est incroyablement chère - je ne suis pas la cible - et le plan gratuit est bien suffisant.

C'est surtout utile pour les images, car Contentful sert de CDN et l'API permet de retailler les images, pratique pour mon [Museum of Poorly Photographed Art](https://ehret.me/museum).

## De GitHub à SourceHut

J'ai souhaité m'éloigner de GitHub et j'ai choisi [sourcehut](https://sourcehut.org/), un service très minimaliste et léger.

## De AWS à Gandi

Depuis quelques mois, mes noms de domaines sont chez [Gandi](https://www.gandi.net/) et j'ai cloturé mon compte AWS. Ça fait du bien !

## De AWS à Vercel à Scalingo à Fly.io à... Vercel

J'utilisais [up](https://apex.sh/up/) (qui est un outil formidable) pour héberger mon site dans une lambda chez AWS. Souhaitant m'éloigner des services Amazon (aujourd'hui mes domaines sont chez [Gandi](https://www.gandi.net/)), j'ai tout déplacé chez [Vercel](https://vercel.com), mais c'est aussi AWS derrière. J'ai essayé de m'en échappé aussi.

J'ai bien aimé [Scalingo](https://scalingo.com/), mais j'ai trouvé ça un poil cher pour mes petites bidouilles. J'ai eu un truc bizarre et leur support en ligne a été super efficace. J'espère pouvoir travailler avec cette plateforme à nouveau.

[Fly.io](https://fly.io/) c'était sympa mais un poil plus bancal à cause de l'utilisation d'images de chez Heroku, et que ça change côté Heroku, ça pète. Je me demande d'ailleurs si ça aurait explosé aussi avec Scalingo.

Et donc retour à Vercel car même si c'est AWS derrière, c'est vraiment trop bien. Le seul point négatif c'est que le tarif Team (payant) est trop cher. Tant pis, le plan gratuit suffit bien.

Je déploie mes sites grâce aux services de «build» de sourcehut et [Vercel CLI](https://vercel.com/docs/cli). Les fichiers de déploiements sont [ici](https://git.sr.ht/~siegfriedehret/sites/tree/main/item/.builds).

Tester d'autres plateformes m'a aussi permis de résoudre beaucoup de problèmes de performance.

## Voili voilou !

Je m'arrête là, j'espère qu'il y avait quelques trucs intéressants (surtout la partie SvelteKit + Turborepo).

Enfin, on dirait plutôt « la stack » mais le gag avec l'illustration (le stack / l'Estaque) n'aurait pas fonctionné. L'image vient d'[ici](https://commons.wikimedia.org/wiki/File:Landscape_at_L%27Estaque.jpg).

Bisettes !
