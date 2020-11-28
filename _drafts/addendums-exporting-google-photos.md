---
layout: post
title: Addendums for How to Leave Google Photos
summary: Additional things I've learned since posting "How to Leave Google Photos"
date: 2020-11-30 14:10:00 -0700
comments: true
tags:
- updates
- details
- Google Photos
- export
- metadata
- exif
- digital freedom
- pictures
- images
- files
---
Since posting my comprehensive guide on [How to Leave Google Photos]({% post_url 2020-11-25-exporting-google-photos %}), I've learned a bit about Google Takeout and several other systems through the discussions that I've had [on Reddit](https://old.reddit.com/r/selfhosted/comments/k1i0bw/i_wrote_a_detailed_guide_to_help_people_get_their/) and from doing further research. In this post, I'm going to try to lay out all the new caveats and tricks that I've learned and then link to them in the original post. The only reasons I'm not simply making the updates to the original post are that 1) it's already very long and 2) it would require reworking some of the structure and content, and I don't really want to do that right now.

## Google Takeout's File/Folder Organization

In the original post, I mentioned that Google Takeout has an absolutely dreadful way of organizing your Google Photos, and this is in fact the main reason I created the post! By default, Google Takeout organizes your photos into automatic albums _by day_ rather than by month or anything reasonable.

After publishing the post, I did learn that if you've taken the time to manually organize all of your photos into albums by month or year (aside from your standard photo albums), the Google Takeout _will respect those albums_ and return them organized as you specified in Google Photos! Obviously this requires a great deal of foresight, discipline, and organization skills and time to go through and continuously organize your photos by hand, _but_ I have to be fair and say that your Google Takeout's folder structure is _technically_ dependent upon you organizing or not organizing your files! (In my opinion, this is an unreasonable dependence upon people doing things they don't know they need to do, but hey, technicalities are technically truth!)

## Google Takeout's Photo Metadata

Google Photos preserves your photo's metadata (mostly) correctly when you download the photos from the web interface. By "metadata", I mean the created/modified dates, GPS location, and other details that help categorize and organize your photos that are stored just under the surface of the image within the file itself. For some reason, Google Takeout opts to strip all of this data and instead deliver it as separate `.json` files that can't be used by other photo systems because the data is no longer stored within the photo and video files.

When I created my Google Photos Export Organizer program, I didn't realize that this was the case, so though it organizes files into folders and file names, it does not currently re-insert the created/modified dates or any other metadata into the photos, making it less useful for some people who are using different systems! I am going to be working on an update to the program that includes the option to re-insert the metadata from the `.json` back into the image/video files. I will update this post and the other post once this crucial feature has been added.

## iOS "Live" Photos

https://support.google.com/photos/thread/158993?hl=en
