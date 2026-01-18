# String Formatting in Python

In python course, we have been introduced to various ways of string formatting like `f-strings`, `.format` method and `%` operator. Now we will shortly revist these concepts before moving to a few more advanced string templating tools like `string.Template` and `jinja2.Template`.

## % Operator (C-lang printf style)<a id="percent-operator"></a>

The `%` operator is an older method of string formatting in Python, similar to the `printf` style in C. It uses format specifiers to indicate where and how to format the values with strict type checking.

- `%s` - String (or any object with a string representation, like numbers)
- `%d` - Integers
- `%f` - Floating point numbers

:::code-group

``` python [% operator]
name = "John"
age = 25
greeting = "Hello, my name is %s and I am %d years old." % (name, age)
print(greeting)
```

```txt [output]
Hello, my name is John and I am 25 years old.
```

:::

### Pros

- Safer than `f-strings` and `str.format()`
- Does not allow code execution or attribute access
- Supported in all Python versions
- Simple and straightforward for basic formatting

### Cons

- Less readable for complex formatting
- More error-prone with many variables
- Limited functionality
- Mostly outdated and not recommended for new code

## str.format() method (Python 2.7+) <a id="str-format-method"></a>

The `str.format()` method allows you to format strings by placing placeholders in the string and then calling the `format()` method with the values to replace those placeholders. `str.format()` replaces placeholders with values and allows **accessing object attributes** and **items**, but **does not evaluate Python expressions.**

:::code-group

``` python [.format()]
name1 = "Bob"
age1 = 25

name2 = "Charlie"
age2 = 28

greeting = "Hello, my name is {name} and I am {age} years old."
greeting1 = greeting.format(name=name1, age=age1)
greeting2 = greeting.format(name=name2, age=age2)

print(greeting1)
print(greeting2)
```

```txt [output]
Hello, my name is Bob and I am 25 years old.
Hello, my name is Charlie and I am 28 years old.
```

:::

### Pros

- More flexible than `%` and f-strings
- Allows attribute and item access
- Supports advanced formatting options
- Reusable templates
- Available in Python 2.7+ and 3.x
- Safer than f-strings (no expression evaluation)

### Cons

- Slightly less readable than f-strings
- More verbose syntax
- Only basic substitutions
- Not suitable for complex templating
- Attribute/item access can still be dangerous
- Security risk if user input is part of the template

## f-strings (Python 3.6+)  <a id="f-strings"></a>

f-strings or formatted string literals are a way to embed expressions inside string literals, using curly braces `{}`. They are prefixed with the letter `f` or `F`. f-strings allow for **full expression evaluation** inside the curly braces.

:::code-group

``` python [f-string]
name = "Alice"
age = 30
greeting = f"Hello, my name is {name} and I am {age} years old."
print(greeting)
```

```txt [output]
Hello, my name is Alice and I am 30 years old.
```

### Pros

- Very readable and concise
- Fastest formatting method
- Supports advanced formatting
- Allows any valid Python expression

### Cons

- Python 3.6+ only
- Not reusable as a template
- Template and data mixed together
- Evaluated immediately
- Not suitable for complex templating
- **High security risk with user input**

## Summary<a id="summary"></a>

| Feature                     | % Operator          | str.format()        | f-strings           |
|-----------------------------|---------------------|---------------------|---------------------|
| Python Version              | All versions        | 2.7+ and 3.x        | 3.6+                |
| Syntax                      | `%s`, `%d`, etc.    | `{}` placeholders   | `f"{}"` literals |
| Readability                 | Low                 | Moderate            | High                |
| Expression Evaluation       | No                  | Limited             | Yes(complete access)                 |
| Accessing Attributes/Items  | No                  | Yes                 | Yes                 |   
| Reusability                 | Yes                 | Yes                 | No                  |
| Security Risk with User Input| Negligible                 | Medium              | Very High                |
| Use case suitability        | legacy code     | Moderate formatting | Simple formatting |

:::danger Security Warning:
Avoid using f-strings or `str.format()` with untrusted user input. Both `fstring` and `string.format` allows **dynamic expression evaluation** which can be exploited. Always sanitize and validate any user-provided data before embedding it in strings or simply use safer templating engines like [**string.Template**](./3-string-templating.md#string.Template) or [**jinja2.Template**](./3-jinja2.md).<br>
:::

:::tip see here for more information:

- comparision of string formatting methods in python [here](https://realpython.com/python-string-formatting/#choosing-the-right-string-formatting-method)

- comparsion with templating tools [here](3-jinja2.md#comparison-tables)

- on security risks related to string formatting, refer to this article: [Python String Formatting Security Risks](https://www.geeksforgeeks.org/python/vulnerability-in-str-format-in-python/)

***though there are more ways of string formatting in python like '%' operator, and more techniques related to `str.format()` method, we will not be covering them here. But you can refer to the official documentation for more details: [python official documentation](https://docs.python.org/3/library/string.html#formatstrings)***
:::
