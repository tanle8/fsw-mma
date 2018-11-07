# Animation and Directives: Objectives and Outcomes

In this lesson you will:

- __learn__ about Angular `attribute directives` and
- __creating__ _custom_ `directives`.
- also get an overview of the `Animation` support in Angular and
- __design__ some `animations` for your Angular application.

At the end of this lesson you will be able to:

- __Design__ your own _custom_ `attribute directive`
- __Design__ `animations` for your Angular application

## Directives

### Attribute Directive

### Custom Directive

- Can create our own custom directives
- Directive imported from `@angular/core`
    - `@Directive` decorator
- `ElementRef` also imported from `@angular/core`
    - __Injected__ into the `directive's constructor` so that the code can _access_ the `DOM element`

## Exercise (Instructions): Custom Attribute Directives

### Objectives and Outcomes

In this exercise you will:

- __learn__ to create a new _custom_ `attribute directive` and
- __make__ use of it within a `component` view.

At the end of this exercise you will be able to:

- Use `Angular-CLI` to __create__ and __add__ a new _custom_ `directive` to your Angular application
- __Design__ a new _custom_ `attribute directive` and __apply__ it to _elements_ within a `template` in your `component`

### Adding a New Directive

- Create a new folder named _directives_ within the app folder of your project.
- Using Angular-CLI add a new directive named highlight to your application as follows:

```bash
ng g directive directives/highlight
```

Update _highlight.directive.ts_ file as follows:

```ts
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
. . .


  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

  . . .
```

Open _styles.scss_ and add a new scss `class` to it as follows:

```scss
.highlight {
  background-color: $background-pale;
  border: 1px solid $primary-color-dark;
  z-index: 1;
  transform: scale(1.01);
}
```

Now open _menu.component.html_ and add the new directive as follows:

```html
. . .
        <mat-grid-tile *ngFor="let dish of dishes" [routerLink]="['/dishdetail', dish.id]" appHighlight>
. . .
```

### Conclusions ()

In this exercise you learnt to add a new directive to your Angular application using Angular-CLI and then design a custom attribute directive and apply it to an element within a template.

## Animations

__Animations__ give `visual feedback` to the `user` about things that are _happening_ within your Angular application.

- Animations are not necessary or required but they add a little spice to yout angular application.

### Exercise (Instructions): Angular Animations Part 1

Objectives and Outcomes

In this exercise you will

- be using the animation support available in the Angular framework to add a few new features to your Angular application.

At the end of this exercise you will be able to:

- __Define__ new `animations` using the support available in the Angular framework
- __Apply__ the animations to the `views` within your components

### Adding Animation Support

- We have already _included_ the Animation `library` into our Angular application in the very first exercise since we needed it to support some of the features of the Angular Material components. Now we __add__ our own _custom_ `animation` to various `views`.

- [x] Open _dishdetail.component.ts_ and add the following to it to include various Animation classes and functions into your component:

```ts
import { trigger, state, style, animate, transition } from '@angular/animations';
```

- [x] __Define__ a _new_ animation `trigger` within the Component `decorator` as follows:

```ts
. . .

@Component({

. . . ,
  animations: [
    trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]

  . . .
})
. . .
```

- Next __update__ the _DishDetailComponent_ class as follows:

```ts
. . .

  visibility = 'shown';
. . .

    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']); }))
    .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
      errmess => this.errMess = <any>errmess);
          . . .
```

- Then __update__ _dishdetail.component.html_ file as follows:

```ts
```

### Conclusions Exercise 1

- In this exercise you learnt to use Angular animations support within your application to add new features to your views.

## Exercise (Instructions): Angular Animations Part 2

Objectives and Outcomes

- In this exercise you will continue to:
    - Use the animation support available in the Angular framework to add a few new features to your Angular application.

At the end of this exercise you will be able to:

- __Define__ _new_ `animations` using the support available in the Angular framework
- __Apply__ the `animations` to the `views` within your components

### Refactoring the Code

- [x] If we use ___multiple animations___ in our application, it's better to organize the code better. So we will __refactor__ our code.
- [x] __Create__ a new folder named _animations_ in the _app_ folder, and create a file named _app.animation.ts_ in that folder.
- [x] __Add__ the following code to _app.animation.ts_ to create a new `factory function` that supplies the animation:

```ts
import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}
```

- Update _dishdetail.component.ts_ as follows to make use of the animation factory function defined above:

```ts
. . .
import { visibility } from '../animations/app.animation';

. . .

  animations: [
    visibility()
  ]
  . . .
```

- Remove the following line from _dishdetail.component.ts_ since it's already included in _app.animation.ts_:

```ts
import { trigger, state, style, animate, transition } from '@angular/animations';
```

### Adding Animation Support for Route Changes

- [x] Open _app.animation.ts_ and __add__ the following to it to include a new `factory`:

```ts
export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            animate('500ms ease-in')
        ]),
        transition(':leave', [
            animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}
```

- __Import__ the `flyInOut` into _menu.component.ts_ and then __define__ a new `animation trigger` within the Component decorator in _menu.component.ts_ to introduce a `view transition` when the menu component view is routed to in the application:

```ts
. . .
import { flyInOut } from '../animations/app.animation';

. . .
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
  . . .
```

- [] Apply the same updates to
    - [] _home.component.ts_,
    - [] _about.component.ts_ and
    - [] _contact.component.ts_

- __Import__ `flyInOut` and then __add__ the _host property_ and the `flyInOut()` also to _dishdetail.component.ts_.

### Animation to Render View from Fetched Data

- Open _app.animation.ts_ and add the following to it to include a new factory:

- Furthermore import the new function and add the following to the animations in menu.component.ts, about.component.ts, dishdetail.component.ts and home.component.ts:

- Then apply the `[@expand]` attribute to all those elements within the views of the above components where the data is being fetched from the service before rendering the view.

### Conclusions exercise Part 2

In this exercise we learnt more about Angular animations and how they can be applied while entering and leaving views.