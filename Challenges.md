## Challenges
This note contains all of the previous challenges before this week. Please complete these first before moving on to this week's Lesson! If you need any help, ask me or post an issue on [github](https://github.com/projectinclude-dexterrivera/HTMLBootcamp2017/issues).

### Challenges
  * [Challenge 1](#challenge-1)
  * [Challenge 2](#challenge-2)
  * [Challenge 3](#challenge-3)
  * [Challenge 4](#challenge-4)
  * [Challenge 5](#challenge-5)
    * [Hint 1](#hint-1)
    * [Hint 2](#hint-2)
    * [Hint 3](#hint-3)
  * [Challenge 6](#challenge-6)
  * [Challenge 7](#challenge-7)
  * [Challenge 8](#challenge-8)
  * [Challenge 9](#challenge-9)
  * [Challenge 10](#challenge-10)
  * [Challenge 11](#challenge-11)
  * [Challenge 12](#challenge-12)
  * [Challenge 13](#challenge-13)

## Challenge 1
Add a photos section to your website that looks like this:

![](/screenshots/Lesson3/photos.png)

Hint: Go to the [image section](https://semantic-ui.com/elements/image.html) and look for "Groups".

Don't forget to add a Photos section to your navbar!

## Challenge 2
Add a movies section to talk about recent movies you have seen! It should look like this:

![](/screenshots/Lesson3/Movies.png)

Hint: Go to the [item section](https://semantic-ui.com/views/item.html). For the stars, look at the icons section.

Don't forget to add a Movies section to your navbar!

## Challenge 3
This one is tricky! Add a vertical menu on the right side of your website so you can share your website on social media! It should look like this:

![](/screenshots/Lesson3/VeritcalMenu.png)

Hint: First you need to change up your grid. You will need to add in another tag under the `<div class="ui grid"></div>` for the third column where the menu will go. Make sure that the three columns add up to 16!
Then go to the [menu section](https://semantic-ui.com/collections/menu.html) and look for labeled icon menu. You will need to put the icons for facebook, instagram and twitter!


## Challenge 4
Move the photos section that you created in [last week's challenge 2](https://github.com/projectinclude-dexterrivera/HTMLBootcamp2017/blob/Lesson3/Lesson3.md#challenge-2) to the left side of your website, like this:

![](/screenshots/Lesson4/PhotosOnTheLeft.png)

## Challenge 5
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

## Challenge 6
Take the title of your website and the text from the introduction and put it inside the banner. Then remove your introduction section. Your website should look like this:

![](/screenshots/Lesson4/bannerText.png)

You will need to know your margins and padding to make sure the text gets placed well inside the banner!

## Challenge 7
Implement a like and love button as shown in the picture below:

![](/screenshots/Lesson5/likebutton.png)

Hint: [Buttons](https://semantic-ui.com/elements/button.html)

Also, on your card, put a list of the number of likes and loves that your website got. Next week if we have time we will try to make the buttons work so that when you press them the number of likes goes up.

## Challenge 8
For every section title, put the appropriate icon right beside the name of the title, like this:

![](/screenshots/Lesson5/icons.png)

Hint: [Icons](https://semantic-ui.com/elements/icon.html)

## Challenge 9
Create a friends sections on the right column of your website, like so:

![](/screenshots/Lesson5/friends.png)

By now if you have done the other challenges, your website should be split into three columns. If you have the vertical menu of social media buttons, delete that we will move it somewhere else.

You must find at least 3 friends in the class and put their names in your friends section! When someone clicks their name, it should go to their website! So don't forget to ask for a link to their website!

Also, don't forget to add this section to your navigation bar and link to it!

## Challenge 10
For challenge 4 we will put a YouTube video on our website. First, go on youtube and find a video that you want to put on your website. Copy the link. My video's link looks like this:

```
https://www.youtube.com/watch?v=Y1BlT4_c_SU
```

Next we will copy the letters and numbers after `v=`. For example, I would copy `Y1BlT4_c_SU`.

Then we just change the link to `https://www.youtube.com/embed/` + what you copied above. For example, my new link would be this:

```
https://www.youtube.com/embed/Y1BlT4_c_SU
```

Finally, we will use a new tag called `iframe` and set the `src` attribute to the link above:

```html
<iframe src="https://www.youtube.com/embed/Y1BlT4_c_SU"></iframe>
```

Now we can put this link wherever we want the video to be on our website! We can also set the height and width of the video like this:

```html
<iframe src="https://www.youtube.com/embed/Y1BlT4_c_SU" height="350px" width="350px"></iframe>
```

## Challenge 11
Add a "Check-In" section on your website. This section will show all of the cool places you have recently been to, like so:

![](/screenshots/Lesson5/checkin.png)

In this section you should show the name of the place, the address beside the red marker icon and a description of what you did there. You should also show a picture of the place too.

Hint: [Item](https://semantic-ui.com/views/item.html)

## Challenge 12
Let's add a Google Map so that if people want to visit the places that we have been to, they can easily look at a map!

First thing we need to do is go to https://github.com/projectinclude-dexterrivera/HTMLBootcamp2017/tree/Lesson5 and click on the file called `script.js`. Copy and paste all of the code you see there.

Then go to Thimble and click the green button beside the word "Files" and click "Add Javascript File". Then click on the file `script.js` and delete all the code you see there and paste in the code you copied from github.

You should now have three files where one of the files is the new `script.js` you copied from github. It should look like this:

![](/screenshots/Lesson5/threefiles.png)

Next go back to `index.html` and inside the `<head></head>` tags insert the following two tags:

```html
<script src="script.js"></script>
<script async defer
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwhwzuYqcXRjqamI5AdLCsl9x77TkLVpE&callback=initMap"></script>
```

It should look like this:

```html
<head>
	...
	<script src="script.js"></script>
	<script async defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwhwzuYqcXRjqamI5AdLCsl9x77TkLVpE&callback=initMap"></script>
</head>
```

This connects the code we have in `script.js` to the html file. We are now ready to put the map on the website!

The first thing we need to do is find the coordinates of the place you put in the check in section. Go to [Google Maps](https://www.google.ca/maps) and search up the place you put in the Check In Section. Once the red marker appears over the place, put your mouse over the marker and right click and select "What's here?", like so:

![](/screenshots/Lesson5/GoogleMaps.png)

You should see the following box appear:

![](/screenshots/Lesson5/latandlong.png)

Copy the two numbers at the bottom of the box. Those represent the latitude and longitude of the place you picked. Don't worry if you do not know what latitude and longitude means.

Now go into `script.js` and change the value of `lat` and `long` in line 3 of the code to the two numbers in the box above. This sets the red marker on the map when we put the map on our website.

Finally, we can put the map on our website by putting in

```html
<div id="map"></div>
```

anywhere on our website. Place the map right below the text you made in the check in section, like so:

![](/screenshots/Lesson5/map.png)

You can see that since I picked the Rogers Centre for the place I checked In, the red marker is pointing over the Rogers Centre on Google Map.

We can also change the size of the map in CSS like so:

```css
#map {

}
```

in the `style.css` file. Now you have a Google Map on your website!

## Challenge 13
This last challenge will be tricky. For the final challenge, add a footer to the bottom of your page like so:

![](/screenshots/Lesson5/footer.png)

Footers are commonly found a lot in websites. Adding this footer is very similar to the banner that you did in the previous challenge!

Also, add the social media buttons to the footer. You can find the social media buttons on Semantic-UI [here](https://semantic-ui.com/elements/button.html#circular).


Also, don't forget to add this section to your navigation bar and link to it!
