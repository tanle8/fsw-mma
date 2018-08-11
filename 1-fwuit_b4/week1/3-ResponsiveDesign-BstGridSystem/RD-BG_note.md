#

## Bootstrap Grid

- Bootstrap makes availabel five classes
	- default targets all screen sizes from extra small to extra large,
	- _`sm`_ for small,
	- _`md`_ for medium,
	- _`lg`_ for large, and
	- _`xl`_ for extra large screen sizes

- Each row in Bootstrap grid system is divided into 12 colums
- Use the classes `.col-*`, `.col-sm-*`, `col-md-*`, and `.col-lg-*` for defining the layouts for the various screen sizes
- Specify how many columns each piece of content will occupy within a row, all adding up to 12 or a multiple three

## Exercise: Responsive Design and Bootstrap Grid System

- Create responsive websites using the Bootstrap grid system
- Customize the CSS classes through your own additions in a separate CSS file

__Note: In this exercise we will continue to update the index.html file in the conFusion folder that we created and edited in the previous lecture.__

## Bootstrap Grid System and Responsive Design

Bootstrap is designed to be mobile first, meaning that the classes are designed such that we can begin by targeting mobile device screens first and then work upwards to larger screen sizes. The starting point for this is first through media queries. We have already added the support for media queries in the last lesson, where we added this line to the head:

```html
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

The `viewport` meta tag ensures that the `screen width` is set to the device width and the content is rendered with this width in mind.

This brings us to the second issue, designing the websites to be responsive to the size of the viewport. This is where the `Bootstrap grid system` comes to our aid. 

Bootstrap makes available _four_ sizes,
- `xs` for extra small
- `sm` for small
- `md` for medium
- `lg` for large screen sizes.

We have already seen the basics of `responsive design`. In this exercise, we will employ the Bootstrap grid classes to design the websites. We would like our website to have the content stacked on extra small devices, but become horizontal within each row for smaller devices and beyond. Towards this goal, we will make use of the classes:
- `.col-*`
- `.col-sm-*`
- `col-md-*`
- `.col-lg-*`

for defining the layouts for the various device sizes. We can specify how many columns each piece of content will occupy within a row, all adding up to __12__ or a multiple thereof.

## Using a Container class

- We use the `"container"` class to keep content within a fixed width on the screen, determined by the size of the screen. The alternative is to use the container-fluid class to make the content automatically to span the full width of the screen. We will discuss further about this when we discuss the Bootstrap grid system in the next lecture. Add the `"container"` class to the ___first___ `div` right after the `</header>` in the file as follows.

	```html
	<div class="container"> ...
	```

## Creating a Jumbotron

- Let us add the class `"jumbotron"` to the `header class` as shown below. This turns the header element into a Bootstrap component named Jumbotron. A jumbotron is used to showcase key content on a website. In this case we are using it to highlight the name of the restaurant.

	```html
	    <header class="jumbotron"> ... 
	```

In the header add a `"container"` class to the first inner `div` and a `"row"` class to the second inner `div`.

## Creating a footer

Finally, in the footer add a `"container"` class to the first inner `div` and a `"row"` class to the second inner `div`.

## Applying column classes within each row

In the header row, we will display the restaurant name and the description to occupy 6 columns, while we will leave six columns for displaying the restaurant logo in the future. Let us go into the jumbotron and define the classes for the inner divs as follows:

	```html
	<div class="col-12 col-sm-6"> ... </div>

	<div class="col-12 col-sm"> ... </div
	```

For the remaining three `div` rows that contain the content, let us define the classes for the _inner_ `divs` as follows:

	```html
	<div class="col-12 col-sm-4 col-md-3"> ... </div>

	<div class="col col-sm col-md"> ... </div>
	```

For the footer, let us define the classes for the inner `divs` as follows:

	```html
	<div class="col-4 col-sm-2"> ... </div>

    <div class="col-7 col-sm-5"> ... </div>

	<div class="col-12 col-sm-4"> ... </div>

	<div class="col-auto"> ... </div>
	```

Now you can see how the web page has been turned into a mobile-first responsive design layout.

## Using Order and Offset with column layout classes

In the content rows, we would like to have the title and description to alternate so that it gives an interesting look to the web page. For extra small screens, the default stacked layout works best. This can be accomplished by using the .order-sm-last and .order-sm-first for the first and the third rows as follows:

	```html
	<div class="col-12 col-sm-4 order-sm-last col-md-3"> ... </div>

	<div class="col col-sm order-sm-first col-md"> ... </div>
	```

For the div containing the <ul> with the site links, update the class as follows:

	```html
	<div class="col-4 offset-1 col-sm-2">
	```

After saving all the changes, you can do a Git commit with the message "Bootstrap Grid Part 1" and push your changes to the online repository.

## Conclusion

In this exercise, we reviewed `responsive design` and the `Bootstrap grid system`.
