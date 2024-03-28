---
layout: post
title: Advanced NoSQL in Python for Data Science
---

Introduce NoSQL for data science.


# Why NoSQL?

## Limits of Relational Databases

**Features** of relational databases

- records are organized into tables
- rows are identified by unique keys
- data spans, and can be joined easily
- transactions are **ACID**-compliant
- data models are normalized

About ACID:
- Atomicity 原子性
- Consistency 一致性
- Isolation 隔离性
- Durability 持久性
  
**Advantages**

- used across domains
- normalized data
- comprehensive querying
- widely supported

**Disadvantages**

- fixed schemas
- costly to join tables
- limited data structures
- difficult to scale


## NoSQL

- denormalize data
- design for incremental scalability
- relax ACID constraints
- support data sharding
- **new ways** to query!!


## Types of NoSQL

1. Key-Value: simplest form, based on key-value or dictionary data structures, useful for caching but have limited use in data science
2. Document: store multiple key-value pairs in a document, documents corresponds to rows, keys are scalars, values can be complex
3. Wide-column: most like relational DBs, columns are not fixed, data is denormalized, value can be complex as well
4. Graph: network of connected entities, entities are linked by edges, each entity/edge has properties, query on properties and links


## Advantages of NoSQL (with DS)

- Scales to large data sets
- flex schemas
- high performance (distributed data)
- consistent (eventual consistency)


## When perform DS tasks with NoSQL

- collect, filter and restructure
- store
- retrieve and aggregate
- analyze

# Perform Common DS Tasks with NoSQL Databases

## Preparation

Collection:  
- multiple data sources
- frequency of updates
- consolidation rules (missing data, linking, dirty data ...)
- data retention (detect missing data, interpolate, verify business rules, remove dirty data ...)
- data volumes


## Exploration

Metrics, visualizations ...

## Building models

## Applying models

PMML (Predictive Modelling Markup Language) can be used for sharing models between tools. 


# Document Database for Data Science

Documents are
- set of key-values
- optional indexes
- attributes vary across documents
- values can be complex

Structures
- complex structures
- allow for hierarchical organization
- useful for denormalizing

## JSON Structures

- Simple for machine and human
- begin with `{`, followed by one/more key-value pair `string : value`, end with `}`
- keys are typically strings
- values can be strings, numbers, booleans, arrays and other embedded JSON objects
  
![image](https://github.com/LinyiGuo96/LinyiGuo96.github.io/assets/51500878/1ba0f763-c877-4780-8961-c9fb2967427b)

Denormlized version: 
![image](https://github.com/LinyiGuo96/LinyiGuo96.github.io/assets/51500878/3bc23b05-f72e-4865-bd36-a847a4d68f93)


## Preparation

- Import csv and json libraries
- Use csv.DictReader to read lines into Python dictionaries and store in a list
- Use json.dump to map a list of dictionarties to json

But we can also use `DB Utlity` such as `mongoimport` in `MongoDB`.

NoSQL commands

- `Find`: selects documents in a collection and return a `cursor` to them
- `FindOne`: similar to `find` but returns a single document
- `Aggregate` (in mongodb): matching and grouping



