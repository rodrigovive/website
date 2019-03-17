---
title: "Building starter kit from scratch"
date: "2018-01-30"
image: "https://source.unsplash.com/150x150/?javascript"
keywords: "javascript"
type: "blog"
---

##Wrap up!

###You need a starter kit

* Reduce decision fatigue
* Rapid feedback

###Editor config

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

* ####What to look for

   *   Strong ES2015+support
   
       1.  Autocompletion
       2.  Parse ES6 imports
       3.  Report unused imports
       4.  Automated refactoring
   
   *   Framework intelligence
   *   Built-in terminal
   
* ####Javascript Editors
    *   Atom
    *   WebStorm _( for me )_
    *   Brackets
    *   VSCode
    
* ####Setup

1.  Create `.editorconfig`
2.  Code for .editorconfig
    ```
    # EditorConfig is awesome: https://EditorConfig.org

    # top-most EditorConfig file
    root = true

    # Unix-style newlines with a newline ending every file
    [*]
    end_of_line = lf
    insert_final_newline = true
    # Matches multiple files with brace
    # expansion notation
    # Set default charset
    [*.{js,py}]
    charset = utf-8

    # 4 space indentation
    [*.py]
    indent_style = space
    indent_size = 4

    # Tab indentation (no size specified)
    [Makefile]
    indent_style = tab

    # Indentation override for all JS under 
    # lib directory
    [lib/**.js]
    indent_style = space
    indent_size = 2

    # Matches the exact files either 
    # package.json or .travis.yml
    [{package.json,.travis.yml}]
    indent_style = space
    indent_size = 2

3.  Plugin necessary for Editors

###Editor config

    
* ####Javascript Package Managers
    *  Bower
    *  Npm
        * Popularity and become more powerful, today is clear popular in Js
    *  JSPM
        * Other locations, discuss bundler
        
    *  JAM
    *  Volo
* ####Setup npm

    1.  Install nodejs
    2.  Download [Package.JSON](http://bit.ly/jsdevpackagejson)
    3.  Copy and run npm install
    
###Development Web Server

* ####Development Web Servers

    *   http-server
        *   ultra simple
        *   Single command servers current directory
    *   live-server
        *   lightweight
        *   support live editing
    *   Express
        *   Comprenhensive
        *   highly configurable
        *   production grade
        *   can run it everywhere ( **koa** and **hapi**)
    *   budo
        *   Integratis with browserify
        *   includes hot reloading
    *   Webpack dev server
        *   built in to webpack
        *   serves from memory
        *   includes hot reloading
    *   Browsersync
        *   Dedicated ip for sharing work on land
        *   all interactions remain in sync
        *   Great for cross-device testing
        *   Integrates with webpack, Express

* ####Setup Express
    Express is a production server too
    
    1.  Create a folder and <var>srcServer.js</var>
    2.  ```
        var express = require("express"); 
        const path = require('path')  
        const open = require('open')
        const port = 3000;
        var app = express();
        app.get("/",function(req,res) => {
         res.sendFIle(path.join(__dirname, 'index.html'
         );
        }) => { if(err) console.error(err);
            open('http://localhost:'+ port)
        }) 
    
    
* ####Sharing Work-in-progress **(Libraries)**

    * [Localtunnel](https://localtunnel.github.io/www/)
        
        *  <kbd>npm install -g localtunnel</kbd>
        *  Start your app
        *  <kbd>lt --port 8000 --subdomain cherrynford</kbd>
        
    * [Ngrok](https://ngrok.com/)
        
        1.  Sign up
        2.  Install ngrok
        3.  Install authtoken
        4.  Start your app
        5.  <kbd>./ngrok http 80</kbd>
    * [Surge](https://surge.sh/)
    
        Quickly host static files to public URL
        
        1.  <kbd>npm install --global surge</kbd>
        2.  <kbd>surge</kbd>

    * [Now](https://zeit.co/docs)
    
        1.  Quickly deploy node.js
        2.  npm install -g now
        3.  Create start script
        4.  now

