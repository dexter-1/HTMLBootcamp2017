# Lesson 2
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
  * [Hovering](#hovering)
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
	border-radius: 5px;
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
  margin-left: 25%;
  margin-right: 25%;
}
```
You can see that the 25% is different from the `px` values we see. To explain what we mean by percent, let's imagine the website as a big rectangular pizza. We will put the pizza up into four slices. The first slice will just be empty (`margin-left: 25%`), the last slice will be empty (`margin-right: 25%`), and the middle two slices is where the website will sit.

## The id selector
Let's say we only wanted to apply style to one element only. For example, let's say that I the word "basketball" in my list of favourite sports to be orange. We can use the `id` selector.

First we go to the html tag that has basketball and give it the attribute `id` with a name:
```html
<li id="basketball">Basketball</li>
```
Then we add our style to the css file, this time using a `#` in front of the name you picked instead of `.`:
```css
#basketball {
	color: orange;
}
```
Now only the word basketball is in orange!

It is important to note that unlike `class`, `id` only applies to one element on your website whereas `class` can be used many times.

## Hovering
We can make our elements change when we put the mouse over it. For example, let's say we want the link we created to turn green when our mouse hovers over it. We can do so like this:
```css
a:hover {
	color: green;
}
```
We can the element we want, in this case `a`, put a colon and the word hover after it. Now the link will be green only if we put the mouse over it.

### A trickier example
Let's make the text below each title hidden but make it reappear when we hover over it. We will start with the table of contents. First we will add a `class="popup"` to the `ul` element:
```html
...
<ul class="popup">
      <li>Introduction</li>
      <li>Biography</li>
      <li>My favourite sports</li>
      <li><a href="#videogames">My top 5 favourite video games</a></li>
</ul>
```
We want to add the class to the `ul` element because we only want this part to disappear and reappear when we put our mouse over it.

Next we will add our CSS styling:
```css
.popup {
	display: none;
}
```
When we add `display: none`, this makes the list disappear. Next we add the following CSS to make the list reappear when we put our mouse over the box:
```css
div:hover .popup {
	display: block;
}
```
The `div:hover` part means apply only when we put our mouse over the `div` element, which in this case is the box. The `.popup` afterwards means that the styling inside the curly braces will get applied once we hover over. `display: block` means to display the list instead of make it disappear.

No if we want to make this happen for all of our sections, all we need to do is add `class="popup"` to the sections we want to disappear and reappear!

### Challenge
Instead of making the text below each title appear and reappear, let's just change the color of the box to be purple and the font color to be white, like this:

![](/screenshots/Lesson2/hover.png)

**Hint:**
You need to set the background color purple and the font white when you hover over!

## Animations
To make our page more interesting, we will add some animations. For example, I want the boxes to slide in from the left and right when the page loads. To do this, we first need to include this at the top of the `index.html` file:

```html
<head>
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
```
Just like how we used the `<link>` tag to put our `style.css` file into our `index.html` file, we are also including another `.css` file, this time a file that someone else wrote and we will use. To make the animations, all we need to do is add `animation animation-name` where `animation-name` could be something like `slideInLeft`:
```html
<div class="box animated slideInLeft">
    <h2>Table of Contents</h2>
    <ul class="popup">
      <li>Introduction</li>
      <li>Biography</li>
      <li>My favourite sports</li>
      <li><a href="#videogames">My top 5 favourite video games</a></li>
    </ul>
  </div>
```
We put the class names inside the `<div></div>` tags because it is the box we want to slide in from the left. I will do this for the rest of the boxes, alternating between `slideInLeft` and `slideInRight`:
```html
<div class="box animated slideInLeft">
    <h2>Table of Contents</h2>
    <ul class="popup">
      <li>Introduction</li>
      <li>Biography</li>
      <li>My favourite sports</li>
      <li><a href="#videogames">My top 5 favourite video games</a></li>
    </ul>
  </div>
<!--
  <div class="header">

  </div>
-->
  <div class="box animated slideInRight">
    <!-- h2 is similar to h1, but the text is smaller -->
    <h2>Introduction</h2>

    <!-- p tags are used for paragraphs -->
    <p class="popup">Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
  </div>

  <div class="box animated slideInLeft">
    <h2>Biography</h2>
    <p class="popup">My name is Dexter Rivera. I was born in the Philippines on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the <a href="https://www.utoronto.ca/" title="Click here to learn more about my school!">University of Toronto</a> to study Engineering. </p>
  </div>

  <div class="box animated slideInRight">
    <h2>My favourite sports</h2>
    <p class="popup">Here are a list of my favourite sports: </p>
    <ul class="popup"> <!-- for unordered lists (bullet points) -->
      <li id="basketball">Basketball</li> <!-- each of the bullet points must be inside li tags -->
      <li>Baseball</li>
      <li>Tennis</li>
      <li>Swimming</li>
    </ul>
  </div>

  <div class="box animated slideInLeft">
    <h2 id="videogames">My top 5 favourite video games</h2>
    <p class="popup">Here is a list of my favourite video games: </p>
    <ol class="popup">
      <li>Pokemon Emerald Version</li>
      <li>NBA 2K17</li>
      <li>MLB The Show</li>
      <li>Star Wars Battlefront</li>
      <li>Call of Duty: Black Ops </li>
    </ol>
  </div>
```
If you want to try the different animations, go to ![Animate.css](https://daneden.github.io/animate.css/). You can pick the animation you want, and if you like it, you can change the name `slideInLeft` to that animation.

## Conclusion
Now our website looks better than last week, but still not too pretty as it could be! Next week we will be learning a new tool that will make our websites look ever prettier, something closer to what you see on Facebook! 
