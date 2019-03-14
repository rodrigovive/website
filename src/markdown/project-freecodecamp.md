---
title: "Freecodecamp Project"
date: "2018-06-01"
image: "https://source.unsplash.com/150x150/?code"
keywords: "code"
type: "project"
---

##PROJECT OF FREECODECAMP
  

# API Project: URL Shortener Microservice

### Link to Project

#### <a href="https://sincere-team.glitch.me" target="_blank">https://sincere-team.glitch.me</a>

### User Stories

1. I can POST a URL to <a href="https://sincere-team.glitch.me/api/shorturl/new" target="_blank">https://sincere-team.glitch.me/api/shorturl/new</a> and I will receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`
2. If I pass an invalid URL that doesn't follow the valid `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`. *HINT*: to be sure that the submitted url points to a valid site you can use the function `dns.lookup(host, cb)` from the `dns` core module.
3. When I visit the shortened URL, it will redirect me to my original link.


#### Creation Example:

POST <a href="https://sincere-team.glitch.me/api/shorturl/new" target="_blank">https://sincere-team.glitch.me/api/shorturl/new</a> - body (urlencoded) :  url=https://www.google.com

#### Usage:

<a href="https://sincere-team.glitch.me/api/shorturl/4" target="_blank">https://sincere-team.glitch.me/api/shorturl/4</a>

#### Will redirect to:

http://forum.freecodecamp.com

