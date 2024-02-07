---
layout: post
title: NLP Basics with Python
---

## NLP Basics

Applications: 
- Spam filter
- Auto-complete when searching
- Auto-Correct

Related Topics:
- Sentiment analysis
- Topic Modeling
- Text classification
- Sentence segmentation or part-of-speech tagging

### Naural Language Toolkit

NLTK for short. Suite of open-source tools created to make NLP processes in Python easier to build.


### Structured Data and Unstructured Data

_80% of business relevant information originates in unstructured form, primarily text._

Unstructured means:
- Binary data
- No delimiters
- No indication of rows


### Regular Expressions

Text string for describing a search pattern.

`[j-q]` searches all character between j and q.

`[j-q]+` searches all characters between j and q, but can return multiple characters.

`[0-9]+` searches all numbers between 0 and 9, can return multiple.

`[j-q0-9]+` searches all numbers between 0 and 9 and characters bewteen j and q, can return multiple.


**Why RegEx?**

- Identify whitespace between words/tokens
- Identify delimiters or end-of-line escape charaters
- Removing punctuation or numbers from your text
- Cleaning HTML tags from text

Essentially, we want to use RegEx to tokenize/split the text into list that Python can understand. 

