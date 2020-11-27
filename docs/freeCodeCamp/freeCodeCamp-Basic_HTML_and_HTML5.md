---
id: freeCodeCamp-Basic_HTML_and_HTML5
title: Basic HTML and HTML5
---



## Introduction to Basic HTML and HTML5

[Basic HTML and HTML5 | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)

HTML, or HyperText Markup Language, is a markup language used to describe the structure of a web page. It uses a special syntax or notation to organize and give information about the page to the browser. Elements usually have opening and closing tags that surround and give meaning to content. For example, there are different tag options to place around text to show whether it is a heading, a paragraph, or a list.
For example :

```html
<h1>Top level heading: Maybe a page title</h1>

<p>A paragraph of text. Some information we would like to communicate to the viewer. This can be as long or short as we would like.</p>

<ol>
  <li>Number one on the list</li>
  <li>Number two</li>
  <li>A third item</li>
</ol>
```

Becomes :

> # Top level heading: Maybe a page title
>
> A paragraph of text. Some information we would like to communicate to the user. This can be as long or short as we would like.
>
> 1. Number one on the list
> 2. Number two
> 3. A third item

------

The HyperText part of HTML comes from the early days of the web and its original use case. Pages usually contained static documents that contained references to other documents. These references contained hypertext links used by the browser to navigate to the reference document so the user could read the reference document without having to manually search for it.

As web pages and web applications grow more complex, the W3 Consortium updates the HTML specification to ensure that a webpage can be shown reliably on any browser. The latest version of HTML is HTML5.

This section introduces how to use HTML elements to give structure and meaning to your web content.

-----



## 1. Say Hello to HTML Elements

[Learn Basic HTML and HTML5: Say Hello to HTML Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements)

Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.
First, you'll start by building a simple web page using HTML. You can edit code in your code editor, which is embedded into this web page.
Do you see the code in your code editor that says `<h1>Hello</h1>`? That's an HTML element.
Most HTML elements have an opening tag and a closing tag.
Opening tags look like this :

`<h1>`

Closing tags look like this :

`</h1>`

The only difference between opening and closing tags is the forward slash after the opening bracket of a closing tag.

------

To pass the test on this challenge, change your `h1` element's text to say "Hello World".

> Your `h1` element should have the text "Hello World".

```html
<h1>Hello</h1>
```

```html
<h1>Hello World</h1>
```

> Hello World

-----



## 2. Headline with the h2 Element

[Learn Basic HTML and HTML5: Headline with the h2 Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element)

Over the next few lessons, we'll build an HTML5 cat photo web app piece-by-piece.
The `h2` element you will be adding in this step will add a level two heading to the web page.
This element tells the browser about the structure of your website. `h1` elements are often used for main headings, while `h2` elements are generally used for subheadings. There are also `h3`, `h4`, `h5` and `h6` elements to indicate different levels of subheadings.

------

Add an `h2` tag that says "CatPhotoApp" to create a second HTML element below your "Hello World" `h1` element.

> You should create an `h2` element.
> Your `h2` element should have a closing tag.
> Your `h2` element should have the text "CatPhotoApp".
> Your `h1` element should have the text "Hello World".

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

> # Hello World
>
> ## CatPhotoApp

-----



## 3. Inform with the Paragraph Element

[Learn Basic HTML and HTML5: Inform with the Paragraph Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element)

`p` elements are the preferred element for paragraph text on websites. `p` is short for "paragraph".
You can create a paragraph element like this :

`<p>I'm a p tag!</p>`

------

Create a `p` element below your `h2` element, and give it the text "Hello Paragraph".

**Note:** As a convention, all HTML tags are written in lowercase, for example `<p></p>` and not `<P></P>`.

> Your code should have a valid `p` element.
> Your `p` element should have the text "Hello Paragraph".
> Your `p` element should have a closing tag.

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

> # Hello World
>
> ## CatPhotoApp
>
> Hello Paragraph

-----



## 4. Fill in the Blank with Placeholder Text

[Learn Basic HTML and HTML5: Fill in the Blank with Placeholder Text | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/fill-in-the-blank-with-placeholder-text)

Web developers traditionally use lorem ipsum text as placeholder text. The lorem ipsum text is randomly scraped from a famous passage by Cicero of Ancient Rome.
Lorem ipsum text has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.
Well, 5 centuries is long enough. Since we're building a CatPhotoApp, let's use something called "kitty ipsum text".

------

Replace the text inside your `p` element with the first few words of this kitty ipsum text: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.

> Your `p` element should contain the first few words of the provided `kitty ipsum text`.

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

> # Hello World
>
> ## CatPhotoApp
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.

-----



## 5. Uncomment HTML

[Learn Basic HTML and HTML5: Uncomment HTML | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/uncomment-html)

Commenting is a way that you can leave comments for other developers within your code without affecting the resulting output that is displayed to the end user.
Commenting is also a convenient way to make code inactive without having to delete it entirely.
Comments in HTML start with `<!--` and end with a `-->`

------

Uncomment your `h1`, `h2` and `p` elements.

> Your `h1` element should be visible on the page by uncommenting it.
> Your `h2` element should be visible on the page by uncommenting it.
> Your `p` element should be visible on the page by uncommenting it.
> No trailing comment tags should be visible on the page (i.e. `-->`).

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

-----



## 6. Comment out HTML

[Learn Basic HTML and HTML5: Comment out HTML | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/comment-out-html)

Remember that in order to start a comment, you need to use `<!--` and to end a comment, you need to use `-->`
Here you'll need to end the comment before your `h2` element begins.

------

Comment out your `h1` element and your `p` element, but not your `h2` element.

> Your `h1` element should be commented out so that it is not visible on the page.
> Your `h2` element should not be commented out so that it is visible on the page.
> Your `p` element should be commented out so that it is not visible on the page.
> Each of your comments should be closed with `-->`.
> You should not change the order of the `h1`, `h2` or `p` in the code.

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

```html
<!--
<h1>Hello World</h1>
-->
<h2>CatPhotoApp</h2>
<!--
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

> ## CatPhotoApp

-----



## 7. Delete HTML Elements

[Learn Basic HTML and HTML5: Delete HTML Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/delete-html-elements)

Our phone doesn't have much vertical space.
Let's remove the unnecessary elements so we can start building our CatPhotoApp.

------

Delete your `h1` element so we can simplify our view.

> Your `h1` element should be deleted.
> Your `h2` element should be on the page.
> Your `p` element should be on the page.

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

> ## CatPhotoApp
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.

-----



## 8. Introduction to HTML5 Elements

[Learn Basic HTML and HTML5: Introduction to HTML5 Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/introduction-to-html5-elements)

HTML5 introduces more descriptive HTML tags. These include `main`, `header`, `footer`, `nav`, `video`, `article`, `section` and others.
These tags give a descriptive structure to your HTML, make your HTML easier to read, and help with Search Engine Optimization (SEO) and accessibility. The `main` HTML5 tag helps search engines and other developers find the main content of your page.
Example usage, a `main` element with two child elements nested inside it :

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Note:** Many of the new HTML5 tags and their benefits are covered in the Applied Accessibility section.

------

Create a second `p` element after the existing `p` element with the following kitty ipsum text: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`
Then, create a `main` element and nest the two `p` elements inside the `main` element.

> You should have 2 `p` elements with Kitty Ipsum text.
> Each of your `p` elements should have a closing tag.
> Your `p` element should contain the first few words of the provided additional `kitty ipsum text`.
> Your code should have one `main` element.
> The `main` element should have two paragraph elements as children.
> The opening `main` tag should come before the first paragraph tag.
> The closing `main` tag should come after the second closing paragraph tag.

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

```html
<h2>CatPhotoApp</h2>
<main>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed   everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 9. Add Images to Your Website

[Learn Basic HTML and HTML5: Add Images to Your Website | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-images-to-your-website)

You can add images to your website by using the `img` element, and point to a specific image's URL using the `src` attribute.
An example of this would be :

`<img src="https://www.your-image-source.com/your-image.jpg">`

Note that `img` elements are self-closing.
All `img` elements **must** have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

**Note:** If the image is purely decorative, using an empty `alt` attribute is a best practice.

Ideally the `alt` attribute should not contain special characters unless needed.
Let's add an `alt` attribute to our `img` example above :

`<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">`

------

Let's try to add an image to our website :
Within the existing `main` element, insert an `img` element before the existing `p` elements.
Now set the `src` attribute so that it points to this url :

`https://bit.ly/fcc-relaxing-cat`

Finally, don't forget to give your `img` element an `alt`  attribute with applicable text.

> Your page should have an image element.
> Your image should have a `src` attribute that points to the kitten image.
> Your image element's `alt` attribute should not be empty.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
<img src="https://bit.ly/fcc-relaxing-cat" alt="Relaxing cat">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> ![Relaxing cat](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 10. Link to External Pages with Anchor Elements

[Learn Basic HTML and HTML5: Link to External Pages with Anchor Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements)

You can use `a` (*anchor*) elements to link to content outside of your web page.
`a` elements need a destination web address called an `href` attribute. They also need anchor text. Here's an example :

`<a href="https://freecodecamp.org">this links to freecodecamp.org</a>`

Then your browser will display the text **"this links to freecodecamp.org"** as a link you can click. And that link will take you to the web address **https://www.freecodecamp.org**.

------

Create an `a` element that links to `https://freecatphotoapp.com` and has "cat photos" as its anchor text.

> Your `a` element should have the anchor text of "cat photos".
> You need an `a` element that links to `https://freecatphotoapp.com`
> Your `a` element should have a closing tag.

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="https://freecatphotoapp.com">cat photos</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> [cat photos](https://freecatphotoapp.com)![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 11. Link to Internal Sections of a Page with Anchor Elements

[Learn Basic HTML and HTML5: Link to Internal Sections of a Page with Anchor Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements)

`a` (*anchor*) elements can also be used to create internal links to jump to different sections within a webpage.
To create an internal link, you assign a link's `href` attribute to a hash symbol `#` plus the value of the `id` attribute for the element that you want to internally link to, usually further down the page. You then need to add the same `id` attribute to the element you are linking to. An `id` is an attribute that uniquely describes an element.
Below is an example of an internal anchor link and its target element :

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

When users click the Contacts link, they'll be taken to the section of the webpage with the **Contacts** header element.

------

Change your external link to an internal link by changing the `href` attribute to "#footer" and the text from "cat photos" to "Jump to Bottom".
Remove the `target="_blank"` attribute from the anchor tag since this causes the linked document to open in a new window tab.
Then add an `id` attribute with a value of "footer" to the `<footer>` element at the bottom of the page.

> There should be only one anchor tag on your page.
> There should be only one `footer` tag on your page.
> The `a` tag should have an `href` attribute set to "#footer".
> The `a` tag should not have a `target` attribute.
> The `a` text should be "Jump to Bottom".
> The `footer` tag should have an `id` attribute set to "footer".

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
</main>
<footer>Copyright Cat Photo App</footer>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#footer">Jump to Bottom</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
</main>
<footer id="footer">Copyright Cat Photo App</footer>
```

> ## CatPhotoApp
>
> [Jump to Bottom](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements#footer)![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched  sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur  catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed  everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching  attack your ankles chase the red dot, hairball run catnip eat the grass  sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
>
> Meowwww loved it, hated it, loved it, hated it yet spill litter  box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy  mouse squeak roll over. With tail in the air lounge in doorway. Man  running from cops stops to pet cats, goes to jail.
>
> Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red  dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no  reason. Meow to be let out play time intently sniff hand run outside as  soon as door open yet destroy couch.
>
> Copyright Cat Photo App

-----



## 12. Nest an Anchor Element within a Paragraph

[Learn Basic HTML and HTML5: Nest an Anchor Element within a Paragraph | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-an-anchor-element-within-a-paragraph)

You can nest links within other text elements.

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

Let's break down the example: Normal text is wrapped in the `p` element :
 `<p> Here's a ... for you to follow. </p>`.
Next is the *anchor* element `<a>` (which requires a closing tag `</a>`) :
  `<a> ... </a>`.
`target` is an anchor tag attribute that specifies where to open the link and the value `"_blank"` specifies to open the link in a new tab `href` is an anchor tag attribute that contains the URL address of the link :
`<a href="http://freecodecamp.org"> ... </a>`.
The text, **"link to freecodecamp.org"**, within the `a` element called `anchor text`, will display a link to click :
`<a href=" ... ">link to freecodecamp.org</a>`.
The final output of the example will look like this :
Here's a [ link to freecodecamp.org](http://freecodecamp.org) for you to follow.

------

Now nest the existing `a` element within a new `p` element (just after the existing `main` element). The new paragraph should have text that says "View more cat photos", where "cat photos" is a link, and the rest of the text is plain text.

> You should have an `a` element that links to "https://freecatphotoapp.com".
> Your `a` element should have the anchor text of "cat photos"
> You should create a new `p` element around your `a` element. There should be at least 3 total `p` tags in your HTML code.
> Your `a` element should be nested within your new `p` element.
> Your `p` element should have the text "View more " (with a space after it).
> Your `a` element should *not* have the text "View more".
> Each of your `p` elements should have a closing tag.
> Each of your `a` elements should have a closing tag.

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a></p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> View more [cat photos](https://freecatphotoapp.com)
>
> ![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 13. Make Dead Links Using the Hash Symbol

[Learn Basic HTML and HTML5: Make Dead Links Using the Hash Symbol | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/make-dead-links-using-the-hash-symbol)

Sometimes you want to add `a` elements to your website before you know where they will link.
This is also handy when you're changing the behavior of a link using `JavaScript`, which we'll learn about later.

------

The current value of the `href` attribute is a link that points to "https://freecatphotoapp.com". Replace the `href` attribute value with a `#`, also known as a hash symbol, to create a dead link.
For example : `href="#"`

> Your `a` element should be a dead link with the value of the `href` attribute set to "#".

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/make-dead-links-using-the-hash-symbol#).
>
> ![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 14. Turn an Image into a Link

[Learn Basic HTML and HTML5: Turn an Image into a Link | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link)

You can make elements into links by nesting them within an `a` element.
Nest your image within an `a` element. Here's an example :

`<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>`

Remember to use `#` as your `a` element's `href` property in order to turn it into a dead link.

------

Place the existing image element within an `a` (*anchor*) element.
Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link.

> The existing `img` element should be nested within an `a` element.
> Your `a` element should be a dead link with a `href` attribute set to `#`.
> Each of your `a` elements should have a closing tag.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link#).
>
> [![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link#)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

------



## 15. Create a Bulleted Unordered List

[Learn Basic HTML and HTML5: Create a Bulleted Unordered List | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list)

HTML has a special element for creating unordered lists, or bullet point style lists.
Unordered lists start with an opening `<ul>` element, followed by any number of `<li>` elements. Finally, unordered lists close with a `</ul>`
For example :

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

would create a bullet point style list of "milk" and "cheese".

------

Remove the last two `p` elements and create an unordered list of three things that cats love at the bottom of the page.

> Create a `ul` element.
> You should have three `li` elements within your `ul` element.
> Your `ul` element should have a closing tag.
> Your `li` elements should have closing tags.
> Your `li` elements should not contain an empty string or only white-space.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <ul>
    <li>Sleep</li>
    <li>Hunt</li>
    <li>Claw and scratch</li>
  </ul>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list#).
>
> [![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list#)
>
> - Sleep
> - Hunt
> - Claw and scratch

-----



## 16. Create an Ordered List

[Learn Basic HTML and HTML5: Create an Ordered List | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list)

HTML has another special element for creating ordered lists, or numbered lists.
Ordered lists start with an opening `<ol>` element, followed by any number of `<li>` elements. Finally, ordered lists are closed with the `</ol>` tag.
For example :

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

would create a numbered list of "Garfield" and "Sylvester".

------

Create an ordered list of the top 3 things cats hate the most.

> You should have an ordered list for "Top 3 things cats hate:"
> You should have an unordered list for "Things cats love:"
> You should have only one `ul` element.
> You should have only one `ol` element.
> You should have three `li` elements within your `ul` element.
> You should have three `li` elements within your `ol` element.
> Your `ul` element should have a closing tag.
> Your `ol` element should have a closing tag.
> Your `li` element should have a closing tag.
> The `li` elements in your unordered list should not be empty.
> The `li` elements in your ordered list should not be empty.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>Car rides</li>
    <li>Baths</li>
    <li>Tummy rubs</li>
  </ol>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list#).
>
> [![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list#)
>
> Things cats love:
>
> - cat nip
> - laser pointers
> - lasagna
>
> Top 3 things cats hate:
>
> 1. Car rides
> 2. Baths
> 3. Tummy rubs

------



## 17. Create a Text Field

[Learn Basic HTML and HTML5: Create a Text Field | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-text-field)

Now let's create a web form.
`input` elements are a convenient way to get input from your user.
You can create a text input like this :

`<input type="text">`

Note that `input` elements are self-closing.

------

Create an `input` element of type `text` below your lists.

> Your app should have an `input` element of type `text`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
<input type="text">
</main>
```

-----



## 18. Add Placeholder Text to a Text Field

[Learn Basic HTML and HTML5: Add Placeholder Text to a Text Field | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-placeholder-text-to-a-text-field)

Placeholder text is what is displayed in your `input` element before your user has inputted anything.
You can create placeholder text like so:

`<input type="text" placeholder="this is placeholder text">`

**Note :** Remember that `input` elements are self-closing.

------

Set the `placeholder` value of your text `input` to "cat photo URL".

> You should add a `placeholder` attribute to the existing text `input` element.
> You should set the value of your placeholder attribute to "cat photo URL".
> The finished `input` element should not have a closing tag.
> The finished `input` element should have valid syntax.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>
```

-----



## 19. Create a Form Element

[Learn Basic HTML and HTML5: Create a Form Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-form-element)

You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your `form` element.
For example :

`<form action="/url-where-you-want-to-submit-form-data"></form>`

------

Nest your text field inside a `form` element, and add the `action="https://freecatphotoapp.com/submit-cat-photo"` attribute to the form element.

> Your text input element should be nested within a `form` element.
> Your `form` should have an `action` attribute which is set to `https://freecatphotoapp.com/submit-cat-photo`.
> Your `form` element should have well-formed open and close tags.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
  <input type="text" placeholder="cat photo URL">
  </form>
</main>
```

-----



## 20. Add a Submit Button to a Form

[Learn Basic HTML and HTML5: Add a Submit Button to a Form | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-a-submit-button-to-a-form)

Let's add a `submit` button to your form. Clicking this button will send the data from your form to the URL you specified with your form's `action` attribute.
Here's an example submit button :

`<button type="submit">this button submits the form</button>`

------

Add a button as the last element of your `form` element with a type of `submit`, and "Submit" as its text.

> Your form should have a button inside it.
> Your submit button should have the attribute `type` set to `submit`.
> Your submit button should only have the text "Submit".
> Your `button` element should have a closing tag.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 21. Use HTML5 to Require a Field

[Learn Basic HTML and HTML5: Use HTML5 to Require a Field | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-html5-to-require-a-field)

You can require specific form fields so that your user will not be able to submit your form until he or she has filled them out.
For example, if you wanted to make a text input field required, you can just add the attribute `required` within your `input` element, like this : `<input type="text" required>`.

------

Make your text `input` a `required` field, so that your user can't submit the form without completing this field.
Then try to submit the form without inputting any text. See how your HTML5 form notifies you that the field is required ?

> Your text `input` element should have the `required` attribute.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```

------



## 22. Create a Set of Radio Buttons

[Learn Basic HTML and HTML5: Create a Set of Radio Buttons | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons)

You can use radio buttons for questions where you want the user to only give you one answer out of multiple options.
Radio buttons are a type of `input`.
Each of your radio buttons can be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the radio button input with the label element surrounding it.
All related radio buttons should have the same `name` attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.
Here's an example of a radio button :

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

It is considered best practice to set a `for` attribute on the `label` element, with a value that matches the value of the `id` attribute of the `input` element. This allows assistive technologies to create a linked relationship between the label and the child `input` element. For example :

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

------

Add a pair of radio buttons to your form, each nested in its own `label` element. One should have the option of `indoor` and the other should have the option of `outdoor`. Both should share the `name` attribute of `indoor-outdoor` to create a radio group.

> Your page should have two radio button elements.
> Your radio buttons should be given the `name` attribute of `indoor-outdoor`.
> Each of your two radio button elements should be nested in its own `label` element.
> Each of your `label` elements should have a closing tag.
> One of your radio buttons should have the label `indoor`.
> One of your radio buttons should have the label `outdoor`.
> Each of your radio button elements should be added within the `form` tag.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 23. Create a Set of Checkboxes

[Learn Basic HTML and HTML5: Create a Set of Checkboxes | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes)

Forms commonly use checkboxes for questions that may have more than one answer.
Checkboxes are a type of `input`.
Each of your checkboxes can be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the checkbox input with the label element surrounding it.
All related checkbox inputs should have the same `name` attribute.
It is considered best practice to explicitly define the relationship between a checkbox `input` and its corresponding `label` by setting the `for` attribute on the `label` element to match the `id` attribute of the associated `input` element.
Here's an example of a checkbox :

`<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>`

------

Add to your form a set of three checkboxes. Each checkbox should be nested within its own `label` element. All three should share the `name` attribute of `personality`.

> Your page should have three checkbox elements.
> Each of your three checkbox elements should be nested in its own `label` element.
> Make sure each of your `label` elements has a closing tag.
> Your checkboxes should be given the `name` attribute of `personality`.
> Each of your checkboxes should be added within the `form` tag.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 24. Use the value attribute with Radio Buttons and Checkboxes

[Learn Basic HTML and HTML5: Use the value attribute with Radio Buttons and Checkboxes | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-the-value-attribute-with-radio-buttons-and-checkboxes)

When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type `radio` and `checkbox` report their values from the `value` attribute.
For example :

```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```

Here, you have two `radio` inputs. When the user submits the form with the `indoor` option selected, the form data will include the line : `indoor-outdoor=indoor`. This is from the `name` and `value` attributes of the "indoor" input.
If you omit the `value` attribute, the submitted form data uses the default value, which is `on`. In this scenario, if the user clicked the "indoor" option and submitted the form, the resulting form data would be `indoor-outdoor=on`, which is not useful. So the `value` attribute needs to be set to something to identify the option.

------

Give each of the `radio` and `checkbox` inputs the `value` attribute. Use the input label text, in lowercase, as the value for the attribute.

> One of your radio buttons should have the `value` attribute of `indoor`.
> One of your radio buttons should have the `value` attribute of `outdoor`.
> One of your checkboxes should have the `value` attribute of `loving`.
> One of your checkboxes should have the `value` attribute of `lazy`.
> One of your checkboxes should have the `value` attribute of `energetic`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input value="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input value="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input value="loving" type="checkbox" name="personality"> Loving</label>
    <label><input value="lazy" type="checkbox" name="personality"> Lazy</label>
    <label><input value="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 25. Check Radio Buttons and Checkboxes by Default

[Learn Basic HTML and HTML5: Check Radio Buttons and Checkboxes by Default | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/check-radio-buttons-and-checkboxes-by-default)

You can set a checkbox or radio button to be checked by default using the `checked` attribute.
To do this, just add the word "checked" to the inside of an input element. For example :

`<input type="radio" name="test-name" checked>`

------

Set the first of your radio buttons and the first of your checkboxes to both be checked by default.

> Your first radio button on your form should be checked by default.
> Your first checkbox on your form should be checked by default.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 26. Nest Many Elements within a Single div Element

[Learn Basic HTML and HTML5: Nest Many Elements within a Single div Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-many-elements-within-a-single-div-element)

The `div` element, also known as a division element, is a general purpose container for other elements.
The `div` element is probably the most commonly used HTML element of all.
Just like any other non-self-closing element, you can open a `div` element with `<div>` and close it on another line with `</div>`.

------

Nest your "Things cats love" and "Things cats hate" lists all within a single `div` element.
Hint: Try putting your opening `div` tag above your "Things cats love" `p` element and your closing `div` tag after your closing `ol` tag so that both of your lists are within one `div`.

> Your `p` elements should be nested inside your `div` element.
> Your `ul` element should be nested inside your `div` element.
> Your `ol` element should be nested inside your `div` element.
> Your `div` element should have a closing tag.

```html
<h2>CatPhotoApp</h2>
<main>
<div>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
</div>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 27. Declare the Doctype of an HTML Document

[Learn Basic HTML and HTML5: Declare the Doctype of an HTML Document | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/declare-the-doctype-of-an-html-document)

The challenges so far have covered specific HTML elements and their uses. However, there are a few elements that give overall structure to your page, and should be included in every HTML document.

At the top of your document, you need to tell the browser which version of HTML your page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.

You tell the browser this information by adding the `<!DOCTYPE ...>` tag on the first line, where the `...` part is the version of HTML. For HTML5, you use `<!DOCTYPE html>`.

The `!` and uppercase `DOCTYPE` is important, especially for older browsers. The `html` is not case sensitive.

Next, the rest of your HTML code needs to be wrapped in `html` tags. The opening `<html>` goes directly below the `<!DOCTYPE html>` line, and the closing `</html>` goes at the end of the page.

Here's an example of the page structure :

```html
<!DOCTYPE html>
<html>
  <!-- Your HTML code goes here -->
</html>
```

------

Add a `DOCTYPE` tag for HTML5 to the top of the blank HTML document in the code editor. Under it, add opening and closing `html` tags, which wrap around an `h1` element. The heading can include any text.

> Your code should include a `<!DOCTYPE html>` tag.
> There should be one `html` element.
> The `html` tags should wrap around one `h1` element.

```html
<!DOCTYPE html>
<html>
  <h1>A cute orange cat lying on its back</h1>
</html>
```

-----



## 28. Define the Head and Body of an HTML Document

[Learn Basic HTML and HTML5: Define the Head and Body of an HTML Document | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/define-the-head-and-body-of-an-html-document)

You can add another level of organization in your HTML document within the `html` tags with the `head` and `body` elements. Any markup with information about your page would go into the `head` tag. Then any markup with the content of the page (what displays for a user) would go into the `body` tag.
Metadata elements, such as `link`, `meta`, `title`, and `style`, typically go inside the `head` element.
Here's an example of a page's layout :

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

------

Edit the markup so there's a `head` and a `body`. The `head` element should only include the `title`, and the `body` element should only include the `h1` and `p`.

> There should be only one `head` element on the page.
> There should be only one `body` element on the page.
> The `head` element should be a child of the `html` element.
> The `body` element should be a child of the `html` element.
> The `head` element should wrap around the `title` element.
> The `body` element should wrap around both the `h1` and `p` elements.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The best page ever</title>
  </head>
  <body>
    <h1>The best page ever</h1>
      <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  </body>
</html>
```

> # The best page ever
>
> Cat ipsum dolor sit amet, jump launch to pounce upon little yarn  mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball  run catnip eat the grass sniff. Meow i could pee on this if i had the  energy for slap owner's face at 5am until human fills food dish yet  scamper. Knock dish off table head butt cant eat out of my own dish  scratch the furniture. Make meme, make cute face. Sleep in the bathroom  sink chase laser but pee in the shoe. Paw at your fat belly licks your  face and eat grass, throw it back up kitty ipsum dolor sit amet, shed  everywhere shed everywhere stretching attack your ankles chase the red  dot, hairball run catnip eat the grass sniff.