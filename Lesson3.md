# Lesson 3
**Date**: Saturday, July 29, 2017  
**Time**: 10:00 am - 12:00 pm  
**Location**: York Woods Public Library, 1785 Finch Ave W, North York, ON M3N 1M6  
**Instructor**: Dexter Rivera

### What you will learn in this lesson
  * [What is Semantic UI](#what-is-semantic-ui)
  * [How to use semantic UI](#how-to-use-semantic-ui)
  * [Segments](#segments)
   * [Multiple Segments](#multiple-segments)
   * [Changing colour of the segments](#changing-colour-of-the-segments)
   * [Challenge 1](#challenge-1)
  * [Navbar](#navbar)
  * [Cards](#cards)
  * [Lists](#lists)
  * [Icons](#icons)
  * [Grid](#grid)
  * [Challenges](#challenges)
  * [Challenge 2](#challenge-2)
  * [Challenge 3](#challenge-3)
  * [Challenge 4](#challenge-4)

## What is Semantic UI?
In this lesson we will be making our websites look even prettier than before with a tool called Semantic UI. Semantic UI lets us have cool elements on the page without writing a whole lot of CSS! To get started, we need to include a link to the Semantic UI style sheet:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.10/semantic.min.css">
<script src="https://cdn.jsdelivr.net/semantic-ui/2.2.10/semantic.min.js"></script>
```

Add the following to the two lines of code to the top of your `index.html`. Now we are ready to get started!

## How to use semantic ui
To use semantic ui, you need to go on their website, which can be found [here](https://semantic-ui.com/introduction/getting-started.html). You can then take a look at the different elements you can add to your webpage by looking at the sidebar.

Once you find something you like, click on the link in the sidebar. There you can see examples of how to add that element to your page. Just copy the code and change it to make the element look like what you want!

We will be doing some examples of some things you could add to your website.

## Segments
Last week we put our different sections of our website in boxes. This week we will make them over better by using semantic ui's segments.

On the left sidebar on semantic ui's home page, go under "Elements" and click "Segment" (if you can't find it just click [here](https://semantic-ui.com/elements/segment.html)). On this page, you can see all of the different segments that you could add to your website! If you like something, click on `<>` button. You will then be able to see the code that you need to put in your `index.html` file to add it to your website.

Feel free to pick whichever segment you want! I will use a raised segment. I will click on the `<>` button beside the "Segment" title:

![](/screenshots/Lesson3/Segment.png)

 and copy and paste the code right on top of my introduction:

```html
...

<div class="ui segment">
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</div>

<div class="box animated bounceInRight">
  <!-- h2 is similar to h1, but the text is smaller -->
  <h2>Introduction</h2>

  <!-- p tags are used for paragraphs -->
  <p class="popup">Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
</div>

...
```

Next I will delete the `<p></p>` tags in the code we got from semantic-ui and replace it with the code inside our `<div class="box animateed bounceInRight"> ... </div>` tags, but this time get rid of the `class="popup"` in our `p` tags:

```html
<div class="ui segment">
	<!-- h2 is similar to h1, but the text is smaller -->
    <h2>Introduction</h2>

    <!-- p tags are used for paragraphs -->
    <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
</div>
```

We can also delete the previous code we had before for our introduction (if you like your old boxes better, feel free to keep that instead!). If you want the segments to still be animated, we can add `animated bounceInRight` to the class tag:

```html
<div class="ui segment animated bounceInRight">
	<!-- h2 is similar to h1, but the text is smaller -->
    <h2>Introduction</h2>

    <!-- p tags are used for paragraphs -->
    <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
</div>
```

Semantic UI is great because we didn't have to write a lot of CSS! All we need to do is add `<div></div>` tags and add the class `ui segment` and we get a nice box!

### Multiple segments
We can also have multiple segments stacked together! Let's put the title of our section into one segment, the paragraph in another and stack them close together.

To do this, we need to look at the section titled `Raised Segments`. Click on the `<>` button to see the code for it.

![](/screenshots/Lesson3/Segments.png)

To use multiple segments stacked together, we need to add `<div class="ui raised segments"></div>` tags, then for every segment, we add a `<div class="ui segment"></div>` inside the `<div class="ui raised segments"></div>` tags. I will add one segment for the title of the introduction section and one segment for the paragraph:

```html
<div class="ui raised segments animated bounceInRight">
	<div class="ui segment">
		<!-- h2 is similar to h1, but the text is smaller -->
	    <h2>Introduction</h2>
	</div>

	<div class="ui segment">
		<!-- p tags are used for paragraphs -->
	    <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
	</div>
</div>
```

Now on your website you can see that the title "Introduction" looks like it's in its own little box and the paragraph is in it's own little box, but the boxes are put together.

### Changing colour of the segment
We can also change the colour of the segment. Go to the section title "Colored" and go down to the part where it says "These colors can be inverted." Click on the `<>` button to see the code for it.

![](/screenshots/Lesson3/SegmentColours.png)

Let's change the title segment to purple by change the class to `ui purple inverted segment`.

```html
<div class="ui raised segments animated bounceInRight">
	<div class="ui purple inverted segment">
		<!-- h2 is similar to h1, but the text is smaller -->
	    <h2>Introduction</h2>
	</div>

	<div class="ui segment">
		<!-- p tags are used for paragraphs -->
	    <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
	</div>
</div>
```

Let's also go back into `style.css` and change the colour of `h2` to white:
```css
h1 {
	color: purple;
}

h2 {
	color: white;
}
```

### Challenge 1
Change the rest of the boxes you currently have to ui segments! You can explore the rest of the segments page on semantic ui and choose your own segments!

## Navbar
Next we will get rid of our table of contents section and add a navbar instead, which most websites have. To do this we will go to the [menu section](https://semantic-ui.com/collections/menu.html) in semantic ui. We will scroll down to the section called "Variations" :

![](/screenshots/Lesson3/fixed.png)

We will click on the `<>` button right beside the "Fixed" title. This gives us the code for a navbar at the top of our website. We will copy only the `<div class="ui top fixed menu"> ... </div>` tags because we only want a navbar at the top of our website, not the bottom. We will place this at the top of our `<body></body>` tag:

```html
<body>
  <link rel="stylesheet" href="style.css">

  <div class="ui top fixed menu">
    <div class="item">
      <img src="/images/logo.png">
    </div>
    <a class="item">Features</a>
    <a class="item">Testimonials</a>
    <a class="item">Sign-in</a>
  </div>

  <!-- This is a h1 tag. h1 is used to make really large texts for titles -->
  <h1>Dexter Rivera's Website</h1>

  ...
```

We will replace the `src` of their photo with the one you picked for your website:
```html
<body>
  <link rel="stylesheet" href="style.css">

  <div class="ui top fixed menu">
    <div class="item">
      <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif">
    </div>
    <a class="item">Features</a>
    <a class="item">Testimonials</a>
    <a class="item">Sign-in</a>
  </div>

  <!-- This is a h1 tag. h1 is used to make really large texts for titles -->
  <h1>Dexter Rivera's Website</h1>

  ...
```

Then for each of the `a` tags, we will put in the names of our sections
```html
<body>
  <link rel="stylesheet" href="style.css">

  <div class="ui top fixed menu">
    <div class="item">
      <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif">
    </div>
    <a class="item">Introduction</a>
    <a class="item">Biography</a>
    <a class="item">My favourite sports</a>
	<a class="item">My top 5 favourite video games</a>
  </div>

  <!-- This is a h1 tag. h1 is used to make really large texts for titles -->
  <h1>Dexter Rivera's Website</h1>

  ...
```

If you did not get a chance to learn about linking to a spot in your own page (I know some of you did because you went ahead), then check out [Lesson 1](https://github.com/projectinclude-dexterrivera/HTMLBootcamp2017/blob/Lesson1/Lesson1.md#links).

We must finally add the `href` attribute to each `a` tag followed by the `#` and then the name of the `id` you put for each section:
```html
<body>
  <link rel="stylesheet" href="style.css">

  <div class="ui top fixed menu">
    <div class="item">
      <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif">
    </div>
    <a class="item" href="#introduction">Introduction</a>
    <a class="item" href="#biography">Biography</a>
    <a class="item" href="#sports">My favourite sports</a>
	<a class="item" href="#videogames">My top 5 favourite video games</a>
  </div>

  <!-- This is a h1 tag. h1 is used to make really large texts for titles -->
  <h1>Dexter Rivera's Website</h1>

  ...
```

After putting the navbar in, you might see that the navbar overlaps with some of the content on your website like this:

![](/screenshots/Lesson3/overlapping.png)

We can fix this by adding a top padding to the body section in our css:
```css
body {
	...
	padding-top: 60px;
}
```

Remember from last week that padding is just spacing! So we are adding some spacing to the entire website so it goes underneath the navbar!

We can change the colour of the navbar by adding `inverted COLOURNAME` to the class like this:
```html
<body>
  <link rel="stylesheet" href="style.css">

  <div class="ui top inverted purple fixed menu">
    <div class="item">
      <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif">
    </div>
    <a class="item" href="#introduction">Introduction</a>
    <a class="item" href="#biography">Biography</a>
    <a class="item" href="#sports">My favourite sports</a>
	<a class="item" href="#videogames">My top 5 favourite video games</a>
  </div>

  <!-- This is a h1 tag. h1 is used to make really large texts for titles -->
  <h1>Dexter Rivera's Website</h1>

  ...
```

We can now finally delete the table of contents section!

## Cards
The next thing we will add to our website is cards. To do this, we will go to the [card section](https://semantic-ui.com/views/card.html) in semantic ui.

Click on the `<>` button beside the "Card" title at the very top of the page. We will copy and paste the code right after the code for `<h1>Dexter Rivera's Website</h1>`:

```html
<!-- This is a h1 tag. h1 is used to make really large texts for titles -->
<h1>Dexter Rivera's Website</h1>

<div class="ui card">
  <div class="image">
    <img src="/images/avatar2/large/kristy.png">
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
```

We will replace the `src` of the image with the one you picked for your profile picture:
```html
...

<div class="image">
  <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif">
</div>

...
```

Then inside `<a class="header"></a>` we will put your name:

```html
<div class="content">
  <a class="header">Dexter Rivera</a>
  ...
</div>
```

Then inside `<span class="date"></span>` we will put "HTML and CSS coder". Of course you can put something else if you want, something that describes you!

```html
<div class="content">
  <a class="header">Dexter Rivera</a>
  <div class="meta">
	<span class="date">HTML and CSS Coder</span>
  </div>
  ...
</div>
```

Finally under `<div class="description"></div>`, let's change the description to the one you put in your biography!

```html
<div class="content">
  <a class="header">Dexter Rivera</a>
  <div class="meta">
	<span class="date">HTML and CSS Coder</span>
  </div>
  <div class="description">
	My name is Dexter Rivera. I was born in the Philippines on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the <a href="https://www.utoronto.ca/" title="Click here to learn more about my school!">University of Toronto</a> to study Engineering.
  </div>
  ...
</div>
```

Now let's delete the extra image you have on your website and the biography section!

## Lists
The description section is a little bit too long. It's best if we only highlight the important points. We will do this with a list.

Go to the [list section](https://semantic-ui.com/elements/list.html) of semantic ui.
Click on the `<>` button right beside the List title. Copy and paste the code inside the `<div class="description"> ... </div>` that we created in the previous section:

```html
<div class="content">
  <a class="header">Dexter Rivera</a>
  <div class="meta">
	<span class="date">HTML and CSS Coder</span>
  </div>
  <div class="description">
	<div class="ui list">
    	<div class="item">Apples</div>
    	<div class="item">Pears</div>
    	<div class="item">Oranges</div>
  	</div>
	My name is Dexter Rivera. I was born in the Philippines on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the <a href="https://www.utoronto.ca/" title="Click here to learn more about my school!">University of Toronto</a> to study Engineering.
  </div>
  ...
</div>
```

I will fill out the Birthday, Birth country, where I live, age and where I go to school in a list and delete our old paragraph:

```html
<div class="content">
  <a class="header">Dexter Rivera</a>
  <div class="meta">
	<span class="date">HTML and CSS Coder</span>
  </div>
  <div class="description">
	<div class="ui list">
    	<div class="item">Born in the Philippines</div>
		<div class="item">Birthday on December 20, 1997</div>
    	<div class="item">Lives in Markham, Ontario</div>
    	<div class="item">19 years old</div>
		<div class="item">Attends the University of Toronto</div>
  	</div>
  </div>
  ...
</div>
```

## Icons
We can also add little icons to parts of our website! Go to the [icons section](https://semantic-ui.com/elements/icon.html).

You will see a bunch of icons. If you want to add it to your website, hover over the icon and remember the icon name. For example, say we want to use the first icon "Add To Calendar". We then use `i` tags for icon like so:

```html
<i class="Add To Calendar icon"></i>
```

You must add the name of the icon to the `class` followed by the word `icon`. I will add icons to all the items on the list we made in the description:

```html
<div class="content">
  <a class="header">Dexter Rivera</a>
  <div class="meta">
	<span class="date">HTML and CSS Coder</span>
  </div>
  <div class="description">
	<div class="ui list">
    	<div class="item"><i class="Philippines flag"></i> Born in the Philippines</div>
		<div class="item"><i class="Birthday icon"></i> Birthday on December 20, 1997</div>
    	<div class="item"><i class="Home icon"></i> Lives in Markham, Ontario</div>
    	<div class="item"><i class="Calendar icon"></i> 19 years old</div>
		<div class="item"><i class="Graduation icon"></i> Attends the University of Toronto</div>
  	</div>
  </div>
  ...
</div>
```

Note we can also add country flags by putting the name of the country and the word flag for the class of the icon.

## Grid
Let's say we wanted to make our website look like this:

![](/screenshots/Lesson3/Grid.png)

How would we do that?

We can do this easily using grids in semantic ui! Go to the [grid section](https://semantic-ui.com/collections/grid.html) in semantic ui.

Grids let us divide up our website into columns. The more columns an element has, the more space it takes up. In semantic ui, a website has a total of 16 columns. In the picture above, the card takes up 4 columns and the sections take up 12. 12 + 4 = 16, which means we take up the whole width of the website.

If this is still confusing, we can make it easier with an example. First let's go back to `style.css` and change `margin-left` and `margin-top` inside `body` to 30px:

```css
body {
	..
	margin-left: 30px;
	margin-right: 30px;
}
```

Next we will go to `index.html` and add the following code:

```html
<h1>Dexter Rivera's Website</h1>

<div class="ui grid">
	<div class="four wide column">

	</div>
	<div class="twelve wide column">

	</div>
</div>

...
```

First add the html tags with the `ui grid` after your `h1` element. Since we only want the card on the left side of the page, lets put the code for the card inside the `<div class="four wide column"></div>` tags:

```html
<h1>Dexter Rivera's Website</h1>

<div class="ui grid">
	<div class="four wide column">
		<div class="ui card">
	        <div class="image">
	          <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif">
	        </div>
	        <div class="content">
	          <a class="header">Dexter Rivera</a>
	          <div class="meta">
	            <span class="date">HTML and CSS Coder</span>
	          </div>
	          <div class="description">
	            <div class="ui list">
	              <div class="item"><i class="Philippines flag"></i> Born in the Philippines</div>
	              <div class="item"><i class="Birthday icon"></i> Birthday on December 20, 1997</div>
	              <div class="item"><i class="Home icon"></i> Lives in Markham, Ontario</div>
	              <div class="item"><i class="Calendar icon"></i> 19 years old</div>
	              <div class="item"><i class="Graduation icon"></i> Attends the University of Toronto</div>
	            </div>
	          </div>
	        </div>
	        <div class="extra content">
	          <a>
	            <i class="user icon"></i>
	            22 Friends
	          </a>
	        </div>
	      </div>
	</div>
	<div class="twelve wide column">

	</div>
</div>

...
```

Then we will put the code for the rest of the sections inside the `<div class="twelve wide column"></div>` tag so it goes beside the card:

```html
<h1>Dexter Rivera's Website</h1>

<div class="ui grid">
	<div class="four wide column">
		<div class="ui card">
	        <div class="image">
	          <img src="https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif">
	        </div>
	        <div class="content">
	          <a class="header">Dexter Rivera</a>
	          <div class="meta">
	            <span class="date">HTML and CSS Coder</span>
	          </div>
	          <div class="description">
	            <div class="ui list">
	              <div class="item"><i class="Philippines flag"></i> Born in the Philippines</div>
	              <div class="item"><i class="Birthday icon"></i> Birthday on December 20, 1997</div>
	              <div class="item"><i class="Home icon"></i> Lives in Markham, Ontario</div>
	              <div class="item"><i class="Calendar icon"></i> 19 years old</div>
	              <div class="item"><i class="Graduation icon"></i> Attends the University of Toronto</div>
	            </div>
	          </div>
	        </div>
	        <div class="extra content">
	          <a>
	            <i class="user icon"></i>
	            22 Friends
	          </a>
	        </div>
	      </div>
	</div>
	<div class="twelve wide column">
		<div class="ui raised segments animated bounceInRight" id="introduction">
	        <div class="ui purple inverted segment">
	          <!-- h2 is similar to h1, but the text is smaller -->
	          <h2>Introduction</h2>
	        </div>

	        <div class="ui segment">
	          <!-- p tags are used for paragraphs -->
	          <p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
	        </div>
		</div>

	      <div class="ui raised segments animated bounceInRight" id="sports">
	        <div class="ui purple inverted segment">
	          <h2>My favourite sports</h2>
	        </div>
	        <div class="ui segment">
	          <p class="popup">Here are a list of my favourite sports: </p>
	          <ul class="popup"> <!-- for unordered lists (bullet points) -->
	            <li id="basketball">Basketball</li> <!-- each of the bullet points must be inside li tags -->
	            <li>Baseball</li>
	            <li>Tennis</li>
	            <li>Swimming</li>
	          </ul>
	        </div>
	      </div>

	      <div class="ui raised segments animated bounceInLeft" id="videogames">
	        <div class="ui inverted purple segment">
	          <h2 id="videogames">My top 5 favourite video games</h2>
	        </div>
	        <div class="ui segment">
	          <p class="popup">Here is a list of my favourite video games: </p>
	          <ol class="popup">
	            <li>Pokemon Emerald Version</li>
	            <li>NBA 2K17</li>
	            <li>MLB The Show</li>
	            <li>Star Wars Battlefront</li>
	            <li>Call of Duty: Black Ops </li>
	          </ol>
	        </div>
	      </div>
	</div>
</div>

...
```

Now the card will be right beside the three other sections. You can play around with the numbers in `four wide column` and `twelve wide column` to see what happens! Just remember that the numbers must add up to 16!

## Challenges
As you can see, adding stuff to your website from semantic ui is easy! All you need to do is find the element you want to add, click the `<>` button and copy and change the code! Now it's your turn to play around! Try and change up your website through semantic ui or try to complete some of these challenges!

If you can complete all of these challenge before coming to class next week, you will get a prize!

## Challenge 2
Add a photos section to your website that looks like this:

![](/screenshots/Lesson3/photos.png)

Hint: Go to the [image section](https://semantic-ui.com/elements/image.html) and look for "Groups".

Don't forget to add a Photos section to your navbar!

## Challenge 3
Add a movies section to talk about recent movies you have seen! It should look like this:

![](/screenshots/Lesson3/Movies.png)

Hint: Go to the [item section](https://semantic-ui.com/views/item.html). For the stars, look at the icons section.

Don't forget to add a Movies section to your navbar!

## Challenge 4
This one is tricky! Add a vertical menu on the right side of your website so you can share your website on social media! It should look like this:

![](/screenshots/Lesson3/VeritcalMenu.png)

Hint: First you need to change up your grid. You will need to add in another tag under the `<div class="ui grid"></div>` for the third column where the menu will go. Make sure that the three columns add up to 16!
Then go to the [menu section](https://semantic-ui.com/collections/menu.html) and look for labeled icon menu. You will need to put the icons for facebook, instagram and twitter!
