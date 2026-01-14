# Pyhtml and System Integration

In this section, we will briefly cover: generating simple HTML output using the `pyhtml` library.

## Pyhtml Library

The `pyhtml` library is a simple and lightweight library for generating HTML in Python. It allows you to create HTML elements using Python syntax. Pyhtml uses functions to represent HTML tags.

### Installation

To install the `pyhtml` library, you can use pip:

```bash
pip install pyhtml
```

### Basic Usage

Here is a simple example of how to use the `pyhtml` library to create an HTML document:

```python
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

This will generate the following HTML output:

```html
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

Here we used the `html`, `head`, `body`, `h1`, and `p` functions from the `pyhtml` library to create an HTML document structure. The base element is `html`, which contains the `head` and `body` elements. Inside the `head`, we added a `title`, and inside the `body`, we added a heading (`h1`) and a paragraph (`p`). We can follow this structure to create more complex HTML documents.

### Creating Nested HTML Structures using Pyhtml

You can create more complex HTML structures by nesting elements. Here is an example:

```python
from pyhtml import html, head, title, body, h1, p, ul, li
doc = html(
    head(
        title("My Complex Pyhtml Page")
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

This will generate the following HTML output:

```html
<html>
  <head>
    <title>My Complex Pyhtml Page</title>
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

:::tip

**Try it yourself!**

```python
from pyhtml import html, head, title, body, h1, p, ul, li
doc = html(
    head(
        title("My first Pyhtml Page")
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

### Comparison between pyhtml and jinja2

| Feature               | pyhtml                                      | jinja2                                    |
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

## Summary

In this section, we explored the `sys` module in Python, focusing on `sys.argv` for command-line argument handling. We also introduced the `pyhtml` library for generating HTML using Python syntax, demonstrating its basic usage and how to create nested HTML structures. Finally, we compared `pyhtml` with the popular templating engine `jinja2`, highlighting their differences in syntax, use cases, and community support.

:::info

**Check the following links for more details:**

- [sys module documentation](https://docs.python.org/3/library/sys.html)
- [pyhtml documentation](https://pypi.org/project/pyhtml/)
- [jinja2](./jinja2.md)
