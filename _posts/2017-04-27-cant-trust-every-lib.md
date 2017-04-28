---
layout: post
title: Can't Trust Every Lib
date: 2017-04-27 22:25:00 -0700
tags:
- node
- nodejs
- npm
- bug
- problem
- troubleshooting
---
At work, I've been developing a web application using ReactJS and Webpack that helps customers customize pre-built packages that we offer. In true modern developer fashion, I've been utilizing open source library packages to make my job easier and make sure the final product is effective, and one of the packages I had been using from the start was called `json-query`. The purpose of `json-query` was to make it possible to search large JSON files that you might not completely know the structure of using a fairly simple query structure. Sure, a couple of times, I ran into trouble caused by it, but I adapted my code and moved on.

Well this past week, we finally decided that my Package Builder was ready for a public beta test. I had prepared a Webpack script to make the app small enough to use in production (from ~8MB down to ~900KB), but when I uploaded it and tried it out, things immediately went wrong. The data, which was the very same data that I had been using in the test environment, was simply not being found and rendered correctly! Items that were clearly marked `isSelected` in the data to specify that it is supposed to be preselected went ignored.

I pulled my hair out for two days before I realized what was going wrong: the data reader wasn't able to read the data anymore. That's right, `json-query`, which I had put in charge of every single query of the large data file, simply does not work in a minified environment. I couldnt tell you _why_ that might be the case, since the data is still exactly the same, but it turns out that was why everything was broken. (Okay, there were other problems I had to fix that were unrelated, too, but for the sake of the story let's just stick with "everything".)

In the end, I had to replace every call to the `jsonQuery()` function with an `Array.prototype.find()` method. The funny thing about it is that after making the switch and eradicating `json-query` from my code, the resulting code was more efficient _and_ easier to read! In trying to cut corners and save time, I accidentally overlooked the superior, built-in solution that JavaScript had to offer.

The Package Builder app will be starting its live beta sometime next week, when my coworker can get the pricing API sorted out to conform to the highly specific pricing specifications bundled packages end up with...