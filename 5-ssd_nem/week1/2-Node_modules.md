# Node Modules

## Objectives and Outcomes

In this lesson you will:

- learn to __write__ Node applications.
- learn about `Node modules` and how you can make use of them within your `Node applications`.

At the end of this lesson, you will be able to:

- __Write__ simple `Node applications` and __run__ them using `Node`
- __Develop__ `Node modules` and use them within your Node applications
- __Learn__ about using `callbacks` and `handling errors` within your `Node application`

## Exercise (Instructions):Node Modules: Callbacks and Error Handling

In this exercise, you will:

- learn about `callbacks`, `JavaScript closures` and `error handling` in Node applications.

At the end of this exercise, you will be able to:

- __Using__ `Callbacks` in Node applications
- `Error handling` in Node applications

### Using `Callbacks` and `Error Handling`

- Update _rectangle.js_ as shown below:

```js
module.exports = (x, y, callback) => {
    if ( x <= 0 || y <= 0 )
        setTimeout(() => callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y),
            null),
            2000);
    else
        setTimeout(() =>
            callback(null, {
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }),
            2000);
}
```

- Then, update index.js as shown below:

```js
. . .

function solveRect(l, b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        } else {
            console.log("The area of the rectangle of dimensions = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });

    console.log("This statement after the call to rect()");
};

. . .
```

- Run the Node application as before and see the result.

- In this exercise, you learnt about using Callbacks and error handling in Node applications. In addition you learnt about using external Node modules.
