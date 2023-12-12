---
layout: post
title: "How ChatGPT Works (In Simple Terms) and Why You Still Matter"
date: 2023-12-08 20:15:00 -0700
comments: true
tags:
- chatgpt
- artificial intelligence
- ai
- technology
- large language models
- text generators
- machine learning
- chatbots
- big data
- plagiarism
- tools
- responsibility
- writing
- content creation
- natural language
---
There's an awful lot of hype and fervor around ChatGPT and other impressive chatbots
that reply with very natural-sounding responses being called "Artificial
Intelligence" (AI) these days—though people's interest already seems to be burning
out because of its omnipresence. AI programs are a truly impressive creation that
have understandably led people to worry about what they’re capable of, but learning
what's actually being done behind the scenes can help temper your expectations and
alleviate (some of) your concerns. For example, even knowing what "GPT" stands for
can immediately shed some more light on the dark and scary cave that is modern AI.

In this post, I'm going to try to explain what GPTs and LLMs are in the simplest
terms possible. My hope is that, by the end, you'll have a better understanding
of what's involved in these tools and what that means for AI's practical use in
everyday life and business. There will definitely be nuances and details missing,
but I believe that grasping even just the basics of how ChatGPT works is much more
helpful than the existential terror and misguided reverence it fosters now.

## Terminology

I've already used two of the most relevant terms in the introduction, "LLM" and
"GPT." I also used "AI," but I'm hoping that concept is already somewhat clear
to you if you chose to read this. Computer software developers love collapsing
phrases into initialisms like this to save time, but this often leaves people
who aren't already in the know very much out of the loop. In many cases, what
the initialisms stand for doesn't ultimately matter for most people, but in
this case, I believe that knowing what LLM and GPT stand for and then learning
what the phrases actually _mean_ is more than half of what you need to really
understand what's going on at the heart of modern AI.

## What is an LLM and Why is It Important?

"LLM" in the context of modern AI stands for "Large Language Model." At its
core, an LLM is a big ("large") list of phrases and sentences ("language") with
some complicated math applied to rank how each word relates to other words in
the list ("model").

More specifically, an LLM is a storage space ("database") containing as many
sample documents as possible. Those documents are split out into individual
phrases and complete sentences ("strings") depending on a specified number
of letters and punctuation (often resulting in millions to trillions of
strings or more), then those strings are separated into individual words and
analyzed. The analysis checks every word's proximity to every other word in
every string along with any punctuation used near those words, and it ranks
the probability that one word is likely to appear next to another word in a
particular order.

Additional data (like the topic, mood, tone, source, or any number of other
ways to categorize the documents) can be provided before checking the strings
in the database in order to further identify contexts where certain word
combinations might appear. For example, it might be helpful to know when the
sample string comes from someone's social media post versus someone else's
academic journal article versus a movie review website. Typically, an LLM
will cover a single context, e.g. _only_ social media posts or _only_
information covering a certain topic, because that kind of specialization
reduces the work required to categorize the samples. ChatGPT's LLM is exemplary
in that the software developers have gone to great lengths to collect an
unfathomable number of sample texts and meticulously categorize those samples
in as many ways as possible.

<details>
<summary>Expand for some more additional advanced context about LLMs</summary>

Since posting, some concern has been raised about the simplified explanation of
LLMs in this section, so here's some details about how LLMs specifically use
sets of numbers (called "vectors") to create context for the words in their database.

Rather than literally using the text of words and how they are placed in relation
to each other, every word (called a "token") is represented as a vector, and every
token vector is associated with other token vectors based on how they have been
used in the sample data in the database. Storing words this way removes the problems
caused by homonymns and also allows very clever manipulation of words. The vector
representation of tokens even allows mathematical computation between tokens
to get new words based on how the relationships between vectors has been
previously seen and used before. These mathematical relationships inevitably
reveal very interesting correlations between words and concepts that shine a
light on any biases present in the LLM's text samples.

[This article](https://www.understandingai.org/p/large-language-models-explained-with)
does a great job going into even more detail to explain exactly how these
numerical structures work and gives a good sense of just how overwhelming
the scope of these connections are. Anyway, while the idea of "word proximity" as
I use it in this post is indeed an oversimplification of how the text data is used,
I believe it is plenty to help most people to get a better grasp of the massive
matrix of word relationships modeled by large language models.
</details>

## What is a GPT and How Does It Work?

The "GPT" in "ChatGPT" stands for "Generative Pre-trained Transformer." To
oversimplify things a little, a GPT uses the words and proximity data stored
in LLMs to determine what words would be most reasonable to place together in
a given context ("pre-trained") in order to re-combine those words
("transformer") into hopefully different resulting text ("generative").

What makes a GPT impressive is that it does the analysis and reorganization
of words in _both directions_—you can write _to_ a GPT, and it will inspect
your writing ("input") to find the most relevant word rankings within its
LLM in relation to what you've written in order to determine the appropriate
words to combine as a response ("output"). In addition to word rankings, a
GPT will also attempt to determine the correct context to check word rankings
within based on what you've written and where those combinations most commonly
occur. The best ones will have a way to decide if a given input is you
attempting to tell it what context to pull from, again all based on the
previous categorizations and ranking of words provided by the LLM.

GPT programs that I've used often have a space where you can give it starting
context to use before considering someone's requested input. Every additional
word added to the input is used to filter what sample text should be used,
and many GPT chatbots provide that context before letting you write to it.
This context is essentially added to every input to add extra filtering when
generating output. Using these contexts can help ensure that output is created
within a certain set of parameters and pre-filtered options, which is how the
polite and subservient "personality" of ChatGPT is achieved.

## It's Not Intelligence

With the important definitions out of the way, it’s important to note that GPTs
are not actually thinking or coming up with any unique thoughts. The only
"intelligence" on display is the cleverness of using the word proximity data
to produce output that sounds natural because the data samples were collected
from natural writings. Some have cleverly suggested “Applied Statistics” as a
new name for AI in reference to how GPTs construct output based on word
proximity and positioning, but “AI” is simply too disseminated into the public.
In my opinion, "Automated Inference" would be more fitting because it keeps the
"AI" acronym while also painting a more accurate picture of what the program is
actually doing. The LLMs give the GPTs the connections required between words,
and that helps the program infer what its output should be.

Again, the most important takeaway here is that there's no real thinking
happening; GPTs are simply combining words. There is no analysis or understanding
of subject matter. And while some GPTs store a short history of input and output
to act as a simple working memory, it's still just using the stored data as
further filtering. In fact, when GPTs are not configured with enough memory,
the results can be funny at best but frustrating at worst. The responses are
often so natural that it's easy to forget that it's not actually thinking and
keeping track of your whole "conversation" unless it's repeatedly reminded of
what has been said before as the stored memory is cleared out in favor of more
recent input and output.

On top of it all, it's still only able to combine words in ways that it has
seen before from its LLM. While it's possible for output to be arranged in
interesting and unexpected ways, it is impossible for it to create something
never seen before. (Though [this article where the author co-creates a constructed language with ChatGPT](https://thelanguagecloset.com/2023/02/04/i-asked-chatgpt-to-invent-its-own-language-pt-1/) ([web archive](https://web.archive.org/web/20230815201903/https:/thelanguagecloset.com/2023/02/04/i-asked-chatgpt-to-invent-its-own-language-pt-1/)) is
quite an impressive manipulation of the available data in the LLM!)

## Art Bots and How They're Related

To me, art bots are the most impressive application of these generators. Instead
of using collections of _text_, they instead use large models of _images_. Those
images are categorized and collected in a similar way to LLMs, and then those
images are chopped up and reorganized in ways it deems reasonable based on
rankings of different parts of the images. This is impressive because while
text is fairly straightforward for a computer to work with and find connections
within, the mechanism for finding connections between elements of images is
still fairly mysterious to me.

One thing I do know is that image GPTs utilize extensive cataloguing of their
image sets, including sub-categorization of various elements within a single
image. Early AI image identifiers attempted to match various elements of input
images with other elements within its own data sets. Oftentimes, the data sets
would not be big or varied enough to identify things in slightly different poses
or angles than what it had in its model, which would lead to misidentification.
But now with unfathomably more images in the available data set, it's easier for
matches to be found.

Extrapolating from this, an image GPT must use this identification strategy to
piece together images from its data set and smooth them together using some
kind of pre-defined method. When the number of available images is so vast and
its cataloguing and organization so thorough, piecing together images that match
an arbitrary input follows an extremely similar structure to regular text GPTs,
except "proximity" now needs to take “up” and “down” into consideration in
addition to “left” and “right” as with a sentence.

## GPT AIs are Extremely Impressive and Useful

Even though I've broken down modern AI into its basic parts to help you
understand how it works, it's still important to recognize just how impressive
the things that developers like OpenAI do with ChatGPT really are. They're
working with, analyzing, categorizing, and organizing gigabytes (possibly
terabytes) of text samples that are processed and used based on prompts that
_anyone_ can supply. For reference, one letter is a _byte_ and a _gigabyte_
is roughly a _trillion_ bytes while a terabyte is _one thousand gigabytes_—the
average novel is around 50 _thousand_ words totaling only a few hundred thousand
bytes total.

Add in the fact that ChatGPT stores previous input and output to create a
working memory for itself to reference and contextualize future responses,
and you've got quite a formidable machine. Having a tool that you can ask
questions of in the same way you'd ask a friend is incredibly helpful for
brainstorming new ideas. Not many people are able to figure out how to ask
computers for things, so using a simpler, more intuitive input structure to
solicit a response will result in a more appropriate output. I know many people
including myself prefer asking a question directly to someone who would know
the answer over trying to figure out the best search query to put into a search
engine.

## But Current AI Usage is a Problem

The fact that Large Language Models used by GPTs are composed entirely of
previously created content, however, should give you a hint about why using
AI in anything but a hobby or strictly inspirational context is extremely
dangerous. The sheer quantity of sample texts provided by the LLM helps reduce
the odds of it repeating some unique phrase verbatim, but it's far from impossible
for a GPT to generate its output in a way that's identical to some of its sample
texts simply because the ranking of the word order seemed most reasonable. All
of that previously created content within the LLM was produced by someone, and
if the content used isn't strictly and thoroughly vetted, a GPT can quickly and
easily steal someone's work without the original creator, the GPT's developers,
or the person _using_ the GPT ever knowing until it's too late.

Prominent examples of this can be found in various art bots. More than one bot
[appears to](https://stablediffusionlitigation.com/) ([web archive](https://web.archive.org/web/20230815200959/https:/stablediffusionlitigation.com/))
source their art from an unimaginably large collection of artwork posted publicly
by the artist community on DeviantArt.com. The collected art is then used freely
by the GPT to construct remixed art, at least according to [some posts](https://web.archive.org/web/20230815200643/https:/www.newyorker.com/culture/infinite-scroll/is-ai-art-stealing-from-artists)
I've seen about those who have noticed their (rather specific) art styles
reflected in some generated art. The fact that the artist is never informed
that their art is being used can at the _very least_ be considered unethical if
not outright copyright infringement.

Likewise, ChatGPT itself has been known to source code snippets from the
ubiquitous home of software developers, GitHub, in order to produce (often
functional) code for software. Unfortunately, just because the code on GitHub
is _publicly visible_, most projects use one of a huge number of licenses that
dictate how the code may and may not be used. Unfortunately, it seems that these
various licenses were completely ignored when the code samples were collected
for ChatGPT, which has resulted in some hilarious outputs that
_include the text of the restrictive license and the name of the writer of the original code!_

In addition to plagiarizing content, most of the output that GPTs produce is
also factually inaccurate because, again, words are simply being combined in
plausible ways based on how they have previously been used; there’s no analysis
of those words nor understanding of the topics. Likewise, biases and opinions
of previous writers are assimilated into the word proximity data, so the output
must always be checked for accuracy, tone, and underlying assumptions, and only
a person can do that.

There are infinitely many other ways that a GPT can fall short when its LLM is
not carefully curated and its output is not rigorously reviewed. Since LLMs are
not carefully curated in this way, it falls to the users to be extremely
diligent in massaging the output into something truly unique and correct
instead of just the amalgamation of billions of things produced before.

Beyond plagiarism, many employers and content producers have already attempted
to [cut costs](https://blog.dropbox.com/topics/company/a-message-from-drew)
([web archive](https://web.archive.org/web/20231204190826/https:/blog.dropbox.com/topics/company/a-message-from-drew))
by [replacing their employees](https://www.businessinsider.com/microsoft-news-cuts-dozens-of-staffers-in-shift-to-ai-2020-5)
([web archive](https://web.archive.org/web/20231103174038/https:/www.businessinsider.com/microsoft-news-cuts-dozens-of-staffers-in-shift-to-ai-2020-5))
with AI powered by GPTs. This misguided overreliance on AI is a huge problem,
not only for the real human experts losing their jobs but also for users of
the end product, which quite possibly contains wildly inaccurate information.
Search engine results were already clogged with pointless SEO articles, and now
they’re being flooded with blatantly false information that has been generated
by AI and has not been vetted at all. Relying on a GPT to do work that only a
thinking person can do is not only unethical but also results in content that
is low quality, derivative, and uninspired by the very nature of what LLMs are.

## How to Use AI Properly

AI is a tool, and it must be treated as such, guided by an intelligent hand.
Recall that GPT stands for “generative pre-trained transformer,” and remember
that it is only transforming previously created content. Considering how GPTs
function and how they construct an output, it’s clear that the most useful
applications of ChatGPT and other tools like it are _brainstorming_ and _templating_.

Many writers will attest to the value of talking to someone when they need help
finding the right word or phrase while writing, and ChatGPT can be an effective
stand-in to help conjure up the needed word combinations. Likewise, the monotony
of some repetitive writing tasks can be alleviated; for example, asking ChatGPT
to construct a sample thank-you note that you can fill in with accurate personal
details after a job interview. One clever tool ([Goblin Tools](https://goblin.tools/))
uses ChatGPT to help expand to-do lists into smaller pieces, analyze text for tone,
and perform other helpful actions specifically to help people with executive
dysfunction issues or other neurodivergent traits.

The important thing is that you treat everything it produces as a _starting point_
that you then mold into a final product. Simply using what ChatGPT outputs without
making changes is only asking for trouble. This is especially true when you’re
making content that people rely on to be accurate. The only exception is when
using GPT output for personal entertainment—fun doesn’t need to be accurate.

Moving forward, it is critical to be conscious of what AI is _for_ and to
understand when and when not to use it. Asking an AI to generate a story
about your child's favorite characters going on an adventure will always be
more appropriate than using it to write an entire novel you plan on distributing.
Using ChatGPT to give you a to-do list when packing for a trip to another country
will always be more ethical than using it to replace people who make content for
your website. Just as GPTs rely on context to produce output, you must also
understand what context AI output is useful for. When in doubt, tidy up the
output anyway—the results can be good, but they are rarely great.

## Humans are Not Obsolete

At the end of the day, ChatGPT and the impressive things modern AI is doing
truly can't replace you. The words they write with are only what you have
written in the past, and their assertions only reflect what you have asserted
before. They cobble together coherent sentences only because of how you have
previously used words, and they disregard the truth because they can’t analyze
what they write. A tool is only as good as the hand that wields it, and ChatGPT
is only as effective as the creative mind that directs it. AI can help you find
different ways to express ideas, but only you can create original and authentic
content.
