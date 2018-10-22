# Client-Server Communication

In this module you will:

- __Explore__ `client-server` communication using _both_ Angular `HTTP module` and the `REST API`.
- __Get__ a brief introduction to `animation` support in Angular
- __Create__ a _custom_ `attribute directive`
- __Learn__ about `testing`, `building` and `deploying` Angular applications

## Learning Objectives

- Demonstrate the _use_ of `client-server communication` in Angular applications
- __Design__ client-server communication using Angular support for `HTTP`
- __Design__ a `REST API` for your `server` and __communicate__ with the `server` using `Restangular`
- __Develop__ Angular `directives` and `animations` for your Angular application

## Client-Server Communication: Objectives and Outcomes

In this lesson you will:

- __learn__ about communication between your `Angular application` and a `server`.
- __establish__ a _simple_ `server` using the _json-server_ `node module`.

At the end of this lesson you will be able to:

- __Set up__ a _simple_ `server` that makes `data` available for `clients`
- __Access__ the _data_ from the `server` using a browser.
- __Use__ the _json-server_ as a _simple_ `static` `web server`.

### Hyper-text Transfer Protocol (HTTP)

In the protocol, you are __sending__ a `request` from your `client` application __to__ the `server`. This is encoded on the form of an HTTP request message.

The `request message` typically carries a `URL` indicating what you want with the server side to send to you (this is typically a GET message, if your want `data` to be downloaded from the server)

- If your are obtaining the standard HTML, CSS, and Javascript code from the server, then your browser is able to render this. But with application like angular, you are primarily connecting to the server and retrieving data in the form of either `JSON` or `XML` most of the time, except for the initial download of all the resources that are required for the angular application to be executed within your browser.

### HTTP request message

- The structure of HTTP request message

| Request Line |
|:------------:|
|    Headers   |
|  Blank Line  |
|     Body     |

- In details:

| Method (GET/ PUT/ PAUSE/ DELETE/) URL Version             |
|-----------------------------------------------------------|
| Header Field Name : Value  ...  Header Field Name : Value |
| Blank Line                                                |
| Body Contents                                             |

- Example:

|       Method (GET/ PUT/ PAUSE/ DELETE/) URL Version       |
|:---------------------------------------------------------:|
| Header Field Name : Value  ...  Header Field Name : Value |
|                         Blank Line                        |
|                       Body Contents                       |

### HTTP response message

- The structure of HTTP response message

|  Status Line  |
|:-------------:|
|    Headers    |
|   Blank Line  |
| Response Data |

- Example

| HTTP/1.1 200 OK                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connection: keep-alive Content-Type: text/html Date: Sun, 21 Feb 2016 06:01:43 GMT Transfer-Encoding: chunked                                                 |
|                                                                           Blank Line                                                                          |
| <html>     <title>This is index.html     </title>     <body>         <h1>Index.html</h1>         <p>This is the contents of this file</p>     </body> </html> |

### HTTP response codes (Main ones)

| Code | Meaning                    |
|------|----------------------------|
| 200  | OK                         |
| 201  | Created                    |
| 301  | Moved Permanently          |
| 304  | Not Modified               |
| 400  | Bad Request                |
| 403  | Forbidden                  |
| 404  | Not Found                  |
| 422  | Unprocessable Entry        |
| 500  | Internal Server Error      |
| 505  | HTTP Version Not Supported |

## Exercise (Instructions): Setting up a Server using json-server

### Objectives and Outcomes

The Node module, _json-server_,

- provides a very simple way to set up a `web server` that supports a _full-fledged_ `REST API server`. We will talk about REST API in the next lesson.
- It can also serve up static web content from a folder.

This lesson will leverage these two features to provide the back-end for your Angular application.

In this exercise, you will:

- __configure__ and __start__ a `server` using _json-server_ to enable __serving__ your `application data` to your Angular application.

At the end of this exercise, you will be able to:

- __Configure__ and __start__ a _simple_ `server` using the _json-server_ module
- __Configure__ your `server` to serve up static `web content` stored in a folder named _public_.

### Installing json-server

- json-server is a node module, and hence can be installed globally by typing the following at the command prompt:

    ```bash
    npm install json-server -g
    ```

If you are using __OSX__ or __Linux__, use sudo at the front of the command. This will install json-server that can be started from the command line from any folder on your computer.

### Configuring the Server

At any convenient location on your computer, create a new folder named _json-server_, and move to this folder.
Download the _db.json_ file provided above to this folder.

### Starting the Server

Move to this folder in your terminal window, and type the following at the command prompt to start the server:

```bash
    json-server --watch db.json
```

This should start up a server at port number _3000_ on your machine. The data from this server can be accessed by typing the following addresses into your browser address bar:

```bash
http://localhost:3000/dishes
http://localhost:3000/promotions
http://localhost:3000/leaders
http://localhost:3000/feedback
```

- Type these addresses into the _browser address_ and see the `JSON data` being __served up__ by the `server`. This data is obtained from the _db.json_ file
- The `json-server` also provides a _static_ `web server`. Any resources that you put in a folder named public in the json-server `folder` above, will be served by the server at the following address:

```bash
http://localhost:3000/
```

Shut down the server by typing ctrl-C in the terminal window.

### Conclusions

In this exercise, you learnt how to configure and start a simple server using the json-server node module. You also learnt how the server can serve up static web content.