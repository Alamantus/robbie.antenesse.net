---
layout: post
title: From Scratch
date: 2017-12-15 08:30:00 -0700
comments: true
tags:
- javascript
- framework
- react
- redux
- choo
- choojs
- bulma
- styles
---
A few months ago, I [posted about]({% post_url 2017-07-20-incompatible-collaboration %}) the development team we hired at work and how their process was completely incompatible with ours. In October, we cut off their development process and took the code that they had finished on as our own. It took about a week to figure out how it was all put together and how everything worked, but I felt pretty confident that I could work with the test stuites and linters and other monolithic things they had in place for the app. The app was far from complete, but I knew I could finish it with very few issues!

Flash forward to a few days ago—every new feature I add is a huge victory because I have to make so many file changes and test updates just to get one small thing to display correctly, and it's generally exhausting and not nice. They had so many checks and balances that are great for maybe a 10+ person team but that simply doesn't work in our 2-person environment. The code is so over-egineered that nothing is easy to change, and that's not a good thing for our company because sudden small changes are frequent and numerous.

My coworker and I were talking in whispers about how we wish we could just start from scratch to make something simpler. We had hired these other developers because I hadn't been hired yet and they needed the extra hands, which more or less landed them in the same position as the previous Java cart—someone else wrote it so we had to depend on soeone else. The logic was that Javascript was easy enough to work with, so we wouldn't be as tethered down! So we ended up landing on "no, we've come this far, we've just got to power through it" so we could just go the last bit of the way and get it ready for launch.

But that's just not realistic.

That night, I started researching and found that not only was the cart not finished, the style framework they had chosen doesn't even support the old browser versions we wanted to support! I did some digging and found that my favorite style framework, [Bulma](https://bulma.io), ended up being more compatible if I used a [specific version](https://github.com/jonathantneal/flexibility/releases/tag/v1.0.6) of [this Flexbox polyfill](https://jonathantneal.github.io/flexibility/). So the next day, I started secretly building the cart front end from scratch using the nice, simple [choo framework](https://choo.io/) and Bulma. After a day, I had already completed the basic features of adding items to the cart from our API and displaying them.

After a long meeting about the cart's status yesterday, my coworker comes out and asks if I wanted to simplify the over-engineered code of the cart at all, and I said yes, of course. "Do you want to just try ripping out the complex stuff or just start from scratch". I said I thought it might be easier to start from scratch and go from there, so he told me that makes sense and that we could just try going in that direction. At which point I let out a sigh of relief and showed him my 2-day progress.

I know it's not going to be easy starting over, but at least I'll be a lot happier working with it.
