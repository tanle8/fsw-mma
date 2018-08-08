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

	follow along and answers the prompts to initialize

Note: install `lite-server` package for web developing

	```bash
	npm install lite-server --save-dev
	```