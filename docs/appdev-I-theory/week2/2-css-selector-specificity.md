
## Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen. It saves a lot of work as can control the layout of multiple web pages all at once

## Type of CSS Selectors (Think of Them as Conditions)
```txt
IF an element matches the selector
THEN apply the styles inside { }
```

:::tabs
==type selector
```css
/* anchor tag on mouse hover will be underline with Inter sans-serif font */
a:hover{
    text-decoration: underline;
    font-family: 'Inter sans-serif';
    margin: 0;}
```
==.class selector
selects HTML elements with a specific `class` attribute.
- Use period (.) + class name

```css
/* reusable <class="centered"> will make it centered align on page*/
.centered{
    text-align: center;
    }

.large{
    font-size: large;
    }
```
==ID selector
The id of an element is unique within a page, so the id selector is used to selects 1 unique HTML element.
- Use hash (#) + id of the element.
```css
#main-header {
    font-size: 2em;
    padding: 30px 20px;
}
/* padding: vertical horizontal
   30px → top & bottom
   20px → left & right */
```
==attribute selector
select elements with a specific attribute
```css
a[target] {
	color: purple;
	} /*all <a> elements with target attribute will be purple color*/ 
```
`[attribute="value"]`: select elements with a specific attribute with an **exact value**
```css
input[type="button"] {
  width: 100px;
  padding: 6px;
  background-color: lightgreen;
}/*<input> element with EXACTLY type="button"*/
```
`[attribute~="value"]`: select elements with an attribute value **containing a specific word**.
```css
[title~="first"] {
  border: 5px solid yellow;
} /* "first post", "para first" but ❌"first-list", ❌"firstoy" */

```
`[attribute*="value"]`: whose attribute value contains a **specific value**.

```css
div[class*="post"] {
	background-color: #333;
	}/*all `<div>` whose class contains "post" substring background becomes grey
```

`[attribute|="value"]`: whose value can be **exactly or start with the specific value** followed by a hyphen (-).

```css
[class|="top"] {
} /*"top" or "top-text" */
```
`[attribute^="value"]`: whose value **starts with** a specific value.

```css
[class^="top"] {
}
```
`[attribute$="value"]`: whose value **ends with** a specific value.
```css
[class$="test"] {
}
```
:::


## Universal selector
The CSS rule will affect every HTML element on the page: 
```css
* {
  text-align: center;
  color: blue;
}
```
better to avoid using them as affects every element so can slow down page rendering.

## Grouping selector
Allows you to apply the same set of CSS rules to multiple HTML elements at once, using commas.

```css
div, span, p {
  text-align: center;
  background-color: black;
}
/* (div) OR (span) OR (p) NOT AND */
```
Apply these styles to all `<div>` elements, all `<span>` elements, and all `<p>` elements.


<div class="card">
  <h3>Block-level Elements</h3>
  <p>
    Block-level elements always start on a new line and stretch to fill the
    full width of their container.
  </p>
  <ul>
    <li><code>&lt;div&gt;</code></li>
    <li><code>&lt;h1&gt; – &lt;h6&gt;</code></li>
    <li><code>&lt;p&gt;</code></li>
    <li><code>&lt;form&gt;</code></li>
    <li><code>&lt;section&gt;</code></li>
  </ul>

  <h3>Inline Elements</h3>
  <p>
    Inline elements stay within the same line and only take as much space as
    their content needs.
  </p>
  <ul>
    <li><code>&lt;span&gt;</code></li>
    <li><code>&lt;a&gt;</code></li>
    <li><code>&lt;img&gt;</code></li>
  </ul>
</div>


### How to Add CSS
#### 1. External CSS
Usually used for the common theme of your entire website within 1 file!!
- `<link>` element , inside the `<head>` section of HTML page.
```html
<html>
<head>
<link rel="stylesheet" type="text/css" href="example.css">
</head>
<body>
```

#### 2. Internal CSS
may be used if that HTML page has a unique style, separate or in addition to the external styling.

```html
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
```

#### 3. Inline CSS
May be used to apply unique style for a single element
```html
<div style="font-size: large; text-align: center">IMP TEXT</div>
<td style="border: 1px solid black;">Statistics for Data Science I</td>
```

- If internal style is defined AFTER the link of `external` css (mostly). It will follow `internal`
- If internal style is defined BEFORE  the link of `external` css. It will follow `external`
- `inline` style (with the HTML element) cascades `internal & external` style sheets in the `head` section


## CSS specificity
::: warning From strongest to weakest: `!important > inline > ID > class > element`

1. If an element is styled using two different classes, then it will acquire styling from the **latest class in order**.
2. If an element is styled using an ID and a class, then it will acquire styling from the **ID** selector.
3. The `!important` rule is used to give the value of a specific property the highest priority.It will **override ALL previous styling rules** for that specific property on that element!
:::

---

<CSS-specificity />

---

::: details Explanation (try adding `!important;` to `.green` class and see what happens and WHY?)
Text1 → Red (class overrides element)<br>
Text2 → Plum (inline overrides class & id)<br>
Text3 → Grey (ID overrides class)<br>
Text4 → Blue (element selector)<br>
Text5 → Blue (inherits same template)<br>
👉 Think of CSS like template inheritance: each layer builds on the previous one and may override it.
:::



### Margins, height, width, padding
1. **Margin**
2. Padding is used to generate space around an element's content (inside borders).
3. **height**
4. **width**
5. `max-width` property sets the maximum allowed width of an element. 

- `auto` - the browser calculates
- `length` - specifies in px, pt, cm, etc.
- `%` - specifies in % of the width of the containing element

```css
div {
    height: 100px;
    max-width: 500px;
    /* width: max(50%, 500px); */

    margin: 3px;
    padding: 25px 50px 75px 100px;
    border: 5px solid gray;

  /* top right bottom left */
}
```
::: details height and width properties do not include padding, borders, or margins
![padding border margin image](https://cdn.hashnode.com/res/hashnode/image/upload/v1662289464907/UChQ641Mf.png)
```txt
500px (width of content area) + 150px (left padding + right padding) + 10px (left border + right border) = 500px (as we set max-width else 660 px)

100px (height of content area) + 100px (top padding + bottom padding) + 10px (top border + bottom border) = 210px (total height)
```

### Some named colors in CSS
no need to use `RGB (red-green-blue values), HEX codes or HSL (hue-saturation-light values)`, if a named color!!
<iframe
  src="https://davidbau.com/colors/"
  title="CSS Color Names Visualizer"
  width="100%"
  height="520"
  style="
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
  "
  loading="lazy"
></iframe>

:::



### Links
When a user interacts with a link, it goes through different states.
CSS provides special pseudo-classes to style each state. Order matters:

#### `:link → :visited → :hover → :active`

:::tabs
== :link
a normal, user has never clicked before link. DEFAULT STATE
👉 Use: Show users that the link is new / unexplored

```css
a:link {
  color: blue;
}
```

== :visited
a link the user has visited
Use: Help users recognize pages they’ve already opened
```css
a:visited {
  color: purple;
}
```
== :hover
a link when the user 's mouse pointer is placed over the link.
Use: commonly used for interaction feedback. Indicate “this is clickable”
```css
a:hover {
  text-decoration: underline;
  color: darkblue;
}
```
== :active
Applies at the exact moment the link is clicked (mouse down)
Give a **very short** “pressed link” feedback
```css
a:active {
  color: red;
}
```
:::

<pseudo-class />

For more info checkout: [User-interaction pseudo classes](2-css-extra.md#user-interaction-pseudo-classes)

<!-- Display Property -->
<div class="card">
  <h2>CSS <code>display</code> Property</h2>
  <p>
    The <code>display</code> property controls how an element behaves on the page.
  </p>

  <ul>
    <li><strong>inline</strong> – flows inside text</li>
    <li><strong>block</strong> – takes full width</li>
    <li><strong>inline-block</strong> – inline -level but you can apply width, height, padding, margin as block</li>
    <li><strong>flex</strong> – flexible block for rows or columns</li>
    <li><strong>grid</strong> – 2D grid system</li>
  </ul>
</div>

::: warning `display: none;` removes the element from layout entirely. (not take up any space)
:::

## CSS Combinators
Combinators define relationships between elements.

- **Descendant (space)**: selects all nested elements (children, grandchildren, etc.)
- **Child (`>`)**: selects direct children only
```css
div > p {
  background-color: yellow;
}
```
selects all `<p>` elements that are direct children of `<div>`
- **Next sibling (+)**: selects the immediate next element (same parents)

```css
div + p {
  background-color: yellow;
}
```
selects the first `<p>` element that immediately follows a `<div>`, and share the same parent:
- **Subsequent sibling (~)**: selects all following siblings
    
```css
div ~ p {
  background-color: yellow;
}
```
selects all `<p>` elements that are next siblings of `<div>`, and share the same parent

| Selector | Meaning |
|--------|--------|
| `A, B` | A OR B |
| `A B` | B inside A |
| `A > B` | Direct child |
| `A + B` | Immediate sibling |
| `A ~ B` | All following siblings |
