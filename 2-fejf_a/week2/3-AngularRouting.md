# Angular Routing: Objectives and Outcomes

In this lesson we cover the basics of Angular `routing`. We examine:

- how the `router module` in Angular enables the __navigation__ among `views` of various `components` that __form__ `part` of an Angular application.

At the end of this lesson you will be able to:

- __Set up__ the `router module` to enable navigation among _multiple_ `component views`
- __Set up__ the `routes` to _enable the navigation_

## Exercise (Instructions): Header and Footer

### Objectives and Outcomes

In this exercise you will:

- __add in__ a `header` and a `footer` to our Angular application using _two_ Angular `components`.

This will:

- __illustrate__ the use of `multiple components` put together form the application's view.

You will also:

- __add in__ the Font Awesome icons for use within your application.

At the end of this exercise you will be able to:

- Use _multiple_ `components` and their `views` to put together the view of the application.
- Make use of `Font Awesome` icons within your Angular application

### Using Font Awesome Icons

First use NPM to fetch Font Awesome to the project by typing the following at the prompt:

```bash
npm install font-awesome@4.7.0 --save
```

Then, add a new file named `_variables.scss` in the _src_ folder and add the following to it:

    ```scss
    $fa-font-path : '../node_modules/font-awesome/fonts';
    ```

Then, open the styles.scss file and update it as follows:

    ```scss
    . . .

    @import 'variables';
    @import '../node_modules/font-awesome/scss/font-awesome';

    . . .
    ```

You may need to restart your server by stopping and restarting the `ng serve --open`.

### Adding Header and Footer

Create two new components named header and footer in your application:

    ```bash
    ng generate component header
    ng generate component footer
    ```

Update the footer's template as follows:

  ```html
      <div class="container footer"
      fxLayout="row wrap"
      fxLayout.lt-md="column"
      fxLayoutAlign="center center"
      fxLayoutGap="10px">

    <div fxFlex="100" fxFlex.gt-sm="50">
      <div fxLayout="row">
        <div fxFlex="40" fxFlexOffset="20px">
          <h4>Links</h4>
          <mat-list>
            <mat-list-item><a     mat-button>Home</a></mat-list-item>
            <mat-list-item><a     mat-button>About</a></mat-list-item>
            <mat-list-item><a     mat-button>Menu</a></mat-list-item>
            <mat-list-item><a     mat-button>Contact</a></mat-list-item>
          </mat-list>
        </div>
        <div fxFlex="55">
          <h4>Our Address</h4>
          <address style="text-size: 80%">
            121, Clear Water Bay Road<br> Clear Water     Bay, Kowloon<br> HONG KONG<br>
            <i class="fa fa-phone"></i>: +852 1234    5678<br>
            <i class="fa fa-fax"></i>: +852 8765  4321<br>
            <i class="fa fa-envelope"></i>:
            <a    href="mailto:confusion@food.net">confusion @food.net</a>
          </address>
        </div>
      </div>
    </div>
    <div fxFlex="100" fxFlex.gt-sm="45">
      <div style="text-align:center">
        <a mat-icon-button class="btn-google-plus"    href="http://google.com/+"><i class="fa    fa-google-plus fa-lg"></i></a>
        <a mat-icon-button class="btn-facebook"   href="http://www.facebook.com/profile.php?    id="><i class="fa fa-facebook fa-lg"></i></a>
        <a mat-icon-button class="btn-linkedin"   href="http://www.linkedin.com/in/"><i     class="fa fa-linkedin fa-lg"></i></a>
        <a mat-icon-button class="btn-twitter"    href="http://twitter.com/"><i class="fa    fa-twitter fa-lg"></i></a>
        <a mat-icon-button class="btn-youtube"    href="http://youtube.com/"><i class="fa    fa-youtube fa-lg"></i></a>
        <a mat-icon-button class="btn-mail"   href="mailto:"><i class="fa fa-envelope-o     fa-lg"></i></a>
      </div>
    </div>
    <div>
        <p>© Copyright 2018 Ristorante Con Fusion</p>
    </div>
  </div>
  ```


...

### Conclusions

You have updated the application to include multiple views using multiple components into your application.

================================

## Exercise (Instructions): Angular Routing Basics

### Objectives and Outcomes

In this exercise you will be:

- Adding _three_ new additional `components` to your application
- then __configure__ a basic `router` using the `Angular router module` to enable your application to navigate among the `components`.

At the end of this exercise you will be able to:

- __Configure__ your application with _multiple_ `components` whose `views` can be shown _one_ at a time and navigate among them
- __Configure__ a _basic_ `router` using the `Angular routing module` to enable the navigation among the `views`.

### Adding Components

Add three new components to your Angular application as follows:

    ```bash
    ng generate component about
    ng generate component home
    ng generate component contact
    ```

### Add a Router Module

Add a new module named app-routing to your application as follows. This will create a new module file named _app-routing.module.ts_ in the _app-routing_ folder.

    ```bash
    ng generate module app-routing
    ```

- Next create a new file named _routes.ts_ in the _app-routing_ folder and update it as follows:

    ```ts
    import { Routes } from '@angular/router';

    import { MenuComponent } from '../menu/menu.component';
    import { DishdetailComponent } from     '../dishdetail/dishdetail.component';
    import { HomeComponent } from '../home/home.component';
    import { AboutComponent } from '../about/about.component';
    import { ContactComponent } from    '../contact/contact.component';

    export const routes: Routes = [
      { path: 'home',  component: HomeComponent },
      { path: 'menu',     component: MenuComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ];
    ```

__Update__ the _app-routing.module.ts_ file to make use of the routes defined above as follows:

    ```ts
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterModule, Routes } from "@angular/router";

    import { routes } from "./routes";

    @NgModule({
      imports: [
        CommonModule,
        RouterModule.forRoot(routes)
      ],
      exports: [RouterModule],
      declarations: []
    })
    export class AppRoutingModule { }
    ```

### Using the Routing Module

- Next update the app.component.html file as follows:

    ```html
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    ```

- Then update the app.module.ts file to use the Routing Module as follows:

    ```ts
    . . .

    import { AppRoutingModule } from './app-routing/app-routing.module';

    @NgModule({
      . . .

        imports: [
        . . .,
        AppRoutingModule
      ],

      . . .

    })

    . . .
    ```

- Finally update the toolbar in the _header.component.html_ file as follows:

    ```ts
    <mat-toolbar color="primary">
    <span><img src="/assets/images/logo.png" height=30 width=41></span>
    <a mat-button routerLink="/home"><span class="fa fa-home fa-lg"></span>   Home</a>
    <a mat-button><span class="fa fa-info fa-lg"></span> About</a>
    <a mat-button routerLink="/menu"><span class="fa fa-list fa-lg"></span>   Menu</a>
    <a mat-button><span class="fa fa-address-card fa-lg"></span> Contact</a>
    </mat-toolbar>

    . . .
    ```

- Save all the changes and do a Git commit with the message "Angular Router Basics".

### Conclusions

In this exercise you learnt to set up Angular routing to provide navigation among the views of various components.

## Angular Routing: Additional Resources

Angular Resources

- [Angular Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)
- [Angular Material Button](https://material.angular.io/components/component/button)

Other Resources

- [HTML5 History, pushState() and replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries)
- [HTML5 `<base>` Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
