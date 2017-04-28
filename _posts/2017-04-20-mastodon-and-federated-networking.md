---
layout: post
title: Mastodon and Federated Networking
date: 2017-04-20 20:43:00 -0700
tags:
- mastodon
- gnu social
- federation
- social network
---
A few months ago, an indie game developer I follow on Twitter introduced me to Mastodon, an up-and-coming social media network postured as an alternative to Twitter. At the time, I had no idea whh anyone would want this and wrote it off as "cool, but not worth the time". Fast-forward to about a week or so ago, and Mastodon is all over the popular tech blogs. Since everyone else was trying it out, I figured I might as well give it a go this time.

What I discovered was something I had no idea existed. Mastodon is a fresh coat of paint on top of a technology standard called OStatus, which allows different servers to communicate and aggregate messages posted on other servers it has connected with. This connection between servers is called "federation", and OStatus servers automatically federate with other servers that its federated servers have also federated with. It's something that things like GNU Social and Friendica have been doing for years, but that nobody would normally have known about if they weren't already in the right circles of the internet.

What makes this special is that instead of there just being one server that everyone communicates through, like Twitter, every server running OStatus can connect to any other instance, distributing the sources of the data across the internet. This is good because you're not stuck relying on just one source—if your server goes down for a bit, you can easily hop on another server with a different account and resume your browsing/posting (albeit without your last account's history). If Twitter's servers were to   somehow be completely destroyed, it would all be lost, but if an OStatus server is destroyed, it is still cached on the myriad other servers and not completely lost. Ultimately, the difference is minimal to the point of unnoticeable, and the idea itself smacks of post-apocalyptic paranoia, but the concept is fascinating to me.

What Mastodon does different is its relative user-friendliness to set up. If you have the equipment and the willpower, you can set up your own instance of Mastodon that anyone can join. This has sparked a ton of very creative domain names being created as Mastodon instances with a general theme for people with accounts there. For example, there's the magic-themed `witches.town` and my current home, the cyberpunk-themed `cybre.space`.

The two main things that have made me stay so far are the "Federated Timeline", which displays a realtime stream of _every_ post from every server that is federated with yours, and the generally positive disposition that regulars on Mastodon strive to maintain. I can browse the federated timeline and just comment on any post I think looks interesting, and most of the time I can get a 2–3-post conversation out of it. It's delightful. And while there are some OStatus instances that tend to harbor some unsavory characters, many Mastodon instance admins are sensitive to this fact and have blocked the federation to known troublesome instances.

It's been really nice, and I'm quite happy with it so far! Maybe I'll be able to stay and be myself there for a while.