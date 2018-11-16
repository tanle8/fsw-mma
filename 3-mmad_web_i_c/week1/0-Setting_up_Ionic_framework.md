# Setting up the Ionic framework

## Objectives and Outcomes

In this exercise you will set up the __Ionic__ framework and __Cordova__ on your computer. Thereafter you will scaffold out an Ionic application. At the end of this exercise, you will be able to:

- __Set up__ the `Ionic` framework and Cordova on your machine
- __Scaffold out__ an `Ionic application` using one of the `starter templates` in Ionic.

## Setting up the Ionic Framework

- To install the Ionic framework's command line interface (CLI) and Cordova, at the prompt type:

```bash
npm install cordova ionic -g
```

If you are installing on OSX or Linux, make sure to precede with `sudo`.

## Creating an Ionic Project

- Go to a convenient location on your computer and create a folder named Ionic. Then move to that folder in the command window.
- To scaffold out a new Ionic project, type the following at the command prompt:

```bash
ionic start conFusion sidemenu
```

- Move to the _conFusion_ folder and examine  the contents.
- To see the resulting project in your browser, type the following at the command prompt:

```bash
ionic serve --lab
```

This should automatically open the app in your default browser. I recommend using Google Chrome to view the app. If you wish to open the app in Chrome, type the following into the address bar:

```bash
http://localhost:8200
```

## Conclusions

In this exercise, you installed Cordova and Ionic CLI on your computer. Then you used Ionic CLI to scaffold out a new Ionic application.
