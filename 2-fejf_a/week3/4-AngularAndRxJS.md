# Angular and RxJS: Objectives and Outcomes

In this lesson we will

- __Examine__ the combination of `Angular` and `RxJS`, the `reactive JavaScript frameworks`.
- __Examine__ some `observables` that are already built into the `Angular framework` and
- How we can leverage them to do `reactive programming` within Angular.

At the end of this lesson you will be able to:

- Get a working overview of `reactive programming`, the `observer pattern` and the use of `observables` in Angular
- Make use of the Angular support for `observables` to do reactive Angular applications

## Exercise (Instructions): Angular and RxJS Part 1

__Objectives and Outcomes__

In this exercise you will:

- get your first experience with `Observables` in Angular.
- convert the `services` to use `Observables` in place of `promises`.
- then also enable the `components` to subscribe to the `observables` and make use of them _to __obtain__ the `data`_.

At the end of this exercise you will be able to:

- Make use of `observables` within your Angular application
- __Obtain__ `data` through `subscribing` to the `observables` within your `components`.

### Updating the Services

As a first step update the services to operate using observables and then convert them to promises and deliver to the components. Open [x] _dish.service.ts_ and update its methods as follows:

```ts
. . .

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

. . .

  getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(2000)).toPromise();
  }

  getDish(id: number): Promise<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)).toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
  }
}
```

- Similarly update
    - [x] _leader.service.ts_ and
    - [x] _promotion.service.ts_ to use `observables`.
- However, we would rather _directly_ __operate__ with `observables`. So update the _dish.service.ts_ as follows:

```ts
. . .

import { Observable, of } from 'rxjs';

. . .

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

. . .
```

### Updating the Components

Update _menu.component.ts_ as follows to __subscribe__ to the `observable` _returned_ from the `service`:

```ts
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
```

- Similarly update [x] _about.component.ts_, [x] _dishdetail.component.ts_ and [] _home.component.ts_ to __subscribe__ to the `observables` _from_ the `services`.

In this exercise you learn to use observables within your services and components.

### Conclusions (Part 1)

## Exercise (Instructions): Angular and RxJS Part 2

Objectives and Outcomes:

In this exercise you will

- Learn to use the `params observable` available through the `ActivatedRoute` service in Angular _to __redesign__ a `component`_.

At the end of this exercise you will be able to:

- Learn to __use__ the _built-in_ `observables` within Angular
- __Leverage__ the _built-in_ `observables` to _implement new `features` within your Angular application_

### Updating the Dish Service

### Update the Dish Detail Component

### Updating the Dish Detail Template

### Conclusions (Part 2)



## Exercise (Instructions): Angular and RxJS Part 3

Objectives and Outcomes:

In this exercise you will:

- Learn _further_ about adding `form validation` to your `reactive forms` in Angular.
- Do much of the `form validation` and __generate__ the `error messages` _within_ the `code` and __map__ them into the `form`.
- Take the help of an `Angular Forms observable` for this exercise.

At the end of this exercise you will be able to:

- __Add__ in `form validation` support to your `reactive forms` from _within_ the `code` using `observables`
- __Show__ `validation error messages` to the users in your `view`

### Add Form Validation

### Conclusion (Part 3)

## Angular and RxJS: Additional Resources

### Angular Resources

[The RxJS Library]()
[ActivatedRoute and Params Observable]()
[Reactive Form Validation with Observables]()
[Angular Reactive Forms]()
[Angular Reactive Forms Form Builder]()
[Angular Reactive Form Validators]()

### Other Resources

[RxJS]()
[Learn RxJS]()
[RxJS 5 Thinking Reactively | Ben Lesh]()
[The introduction to Reactive Programming you've been missing]()
[Paul Simon - You Can Call Me Al (YouTube Video)]()
