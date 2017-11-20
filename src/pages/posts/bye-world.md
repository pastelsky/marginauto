---
title: 'Making a website that gets faster with time️'
path: '/hello-world'
date: 05-11-2017
---

Looks like the whole app, but I can't use the whole app right now. My first interaction here is pretty limited. I can create a blank canvas, or open an existing image. Those two interactions don't justify a lot of up-front loading.

this is a [link to](https://helloworld) the greatest blog ever born.
Rather than copying bad examples from the history of native apps, where everything is delivered in one big lump, we should be doing a little with a little, then getting a little more and doing a little more, repeating until complete. Think about the things users are going to do when they first arrive, and deliver that. Especially consider those most-likely to arrive with empty caches.

![ok](static/sc.png)

```xml
...
<circle cx="50" cy="50" r="50" style="stroke: #ccc; fill: url(#myPattern);" />
...
```
Webpack's super-smart code-splitting allows you to throw more engineering at the problem by splitting out code that isn't needed for the most-likely first interaction, but sometimes there's a simpler opportunity.

If your first interaction is visual, such as reading an article or looking at an image, serve HTML for those things. Most frameworks now offer some sort of server-rendering feature – just ensure you're not serving up a load of buttons that don't work while the client-side JS is loading.

| hello | bye |
|-------|------|
| ok | dear |

## Maintenance
- It should not be maintainable
- It should not whine like a kid
- It shall be continuous

If the majority of your functionality is behind a log-in, take advantage of it. Most login systems can be implemented without JavaScript, such as a simple form or a link. While the user is distracted with this important and useful functionality, you can start fetching and preparing what they need next. This is what Netflix did.

It shouldn't end with the first interaction either. You can lazily-load and execute code for discrete interactions, loading them in the order the user is most-likely to need them. <link rel=preload> can be used to lazily-load without executing, and the new `import()` function can be used to execute the code when needed. Again, webpack can help with the splitting if you're currently bundling.

If you're loading a JSON object containing 100 pieces of data, could that be streamed in a way that lets you display results as they arrived? Something like newline-delimited JSON can help here.

Once you're prepared for logged-in interactions, you can cache all that, and serve it from a service worker for future visits. If you update your code, that can be downloaded in parallel with the user using the current version, and you can transition the user to the new version in the least-disruptive way you can manage.

![](https://aerotwist.com/static/blog/framework-boot/fmp-and-tti.jpg)

> Hello world, we finally got together to work

```json
...
  "browserslist": {
    "modern": [
      "Firefox >= 53",
      "Edge >= 15",
      "Chrome >= 58",
      "Safari >= 10",
   ],
    "legacy": [
      "last 5 Chrome versions",
      "last 5 Firefox versions",
      "Safari >= 8",
      "Explorer >= 10",
      "Edge >= 12",
    ]},
...
```

lorem ipsum shits