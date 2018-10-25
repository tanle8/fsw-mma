# Angular and REST: Objectives and Outcomes

In this lesson you will:

- learn about _Representational State Transfer_ (REST) based API for __data access__ on the `server`.
- learn about the a third-party Angular library called __Restangular__ that enables acccess to a _RESTful_ `server`.
    - __Restangular__ simplifies common `GET`, `POST`, `DELETE`, and `UPDATE` requests with a _minimum_ of `client code`.
    - It's a perfect fit for any WebApp that consumes data from a RESTful API.

At the end of this lesson you will be able to:

- Get a _basic understanding_ of `REST` style services
- Use the __Restangular__ third-party library with Angular to __access__ _REST style_ `services` from the Angular `client`

### Web Services

- A system designed to support __interoperability__ (khả năng tương tác) of systems connected over a network
    – Service oriented architecture (SOA)
    – A _standardized_ way of __integrating__ web-based applications using open standards operating over the Internet
- Two common approaches used in practice:
    - `SOAP` (Simple Object Access Protocol) based services
        - Uses WSDL (Web Services Description Language)
        - XML based
    - `REST` (Representational State Transfer)
        - Use Web standards
        - Exchange of data using either XML or JSON
        - Simpler compared to SOAP, WSDL etc.

### Representational State Transfer (REST)

- A style of software architecture for distributed __hypermedia__ systems such as the _World Wide Web_
- A collection of `network architecture principles` which outline how resources are __defined__ and __addressed__
- _Four_ basics design principles:
    - Use __HTTP method__ explicitly
    - Be __stateless__
    - Expose directory structure-like __URIs__
    - Transfer using __XML__, JavaScript Object Notation (__JSON__), or both

### REST and HTTP

The motivation for REST was to capture the characteristics of the Web successful

- URI (Uniform Resource Indicator) Addressable resources
- HTTP Protocol
- Make a Request - Receive Response - Display Response

Expoits the use of the HTTP protocol beyond HTTP POST and HTTP GET
- HTTP PUT, HTTP DELETE
- Preserve Idempotence

### REST Concepts

- __Nouns__ (Resources) _unconstrained_
    - They're full of resources and these resources are usually identified by their URL's
    - i.e., `http://www.conFusion.food/dishes/123`
- __Verbs__ _constrained_
    - Verbs are constrained and these specified sections to be done on the resources
    - i.e., GET, PUT, POST, DELETE
- __Representations__ _constrained_
    - When the information needs to be conveyed from the server to the client or vice versa.
    - How you encode the information (typically either using JSON or XML)
    - i.e., XML, JSON

### Resources

- The key abstraction of information in REST is a resource

- A resource is a conceptual mapping to a set of entities
    - Any information that can be named can be a resource:
        - a document or image
        - a temporal service (e.g. "today's weather in Hong Kong")
        - a collection of other resources,
        - a non-virtual object (e.g. a person), and so on

- Represented with a global identifier (URI in HTTP)
    - `http://www.conFusion.food/dishes/123`

### Naming Resources

- REST uses URI to identify resources
    - http://www.conFusion.food/dishes/
    - http://www.conFusion.food/dishes/123
    - http://www.conFusion.food/promotions/
    - http://www.conFusion.food/leadership/
    - http://www.conFusion.food/leadership/456
- As you traverse the path from more generic to more specific, you are navigating the data
- Directory structure to identify resources

### Verbs

- Represent the actions to be performed on resources
    - Corresponding to the CRUD operations
- HTTP GET <-> READ
- HTTP POST <-> CREATE
- HTTP PUT <-> UPDATE
- HTTP DELETE <-> DELETE

### HTTP GET

- Used by clients to request for information
- Issuing a `GET request` transfers the data from the `server` to the `client` in some representation (XML, JSON)
    - GET http://www.conFusion.food/dishes/
        - Retrieve all dishes
    - GET http://www.conFusion.food/dishes/452
        - Retrieve information about the specific dish

### HTTP PUT, HTTP POST, HTTP DELETE

- HTTP POST creates a resource
    - POST http://www.conFusion.food/feedback/
        - Content: {first name, last name, email, comment etc.}
        - __Creates__ a _new_ `feedback` with _given_ `properties`
- HTTP PUT updates a resource
    - PUT http://www.conFusion.food/dishes/123
        - Content: {name, image, description, comments, ...}
        - __Updates__ the information about the dish, e.g., comments
- HTTP DELETE removes the resource identified by the URI
    - DELETE http://www.conFusion.food/dishes/456
        - Delete the specified dish

### Representationss

- How data is __represented__ or __returned__ to the `client` for presentation
- Two main formats:
    - Javascript Object Notation (JSON)
    - XML
- It is common to have ___multiple___ `representations` fo the same data
    - `Client` can request the data in a _specific_ format if supported

### Stateless Server

- `Server side` __should not track__ the `client state`:
    - _Every_ `request` is a _new request_ from the `client`
- `Client side` should __track__ its _own_ `state`
    - E.g., using `cookies`, `client side database`
    - Every request _must_ include sufficient information for server to serve up the requested information
    - Client-side MVC setup

## Resources (REST)

- [Ngx-Restangular](https://github.com/2muchcoffeecom/ngx-restangular/)
- [Angular TODO Application with ng2-restangular and restdb.io](http://blog.2muchcoffee.com/angular_todo_application_with_ng2-restangular_and_restdb-io/)

## Exercise (Instructions): Angular and REST

Objectives and Outcomes:

In this exercise you will:

- learn about the a _third-party_ Angular library called `Ngx-Restangular` that _enables acccess to a RESTful server_.
    - Restangular simplifies common `GET`, `POST`, `DELETE`, and `UPDATE` requests with a minimum of client code.
    - It's a perfect fit for any WebApp that consumes data from a RESTful API.

At the end of this lesson you will be able to:

- __Enable__ your Angular application to use `Ng2-Restangular`
- __Make__ use of `Ngx-Restangular` to __access__ a `server` that supports a `RESTful API`.

### Adding and Configuring Ngx-Restangular

- First install `Ngx-Restangular` into your Angular application using NPM as follows:

```bash
npm install --save ngx-restangular@3.0.0
```

- Add a file named `restConfig.ts` to the _shared_ folder and update its contents as follows:

```ts
import { baseURL } from './baseurl';

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(baseURL);
}
```

### Update AppModule to use Ng2-Restangular

- Open _app.module.ts_ and update it as follows:

```ts
. . .
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

. . .

imports: [
  . . .
  RestangularModule.forRoot(RestangularConfigFactory)
  ]
  . . .
```

### Updating Dish Service

- Open _dish.service.ts_ and update it as follows to make it use `ngx-restangular`:

```ts
. . .

import { Restangular } from 'ngx-restangular';

. . .

  constructor(private restangular: Restangular) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return  this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes()
      .pipe(map(dishes => dishes.map(dish => dish.id)),
        catchError(error => error ));
  }

  . . .
```

- Then, open _home.component.ts_ and update it as follows:

```ts
. . .

    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess.message);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess.message);
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess.message);

. . .
```

- Similarly update the error handling in:
    - [x] _about.component.ts_,
    - [x] _dishdetail.component.ts_ and
    - [x] _menu.component.ts_.
