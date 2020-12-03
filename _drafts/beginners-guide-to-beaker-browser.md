---
layout: post
title: A Beginner's Guide to the Small Web with Beaker Browser
summary: A guide to help you get your bearings in the wide open seas of the small web.
date: 2020-12-03 13:20:00 -0700
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
featured: true
---
## Introduction

_[Skip to Guide](#getting-started)_

For the past couple of years, I've been dabbling with what is called "[the Fediverse](https://fediverse.party/en/fediverse)," a collection of programs running on different computers around the world that connect with each other using a specific communication protocol called "[ActivityPub](https://activitypub.rocks/)." When given a specific address or URL, programs like [Mastodon](https://joinmastodon.org), [Friendica](https://friendi.ca/), [PixelFed](https://pixelfed.org/), and more can find each other on the internet and notify followers of updates whether they are on the same server or not! It's a pretty cool idea and it creates a nice way to separate your interests into discrete locations.

Unfortunately, this model requires someone to set up a web server that is both exposed to the internet _and_ allowing new accounts to be created. This can be done yourself, but it requires a bit of technical knowhow. What about the people who want the benefits of hosting their own data without needing to know how to not only set up but also manage a web server?

Enter the "Small Web." The concept of the Small Web is an attempt to re-capture what the internet was when it first began: a network of personal computers that connect to share files from their own hard drives! This means you can share your ideas with the world without paying money or giving big companies your information—just create your files, turn on your small web program, and share the address! No big corporations or powerful companies standing in the way of whatever you want to do or watching your every move. It is mainly championed by the [Small Technology Foundation](https://small-tech.org/), and I'm personally a huge fan of the idea.

There are a handful of ways to make your website accessible to the internet at large and viewable from all major browsers, but one of the ways I'm most intrigued with is the peer-to-peer model, which use different methods to view and share content. (Peer-to-peer means that files are shared directly from one computer to another while also allowing others who are currently viewing the file to share with newcomers.) The two programs that I am currently aware of that make it pretty easy to jump in are [ZeroNet](https://zeronet.io/) and [Beaker Browser](https://beakerbrowser.com/). Another program that makes it easier to launch and serve a website is [Site.js](https://sitejs.org/), but I'm mostly going to talk about the others here (though you should definitely check out Site.js and [Aral Balkan's recent talk about small tech](https://small-tech.org/videos/small-tech-is-greater-than-big-tech-if-exhibition-2020/) to learn more about it).

The biggest thing that makes ZeroNet and Beaker Browser special to me is the _ease_ with which it allows users to join the peer-to-peer internet world. With ZeroNet, you just need to run a program on your computer and you instantly have access to the network from any web browser! Once you enter the ZeroNet network, you're instantly presented with a number of options to help you get started and find others and different interesting things on the network. With Beaker, you download and run a new web browser, and simply using this browser allows you to view everything that it has to offer! Beaker Browser (in version 1.0) doesn't provide an onboarding process, but that may change as the project continues getting updates.

In the end, I'm turning my attention to Beaker Browser, and that's what this tutorial will be about. While ZeroNet lets you use any browser, the method with which it performs its peer-to-peer actions is not satisfying and ends up being slow and forcing your computer to download and store a lot more data than you probably want if you're not specifically taking care to manage it. Beaker is a lot more respectful of your computer's storage space and (in my opinion) has more interesting projects running on it. There's no mobile version yet, but it's absolutely planned for the future!

You won't see huge, elaborate websites like on the regular internet, but the tradeoff is more interesting content, no tracking, and a feeling of closeness that you don't see much anymore.

## Getting Started

First things first, head over to [https://beakerbrowser.com/install/](https://beakerbrowser.com/install/) and download the version that's right for your computer. Get it installed, and when you run the program for the first time, it will run you through a short introduction and has you agree to an MIT license (which just says the software is provided "as is" and can be used however you want).

<div class="flex two">
  <img src="/images/beginners-guide-to-beaker-browser/welcome-1.png" alt="Beaker Browser's launch screen" />
  <img src="/images/beginners-guide-to-beaker-browser/welcome-2.png" alt="Beaker Browser's license agreement" />
</div>

When it asks if you want to let Beaker run in the background, I'd recommend you say "Yes" and keep the checkbox checked. This will let your profile and content remain discoverable even if you're not actively using Beaker Browser so long as your computer remains on. (That's right, since the files are shared from your computer directly to people viewing them, it needs to be on in order to share them! I'll talk more about this later on and how to get around it, but keep that in mind, too—it's a fresh, new world.)

![Beaker Browser's setup asking permission to stay open in background](/images/beginners-guide-to-beaker-browser/welcome-3.png)

Once you're finished with the little installation step, Beaker Browser opens and displays the somewhat spartan New Tab page, shown below.

![Screenshot of Beaker Browser's initial startup screen](/images/beginners-guide-to-beaker-browser/beaker-new.png)

<aside>After running closing and re-opening the browser on a fresh Linux install, I <em>was</em> greeted with a handful of pinned bookmarks, but my first time gave me the bare image shown above&mdash;your mileage may vary.</aside>

<details class="card">
  <summary>Want to follow along?</summary>
  <p>If you want to follow along within Beaker Browser itself, you can either navigate to this same page using Beaker, or you can view the duplicate Beaker page that's being hosted by my computer right now! Just copy and paste this into the Beaker address bar:</p>
  <p><code>hyper://13af3eff216263351bae20272d78912ef4e8146d08cc4f58c40625a7599b441f/2020/12/03/beginners-guide-to-beaker-browser.html#getting-started</code></p>
  <p><i>My profile on Beaker has an easy way to add me to your address book so you can see my posts and find my page more easily, too!</i></p>
</details>

### Setting up a Profile

During the version 1.0 beta, the new tab page had a couple of things with links to help get you started, but these have been removed in the main 1.0 release. I'm going to cover what was once there because I personally really liked the onboarding process they originally included, and I'll explain how to replicate it in the 1.0 version.

![Screenshot of Beaker Browser's "Welcome to Beaker!" screen](/images/beginners-guide-to-beaker-browser/beaker-welcome.png)

Step 1 is to create a website (called a "hyperdrive") that will act as a profile for you to use in various Beaker apps. You can do this by clicking the `+ New Hyperdrive` link in the top right corner of the New Tab page or by choosing the option from the menu to the right of the address bar. This will open a little dialog box for you to fill out.

![Beaker Browser's new hyperdrive dialog box](/images/beginners-guide-to-beaker-browser/new-drive-setup.png)

For your profile drive, I recommend you make the `Title` your name (or web alias) and the `Description` a short sentence about you. Finally (and this is important) write `contact` in the `Tags` field so it can be used as a "profile" in various Beaker apps. If you're comfortable reading slightly more technical stuff & terminology, feel free to check out the [Getting Started documentation](https://docs.beakerbrowser.com/getting-started-with-beaker) and get some insight into how things work! If not, keep following this guide.

As soon as you click "Create," it will open the website contents with a code editor in a pane next to it. The only contents of the website when you first create it is an `index.json` file that contains the text you just wrote in the setup dialog box. Welcome to the wild web!

![Beaker Browser's new hyperdrive open in a new tab with editor](/images/beginners-guide-to-beaker-browser/new-drive-setup.png)

If you need to change the data you entered, click the little pencil on the left side of the address bar, choose "Tools" from the dropdown, and select "Hyperdrive Properties" to change the Title, Description, and Tags.

!["Hyperdrive Properties" location in Beaker Browser window](/images/beginners-guide-to-beaker-browser/hyperdrive-properties.png)

You'll also notice that there's an option for "Thumbnail", and if you add an image there, it will use that image as an identifier for your website (or in the case of your profile, you). Notice the tiny picture of my dog when he was a puppy next to the title of my hyperdrive in the image below and the new `thumb.jpg` file in the list:

![Thumbnail next to hyperdrive title](/images/beginners-guide-to-beaker-browser/thumbnail-example.png)

<details class="card">
  <summary>Slightly technical info</summary>
  <p>After doing the steps above, you will have the following files present in your website's "hyperdrive" (the name for Beaker's file system that's separate from your main computer's files): <code>index.json</code> and <code>thumb.png</code>. When you open this website page, you'll see a simple web page with the text you entered and the files listed out&mdash;if you give someone the <code>hyper://</code> address, anyone can view that page while you have Beaker running! But to make your website show something else, you need to create either an HTML file (which is a bit outside of the scope of this guide) or a [Markdown](https://www.markdownguide.org/) file with the name <code>index</code> in your hyperdrive (for example <code>index.html</code> or <code>index.md</code>).</p>
  <p>Your profile <em>data</em>, however, is different than the profile <em>page</em>. The <em>data</em> is simply your name and description stored in the <code>index.json</code> file plus the <code>thumb.png</code> image file. This combination of files paired with your <code>hyper://</code> address will act as your identity as you use different programs in Beaker. Changing your profile <em>data</em> will <strong>not</strong> change what is written on your profile <em>page</em>.</p>
  <p>Later in this guide, I'll cover managing your profile page, but it's good to keep this difference in mind!</p>
</details>

### Connecting with Others

Now that you have a profile page set up, you can take a look at a [handy user directory](https://userlist.beakerbrowser.com) that helps you find other peoples' profiles and add them to your library so you can see their content more easily. You don't _have_ to register your profile here, but it makes finding you so people can see what you're creating just a little bit easier. Click the title to see if their site is accessible—if it's not, they likely don't have their Beaker Browser running. If you like the site or want to follow their content, you can choose to host their hyperdrive by adding it to your library. Click the string of letters and numbers on the left side of the address bar and choose "Host this Site" or click the little icon beside a number on the right side and check the "Host this Hyperdrive" box.

Your "library," by the way, is a feature of Beaker that allows Beaker to store other peoples' websites on your computer so it can be shared with others more easily. _(Note: You will be downloading that person's hyperdrive onto your computer! This is part of the peer-to-peer existence—sharing your resources so everyone has a chance to view it if it goes offline somewhere.)_ Websites with the tag "contact" can be used to let various Beaker apps know whose content you want to see when you load them. Think of it like "following" that profile so it can show up in your social feeds.

Speaking of social feeds, [Paul Frazee](https://twitter.com/pfrazee) created a barebones microblogging app (kind of like Twitter but much simpler) called "Blahbity-blog" at this address: <input readonly value="hyper://50178d97ca2502d59fcd156884f7bb882c89056be2ebc65242a69d3944b8587f/" />. When it first loads, it will prompt you for permission to read your hosted hyperdrives tagged "contact"—click "Allow" _before_ doing anything else or else you won't see anything anyone posted.

![Screenshot of Beaker Browser asking for permission](/images/beginners-guide-to-beaker-browser/blahbity-permission.png)

Next, click the "Select a profile to post with" button and choose your profile from the window that pops up.

![Screenshot of Beaker Browser displaying available profiles](/images/beginners-guide-to-beaker-browser/blahbity-profile-select.png)

Once you do these two things, the page will populate with any posts made by anyone that you've added to your library with the `contact` tag! At this point, you can use the "New Post" or "New Link" buttons in the top right corner to start posting! After writing your post and clicking "Create Post", Beaker will prompt you for permission again, this time to write files to your profile. Click "Allow" or else you won't be able to post!

After that, congratulations! You've made your first post on Beaker! If anyone has added you to their address book, they will see your posts in their Blahbity-blog stream!

<details class="card">
  <summary>What posting actually does</summary>
  <p>When using Blahbity-blog, what you're actually doing is creating text files in your profile's file system (called a "hyperdrive") that get pulled in when someone following you views their stream. Files get created in <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a> format inside of a folder named <code>microblog</code>.</p>
</details>

<div class="card" style="background-color:lightyellow;">
<p><strong>Do note:</strong> Making posts <em>does not notify anyone</em>, and using the "Reply" function only creates a link to the file you're replying to so it's able to be referenced! The person you're replying to needs to have you in their library as a contact to even <em>see</em> your reply. Likewise, if you want to see if anyone's replied to one of your posts, you have to 1) have them in your library as a contact and 2) scroll to see the post. Yes, it's a little bit inconvenient, but it's a new (or perhaps old, and frankly much less stressful) way to approach social networking! (You also can't "Like" a post, and that's by design—enjoy the freedom of not needing to perform in your social media! If this is an interesting concept to you, see also <a href="https://feedless.social/" target="_blank">https://feedless.social/</a>)</p>
</div>

## Making things with Beaker

So we just covered the basics of posting on the social network and how that network actually works. Next you'll probably want to create some content for others to find. If you know how to create HTML and CSS files, you're well on your way! Even better if you know JavaScript—that'll let you make your website more interactive. There are some tools you can use to make this process a little bit easier for you, though.

Let's start with your profile hyperdrive that you just created.

### A Simple Text Site

If you just want a simple text site, you can use [Markdown](https://www.markdownguide.org/) to create text documents that Beaker Browser will display for you. In the Editor view (go to your previously-created hyperdrive and click `Developer` from the menu and choose "Toggle Editor"), add a new file named `index.md`. From here, you can start writing whatever you want! The following is a short example Markdown document:

```markdown
# Page Title

This is a paragraph of text below the title.

## Secondary title

This is a good way to separate sections in your text.

You can also link to another page [like this](about.md).
```

In the example above, the link references a file called `about.md` in the same folder as the current file. You can do this exactly the same process as the `index.md` file but call the file `about.md` to create a new page.

When you save the file, the text will be formatted nicely, kind of like the text on this blog post. You can now link to the newly created file and anyone can access it when you your Beaker Browser is running. You can optionally add more formatting using "Frontends," but you'll have to [use the documentation](https://docs.beakerbrowser.com/developers/frontends-.ui-folder) yourself to get it set up.

### HTML Website

If you want something a little more complicated than just text, you can use HTML, CSS, and JavaScript to make a website. There are many different ways to do this, but I have modified a web page builder to help you out. Go to this hyperdrive to use it:

<input readonly value="hyper://0b6a7d1383330e8c7651e968dd0e5953f639259bcb78bb41dcb384a2d0407300/" />

You can use the menu in the top middle of the page to open a page you previously edited in the site builder or you can modify what's there by dragging and dropping elements from the left side into the middle panel and editing the text in the panel. The right panel is for customizing the elements. After making your changes, use the "Save" button to choose a hyperdrive to save the HTML to. If you save it as `index.html` in the main folder of the hyperdrive, it will appear when you load your drive! Just play around with it and you can have something nice in no time.

If you want to go further, I recommend using [Free Code Camp](https://www.freecodecamp.org/) or [Codecademy](https://www.codecademy.com/) to learn how to use HTML, CSS, and JavaScript more completely.

## Other Things to Know About

That's just about all there is to know about Beaker Browser itself. I know it can be a little overwhelming for some people, but it's worth putting the time in to learn if you're able to! When you make some connections with people, you can start finding all sorts of interesting things and content that people are making.

Here are a last few things that are good to know about when using Beaker Browser.

### Settings

If you click the menu button (to the right of the address bar) and choose "Settings," you can change things up to your liking. By default Beaker Browser has ad blocking enabled. You can use the "Content Blocking" option on the left to add or remove different content blocking lists. The default ones are fairly standard and should block most ads and malicious content. Uncheck the box on the left to disable the blocker.

### Tab Management

By right clicking a tab, you can access options to "Pin" a tab or even to "Minimize to Background." Minimizing a tab will move the tab into a little dropdown menu on the far left side of all the open tabs. Tabs that have been minimized will continue running, which is good for certain apps like [Duxtape](hyper://5b69209fc2dfb5eafb82e4031cd43c28ebc61e5cdd4dbdc48310bb62263f53e0/), a mixtape sharing app that automatically adds new mixtapes when someone has the hyperdrive open at the same time as you.

### Panes

You can open two websites side by side using Panes. Right-clicking or using View from the menu will reveal options to "Split Pane Vertically" and horizontally. When you have multiple panes open, right clicking and choosing "Close Pane" will close the pane that you right-clicked inside of.
