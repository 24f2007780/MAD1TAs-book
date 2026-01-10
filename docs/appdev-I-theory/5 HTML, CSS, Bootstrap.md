---
tags:
  - MAD1
  - W5
date: 2025-04-24 14:25
syllabus: 
---

```html
<link rel="stylesheet" type="text/css" href="{{ url_for('static',
filename='bootstrap/css/bootstrap.min.css') }}"/>
<link rel="stylesheet" type="text/css" href="{{ url for('static',
filename='style.css') }}"/>
<script type="text/javascript" src="{{ url_for('static', filename='js/
custom_validations. js') }}"></script>
```

## MVC (Model-View-Controller) 
![](https://www.researchgate.net/publication/320211937/figure/fig5/AS:668659265597446@1536432200280/Model-View-Controller-Architecture-Source-Pressman-2010.png)*Model-View-Adapter/Presenter/Viewmodel, Hierarchical MVC, Presentation-Abstraction-C*  
design pattern was originally created by *Trygve Reenskaug* while working at *Xerox PARC Smalltalk-80*(GUI design) in the late 1970s. A way to structure interactive applications by separating concerns into distinct components

---
<script setup>
    import CurlRestAPI from '../.vitepress/components/CurlRestAPI.vue'
</script>
<CurlRestAPI />

| **Command**          | **Description**                                          |
|----------------------|----------------------------------------------------------|
| `curl <URL>`         | Basic GET request.                                       |
| `curl -v <URL>`      | Verbose output with headers.                             |
| `curl -L <URL>`      | Follow redirects.                                        |
| `curl -O <URL>`      | Download a file with its original name.                  |
| `curl -H`            | Add custom headers.                                      |
| `curl -X POST`       | Send a POST request.                                     |
| `curl -X POST -d`    | Send form data with a POST request.                      |
| `curl -X POST -H "Content-Type: application/json" -d` | Send JSON data.         |
| `curl <URL> -o <filename>` | Save output to a file.                             |
| `curl -i <URL>`      | Include headers in the response.                         |
| `curl -F`            | Upload a file to a server.                               |
| `curl -w`            | Display timing details of the request. (custom output format for information about the transfer, rather than the transferred data itself)                  |
| `curl -s -o /dev/null -w` | Get HTTP status code only.                          |

> [!NOTE]- ` -s -o /dev/null`
>  **-s (or --silent):**
> This flag makes curl operate in silent mode. It suppresses the progress meter and error messages that curl would normally display during a transfer. 
> **-o /dev/null (or --output /dev/null):**
> /dev/null: This is a special device file in Unix-like operating systems. It acts as a "black hole" or "null device." Any data written to /dev/null is immediately discarded and cannot be retrieved. When used with -o, it means that curl will download the data, but instead of saving it to a regular file, it will send it to /dev/null, effectively discarding the downloaded content. This is useful when you only need to trigger a URL or check its status without saving the response body.
> 

----

### **1. Setting up Flask-SQLAlchemy:**
Before performing queries and handling errors, you need to set up **Flask-SQLAlchemy** in your Flask application:

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
```

- `SQLALCHEMY_DATABASE_URI`: Specifies the database URL (in this case, SQLite).
- `SQLALCHEMY_TRACK_MODIFICATIONS`: Disables tracking modifications for better performance.

---

### **2. Defining Models:**
Define a database model (table) using classes:

```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
```

- `db.Model`: Base class for all models.
- `db.Column`: Defines a column in the table with attributes like `primary_key`, `unique`, and `nullable`.
- Use `db.create_all()` to create tables based on models:
```python
with app.app_context():
    db.create_all()
```

---

### **3. Performing Queries:**
**Flask-SQLAlchemy** supports various types of queries:
- **Creating a new record**:
   ```python
   new_user = User(username='john_doe', email='john@example.com')
   db.session.add(new_user)
   db.session.commit()
   ```
   - `db.session.add()`: Adds the record to the session.
   - `db.session.commit()`: Commits the transaction to the database.

- **Reading records**:
   ```python
   # Get a user by primary key
   user = User.query.get(1)
   
   # Get a user by filter
   user = User.query.filter_by(username='john_doe').first()
   
   # Get all users
   users = User.query.all()
   ```

- **Updating a record**:
   ```python
   user = User.query.filter_by(username='john_doe').first()
   user.email = 'new_email@example.com'
   db.session.commit()
   ```

- **Deleting a record**:
   ```python
   user = User.query.get(1)
   db.session.delete(user)
   db.session.commit()
   ```

---

### **4. Error Handling in Flask-SQLAlchemy:**
Handling errors during database operations is crucial for ensuring that your application can recover gracefully. Common errors include `IntegrityError` (e.g., when attempting to insert duplicate data) and `OperationalError` (e.g., when there's a problem connecting to the database).

#### **Using `try-except` Blocks:**
Wrap database operations in `try-except` blocks to catch and handle specific exceptions:

- **Example 1: Handling `IntegrityError` when adding a new user:**
   ```python
   from sqlalchemy.exc import IntegrityError
   
   try:
       new_user = User(username='john_doe', email='john@example.com')
       db.session.add(new_user)
       db.session.commit()
   except IntegrityError:
       db.session.rollback()
       print("Error: Duplicate entry or constraint violation.")
   ```

   - `db.session.rollback()`: Reverts the session to the state before the transaction began, which is important after an error to avoid invalid session states.
   - **`IntegrityError`**: Catches issues like unique constraint violations (e.g., trying to add a user with a username or email that already exists).

- **Example 2: Handling `OperationalError` when connecting to the database:**
   ```python
   from sqlalchemy.exc import OperationalError
   
   try:
       user = User.query.get(1)
   except OperationalError:
       print("Error: Unable to connect to the database.")
   ```

#### **Handling Multiple Exceptions:**
   - Handle multiple types of exceptions in one `try-except` block:
   ```python
   from sqlalchemy.exc import IntegrityError, OperationalError

   try:
       new_user = User(username='jane_doe', email='jane@example.com')
       db.session.add(new_user)
       db.session.commit()
   except IntegrityError:
       db.session.rollback()
       print("Error: Duplicate username or email.")
   except OperationalError:
       print("Error: Database connection issue.")
   except Exception as e:
       print(f"An unexpected error occurred: {str(e)}")
   ```

#### **Using Flask’s `@app.errorhandler` for Global Error Handling:**
   - You can handle exceptions globally in a Flask app using `@app.errorhandler`:
   ```python
   from flask import jsonify
   from sqlalchemy.exc import IntegrityError

   @app.errorhandler(IntegrityError)
   def handle_integrity_error(e):
       db.session.rollback()
       return jsonify(error="Duplicate entry detected"), 400
   ```

   - This method can return a custom error message to the client and ensures that the session is rolled back properly.

---

### **5. Common SQLAlchemy Exceptions:**
Here are some frequently encountered exceptions when working with SQLAlchemy:

- **`IntegrityError`**: Raised for constraint violations (e.g., unique constraints, foreign keys).
- **`OperationalError`**: Raised for errors like database connection issues or table not found.
- **`InvalidRequestError`**: Raised when a request is not valid, such as when trying to use an invalid query or accessing a closed session.
- **`FlushError`**: Raised when there are issues with flushing data to the database, typically during `db.session.commit()`.

### **6. Best Practices for Error Handling with Flask-SQLAlchemy:**

- **Always Rollback After an Error**: Use `db.session.rollback()` to ensure that the session state is clean after a failed transaction.
- **Log Errors for Debugging**: Use logging to record errors and understand the cause of issues:
`DEBUG(10) < INFO(20) < WARNING(30) < ERROR(40) < CRITICAL(50)`

```python
import logging
logging.basicConfig(filename='error.log', level=logging.ERROR)

try:
  # Some database operation
except Exception as e:
  logging.error(f"An error occurred: {e}")
```
- **Use Specific Exception Classes**: Catch specific exceptions like `IntegrityError` to handle known issues, rather than using a generic `Exception` class.
- **Graceful User Feedback**: If handling exceptions in routes, ensure that the user receives friendly and clear feedback about what went wrong, especially for input validation errors.

---

### **7. Example: Complete Code with Error Handling:**

```python
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

with app.app_context():
    db.create_all()

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    new_user = User(username=data['username'], email=data['email'])
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify(message="User added successfully"), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify(error="Username or email already exists"), 400
    except Exception as e:
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)
```

- This example demonstrates adding a user through a POST request with error handling.
- It handles `IntegrityError` for duplicate usernames or emails and provides a custom error message.
- Other general exceptions return a 500 status code with the error message.

---

The `first_or_404` method is a handy feature provided by **Flask-SQLAlchemy** for handling queries when you want to return a single result or automatically raise a `404 Not Found` error if the query does not yield any results. This is especially useful when building APIs where you want to ensure a resource exists before proceeding with further actions.

### **8. Using `first_or_404` with Flask-SQLAlchemy:**

- **Purpose**: 
  - `first_or_404` is a method used when querying for a single record, ensuring that if no result is found, a `404 Not Found` error is automatically raised.
  - It simplifies the process of handling missing resources by combining the query and error handling in a single step.
  
- **Syntax**:
  ```python
  user = User.query.filter_by(username='john_doe').first_or_404()
  ```

  - This will attempt to retrieve the first `User` with the username `'john_doe'`.
  - If no such user exists, it will raise a `404 Not Found` error automatically.

- **Use Case**:
  - `first_or_404` is particularly useful in **RESTful APIs** when you need to retrieve a specific record and want to return a `404` response if it doesn’t exist.

- **Example**:
  ```python
  from flask import Flask, jsonify
  from flask_sqlalchemy import SQLAlchemy
  
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  db = SQLAlchemy(app)
  
  class User(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      username = db.Column(db.String(80), unique=True, nullable=False)
      email = db.Column(db.String(120), unique=True, nullable=False)
  
  @app.route('/user/<int:user_id>', methods=['GET'])
  def get_user(user_id):
      # Retrieve user by ID, or return a 404 error if not found.
      user = User.query.filter_by(id=user_id).first_or_404()
      return jsonify(username=user.username, email=user.email)
  
  if __name__ == '__main__':
      app.run(debug=True)
  ```

  - In this example, if a user with the specified `user_id` does not exist, Flask will automatically return a `404` response with a default error message.
  - This eliminates the need for manual checking and error handling:
    ```python
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({"error": "User not found"}), 404
    ```

- **Custom Error Handling with `first_or_404`**:
  - While `first_or_404` provides a simple way to raise a `404`, you can customize the error response by catching the `404` using Flask's `@app.errorhandler`:
    ```python
    from flask import abort
    
    @app.route('/user/<int:user_id>', methods=['GET'])
    def get_user(user_id):
        user = User.query.filter_by(id=user_id).first_or_404(description='User not found')
        return jsonify(username=user.username, email=user.email)
    
    @app.errorhandler(404)
    def handle_404(e):
        return jsonify({"error": str(e)}), 404
    ```
  - In this example, if a user is not found, `first_or_404` will return a `404` response with the message `'User not found'`.

### **Summary of `first_or_404`:**

| **Feature**      | **Description**                                              |
| ---------------- | ------------------------------------------------------------ |
| **Purpose**      | Retrieve a single record or automatically raise a `404 Not Found` error if no result is found. |
| **Use Case**     | Useful in RESTful APIs for simplifying retrieval of a resource with automatic error handling. |
| **Syntax**       | `User.query.filter_by(attribute=value).first_or_404()`       |
| **Custom Error** | You can provide a custom `description` for the error message or handle it with `@app.errorhandler`. |

### **9. How `first_or_404` Fits into Error Handling:**

- **Advantages**:
  - It makes the code cleaner by combining querying and error handling.
  - Reduces boilerplate code needed for checking if a resource exists.
  - Integrates seamlessly with Flask's built-in error handling mechanisms.

- **Combining with `try-except`**:
  - Although `first_or_404` simplifies a lot of error handling, you can still use `try-except` blocks if you want to catch the `404` for additional custom logic:
    ```python
    from sqlalchemy.exc import SQLAlchemyError
    
    @app.route('/user/<int:user_id>', methods=['GET'])
    def get_user(user_id):
        try:
            user = User.query.filter_by(id=user_id).first_or_404()
            return jsonify(username=user.username, email=user.email)
        except SQLAlchemyError as e:
            return jsonify({"error": str(e)}), 500
    ```


