# Angular and Promise: Objectives and Outcomes

In this lesson:

- we briefly review JavaScript `promises` and then
- see how we can __redesign__ the `services` to _return_ `promises` instead of returning the `values` _immediately_.

At the end of this lesson you will be able to:

- Get a basic understanding of `JavaScript promises`
- Use `promises` to __enable__ the `services` to function `asynchronously` and return results when available

## Exercise (Instructions): Angular and Promise Part 1

### Objectives and Outcomes

In this exercise you will:

- use JavaScript `promises` to __redesign__ your Angular `services` so that they can operate _asynchronously_ and return the results _whenever_ available.

At the end of this exercise you will be able to:

- Make use of JavaScript `promises` within your Angular application
- __Redesign__ your `services` to return promises and resolve them when the results are available
- Consume the promises within your components and handle the resolution or rejection of the promise

### Reconfigure Services to Return Promises

- Open _dish.service.ts_ and update its methods as follows:

```ts
getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
}

getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
}

getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
}
```

Similarly update _leader.service.ts_ and _promotion.service.ts_ to return `promises`.

### Handling Promises

- Open _menu.component.ts_ and update its handling of the call to `getDishes()` method as follows:

    ```ts
        this.dishService.getDishes()
          .then(dishes => this.dishes = dishes);
    ```

- Similarly update
    - [x] _about.component.ts_,
    - [x] _dishdetail.component.ts_ and
    - [x] _home.component.ts_ where the services are invoked to fetch the data.

- Update _dishdetail.component.html_ as follows:

    ```ts
    . . .

      <h3 *ngIf="dish">{{dish.name | uppercase}}</h3>

    . . .
    ```

### Conclusions

In this exercise you learnt the use of JavaScript promises to handle asynchronous delivery of data from the services to the components.

## Exercise (Instructions): Angular and Promise Part 2

Objectives and Outcomes

In this exercise you will:

- learn to deal with a `service` that takes some time to fetch and return the results by simulating a time delay in the service.
- use the Angular Material `progress spinner component` to keep the users informed about the delay.

At the end of this exercise you will be able to:

- __Simulate__ a `time delay` within the `service`
- __Update__ your `components` to be able to deal with the `delay` in obtaining the results
- Use the Angular Material `progress spinner component` to keep the user informed

### Simulating Time Delay within the Service

- Open _dish.service.ts_ and update its methods as follows:

```ts
getDishes(): Promise<Dish[]> {
    return new Promise(resolve=> {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES), 2000);
    });
}

getDish(id: number): Promise<Dish> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
}

getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve=> {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
}
```

- Update the
    - [x] _promotion.service.ts_ and
    - [x] _leader.service.ts_ files in the same manner.

### Using Angular Material Progress Spinner

- [x] Open _app.module.ts_ and update it as follows:

```ts
. . .

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

. . .

  imports: [
    . . .,
    MatProgressSpinnerModule,
    . . .
  ]

  . . .
```

- [x] Open _menu.component.html_ file and update it by adding the following to the template:

```html
  <div fxFlex *ngIf="dishes">
  . . .
  </div>
  <div [hidden]="dishes">
    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>
  </div>
```

- Update
    - [x] _about.component.html_,
    - [x] _home.component.html_ and
    - [x] _dishdetail.component.html_ similarly.

### Conclusions

- In this exercise you learnt to deal with delays in obtaining the results, and also dealing with promise reject.

## Angular & Promise: Additional Resources

### Other resources

- [Javascript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JS Promise (Part 1 - Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
- [Javascript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)
- [Javascript Promise: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)