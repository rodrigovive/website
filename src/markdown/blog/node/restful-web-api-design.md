---
title: "Restful Web API Design"
date: "2018-07-02"
image: "https://source.unsplash.com/150x150/?nodejs"
keywords: "nodejs"
type: "blog"
---

# RESTful Web API 

## REST (Representational State Transfer)

- ### Principles

    1. Everything is a resource
        > Representing data by a specific format and not by a physival file containing a bunch of types.
        Content Type: 
        [image/jpeg, video/mpeg, text/html, application/octet-stream]

    2. Each resource is identifiable by a __unique identifier (URI)__
       
        > All shoul be accesible via URIs

    3. Resources are manipulated via standard HTTP methods
        
        > HTTP protocol defines some actions known as HTTP verbs
        
    4. Resources can have multiple representations
       
        > A resource is that it may be represented in a different format
       
    5. Communicate with resources in a stateless manner
       
        > All modifications of a resource should be carried out within an http request in an isolated manner, so mean application to be stateless, state is your related data.
       
- ### The REST goals

    1. Separation of the representation and the resource
        - Server application to handke the representation accordingly content type header
    2. Visibility
        - Rest is designed to be visible and simple.
        - Caching reduce the visibility
    3. Reliability
        - Http method es idempotent if its response stay the same
    4. Scalability and performance
        - Performance is measured by the time need for a single request to be process.
        - Scalability is all about serving all your clients in an accpetable amount of time. prevent DoS.
    
    
    

