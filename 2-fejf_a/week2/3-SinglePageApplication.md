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

## Exercise (Instructions): Single Page Applications Part 2

## Single Page Applications: Additional Resources

Angular Resources

- Angular Routing and Navigation

Other Resources

- Arrow Functions
- Single Page Applications (Wikipedia)
- Deep linking
- Single Page Apps in depth
- SPA and the Single Page Myth
