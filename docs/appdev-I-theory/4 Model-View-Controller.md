---
tags:
  - MAD1
  - W4
date: 2025-04-24 14:25
syllabus: 
---

![](https://www.researchgate.net/profile/Dennise-Adrianto/publication/320211937/figure/fig5/AS:668659265597446@1536432200280/Model-View-Controller-Architecture-Source-Pressman-2010.png)
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

[list2table]
- ## Spreadsheets
	- **Lookup \& Cross-Referencing Sheets:** Harder to perform lookups across multiple sheets or files.<br>Functions like `VLOOKUP`, `HLOOKUP`, and `INDEX/MATCH` exist but become complex with scale.<br>No built-in referential integrity; manual effort required.
	- **Stored Procedures \& Functionality:** Limited to basic formulas and scripting (e.g., Google Apps Script, VBA in Excel).<br>Not designed for complex business logic or reusable procedures.
	- **Atomic Operations:** No clear definition or support for atomic (all-or-nothing) operations.<br>Changes are cell-based and can be partially applied.
- ## RDBMS (SQL)
	- **Lookup \& Cross-Referencing Sheets:** Powerful JOIN operations for cross-referencing tables.<br>Foreign keys enforce data relationships and integrity.
	- **Stored Procedures \& Functionality:** Supports robust stored procedures, triggers, and functions for encapsulating business logic.<br>Can automate, validate, and process data efficiently within the database.
	- **Atomic Operations:** Full support for atomic transactions (ACID properties).<br>Ensures data consistency and rollback on failure.
- ## NoSQL (MongoDB, CouchDB)
	- **Lookup \& Cross-Referencing Sheets:** Document-based; cross-referencing is possible but not as straightforward as SQL JOINs.<br>Data often denormalized for performance.
	- **Stored Procedures \& Functionality:** Generally, no concept of stored procedures.<br>Some systems (e.g., MongoDB) allow server-side scripts, but functionality is limited compared to SQL.
	- **Atomic Operations:** Varies by system:<br>MongoDB supports atomic operations at the document level.<br>CouchDB provides atomicity at the document level; multi-document transactions are complex or unsupported.


