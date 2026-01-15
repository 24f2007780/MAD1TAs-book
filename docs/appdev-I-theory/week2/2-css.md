# Cascading Style Sheets
:::code-group

```css [type selector]
a:hover{text-decoration: underline;
font-family: 'Inter', sans-serif;margin: 0;}
```

```css [.class selector]
// reusable <class="classname"
.centered{text-align: center;}

.large{font-size: large;}
```

```css
// ID selector: unique with id="main-header"
#main-header {
font-size: 2em;
padding: 30px 20px;}
```

```css [attribute selector ]
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

:::


```html
<link rel="stylesheet" type="text/css" href="example.css"> <!--or <style></style>-->
```
#### `!important` ← inline ← id ←class  ←element ← internal ← external css
1. If an element that belongs to two different classes is styled externally using both the classes, then for the same attribute, it will acquire styling from the **latest class in order**.
2. If an element having an ID and a class is styled externally using both its ID and the class, then for the same attribute, it will acquire styling from the **ID** selector.

## Bootstrap
How to import bootstrap styles in your html file`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">`
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