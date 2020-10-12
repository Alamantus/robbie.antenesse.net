---
layout: post
title: A Beginner's Guide to the Small Web with Beaker Browser
date: 2020-07-20 20:37:00 -0600
comments: true
tags:
- Beaker Browser
- peer-to-peer
- p2p
- small web
- web development
- personal websites
- google
- corporations
- freedom
draft: true
---
<style>
h2 {
  font-size: 1.7em;
}
p, details summary {
  font-size: 1.2em;
}
p {
  margin-block-start: 1.2em;
  margin-block-end: 1.2em;
}
p img {
  border: 1px solid #d0d0d0;
}
.container {
  max-width: 850px;
}
</style>
## Introduction

_[Skip to Guide](#getting-started)_

For the past couple of years, I've been dabbling with what is called "the Fediverse," a collection of programs running on different computers around the world that connect with each other using a specific communication protocol called "ActivityPub." When given a specific address or URL, programs like [Mastodon](https://joinmastodon.org), [Friendica](https://friendi.ca/), [PixelFed](https://pixelfed.org/), and more can find each other on the internet and notify followers of updates whether they are on the same server or not! It's a pretty cool idea and it creates a nice way to separate your interests into discrete locations.

Unfortunately, this model requires someone to set up a web server that is both exposed to the internet _and_ allowing new accounts to be created. This can be done yourself, but it requires a bit of technical knowhow. What about the people who want the benefits of hosting their own data without needing to know how to not only set up but also manage a web server?

Enter the "Small Web." The concept of the Small Web is an attempt to re-capture what the internet was when it first began: a network of personal computers that connect to share files from their own hard drives! This means you can share your ideas with the world without paying money or giving big companies your information—just create your files, turn on your small web program, and share the address! No big corporations or powerful companies standing in the way of whatever you want to do or watching your every move. It is mainly championed by the [Small Technology Foundation](https://small-tech.org/), and I'm personally a huge fan of the idea.

There are a handful of ways to make your website accessible to the internet at large and viewable from all major browsers, but one of the ways I'm most intrigued with is the peer-to-peer model, which use different methods to view and share content. (Peer-to-peer means that files are shared directly from one computer to another while also allowing others who are currently viewing the file to share with newcomers.) The two programs that I am currently aware of that make it pretty easy to jump in are [ZeroNet](https://zeronet.io/) and [Beaker Browser](https://beakerbrowser.com/). Another program that makes it easy to launch and serve a website is [Site.js](https://sitejs.org/), but I'm mostly going to talk about the others here (though you should definitely check out Site.js and [Aral Balkan's recent talk about small tech](https://small-tech.org/videos/small-tech-is-greater-than-big-tech-if-exhibition-2020/) to learn more about it).

The biggest thing that makes ZeroNet and Beaker Browser special to me is the _ease_ with which it allows users to join the peer-to-peer internet world. With ZeroNet, you just need to run a program on your computer and you instantly have access to the network from any web browser! Once you enter the ZeroNet network, you're instantly presented with a number of options to help you get started and find others and different interesting things on the network. With Beaker, you download and run a new web browser, and simply using this browser allows you to view everything that it has to offer! Beaker Browser presents a similar onboarding process where it has you create a profile, encourages you to view a user directory, and shows you some cool things you can do!

In the end, I'm turning my attention to Beaker Browser, and that's what this tutorial will be about. While ZeroNet lets you use any browser, the method with which it performs its peer-to-peer actions is not satisfying and ends up being slow and forcing your computer to download and store a lot more data than you probably want if you're not specifically taking care to manage it. Beaker is a lot more respectful of your computer's storage space and (in my opinion) has more interesting projects running on it. There's no mobile version yet, but it's absolutely planned for the future!

You won't see huge, elaborate websites like on the regular internet, but the tradeoff is more interesting content, no tracking, and a feeling of closeness that you don't see much anymore.

## Getting Started

First things first, head over to [https://beakerbrowser.com/install/](https://beakerbrowser.com/install/) and download the version that's right for your computer. Get it installed, and when you run the program for the first time, it will run you through a short introduction and have you set up your profile. (Don't worry, this process is pretty self-explanatory.) This profile information (like everything else in Beaker) gets saved to your computer and is only editable by _you_ from _this computer_ (A "device sync" feature is in development, which should allow you to change devices easily, but for now remember that the computer you use to create content on for Beaker is _the only computer that you can edit that content on_).

When it asks if you want to let Beaker run in the background, I'd recommend you say "Yes" and keep the checkbox checked. This will let your profile and content remain discoverable even if you're not actively using Beaker Browser so long as your computer remains on. (That's right, since the files are shared from your computer directly to people viewing them, it needs to be on in order to share them! I'll talk more about this later on and how to get around it, but keep that in mind, too—it's a fresh, new world!)

Once you're finished with the little installation step, Beaker Browser opens and displays the New Tab page, shown and labeled below.

![Screenshot of Beaker Browser's initial startup screen](/images/2020-07-22-beginners-guide-to-beaker-browser/beaker-new.png)

<details class="card">
  <summary style="cursor:pointer;">Want to follow along?</summary>
  <p>If you want to follow along within Beaker Browser itself, you can either navigate to this same page using Beaker, or you can view the duplicate Beaker page that's being hosted by my computer right now! Just copy and paste this into the Beaker address bar:</p>
  <p><code>hyper://13af3eff216263351bae20272d78912ef4e8146d08cc4f58c40625a7599b441f/2020/07/20/beginners-guide-to-beaker-browser.html#getting-started</code></p>
  <p><i>My profile on Beaker has an easy way to add me to your address book so you can see my posts and find my page more easily, too!</i></p>
</details>

Down at the bottom of the screen, you'll notice that there's a box labeled "Welcome to Beaker!" Scroll down and you'll see that it has a couple of things with links to help get you started!

![Screenshot of Beaker Browser's "Welcome to Beaker!" screen](/images/2020-07-22-beginners-guide-to-beaker-browser/beaker-welcome.png)

Step 1 is a continuation of what you did in the setup when you created your profile. The first link will take you to your simple profile page, and the "Get help with this step" link will take you to the Beaker documentation, and it's quite helpful! If you're comfortable reading slightly more technical stuff & terminology, feel free to check that out and get some insight into how things work! (It also gives a step-by-step guide for how to edit your simple profile page to add a button.) If not, keep following this guide.

<details class="card">
  <summary style="cursor:pointer;">Slightly technical info</summary>
  <p>When you create your profile in the setup step, Beaker will generate some files in your profile's "hyperdrive" (the name for Beaker's file system that's separate from your main computer's files): <code>index.json</code>, <code>index.html</code>, and <code>thumb.png</code>. When you open your profile page, you'll see a simple web page with the text you entered&mdash;if you give someone the <code>hyper://</code> address, anyone can view that page while you have Beaker running! But to edit that text, you need to modify the HTML file (which is a bit outside of the scope of this guide).</p>
  <p>Your profile <em>data</em>, however, is different than the profile <em>page</em>. The <em>data</em> is simply your name and description stored in the <code>index.json</code> file plus the <code>thumb.png</code> image file (I'll show you how to change this soon). This combination of files paired with your <code>hyper://</code> address acts as your identity as you use different programs in Beaker. Changing your profile <em>data</em> will <strong>not</strong> change what is written on your profile <em>page</em>.</p>
  <p>Later in this guide, I'll cover managing your profile page, but it's good to keep this difference in mind!</p>
</details>

Step 2 is an interesting feature of Beaker that helps you find other peoples' profiles and add them to your address book so you can see their content more easily. You don't _have_ to register your profile here, but it makes finding you so people can see what you're creating just a little bit easier. Your "address book," by the way, is a feature of Beaker that allows Beaker to know whose content you want to see when you load various apps. Think of it like "following" that profile so it can show up in your social feeds. (Again, the "Get help with this step" link will take you to the documentation and explains exactly how to do add yourself to the User Directory. It's worth checking out.)

Speaking of social feeds, step 3 links you to a barebones microblogging app (kind of like Twitter but much simpler) called "Blahbity-blog". There's a version of Blahbity-blog that's much nicer to look at that I prefer to use at this address: <input readonly value="hyper://50178d97ca2502d59fcd156884f7bb882c89056be2ebc65242a69d3944b8587f/" /> so I'd recommend you use that instead. When it first loads, it will prompt you for permission to read your address book—click "Allow" _before_ doing anything else (or else the page might freeze).

![Screenshot of Beaker Browser asking for permission](/images/2020-07-22-beginners-guide-to-beaker-browser/blahbity-permission.png)

Next, click the "Select a profile to post with" button and choose your profile from the window that pops up.

![Screenshot of Beaker Browser displaying available profiles](/images/2020-07-22-beginners-guide-to-beaker-browser/blahbity-profile-select.png)

Once you do these two things, the page will populate with any posts made by anyone that you've added to your address books! At this point, you can use the "New Post" or "New Link" buttons in the top right corner to start posting! After writing your post and clicking "Create Post", Beaker will prompt you for permission again, this time to write files to your profile. Click "Allow" or else you won't be able to post!

After that, congratulations! You've made your first post on Beaker! If anyone has added you to their address book, they will see your posts in their Blahbity-blog stream!

<details class="card">
  <summary style="cursor:pointer;">What posting actually does</summary>
  <p>When using Blahbity-blog, what you're actually doing is creating text files in your profile's file system (called a "hyperdrive") that get pulled in when someone following you views their stream. Files get created in <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a> format inside of a folder named <code>microblog</code>.</p>
</details>

**Do note:** Making posts _does not notify anyone_, and using the "Reply" function only creates a link to the file you're replying to so it's able to be referenced! The person you're replying to needs to have you in their address book to even _see_ your reply. Likewise, if you want to see if anyone's replied to one of your posts, you have to 1) have them in your address book and 2) scroll to see the post. Yes, it's a little bit inconvenient, but it's a new (and frankly much less stressful) way to approach social networking! (You also can't "Like" a post, and that's by design—enjoy the freedom of not needing to perform in your social media! If this is an interesting concept to you, see also [https://feedless.social/](https://feedless.social/))

## Doing things with Beaker

So we just covered the basics of posting on the social network and how that network actually works.
