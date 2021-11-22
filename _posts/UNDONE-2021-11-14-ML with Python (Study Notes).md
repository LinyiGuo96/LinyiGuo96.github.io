---
layout: post
title: Machine Learning with Python (Study Notes)
---

In this blog: 

- make predictions, such as predicting the right drug using decision trees...
- recommendation systems
- use python libraries to build ML models
- use the built-in lab environment


Skills: regression, classification, Clustering, Scikit Learn, Scipy ...
Projects: cancer detection, predicting economic trends, customer churn, recommendation systems ...

# Intro to ML 

_Project: is this benign or malignant cell?_

![image](https://user-images.githubusercontent.com/51500878/141710323-f755f112-a394-4050-9565-cdec5f4c3564.png)

To make predictions, we need to collect the data and train our models to understand the pattern.

![image](https://user-images.githubusercontent.com/51500878/141710799-1889bf09-dc1e-41a7-aa29-e4008c66164a.png)


_Machine learning is the subfield of computer science that gives "computers the ability to learn without being explicitly programmed."_     - Arthur Samuel

So how machine learning works?

![image](https://user-images.githubusercontent.com/51500878/141711039-901a859e-65f8-4e05-aa04-381c56278f5d.png)

Examples 

1. Recommendation systems: Amazon, Netflix
2. Loan application
3. Telecommunication companys predict whether customers unsubscribe next month

Major tech in ML:

1. Regression/estimation: predict continuous values
2. Classification: predict the item class/category of a case
3. Clustering: finding the structure of data; summarization
4. Associations: associating frequent co-occurring items/events
5. Anomaly detection: discovering abnormal and unusual cases
6. Sequence mining: predicting next events; click-stream (Markov Model, HMM)
7. Dimension Reduction: Reducing the size of data (PCA)
8. Recommendation Systems: recommending items

Difference between AI, ML and DL

![image](https://user-images.githubusercontent.com/51500878/142795432-583c577d-9921-4ad4-9888-dd5d046390cf.png)


## Python for ML  

Libraries for ML

![image](https://user-images.githubusercontent.com/51500878/142795702-569030ad-4942-48ee-85db-4ec3ff4102c6.png)

![image](https://user-images.githubusercontent.com/51500878/142795791-8af1292b-b22a-4d1f-91a3-879bd3de9f37.png)

Scikit-learn functions

This is just to clarify that a ML algo could be achieved by several lines of code. Don't worry if you don't understand them.

```python
from sklearn import preprocessing
X = preprocessing.StandardScaler().fit(X).transform(X)

from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, y, test_size = 0.33)

from sklearn import svm
clf = svm.SVC(gamma = 0.001, C=100.)

clf.fit(X_train, y_train)

clf.predict(X_test)

from sklearn.metrics import confusion_matrix
print(confusion_matrix(y_test, yhat, labels = [1,0]))

import pickle
s = pickle.dumps(clf)
```

## Supervised vs unsupervised

Supervised: teach the machine with **labeled** data.

Speaking of the data, each row (aka observation) has several columns (aka attributes).

Two types of supervised learning: classification (to predict discrete values) and regression (to predict continuous values).

Unsupervised: no labels anymore. Models work on its own to discover information.

Techniques in Unsupervised learning: 
1. Dimension reduction (feature selection)
2. density estimation
3. market basket analysis
4. clustering

**Clustering** is grouping of data points or objects that are somehow similar by: discovering structure, summarization, anomaly detection.

Summary

![image](https://user-images.githubusercontent.com/51500878/142799927-57978b73-8a6a-4a6c-962d-74d3e21b9165.png)













