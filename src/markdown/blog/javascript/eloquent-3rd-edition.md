---
title: "Eloquent Javascript 3rd edition"
date: "2018-08-02"
image: "https://source.unsplash.com/150x150/?javascript"
keywords: "javascript"
type: "blog"
---

##Review 

This is a review for book Eloquent Javascript 3rd edition

###Chapter 1 Introduction

1. What is Javascript?
    > Javascript was introduced in 1995, Netscape, as a way to add programs to web pages in browser. Make applications with which you can interect directly without doing a page reload for every action
    
2. Code
    > Is the text that makes up programs.
    
3. Code Sandbox
    > <a href='https://eloquentjavascript.net/code' target='_blank'>Code Sandbox Eloquent</a> 
    
###Chapter 2 Variables, types and operators

1.  Values: Pieces of information made of bits
    1. Numbers 
        * Operators: + * - / %(remainder)
            * order is by the precedence of the operators, when multiple operators with the same is left to right
        * Binary operators but minus (-) is unary operator too
        * Special numbers
            * Infinity 
            * Infinity -
            * NaN
        
    2. String
        * Unary operators that produce string
            (Typeof)
    3. Boolean Values
        * Comparison < || > binary operators
        * string are ordered alphabetic Z < a
        * There is only one value ins JS that is not equal to itself NaN == NaN
        * Logical operators
            * && 
            * || 
            * ! not is an unary operator
            * Precedence
                * ||, &&, >, ==, ..., / *, + -
            * Ternary operator (Conditional operator)
                * (conditional) ? true : false;
    4. Empty values
        * Null and Undefined
            1. difference is accident of Js design  
            2. they are themselves values, but they carry no information
2. Automatic type conversion
    > When an operator is applied to the wrong type of value, Js will quietly convert that value to the type it needs
    * Type coercion
        * null = 0
        * "5" = 5 (string to number)
        * ""+1 = "1" (from number to string)
        * "five"+1 = NaN
3. Short circuiting of logical operators
 
    
        
       
        
               
