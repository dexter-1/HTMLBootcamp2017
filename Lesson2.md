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
  * [The box model](#the-box-model)
  * [Div Tags](#div-tags)
  * [The class selector](#the-class-selector)
  * [Applying the Box Model](#applying-the-box-model)
  * [The id selector](#the-id-selector)
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

## The Box Model
We have a lot of sections in our website. Let's say we wanted to put these sections in boxes, like you see in Facebook:

![](/screenshots/Lesson2/Sections.png)

To do this we must understand the **box model**. Let's take a look at this box with `Hello World` inside.

![](/screenshots/Lesson2/HelloWorldBox.png)

There are four main parts to the box model:

1. **Content**: This is the "Hello World!"
2. **Padding**: This is the spacing inside the box
3. **Border**: This is the thick grey border you see that forms the box
4. **Margin**: This is the spacing outside the box

This picture highlights each of the different parts of the box model.

![](/screenshots/Lesson2/HelloWorldBoxColors.png)

The blue represents the **content**, the green part represents the **padding**, the light orange represents the **border** and the dark orange represents the **margin**.

If you are still confused, this will become more clear as we make our different sections.

## Div Tags
The `<div></div>` tag is an important tag that you will see everywhere in HTML. This tag does nothing special, but it lets us divide up our code into sections. We will put each of the sections inside the `<div></div>` tags like so:

```html
<body>
  <link rel="stylesheet" href="style.css">

  <!-- This is a h1 tag. h1 is used to make really large texts for titles -->
  <h1>Dexter Rivera's Website</h1>

  <!-- the image tag is used for images. Fill in the src attribute to import the image from somewher else -->
  <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif" height="250" width="250">

  <div>
    <h2>Table of Contents</h2>
    <ul>
      <li>Introduction</li>
      <li>Biography</li>
      <li>My favourite sports</li>
      <li><a href="#videogames">My top 5 favourite video games</a></li>
    </ul>
  </div>

  <div>
    <!-- h2 is similar to h1, but the text is smaller -->
    <h2>Introduction</h2>

    <!-- p tags are used for paragraphs -->
    <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
  </div>

  <div>
    <h2>Biography</h2>
    <p>My name is Dexter Rivera. I was born in the Philippines on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the <a href="https://www.utoronto.ca/" title="Click here to learn more about my school!">University of Toronto</a> to study Engineering. </p>
  </div>

  <div>
    <h2>My favourite sports</h2>
    <p>Here are a list of my favourite sports: </p>
    <ul> <!-- for unordered lists (bullet points) -->
      <li>Basketball</li> <!-- each of the bullet points must be inside li tags -->
      <li>Baseball</li>
      <li>Tennis</li>
      <li>Swimming</li>
    </ul>
  </div>

  <div>
    <h2 id="videogames">My top 5 favourite video games</h2>
    <p>Here is a list of my favourite video games: </p>
    <ol>
      <li>Pokemon Emerald Version</li>
      <li>NBA 2K17</li>
      <li>MLB The Show</li>
      <li>Star Wars Battlefront</li>
      <li>Call of Duty: Black Ops </li>
    </ol>
  </div>
</body>
```
As you will see, nothing changes in Thimble until we add some styling to these sections.

## The Class selector
We can apply styling to things other than the elements. Or we may only want to style some `h1` elements but not all of them. All we need to do is apply the `class` attribute along with the name of the class to the tag we want to style. We will start by doing this with the introduction section, like this:
```html
<div class="box">
  <!-- h2 is similar to h1, but the text is smaller -->
  <h2>Introduction</h2>

  <!-- p tags are used for paragraphs -->
  <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
</div>
```
Now if we want to apply a style, we go to `style.css` and apply our style, this time adding a `.` before the name of the class we gave:
```css
.box {
	background-color: white;
}
```
What this does is set everything inside the `<div class="box"></div>` tags with a white background.

## Applying the Box Model
No we are ready to start applying the box model. When we applied `background-color: white`, you can now see the box.

### Padding
Notice how the words are so close to the edge of the box. This does not look very good. We can make some spacing between the edge of the box and the words by applying some **padding**
```css
.box {
	background-color: white;
	padding: 10px;
}
```
As you can see after applying the padding, the words are farther away from the edge and it looks a lot better.

### Border
Next let's add a border:
```css
.box {
	background-color: white;
	padding: 20px;
	border: 1px solid purple;
}
```
We can replace the word `solid` with any one of the following:
 * dotted
 * dashed
 * double
 * groove
 * ridge

Try them and see what happens!

We can also make the edges curved by setting the border-radius property:
```css
.box {
	background-color: white;
	padding: 20px;
	border: 1px solid purple;
	border-radius: 10px;
}
```

### Margin
It also does not look good how the box is so close to the picture. We need to set the `margin` property.
```css
.box {
	background-color: white;
	padding: 20px;
	border: 1px solid purple;
	margin: 10px;
}
```

Now the box looks a lot better! Let's apply this styling to all of the different sections by adding `class="box"` to all of the `<div></div>` tags we created!

Now we have sections similar to Facebook! Next week we will style these boxes even more using a special tool so that these sections look a lot more like Facebook.

One last thing that could make our website better is to prevent our website from extending all the way to the end of the page. We can do this by setting the `margin-left` and `margin-right` property of the `body`:
```css
body {
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size: 14px;
  background-color: #CFC0DD;
  margin-left: 300px;
  margin-right: 300px;
}
```
