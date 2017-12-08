@title[Einleitung]

# Two-way data binding in MVC

Peter Kurfer, Thomas Mildner

---

## Agenda

* What is data binding?
* History and concepts
* Two-way vs. One-way databinding
* Frameworks supporting databinding

+++

## Agenda

* Introduction to TypeScript
* Introduction Vue.js
* Databinding in Vue.js
* Problems of databinding
* Exercise


---
## What is data binding?

&rarr; bind UI element to an application model </br>
&rarr; Software Design Pattern <br/>
&rarr; Observer Pattern works often as underlying binding mechanism <br/>


+++
## Observer Pattern


![Logo](assets/images/observer.jpg)

+++

## MVC Concept

<div align="center">

![MVC](assets/images/mvcConcept.png)

</div>
+++ 

## Challenges for data binding

<div class="twocolumn">
  <div>
    &rarr; input validation </br> 
    &rarr; data type mapping
  </div>
  <div>
    <img src="https://github.com/Jonny9904/KP-DataBinding/blob/master/assets/images/validation.png?raw=true" alt="Validation">
  </div>
</div>

---

## History and concepts



---

## Two-way vs. One-way databinding

&rarr; different binding types are supported <br/>
&rarr; choose binding type for suited use case <br/>

One-way &#171; vs. &#187; Two-way

+++

## One-way databinding

&rarr; scope variable in HTML will be set to first value its model is bound to (first assignment) </br>

&rarr; bind the data from model to view once

+++

## Pro and contra One-way databinding
<table style="border-collapse:collapse;border-spacing:0;border-color:#999;margin:0px auto"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;text-align:center">Pro</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;text-align:center">Contra</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">only one direction of data flow</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">No automatic adaptation of data in the model, <br>other components, the UI</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">easy to debug</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">invalid states in application</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">no gui validation / user input validation<br>required</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center"></td></tr></table>
+++

## Two-way databinding

&rarr; scope variable will change its value every time the model is assigned to a different value </br>

&rarr; bind the data from model to view and view to model

+++

## Pro and contra Two-way databinding
<table style="border-collapse:collapse;border-spacing:0;border-color:#999;margin:0px auto"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;text-align:center">Pro</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;text-align:center">Contra</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">bind multiple gui elements to single source <br>of truth in model</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">changes in model will cause a change in gui<br>--&gt; Performance issue</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">data consistency guaranteed</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">input validation / data type matching</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">changes in data will be automatically added <br>to gui --&gt; write less code for display logic</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">data manipulation / parsing works not very well<br>--&gt; Performance issue</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center"></td></tr></table>

---

## Frameworks supporting databinding

![Logo](assets/images/logo_map.png)

---

## TypeScript

&rarr; statically typed language </br> 
&rarr; compiles to plain javascript </br> 
&rarr; popular JS framework <b>Angular 2.0</b> </br> 

+++

## Problems of Javascript

&rarr; JS first developed as a language for client-side </br>
&rarr; Node.js marked JS as an emerging server-side technology </br>  
&rarr; JS difficult to maintain and not reusable</br> 
&rarr; no Object Orientation, no strong type checks, no compiling checks </br> 

+++

## Solution = TypeScript

&rarr; designed by Andrers Hejlsberg (Designer of C# at Microsoft) </br> 
&rarr; strongly typed, object orientated and compiled language </br> 
&rarr; TypeScript is a superset of Javascript </br> 
&rarr; will be compiled to Javascript </br> 

+++

TypeScript is Javascript plus some additional features </br>

![Logo](assets/images/typescriptSuper.png)

+++

## Features of TypeScript
<table style="border-collapse:collapse;border-spacing:0;border-color:#999;margin:0px auto"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;text-align:center">Feature</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;text-align:center">Usage</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">TypeScript is just JavaScript</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">Only knowledge of JS required</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">Supports other JS Libraries</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">can be consumed of any JS Code. Can reuse all existing<br>JS frameworks, tools and libraries</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">JavaScript is TypeScript</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#D2E4FC;text-align:center">Any &lt;b&gt;.js&lt;/b&gt; file can be renamed to &lt;b&gt;.ts&lt;/b&gt; and <br>compiled with other TypeScript Files</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">TypeScript is portable</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center">Portable accross multiple browsers, devices and operating systems.<br>&amp;rarr; runs whereever JS runs</td></tr></table>

+++
## First example of Typescript ...

```ts
class Greeting { 
   greet():void { 
      console.log("Hello World!!!") 
   } 
} 

var obj = new Greeting(); 
obj.greet();
```

+++ 

## will be compiled to JavaScript as followed:

```js
var Greeting = (function () {
   function Greeting() {
   }
   Greeting.prototype.greet = function () {
      console.log("Hello World!!!");
   };
	return Greeting;
}());

var obj = new Greeting();
obj.greet()
```

+++

## Variables and Compile Checks

TypeScript:

```ts
var name:string = "John";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
```

JavaScript:
```js
var name = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
```
Compile Error:
```js
var num:number = "hello"     // will result in a compilation error
```

+++

## Functions

```ts
function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30) // call method without default parameter

```

+++

## Anonymous functions

```ts
var res = function(a:number,b:number) {
   return a*b;
};
console.log(res(12,2))
```

+++

## Lambda Expressions

TypeScript:

```ts
var foo = (x:number)=>10 + x
console.log(foo(100))      //outputs 110
```

JavaScript:

```js
var foo = function (x) { return 10 + x; };
console.log(foo(100));      //outputs 110
```

+++

<!-- TODO -->
Evtl noch Angular 2.0 Databinding zeigen? 

---

## Vue.js

<<<<<<< HEAD
=======
---

## "Databinding" without vue.js

```html


```
>>>>>>> slides-intro
---

## Databinding in vue.js

```html
  <div id="root"> 
    <input type="text" v-model='message'>
    <p>The value is {{message}}</p>
  </div>  
```
  
```ts
   new Vue({
    el: '#root',
    data : {
      message: 'test binding'
    }  
  })    

```

<img src="https://github.com/Jonny9904/KP-DataBinding/blob/master/assets/images/testBinding.png?raw=true" alt="Test Binding Demo">




---

## Problems of databinding

---

## Exercise

![Exercise](assets/images/exercise.jpg)