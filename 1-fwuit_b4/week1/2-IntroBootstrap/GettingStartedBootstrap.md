# Exercise: Getting Started with Bootstrap

## Exercise Resources

[Bootstrap4-starter.zip](https://d3c33hcgiwev3.cloudfront.net/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter.zip?Expires=1533859200&Signature=ZnnlOMcta09Q4MudbulTONRGQKhhqk8HtfrdIon1gxtawGOItCiBusWZ7bxLA8pwGFKkxEJY6SPmo52QiSBCFSu-KPZyYM7HFE85stpGzrYv80eljuxRkzggm4DbkYsnNe8zVmDFQaKTog44X2rV8q8H5z1F8M~IWMgDXwX4iqs_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

## Objectives and Outcomes

This exercise introduces the first set of steps to set up your web page to make use of Bootstrap classes and components. At the end of this exercise, you will be able to:

- Download Bootstrap using NPM and include it in your project
- Understand how to set up a web project to use Bootstrap
- Include the Bootstrap CSS and JS classes into a web page

__Note: Please remember to retain the folder and all the files that you create in this exercise. Further exercises will build upon the files that you create in this exercise. DO NOT DELETE the files at the end of the exercise.__

## 1. Setting up the Project Folder

- Go to a convenient folder location on your computer and download the Bootstrap4-starter.zip file using the link provided at the top of this page.
- Unzip the file to see a folder named Bootstrap4 and a sub-folder under it named conFusion created. Move to the conFusion folder.
- Open a cmd window/terminal and move to the conFusion folder.
- At the prompt type

	```bash
	npm install
	```

- This will install the lite-server node module to your project.
- Next, initialize a Git repository in the project folder, and then set up a .gitignore file with the contents as shown below:

	```bash
	node_modules
	```

- Now do a commit of your project folder to the Git repository with the message "Initial Setup". You will be doing a commit of your project at the end of each exercise so that you retain the completed files of each exercise.
- Set up an online Git repository and synchronize your project folder with the online repository.

## 2. Downloading Bootstrap

- You will use npm to fetch the Bootstrap files for use within your project. Thereafter you need to install JQuery and Popper.js as shown below since Bootstrap 4 depends on these two. At the prompt, type the following to fetch Bootstrap files to your project folder:

	```bash
	npm install bootstrap@4.0.0 --save
	npm install jquery@3.3.1 popper.js@1 .12.9 --save
	```

- This will fetch the Bootstrap files and store is in your node_modules folder in a bootstrap folder. The bootstrap->dist folder contains the precompiled Bootstrap CSS and JS files for use within your project.
- Open your project folder in your editor, and then open the index.html file in the conFusion folder. This is your starting web page for the project. We have already created the web page with some content to get you started. We will use Bootstrap to style this web page, and learn Bootstrap features, classes and components along the way.
- Start your lite-server by typing __npm start__ at the prompt. The `index.html` file should now be loaded into your default browser.

## 3. Getting your Web page Bootstrap ready

- Open the `index.html` file in your favourite text editor. If you are using Visual Studio Code, Brackets, Sublime Text or similar editors, you can open the project folder in the editor and then view index.html.
- Insert the following code in the __<head>__ of _index.html_ file before the title.

	```bash
	<!-- Required meta tags always come first -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, 	shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" 	href="node_modules/bootstrap/dist/css/bootstrap.min.css">
	```

- This will include Bootstrap CSS into your web page. Note the subtle change in the fonts of the content of the web page. This is the Bootstrap typography effect coming into play. The default Bootstrap typography sets the font to Helvetica Neue and selects the appropriate font size based on the choice of the heading style and paragraph style for the content.
- At the bottom of the page, just before the end of the body tag, add the following code to include the JQuery library, popper.js library and Bootstrap's Javascript plugins. Bootstrap by default uses the JQuery Javascript library for its Javascript plugins. Hence the need to include JQuery library in the web page.

	```bash
	<!-- jQuery first, then Popper.js, then Bootstrap JS. -->
	<script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
	<script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
	<script 	src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
	```

- Now, do a Git commit with the message "Intro. to Bootstrap". You may push the commit to your online repository.

## Conclusion

We have now understood how to set up a web project to use Bootstrap. In the next lecture, we will explore further on responsive design and Bootstrap's grid system.