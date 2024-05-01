---
layout: post
title: Common Data Structures
subtitle: last update 2024-04-30
---

# _Preface_

_The motivation behind this blog is coming from my preparation for software/data engineer interviews. If you are an experienced expert, please go watch some YouTube videos so you won't waste a few minutes here (just a joke). If you find there is anything wrong, please do not hesitate to let me know, email provided at the bottom._

_The data structures below might not be a lot, but they are the common ones that professionals use in the real coding/programming projects. They are not just useful for the SDE/DE roles, for any jobs related to coding/programming/algorithms, they will be very handy!_

# Content

1. [Arrays](#arrays)
2. [LinkedLists](#linkedlists)
3. [HashMaps](#hashmaps)
4. [Queues](#queues)
5. [Trees](#trees)
6. [Heap](#heap)
7. [Tries](#tries)
8. [Graphs](#graphs)


# Arrays

Perhaps the most fundamental one. It's a collection of elements with the same data type. People can easily access any element with an index.

When it comes to the memory allocation, one array (say a bunch of numbers) is saved in a single section, which makes it quite efficient if we just want to access array. It's different from the linked list, which I will talk about later.

The common operations and complexities are

|Operation |Complexity |
| :------ | :------ |
| access by index | O(1)|
| insert by index | O(1), if insert to the end; O(n), if insert to the start |
| delete by index | O(1), if delete the end; O(n), if delete the start |
| search | O(n) for linear search (1 by 1); O(logn) for binary search on a sorted array |
| sort | O(nlogn) or O(n^2) depend on the sorting algorithm |

Arrays can be multiple dimensions as well, like 2-D array.


# LinkedLists

Linked list is also a linear data structure like array, but it differs in the memory allocation, because of its internal structure. 

A linked list is a chain of nodes, and each node contains information such as data and a pointer to the next node in the chain. Therefore, each node is saved separately in the memory, one node will point to another one in the memory saving. It is used to implement file systems, hash tables and adjacency lists.

The common operations and complexities are

|Operation |Complexity |
| :------ | :------ |
| access by index | O(n), have to start from the beginning|
| insert by index | O(1), if you have a reference to the node at the insertion point; O(n), if you don't then need to traverse the list |
| delete by index | O(1), if you have a reference to the node at the insertion point; O(n), if you don't then need to traverse the list |
| search | O(n)|
| reverse | O(n), traverse the entire list to adjust the pointers |
| merge | O(1) |

Double linked list is the two-way linked list, please feel free to check this structure.

# HashMaps

Same as dictionary in Python, hashmaps are composed by key-value pairs, and it provides an efficient retrieval of values based on the key. In another word, it uses hashing/hash function to map keys to values, which again, makes hashmaps a more efficient way to search. 

The common operations and complexities are

|Operation |Complexity |
| :------ | :------ |
| insert | O(1)|
| remove | O(1)|
| search | O(1)|


# Queues

Queue is another linear data structure that stores the element in a sequential manner, which follows the first-in-first-out (FIFO) principle. On the contrary, we have another data structure called **Stack**, following the last-in-first-out (LIFO) rule. 

The common operations and complexities are

|Operation |Complexity |
| :------ | :------ |
| add/enqueue | O(1), insert to the end|
| remove/dequeue | O(1), remove from the start|
| isEmpty | O(1)|
| top/peek | O(1), return the element at the front|

**deque** (double-ended queue) is another powerful data structure, but I will not cover it here. 

# Trees

Tree is a non-linear and a hierarchical data structure, it's a collection of nodes and each node stores a value and a list of reference to other nodes (aka `children`). The common trees include binary tree, binary search tree, balanced tree, trie, heap. 

Trees are extensively used in Artificial Intelligence and complex algorithms to provide an efficient storage mechanism for problem-solving.

|Operation |Complexity |
| :------ | :------ |
| traversal | |
| search | |
| insert | |
| delete | |


# Heap

# Tries

# Graphs
