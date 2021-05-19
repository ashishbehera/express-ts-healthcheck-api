# An Express + Typescript + Nodemon for express-ts-healthcheck-api Setup

## Prerequisites

Node.js version >= 12.x.x installed
Access to one package manager such as npm

## Project Directory & Other Setups

Start by creating a new directory where you keep your side projects in your local development environment. Inside that directory,
use npm’s initializer command to create a package.json file:

`mkdir healthcheck-api`
`cd healthcheck-api/`
`npm init --yes`

After the initializing step, let us add an express package. From the terminal window, run the command:
`npm i express@4.17.1`

## Add TypeScript

Let’s add two libraries to the development server as devDependencies.

 `typescript` is a core library that helps to compile the TypeScript code to valid JavaScript
 `ts-node` is a utility library that helps to run a development server written using TypeScript directly from the terminal
To install them, from a terminal window run the following command:

 `npm i -D typescript ts-node`

The -D flag is also known as --dev flag and is a specification for the package manager to install these libraries as devDependencies.

Once these libraries are installed, go to the package.json file and see a new devDependencies object:


Next, create a  `tsconfig.json` file at the root of the development server project. This file allows you to customize TypeScript configuration and add other configurations to compile the TypeScript project.

`tsc --init`

## Install declaration files for Node.js and Express

To install type definitions for Node.js and Express, run the below command. Do note that, these type definitions are installed as `devDependencie`

`npm i -D @types/node @types/express`

## Create an Express server with .ts extension

Now you can easily convert the minimal server code in index.js to `index.ts` file under `src` folder. That is the first step. Rename the file to index.ts.

## Watching file changes with nodemon

 `npm i -D nodemon`

add a start script in the `package.json` file as specified below:

"scripts": {
    "start": "nodemon src/index.ts",
}

Now, go back to the terminal window, and `npm run start`.


## Compile a TypeScript project

To compile a TypeScript project to a valid JavaScript one, start by declaring a new script called build inside the package.json file:

"scripts": {
    "build": "tsc --project ./",
},

From the terminal window, run the build command to compile the code:

 `npm run build`

