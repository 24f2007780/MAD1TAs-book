

### **JSON vs YAML**
| Feature | JSON (JavaScript Object Notation) | YAML (YAML) |
|---------|----------------------------------|--------------------------------|
| **Format** | Text-based, structured like JavaScript objects | Human-readable, uses indentation |
| **Data Types** | Supports numbers, strings, lists, dictionaries (objects) | Supports all JSON types + complex types (e.g., multiline strings) |
| **Syntax** | Uses `{}` for objects and `[]` for lists | Uses indentation instead of brackets |
| **Readability** | Machine-friendly, compact | Human-friendly, clean format |
| **Usage** | APIs, web services, databases | Config files (Docker, Kubernetes, Ansible) |
| **Example** | `{"name": "Alice", "age": 30}` | `name: Alice\nage: 30` |

📌 **JSON is used for data exchange (APIs, web apps), whereas YAML is used for configuration files.**



### **🔹 Testing with Thunder Client or Postman**
1. **GET Request**
   - URL: `http://127.0.0.1:5000/user/1`
   - Response:  
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
   
2. **POST Request**
   - URL: `http://127.0.0.1:5000/user/1`
   - Headers: `{ "Content-Type": "application/json" }`
   - Body:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
   - Response:
     ```json
     {
       "message": "User added",
       "data": {
         "name": "John Doe",
         "email": "john@example.com"
       }
     }
     ```
   
3. **PUT Request**
   - URL: `http://127.0.0.1:5000/user/1`
   - Headers: `{ "Content-Type": "application/json" }`
   - Body:
     ```json
     {
       "name": "Jane Doe",
       "email": "jane@example.com"
     }
     ```
   - Response:
     ```json
     {
       "message": "User updated",
       "data": {
         "name": "Jane Doe",
         "email": "jane@example.com"
       }
     }
     ```
   
4. **DELETE Request**
   - URL: `http://127.0.0.1:5000/user/1`
   - Response:
     ```json
     {
       "message": "User deleted"
     }
     ```

---

### **🔹 Key Takeaways**
✅ **Flask-RESTful** organizes APIs using class-based resources.  
✅ **SQLAlchemy** provides ORM support for interacting with the database.  
✅ **GET, POST, PUT, DELETE** enable full CRUD functionality.  
✅ **Thunder Client/Postman** can be used to test API requests.  
✅ **`db.create_all()`** ensures the database is created before running.  

Test the API with curl:


#### Best Practices:

1. Use Nouns for Resources
Good: `/users, /posts`
Bad: `/getUsers, /createPost`
2. Version Your API
`/api/v1/users`
`/api/v2/users`
3. Handle Errors Consistently
`{"error": "Not Found", "message": "User 123 not found", "status_code": 404}`
4. Use Query Parameters for Filtering
`/api/posts?status=published&category=tech`
5. Implement Pagination
`/api/posts?page=2&limit=10`


### **Testing the API**
#### **1. PUT Request (Idempotent)**
```bash
curl -X PUT http://127.0.0.1:5000/users/1 -H "Content-Type: application/json" -d '{"name": "Alice"}'
```
- Running it multiple times **does not create duplicate users**, only updates user 1.

#### **2. DELETE Request (Idempotent)**
```bash
curl -X DELETE http://127.0.0.1:5000/users/1
```
- Running it multiple times ensures user 1 is **deleted or already absent**.

#### **3. POST Request (Non-Idempotent)**
```bash
curl -X POST http://127.0.0.1:5000/users -H "Content-Type: application/json" -d '{"name": "Bob"}'
```
- Running it multiple times **creates new users** (e.g., Bob with different IDs).



### **Key Takeaways**
✅ `PUT` is **idempotent** → No matter how many times you update user 1, the result remains the same.  
✅ `DELETE` is **idempotent** → User 1 remains deleted regardless of retries.  
❌ `POST` is **not idempotent** → Creates a **new user every time**.

::: info [Tools helpful for TDS course as well](https://tds.s-anand.net/2025-01/rest-apis/):

- `Postman/Thunder Client`: API testing and documentation
- `Swagger/OpenAPI`: API documentation
- `HTTPie`: Modern command-line HTTP client
- `JSON` Schema: API request/response validation

- [Google API design guide](https://cloud.google.com/apis/design)
- [REST API Best practices](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

:::

Complete Flask-RESTful Example (Library CRUD API)
```py
from flask import Flask
from flask_restful import Resource, Api, reqparse, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///library.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
api = Api(app)

class Student(db.Model):
    student_id = db.Column(db.String(4), primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    dept = db.Column(db.String(5))


class Book(db.Model):
    book_id = db.Column(db.String(4), primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(20))
    edition = db.Column(db.String(10))
    publisher = db.Column(db.String(100))


class BorrowedBook(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.String(4), db.ForeignKey('student.student_id'))
    book_id = db.Column(db.String(4), db.ForeignKey('book.book_id'))
    borrow_date = db.Column(db.String(20))


with app.app_context():
    db.create_all()

student_parser = reqparse.RequestParser()
student_parser.add_argument("name", required=True)
student_parser.add_argument("dept")

book_parser = reqparse.RequestParser()
book_parser.add_argument("title", required=True)
book_parser.add_argument("category")
book_parser.add_argument("edition")
book_parser.add_argument("publisher")

borrow_parser = reqparse.RequestParser()
borrow_parser.add_argument("student_id", required=True)
borrow_parser.add_argument("book_id", required=True)
borrow_parser.add_argument("borrow_date", required=True)


student_fields = {
    "student_id": fields.String,
    "name": fields.String,
    "dept": fields.String
}

book_fields = {
    "book_id": fields.String,
    "title": fields.String,
    "category": fields.String,
    "edition": fields.String,
    "publisher": fields.String
}

borrow_fields = {
    "student_id": fields.String,
    "book_id": fields.String,
    "borrow_date": fields.String
}


class StudentResource(Resource):

    @marshal_with(student_fields)
    def get(self, student_id):
        student = Student.query.get(student_id)
        if not student:
            return {"message": "Student not found"}, 404
        return student

    def post(self, student_id):
        args = student_parser.parse_args()

        if Student.query.get(student_id):
            return {"message": "Student already exists"}, 400

        student = Student(
            student_id=student_id,
            name=args["name"],
            dept=args["dept"]
        )

        db.session.add(student)
        db.session.commit()

        return {"message": "Student created"}, 201

    def put(self, student_id):
        args = student_parser.parse_args()

        student = Student.query.get(student_id)

        if not student:
            return {"message": "Student not found"}, 404

        student.name = args["name"]
        student.dept = args["dept"]

        db.session.commit()

        return {"message": "Student updated"}

    def delete(self, student_id):

        student = Student.query.get(student_id)

        if not student:
            return {"message": "Student not found"}, 404

        db.session.delete(student)
        db.session.commit()

        return {"message": "Student deleted"}



class BookResource(Resource):

    @marshal_with(book_fields)
    def get(self, book_id):

        book = Book.query.get(book_id)

        if not book:
            return {"message": "Book not found"}, 404

        return book

    def post(self, book_id):

        args = book_parser.parse_args()

        if Book.query.get(book_id):
            return {"message": "Book already exists"}, 400

        book = Book(
            book_id=book_id,
            title=args["title"],
            category=args["category"],
            edition=args["edition"],
            publisher=args["publisher"]
        )

        db.session.add(book)
        db.session.commit()

        return {"message": "Book added"}, 201

    def put(self, book_id):

        args = book_parser.parse_args()

        book = Book.query.get(book_id)

        if not book:
            return {"message": "Book not found"}, 404

        book.title = args["title"]
        book.category = args["category"]
        book.edition = args["edition"]
        book.publisher = args["publisher"]

        db.session.commit()

        return {"message": "Book updated"}

    def delete(self, book_id):

        book = Book.query.get(book_id)

        if not book:
            return {"message": "Book not found"}, 404

        db.session.delete(book)
        db.session.commit()

        return {"message": "Book deleted"}


class BorrowResource(Resource):

    @marshal_with(borrow_fields)
    def get(self):
        return BorrowedBook.query.all()

    def post(self):

        args = borrow_parser.parse_args()

        student = Student.query.get(args["student_id"])
        book = Book.query.get(args["book_id"])

        if not student or not book:
            return {"message": "Invalid student or book"}, 400

        borrow = BorrowedBook(
            student_id=args["student_id"],
            book_id=args["book_id"],
            borrow_date=args["borrow_date"]
        )

        db.session.add(borrow)
        db.session.commit()

        return {"message": "Borrow record created"}, 201



api.add_resource(StudentResource, "/students/<string:student_id>")
api.add_resource(BookResource, "/books/<string:book_id>")
api.add_resource(BorrowResource, "/borrow")


if __name__ == "__main__":
    app.run(debug=True)

3. API Endpoints
Method	Endpoint	Description
GET	/students/<id>	Read student
POST	/students/<id>	Create student
PUT	/students/<id>	Update student
DELETE	/students/<id>	Delete student
GET	/books/<id>	Read book
POST	/books/<id>	Create book
PUT	/books/<id>	Update book
DELETE	/books/<id>	Delete book
GET	/borrow	List borrowed books
POST	/borrow	Create borrow record
4. Example CURL Requests
Create Student
curl -X POST http://127.0.0.1:5000/students/S104 \
-H "Content-Type: application/json" \
-d '{"name":"Kunal","dept":"ME"}'
Get Student
curl http://127.0.0.1:5000/students/S104
Borrow Book
curl -X POST http://127.0.0.1:5000/borrow \
-H "Content-Type: application/json" \
-d '{"student_id":"S101","book_id":"B1","borrow_date":"2024-02-01"}'