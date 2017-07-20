---
layout: post
title: Incompatible Collaboration
date: 2017-07-20 10:48:00 -0700
tags:
- agile
- api
- collaboration
- collab
- communication
- dev
---
At the end of last year, we hired a development team to build us a new shopping cart to replace our current one. Our current cart worked fine, but is very slow and was written in Java, and thus was not able to be edited or modified from a source-code level because neither me nor my coworker know Java (and we don't want to either). The new cart is being written in JavaScript using [ReactJS](https://facebook.github.io/react/)+[Redux](http://redux.js.org/)+[RxJS](http://reactivex.io/rxjs/) for the front end and [Feathers](https://feathersjs.com/) for the backend. This is good because I already know React, and I can learn the other technologies easily enough, given time. About a month ago, I was added to the daily meeting schedule of this dev team and have been working with them almost daily.

It's been difficult for us to work with them, though, because they have a larger team than us, and thus use a more structured approach to development, namely Agile. Since my coworker and I are just a two-man team, we don't have a structure like that because we can simply work to get things done quickly whenever we want. This lack of structure and order has clearly been irritating to the other dev team, but Agile would only slow us down.

Fortunately it's not too much of a problem, but it has led to some holdups. Earlier in the development timeline, they were waiting on us to deliver an API for our until-recently nonexistent Product Database so they could pull product data, but we were trying to figure out a sustainable way to build product packages in our database so they could be maintained better than they currently were. It took a long time, but we finally got the system up and running for them, and they were able to resume development. The frustrating thing was that it felt like they weren't doing other things that clearly needed doing that could be done without the product database being finished.

Unfortunately, that attitude and feeling is mainly because we don't use their development structure—for them, it takes a lot of extra planning and work to even prepare to do things where my coworker and I would be able to simply start working on things and figure it out as we went! We're on a speedboat while they're on a battleship, and there are good things about each. It's been difficult and tricky, but we've finally found a way to work together. They're able to work on other things while we prepare backend and API tools for them to use when they reach where we are. Our speed allows us to prepare for their arrival, and so far it seems to be working out nicely!

I just hope that it's enough to get them to where we need them to be by October when we finish working with them and take over their project ourselves... Time will tell, I guess.
