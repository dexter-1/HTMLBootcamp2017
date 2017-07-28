# Lesson 3
**Date**: Saturday, July 29, 2017  
**Time**: 10:00 am - 12:00 pm  
**Location**: York Woods Public Library, 1785 Finch Ave W, North York, ON M3N 1M6  
**Instructor**: Dexter Rivera

### What you will learn in this lesson
  * [Challenge 1](#challenges)
  * [Challenge 2](#challenge-2)
   * [Hint 1](#hint-1)
   * [Hint 2](#hint-2)
   * [Hint 3](#hint-3)
  * [Challenge 3](#challenge-3)

## Challenges
This week I will leave you with some challenges to make sure you remember all that you learned in these first three weeks! These challenges will also help you make your website look better! If you haven't done the challenges 2-4 from the previous week, do them [here](https://github.com/projectinclude-dexterrivera/HTMLBootcamp2017/blob/Lesson3/Lesson3.md#challenges) first!

## Challenge 1
Move the photos section that you created in [last week's challenge 2](https://github.com/projectinclude-dexterrivera/HTMLBootcamp2017/blob/Lesson3/Lesson3.md#challenge-2) to the left side of your website, like this:

![](/screenshots/Lesson4/PhotosOnTheLeft.png)

## Challenge 2
Instead of having an image for the background, make a banner for the top of your website and then a different background for the rest of your website like this:

![](/screenshots/Lesson4/Banner.png)

This is a difficult challenge and requires a lot of code changes, so I will give hints below! Try this challenge without looking at the hints first!

### Hint 1
With the banner, there are two parts of the website. This is why we will create two `<div>` tags, one for the banner and one for the rest of the website:

```html
<body>
	<div class="banner"></div>
	<div class="website">
		... Put all code for your website so far in here ...
	</div>
</body>
```

`<div class="website"> ... </div>` Will contain all the code for your website and `<div class="banner"></div>` will only contain code for the banner.

### Hint 2
Next we need to start writing some CSS. First we need to take the following code from `body`:

```css
body {
	...
	padding-left: 10%;
	padding-right: 10%;
	padding-top: 20px;
}
```

and move it to `.website`:

```css
.website {
	padding-left: 10%;
	padding-right: 10%;
	padding-top: 20px;
}
```

This is because we want spacing on the sides only for the rest of the website, not the banner. Also, add the following code to your styling for the `banner`:
```css
.banner {
	margin-top: 50px;
}
```

This is so that the photo you pick for the banner does not fall behind the navigation bar.

### Hint 3
Now start styling. For `.banner` you need to set the height of the banner and the background image in CSS. Pro-tip: When you search for pictures on Google, look for banner photos! For example, for the picture I chose in my website, I searched up "Toronto Raptors banner picture". This is because banners are wide and short so they will fit nicely in the banner you create.

For `.website`, change the background color or background image to something different than your banner!

## Challenge 3
Take the title of your website and the text from the introduction and put it inside the banner. Then remove your introduction section. Your website should look like this:

![](/screenshots/Lesson4/bannerText.png)

You will need to know your margins and padding to make sure the text gets placed well inside the banner!
