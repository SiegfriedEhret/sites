---
date: '2018-01-01T00:00:00.000Z'
updatedAt: '2021-05-23T21:15:16.572Z'
title: FFmpeg tips
description: Here are a few commands for FFmpeg that were useful for me.
tags:
  - tips
---
Here are a few commands for [FFmpeg](https://ffmpeg.org/) that were useful for me.

The help page for all parameters is [here](https://ffmpeg.org/ffmpeg.html).

A nice tool that uses FFmpeg is [Handbrake](https://handbrake.fr/).

## Get some info about a file

```bash
ffmpeg -i video.mp4
```

Parameters:

- `ffmpeg` is the ffmpeg command :p
- `-i video.mp4` specifies the input file

## Extract the audio part of a video

```bash
ffmpeg -i video.mp4 -vn -acodec copy audio.m4a
```

Parameters:

- `-vn` disables the video
- `-acodec copy` allows to copy the audio stream without touching it
- `audio.m4a` is the output file

## Convert an audio file to another format

```bash
ffmpeg -i audio.m4a -acodec libmp3lame -ac 0 -ab 320k audio.mp3
```

Parameters:

- `-acodec libmp3lame` allows to use the lame mp3 library for conversion 
- `-ac 2` sets the number of channels 
- `-ab 320k` sets the bitrate

Of course, the previous command and this one can be merged for a 1 step audio extraction & conversion.

## Crop a video

```bash
ffmpeg -i video.mp4 -vf "crop=760:430:520:0" output.mp4
```

Parameters:

- `-vf "crop=760:430:520:0"` applies a filter on the video. The values for the "crop" are: `width:height:left:top`.

Pro-tip: use `ffplay` to preview the cropped area !

```bash
ffplay -i video.mp4 -vf "crop=760:430:520:0"
```

## Create a gif from a video

```bash
ffmpeg -i dauphin.mp4 -r 10 dauphin.gif
```

Parameters:

- `-r 10` sets the framerate

## Resize a video

```bash
ffmpeg -i cut.mp4 -vf "scale=500:-1" -c:a copy resized.mp4
```

Parameters:

- `-vf "scale=500:-1` sets the target size: 500px in width, -1 tells ffmpeg to automagically calculate the height.
- `-c:a copy` copies the audio stream. You can use `-an` to skip the audio track.

## Rotate a video

```bash
ffmpeg -i video.mp4 -vfilters "rotate=90" -c:a copy out.mp4
```

Parameters:

- `-vfilters "rotate=90"` sets the rotation angle.
- `-c:a copy` copies the audio stream. You can use `-an` to skip the audio track.
