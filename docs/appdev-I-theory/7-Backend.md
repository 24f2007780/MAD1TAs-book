---
tags:
  - MAD1
  - W7
date: 2025-04-24 14:25
syllabus: 
---

Links:
- [NoSQL](https://www.ml4devs.com/en/articles/datastore-choices-sql-vs-nosql-database/)
- [documentation](https://dev.mysql.com/doc/refman/8.4/en/index-btree-hash.html)
- [Postgres](https://www.postgresql.org/docs/current/geqo.html)
- [Screencasts Intro to FTS](https://www.youtube.com/watch?v=9NQUZgU2mMA&list=PLOXyVgDYMn7exXum694qtcRv7K4joLsH0&index=17)


### Memory Hierarchy
![](https://cn.edurev.in/ApplicationImages/Temp/1421638_a9fe7b34-1e74-45f4-a8ae-cbbeea02d22a_lg.png?w=360&dpr=2.6)
[ℹ️Magnetic disk animation](https://youtu.be/ngP6nSt_yAE)
SRAM → **Static** RAM              DRAM → **Dynamic** RAM
1. **Latency** time to read 1st value from storage location (↓ is better)
`Register < SRAM < DRAM < SSD < HDD`
2. **Density** $\frac{\text{no. of bits stored}}{\text{cost x unit area}}$ ↑
` Regs < SRAM < DRAM < SSD < HDD`
3. **Throughput** $\frac{\text{no. of bytes can be read}}{\text{second}}$ (↑ is better)
`DRAM > SSD > HDD`
`Register < SRAM < DRAM < SSD < HDD`

[list2node]

- On-chip `registers`: **10-100B**
	- `SRAM (L1, L2, L3 cache)` **0.1-1 MB**
		- `DRAM` **0.1-10 GB** working memory
			- solid-state disk `SSD` Flash **1-100 GB** <span style="color:rgb(152, 205, 137)"> ↑ high throughput </span> 
				- Magnetic disk (`HDD`) **0.1-10 TB** <span style="color:rgb(152, 205, 137)"> ↑High capacity </span> 


### Cold storage
- `Amazon Glacier, Google, Azure Cold/Archive storage classes` 
	- long term storage/backup Huge amount ❌ read very often	
	- ↑ durability, ↓ cost
	- can tolerate ↑ read latency (<48Hr)
- `optical, magnetic, holographic`


DRAM > SSD > HDD (regs, SRAM limited capacity)
$$\text{Bandwidth=(Clock Speed)×(Data Transfers per Clock)×(Bus Width in Bytes)×(Channels)}$$
$$\frac{800 \times 10^6 \times 8 \times 2 \times 2}{10^9}= \frac{25600}{1000}=25.6$$

[ℹ️Cores threading](https://cdn.hashnode.com/res/hashnode/image/upload/v1605989026367/G0PyS99Px.png)
## Data search

$$
\begin{aligned}
&O(1) \text{ CONSTANT TIME ind of input size, excellent but ❌ even does through data } \color{#6297D0} \text{Hash table of value \& check index (hope for unique index)}\\
&O(\log_2 N) \text{ grows slowly LOGARITHMIC with input, best in practical} \color{#6297D0} \text{ Binary search sorted array}\\
&O(N) \text{ LINEAR - baseline }\color{#6297D0} \text{search in unsorted array/linked list} \\
&O(N^k) \text{ POLYNOMIAL - ❌ good as input ↑}\\
&O(k^N) \text{ EXPONENTIAL very bad even for reasonably small inputs}
\end{aligned}
$$

![](https://miro.medium.com/0*cKsIBkGxRWujTm_U.jpg)

#### Binary Search tree
We need BST as sort by growth of tree but Self-balancing (tilt to 1 side grow downwards so `Red-Black, AVL, B-tree`):
- fixed size array 
- maintaining sorted order $O(N)$
- append needs new size 
- delete needs move all entries by 1 step
- Hash table if unique index → $O(1)$ 

![](https://upload.wikimedia.org/wikipedia/commons/9/9b/Binary_search_tree_example.gif)
### Databases
- Tables with many columns → want to search quickly → ✅ proper**INDEX** ↔ sorted ver of column (same datatype short string/int/date)
- Hash-index  ✅ `pattern%` ❌ `%pattern%` `like other_col`
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