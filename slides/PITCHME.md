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

&rarr; bind UI element to an application model

&rarr; Software Design Pattern

&rarr; Observer Pattern works often as underlying binding mechanism

+++

## Observer Pattern

![Logo](assets/images/observer.png)

+++

## MVC Concept

![MVC](assets/images/mvcConcept.png)

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

&rarr; different binding types are supported

&rarr; choose binding type for suited use case

One-way &#171; vs. &#187; Two-way

+++

## One-way databinding

&rarr; scope variable in HTML will be set to first value its model is bound to (first assignment) </br>

&rarr; bind the data from model to view once

+++

## Pro and contra One-way databinding

<table class="default">
  <tr>
    <th class="default">Pro</th>
    <th class="default">Contra</th>
  </tr>
  <tr>
    <td class="odd">
      only one direction of data flow
    </td>
    <td class="odd">
      No automatic adaptation of data in the model, other components, the UI
    </td>
  </tr>
  <tr>
    <td class="even">
      easy to debug
    </td>
    <td class="even">
      invalid states in application
    </td>
  </tr>
  <tr>
    <td class="odd">
      no gui validation / user input validation required
    </td>
    <td class="odd"></td>
  </tr>
</table>

+++

## Two-way databinding

&rarr; scope variable will change its value every time the model is assigned to a different value

&rarr; bind the data from model to view and view to model

+++

## Pro and contra Two-way databinding

<table class="default">
  <tr>
    <th class="default">Pro</th>
    <th class="default">Contra</th>
  </tr>
  <tr>
    <td class="odd">
      bind multiple gui elements to single source of truth in model
    </td>
    <td class="odd">
      changes in model will cause a change in gui<br/>
      &rarr; Performance issue
    </td>
  </tr>
  <tr>
    <td class="even">data consistency guaranteed</td>
    <td class="even">input validation / data type matching</td>
  </tr>
  <tr>
    <td class="odd">
      changes in data will be automatically added  to gui &rarr; write less code for display logic
    </td>
    <td class="odd">
      data manipulation / parsing works not very well<br/>
      &rarr; Performance issue
    </td>
  </tr>
</table>

---

## Frameworks supporting databinding

![Logo](assets/images/logo_map.png)

---

## TypeScript

&rarr; statically typed language

&rarr; compiles to plain javascript

&rarr; popular JS framework **Angular 2.0**

+++

## Problems of Javascript

&rarr; JS first developed as a language for client-side

&rarr; Node.js marked JS as an emerging server-side technology

&rarr; JS difficult to maintain and not reusable

&rarr; no Object Orientation, no strong type checks, no compiling checks

+++

## Solution = TypeScript

&rarr; designed by Andrers Hejlsberg (Designer of C# at Microsoft)

&rarr; strongly typed, object orientated and compiled language

&rarr; TypeScript is a superset of Javascript

&rarr; will be compiled to Javascript

+++

TypeScript is Javascript plus some additional features

![Logo](assets/images/typescriptSuper.png)

+++

## Features of TypeScript

<table class="default">
  <tr>
    <th class="default">Feature</th>
    <th class="default">Usage</th>
  </tr>
  <tr>
    <td class="odd">TypeScript is just JavaScript</td>
    <td class="odd">Only knowledge of JS required</td>
  </tr>
  <tr>
    <td class="even">Supports other JS Libraries</td>
    <td class="even">
      can be consumed of any JS Code. Can reuse all existing<br>
      JS frameworks, tools and libraries
    </td>
  </tr>
  <tr>
    <td class="odd">JavaScript is TypeScript</td>
    <td class="odd">
      Any &lt;b&gt;.js&lt;/b&gt; file can be renamed to &lt;b&gt;.ts&lt;/b&gt; and compiled with other TypeScript Files
    </td>
  </tr>
  <tr>
    <td class="even">TypeScript is portable</td>
    <td class="even">
      Portable accross multiple browsers, devices and operating systems. &rarr; runs whereever JS runs
    </td>
  </tr>
</table>

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

## will be compiled to JavaScript as followed

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

---

## Vue.js

---

## "Databinding" without vue.js

Modify a HTML element from Vanilla JS:

```html
<p id="test-id">Nothing to say</p>
<script>
    let pElem = document.getElementById("test-id");
    pElem.innerHTML = "Hello from JS";
</script>
```

---

## Databinding in vue.js

```html
  <div id="root">
    <input type="text" v-model='message'>
    <p>The value is {{message}}</p>
  </div>
```

```js
   new Vue({
    el: '#root',
    data : {
      message: 'test binding'
    }
  })
```

![Test Binding Demo](assets/images/testBinding.png)

---

## Problems of databinding

---

## Exercise

![Exercise](assets/images/exercise.jpg)
