# Setting up a Simple Server

## Objectives and Outcomes

In this lesson you will establish a simple __server__ using the `json-server` node module. At the end of this lesson you will be able to:

- __Set up__ a simple `server` that makes _data available for clients_
- __Access__ the `data` from the server using a browser.
- __Use__ the `json-server` as a simple _static web server_.

Note: If you are continuing from the previous course on Angular, you have already learnt about setting up a server using the json-server node module. You may wish to just check the part of the exercise about serving the images from the public/images folder.

## Exercise (Instructions): Setting up a Server using json-server

### Exercise Resources

[db.json](https://d3c33hcgiwev3.cloudfront.net/_17f7f5581d3b0062210f4891ed3c4c22_db.json?Expires=1542412800&Signature=AmgK3wENBfmbp2mR0ZeW-0WKcRRCdFbHl91E0B0Iz8LonEoyVlHMGXU6wEC5phKB-tt-il7YJbrgNm-XcxDKH3yTGyZZeLstQtWZX0Lq46d5kDz4A6fV0StGDrkrTHAZmvnjBOmd536KbhVeP-bUw-yCi0x2E-ohoUZHkfApQEw_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)
[images.zip](https://d3c33hcgiwev3.cloudfront.net/_37aab5bfeb9c0a0e2b747845c61f5835_images.zip?Expires=1542412800&Signature=jdtf1JTD3LD8GOp2mK2l38I2tX~H-PLhc~c1FiIa-C8oBZz~i2VxPFiColRCXm1zmwO0v55pqaRo8skOPwRifsqYZ9CrNOqQDtD3cQoPnOCOj5vbXWWV3CX~LkRep-L3lizK5sj3haiNsmXJP8syYTRTqsXb~6vYrd7Np5cjvNY_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

The Node module, `json-server`,

- provides a very simple way to set up a web server that supports a _full-fledged REST API_ server.
- It can also serve up static web content from a folder.

This lesson will leverage these two features to provide the back-end for your Ionic application. In this exercise, you will: configure and start a server using _json-server_ to enable serving your application data to your Ionic application.

At the end of this exercise, you will be able to:

- Configure and start a simple server using the `json-server` module
- Configure your server to serve up static web content stored in a folder named _public_.

### Installing json-server

- json-server is a node module, and hence can be installed globally by typing the following at the command prompt:

```bash
npm install json-server -g
```

If you are using OSX or Linux, use `sudo` at the front of the command. This will install json-server that can be started from the command line from any folder on your computer.

### Configuring the Server

- At any convenient location on your computer, create a new folder named `json-server`, and move to this folder.
- Download the `db.json` file provided above to this folder.
- Move to this folder in your terminal window, and type the following at the command prompt to start the server:

```bash
json-server --watch db.json -d 2000
```

- This should start up a server at port number 3000 on your machine. The data from this server can be accessed by typing the following addresses into your browser address bar:

```bash
http://localhost:3000/dishes
http://localhost:3000/promotions
http://localhost:3000/leaders
http://localhost:3000/feedback
```

- Type these addresses into the browser address and see the JSON data being served up by the server. This data is obtained from the `db.json` file

## Serving up the Images

- The json-server also provides a static web server. Any resources that you put in a folder named public in the json-server folder above, will be served by the server at the following address:

```bash
http://localhost:3000/
```

- Shut down the server by typing ctrl-C in the terminal window.
- Create a folder named _public_ in your _json-server_ folder.
- Download the images.zip file that we provide above, unzip it and move the images folder containing the images to the public folder.
- Restart the json-server as we did before. Now your server will serve up the images for our Ionic app. You can view these images by typing the following into your browser address bar:

```bash
http://localhost:3000/images/<image name>.png
```

## Conclusions

In this exercise, you learnt how to configure and start a simple server using the json-server node module. You also learnt how the server can serve up static web content.