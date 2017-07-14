# Lesson 1
**Date**: Saturday, July 15, 2017  
**Time**: 10:00 am - 12:00 pm  
**Location**: York Woods Public Library, 1785 Finch Ave W, North York, ON M3N 1M6  
**Instructor**: Dexter Rivera

**What you will learn in this lesson**
  * [What is CSS?](#what-is-css)
  * [Where to write CSS](#where-to-write-css)
  * [Basic CSS](#basic-css)  
  * [Colors](#colors)
  * [Fonts](#fonts)
  * [Color Selecting](#color-selecting)
  * [The class selector](#the-class-selector)
  * [The id selector](#the-id-selector)
  * [The box model](#the-box-model)
  * [Pseudo Classes](#pseudo-classes)
  * [Animations](#animations)

## What is CSS?
**CSS** stands for Cascading Style Sheets. It is the programming language we use to make websites look pretty! Your website might look really boring now, but after this lesson I promise it will look a lot better!

## Where to write CSS
There are three ways to write CSS. For the rest of this course we will stick to this method I will show below, but I will also show you the other two methods later on.

To write CSS, we need to have a file with a `.css` extension. Luckily, Thimble has already provided us with one called `style.css`. We will write our code here.

First, we will delete all of the code already in `style.css` and start from scratch.

The next thing we must do is include the `style.css` file inside our `index.html` file. We do this with the `link` tag, as such:

```html
<link rel="stylesheet" href="style.css">
```

No whatever we do in the `style.css` file will affect the `index.html` file.

## Basic CSS
Writing CSS is very easy! To write CSS we need three things:

1. The Element you want to apply CSS to
2. What property you want to change
3. The property value.

### Colors
For example, let's say we want to change the color of our website title. This is how we would do it in CSS:

```css
h1 {
	color: purple;
}
```

From the code, we can see that the `h1` outside the `{}` brackets means that we apply the style to **all** `h1` elements. Then inside the `{}` brackets, we apply the style we want. To the left of the `:` we set which property we want to change, in this case the color. To the right of the `:`, we set the property, in this case purple! We must put a `;` after every statement.

We can also apply a single style to multiple elements. For example, let's say we want our sub-headers to be purple too, we would do this:

```css
h1, h2 {
	color: purple;
}
```

## Fonts
The next thing we will do is change the font of the website. The first thing we need to do is put the all of our code inside the `<body></body>` tag, like this:

```html
<body>
  <link rel="stylesheet" href="style.css">

  <!-- This is a h1 tag. h1 is used to make really large texts for titles -->
  <h1>Dexter Rivera's Website</h1>

  <!-- the image tag is used for images. Fill in the src attribute to import the image from somewher else -->
  <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif" height="250" width="250">

  <h2>Table of Contents</h2>
  <ul>
    <li>Introduction</li>
    <li>Biography</li>
    <li>My favourite sports</li>
    <li><a href="#videogames">My top 5 favourite video games</a></li>
  </ul>

  <!-- h2 is similar to h1, but the text is smaller -->
  <h2>Introduction</h2>

  <!-- p tags are used for paragraphs -->
  <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>

  <h2>Biography</h2>
  <p>My name is Dexter Rivera. I was born in the Philippines on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the <a href="https://www.utoronto.ca/" title="Click here to learn more about my school!">University of Toronto</a> to study Engineering. </p>

  <h2>My favourite sports</h2>
  <p>Here are a list of my favourite sports: </p>
  <ul> <!-- for unordered lists (bullet points) -->
    <li>Basketball</li> <!-- each of the bullet points must be inside li tags -->
    <li>Baseball</li>
    <li>Tennis</li>
    <li>Swimming</li>
  </ul>

  <h2 id="videogames">My top 5 favourite video games</h2>
  <p>Here is a list of my favourite video games: </p>
  <ol>
    <li>Pokemon Emerald Version</li>
    <li>NBA 2K17</li>
    <li>MLB The Show</li>
    <li>Star Wars Battlefront</li>
    <li>Call of Duty: Black Ops </li>
  </ol>
</body>
```
The body refers to everything inside the browser window. HTML code should always be inside the `<body></body>` tag!

Next we will change the font by change the property `font-family` to the body:
```css
body {
	font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
}
```
This is my preferred font, you can search up different fonts [here](https://www.w3schools.com/css/css_font.asp).

We can also change the `font-size` of our website:
```css
body {
	font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
	font-size: 14px;
}
```
`font-size` makes the words appear bigger or smaller on the website. Notice how we can add multiple styles to one element as long as we add semi-colons to each style!

Also notice that unlike HTML, for the most part the order of CSS does not matter.

## Color Selection
Next we will set the `background-color` property. This changes the background colour of the website. However, I want a light purple colour but they don't have light purple. We need use the colour selector.

On a new line, type `background-color` then press `Ctrl` + `E` if you are using a PC or `Cmd` + `E` if you are using a Mac. Now you can pick from a variety of colours instead of just blue, red, purple, etc. I will set my background color to this:
```css
body {
	font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
	font-size: 14px;
	background-color: #CFC0DD;
}
```

### Exercise
Play around with the colors and fonts and set your own color and font! You can even change the color of the paragraph font or bullet point fonts!
