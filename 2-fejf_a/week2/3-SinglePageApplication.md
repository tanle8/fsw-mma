# Single Page Applications: Objectives and Outcomes

In this lesson you will:

- Explore __Single Page Applications__ (SPA) and Angular support for `SPA`
- Learn to use the `routes` and Angular `router module` that enables the development of `SPAs`

 At the end of this lesson, you will be able to:

- __Design__ `SPA` using _Angular_
- __Use__ the Angular `router module` to _construct_ `SPA`

## What is Single Page Application

Web application or web site that fits in a _single_ `page`

- No need to reload the entire page
- `UX` like a desktop/native application
- _Most_ resources are retrieved with a single page load
- Redraw parts of the page when needed without requiring a full server roundtrip

## Exercise (Instructions): Single Page Applications Part 1

### Objectives and Outcomes

In this exercise you will continue to develop the Angular application as a single page application, integrating the various components. At the end of this exercise you will be able to:

- Leverage the Angular router to enable the development of single page applications
- Provide a way of navigating among various views using the Angular router support.

### Integrating the Contact Component

- Open the _contact.component.html_ file and update its contents as follows:

    ```html
    <div class="container"
      fxLayout="column"
      fxLayoutGap="10px">

      <div fxFlex>
        <div>
            <h3>Contact Us</h3>
            <hr>
        </div>
      </div>

      <div fxFlex>
        <h3>Location Information</h3>

        <div fxLayout="column" fxLayout.gt-sm="row">
          <div fxFlex="50" fxFlexOffset="20px">
            <h4>Our Address</h4>
            <address>
              121, Clear Water Bay Road<br>
              Clear Water Bay, Kowloon<br>
              HONG KONG<br>
              <i class="fa fa-phone"></i>: +852 1234 5678<br>
              <i class="fa fa-fax"></i>: +852 8765 4321<br>
              <i class="fa fa-envelope"></i>:
                    <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
            <p></p>
            <div>
              <a mat-raised-button href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
              <a mat-raised-button><i class="fa fa-skype"></i> Skype</a>
              <a mat-raised-button href="mailto:confusion@food.net"><i class="fa fa-envelope-o"></i>    Email</a>
            </div>
          </div>

          <div fxFlex="40">
            <h4>Map of our Location</h4>
          </div>

        </div>
      </div>
    </div>
    ```

- Update the _routes.ts_ file to add in the configuration for the contact component by adding in the following to the routes constant:

    ```ts
    { path: 'contactus',  component: ContactComponent },
    ```

- Update the header.component.html file to activate the contact link:

    ```html
    <a mat-button routerLink="/contactus"><span class="fa fa-address-card fa-lg"></span> Contact</a>
    ```

### Updating the Home Component

- First update _dish.ts_ file to update the dish class as follows:

    ```ts
    import { Comment } from './comment';

    export class Dish {
        id: number;
        name: string;
        image: string;
        category: string;
        label: string;
        price: string;
        featured: boolean;
        description: string;
        comments: Comment[];
    }
    ```

- Now that we added the `id` and `featured` property to dish, update the DISHES constant in _dishes.ts_ to add an id to each element, and also add a featured property to each dish as follows:

    ```ts
    [
        {
            id: 0,
            name: 'Uthappizza',
            . . .
            featured: true,

            . . .
        },
        {
            id: 1,
            name: 'Zucchipakoda',
            . . .
            featured: false,

            . . .
        },
        {
            id: 2,
            name: 'Vadonut',
            . . .
            featured: false,

            . . .
        },
        {
            id: 3,
            name: 'ElaiCheese Cake',
            . . .
            featured: false,

            . . .
        }
    ];
    ```

- Now update the dish service to return a specific dish, and a featured dish as follows:

    ```ts
    . . .

      getDish(id: number): Dish {
        return DISHES.filter((dish) => (dish.id === id))[0];
      }

      getFeaturedDish(): Dish {
        return DISHES.filter((dish) => dish.featured)[0];
      }

    . . .
    ```

- Next add _promotion.ts_ file to the _shared_ folder and update its contents as follows:

    ```ts
    export class Promotion {
        id: number;
        name: string;
        image: string;
        label: string;
        price: string;
        featured: boolean;
        description: string;
    }
    ```

- Then, add _promotions.ts_ file to the _shared_ folder and update its contents as follows:

    ```ts
    import { Promotion } from './promotion';

    export const PROMOTIONS: Promotion[] = [
        {
          id: 0,
          name: 'Weekend Grand Buffet',
          image: '/assets/images/buffet.png',
          label: 'New',
          price: '19.99',
          featured: true,
          // tslint:disable-next-line:max-line-length
          description: 'Featuring mouthwatering combinations    with a choice of five different salads, six    enticing appetizers, six main entrees and five     choicest desserts. Free flowing bubbly and soft     drinks. All for just $19.99 per person'
        }
    ];
    ```

- Now add a new service named "promotion" to the _services_ folder.
- Then, update the _promotion.service.ts_ file as follows:

    ```ts
    import { Injectable } from '@angular/core';
    import { Promotion } from '../shared/promotion';
    import { PROMOTIONS } from '../shared/promotions';

    . . .

      getPromotions(): Promotion[] {
        return PROMOTIONS;
      }

      getPromotion(id: number): Promotion {
        return PROMOTIONS.filter((promo) => (promo.id === id))  [0];
      }

      getFeaturedPromotion(): Promotion {
        return PROMOTIONS.filter((promotion) =>     promotion.featured)[0];
      }

    . . .
    ```

- Import the promotion service into the `AppModule` and add the service to the _providers_.
- Update the _home.component.html_ file as follows to add two cards to show the featured dish and promotion in the home page:

    ```html
    <div class="container"
     fxLayout="row"
     fxLayout.sm="column"
     fxLayout.xs="column"
     fxLayoutAlign.gt-md="space-around center"
     fxLayoutGap="10px">

    <mat-card *ngIf="dish" fxFlex>
      <mat-card-header>
        <div mat-card-avatar></div>
        <mat-card-title>
          <h3>{{dish.name | uppercase}}</h3>
        </mat-card-title>
      </mat-card-header>
      <img mat-card-image src={{dish.image}} alt={{dish.name}}>
      <mat-card-content>
        <p>{{dish.description}}
        </p>
      </mat-card-content>
    </mat-card>

    <mat-card *ngIf="promotion" fxFlex>
      <mat-card-header>
        <div mat-card-avatar></div>
        <mat-card-title>
          <h3>{{promotion.name | uppercase}}</h3>
        </mat-card-title>
      </mat-card-header>
      <img mat-card-image src={{promotion.image}} alt={{promotion.name}}>
      <mat-card-content>
        <p>{{promotion.description}}
        </p>
      </mat-card-content>
    </mat-card>

    </div>
    ```

- Now update the _home.component.ts_ file to fetch and provide the featured dish and promotion for the view:

    ```ts
    . . .

    import { Dish } from '../shared/dish';
    import { DishService } from '../services/dish.service';
    import { Promotion } from '../shared/promotion';
    import { PromotionService } from '../services/promotion.service';

    . . .

    export class HomeComponent implements OnInit {

      dish: Dish;
      promotion: Promotion;

      constructor(private dishservice: DishService,
        private promotionservice: PromotionService) { }

      ngOnInit() {
        this.dish      = this.dishservice.getFeaturedDish();
        this.promotion = this.promotionservice.getFeaturedPromotion();
      }

    }
    ```

### Highlighting the Current Component Link in the Toolbar

- Update each of the links in the toolbar with the following addition to the link:

    ```html
    <a . . . routerLinkActive="active"><span . . . ></span> Home</a>
    ```

- Now add the following scss class to _header.component.scss_:

    ```scss
    . . .
    $background-moredark: #4527A0;
    . . .
    .active {
        background: $background-moredark;
    }
    ```

### Conclusions

In this exercise you developed the Angular application further by __integrating__ the `components` into a single page application.

## Angular Router: Parameters

Using the Angular Router, we have already learned how we can navigate from one view to another view using the `routerLink` directive to specify the link.

And also the router module, enabling us with the specification of the path, to __navigate__ to the `views` of the _different_ `components`.

Now, let's take an example of the _dishdetail_ `component`. So far, the _dishdetail_ `component` has been working by __receiving__ the _details_ of the _specific_ `dish` that it needs to display from the menu component.

But this was facilitated because the dishdetail `component` had a property that was sending in the value. And then we were using the input decorator for the variable inside the dishdetail component to get hold of that value that was being passed in from the menu component.

Now, when you have these components being routed to using a router, this connection between the components no longer exists. So we need to leverage the Angular Router to be able to pass information from one component to the other component. And this is usually done in the form of parameters. Parameters that can be either specified as route parameters, as we will learn a little bit later, or query parameters.

### Angular Routes

- Paths specified as a URL
- Paths can also carry parameter values:
    - e.g., `/dishdetail/42` where 42 is a route parameter
- Route parameters specified in the path definition as a token
    -e.g., path: `dishdetail/:id` where id is the token

### Route Parameters

How do we pass parameters?

- Route parameters can be specified using a link parameter arrat while specifying the link
    - e.g., `<a *ngFor="let dish of dishes" [routerLink]="['/dishdetail', dish.id]">`
- Can also be used within a method
    - e.g., `this.router.navigate(['/dishdetail', dish.id]);`

### ActivatedRoute Service

Router service that provides useful information about the routes, including:

- `url` - An Observable of the route path(s), represented as an array of strings for each part of the route path.
- `params` - An Observable that contains the required and optional parameters specific to the route
- `queryParams` - An Observable that contains the query parameters available to all routes

## Exercise (Instructions): Single Page Applications Part 2

### Objectives and Outcomes

In this exercise you will __integrate__ the _dishdetail_ `component` into your application.

You will:

- use a route `parameter` in the URL to pass in the details of the selected dish to the dishdetail component.

At the end of this exercise you will be able to:

- Configure the routes in your router module to enable the use of route parameters within the URL to pass information to a component.

### Updating Routes

- Open the _routes.ts_ and add the following route to it:

    ```ts
    { path: 'dishdetail'/:id, component: DishdetailComponent }
    ```
- Open _menu.component.html_ and update it as follows. Also remove the `<app-dishdetail>` from the template.

    ```html
    <mat-grid-tile *ngFor="let dish of dishes" [routerLink]="['/dishdetail', dish.id]">
    ```

### Updating DishDetail Component

- Open _dishdetail.component.ts_ and update it as follows:

    ```ts
    . . .
    import { DishService } from '../services/dish.service';

    import { Params, ActivatedRoute } from '@angular/router';
    import { Location } from '@angular/common';

    . . .

    export class DishdetailComponent implements OnInit {

      dish: Dish;

      constructor(private dishservice: DishService,
                  private route: ActivatedRoute,
                  private location: Location) { }

      ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.dish = this.dishservice.getDish(id);
      }

      goBack(): void {
        this.location.back();
      }
    }
    ```

Then open _dishdetail.component.html_ and update it as follows:

    ```html

    ```

### Update Footer Links

- Open _footer.component.html_ and update the footer links also to provide the same navigation as the header toolbar.

### Conclusions

In this exercise you have seen the use of route parameters within the URL to pass information to another component.

## Single Page Applications: Additional Resources

Angular Resources

- Angular Routing and Navigation

Other Resources

- Arrow Functions
- Single Page Applications (Wikipedia)
- Deep linking
- Single Page Apps in depth
- SPA and the Single Page Myth
