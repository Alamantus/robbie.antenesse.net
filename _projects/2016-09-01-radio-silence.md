---
layout: project
title:  Radio Silence
date: 2016-09-01 15:08:10 -0700
endDate: 2016-09-11 15:08:10 -0700
img: images/thumbnails/radio-silence.jpg
link: https://alamantus.itch.io/radio-silence
roles:
- Code
- Development
- Design
- Art (models, GUIs)
technologies:
- CSharp
- Unity
- PHP
- MySQL
- GiMP
- Blender
modalID: modalRadioSilence
category: Game
---
An interactive scene that encourages communication across impossible distances featuring
a radio with nice, ethereal music.

### Process

A friend of mine approached me with the idea to create a scene featuring a radio
and some stars in order to participate in the [Fermi Paradox Jam](https://itch.io/jam/fermi-paradox-jam).
I liked the idea and expanded the game concept from there. What if players were trying
to receive messages from space and in the end unknowingly were communicating with
each other?

I started working on the game at the start of the jam by creating the 3D models with
Blender for the game and then extrapolating the UI from how the models ended up
looking. Then I moved to coding with C# and made the stars viewed through the
periscope generate in a grid with random offsets and sizes. I ran into trouble
getting the knobs in the radio UI to turn, but was able to figure it out by
manipulating the sprite's angle directly and using the angle value to set desired
radio stations.

I was also able to layer multiple text UI elements to give the
effect of translating coded messages letter by letter. It took a good deal of trouble
to get it working properly, but eventually I just forced it to work by simplifying
some code I had previously overthought.

### Lessons

This project gave me more experience with the Unity 3D engine and its UI elements.
It also provided me with the opportunity to collaborate more closely with a friend
to make sure that the final result followed the design specifications correctly.

I also gained more experience with building simple APIs to insert and access data
from a MySQL database using PHP, as well as more experience manipulating strings
using .NET's `System.Text` namespace and methods in C#.