---
title: "Eloquent Javascript 3rd edition"
date: "2018-08-02"
image: "https://source.unsplash.com/150x150/?javascript"
keywords: "javascript"
type: "blog"
---

##Review 

This is my preview for book Eloquent Javascript 3rd edition

###Introduction

1. What is Javascript?
    > Javascript was introduced in 1995, Netscape, as a way to add programs to web pages in browser. Make applications with which you can interect directly without doing a page reload for every action
    
2. Code
    > Is the text that makes up programs.
    
3. Code Sandbox
    > <a href='https://eloquentjavascript.net/code' target='_blank'>Code Sandbox Eloquent</a> 
    
### Chapter 1 Variables, types and operators

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
            * && second statement run if its true first
            * || second statement run if its false first
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
    - Operator || return the value to its left when that can be converted to true and will return value on its right otherwise for example use in default values   
        
    - Operator && return the value to its left is something that converts to false, it return that value, and otherwise it return the value on its right
    
    - The part right is evaluated only when necessary. - true || X and false && X
    
### Chapter 2 Program Structure

1. Expressions and Statement

    - Expression is a fragment of code that produces a value.
    - Javascript statement is a sentence.
    - Side effects change the internal state of the machine.

2. Binding

    - Binding is used for keep an internal state.
    - Binding is for to catch and hold values.
    
3. Binding names
    - Any word, not start with a digit, include $ and _
    
4. Environment
    - The collection of binding and their values that exist at a given time is called the env.

5. Function
    - Is a piece of program wrapped in a value.
    - prompt('Enter :')
    - Executing a function is called invoking, calling or applying it.
    - Values given to functions are called arguments.
6. Return values
    - When a function return value, anything that produces a value is an expression in JS.
   
7. Conditional execution
    - if else if
    - braces can be used to group any number of statements into a single statement, called a block.
   
8. While and do loops
    - Loop allow us to go back to some point in the program where we were before and repeat it with our current program state.
9. For loops
    - Initializes the loop, usually by defining a binding
    - Second part is the expression that checks whether the loop must continue.
    - Final part updates the state of the loop after every iteration.
    - Break statement has the effect of immediately jumping out of the enclosing loop.
    - Continue statement is encountered in a loop body, control jumps out of the body and continues with the loop's next iteration.
    - In/Of = Properties/Values
10. Updating bindings succinctly

    - Shortcut for update a binding to hold a value based on that binding previous value c += 1
   
11. Dispatching on a value with switch

    - statement for many options, use break;
    
### Chapter 3 Functions

1. A function definition 
    - Is a regular binding where the value of the binding is a function.
    - const square = function(x) {};
    - return keyword without an expression after it cause undefined
2. Bindings and scopes
    - Binding has scope.
    - let and const are in fact local to the block.
3. Nested scope
    - Local scope can also see all the local scopes that contain it. Is called lexical scoping.
    
4. Functions as values
    - Its possible to store a function value in a new binding.
5. Declaration notation
    - function keyword 
    - Functions declarations are moved to the top of their scope.
6. Arrow functions
    - instead function keyword it uses an arrow => 
7. Call stack
    - The way control flows, the computer must remember the context from which the call happened in a function.
    - When the stack grows too big will fail.
8. Optional arguments
    - optional arguments are ignored 
    - = operator after a parameter, followed by an expression, the value is default.
9. Closures
    - Closures is a feature able to reference a specific instance of a local binding in an enclosing scope.
    - Function values as containing the code in their body and the env in which they are created. When called, the function body sees the environment it was created, not env is called.
10. Recursion
    - It use call stack.
11. Functions and side effects
    - A pure function is a specific kind of value producing function that not only has no side effects but also doesnt rely on side effects from other code. 
    
### Chapter 4 Data Structures Objects and Arrays

1. Dataset

    - Data type specifically for storing sequences of values. Its called an array.
2. Properties

    - Almost all Js values have properties. Exceptions are null and undefined.
    - Two way to access properties are with a dot and with square brackets. Difference is when using a  dot, the word after is the literal name of the property, when using square brackets, the expression between the brackets is evaluated to get the property name.
    
3. Methods
    - Properties that hold function values.
4. Objects
    - Arbitrary collections of properties.
    - Create by using braces as an expression.
    - Braces two meanings (Block or describe an object).
    - delete is a unary operator that remove a property from the object.
5. Mutability
    - Immutable such as numbers, strings and booleans.
    - Objects is mutable.
6. Arrayology
    - unshift, shift, push, pop, indexOf, lastIndexOf, slice, concat
7. String 
    - slice, indexOf, trim, padStart, split, join, repeat
8. Math
    - min, max, sqrt, cos, sin, tan, acos, asin, atan, PI, random, floor, ceil, round, abs
9. JSON
    - Use for save data in a file. Serialize data in format JSON.
    - stringify, parse

### Chapter 5 Higher Order Function

1. Abstraction

    - Hide details and give us the ability to talk about problems at a higher level.

2. Higher-Order Functions

    - Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
3. Filter, Map, Reduce
    - function is pure.
4. String and character codes
    - charCodeAt
    - codePointAt
    
### Chapter 6 The secret life of Objects

1. Encapsulation

    - Put an underscore (_) character at the start of property names to indicate that those properites are private.
    - Pieces of a program interact through interfaces.
    - Interface consists of a specific set of methods and properties.

2. Methods

    - Methods are properties that hold function values.
    - When a function is called as a method looked up as a property and immediately called.
    - 'This' its a body automatically points at the object that it was called on.
    - Called method takes the this value as its first argument and treats further arguments as normal parameters.
    - Arrow functions are different, they do not bind their own this, but can see the this binding of the scope around them.

3. Prototypes

    - A prototype is another object that is used as a fallback source of properties.
    - When an objects gets a request for a property that it does not have, its prototype will be searched for the property, the the prototype's prototype, and so on.

4. Classes

    - A class defines the shape of a type of object.

### Chapter 8 Bugs and Errors

1. Strict mode

    - Is very helpful when you create a binding
    - When you forget new keyboard in constructor, will produce an error
    - Note: This refers to the global scope object

2. Testing
    - Test suites are pieces of software that help you build and run collections of tasks.
    - Test runners are suited to expressing test and by outputting informative information when a test fails.

3. Debugging
    - Debugger statement.

4. Exceptions
    - Exceptions are a mechanism that makes it possible for code that runs into a problem to raise an exception.
    - Stack trace is information about the call stack that existed when the some exception was created.