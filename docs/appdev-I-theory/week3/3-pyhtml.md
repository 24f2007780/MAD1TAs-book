# PyHTML

In this section, we will briefly cover: generating simple HTML output using the `pyhtml` library.

The `pyhtml` library is a simple and lightweight library for generating HTML in Python. It allows you to create HTML elements using Python syntax. PyHTML uses functions to represent HTML tags.

### Installation

To install the `pyhtml` library, you can use pip:

```bash
pip install pyhtml
```

### Basic Usage

Here is a simple example of how to use the `pyhtml` library to create an HTML document:

:::code-group
```python [Python code]
from pyhtml import html, head, title, body, h1, p
doc = html(
    head(
        title("My First Pyhtml Page")
    ),
    body(
        h1("Hello, Pyhtml!"),
        p("This is a paragraph generated using the pyhtml library.")
    )
)
print(doc)
```

```html [HTML output]
<html>
  <head>
    <title>My First Pyhtml Page</title>
  </head>
  <body>
    <h1>Hello, Pyhtml!</h1>
    <p>This is a paragraph generated using the pyhtml library.</p>
  </body>
</html>
```
:::

Here we used the `html`, `head`, `body`, `h1`, and `p` functions from the `pyhtml` library to create an HTML document structure. The base element is `html`, which contains the `head` and `body` elements. Inside the `head`, we added a `title`, and inside the `body`, we added a heading (`h1`) and a paragraph (`p`). We can follow this structure to create more complex HTML documents.

### Creating Nested HTML Structures using PyHTML

You can create more complex HTML structures by nesting elements. Here is an example:
:::code-group
```python [Python code]
from pyhtml import html, head, title, body, h1, p, ul, li
doc = html(
    head(
        title("My Complex PyHTML Page")
    ),
    body(
        h1("Welcome to My Page"),
        p("Here is a list of my favorite fruits:"),
        ul(
            li("Apple"),
            li("Banana"),
            li("Cherry")
        )
    )
)
print(doc)
```


```html [HTML output]
<html>
  <head>
    <title>My Complex PyHTML Page</title>
  </head>
  <body>
    <h1>Welcome to My Page</h1>
    <p>Here is a list of my favorite fruits:</p>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </ul>
  </body>
</html>
```
:::

:::details Try it yourself!

```python
from pyhtml import html, head, title, body, h1, p, ul, li
doc = html(
    head(
        title("My first PyHTML Page")
    ),
    body(
        h1("Welcome to My Page"),
        p("Here is a list of my favourite cars"),
        ul(
            li("BMW"),
            li("Audi"),
            li("Mercedes")
        )
    )
)
print(doc)
```

:::

Attribute Handling in Pyhtml
In pyhtml, you can also add attributes to HTML elements. To add attributes, you can pass them as keyword arguments to the functions representing the HTML tags. These attributes need not to a valid attribute in html we can provide any key-value pair and pyhtml will create an attribute out of that pair. For example:

```python
from pyhtml import html, head, title, body, h1, p
doc = html(
    head(
        title("My Pyhtml Page with Attributes")
    ),
    body(
        h1("Hello, Pyhtml!", style="color: blue;"),
        p("This is a paragraph with a class and custom attribute.", class_="my-paragraph", gender="female")
    )
)
print(doc)
```

This will generate the following HTML output:

```html
<html>
    <head>
        <title>My Pyhtml Page with Attributes</title>
    </head>
    <body>
        <h1 style="color: blue;">Hello, Pyhtml!</h1>
        <p class="my-paragraph" gender="female">This is a paragraph with a class and a custom attribute.</p>
    </body>
</html>
```

Here we added a style attribute to the h1 element and class and a custom gender attribute to the p element. Note that since class is a reserved keyword in Python, we used class_ instead.

## Summary

In this section, we have introduced the `pyhtml` library for generating HTML using Python syntax, demonstrating its basic usage and how to create nested HTML structures. Finally, we compared `pyhtml` with the popular templating engine `jinja2`, highlighting their differences in syntax, use cases, and community support.

### Comparison between PyHTML and jinja2

| Feature               | PyHTML                                      | jinja2                                    |
|-----------------------|---------------------------------------------|-------------------------------------------|
| Syntax                | Python function calls                       | Template syntax with delimiters           |
| Learning Curve        | Easier for Python developers                | Requires learning template syntax         |
| Use Case              | Simple HTML generation                      | Complex templating with logic             |
| Integration           | Standalone HTML generation                  | Integrates with web frameworks like Flask |
| Flexibility           | Limited to HTML generation                  | Highly flexible with control structures   |
| Community Support     | Smaller community                           | Large and active community                 |
| Documentation         | Basic documentation available               | Extensive documentation and tutorials     |
| Popularity            | Less popular                               | Widely used in web development             |
| Use in Web Frameworks | Less commonly used                          | Commonly used in frameworks like Flask |


### Additional Resources

- [PyHTML documentation](https://pypi.org/project/pyhtml/)
- [jinja2](./3-jinja2.md)
