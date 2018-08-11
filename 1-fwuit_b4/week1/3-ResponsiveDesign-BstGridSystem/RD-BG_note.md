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

```bash
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

The `viewport` meta tag ensures that the screen width is set to the device width and the content is rendered with this width in mind. This brings us to the second issue, designing the websites to be responsive to the size of the viewport. This is where the Bootstrap grid system comes to our aid. Bootstrap makes available _four_ sizes, xs for extra small, sm for small, md for medium and lg for large screen sizes. We have already seen the basics of responsive design. In this exercise, we will employ the Bootstrap grid classes to design the websites. We would like our website to have the content stacked on extra small devices, but become horizontal within each row for smaller devices and beyond. Towards this goal, we will make use of the classes:
- .col-*
- .col-sm-*,
- col-md-*, and .col-lg-* for defining the layouts for the various device sizes. We can specify how many columns each piece of content will occupy within a row, all adding up to 12 or a multiple thereof.

