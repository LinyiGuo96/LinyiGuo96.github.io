---
comments: true
layout: post
title: ElasticSearch
---

# Getting Started with Elasticsearch: A Practical Introduction

Elasticsearch is a powerful, distributed search and analytics engine used for a wide range of use cases like log analysis, full-text search, and business intelligence. This post covers the fundamentals, local setup, querying data, and how to visualize your results.

---

## What is Elasticsearch?

- **Elasticsearch** is an open-source, distributed, RESTful search engine based on Apache Lucene.
- Designed for full-text search, structured search, analytics, and near real-time data retrieval.
- Used in products like the ELK stack (Elasticsearch, Logstash, Kibana).


> What is REST/RESTful?  
> Representational State Transfer, a style for building scalable APIs using HTTP verbs (GET, POST, etc.). Elasticsearch exposes a RESTful API.

---

## Core Concepts

- **Cluster**: A group of nodes (servers) working together.
- **Node**: An instance of Elasticsearch running on a machine.
- **Index**: Like a database in RDBMS; stores documents.
- **Document**: A JSON object representing the basic unit of data.
- **Shard**: A horizontal partition of an index.
- **Replica**: Copies of shards for fault tolerance and high availability.

---

## Querying Data with Query DSL

**Query DSL** (Domain-Specific Language) is Elasticsearch’s powerful, JSON-based language for building queries.

Example queries:

- **Match Query** (full-text search):
    ```json
    {
      "query": {
        "match": {
          "message": "error"
        }
      }
    }
    ```

- **Term Query** (exact match):
    ```json
    {
      "query": {
        "term": {
          "status.keyword": "active"
        }
      }
    }
    ```

- **Range Query** (e.g., prices greater than 180):
    ```json
    {
      "query": {
        "range": {
          "close": {
            "gt": 180
          }
        }
      }
    }
    ```

---

## Setting Up Elasticsearch Locally

### Build Docker Image

Run Elasticsearch (version 8.10.2) as a single-node cluster:

```bash
docker run -d --name elasticsearch -p 9200:9200 -e "discovery.type=single-node" -e "xpack.security.enabled=false" docker.elastic.co/elasticsearch/elasticsearch:8.10.2
```

> Elasticsearch 8.x enables security (HTTPS, authentication) by default.  
> For quick local testing, you can **disable security features** with this Docker command: `-e "xpack.security.enabled=false" `


Check http://localhost:9200 in your browser for a successful JSON response.



## Ingesting Yahoo Finance Data

### 1. Download Data with yfinance

```python
import yfinance as yf

data = yf.download("AAPL", period="1y", interval="1d")
data.to_csv("aapl_1year.csv")
```

---

### 2. Index Data into Elasticsearch

```python
from elasticsearch import Elasticsearch, helpers
import pandas as pd

# Connect to local Elasticsearch (HTTP - security disabled)
es = Elasticsearch("http://localhost:9200")

# Load the CSV data (or directly use the dataframe)
df = pd.read_csv("aapl_1year.csv")

# Handle NaN values by filling them with 0 or dropping rows with NaN
df = df.fillna(0)  # Replace NaN with 0

# Prepare data for bulk indexing
actions = []
for idx, row in df.iterrows():
    doc = {
        "_index": "stocks",
        "_id": idx,
        "_source": {
            "date": row['Date'],
            "open": row['Open'],
            "high": row['High'],
            "low": row['Low'],
            "close": row['Close'],
            "volume": int(row['Volume'])
        }
    }
    actions.append(doc)

# Bulk index
helpers.bulk(es, actions)
print("Data indexed successfully!")

```

---

## Testing and Querying Your Data

Once your data is indexed, you can test various queries using curl commands or Python. Here are some practical examples with real outputs:

### 1. Basic Health Check

```bash
curl -X GET "http://localhost:9200"
```

**Output:**
```json
{
  "name" : "xxxxxx",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "xxxxxx",
  "version" : {
    "number" : "8.10.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "6d20dd8ce62365be9b1aca96427de4622e970e9e",
    "build_date" : "2023-09-19T08:16:24.564900370Z",
    "build_snapshot" : false,
    "lucene_version" : "9.7.0",
    "minimum_wire_compatibility_version" : "7.17.0",
    "minimum_index_compatibility_version" : "7.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

### 2. Check Index Statistics

```bash
curl -X GET "http://localhost:9200/stocks/_count?pretty"
```

**Output:**
```json
{
  "count" : 250,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  }
}
```


---

## Scaling and Resilience

Elasticsearch is built for distributed environments and high availability:

- **Distributed Architecture**: Elasticsearch clusters can span multiple nodes (servers)
- **Sharding**: Large indices are split into smaller pieces distributed across nodes
- **Replication**: Creates copies of shards for fault tolerance and high availability
- **Master Election**: Nodes coordinate via master elections to manage cluster state
- **Auto-Recovery**: Supports automatic failover and rebalancing when nodes join/leave

---

## Common Use Cases

**1. Log and Event Analysis**
- ELK Stack (Elasticsearch + Logstash + Kibana)
- Real-time monitoring and troubleshooting
- Application performance monitoring (APM)

**2. Search Applications**
- Website search engines with relevance ranking
- E-commerce product search
- Document management systems

**3. Analytics and Monitoring**
- Real-time dashboards and alerting
- Business intelligence and metrics
- Security information and event management (SIEM)

**4. Advanced Analytics**
- Text analytics and natural language processing
- Geospatial search and location-based services
- Machine learning and anomaly detection

---

## Next Steps

With your Elasticsearch foundation in place, consider exploring:

1. **Kibana Integration** - Add visual dashboards and data exploration
2. **Logstash/Beats** - Implement real-time data ingestion pipelines  
3. **Production Deployment** - Enable security, clustering, and monitoring
4. **Advanced Queries** - Explore full-text search, aggregations, and machine learning features

---

*Feel free to leave your comments below if you want to see any other topics covered!* 💬 
