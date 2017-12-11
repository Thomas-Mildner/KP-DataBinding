# Assignment

## Setup

### Virtual machine

In the given `.zip`-File is an OVF template to create a virtual machine.
You can import the given template either to VirtualBox or VMWare Player.
No special setup is required.

The virtual machine is configured to log you in automatically.
You'll find a link to Git repository on the desktop when the virtual machine is up and running.

_Side note: It's recommended to pull the repository before starting the assignment as it might be the case that there are outstanding changes!_

### Docker

If you don't want to use the virtual machine, or if you just prefer to use Docker, you can use the image [knsit/yarn](https://hub.docker.com/r/knsit/yarn/) to avoid the Installation of the whole toolchain (Node.js, Yarn).
Just navigate to the `assignment` directory in the Git repository and run the container like this (Linux/Mac):

```bash
docker run --name yarn --rm -v "$PWD":/home/yarn knsit/yarn:1.3.2 run dev
```

or Windows:

```powershell
docker run --name yarn -v "$((pwd).Path):/home/yarn" --rm -p 8080:8080 knsit/yarn:1.3.2 run dev
```

As editor/IDE we recommend to use Visual Studio Code with the following plugins:

* EditorConfig for VS Code
* TSLint Vue
* Vue TypeScript Snippets
* yarn

The plugins are not required but they would make it easier.

### Dev-Server

To run the Dev-Server execute the following command:

```bash
yarn run dev
# or if you prefer npm
npm run dev
```

No matter if you're using _npm_ or _yarn_ the task runner should open a new browser tab/window.
The tiny web application you're confronted with contains:

* the lecture notes rendered as HTML
* this document which will lead you through this assignment (also rendered as HTML)
* the API spec (OpenAPI) of a custom **I**nternet **C**huck **N**orris **D**ata**b**ase we'll use for one part of the assignment
* Links to the components you have to complete as part of this assignment
* Links to the solutions for all parts of this assignment

## Part 1

The first part of the assignment covers the basic Vue.js concepts for databinding like `v-model`, template strings (`{{myVariable}}`), `v-for`, `v-if` and `v-else`.

Have a look at the folder `assignment/src/components/assignments/part1`.

It contains (more or less) a typical Vue.js TypeScript component:

* `index.ts` - controls the exports of the module
* `part1.html` - contains the template rendered with this component
* `part1.scss` - contains styles required **only** for this component (common styles are located in the file `main.scss`)
* `part1.ts` - contains the business logic of the component and imports the _.html_ and the _.scss_ files

The file `part1.html` contains a tab view with two tabs. One to register your favorite movie actors and one for displaying them as card view.
Once you have "submitted" the actor registration form (actually you don't submit anything as we are in a single page application) the actor should show up in the second tab.

The required HTML code is already there but all databindings are missing.
Start by binding the form to the properties of the `currentInputActor` in the component.
If you are not sure if the binding is working correctly have a look at the browser console.
The given model logs the new value of a property everytime a setter is called (of course just for debugging purposes! Don't do that in production!).

If you have no idea how to start have a look at the [docs](https://vuejs.org/v2/guide/syntax.html).
Or just ask us!

## Part 2

## Part 3
