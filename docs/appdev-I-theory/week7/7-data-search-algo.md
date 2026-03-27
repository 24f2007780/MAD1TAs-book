# Data search
`O()` notation means "order of" (approximately)

:::details $O(1) \text{ CONSTANT TIME independent of input size}$
- excellent direct access but does not even traverse through the data. Examples:
    - Lookup a value in **Hash table** (hope that hash output is an unoccupied index so no **collisions**)
    - Access ith element of array at `a[i]`
    - Push an element to from end of linked list or array.
:::

:::details $O(\log_2 N) \text{ grows slowly LOGARITHMIC with input, best in practice}$
- Each step halves the search space
- **Binary search for a number "X" in sorted array**: look at middle element in array, 
	- greater than "X"" → search in lower half
	- smaller than "X"→ search in upper half
- 10,00,000 takes around 20 steps $\log_2{1000000}$
- operations in balanced tress (AVL, Red-Black)
:::

:::details $O(N) \text{ LINEAR - baseline }$
- Must examine each element once.
- Search of element in **unsorted array/linked list**: 
    - start from beginning
    - stepwise compare each element
    - STOP if found and return
- Finding Maximum or Minimum of the list.
:::

:::details $O(N^k) \text{ POLYNOMIAL - runtime grows as power of N}$
- $O(N^2)$ → double nested loops
```py
for user in users:
    for user[0] in user:
``` 
- bubble, selection, insertion sort [to know more if interested](https://pdsaiitm.github.io/week-2/week-2.html#Sorting-Algorithms)
- Matrix multiplication (naive)
- good for small inputs
:::

:::details $O(k^N) \text{ EXPONENTIAL }$
- runtime doubles (or worse) with each additional input. So only feasible for *very small* $N$
- generating all subsets, recursive Fibonacci (without memoization), brute-force recursion
- 
:::


![](https://miro.medium.com/0*cKsIBkGxRWujTm_U.jpg)

## Arrays
- fixed size (must allocate **memory** in advance), so adding new entries require resizing
- **Maintain sort while inserting**: 
    - find correct location
    - shift all further elements one to the right
    - creates a gap → insert
- **delete** 
    - remove the element
    - shift all entries left by 1 step
- **search:**
    - **Unsorted** $O(N)$
    - **Sorted** $O(\log_2 N)$ by using binary search

## Binary Search tree
- Maintains sorted order dynamically
- Each node:
    - Left → smaller values
    - Right → larger values
- We need BST as sort by growth of tree  
    - average search → $O(\log N)$
    - Worst case (skewed tree) → $O(N)$
- No shifting required for `insert/delete`

![](https://upload.wikimedia.org/wikipedia/commons/9/9b/Binary_search_tree_example.gif)

### Self-balancing trees
BST can become skewed (like a linked list) → loses efficiency so:
    - `AVL Tree`
    - `Red-Black Tree`
    - `B-Tree` (used in databases)
- Guarantee: $O(\log N)$ for search, insert, delete

### Hash table 
- Uses hash function to get an index. 
- Direct access to data 
- Average → $O(1)$ complexity <span style="color:rgb(181, 118, 244)">very fast lookup</span>
- If the index is already occupied, then worst case (collisions) → $O(N)$
- Ideal for key-value storage but no ordering
- Poor for range queries

## Summary Table

| Complexity | Name        | Growth Rate      | Example Use Case              |
| ---------- | ----------- | ---------------- | ----------------------------- |
| O(1)       | Constant    | No growth        | Array access, hash lookup     |
| O(log N)   | Logarithmic | Very slow growth | Binary search, balanced trees |
| O(N)       | Linear      | Proportional     | Linear search                 |
| O(N²)      | Quadratic   | Fast growth      | Bubble sort                   |
| O(N³)      | Cubic       | Very fast growth | Matrix operations             |
| O(k^N)     | Exponential | Explosive growth | Brute-force recursion         |
