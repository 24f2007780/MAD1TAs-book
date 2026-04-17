# SQLALCHEMY ~~Flask-SQLALCHEMY~~

Here in this module, we will be learning about SQLALCHEMY, in its raw form, without the help of Flask-SQLALCHEMY. This is to give you a better understanding of how SQLALCHEMY works, and how it can be used in a Flask application.

:::warning
This module is not part of our course but is an extra module for those who are interested in learning more about SQLALCHEMY. It is not mandatory to complete this module, but it is highly recommended for those who want to learn more about SQLALCHEMY and how it works.
:::

## What is SQLALCHEMY?

SQLALCHEMY is a popular database toolkit library for Python. It provides the following features:

- Object-Relational Mapping (ORM): SQLALCHEMY allows you to map Python classes to database tables, and instances of those classes to rows in the tables. This makes it easier to work with databases in a more Pythonic way.
- SQL Expression Language: SQLALCHEMY provides a powerful and flexible way to construct SQL queries with safe parameterization, allowing you to write complex queries without having to worry about SQL injection vulnerabilities.
- Database Agnostic Interface: SQLALCHEMY supports multiple database backends, including SQLite, MySQL, PostgreSQL, and more. This means you can switch between different databases without changing your code. But few features may not be supported by all databases, so it's important to check the documentation for compatibility.
- Connection Pooling: SQLALCHEMY provides built-in support for connection pooling, which support multi-threaded applications and can improve performance by reusing database connections.
- Schema Generation: SQLALCHEMY can automatically generate database schemas based on your Python classes, making it easier to set up and maintain your database structure.

## Working of SQLALCHEMY

Though SQLALCHEMY does a lot of complex work under the hood, for various tasks at various levels. Each level may or may not use a particular approach, but they can be broken down into a few key components:

- ORM: The Object-Relational Mapping (ORM) layer is responsible for mapping Python classes to database tables and instances of those classes to rows in the tables. It provides a high-level API for working with databases in a more Pythonic way.
- Session: The session is the main interface for interacting with the database. It manages the connection to the database and provides methods for querying and manipulating data.
- Engine: The engine is responsible for managing the database connection and executing SQL statements. It is created using the `create_engine` function, which takes a database URL as an argument.
- Connection: The connection is a low-level interface for interacting with the database. It is created by the engine and provides methods for executing SQL statements and managing transactions.
- Dialect+Driver: SQLALCHEMY supports multiple database backends, and each backend has its own dialect and driver. The dialect is responsible for translating SQLALCHEMY's high-level API into the specific SQL syntax of the database, while the driver is responsible for managing the connection to the database and executing SQL statements.
- DBAPI: SQLALCHEMY uses the Python DB API to interact with the database. This means that you can use any DB API-compliant database driver with SQLALCHEMY, as long as it is compatible with the database you are using.
- Database itself: The database is where your data is stored and query is executed. SQLALCHEMY supports multiple database backends, including SQLite, MySQL, PostgreSQL, and more. Each database has its own features and limitations, so it's important to choose the right database for your application.

Here the image from the SQLALCHEMY documentation that shows the different components and how they interact with each other:
![SQLALCHEMY Components](https://docs.sqlalchemy.org/en/20/_images/sqla_arch_small.png)

## Connecting to a Database

To connect sqlalchemy to the database and use it to interact with the database, we need to follow these steps:

- Create an engine: The engine is the starting point for any SQLALCHEMY application. It is responsible for managing the database connection and executing SQL statements. You can create an engine using the `create_engine` function, which takes a database URL as an argument.
  
  - `DATABASE_URI` contains the following information:
    - Database dialect (e.g., `sqlite`, `postgresql`, `mysql`, etc.)
    - Username (if required)
    - Password (if required)
    - Host (if required)
    - Port (if required)
    - Database name

- Create a session: The session is the main interface for interacting with the database. It manages the connection to the database and provides methods for querying and manipulating data. You can create a session using the `sessionmaker` function, which takes the engine as an argument.
- Define your models: If you are using the ORM, you will need to define your models by creating Python classes that inherit from `Base`, which is a class provided by SQLALCHEMY. Each class represents a table in the database, and each attribute of the class represents a column in the table.
- Interact with the database: Once you have set up your engine, session, and models, you can start interacting with the database by creating instances of your models, adding them to the session, and committing the session to save the changes to the database.

Here is an example of how to connect to a SQLite database and create a session:

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine import URL
from sqlalchemy import Column, Integer, String

url = URL.create(
    drivername="postgresql+psycopg2",
    username="your_username",
    password="your_password",
    host="your_host",
    port="your_port",
    database="your_database"
)

engine = create_engine(url)
Session = sessionmaker(bind=engine) # Session is a class that we can use to create session objects 
session = Session() # session is an instance of the Session class that we can use to interact with the database

```

## Ways to use SQLALCHEMY

There are mainly three ways to use SQLALCHEMY:

- Raw Query
- SQL Expression Language
- Object-Relational Mapping (ORM)

### Raw Query Execution

In this approach, you can execute raw SQL queries directly using the `execute` method of the database connection. This is useful when you want to run complex queries that may not be easily expressed using the ORM or SQL Expression Language.

```python
from sqlalchemy import create_engine
