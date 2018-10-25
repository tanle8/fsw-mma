# Angular HTTP Client: Objectives and Outcomes

In this lesson you will:

- __learn__ about `communication` between your `Angular application` and a `server`.
- __consume__ the `data` __exported__ by the `server` within your application using the __Angular__ `HTTP client`.

At the end of this lesson you will be able to:

- Use Angular `HTTP client` to __communicate__ with the `server` from your Angular application
- __Handle__ `errors` that might result while `accessing` the server.

## Exercise (Instructions): Angular HTTP Client

Objectives and Outcomes:

In this exercise you will:

- learn to use the Angular `HTTP client` to __make requests__ for `data` to a `server` and __obtain__ and __process__ the response.

At the end of this exercise you will be able to:

- [] Use Angular `HTTP client` to __obtain__ `data` from a `server`
- [] __Process__ the _HTTP response_ from the `server` to retrieve the `data` and use it in your `application`.

### Updating the Json-Server Configuration

- You will now update the `json-server` to enable it to serve up resources from its public folder. Go to the json-server folder and create a folder in their named _public_
- Download the _images.zip_ file provided above and unzip it and move the _images_ folder to the public folder that you created above
- Start the `json-server` by typing the following at the prompt. This will introduce a delay of _2_ seconds before the server sends the reply to a request:

```bash
json-server --watch db.json -d 2000
```

### [x] Configuring the Base Server URL

- You need to import the `HttpClientModule` in _app.module.ts_ by adding the following to the file:

```ts
. . .

import { HttpClientModule } from '@angular/common/http';

. . .

@NgModule({

  . . .
  imports: [
    . . .

    HttpClientModule
  ],

  . . .
```

- Create a new file named _baseurl.ts_ in the shared folder and update its contents as follows:

```ts
export const baseURL = 'http://localhost:3000/';
```

- Open AppModule, import _baseURL_ and update the AppModule's providers property of the `@NgModule` decorator as follows:

```ts
. . .
import { baseURL } from './shared/baseurl';

. . .

providers: [
  . . .
  {provide: 'BaseURL', useValue: baseURL}
  ]
```

### Updating the Dish Service

- Create a new service named _ProcessHTTPMsg_ in the services folder
- Import the `service` into AppModule and include it in the providers property of the `@NgModule` decorator.
- Open _dish.service.ts_ file and update its contents as follows:

```ts
. . .

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

. . .

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }

  . . .
```

### Updating Menu Component

- Open _menu.component.ts_ and update it as follows:

```ts
import { Component, OnInit, Inject } from '@angular/core';

. . .

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

. . .
```

- Also delete the _DISHES_ import and the _selectedDish_ variable and the _onSelectDish()_ method.
- Open _menu.component.html_ and update it as follows:

```html
. . .
        <img height="200px" src="{{BaseURL + dish.image}}" alt={{dish.name}}>

. . .
```

- Similarly update
    - [x] _dishdetail.component.html_,
    - [x] _dishdetail.component.ts_,
    - [x] _home.component.html_ and
    - [x] _home.component.ts_

Conclusions

In this exercise you learnt to use the Angular HTTP client to obtain data from a server and process the HTTP response from the server.

## Exercise (Instructions): Angular HTTP Client: Error Handling

Objectives and Outcomes

In this exercise we will look at `error handling` with the `HTTP client`. It is possible that _several_ `errors` could arise during the `client-server communication`. It is the _responsibility of the client_ to properly __handle__ the `errors` and recover and continue its operation.

At the end of this exercise you will be able to:

- __Catch__ `errors` that might arise while communicating with the server
- __Design__ appropriate `error handling mechanisms` for the HTTP client

### Update ProcessHTTPMSgService to Handle Errors

- Update _process-httpmsg.service.ts_ to include a function to handle errors as follows:
    - Include `throwError` from `rxjs`

```ts
. . .

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

. . .


  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errMsg);
  }
  . . .
```

### Update Dish Service

- Update dish.service.ts to catch and handle errors as follows:

```ts
. . .

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

. . .

import { ProcessHTTPMsgService } from './process-httpmsg.service';

. . .

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }
  . . .
```

### Update Menu Component

- Update menu.component.ts as follows to handle errors:

```ts
```

- Update menu.component.html file as follows:

```ts
```

- Similarly update
    - [x] dishdetail.component.ts and dishdetail.component.html file.
- Also update
    - [x] home.component.ts and home.component.html files similarly, but use the variable named _dishErrMess_ instead of errMess.

Conclusions

In this exercise you have updated the Angular application to catch and handle errors in client-server communication.