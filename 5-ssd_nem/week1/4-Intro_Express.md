# Introduction to Express

In this lesson you will:

- __Learn__ about the `Express framework` that enables _implementing_ and _deploying_ powerful `web servers` based on `Node`.

At the end of this lesson, you will be able to:

- __Implement__ a `web server` using the Express framework
- __Develop__ a `web server` that supports a `REST API`
- __Use__ `Express` _router_ to implement support for the `REST API`

--------------------------------

Exercise (Instructions): Introduction to Express

In this exercise, you will make use of the `Express` framework to implement similar functionality as implemented by the HTTP module based servers in the previous exercise. At the end of this exercise, you will be able to:

- __Implement__ a _simple_ `web server` using Express framework
- __Implement__ a `web server` that serves _static_ content

## A Simple Server using Express

- Create a folder named _node-express_ in the NodeJS folder and move to that folder.
- Copy the public folder from node-http to this folder.
- At the prompt, type the following to initialize a _package.json_ file in the node-express folder:

--------------------------------

Exercise (Instructions): Express Router

Objectives and Outcomes

In this exercise, you will:

- __develop__ a `web server` that exports a `REST API`.
- __use__ the `Express framework`, and the `Express router` to implement the server.

At the end of this exercise, you will be able to:

- Use application routes in the Express framework to support REST API
- Use the Express Router in Express framework to support REST API

## Setting up a REST API

- You will continue in the _node-express_ folder and modify the server in this exercise.
- Install _body-parser_ by typing the following at the command prompt:

```bash
npm install body-parser --save
```

- Update _index.js_ as shown below:

```js
. . .

const bodyParser = require('body-parser');

. . .

app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    next();
});

app.get();

app.post();

app.put();

app.delete();

app.get();

app.post();

app.put();

app.delete();

. . .
```

- Start the server and interact with it from the browser/postman.

## Using Express Router

- __Create__ a new folder named routes in the _node-express_ folder.
- __Create__ a new file named _dishRouter.js_ in the _routes_ folder and add the following code to it:

```js
```

- __Update__ _index.js_ as follows:

```js
```

Start the server and interact with it and see the result.

Conclusions

In this exercise, you used the Express framework and Express router to build a server supporting a REST API.
