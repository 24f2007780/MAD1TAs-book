# CRUD Operations
CRUD stands for:

* **C** – Create
* **R** – Read
* **U** – Update
* **D** – Delete

* Set of **actions** that define the complete life cycle of data. In the library system:

1. A book is **Created**.
2. Users **Read** book information many times.
3. Book details may be **Updated**.
4. Eventually, records may be **Deleted**.

## 1. CREATE Operation

The **Create** operation inserts a new record into a database table.
* Creates a new entry.
* The record must not already exist.
* The system checks for conflicts (e.g., duplicate primary keys).
* Mandatory fields must be provided (`nullable=False`)

#### Example 1: Adding a New Book

Suppose the library acquires a new book:

| book_id | title             | category |
| ------- | ----------------- | -------- |
| B4      | Operating Systems | CS       |

Before insertion:
1. The system checks whether `book_id = B4` already exists → reject insertion
2. Fields like `edition, publisher` are not provided but it's fine as they are optional 

#### Example 2: Creating a Borrow Entry

If student S102 borrows B2:

| student_id | book_id | borrow_date |
| ---------- | ------- | ----------- |
| S102       | B2      | 2024-02-01  |

System checks:
* Does student S102 exist?
* Does book B2 exist?
* Are foreign key constraints satisfied?

Only then is the record created.


# 2. READ Operation
The **Read** operation retrieves data from the database without modifying it.

- Examples: 
1. Get List of Students: the system retrieves all rows from the Students table.
2. Summary statistics for librarian dashboard: aggregation functions such as
- `COUNT` to get total number of books 
- `GROUP BY` to get number of books per category (maybe plot a histogram of same).


# 3. UPDATE Operation

* Record must already exist.
* Only specified fields are changed.
* Data integrity must be preserved.

#### Example 1: Changing Department

Suppose Rohan (S102) changes department from EE to CS.
* Locates record where `student_id = S102`.
* Updates only the dept column.

#### Example 2: Correcting a Borrow Date

Before:
| S101 | B1 | 2024-01-10 |

After correction:
| S101 | B1 | 2024-01-11 |

Only borrow_date field is modified.


# 4. DELETE Operation

The **Delete** operation removes records from the database.

#### Example 1: Removing a Student

If `student_id = S103` leaves the institution:
The system must ensure:

* Related `BorrowedBooks` entries are handled.
* Either prevent deletion (if constraints exist) or cascade delete related records.

### Example 2: Removing a Borrow Record

When a book is returned, the borrow entry may be deleted:

Delete:
| S101 | B2 | 2024-01-15 |


#### Database Optimization
1. **Read-Heavy Systems**: Large number of queries, few insertions or updates.
Optimization: Indexing, Caching

2. **Write-Heavy Systems**: Frequent inserts and updates
Optimization: Efficient transaction logging, Data durability mechanisms.


## Summary

CRUD operations form the foundation of database systems.

* Create ensures new, valid records are inserted.
* Read retrieves and analyzes stored data.
* Update modifies existing records while preserving integrity.
* Delete removes records when necessary.

## API – Application Programming Interface

An API (Application Programming Interface) is a standardized way for a client (frontend / mobile app / external system) to communicate with a server.

The client only knows API endpoints

The client does NOT know:

Database schema

Internal business logic

Server implementation details

A Controller groups related actions logically:
| Controller             | Actions                                      |
| ---------------------- | -------------------------------------------- |
| BookController         | createBook, getBooks, updateBook, deleteBook |
| StudentController      | createStudent, getStudents                   |
| BorrowController       | createBorrow, returnBook                     |
| NotificationController | sendEmail, sendAlert                         |

The server exposes structured URLs and HTTP methods

<LibraryAPIExample />