---
comments: true
layout: post
title: Common Data Structures
subtitle: last update 2024-05-03
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

For binary tree:

|Operation |Complexity |
| :------ | :------ |
| search | O(n)|
| insert | O(1) if parent root is known, O(n) if unknown|
| delete | O(1) / O(n) |
| traversal | O(n) |
| depth | O(n) |


For binary search tree:

|Operation |Complexity |
| :------ | :------ |
| search | O(n) if unbalanced, O(logn) if balanced |
| insert | O(n) / O(logn)|
| delete | O(n) / O(logn) |
| traversal | O(n) |
| depth | O(n) |

_A balanced Binary Search Tree (BST) is a type of binary tree where the heights of the left and right subtrees of every node differ by at most one, ensuring that the tree remains balanced. The primary advantage of a balanced BST is that it guarantees logarithmic time complexity for search, insertion, and deletion operations, even in the worst case scenario._


# Heap

A Heap is a special Tree-based data structure in which the tree is a complete binary tree. There are mainly two types: min-heap and max-heap. 

- Min-Heap: In a min-heap, the root node contains the smallest element, and for every parent node, the value of the parent is less than or equal to the values of its children.  
- Max-Heap: In a max-heap, the root node contains the largest element, and for every parent node, the value of the parent is greater than or equal to the values of its children.  

The common operations and complexities are

|Operation |Complexity |
| :------ | :------ |
| insert | O(logn)|
| remove | O(logn), for the min/max |
| search | O(1), for min/max|
| extract | O(logn), remove and return the min/max |

# Tries

Aka prefix tree, is a tree-like data structure used to strore a dynamic set of **strings** where keys are usually strings. It provides fast retrieval, and is mostly used for searching words in a dictionary, providing auto suggestions in a search engine, and even for IP routing.

The common operations and complexities are

|Operation |Complexity |
| :------ | :------ |
| insert | O(m), m is the length of insterted string|
| remove | O(m) |
| search | O(m) |
| Prefix search | O(p+k), where p is prefix, k is the number of strings |


# Graphs

A graph is a set of nodes that are connected to each other in the form of a network. Based on this definition, all tree structures we talked about above, they are all graphs but we usually don't say that. In graphs, nodes are also called vertices, and nodes are connected by edges.

Types of Graphs:
- Undirected Graph (edges have no direction)
- Directed Graph

In a programming language, graphs can be represented using two forms:
- Adjacency Matrix 
- Adjacency List 

Common graph traversing algorithms:
- Breadth First Search
- Depth First Search

The common operations and complexities really depends on situations. 


