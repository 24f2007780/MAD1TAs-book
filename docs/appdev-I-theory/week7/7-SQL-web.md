
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
- Hash-index prefers `pattern%` and not `%pattern%` `LIKE other_col`
	- in-memory tables
	- ✅ equality comparisons ❌ range
	- ❌ `ORDER BY`
	- ❌ partial key prefix


# NoSQL
![](https://miro.medium.com/v2/1*_BAww08iGuXsM-bij57eZA.png)
**ACID**: Atomic, Consistent (might sacrifice → eventual), Isolated, Durable
**BASE**: Basically Available, Soft State, Eventually Consistent (high available replication) ❌ Financial ✅ Social media ✅ E-com non-fin parts

[list2node]
- #### Document Databases
	`MongoDB, Couchbase, Amazon DocumentDB` ❌ fixed size table (free-from nesting & structure)
	- JSON k-v pairs: obj, records, structs, lists, arrays, maps, dates
	- structured but each doc has own structure![](https://cs186berkeley.net/notes/assets/images/15-NoSQL/books.json.png)
- #### key-value
	python dictionary, C++ ordered map `DynamoDB, Voldermort, Scalaris,Redis, BerkeleyDB, Memcache`
	- Store using search trees or hash table, ≥ 1 attributes(1/multi-valued)
	- ✅ key lookup ❌ range-type relation queries 
	- ✅**in-memory** queries VERY FAST ❌ complex data objects
- #### column stores
	- ✅Collections of column families(variable $\#\text{cols}$)= $\text{(key,}\underbrace{\text{value)}}_\text{set of related cols}$; each row/record has ≥ 1 kv pairs  `BigTable, Cassandra, HBase`
	  all sparse sorted values of given column family (in 1 disk) very FAST	![](https://miro.medium.com/1*j1mNMkBAPJaeh5RoTdnyeQ.png)
- #### Graphs
	- $G=\overbrace{\underset{\text{property/ID}}{\underset{\downarrow}{(V}} \underset{\text{label/roles}}{\underset{\downarrow}{,E)}}}^\text{k-v pair on both}$social-network outgoing degrees (relations), weight of edges nodes **Path finding**
	- `OrientDB, Neo4J, Amazon Neptune, Info-grid`
- #### Time Series Databases
	- optimized for time-stamped or time series data `log performance analysis, monitoring`
	- `RRDTool, InfluxDB, Prometheus, elasticsearch, grafana`
	- are tracked, monitored, down-sampled, & aggregated over time

- **Redundancy**
	- multiple copies as backup if 1 master fails
- **Replication**
	- ❌ backup but multiple sources of ~ data **server cluster in high speed network in ~ datacenter** for load balancing(❌ overload) but geographically dist (Latency → ↓ consistency)

## Scale-up vs Scale-out

- Scale-up
	- larger machine
	- ↑ RAM
	- faster network, processor
	- machine restart with each scale change
- Scale-out
	- multiple servers
	- hard to get consistency
	- cloud model auto scale-out
	- auto scale-up
![](https://assets.serverwatch.com/uploads/2023/06/fig_a-decision_tree_scale_up_or_scale_out.png)

# Security
**SQL injection:** validation before send to DB query (even b4 HTML or Javascript validation)
- known frameworks ✅ servers with good track record, code audits
- Buffer overflows, input overflows (length of queries → client/server might crash) `google app engine`
- Update all patches on OS-network stack-server, encodings char sets

## HTTPS
client ← secure sockets → server
- **Server certificate:** DNS verified by trusted 3rd party, difficult to spoof, maths properties very ↓ probability of mistakes match.
- ✅ secure link for data transfer❌ validation/safety checks 
- ↑performance overhead or ↓ caching (intermediate proxies can't read packets)

:::info Check the following links for more details:
- [NoSQL](https://www.ml4devs.com/en/articles/datastore-choices-sql-vs-nosql-database/)
- [documentation](https://dev.mysql.com/doc/refman/8.4/en/index-btree-hash.html)
- [Postgres](https://www.postgresql.org/docs/current/geqo.html)
- [Screencasts Intro to FTS](https://www.youtube.com/watch?v=9NQUZgU2mMA&list=PLOXyVgDYMn7exXum694qtcRv7K4joLsH0&index=17)
:::