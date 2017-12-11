# Two-way databinding in MVC
> by Peter Kurfer and Thomas Mildner



## Agenda

* What is data binding?
* History and concepts
* Two-way vs. One-way databinding
* Frameworks supporting databinding
* Introduction to TypeScript
* Introduction Vue.js
* Databinding in Vue.js
* Problems of databinding


# Data binding

## What is data binding?

First of all, we would like to define the term data binding and explain the principle behind it.
Most applications are seperated in different application layer. Mostly exists one GUI (Graphical User Interface) Layer which has the responsibility for the gui display. There is also a layer for the application logic and a data model layer. This typcial architecture is called 3-tier architecture. In the following picture is an application splitted in the three typical tiers. The presentation layer are various components which displays the gui compononents and handles the user interaction. The secound tier is called application layer and is managing the business logic. This layer is responsible for the behaviour of the application. This includes the process flow logic, computations and control of the data. The last layer is called data layer. It`s main point is to manage the persistence of the data, including loading and storing the data in a persistence way.

![ThreeTierArchitecture](/img/threeTierApplication.gif)

The main task for data binding is to bind an UI element to an application model. The value, which is displayed to the user is binded to a data container in the application logic. Changes requested from an user are also triggered in the application logic to handle with the new data. This is a common software design pattern. Most data binding frameworks implemented this mechanism with an observer pattern, which is also a common and well known software design pattern. The observer principle is working often as an underlying binding mechanism.

## Observer Pattern
This short paragraph represents a quick repetition of the observer pattern. If you already know the principle, you may skip this section.

<!-- TODO -->
![ObserverPattern](/img/ObserverPattern.png) 

The observer pattern is a software design pattern defining a one-to-many dependency between objects. When one object is changes state, all its dependetens are notified and updated automatically. This technique is often used in other software design patterns like the MVC (Model-View-Controller) concept. The watched object is called the subject and registers themselves as an Observer when they are created. Whenever the subject changes, it broadcasts to all registered Observers that it has changed. Observers may pull only the information they needed from the Subject, but in most cases they are fully notified from the Observer.
This mechanism allows to split the view part of an application and the application logic. An object in the business logic layer is registered as an observer and all gui components can register themselve by the observer. If one part is changing the state of the object in the application layer, all registered gui components will be notified and can update their states in the UI. This ensures a synchronous state application widely. Because of this reasons many gui frameworks and concepts has implemented the observer pattern.

## Challenges for data binding

In this chapter there will be some challenges evualuated which has to be solved through data binding.

Main points may are:
* Input validation
* data type mapping
* performance issues

### Input Validation

Input validation is performed to ensure only properly formed data is entering the workflow in an application. 
This prevents storing malformed data in the database and triggering a malfunction of some components of the application. Input validation is also a main part in the it security of an application or a company. Many attacks are successfull because of leak input validation in web applications. Some examples may are sql injection attacks, where the input of a user is not sanitized and is directly routed to an underlying sql executor. This allows to execute sql commands with the rights of the appliction. Input validation should happen as early as possible in the data flow, this includes also gui input validation. For security reasons it is not secure to validate the input data only in the gui. This mechanism can be bypassed. 

On the other hand input validation is some extra feature and a benefit for the user. For example the field "city" can be autofilled  if the postcode is entered correctly. Another feature may are the validation of an email address. It could be displayed a warning for the user if the mail address seems to be invalid. The user can check and correct the input data and post the form data successfull if all gui validations are positive.

The following example shows an android application where input validation is implemented. A warning for an invalid mail address is displayed and also there is a hint for the user that the password field is a mandatory field and input is required.

<!-- TODO -->
![Input Validation]()

### Data type mapping

Another challenge, which has to be solved automatically with data binding is data type mapping.
In a strongly typed programming language are existing different data types such like Integer, String, Objects and so on.
The challenge for data binding is to automatically map different types of data to the same gui element. For example a textbox field can represent integer values but also plain text. On the other hand a complex object has to be bound to a couple of fields in the gui. A example may be a object like "customer" with different type of information such as firstname, lastname and the birth date. 
This mechanism is also part of the input validation topic because input validation has to prevent storing wrong data types in the underlying objects. Input validation can correct and remove wrong data types like a character from a number only field.