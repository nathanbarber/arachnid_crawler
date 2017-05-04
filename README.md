# arachnid_crawler
A recursive http crawler written in javascript with node.js

# Layout and basics
This 'app' uses two pieces to work, an HTML cleaner/seperator and a request module that fetches links/page data.
This repo is intended as a template. All this crawler does in its current rudimentary stage is, given an initial link and a restriction phrase, searches the initial page for links containing the phrase, adds them to an array and visits each page methodically, repeating the same process. While the crawler has control over an HTML page, you can read it, print it out, save it to a file or anything really. While there are more pages in the links array, the crawler will keep moving.

# What it looks like
The size of the links array usually increases dramatically at first, absorbing new information, then slowly empties itself by visiting all the cached pages.

# Operation
The two parameters, initial page and restriction phrase are both variables inside 'arachnid.js'. These are the two main values you'll have to play with in order to crawl stuff.
