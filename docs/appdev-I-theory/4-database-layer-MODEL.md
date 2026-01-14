---
tags:
  - MAD1
  - W4
date: 2025-04-24 14:25
syllabus: 
---


## MVC (Model-View-Controller) 
![](./static/Model-View-Controller-Architecture.png)*Model-View-Adapter/Presenter/Viewmodel, Hierarchical MVC, Presentation-Abstraction-C*  
design pattern was originally created by *Trygve Reenskaug* while working at *Xerox PARC Smalltalk-80*(GUI design) in the late 1970s. A way to structure interactive applications by separating concerns into distinct components

:::tabs

== Model
- Core data to be stored for the application
- Databases; indexing for easy searching, manipulation

== View
- User-facing side of application
- Interfaces for finding ℹ️info

== Controller
- “Business logic” - how to manipulate data

:::

User uses controller→ to manipulate model→ that updates view→ that user sees

```python
names = {0: 'Yashvi', 1:'Baskaran', 2:'Shriya'}
courses = {0: 'DataSci', 1:'Intro to EE circuits', 2:'Quantum Mechanics'}
rels = [(0,0),(1,2),(0,2),(2,1)]
class Student:
	idnext = 0
	def __init__(self, name):
		self.name = name
		self.id = Student.idnext
		Student.idnext +=1
```
1. Server crashes → on restart → load back from saved disk `csv/serialised pickle`
2. Data entry errors → less likely
3. ❌ Duplicates
4. Auto-initialize → ✅ unique but preferred is tell underlying DB as multiple users+load

| Feature                        | **Spreadsheets (Excel / Google Sheets)**                                                                                                     | **RDBMS (SQL Databases)**                                                               | **NoSQL (MongoDB, CouchDB)**                                                             |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Lookup & Cross-Referencing** | Possible using formulas like `VLOOKUP`, `INDEX/MATCH`, but becomes **harder** as data grows or multiple files | Powerful **JOINs**; relationships are clearly defined using **foreign keys** | Cross-referencing **not as natural** as `JOIN`; data is often duplicated (for performance) |
| **Data Relationships**         | Not automatic relationships; users must manually ensure   | **Strongly enforced** relationships using constraints                                   | Relationships are usually handled **in application code**, not the database              |
| **Stored Procedures / Logic**  | Limited to basic formulas & scripts (VBA, Google Apps Script)    | **Rich support**: stored `PROCEDURE`, `TRIGGER`, `FUNCTION`                                | Usually **no stored procedures**; limited server-side scripting                          |
| **Business Logic Support**     | Not suitable for complex or reusable logic   | Ideal for business rules, validations, automation                                       | Logic mostly lives in the application layer                                              |
| **Atomic Operations**          | No true atomicity; partial updates can occur                                                                                                 | **Fully atomic (ACID transactions)**                                                    | Atomic at **document level only**   |
| **Failure Handling**           | Manual recovery needed   | Automatic rollback on failure    | Rollback across multiple documents is limited                                            |
| **Scalability**                | Poor for large datasets                                                                                                                      | Scales well vertically, moderately horizontally                                         | Designed for **horizontal scaling**                                                      |
| **Best Use Case**              | Small data, analysis, quick calculations                                                                                                     | Structured data, ERP, banking like *Paypal, Visa, Oracle*      | Big data, flexible schemas, high-traffic apps like *Instagram, Netflix, Youtube, Twitter, Swiggy*   |
