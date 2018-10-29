# Peer-graded Assignment: Angular Forms and Reactive Programming

In this assignment you will be updating the Angular application with an Angular `reactive form` and do the `form validation` in code using the `valueChanges` observable.

## Step-By-Step Assignment Instructions

### Assignment Overview

In this assignment you will:

- __update__ _dishdetail.component.html_ and _dishdetail.component.ts_ to include a `reactive form` and
- __do__ the `form validation` in code using the `valueChanges` observable.

At the end of this assignment, you should have completed the following tasks to update the page:

- [x] __Provide__ a `form` to enable users _to submit their comments_
- [] __Validate__ the information _entered_ by the `users` in the form
- [] __Show__ a _real-time_ `preview` of the comment on the page.

### Assignment Requirements

#### Task 1

In this task you will:

- __construct__ the `form` for users to submit their comments.

You need to complete the following:

- [x] __Set up__ the form as a `reactive form` using the reactive `form builder` with the _three_ fields: `author`, `rating` and `comment`. Note that this should match the fields in the Comment class that acts as the __data model__ for the `form`.
- [x] The `rating` should be __set__ to _5_ by default.
- [x] Use the Angular `Material slider` component to provide an intuitive way of submitting the rating.
    - The slider should show `tick marks` and
    - Use the `thumb label` to show the rating value when the user is selecting the rating.

Note: Useful resource:

1. https://material.angular.io/components/slider/overview

#### Task 2

In this task, you will enable form validation using Angular support for __reactive form__ `validation`.

You need to complete the following:

- [x] The `author` and `comments` are _required_ fields and the user has to enter _appropriate_ information in both the fields. Furthermore the `author` field should at least be _two_ characters long.
- [x] The `submit` button should be disabled until the user has entered all the required fields.
- [] The `user` should _be alerted_ by:
    - [x] showing the invalid fields in _red_, and
    - [] a message displayed at the bottom of the field.
- You should use the _valueChanges_ `observable` to trigger the `form validation` and do all the `form validation` in code similar to the way it was done in the Reactive Forms Part 3 exercise.

#### Task 3

In this task you will:

- Enable real-time preview of the user's comments in the Angular application in the dishdetail view. This should be displayed in the same format as the regular comments.

You need to complete the following tasks:

- [] __Show__ a preview just above the form using the same format as the regular comments on the page. The preview should not include the submission date as it is not yet added to the comment.
- [] __Display__ the preview only if the user has entered valid information into the form. --> using `[hidden]` tag
- [] Upon submitting the _valid_ comment, the comment should join the regular comments on the page.
    - To do this you need to __map__ the `Form model` into the `data model`.
    - The `date` for the comment should be set automatically upon submission of the form.
    - Both these actions should be done in the function that handles the form submission in code.
        - You can use the JavaScript array `.push` method to add the comment into the comments array of the dish.
        - You can use the JavaScript date (see [here](https://www.w3schools.com/jsref/jsref_toisostring.asp) for an example) method to set the date to ISO string.
- [x] Upon successful submission, the form is reset to its default value with the rating set to 5.

## Review criteria

Upon completion of the assignment, your submission will be reviewed based on the following criteria:

Task 1:

- [x] The form is set up with the three fields correctly.
- [x] A slider component is included in the form to enable users to submit the rating.

Task 2:

- [] The author field is being properly validated. If incorrect, the user is alerted.
- [] The comment field is being properly validated. If incorrect, the user is alerted.
- [x] The submit button is enabled only if the name and comment field are valid.

Task 3:

- [] The preview of the comment has been created on top of the form within the same mdList component as used for the regular comments, but separate from them until the comment is submitted. The comment should line up with the remaining comments.
- [] The comment preview is shown only when the information in the form is valid.
- [] Upon submission of the comment, it gets included in the regular comments and shown on the screen.
- [] The date for the comment has been automatically set upon submission.
- [] Upon successful submission, the form is reset to its default value with the rating set to 5.