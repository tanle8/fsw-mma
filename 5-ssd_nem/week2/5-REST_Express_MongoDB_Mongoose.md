# REST API with Express, MongoDB and Mongoose

In this lesson you will integrate the REST API that you developed with the Express framework earlier together with the Mongoose `schemas` and `models` and the MongoDB `database` to provide the complete _end-to-end_ implementation of the server to support REST API.

At the end of this lesson, you will be able to:

- __Develop__ a _full-fledged_ `REST API server` with `Express`, `MongoDB` and `Mongoose`
- __Implement__ the _end-to-end_ solution integrating `Express`, `Node` and `Mongo`.

## REST API with Express, MongoDB and Mongoose Part 1

Objectives and Outcomes

In this exercise, you will:

-  __Integrate__ the _REST API server_ based on the `Express framework` that you implemented earlier, together with the `Mongoose schema` and `models` to create a _full_-fledged `REST API server`.

At the end of this exercise, you will be able to:

- __Develop__ a _full-fledged_ `REST API server` with `Express`, `MongoDB` and `Mongoose`
- __Serve up__ various `REST API end points` together with interaction with the `MongoDB server`.

### Update the Express Application

- Go to the conFusionServer folder where you had developed the REST API server using Express generator.
- Copy the models folder from the node-mongoose folder to the conFusionServer folder.
- Then install bluebird, mongoose and mongoose-currency Node modules by typing the following at the prompt:

### Install depencies

```bash
npm install bluebird mongoose mongoose-currency --save
```

#### Update Code to connect to the MongoDB server

```js
. . .

const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

. . .
```

Next open _dishes.js_ in the models folder and update it as follows:

```js
. . .

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

. . .

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

. . .
```

### Update dishRouter to be able to interact with the Mongo server using Mongoose

- Now open _dishRouter.js_ and update its code as follows:

```js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../models/dishes');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req,res,next) => {
    Dishes.find({})
    .then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Dishes.create(req.body)
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    Dishes.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

dishRouter.route('/:dishId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true })
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dishes.findByIdAndRemove(req.params.dishId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = dishRouter;
```

- Save the changes and start the server. Make sure your MongoDB server is up and running.

- You can now fire up postman and then perform several operations on the REST API. You can use the data for all the dishes provided in the db.json file given above in the Exercise Resources to test your server

- In this exercise you developed a full-fledged REST API server with Express, Mongo and Mongoose.

## REST API with Express, MongoDB and Mongoose Part 2