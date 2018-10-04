# Angular Components

What is Angular Component?

Typical Angular application consists of many components.

Components control a part of the screen called as a `view` in Angular. So when you create your `screen` on your Angular application, you may divide your screen into multiple `views`. Each one of them being controlled by a separate component.

So far, in the previous example, we have one _single_ root component that controls the entire screen, we can add more components that take `part of the screen` and control that `part of the screen` and takes care of the entire rendering of that `part of the screen`.

## Summarize

A __component__ is defined by specifying the `code` and also specifying the corresponding `template`.

=================================

## Exercise - Angular Components - Part 1

- Objectives and Outcomes

    In this exercise you will __add__ the _first_ `component` to your Angular application and __update__ its `template`. At the end of this exercise you will be able to:

    - __Add__ `components` to your Angular application
    - __Update__ the `templates` of your `component`.

### Adding a Menu Component

- First, download the images.zip file provided above and then unzip the file. Move the resulting __images__ folder containing some PNG files to the Angular project's __src/assets__ folder. These image files will be useful for our exercises.
- Next, use the CLI's `ng generate` command to generate a new component named _menu_ as follows:

    ```bash
    ng generate component menu
    ```

    - This will create the necessary files for the `menu` component in a folder named _menu_, and also import this component into `app.module.ts`.
    - Next, open app.component.html file and add the following after the toolbar:

    ```bash
    ...
    <app-menu></app-menu>
    ```

### Creating the Menu

- Next, create a folder named _shared_ under the _src/app_ folder. To this folder, add a file named `dish.ts` with the following code:

    ```bash
    export class Dish {
        name: string;
        image: string;
        category: string;
        label: string;
        price: string;
        description: string;
    }
    ```

- Update `menu.component.ts` as follows to add in the data for four menu items:

    ```ts
    . . .
    import { Dish } from '../shared/dish';
    . . .

    export class MenuComponent implements OnInit {

      dishes: Dish[] = [
        {
          name: 'Uthappizza',
          image: '/assets/images/uthappizza.png',
          category: 'mains',
          label: 'Hot',
          price: '4.99',
          // tslint:disable-next-line:max-line-length
          description: 'A unique combination of Indian Uthappam     (pancake) and Italian pizza, topped with Cerignola olives,  ripe vine cherry tomatoes, Vidalia onion, Guntur chillies    and Buffalo Paneer.'
        },
        {
          name: 'Zucchipakoda',
          image: '/assets/images/zucchipakoda.png',
          category: 'appetizer',
          label: '',
          price: '1.99',
          description: 'Deep fried Zucchini coated with mildly  spiced Chickpea flour batter accompanied with a  sweet-tangy tamarind sauce'
        },
        {
          name: 'Vadonut',
          image: '/assets/images/vadonut.png',
          category: 'appetizer',
          label: 'New',
          price: '1.99',
          description: 'A quintessential ConFusion experience, is it    a vada or is it a donut?'
        },
        {
          name: 'ElaiCheese Cake',
          image: '/assets/images/elaicheesecake.png',
          category: 'dessert',
          label: '',
          price: '2.99',
          description: 'A delectable, semi-sweet New York Style     Cheese Cake, with Graham cracker crust and spiced with  Indian cardamoms'
        }
       ];
    . . .
    }
    ```

- Next, update the `menu.component.html` template as follows:

    ```html
    <div class="container"
     fxLayout="column"
     fxLayoutGap="10px">

    <mat-list fxFlex>
        <mat-list-item *ngFor="let dish of dishes">
        <img matListAvatar src={{dish.image}} alt={{dish.name}}>
        <h1 matLine> {{dish.name}} </h1>
        <p matLine>
            <span> {{dish.description}} </span>
        </p>
        </mat-list-item>
    </mat-list>

    </div>
    ```

- Next, open `app.module.ts` and update it as follows:

    ```ts
    . . .

    import { MatListModule } from '@angular/material/list';

    . . .

    imports: [
        . . .,
        MatListModule,
        . . .
      ],

    . . .
    ```

- Add the following CSS class to styles.scss file:

    ```scss
    .container {
        margin: 20px;
        display: flex;
    }
    ```

- Save all changes and do a Git commit with the message "Components Part 1".

### Conclusions

In this exercise we added a new component to our Angular application, added data to its class, and then updated the component template to show the information in the web page.

==========================================

## Directives

- Angular templates are _dynamic_
- `Directives` give _instructions_ to Angular on `how to render the templates to the DOM`
- A directive can be defined in Angular as a class with the `@Directive` decorator
- A `component` is a _special_ kind of `directive` with a template associated to it
- Two other kinds of directives in Angular: `Structural` and `Attribute`

### Structural Directive

- Allows you to alter the layout by __adding__, __removing__, and __replacing__ `elements` in `DOM`
- Apply a structural directive to a host element in the DOM and its descendents
- Apply a structural directive to a host element in the DOM and its descendents

### Common Structural Directives

- __ngif__
    ```html
    <div *ngIf="selectedDish"> ... </div>
    ```
    - If the `selectedDish` is not _null_ then this `div` will be added to the `DOM`.

- __ngFor__
    ```html
    <md-list-item *ngFor="let dish of dishes">
    ```

- __ngSwitch__
    ```html
    _the example will be updated later._
    ```

### Attribute Directive

## Exercise - Angular Components - Part 2

- Objectives and Outcomes

    In this exercise we will continue __modifying__ the component `template` from the previous exercise. Instead of a list, we will use a `grid list` Angular material component to display the menu in a _different_ way. Also we will use the `Card` component to display the details of a selected dish. At the end of this exercise you will be able to:

    - Make use of the Angular material `grid list component` to __display__ a `list of items`.
    - Use the material `Card` component to __display__ detailed `information`.
    - Use a built-in Angular `pipe` to turn a word into uppercase in the `template`.

- Updating the Menu Template

    - Open _menu.component.html_ and update its content as follows:

    ```html
    . . .
      <div fxFlex>
        <div>
          <h3>Menu</h3>
          <hr>
        </div>
      </div>
    
      <div fxFlex>
        <mat-grid-list cols="2" rowHeight="200px">
          <mat-grid-tile *ngFor="let dish of dishes">
            <img height="200px" src={{dish.image}} alt={{dish.name}}>
            <mat-grid-tile-footer>
              <h1 matLine>{{dish.name | uppercase}}</h1>
            </mat-grid-tile-footer>
          </mat-grid-tile>
        </mat-grid-list>
      </div>
    . . .
    ```

    - Here we are using the `Grid list` Angular material `component` to display the information.
    - Open _app.module.ts_ and update it as follows:

    ```ts
    . . .

    import { MatGridListModule } from '@angular/material/grid-list';
    import { MatCardModule } from '@angular/material/card';
    import { MatButtonModule } from '@angular/material/button';

    . . .

      imports: [
        . . .,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        . . .
      ],

    . . .
    ```

    - Also, update the __menu.component.ts__ file as follows to move the details of the dishes into a `constant`, in preparation for introducing services in a future exercise:

    ```ts
    . . .
    const DISHES: Dish[] = [
    . . .
    ];
    . . .
    export class MenuComponent implements OnInit {

     dishes = DISHES;

     selectedDish = DISHES[0];
    . . .
    }
    ```

- Add a Card Component

    - Update the _menu.component.html_ template to display the details of a _selected dish_ using the `Material Card` component as follows:

    ```html
    . . .
      <div fxFlex *ngIf="selectedDish">
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              <h3>{{selectedDish.name | uppercase}}</h3>
            </mat-card-title>
          </mat-card-header>
          <img mat-card-image src={{selectedDish.image}} alt={{selectedDish.name}   }>
          <mat-card-content>
            <p>{{selectedDish.description}}
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
      </div>
    ```

    - Save the changes and do a Git commit with the message "Components Part 2".



- Conclusions
