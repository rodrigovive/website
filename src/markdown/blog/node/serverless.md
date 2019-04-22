---
title: "Serverless Computing"
date: "2019-03-02"
image: "https://source.unsplash.com/150x150/?server"
keywords: "server"
type: "blog"
---

##Serverless Computing

###What does Serverless mean?

> Serverless computing is a misnomer referring to a cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources.

> If you cant see the server in the service, then its serverless

> A serverless solution is one that costs you nothing to run if nobody is using it

> Serverless is an event driven, utility based, stasteless, code execution environment in which you write code and consume services.

> managed services that scale to zero

###What you do in serverless Systems?

- Write code
- Define triggers
- Connect managed services together
- Pay for consumption instead for allocation

###What you do not do in Serverless systems? 

- Dont pre-provision infrastructure

###The paradigm change for serverless

- You are only responsible for your application itself infrastructure is fully managed
- Your architecture depends on events and stateless computing
- When nothing happening, you pay nothing
- When something does happen, you have fine grained

###Serverless use cases

- 3-tier web apps
- Web API's
- Stream processing
- Data pipelines
- Batch processing
- Infrastructure automation

###Serverless Complements existing priorities

- Move to microservices
- Adopt DevOps practices
- Install continuous delivery
- Adopt event driven architectures
- Enable mobile computing
- Introduce ML/AI

###Hosted FaaS platforms

- AWS Lamdba
    - Supported languajes : Node, Java, C#, Python
    - Available triggers : Kinesis, Dynamo, S3
    - Features to know : Dynamic scaling, cross AZ, custom runtimes, HTTP via API Gateway, workflow with step functions

- Azure Functions
    - Supported languajes: Node, Java, C#
    - Available triggers : Blob Storages, Cosmos DB, HTTP
    - Features to know: Two consumption modes, declarative bindings, aggregate proxies, durable functions for stateful workflows.

- Google Cloud Functions
    - Supported languajes: Node, Python, Go
    - Available triggers: HTTP, Pub/Sub, Storage, Firestore, Firebase
    - Features to know: Auto Scaled with max option, version draining

- Cloudflare Workers:
    - Supported languajes: Javascript, WebAssembly

- Alibaba:
    - Supported languajes: Node, Python, java, PHP
    - Available triggers: HTTP

###Serverless Framework

- Amplify Framework
- Serverless framework
- Spring Cloud Function
- Claudia JS
- Stackery
- IOpipe
- Sigma IDE

###Resources Links

- <a href="https://hackernoon.com/what-is-serverless-architecture-what-are-its-pros-and-cons-cc4b804022e9" target="_blank">
    What is Serverless Architecture? What are its Pros and Cons?</a>

- <a href="https://martinfowler.com/articles/serverless.html" target="_blank">Serverless Architectures</a>
