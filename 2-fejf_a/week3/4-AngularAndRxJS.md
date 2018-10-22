# Angular and RxJS: Objectives and Outcomes

In this lesson we will

- __Examine__ the combination of `Angular` and `RxJS`, the `reactive JavaScript frameworks`.
- __Examine__ some `observables` that are already built into the `Angular framework` and
- How we can leverage them to do `reactive programming` within Angular.

At the end of this lesson you will be able to:

- Get a working overview of `reactive programming`, the `observer pattern` and the use of `observables` in Angular
- Make use of the Angular support for `observables` to do reactive Angular applications

## Exercise (Instructions): Angular and RxJS Part 1

Objectives and Outcomes:

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

- Learn to use the `params` observable available through the `ActivatedRoute` service in Angular _to __redesign__ a `component`_.

At the end of this exercise you will be able to:

- Learn to __use__ the _built-in_ `observables` within Angular
- __Leverage__ the _built-in_ `observables` to _implement new `features` within your Angular application_

### Updating the Dish Service

Update dish.service.ts by adding the following method to the service:

```ts
getDishIds(): Observable<number[] | any> {
  return Observable.of(DISHES.map(dish => dish.id));
}
```

### Update the Dish Detail Component

Update the _dishdetail.component.ts_ as follows:

```ts
. . .

import { switchMap } from 'rxjs/operators';

. . .

  dishIds: number[];
  prev: number;
  next: number;

  . . .


  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  . . .
```

### Updating the Dish Detail Template

- Update _dishdetail.component.html_ as follows:

```html
. . .

      <mat-card-actions>
        <button mat-button [routerLink]="['/dishdetail', prev]"><span class="fa fa-chevron-left fa-lg"></span></button>
        . . .

        <span class="flex-spacer"></span>
        <button mat-button [routerLink]="['/dishdetail', next]"><span class="fa fa-chevron-right fa-lg"></span></button>
      </mat-card-actions>

      . . .

```

### Conclusions (Part 2)

In this exercise you learnt how to use a _built-in_ `observable` within Angular to implement new features within your application.

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

- Open _contact.component.ts_ and update the `Form Model` as shown below:

- Continuing with _contact.component.ts_, you will now:
  - __Subscribe__ to the Angular `Form` observable named _valueChanges_ and
  - __Initiate__ `form validation` as follows:

- Next update the form in _contact.component.html_ as follows:

### Conclusion (Part 3)

In this exercise you used an Angular forms observable and subscribed to it to initiate form validation in code.

## Angular and RxJS: Additional Resources

### Angular Resources

[The RxJS Library](https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs-library)
[ActivatedRoute and Params Observable](https://angular.io/docs/ts/latest/guide/router.html#!#activated-route)
[Reactive Form Validation with Observables](https://angular.io/docs/ts/latest/cookbook/form-validation.html#!#reactive)
[Angular Reactive Forms](https://angular.io/docs/ts/latest/guide/reactive-forms.html)
[Angular Reactive Forms Form Builder](https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#formbuilder)
[Angular Reactive Form Validators](https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#validators)

### Other Resources

[RxJS](http://reactivex.io/rxjs/)
[Learn RxJS](https://www.learnrxjs.io/)
[RxJS 5 Thinking Reactively | Ben Lesh](https://www.youtube.com/watch?v=3LKMwkuK0ZE)
[The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
[Paul Simon - You Can Call Me Al (YouTube Video)](https://www.youtube.com/watch?v=uq-gYOrU8bA)
