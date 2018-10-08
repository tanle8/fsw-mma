# Angular Service Basics: Objectives and Outcomes

In this lesson you will:

- Learn about the _basics_ of Angular `services` and
- How they interact with Angular `components`
- Learn the basics of `Model-View-Controller` (MVC) and `Model-View-ViewModel` (MVVM) software engineering `paradigms`
- Be introduced to the basics of `Dependency Injection` (DI)

At the end of this course you will be able to:

- Add an Angular `service` and inject into a `module` and make use of it in the `components`.
- Understand the basics of `MVC` and `MVVM`, and `DI`.

## MVC and MVVM

### Design Patterns

- _Well-documented_ `solution` to a recurring problem
    - Also referred to as an architectural pattern
- Software design pattern
    - Reusable solution to commonly occurring problems
    - Gang of four: E. Gamma et al. _Design Patterns: Elements of Reusable Object-Oriented Software_, Addison-Wesley, 1994

### The Model-View-Controller (MVC) Framework

- Software engineering architecture `pattern`
    - Isolation of `domain logic` from `user interface`
    - Permits __independent__ development, testing and maintenance (separation of concerns)
- We can divide our entire application into _three_ parts:
    - The `view` that is primarily concerned with __presenting__ `information` to the `user`.
    - The `model` that stores the `domain state`, the `domain logic` and also provides the way of manipulating this state from the rest of the application
    - The `controller` that mediates between the `view` and the `model`.

### MVC Framework

- __Model__
    - __Manages__ the `behavior` and `data` of the application domain
    - __Responds__ to `requests` for information about its state (usually from the `view`)
    - __Responds__ to instructions to change state (usually from the `controller`)
    - In _event-driven_ systems, the `model` __notifies__ observers (usually `views`) when the information changes so that they can react.

- __View__
    - __Renders__ the `model` into a form suitable for _interaction_, typically a user interface element
    - _Multiple_ `views` can exist for a _single_ `model` for different purposes
    - A `viewport` typically has a one to one correspondence with a display surface and knows how to render to it

- __Controller__
    - __receives__ user `input` and __initiates__ a `response` by __making__ `calls` on `model objects`
    - A controller __accepts__ `input` from the user and __instructs__ the `model` and `viewport` to _perform_ `actions` based on that input

### MVVM - Model View View-Model

- Descendent of MVC
- Sometimes called Model-View-Binder
- View model
    - Abstraction of the view that exposes public properties and commands
    - Declarative data binding

## Angular Services

### Why Services

- `Component` classes should be kept __lean__:
    - __Fetching__ data from server, user input __validation__ and __logging__ should be delegated to a service
    - Mainly act as a mediator between the view and application logic

- Try to __factor__ out application logic into `services` and _let them do the heavy lifting_
    - Dependency Injection

### Component - Service Interaction

- The component manages the properties and methods that will be leverage by the template for displaying the information.
- Now, the component itself can then take the help of a service so the `service` will be ___injected___ into the component to provide _certain_ features for the component to make use of.
- So the `service` __takes care__ of doing _all_ the work behind the scenes that facilitates the `component` to be able to provide the properties and the methods for the `template` to make use of while __rendering__ the `view` and _correspondingly_ __transporting__ the user interaction back to the method behinf the scenes.

## Exercise: Angular Service Basics

### Objectives and Outcomes

In this exercise you will:

- __create__ a _new_ Angular `service` and
- __inject__ it _into_ your `application`.
- You will then make use of the service in the `components`.

At the end of this exercise you will be able to:

- Implement a service and inject into your application
- Make use of the service in a component

### Adding a Service

Create a folder named _services_ in the _src/app_ folder.
To add a service to your application using Angular CLI, type the following at the prompt:

    ```bash
    ng generate service services/dish
    ```

- This will create two new files in the services folder named dish.service.ts and dish.service.spec.ts.
- Open dish.service.ts and update its contents as shown below:

    ```ts
    . . .

    import { Dish } from '../shared/dish';
    import { DISHES } from '../shared/dishes';

    . . .

      getDishes(): Dish[] {
        return DISHES;
      }
    . . .
    ```

- Then add the service to the app.module.ts file as follows:

    ```ts
    . . .

    import { DishService } from './services/dish.service';

    @NgModule({
    . . .

      providers: [DishService],

    . . .

    ```

### Using the Service

- Now update menu.component.ts file to __make use__ of the service as follows:

    ```ts
    . . .

    import { DishService } from '../services/dish.service';

    . . .

    export class MenuComponent implements OnInit {

      dishes: Dish[];

      selectedDish: Dish;

      constructor(private dishService: DishService) { }

      ngOnInit() {
        this.dishes = this.dishService.getDishes();
      }

    . . .

    }
    ```

- Check that your application is still working correctly in the browser. Do a Git commit with the message "Basic Service".

## Conclusions

In this exercise you learnt to create a service and add it to your application. Thereafter you learnt to use it in a component.
