
#  REpresentational State Transfer - REST
REST (Representational State Transfer) APIs are the standard way to build web services that allow different systems to communicate over HTTP. They use standard HTTP methods and JSON for data exchange.

- Client - Server may be far apart & State?
- Different networks, latencies, quality
- Authentication? Not core part of protocol
- guidelines & constraints
# Understanding RESTful APIs with Flask-RESTful

RESTful APIs are essential for modern web development, allowing seamless communication between a client and a server. In Flask, we can create RESTful APIs efficiently using the `Flask-RESTful` extension.

## 1. What is an API?

An API (Application Programming Interface) is a set of rules that allows software applications to communicate with each other. APIs enable data exchange between systems and provide a standardized way for applications to interact.

## 2. Why Use an API?

- **Scalability**: APIs enable applications to grow and integrate with multiple platforms.
- **Efficiency**: Reduces redundancy by allowing different systems to share functionality.
- **Automation**: Automates tasks and workflows between services.
- **Security**: Ensures controlled access to data using authentication mechanisms.

## 3. When to Use an API?

- When different applications need to communicate.
- To expose data or services to external applications.
- When developing microservices architecture.

## 4. How APIs Work

 A client sends a request to the server, and the server processes it and returns a response.
APIs follow a request-response cycle:
- A client sends a request to an API.
- The API processes the request and interacts with the database if needed.
- The API returns a response to the client.

💡 **Too Much used Analogy:** Imagine ordering food at a restaurant. The waiter (API) takes your order (request), gives it to the kitchen (server), and brings back the food (response).

## 5. Hierarchy: From Route to Flask-RESTful API

Understanding the progression from a simple route to a full-fledged Flask-RESTful API is crucial for building scalable applications. Below is a structured hierarchy:

1. **Flask Route (********`@app.route`********)**: The most basic way to create an API using Flask. It defines individual endpoints manually and maps them to functions.

   - Example:
     ```python
     @app.route('/hello', methods=['GET'])
     def hello():
         return "Hello, World!"
     ```

2. **API (Application Programming Interface)**: A broader concept that refers to any defined mechanism allowing applications to interact. APIs serve data through structured endpoints.

3. **RESTful API**: A **RESTful API** follows the principles of **REST (Representational State Transfer)** to enable efficient client-server communication. It follows standard HTTP methods:

| HTTP Method | Operation | CRUD |
|------------|----------|----------|
| POST | Create new data | Create |
| GET | Retrieve data | Read |
| PUT | Update existing data | Update |
| DELETE | Remove data | Delete |

## **Idempotency in HTTP Verbs**

**Idempotency** means that making multiple identical requests has the same effect as making a single request. In other words, the outcome remains unchanged no matter how many times the request is sent.

#### **Idempotent HTTP Methods**
These methods ensure that repeated requests **do not** change the server state after the first successful request.

1. **GET**:  
   - Retrieves data from the server.  
   - Multiple GET requests return the same result without modifying data.  
   - Example: Fetching user details (`GET /user/1`) multiple times does not alter the user.

2. **PUT**:  
   - Updates or creates a resource at a specified location.  
   - Sending the same `PUT` request repeatedly results in the same final state.  
   - Example: `PUT /user/1` with `{ "name": "John" }` will always update user 1 to "John" regardless of how many times it is sent.

3. **DELETE**:  
   - Removes a resource.  
   - Multiple DELETE requests for the same resource will always result in the resource being removed or remain absent.  
   - Example: `DELETE /user/1` ensures user 1 is deleted, and subsequent calls do nothing.

4. **HEAD**:  
   - Similar to `GET`, but it only returns headers without the response body.  
   - It does not modify any resources, so it is idempotent.

5. **OPTIONS**:  
   - Used to describe the communication options available for a resource.  
   - Making multiple requests does not change anything.

#### **Non-Idempotent HTTP Methods**
These methods **do not guarantee** the same outcome when called multiple times.

1. **POST**:  
   - Creates a new resource.  
   - Sending multiple `POST` requests results in multiple resources being created.  
   - Example: `POST /user` with `{ "name": "Alice" }` creates multiple user entries.

2. **PATCH**:  
   - Partially updates a resource.  
   - Multiple `PATCH` requests **may** lead to different states depending on how they are applied.  
   - Example: Incrementing a counter in a `PATCH` request changes the state each time.

---

### **Key Takeaways**
- **Idempotent methods:** `GET`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`
- **Non-idempotent methods:** `POST`, `PATCH`
- **Idempotency helps prevent unintended side effects** when requests are retried due to network failures.

Here's a **Flask** example demonstrating idempotency for `PUT`, `DELETE`, and `POST` using SQLite and SQLAlchemy.

---

### **Scenario:**  
- We have an API for managing users (`id`, `name`).
- `PUT /users/<id>` ensures **idempotent updates**.
- `DELETE /users/<id>` ensures **idempotent deletion**.
- `POST /users` demonstrates **non-idempotent** behavior.

---

### **Flask Application with Idempotency Handling**
```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

# Initialize database
with app.app_context():
    db.create_all()

# ✅ IDEMPOTENT: PUT (Update or Create)
@app.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)
    
    if user:  # If user exists, update it
        user.name = data["name"]
    else:  # If user doesn't exist, create it (still idempotent)
        user = User(id=user_id, name=data["name"])
        db.session.add(user)

    db.session.commit()
    return jsonify({"id": user.id, "name": user.name}), 200

# ✅ IDEMPOTENT: DELETE (Always results in resource absence)
@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.get(user_id)
    
    if user:  # Delete if exists
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "User deleted"}), 200
    else:  # If already deleted, response remains same
        return jsonify({"message": "User not found"}), 200

# ❌ NON-IDEMPOTENT: POST (Creates new entry every time)
@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    new_user = User(name=data["name"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"id": new_user.id, "name": new_user.name}), 201

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
```

---
