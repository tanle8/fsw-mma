# Angular Template-driven Forms: Objectives and Outcomes

In this lesson you will:

- __Learn__ about Angular `template-driven forms`.
- __Construct__ `template-driven forms` and learn about `form validation`.

At the end of this lesson you will be able to:

- __Construct__ an Angular `template-driven form` and __use__ it within your Angular application to __enable__ `user input`
- __Validate__ the `information` entered into the `form fields` using the `form validation support` _provided_ in Angular

## Lectures

### Forms

_The slide for this lecture can be found in slide directory_

## Exercise (Instructions): Angular Template-driven Forms Part 1

[Exercise - Template-driven forms tutorial - part 1](https://www.coursera.org/learn/angular/supplement/jAy74/exercise-instructions-angular-template-driven-forms-part-1)

## Form Validation

_The slide for this lecture can be found in slide directory_

## Exercise (Instructions): Angular Template-driven Forms Part 2

[Exercise - Template-driven forms tutorial - part 2](https://www.coursera.org/learn/angular/supplement/0Tjcz/exercise-instructions-angular-template-driven-forms-part-2)

### Objectives and Outcomes

In this exercise you will learn about:

- __Adding__ `form validation` to your _template-driven_ `forms` in Angular.
- __Show__ `validation error messages` to the users _within_ the `form`.

At the end of this exercise you will be able to:

- Add in form validation support to your template-driven forms
- Show validation error messages to the users

### Adding Template Reference Variables

Open _login.component.html_ file and __add__ in the `template reference variables` to the two `<input>` elements and the `<form>` element as follows:

```html
. . .
<form novalidate #loginForm="ngForm" (ngSubmit)="onSubmit()">

. . .

        <input matInput placeholder="Username" type="text" [(ngModel)]="user.username" name="username" #username="ngModel" required>

. . .

        <input matInput placeholder="Password" type="password" [(ngModel)]="user.password" name="password" #password="ngModel" required>

. . .
```

### Doing Form Validation

- You can now __disable__ the `submit` button if the form is _invalid_ as follows:

    ```html
    . . .
        <button type="submit" mat-button class="background-primary text-floral-white" [disabled]    ="loginForm.form.invalid">Login</button>
    . . .
    ```

- You can also __add__ `messages` below the input elements as follows:

    ```html
          . . .

      <mat-form-field>
        <input matInput placeholder="Username" type="text" [(ngModel)]="user.username" name="username"  #username="ngModel" required>
        <mat-error *ngIf="username.errors?.required">Username is required</mat-error>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Password" type="password" [(ngModel)]="user.password" name="password" #password="ngModel" required>
        <mat-error *ngIf="password.errors?.required">Password is required</mat-error>
      </mat-form-field>

      . . .
    ```

- Save all the changes and do a Git commit with the message "Template Forms Part 2"

### Conclusions

In this exercise you have demonstrated the various form validation features available with template forms.
