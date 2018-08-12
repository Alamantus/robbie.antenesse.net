---
layout: project
title:  Game Idea Generator
date: 2014-05-15 19:59:00 -0700
endDate: 2018-01-23 18:28:00 -0700
img: images/thumbnails/game-idea-generator.jpg
link: https://alamantus.gitlab.io/GameIdeaGenerator/
roles:
- Everything
technologies:
- HTML
- JavaScript
- jQuery
- Bootstrap
modalID: modalGameIdeaGenerator
category: Tool
---
Designed and built with JavaScript to procedurally generate a sentence to be used as inspiration to make a game for the Insanity Jam game jam.

### Process

Inspired by orteil42 (creator of _Cookie Clicker_)'s original [game idea generator](http://orteil.dashnet.org/gamegen), I started hosting my own game jam that I called the Insanity Jam. The idea was that participants needed to create a game in 10 days using nothing but a randomly generated game idea as their inspiration. The [first jam](http://web.archive.org/web/20160408171603/http://insanityjam.com/1/viewforum.php?id=7) was very successful, drawing in more than 30 participants! This inspired me to create my own version of the game idea generator specifically for use in the game jam.

I started collecting words that could be used to create sentences, organizing them by part of speech or other significance. The sentences all followed a basic sentence structure at first, but I was soon able to branch out and add more sentence types. Using JavaScript and a seed-based random number generator, I was able to preserve previously-generated sentences and also utilize browser storage to store a history of previously-generated sentences. Once I finished a presentable version of the generator, I threw it onto the Insanity Jam website and started Insanity Jam 2.

Over the years, interest in the Insanity Jam declined, ending after Insanity Jam 5, but the game idea generator was by far my favorite part of the thing. I fixed some bugs, added more words, and finally preserved the JavaScript-only part of the app and put it up online for posterity. Try it out and enjoy!

### Lessons

Working on this project is what really got me interested in procedural generation, and it helped me learn a lot of the pitfalls of creating natural-sounding sentences from nothing but words and random numbers. I learned how to select the most general words and how to manipulate them in ways that made the result actually work well.
