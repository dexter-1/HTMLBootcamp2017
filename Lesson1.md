# Lesson 1
**Date**: Saturday, July 8, 2017  
**Time**: 10:00 am - 12:00 pm  
**Location**: York Woods Public Library, 1785 Finch Ave W, North York, ON M3N 1M6  
**Instructor**: Dexter Rivera

**What you will learn in this lesson**
  * What is coding?
  * Why learn coding?
  * What is web development?

## What is coding?
**Coding**, also know as **computer programming**, is just writing a set of instructions, or commands, that a computer will follow so you can get it to do what you want to do.

For example, let's say that we want to tell our computer to create a website for us with the words _Hello World!_ in blue. How would we do this? We can't just type `Please create a web page with the words Hello World in blue"`. We need to give the computer instructions which we call **code**.

How do we write code? Computers only understand code written in a **language**. For example, if we wanted to create the website we talked about above, we would write:
```html
<h1 style="color: blue;">Hello World!</h1>
```
The resulting website would look like this:  

![](/screenshots/Lesson1/HelloWorld.png)

If the code above looks scary and complicated, don't panic! The `h1` in the code means to make the text _Hello World!_ really big. You can also see the words `color: blue`, which must have something to do with making the text look blue! If you still don't understand don't worry, we will get in more detail later!

The language the code is written in is **HTML** and **CSS**. These are the languages we will be learning throughout these 7 weeks in our bootcamp.

Coding is great because we can get computers to do things very quickly that us humans cannot. However, unlike us humans, computers can only understand code if we write it _exactly_ the way the language tells us to. For example, u cn stll undrstnd ths, even if it is not proper English. But if we tell the computer this:
```html
<h1 style="color: blue;">Hello World!<h1>
```
You will see nothing on the website because the last `/` was missing! Coding can be frustrating because of these small little things, but it's worth it cause we can do a lot of cool stuff like build cool looking websites or fun games!

## Why learn coding?
With coding we can learn to build cool things like games! For example, the game Angry Birds is written using HTML and CSS, the language you will be learning!

With coding we can also build big websites that other people around the world can use! For example, Mark Zuckerberg created Facebook, which 1 billion people use and now he is a billionaire!

For our final project, you will be building a social media website just like Facebook!

## What is Web Development?
In order to make cool website, we need to write code in HTML and CSS. But what is HTML and CSS?

Let's think of building a website like building a house! To build a house, we need to build the walls and roof. This is similar to HTML. HTML lets us put the text on the website. But just like a house without furniture, carpets or the walls painted, only HTML on a website looks boring. For example, this is how Facebook looks with only HTML:  

![](/screenshots/Lesson1/FacebookNoCSS.png)

It looks very boring and unrecognizable! This is where CSS comes in! CSS is similar to all the furniture and carpets that we add to our house to make it look pretty! With CSS, we can make the page we see above look like how you normally see Facebook when you login!

There is also a third important language to make cool websites called **Javascript**. This is similar to all the appliances like the stove, furnace, toilets, etc. Javascript helps our website do cool things. Unfortunately, we will not have time to learn Javascript, but I encourage you to learn it on your own time after our bootcamp is over because you will need it if you want to build cool games like Angry Birds!

## Let's Start Coding!
As I said in the previous section, HTML is the like the walls and roof of our house we are trying to build.  This lesson on HTML may seem a bit boring and pointless, but bare with me because we need to learn HTML to build cool websites!

So I want to start building my website, where do I get started? As we talked about in the previous section on coding, we need to give the commands to the computer. But where do we give those commands?

We write our code, or list of commands, in a file with the extension `.html`. Just like if you have ever worked with Microsoft Word, those file names have extensions `.doc`. We need to create a file with an extension `.html`.

To create our files, we will use a tool called [Thimble](https://thimble.mozilla.org/en-US). Once you click the link, press the "Start a project from scratch" button.

You should arrive at the following screen below:

![](/screenshots/Lesson1/Thimble.png)

As you can see on the screen above, there are three main sections. In the left most section you will see all of the files that belong to your project. Just like I mentioned earlier, there is a file with the extension `.html`, where the computer will read all of the instructions we give it in code so that it can put what we want on our website.

In the middle section you will see the editor. This is where we will write our code.

In the right most section, you will a preview of what the website looks like based on the code you write in the editor. You can see that all of the code in the editor right now will produce the website in the preview. If you click the rightmost button that looks like four arrows pointing outward, you can expand the preview to make it fit the whole webpage.

Now you are ready to write code and build cool websites! As you are reading through this lesson, type in the code you see here on Thimble so you can follow along.

## Tags
Now that we have a place to write our code, we can get started! First, let's delete all of the code currently in the editor so we can start from scratch.  

Like I said before, in order to write code, we need to write it exactly as the language tells us to. For HTML, if we want to put something on a web page, we need to create tags.

To create a tag, we need three things:
1. Opening Tag
2. Closing Tag
3. Element name

If we can remember these easy things, we can write HTML!

In order to create the opening tag, we need to put the element name inside these brackets `<>` like this:
```html
<ELEMENT>
```
To create a closing tag, we do the exact same thing as we did with the opening tag, expect this time we will add a `/` in front of the element name. like this:
```html
</ELEMENT>
```
Finally, the element will tell the computer what to do with what is inside the opening and closing tag. We will talk about elements more in the upcoming sections.

## Hello World!
As a time honored tradition of coding, every coder's first **program** is `Hello World!`. A **program** is just another name for a set of instructions.

In order to put _Hello World!_ on our website, we need to create a tag! In the editor in Thimble, write an opening tag followed by a closing tag, and for the element name, swap `ELEMENT` with `h1`. Your code should look like this:
```html
<h1></h1>
```
`h1` stands for "Header 1". This element will make any text inside the two tags nice and big on our website. So if we want the words "Hello World!" on our website, we need to write them inside the two `h1` tags, as shown below:
```html
<h1>Hello World!</h1>
```
As you can see on your preview screen, the words "Hello World!" will appear as such:

![](/screenshots/Lesson1/HelloWorld2.png)

Congrats, you just wrote your first program! 🎊🎉

## Elements
Throughout this bootcamp, we will be creating an About Me page. On this page you will display everything about you that you want your friends or family to see. We will publish this website and you will be able to send a link to anyone so anyone will be able to see your page, even if they are on the other side of the world!

To get started on our about me page, let's change "Hello World!" to your name so anyone who sees the website will know its yours. All we need to do is change the text inside the `h1` tags like so:
```html
<h1>Dexter Rivera's Website!</h1>
```
Remember that `h1` stands for "Header 1". Headers are used for titles to sections. There are 5 more header tags, `h2`, `h3`, `h4`, `h5`, and `h6`. They are the same as `h1` except the text inside these tags are slightly smaller. Try putting the text below in Thimble and see what it looks like!
```html
<h2>Dexter Rivera's Website!</h2>
<h3>Dexter Rivera's Website!</h3>
<h4>Dexter Rivera's Website!</h4>
<h5>Dexter Rivera's Website!</h5>
<h6>Dexter Rivera's Website!</h6>
```

### Paragraphs
Underneath the title of our website, let's add an introduction section where we can introduce a visitor to our website. I will add a title to the section using the `h2` tag, like so:
```html
<h2>Introduction</h2>
```
Put this code on line 2. Your page should now look like this:

![](/screenshots/Lesson1/Introduction.png)

Notice how the title "Introduction" appears on the line below "Hello World!". In HTML, the order in which the code appears is the order in which you see it on the website!

Let's now write a block of text. To do this, we need to create a tag with the element name `p`, for paragraph! Create your opening and closing tags, and write your paragraph of text introducing your website to a visitor inside the two `p` tags, like so:

```html
<p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>
```

### Exercise
Now it's time for you to practise coding on your own! In this exercise, create a new section with the title "Biography" and in that section write some text to explain to the reader the following:
 * When is your birthday?
 * Where were you born?
 * How old are you now?
 * What school do you go to?
 * What city do you live in?

When you are finished, you can go to the next section below to see the answer!

### Answer
To complete the exercise, add the following code:
```html
<h2>Biography</h2>
<p>My name is Dexter Rivera. I was born in the Philippines on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the University of Toronto to study Engineering. </p>
```
Since we want this section to be underneath the "Introduction" section, the code above must be placed underneath the code we wrote before. We use `h2` tags for the word Biography because we want it to have stand out as this is the title of the section. Finally, we use `p` tags for our biography paragraph!

### Comments
Comments are useful in coding to help someone reading your code know what it is doing. To create a comment, we simply put `<!--` before the comment and `-->` after the comment. Anything in between `<!--` and `-->` will not be seen on the website.

I have commented the code we wrote so far as such:
```html
<!-- This is a h1 tag. h1 is used to make really large texts for titles -->
<h1>Dexter Rivera's Website</h1>

<!-- h2 is similar to h1, but the text is smaller -->
<h2>Introduction</h2>

<!-- p tags are used for paragraphs -->
<p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>

<h2>Biography</h2>
<p>My name is Dexter Rivera. I was born in the Philippines on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the University of Toronto to study Engineering. </p>
```
If you put these comments into the editor on Thimble, you will not see the words inside the comments on the website!

I will comment the code we write a lot to help you understand it when you are looking back at it.

### Bold and Italics
In order to make some text bold to stand out, we use the `strong` element. Let's say we wanted to make my place of birth stand out in the paragraph. I would just need to put the `strong` tags around the word Philippines so bold gets applied to the word!
```html
<!-- This is a h1 tag. h1 is used to make really large texts for titles -->
<h1>Dexter Rivera's Website</h1>

<!-- h2 is similar to h1, but the text is smaller -->
<h2>Introduction</h2>

<!-- p tags are used for paragraphs -->
<p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>

<h2>Biography</h2>
<!-- strong tag is used for bold -->
<p>My name is Dexter Rivera. I was born in the <strong>Philippines</strong> on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the University of Toronto to study Engineering. </p>
```
Notice how the `strong` tags are inside the `p` tags. This is because I want the word 'Philippines' to be in the paragraph, but I also want it to be bold. Since the word 'Philippines' is inside both `p` and `strong`, both elements apply to it!

Now let's say I want my name to be italicized, like this: _Dexter Rivera_. To do this, we do the same thing as we did with the `strong` tags, but this time we use the element name `em` instead:
```html
<!-- This is a h1 tag. h1 is used to make really large texts for titles -->
<h1>Dexter Rivera's Website</h1>

<!-- h2 is similar to h1, but the text is smaller -->
<h2>Introduction</h2>

<!-- p tags are used for paragraphs -->
<p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>

<h2>Biography</h2>
<!-- strong tag is used for bold, em for italics-->
<p>My name is <em>Dexter Rivera</em>. I was born in the <strong>Philippines</strong> on December 20, 1997. I live in Markham, Ontario now. I am 19 years old. I currently go to school at the University of Toronto to study Engineering. </p>
```

### Exercise
In your biography paragraph, bold the following key information it stands out to the reader:
  * Place of birth
  * Birthday
  * City you live in
  * Age
  * school

### Solution
Your code should look something like this:
```html
<!-- This is a h1 tag. h1 is used to make really large texts for titles -->
<h1>Dexter Rivera's Website</h1>

<!-- h2 is similar to h1, but the text is smaller -->
<h2>Introduction</h2>

<!-- p tags are used for paragraphs -->
<p>Hello Internet! On this website you can learn all about me! Have fun exploring!</p>

<h2>Biography</h2>
<!-- strong tag is used for bold, em for italics-->
<p>My name is <em>Dexter Rivera</em>. I was born in the <strong>Philippines</strong> on <strong>December 20, 1997</strong>. I live in <strong>Markham, Ontario</strong> now. I am <strong>19</strong> years old. I currently go to school at the <strong>University of Toronto</strong> to study Engineering. </p>
```
