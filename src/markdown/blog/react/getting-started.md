---
title: "React Getting Started"
date: "2018-05-02"
image: "https://source.unsplash.com/150x150/?react"
keywords: "react"
type: "blog"
---

##Why React!
* A javascript library for building user interfaces
* React is small, not a complete solutions
* UI are everywhere 
* React is declarative
* Declarative for dynamic data
####How exactly is not being a framework a good thing?
* Many smart decisions
* Focus in application level
* Disadvantages about framework
    * Limited flexibility
    * Hard to deviate
    * Large and full of features
    
* Philosophy

    > * Write programs that do one thing and do it well.
    > * Write programas to work together.
    > * Write programas to handle text streams, bacause that is a universal interface.
    > * A language to model the state of UIs, not the transactions on them
    
##Concepts

1. Components

    * Like functions
    * Input: props,state | Output: UI
    * Reusable and composable
    * COmponent /
    * Can manage a private state
2. Reactive update
    * React will react
    * Take update to the browser
3. Virtual views in memory
    * Generate HTML using Javascript
    * Tree reconciliation
4. Function Component

    > const MyComponent = (props) => {
        return (<domElementOrComponent ... />)
     }
     
    props dont change
5. Class COmponent

     > Class 
        MyComponent 
            extends React.Component {
            render() {
                return (<dome ../>)
            }
        }
        
    states changes
6. JSX is Not HTML

###React Component

<a href="https://jscomplete.com/playground/s239555" target='_blank'>Js Complete for this part</a> 

* Install React DevTools Extension 

* JSX to JS (babel)
    
    > < div> Hello React < /div> 
    > React.createElement("div",null,'Hello React!')

* React has some rules uppercase in first letter
    > < Button /> !== < button />
    
* React has a special function useState()
    
    ```
    return [ 
        state object getter (getter),
        updater function (setter)
    ]
    ```
    
    > useState called hook     
* ####Why does react not work with sibling tag?
    > Is because each one of these elements get translated to function call
    
    * Use array in dynamic way
    ```
        [< Button />,< Display />]
    ```
    * Use the children of another React element
    ```
        < div>
            < Button />
            < Display />
        < /div>
    ```
    * Use a special object enclose multiple children
    ```
    < React.Fragment >{...children} < React.fragment />
    or
    <> {...children}</>
    ```
* One way flow of data
    > Parents components can flow their data down to children components. Parents component can also flow down behavior to children
    
* Responsibility 
    > Important decision, where to define state?
    
    > Down in a tree as close as possible to the children who need to acces that value on the state.

#### Components Reusability


      