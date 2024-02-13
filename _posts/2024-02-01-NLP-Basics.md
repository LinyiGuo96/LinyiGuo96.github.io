---
layout: post
title: NLP Basics with Python
bigimg:
- "/img/nlp.jpg" : "NLP"
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


**Takeaways for re package**

- methods for tokenizing
    - findall()
    - split()
- regexes for tokenizing
     - '\w' '\W' words
     - '\s' '\S' whitespaces
 

## Machine Learning Pipeline

1. Raw text - model can't distinguish words
2. Tokenize - tell the model what to look at
3. Clean text - remove stop words/punctuation, stemming, etc.
4. Vectorize - convert to numeric form
5. Machine learning algorithm - fit/train model
6. Spam filter - system to filter emails


### Stemming

Process of reducing inflected words (or sometimes derived) to their word stem or root

Crudely chopping off the end of the word to leave only the base

Examples:

- stemming/stemmed --> stem
- electricity/electrical --> electr
- meanness/meaningful --> mean (wrong but this is the fact)

correct in most cases but NOT perfect.

**Why?**

- reduce the corpus of words
- explicitly correlates words with similar meanings

**Stemmers**
- Porter Stemmer (in this study)
- Snowball
- Lancaster
- Regex-based


### Lemmatizing

Process of grouping together the inflected forms of a word so they can be analyzed as a single term, identified by the word's lemma.

**How is it different from stemming?**

- both are to condense derived words into their base forms
- stemming is typically faster
- lemmatizing is typically more accurate


### Vectorizing

Process of encoding text as integers to create feature vectors

**Feature vector**

An n-dimensional vector of numerical features that represent some object.

**Why?**

- Python only see strings, don't know what the word represents for
- Raw text needs to be converted to numbers so that Python/algorithms can understand


**Different types**

- Count Vectorization
- N-grams
- Term frequency - inverse document frequency (TF-IDF)


## Feature Engineering

Creating new features or transforming your existing features to get the most out of your data.


### Creating New Features

- Length of text field
- percentage of characters that are pucntuation in the text
- percentage of characters that are capitalized


### Transformations

- Power transformations (square, square root, etc...)
- standardizing data

**Transformation Process**

1. Determine what range of exponents to test
2. Apply each transformation to each value of your chosen feature
3. use some criteria to determine which of the transformations yield the best distribution


## Machine learning Algorithms


_The field of study that gives computers the ability to learn without being explicitly programmed. - Arthur Samuel, 1959_

_Practice of using algorithms to parse data, learn from it, and then make a determination or prediction about something in the world. - NVIDA, 2016_

- Supervised learning
    - labeled, predict
- Unsupervised learning
    - no label, derive structure
    
### Cross-validation and evaluation

- Holdout test set
- K-fold cross-validation
    - more robust than just 1 holdout test set
 
**Evaluations**

- accuracy = # predicted correctly / # total observations
- precision = # predicted as spam that are actually spam / # predicted as spam
- recall = # predicted as spam that are actually spam / # actually spam

 
### Random forest

A type of **ensemble method**, which is a technique that creates multiple models and then combines them to produce better results than any of the single models individually.

Random forest combines a collection of decision trees and then aggregate the predictions of each tree to determine the final prediction. 


Benefits:
- used for classification and regression
- easily handles outliers, missing values, etc
- accept various data type
- less likely to overfit
- output feature importance


### Gradient Boosting

Also an ensemble method, which takes an iterative approach to combing weak learners to create a strong learner by focusing on mistakes of prior iterations.

- Both are ensemble methods and dicision-tree-based. 
- Difference: 
    - GB: boosting (sampled with increased weight on those it got wrong previously); training done iteratively; weighted voting for final prediction; harder to tune, easier to overfit (however, the truth is when GB is tuned properly, it has better performance than RF)
    - RF: bagging (sampled randomly); training done in parallel; unweighted voting for final prediction; easier to tune, harder to overfit
    
Speaking of GB itself:
- Pros: extremly powerful; various input types; classification and regression; output feature importance
- Cons: longer to train; more likely to overfit; more difficult to properly tune


### Recap - Machine Learning Pipeline


1. Read in raw text
2. Clean text and tokenize
3. Feature engineering
4. Fit simple model
5. Tune hyperparameters and evaluate with GridSearchCV
6. Select the best model


#### Two final points

- further evaluation
    - slice test set
    - examine cases where model gets wrong
- Results of trade-off - consider business context
    - focus on the business request
    - precision / recall
        - spam filter - optimize for recall
        - antivirus software - optimize for recall
        
