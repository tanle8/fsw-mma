# Note on Node

## `package.json`

- A `package.json` file affords you a lot of great things:
	- It serves as documentation for what packages your project depends on.
	- It allows you to specify the versions of a package that your project can use using semantic versioning rules
	- Makes your build reproducible, which means that its _way_ easier to share with other developers.

### Initializing `package.json`

- To initialize a `package.json` file for your project, type at the prompt in your project directory:

	```bash
	npm init
	```

- Follow along the prompts and answer the questions as follows: accept the default values for most of the entries, except set the entry point to index.html
- This should create a `package.json` file in your `git-test` folder.

## Installing an NPM Module

Install an NPM module, lite-server, that allows you to run a Node.js based development web server and serve up your project files. To do this, type the following at the prompt:

	```bash
	npm install lite-server --save-dev
	```

- You can check out more documentation on lite-server [here](https://github.com/johnpapa/lite-server).
- Next, open package.json in your editor and modify it as shown below. Note the addition of two lines, line 7 and line 9.

	```json
	{
	  "name": "git-test",
	  "version": "1.0.0",
	  "description": "This is the Git and Node basic learning 	project",
	  "main": "index.html",
	  "scripts": {
	    "start": "npm run lite",
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "lite": "lite-server"
	  },
	  "repository": {
	    "type": "git",
	    "url": "git	+https://jogesh_k_muppala@bitbucket.org/jogesh_k_muppal	a/git-test.git"
	  },
	  "author": "",
	  "license": "ISC",
	  "homepage": 	"https://bitbucket.org/jogesh_k_muppala/git-test#readme",
	  "devDependencies": {
	    "lite-server": "^2.2.2"
	  }
	}
	```

Next, start the development server by typing the following at the prompt:

	```bash
	npm start
	```

- This should open your `index.html` page in your default browser.
- If you now open the `index.html` page in an editor and make changes and save, the browser should immediately refresh to reflect the changes.

## Setting up .gitignore

- Next, create a file in your project directory named `.gitignore` (Note: the name starts with a period)Then, add the following to the `.gitignore` file

	```bash
	node_modules
	```
- The do a git commit and push the changes to the online repository. You will note that the node_modules folder will not be added to the commit, and will not be uploaded to the repository.

## Conclusions

In this exercise you learnt to set up `package.json`, install a npm package and start a development server.
