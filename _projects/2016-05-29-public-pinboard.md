---
layout: project
title:  Public Pinboard
date: 2016-05-29 12:00:00 -0700
endDate: 2016-06-02 16:01:00 -0700
img: images/thumbnails/public-pinboard.jpg
link: http://alamantus.github.io/Public-Pinboard
roles:
- Everything
technologies:
- html
- php
- bootstrap
modalID: modalPublicPinboard
category: Web App
---
A digital corkboard for leaving small post-it note-like messages in a public space that
allows anyone to also remove the messages.

### Process

I thought about how some local spaces have a corkboard where anyone can add or remove
things, and I thought it would be fun to have the same kind of thing in a digital space.
Sure, we have forums where people can post, but only administrators can remove things
that might be offensive or off topic. So I made this, where anyone can post a flyer
or remove a flyer without needing to create an account or anything like that, just
like a real community corkboard!

I mainly just whipped up a simple grid using Bootstrap, made PHP read from a directory
in order of created date, and made PHP write files to that same directory when someone
posts a flyer! I restricted the length of the flyer using HTML5, and it's as simple as that!

### Lessons

PHP File I/O processing.
