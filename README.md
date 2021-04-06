`#localstorage` `#assembler-school` `#master-in-software-engineering`

# Assembler School: JS LocalStorage Exercises

## Getting Started

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/js-localstorage-exercises.git
```

Then, you will have to install all the dependencies with npm:

```bash
$ npm install
```

You will probably have to execute the following command in the terminal line in order to fix the dependency issues:

```bash
$ npm audit fix
```

## Exercises

Once you have completed al the steps of the [Getting Started](#getting-started) section, you will have to execute the following command that will prepare a localhost environment.

The command will compile all the necessary assets into a new folder called [dist](./dist) and it will open a localhost server that allows you to do the exercises without having to reload the page:

```bash
npm run start
```

Finally you must open a new terminal (you leave the previous one open since it has the test server running).

In this new terminal you will have to execute the following command, which will allow you to know in real time if you have correctly implemented the exercises.

```bash
npm run test
```

_Keep in mind that the files to which you must implement your solution are those found inside the [src](./src) folder_

In case that you want to see in the browser the result of your solutions, you will have to call to the function of each exercise in the same JS file:

```js
// 01-exercise.js

exercise01();

function exercise01() {
  // Here is your solution
}
```

Now you will be able to see the solution in the browser.

Once you have validated that the solution is applied correctly, you will have to remove the call that you have made manually to the function so that the test passes successfully.

```js
// 01-exercise.js

function exercise01() {
  // Here is your solution
}
```

## Author <!-- omit in toc -->

[Dani Lucaci](https://github.com/danilucaci)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)
