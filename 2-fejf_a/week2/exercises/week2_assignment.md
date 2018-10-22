# Peer-graded Assignment: Angular Services, Routing and Single Page Applications

In this assignment you will continue working with the Angular application by:

- __Adding__ a new `service` to serve up the details of the corporate leaders
- then __integrate__ the `AboutComponent` into the single page application.

## Objectives and Outcomes

At the end of this assignment, you should have completed the following:

- __Created__ a new _Leader_ `Service` that will _provide the details of the corporate leaders_.
- __Integrated__ the `AboutComponent` into the `SPA`.
- __Added__ a _new_ `card` into the `HomeComponent` to _show the details of the featured leader_.

## Assignment Requirements

This assignment requires you to complete the following tasks.

### Task 1

In this task you will be:

- Adding a new _Leader_ `Service` that will provide the details of the corporate leadership of the restaurant.

The details of the corporate leaders are given in the JavaScript object array below:

- [x] __Create__ a new class called _Leader_ in a file named _leader.ts_ in the _shared_ folder based on the structure of the JavaScript object array given in _leaders.txt_ above,
- [x] __Create__ a new constant called _LEADERS_ based on the Leader class in a file named _leaders.ts_ in the _shared_ folder and `export` it,
- [x] __Create__ a new service named _leader_ that will __provide__ the _details_ of the corporate leaders given in _leaders.txt_ above, and
- [x] __Update__ the _AppModule_ to include the new service and make it available for the rest of the application.

### Task 2

In this task you will:

- __Integrate__ the `AboutComponent` into the single page application.

To get started, first __update__ the _about.component.html_ as follows:

```html
<div class="container"
  fxLayout="column"
  fxLayoutGap="10px">

  <div fxFlex>
    <div>
        <h3>About Us</h3>
        <hr>
    </div>
  </div>

  <div fxFlex>
    <div fxLayout="column" fxLayout.gt-sm="row">
      <div fxFlex="70">
        <h2>Our History</h2>
        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
      </div>
      <div fxFlex="30">
        <mat-card>
          <mat-card-header>
            <mat-card-title>
            <h2>Facts At a Glance</h2>
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <dl>
              <dt>Started</dt>
              <dd>3 Feb. 2013</dd>
              <dt>Major Stake Holder</dt>
              <dd>HK Fine Foods Inc.</dd>
              <dt>Last Year's Turnover</dt>
              <dd>$1,250,375</dd>
              <dt>Employees</dt>
              <dd>40</dd>
            </dl>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  </div>

  <div fxFlex>
    <mat-card>
      <blockquote>
        <h3>You better cut the pizza in four pieces because
            I'm not hungry enough to eat six.</h3>
        <footer>-- Yogi Berra,
          <cite>The Wit and Wisdom of Yogi Berra,
            P. Pepe, Diversion Books, 2014</cite>
        </footer>
      </blockquote>
    </mat-card>
  </div>


  <div fxFlex>
    <h2>Corporate Leadership</h2>
    <p>Display the details of the corporate leaders here</p>
  </div>
</div>
```

- [x] __Update__ the _about.component.ts_ file to:
    - fetch the details of the leaders and
    - make them available to the template,
- [x] __Update__ the _about.component.html_ file to:
    - display the details of the corporate leaders using the `mdList` Angular Material component.
- [x] __Update__ the _routes_ to include the route to a new path named "aboutus", and
- [x] __Update__ the _links_ in the header and footer to enable navigation to the About Us view.

### Task 3

In this task you will __add__ a new `card` to `HomeComponent` file to show the details of the featured corporate leader:

- __Update__ _home.component.html_ to include the details of the featured corporate leader in a card, and
- __Update__ _home.component.ts_ to fetch the details of the featured leader and make it available to the template.

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Ju7yTEt1EeetLBKFa7-ddg_bf6a5f5e7ebcfd5a59d43dab834f55ca_Assignment2-Task2.png?expiry=1539302400000&hmac=W7QOX_vM-6SC1CTUPewNP5FpSl5P1ML3hRdGeJNyrTk)

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/OIa7EUt1EeekgRKw19o9Gg_8a37d3861707e6d7ccf0f088361c3497_Assignment2-Task3.png?expiry=1539302400000&hmac=ndHCCDk1kbTKSp9WnFul8oF-dWA6mNW6BmAxawk_t5A)

## Review criteria

Upon completion of the assignment, your submission will be reviewed based on the following criteria:

__Task 1:__

- [x] A new Leader class has been added to the application.
- [x] A new LEADERS constant has been added to the application.
- [x] A new leader service has been added to the application and it makes the details of all leaders, a specific leader and a featured leader available.
- [x] The AppModule has been updated to include the leader service.

__Task 2:__

- [x] Updated _about.component.ts_ to fetch the leaders' details and make them available to the template.
- [x] Updated _about.component.html_ to show the details of the corporate leaders.
- [x] Updated _routes_ to include a new path to the `AboutComponent`.
- [x] Updated the _links_ in header and footer to enable navigation to the `About Us` view.

__Task 3:__

- [x] Updated home.component.ts to fetch and make the details of the featured leader available to the template.
- [x] Updated home.component.html to show the details of the featured leader using the Angular Material card component.

## Additional Resources

Angular Resources

- [Angular Data Binding](https://angular.io/docs/ts/latest/guide/architecture.html#!#data-binding)
- [Angular Template Syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html)
- [Angular Services](https://angular.io/docs/ts/latest/guide/architecture.html#!#services)
- [Angular Dependency Injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html)
- [Angular Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)
