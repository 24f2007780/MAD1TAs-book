---
tags:
  - MAD1
  - W2
date: 2025-04-24 14:25
syllabus: 
---

Links:
- Validate syntax error: https://www.validator.w3.org
- [MVC Explanation](https://discourse.onlinedegree.iitm.ac.in/t/doubt-regarding-business-logic-responsibility-in-mvc/181258/2?u=yashvi)
- `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">`


## Binary-Decimal

##### Hexadecimal = 16 prime factorisation
- Electronics: ON state 1 & OFF state 0 so less circuitry to design devices *0/significant voltage*
- Computer work by logical decisions YES 1 or NO 0

- $n$ bits $2^n$ possible values (0 to $2^n -1$) in binary combinations
- 6 = $0\times2^0 + 1 \times 2^1 + 1\times {2}^2 + 0 \times 2^3$ `0110` binary

| Integer part:<br>1. `x/2` → note remainder + divide quotient until 0<br>2. Place the remainder values from **bottom to top** most to least-significant bit<br>Fractional part:<br>3. `*2` → note down the integer part of the result +  fractional part of the result `*2` until 0 or a desired level of precision<br>4. Write the integer parts from **top to bottom** to get the binary number.<br> | Integer Part:<br>1. Write bits of binary as $2^x$<br>2. Multiply bits with $x$ corresponding power<br>3. add each term<br>Fractional part:<br>powers of 2 are -negative from `-1`     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |

![](https://i.imgur.com/djQW9ne.png)


### [ASCII](https://blog.gcwizard.net/wp-content/uploads/2021/01/ASCII-code.png)
American Standard Code for **Information Interchange**: between Machines or humans → Standard **encoding** (seq of bits = specific character) is a character encoding standard that assigns a unique numerical value to each character. 
`7-bits: 128`$2^7$ diff entities
$\underbrace{0...9}_{48 -57}+\underbrace{A...Z}_{65 -90}+ \underbrace{a...z}_{97-122}$+0...9+!@# %&*() -Ľätīń/Rõman → $2^8 =256$
- `"A"` is uniquely in binary =`01000001`=$2^6+2^0=64+1=65$ 
- `'a'=01100001`=$2^6+ 2^5 + 2^0= 64+32+1=97$
UPPER[2]=1, LOWER[2]=0
![](https://dotnettutorials.net/wp-content/uploads/2022/08/word-image-29702-1.png)
## Unicode
`UCS Universal Chracter Set`**Codepoints** for more scripts, characters. after 127 ASCII
- `UCS 2-bytes/char` $2^{16}=65,536$
- `UCS 4-byte/char` $2^{32}=\underset{\text{billion}}{\underset{\downarrow}{4}},294,967,296$
 Optimal coding 
- All ASCII documents are automatically UTF-8 compatible 
- 1st check prefix → linked list through chain of prefixes possible


- UCS4 $32\times5k=1.6Lakh$
- ASCII $8/7/6\times 5k=40k/35k/40k$ 
- frequency of occurrence (e,t,a,o) Huffmann $10-20k$ 
- `zip` compression independent of data, ~ algo
- `1 byte 10xxxx`→  common prefix code (represents value or look at next)

|     | 1st Byte | 2nd Byte | 3rd Byte | 4th Byte | Maximum Expressible Unicode Value |
| --- | -------- | -------- | -------- | -------- | --------------------------------- |
| Unicode Transformation Format | 0xxxxxxx |          |          |          | 007F hex ($2^7=127$)              |
| Eng UTF-8 (ASCII compatible) | 110xxxxx | 10xxxxxx |          |          | 07FF hex ($2^{11}=2047$)          |
|latin/other UTF-16 bits | 1110xxxx | 10xxxxxx | 10xxxxxx |          | FFFF hex ($2^{16}=65535$)         |
| UTF-32/UCS-4 | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxx  | 10FFFF hex ($2^{21}=1,114,111$)   |

- Huffman optimal coding based on frequency of occurrence
- using 1 byte for most common alphabets
- group others, have "prefix" code

# Markup

:::tip Markup
a way of using cues/codes in regular flow of text to make *clear, easy to understand* display of text
 1. <span style="font-weight:bold; color:rgb(98, 151, 208)">Presentational</span>  embed codes not part of regular text, *specific to the editor*❌semantic meaning but ✅WYSIWYG direct edit *MS Word, Google Docs*
2. <span style="font-weight:bold; color:rgb(98, 151, 208)">Procedural</span> → 1️⃣ change font → large, bold 2️⃣ indent 2 lines
3.  <span style="font-weight:bold; color:rgb(98, 151, 208)">Descriptive</span> `<title> with <heading> within 2 <paragraph>s` *Latex, HTML* ✅meaning but ❌ WYSIWYG write/edit
:::

## HTML (HyperText Markup Language)

- **HTML** browser interpretation of **SGML** (Standard Generalized Markup Language) by *Tim Berners-Lee* at CERN (1989-97 HTML 1-4)
	- XML based (1997-2010s) easier to use, relax maths
	- HTML5 2008 → 👑2014 browser-independent OS-independent standard for*Adobe Flash Animation Plugin*
	- forgiving → loose validity checks (not-closed `</tag>`, case insensitive)
	- Display `Removed presentation-only <center><font>`
![](https://i.imgur.com/YDwt3ez.png)


#### Document Object Model
```html
<!DOCTYPE html> // location-specific
<html lang="en">
<head>
<h1>Heading 1</h1>
<a href="link">Link Text</a>
</head>
<body>
<p>para</p>
<div style="font-size: large; text-align: center">
<em><strong>emphasis strong logical semantic form</strong></em><br></br>
<i><b>italic bold physical presentation form</b></i>
</div>
</body>
</html>
 ```

::: info DOM tree
![](https://i.imgur.com/fWBLgwn.png) DOM is tree structure representing logical layout of document `https://www.example.com/path?q=searchquery&key=value`

| html                                                                           | use                                          |
| ------------------------------------------------------------------------------ | -------------------------------------------- |
| `<ul><li>`                                                                     | `<ul><li>` unordered list                      |
| `<ol><li>`                                                                     | `<ol><li>` ordered list                        |
| `<img alt="" src="name.png">`                                                  | image ❌ need `</img>`                       |
| `<table>(<thead><th>)<tr><td>`                                                              | table, row, cell                             |
| `<audio>,<video controls muted><source src="vid.mp4" type="video/mp4"></video>` | autoplay video, muted by default             |
| `<a href="link.html">Link Text</a>`                                            | anchor tag → attr: hyper reference HYPERLINK |
| `<link href="" >`                                 | IMPORT copy paste from ""                                       |
:::

-  `div` element is used for block-level organization & styling of page elements, whereas a `span` element is used for inline organization and styling.
```html
<form action="https://www.google.com/search" method="get">
    <input autocomplete="off" autofocus name="q" placeholder="Query" type="search">
    <input type="submit" value="Google Search">
<!--register email-->
   <input autocomplete="off" autofocus name="q" pattern=".+@ds.study.iitm.ac.in" placeholder="email" type="email">
   <input type="submit" value="Register">
</form>
```
- Application Programming Interfaces (APIs)
	- Canvas (draw arbitary)
	- Offline (install as app, stored on local machine even if ❌ connected to Internet)
	- Web storage (persistent, remember where you left the file)
	- Drag & Drop (drag from OS to website)

## regex
<iframe
  scrolling="no"
  src="https://cheatography.com/davechild/cheat-sheets/regular-expressions/"
  width="1480"
  height="814"
  style="border:0px;">
</iframe>


### Styling
- Separate CSS files/blocks
	- (Cascading Style Sheets) allows multiple definitions → Latest takes precedence
	- Selects all HTML elements of a given {} & applies style to them

[list2tab]
- type selector
	```css
	a:hover{text-decoration: underline;
	font-family: 'Inter', sans-serif;margin: 0;}
	```
- .class selector
  reusable `<class="classname"`
	```css
	.centered{text-align: center;}
	
	.large{font-size: large;}
	```
- ID selector: unique with `id="main-header"`
	```css
	#main-header {
	font-size: 2em;
	padding: 30px 20px;}
	```
-  attribute selector 
	```css
	a[title] {
		color: purple;
		} /*all <a> elements with title attr*/
	input[type="button"] {
		border: 1px solid black;
		}/*<input> element with EXACTLY type="button"*/
	div[class*="post"] {
		background-color: #333;
		}/*all <div> whose class contains "post" substring
	^ starts with       $ ends with*/
	```


```html
<link rel="stylesheet" type="text/css" href="example.css"> <!--or <style></style>-->
```
#### `!important` ← inline ← id ←class  ←element ← internal ← external css
1. If an element that belongs to two different classes is styled externally using both the classes, then for the same attribute, it will acquire styling from the **latest class in order**.
2. If an element having an ID and a class is styled externally using both its ID and the class, then for the same attribute, it will acquire styling from the **ID** selector.

## Bootstrap
- Originated from Twitter
- Standard styles for buttons, forms, icons
- Uses `label for`	, `aria-describedby`, `aria-labelledby` for screen readers

```html
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">
    We'll never share your email with anyone else.
  </div>
</div>

<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
</div>

<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
```
## JavaScript or ECMAScript
- programmability inside browser which HTML, CSS don't #MAD2