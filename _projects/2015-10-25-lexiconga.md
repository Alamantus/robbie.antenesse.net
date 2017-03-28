---
layout: project
title:  Lexiconga
date: 2015-10-25 20:41:00 -0700
img: images/thumbnails/lexiconga.jpg
link: http://lexicon.ga
roles:
- Everything
technologies:
- PHP
- JavaScript
- HTML
- CSS
- MySQL
modalID: modalLexiconga
category: Web App
---
A tool intended to help you build constructed language (conlang) dictionaries/lexicons.

This is one of my few ongoing projects that I occasionally make improvements to when I find
time.

### Process

Toward the end of 2015, I started getting really interested in linguistics and constructed
languages. I wanted a simple and easy way to not only keep track of a dictionary for the
language I was working on, but also a stylish way to share it with others so I could get
feedback. The solutions I found were either not what I needed or were too slow, so I decided
to build my own out of pure JavaScript.

Initially, Lexiconga _only_ used the user's browser to store their data, but this can be
dangerous because if the user ever clears their browser cache, they would permanently lose
their dictionary! So I started building a PHP backend to provide users with accounts that
allowed them to store multiple dictionaries in a safe place that could be accessed from
any computer! I kept it simple, but worked to make private dictionaries as secure as possible,
making only dictionaries that were explicitly marked "public" available to be seen.

### Lessons

I learned how to make sure that data entered by users, no matter what the text is, can be
displayed the way it is supposed to be displayed using [Markdown](https://daringfireball.net/projects/markdown/).
I also learned a lot about mobile-friendly styling, because in my first iteration of the
design, I built everything from scratch, including the styles.
