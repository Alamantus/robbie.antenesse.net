---
layout: post
title: PHP PDO MySQL Connection for UTF-8
summary: How I learned about the `charset` option in the PDO connection string.
date: 2017-09-29 10:48:00 -0700
comments: true
tags:
- php
- pdo
- mysql
- connection
- unicode
- utf-8
- utf8
---
[Skip to the TL;DR](#tldr)

Yesterday, I spent two hours trying to solve a problem I was having with an API I had built to store our products in a unified place. Every single product that I had ever tried to grab from the API had succeeded, but as I was going through the database to update some values, I came across one product that would not load. No matter what I tried, no data was returned and no errors were logged. I was baffled.

I went through the code and was able to narrow it down to one problem method in the API's class, but when I tried to run that same method in isolation on the product that was failing, it worked fine! After trying to narrow it down even more, I finally decided to try looking at the contents of the product. In our product database, we have both regular products _and_ packages, which can contain any number of other products and/or packages. So I checked every sub-package in the package I was having trouble with, and sure enough, one of the packages inside was also not loading.

I kept digging, and about 5 packages deep, I found the product that was the culprit. When I looked at the product's data in the MySQL database, I discovered this: `Gabriel García Márquez`. I figured that for some reason, these `í` and `á` Unicode characters _had_ to be the problem. So I replaced them with their non-accented forms, and just as I suspected, every package loaded just fine. For some reason, my PDO connection was unable to comprehend the Unicode that I know actually does work just fine.

Obviously, however, I don't want to have the data be wrong just because some programming language can't handle it, so I went ahead and updated the database to contain the accented characters using PDO. Once I did it that way, it was able to load the Unicode without any trouble! But when I looked in the MySQL table again, I discovered this mostrosity: `Gabriel GarcÃ­a MÃ¡rquez`.

WHAT!?

Our server, MySQL database and tables, and PHP config were all set to use the `utf-8` charset to support Unicode characters, but for some reason, the PDO library is translating the Unicode characters into _other Unicode characters_ in order to store them and re-translating them again when it pulls the data!

WHY

So I went on a Google hunt.

After finding a lot of issues where people had their charsets set to `latin` or some other non-unicode set, I finally discovered [this StackOverflow article](https://stackoverflow.com/questions/4475548/pdo-mysql-and-broken-utf-8-encoding/21373793) where someone was having a similar problem. The marked answer from 2011 includes an apparent workaround that includes PDO connection options _inside_ the connection call:

```php
$pdo = new PDO( 
    'mysql:host=hostname;dbname=defaultDbName', 
    'username', 
    'password', 
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8") 
); 
```

But the [next answer down](https://stackoverflow.com/a/21373793) from [Palec](https://stackoverflow.com/users/2157640/palec), with only 31 upvotes, contains the actual, correct answer—or at least, the correct answer... _since PHP 5.3.6_:

> You have to set correct charset for the connection. [Add `charset=utf8` option to the DSN](http://php.net/manual/en/ref.pdo-mysql.connection.php). _**(This is MySQL-specific!)**_

<small>(Emphasis added)</small>

When going to his link to the PHP documentation, I discovered this:

> _charset_
> > The character set. See the character set concepts documentation for more information.
> > 
> > Prior to PHP 5.3.6, this element was silently ignored.

WHYYYY

When looking at the regular [PDO connections page](http://php.net/manual/en/pdo.connections.php), where every Google search for "PHP PDO Connection" points you, you see nothing but this example, which doesn't even reveal the fact that you can add PDO options to the connection:

```php
$dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
```

But lo and behold, searching the page for "charset" yields a single comment at the very bottom of the page, downvoted to -3, is [the correct answer](http://php.net/manual/en/pdo.connections.php#118267) about specifying the `charset` option in the DSN. Why is it downvoted? Why is it so hard to find this charset information? WHY does the charset need to be specified in the connection when EVERYTHING leading up to it has already specified the charset to use??

I have no idea.

In my opinion, the connection should default to the same charset of the database that is being connected to, because that just _makes sense_.

Anyway, I just want the world to know that the _correct_ way to connect to a MySQL database with any PHP version since 5.3.6 is:

### TL;DR
If you want to have a clean database with correct Unicode characters, always be sure to specify the `charset` you wish to connect with. You can do this with PHP's PDO as follows:

```php
$pdo = new PDO(
    'mysql:host=hostname;dbname=database;charset=utf8',
    'username',
    'password'
);
```

I hope this helps someone the way it surely would have helped me!
