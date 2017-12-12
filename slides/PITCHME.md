@title[Introduction]

# Two-way data binding in MVC

Peter Kurfer, Thomas Mildner

---

## Agenda

* What is data binding?
* History and concepts
* Two-way vs. One-way data binding
* Frameworks supporting data binding

+++

## Agenda

* Introduction to TypeScript
* Introduction Vue.js
* Data binding in Vue.js
* Exercise
* Edge cases

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

## Two-way vs. One-way data binding

&rarr; different binding types are supported

&rarr; choose binding type for suited use case

One-way &#171; vs. &#187; Two-way

+++

## One-way data binding

&rarr; scope variable in HTML will be set to first value its model is bound to (first assignment)

&rarr; bind the data from model to view

&rarr; changes in the model are getting transported to the view but not vice versa

+++

## Pro and contra One-way data binding

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

## Two-way data binding

&rarr; scope variable will change its value every time the the model value is changed and vice versa

&rarr; bind the data from model to view and vice versa

+++

## Pro and contra Two-way data binding

<table class="default">
  <tr>
    <th class="default">Pro</th>
    <th class="default">Contra</th>
  </tr>
  <tr>
    <td class="odd">
      bind multiple GUI elements to a single source of truth in the model
    </td>
    <td class="odd">
      changes in model will cause a change in UI<br/>
      &rarr; Performance issue
    </td>
  </tr>
  <tr>
    <td class="even">data consistency guaranteed</td>
    <td class="even">input validation / data type matching</td>
  </tr>
  <tr>
    <td class="odd">
      changes in data will be automatically added  to UI &rarr; write less code for display logic
    </td>
    <td class="odd">
      data manipulation / parsing works not very well<br/>
      &rarr; Performance issue
    </td>
  </tr>
</table>

+++

![One vs. Two Way Binding](assets/images/binding_comparison.png)

---

## Frameworks supporting data binding

![Logo](assets/images/logo_map.png)

---

## TypeScript

&rarr; statically typed language

&rarr; compiles to plain JavaScript

&rarr; popular JS framework **Angular 2.0/IO** (not just compatible through typings but completely written in TypeScript)

+++

## Problems of JavaScript

&rarr; JS was first developed as a language for client-side

&rarr; Node.js marked JS as an emerging server-side technology

&rarr; JS is difficult to maintain and hardly reusable

&rarr; no object orientation, no strong type checks, no compiling checks

+++

## Solution = TypeScript

&rarr; designed by Anders Hejlsberg (Designer of C# at Microsoft - 2012)

&rarr; strongly typed, object orientated and compiled language

&rarr; TypeScript is a superset of JavaScript

&rarr; will be compiled to JavaScript

+++

TypeScript is JavaScript plus some additional features

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
      Any <b>.js</b> file can be renamed to <b>.ts</b> and compiled with other TypeScript Files
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

## First example of TypeScript ...

```ts
class Greeting {
    greet(): void {
        console.log("Hello World!!!")
    }
}

let g = new Greeting();
g.greet();
```

@[1-5](Declare class `Greeting`)
@[7-8](Instantiate class `Greeting` and call method `greet()`)

+++

## Variables and Compile Checks

```ts
let firstName: string = "John";
let score1: number = 50;
let score2: number = 42.50
let sum = score1 + score2
```

Compile Error:

```ts
let num: number = "hello"
```

&#x26a1; Compiler error because `"hello"` is no `number`

+++

## Functions

```ts
function calc_discount(price: number, rate: number = 0.50): Unit {
    let discount = price * rate;
    console.log("Discount Amount: ", discount);
}

calc_discount(1000)

// call method without default parameter
calc_discount(1000, 0.30)
```

@[1-4](Declaring a new function with default parameter `rate`)
@[6](Calling function with default parameter)
@[8-9](Calling function with override of default parameter)

+++

## Anonymous functions

```ts
let res = function (a: number, b: number) {
    return a * b;
};
console.log(res(12, 2))
```

+++

## Lambda Expressions

```ts
let foo = (x: number) => 10 + x;
console.log(foo(100))      //outputs 110
```

---

## Vue.js

---

## "Data binding" without Vue.js

Modify an HTML element from Vanilla JS:

```html
<p id="test-id">Nothing to say</p>
<script>
    let pElem = document.getElementById("test-id");
    pElem.innerHTML = "Hello from JS";
</script>
```

---

## Data binding in Vue.js

![Databinding in Vue.js - schema](assets/images/vuejs_binding.png)

[Quelle](https://vuejs.org/v2/guide/reactivity.html)

+++

## Data binding in Vue.js - Template syntax

```html
<div id="root">
  <p>The value is {{message}}</p>
</div>

<script>
new Vue({
    el: '#root',
    data: {
        message: 'test binding'
    }
})
</script>
```

@[1-3](Declare binding by using a `{{template-string}}` directly in HTML)
@[5-12](Instantiate new `Vue` and declare a property `message` within the `data` property)

+++

## Data binding in Vue.js - Attribute syntax

```html
<div id="root">
  <input type="text" v-model='message'>
  <p>{{message}}</p>
</div>

<script>
new Vue({
  el: '#root',
  data: {
    message: 'initial value'
  }
});
</script>
```

@[1-4](Declare binding by using the `v-model` attribute - `v-model` can only be used on input elements!)
@[6-13](Instantiate new `Vue` and declare a property `message` within the `data` property)

+++

## Data binding in Vue.js - Conditions

```html
<div id="root">
  <p v-if="showParagraph">{{message}}</p>
  <p v-else>Paragraph is hidden</p>
</div>

<script>
  new Vue({
    el: '#root',
    data: {
      message: 'Hello :)',
      showParagraph: true
    }
  })
</script>
```

@[1-4](Declare a conditional binding with `v-if`- `v-else` is optional. Also expression can be used within `v-if`!)
@[6-14](Instantiate new `Vue` and declare the properties `message`, and `showParagraph` within the `data` property)

+++

## Data binding in Vue.js - Loops

```html
<div id="root">
  <ul>
    <li v-for="item in items" :key="item.id">{{item.value}}</li>
  </ul>
</div>

<script>
  new Vue({
    el: '#root',
    data: {
      items: [ { id: 1, value: 'Hello' }, { id: 2, value: 'World' } ]
    }
  })
</script>
```

@[1-5](Declare a loop by using the directive `v-for`. The `:key` attribute is not mandatory but best practice (and you're getting warnings if you don't declare it))
@[7-14](Instantiate new `Vue` and declare a list of items within the `data` property which are iterated in the view)

---

## Exercise

![Exercise](assets/images/exercise.jpg)

---

## Edge cases of data binding in Vue.js

+++

### Dynamic properties

Vue.js does recognize new properties of objects (or when a property is deleted), when the instance is already initialized.

```js
let vm = new Vue({
  data: {
    a: 1
  }
});

vm.b = 2
```

+++

### Dynamic properties

If required there's a "hack" to resolve the problem:

```js
Vue.set(vm.someObject, 'b', 2)
```

_Side note: because TypeScript enforces strict typing this edge case does not really matter for TypeScript (except you're using `any` but why should you &#x1f609; )._

+++

### Reactive properties

```js
let vm = new Vue({
  data: {
    message: ''
  }
});

//...

vm.message = 'Hello, World!';
```

@[1-5](Instantiate new `Vue` and declare an empty message property as Vue.js can't handle dynamically added properties. Property has to have a default value to avoid `undefined` errors)
@[9](Set value of property later on)