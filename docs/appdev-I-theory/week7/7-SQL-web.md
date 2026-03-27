# Tabular (Relational) Databases

- Data is stored in **structured** tables (rows × columns)
- Each row = record, each column = attribute
- Example: MySQL, PostgreSQL
- ACID is maintained
- Complex queries (`JOIN, GROUP BY`)

## Indexing

- Tables with many columns → want to search quickly:
  - proper **INDEX** which is sorted or hashed representation of the specific column (same datatype like `string/int/date`)
- Instead of scanning all rows $(O(N))$, we reduce it to $O(\log N)$ or $O(1)$
- Trades extra storage + write cost for faster reads
- B-tree index supports prefix search `LIKE 'pattern%'` but NOT `LIKE '%pattern%'`
- Hash index supports only exact match (`=`), not pattern search  
- in-memory tables
  - ✅ equality comparisons ❌ range
  - ❌ `ORDER BY`
  - ❌ partial key prefix

:::details B-Tree Index

- Structure: Balanced tree (multi-level, disk-friendly)
- Search → $O(\log N)$
- Insert/Delete → $O(\log N)$
- Supports:
  - Equality: `=`
  - Range: `>, <, BETWEEN`
  - Prefix search: `LIKE 'abc%'`
- Does NOT support `LIKE '%abc'` efficiently:

Examples:

```sql
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM users WHERE name LIKE 'Yas%';
```

- Maintains sorted order
- Works well with magnetic disk (minimizes I/O)
:::

:::details Hash Index (supports exact matching `=` only)

- key ->hashed index
- does not support `< >` range queries, sorting `ORDER BY`, `LIKE` pattern or `MAD%` prefix queries
- `SELECT * FROM users WHERE name = 'Yashvi';` like for key-value lookups or in-memory database
:::


| Feature         | B-Tree Index                                     | Hash Index               |
| --------------- | ------------------------------------------------ | ------------------------ |
| Lookup          | avg $O(log N)$, best $O(1)$                      | avg $O(1)$, worst $O(N)$ |
| features        | range query `< >`, sorting, prefix `abc%` search | No                       |
| Exact Match `=` | Yes                                              | Yes                      |


![](https://www.nitendratech.com/wp-content/uploads/2020/01/cap_theorem-1024x873.png)

- Consistency
  - All copies have same value
  - <span style="color:rgb(152, 205, 137)">Strong: ACID (Atomicity, Consistency, Isolation, Durability) </span>
  - <span style="color:rgb(240, 96, 118)">Weak Consistency: BASE (Basically Available Soft-state Eventual consistency) </span>
- Availability
  - Reads & writes always succeed
  - Each client always can `RW`
- Partition-tolerance
  - System properties (consistency+/availability) hold even when network failures prevent some machines from communicating with others
  - A system can continue to operate in the presence of a network partitions

>[!NOTE]
>For any system sharing data, it is “impossible” to guarantee simultaneously all of these 3 properties
>either <span style="color:rgb(240, 96, 118)">C</span>or <span style="color:rgb(240, 96, 118)">A</span>to choose from (traditional DBMS prefers <span style="color:rgb(240, 96, 118)">C</span>over <span style="color:rgb(240, 96, 118)">A</span>& <span style="color:rgb(240, 96, 118)">P</span>)
>In almost all cases, you choose<span style="color:rgb(240, 96, 118)">A</span>over <span style="color:rgb(240, 96, 118)">C</span>(❌ in order processing)

- A consistency model determines rules for visibility & apparent order of updates
- Eventual consistency: When no updates for a long period of time, eventually all updates will propagate & all the nodes will be consistent


# NoSQL

![](https://miro.medium.com/v2/1*_BAww08iGuXsM-bij57eZA.png)

<div class="card">
<h3>📄Document Databases</h3>
<p>
<pre>MongoDB, Couchbase, Amazon DocumentDB</pre>
Store all related data together in a single document (denormalized).</p>
<p>Instead of multiple fixed size tables, a user and their borrowed books are stored together.</p>
<li>structured but each document has own structure unlike table</li>
<p><b>JSON key-value pairs</b>: obj, records, structs, lists, arrays, maps, dates</p>
<h5>Example Document</h5>
<pre>{ "user_id": "1", 
"name": "Krishna", 
"borrowed_books": [ 
	{ "book_id": "B1", "title": "DBMS", "date": "2026-03-01" }, 
	{ "book_id": "B2", "title": "OS", "date": "2026-03-10" } 
	] 
}</pre>
<img src="https://cs186berkeley.net/notes/assets/images/15-NoSQL/books.json.png">
<ul>
	<li>No JOIN needed</li>
	<li>Fast reads for user data</li>
	<li>No data duplication possible</li>
</ul>
<h5>Query Example</h5>
<pre>db.users.find({ user_id: "1" })</pre>
</div>

<div class="card">
<h3>🔑 Key-Value Stores</h3>
<pre>Redis, DynamoDB, Voldermort, Scalaris, BerkeleyDB, Memcache</pre>
<p>Store data as simple key-value pairs<br>(Typically implemented using hash tables (O(1)). Some systems may use trees for range queries.
)</p>
<p>Direct access using a unique key (like a dictionary).</p>
<h5>Example</h5>
<pre>"user:1" → "{name: Baskaran, books: [B1, B2]}" 
"book:1" → "{title: DBMS}" </pre>
<ul>
	<li>in-memory Extremely fast (O(1) lookup)</li>
	<li>Ideal for caching</li>
	<li>Cannot query inside values</li>
	<li>No relationships for complex data</li>
</ul>
<h5>Query Example</h5>
<pre>GET user:1 SET user:1 "{name: Puneet, books:[B1,B2]}"</pre></div>

<div class="card">
<h3>Column Stores</h3>
<pre>BigTable, Cassandra, HBase</pre>
<p>Data is stored as collections of <b>column families</b> (variable number of columns).</p> 
<p> 
Collections of column families (variable <i>#cols</i>) = <b>(key → value)</b>, where value is a <b>set of related columns</b>.<br> 
Each row/record contains ≥ 1 key-value pairs. </p> 
<h5> Example Table</h5> 
<table border="1" cellpadding="6"> <tr> <th>user_id (key)</th> <th>book_id</th> <th>borrow_date</th> </tr> <tr> <td>U101</td> <td>B1</td> <td>2026-03-01</td> </tr> <tr> <td>U101</td> <td>B2</td> <td>2026-03-10</td> </tr> </table> 
<ul> 
<li> Stores <b>sparse, sorted columns</b> efficiently</li>
<li>Scales to large datasets</li>
<li>Not ideal for transactional systems</li>
</ul>
<h5>Query Example</h5>
<pre>SELECT book_id, borrow_date 
FROM borrow_history 
WHERE user_id = '1'; </pre>
<img src="https://miro.medium.com/1*j1mNMkBAPJaeh5RoTdnyeQ.png">
</div>

<div class="card">
<h3>Graph Databases</h3>
<pre>OrientDB, Neo4J, Amazon Neptune, Info-grid</pre>
<p>
Data is represented as a graph:
<b>G = (V, E)</b>
</p>

<ul>
<li>V → Nodes (entities with properties/IDs)</li>
<li>E → Edges (relationships with labels/roles)</li>
</ul>

<p>
Both nodes and edges store <b>key-value properties</b>.
</p>
<p>Used for: <ul> 
<li>Social networks (friends, followers)</li> 
<li>Outgoing degree (number of relationships)</li>
 <li>Weighted edges (strength of connection)</li> 
 <li><b>Path finding</b> (shortest path, recommendations)</li> 
 </ul> </p>
 <h5>Example</h5>
<pre>(User: Alice) —BORROWED→ (Book: DBMS) 
(User: Alice) —FRIEND→ (User: Bob) </pre>
<ul>
<li>Best for relationship queries</li><li>Efficient traversal</li>
<li>Not ideal for simple tabular queries</li></ul>
<h5>Query Example (Cypher)</h5>
<pre>MATCH (u:User {name: "Alice"})-[:BORROWED]->(b:Book) 
RETURN b; </pre>
</div>

<div class="card">
<h3>⏱️ Time Series Databases (InfluxDB)</h3>
<pre>RRDTool, InfluxDB, Prometheus, elasticsearch, grafana</pre>
<p>Data organized by time (timestamps).</p>

<h5>Example</h5>

<table border="1" cellpadding="6">
<tr>
<th>time</th>
<th>user</th>
<th>books_borrowed</th>
</tr>
<tr>
<td>2026-03-01</td>
<td>U101</td>
<td>1</td>
</tr>
<tr>
<td>2026-03-02</td>
<td>U101</td>
<td>2</td>
</tr>
</table>

<ul>
<li>Efficient for monitoring and log analysis</li>
<li>Fast aggregation over time</li>
<li>Supports downsampling</li>
<li>Not limited general-purpose usage</li>
</ul>
<h5>Query Example</h5>

<pre>
SELECT AVG(books_borrowed)
FROM library_usage
WHERE time > now() - 7d;
</pre>

</div>

<div class="card">
<h3> SQL (Relational Model for Same Scenario)</h3>

<pre>SELECT u.name, b.title 
FROM Users u 
JOIN Borrow br ON u.user_id = br.user_id 
JOIN Books b ON b.book_id = br.book_id 
WHERE u.user_id = '1'; 
</pre>
<ul>
	<li>No data duplication</li>
	<li>Strong consistency (ACID)</li>
	<li>not requires JOIN (can be costly at scale)</li>
</ul>
</div>


## Scale-up vs Scale-out

- Scale-up
  - larger machine
  - ↑ RAM
  - faster network, processor
  - machine restart with each scale change
- Scale-out - multiple servers - hard to get consistency - cloud model auto scale-out - auto scale-up
  ![](https://assets.serverwatch.com/uploads/2023/06/fig_a-decision_tree_scale_up_or_scale_out.png)

# Security

**SQL injection:** validation before send to DB query (even b4 HTML or Javascript validation)

- known frameworks: servers with good track record, code audits
- Buffer overflows, input overflows (length of queries → client/server might crash) `google app engine`
- Update all patches on OS-network stack-server, encodings char sets

## HTTPS

client ← secure sockets → server

- **Server certificate:** DNS verified by trusted 3rd party, difficult to spoof, maths properties very ↓ probability of mistakes match.
- secure link for data transfer
- No validation/safety checks
- ↑performance overhead or ↓ caching (intermediate proxies can't read packets)

:::info Check the following links for more details:

- [NoSQL](https://www.ml4devs.com/en/articles/datastore-choices-sql-vs-nosql-database/)
- [documentation](https://dev.mysql.com/doc/refman/8.4/en/index-btree-hash.html)
- [Postgres](https://www.postgresql.org/docs/current/geqo.html)
- [Screencasts Intro to FTS](https://www.youtube.com/watch?v=9NQUZgU2mMA&list=PLOXyVgDYMn7exXum694qtcRv7K4joLsH0&index=17)
  :::
