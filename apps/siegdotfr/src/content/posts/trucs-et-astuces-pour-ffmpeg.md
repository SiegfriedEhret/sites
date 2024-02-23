---
date: '2018-01-01T00:00:00.000Z'
updatedAt: '2021-05-23T21:15:04.101Z'
title: Trucs et astuces pour FFmpeg
description: Voici quelques commandes pour FFmpeg qui m'ont été pratiques dernièrement.
tags:
  - tips
---
Voici quelques commandes pour [FFmpeg](https://ffmpeg.org/) qui m'ont été pratiques dernièrement.

La page d'aide avec tous les paramètres est [ic](https://ffmpeg.org/ffmpeg.html).

Un chouette outil avec FFmpeg derrière: [Handbrake](https://handbrake.fr/).

## Avoir des informations sur un fichier

```bash
ffmpeg -i video.mp4
```

Paramètres:

- `ffmpeg` est la commande ffmpeg :p
- `-i video.mp4` spécifie le fichier d'entrée

## Extraire la partie audio d'une vidéo

```bash
ffmpeg -i video.mp4 -vn -acodec copy audio.m4a
```

Paramètres:

- `-vn` désactive la partie vidéo
- `-acodec copy` permet de copier le flux audio sans le toucher
- `audio.m4a` spécifie le fichier de sortie

## Convertir un fichier audio dans un autre format

```bash
ffmpeg -i audio.m4a -acodec libmp3lame -ac 0 -ab 320k audio.mp3
```

Paramètres:

- `-acodec libmp3lame` permet d'utiliser la libraire lame pour la conversion en mp3 
- `-ac 2` spécifie le nombre de canaux
- `-ab 320k` spécifie le «débit binaire» (bitrate)

Bien entendu, la commande précédente et celle-ci peuvent être combinée pour faire l'extraction audio et la conversion en une seule étape.

## Recadrer une vidéo

```bash
ffmpeg -i video.mp4 -vf "crop=760:430:520:0" output.mp4
```

Paramètres:

- `-vf "crop=760:430:520:0"` applique un filtre sur la vidéo. Les valeurs pour le «crop» sont: `largeur:hauteur:gauche:droite`.

Pro-tip: utilisez `ffplay` pour prévisualiser la zone recadrée !

```bash
ffplay -i video.mp4 -vf "crop=760:430:520:0"
```

## Créer un gif à partir d'une vidéo

```bash
ffmpeg -i dauphin.mp4 -r 10 dauphin.gif
```

Paramètres:

- `-r 10` ajuste le nombre d'images par secondes (framerate).

## Redimensionner une vidéo

```bash
ffmpeg -i cut.mp4 -vf "scale=500:-1" -c:a copy resized.mp4
```

Paramètres:

- `-vf "scale=500:-1` définit la taille cible. ICi, on a une largeur de 500 pixels, et le -1 premet à ffmpeg de calculer automagiquement la hauteur.
- `-c:a copy` copie le flux audio. On peut utiliser `-an` pour ne pas le prendre en compte.

## Tourner une vidéo

```bash
ffmpeg -i video.mp4 -vfilters "rotate=90" -c:a copy out.mp4
```

Paramètres:

- `-vfilters "rotate=90"` définit l'angle de rotation.
- `-c:a copy` copie le flux audio. On peut utiliser `-an` pour ne pas le prendre en compte.
