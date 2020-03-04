---
layout: post
title: Hosting Hobo
date: 2018-03-22 10:20:00 -0700
comments: true
tags:
- hosting
- heroku
- github
- gitlab
- comments
- apis
---
My web hosting account expired a couple months, and it would have cost over $120 per year to renew it. This isn't a terrible price for a full web host, but I really don't want to spend the money for another shared hosting solution. So I researched how I could host my apps and websites for free using a number of different free services, and I landed on a number of good options.

For regular static HTML sites or apps that only use JavaScript, it's hard to go wrong with [GitHub Pages](https://pages.github.com/). By default, GitHub Pages allows you to host either raw/pre-compiled HTML/CSS/JavaScript or a [Jekyll](https://jekyllrb.com/) site, and this website is using GitHub Pages with a Jekyll setup—you can see the source code [here](https://github.com/Alamantus/robbie.antenesse.net), if you'd like! The one thing you need to be aware of is that only _public_ code repositories are free on GitHub (actually, as of 2019 this isn't true anymore!), which means that you have to be OK with the source code of anything you host being 100% visible and findable.

If you'd like both a less restrictive hosting setup than just Jekyll _and_ access to free private repositories, [GitLab Pages](https://about.gitlab.com/features/pages/) is a great option! GitLab pages are managed via their continuous integration (CI) service, which means that you can set up the CI loader to load _any_ static site generator to process your code. For example, my [GUTS+ website](https://guts.plus) is set up to use [Hugo](https://gohugo.io/) by using this config to download the target version of the Hugo binary straight from GitHub:

```yaml
image: ubuntu

before_script:
# Download Hugo 0.37.1 release
# Reminder: Get the release asset id from https://api.github.com/repos/gohugoio/hugo/releases if you change versions
- apt-get update
- apt-get install -y curl git
- "curl -LJO -H 'Accept: application/octet-stream' 'https://api.github.com/repos/gohugoio/hugo/releases/assets/6437077'"
- tar -xzf hugo_0.37.1_Linux-64bit.tar.gz

pages:
  stage: deploy
  script:
  - ./hugo --config config.yaml
  artifacts:
    paths:
    - public
  only:
  - master
```

Or alternatively, this [story I'm attempting to write](https://alamantus.gitlab.io/solarpunk-story/) uses a custom-built PHP static site generator that I made because I just needed something quick and easy to throw markdown text into a template:

```yaml
image: php:7.1.1

pages:
  stage: deploy
  script:
  - php ./site-generator/generate.php
  artifacts:
    paths:
    - public
  only:
  - master
```

Both GitHub and GitLab Pages allow you to add custom domain names to your hosted site, which can get a little tricky, but it's well worth it! You can even use [SSL For Free](https://www.sslforfree.com/) to generate [Let's Encrypt](http://letsencrypt.org/) SSL for your domains to you can get that coveted `https` before your domain name.

If you want something really advanced, [Heroku](https://www.heroku.com/) offers free access to full server instances called "Dynos". You need their Heroku command line app in order to interact with the service, but once you're set up and you've followed a couple tutorials, you can get a full website or API or whatever you need going with just your code and a little bit of config setup! This is what I'm using to control the backend API for my game [Radio Silence](https://alamantus.itch.io/radio-silence) along with a couple of other things.

GitHub and GitLab Pages are great options, but it can be a little hard if you don't already use Git or don't want to take the time to figure out how to set up GitLab Pages the way you want. If you want something a little more in the vein of traditional web hosting, I found a couple of services that offer 100% free web hosting with PHP and MySQL available with the only catch being a few restrictions and potentially slower websites. And also they're generally a little bit shady...

Maybe I'll finish this post someday. But that day is not today, so here's what I've got so far.
