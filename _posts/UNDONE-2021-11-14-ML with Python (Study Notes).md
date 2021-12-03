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

Table of Contents
=================

* [Intro to ML](#Intro-to-ML)
* [Intro to Regression](#Intro-to-Regression)  
* [Intro to Classification](#Intro-to-Classification)


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



# Intro to Regression

What's regression? 

![image](https://user-images.githubusercontent.com/51500878/142959101-46838525-57cd-48b7-8ec4-1aa5d8c97101.png)

Rergession is the process of how to predict a continuous value using other variables.

X: Independent variable, Y: Dependent variable.

![image](https://user-images.githubusercontent.com/51500878/142959214-eb8469c8-322d-4f1c-bc41-9e9830123fb9.png)


Types of regression

1. Simple regression (one independent variable)
  1.1. simple LR
  1.2. simple non-LR
2. Multiple regression
  2.1. Multiple LR
  2.2. Multiple non-LR
  
Applications of regression

1. Sales forecasting
2. Satisfaction analysis
3. Price estimation
4. Employment income

Algorithms

1. Ordinal regression
2. Poisson regression
3. Fast forest quantile regression
4. Linear, Polynomial, Lasso, Stepwise, Ridge regression
5. Bayesian linear regression
6. Neural network regression
7. Decision forest regression
8. Boosted decision tree regression
9. KNN (K-nearest neighbors)


## Simple Linear Regression

![image](https://user-images.githubusercontent.com/51500878/142961332-e2ad0ae5-4e1d-4473-831c-cc786e49069a.png)

Then fit a line throught the data:

![image](https://user-images.githubusercontent.com/51500878/142961363-0d2ce15e-a443-4467-a894-fc259a5e8850.png)

To do predictions, just find the corresponding Y-axis value given the X-axis value.


Model Expression

<img src="https://latex.codecogs.com/svg.image?\hat{y}&space;=&space;\theta_0&space;&plus;&space;\theta_1&space;x_1" title="\hat{y} = \theta_0 + \theta_1 x_1" />

So how to find the best fit? 

Firstly, the best fit line should minimize the MSE (mean square error): 

<img src="https://latex.codecogs.com/svg.image?MSE&space;=&space;\frac{1}{n}\sum_{i=1}^{n}(y_i&space;-&space;\hat{y}_i)^2" title="MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2" />

So to find the best estimate of `theta_0` and `theta_1`, we have two options: 1. math method; 2.optimization method.

1. Math

![image](https://user-images.githubusercontent.com/51500878/142965292-1ee8c421-c592-4cd2-99d8-279e35631d2e.png)

![image](https://user-images.githubusercontent.com/51500878/142965302-b11ce100-8889-47f9-9e27-70922848f8cd.png)

2. Optimization (skip)

Pros

- Very fast
- No parameter tuning
- Easy to understand and highly interpretable


## Model Evaluation

- Train and test on the same dataset
- Train/test split

How to measure the accuracy of our model?

Compare the actual (dependent) values with predicted ones.

We could use the one-norm error to measure this difference: 

<img src="https://latex.codecogs.com/svg.image?Error&space;=&space;\frac{1}{n}\sum_{j=1}^{n}|y_j-\hat{y}_j|" title="Error = \frac{1}{n}\sum_{j=1}^{n}|y_j-\hat{y}_j|" />

![image](https://user-images.githubusercontent.com/51500878/142966001-996391dc-a23a-4720-8071-0d72e00daf06.png)

What's training & out-of-sample accuracy?

![image](https://user-images.githubusercontent.com/51500878/142966167-29ed7054-82b0-47ea-903f-07ca88fc3236.png)

![image](https://user-images.githubusercontent.com/51500878/142966300-9d1d8e40-5209-4fff-807f-99ca6a0f3649.png)

K-fold Cross Validation

![image](https://user-images.githubusercontent.com/51500878/142966386-407d0412-b66c-4498-84fd-69018941fb2a.png)


## Evaluation Metrics

- MAE (mean absolute error)
- MSE (mean squared error)
- RMSE (root mean squared error)

Their definitions are 

![image](https://user-images.githubusercontent.com/51500878/143373004-f342dfbf-3cab-4f70-a7fb-79b6be71353d.png)

![image](https://user-images.githubusercontent.com/51500878/143373039-de110b0d-8fde-4441-ba4d-8b252508498f.png)

![image](https://user-images.githubusercontent.com/51500878/143373076-91a6ff1b-ebdc-499f-ac56-1d011794b1d0.png)

Relative absolute error:
![image](https://user-images.githubusercontent.com/51500878/143373099-a849163e-1be2-4f31-8687-35724a6b9050.png)

Relative squared error:
![image](https://user-images.githubusercontent.com/51500878/143373185-043cc668-5a86-477e-978a-3b5b423c323b.png)

R-squared error:
![image](https://user-images.githubusercontent.com/51500878/143373267-98e4cec0-c79f-4096-94de-c2b5304e8946.png)


## Multiple LR

![image](https://user-images.githubusercontent.com/51500878/143665457-f4527a74-a3b9-4701-8f74-84f3a4f2d910.png)

Two applications:

- Independent variables effectiveness on prediction
  - Does revision time, test anxiety, lecture attendance and gender have any effect on the exam performance of students?
- Predict impacts of changes
  - How much does blood pressure go up or down for every unit increase (or decrease) in the BMI of a patient?

Mathematically, 

<img src="https://latex.codecogs.com/svg.image?\hat{y}&space;=&space;\theta_0&space;&plus;\theta_1&space;x_1&space;&plus;&space;\theta_2&space;x_2&space;&plus;&space;...&space;&plus;&space;\theta_nx_n" title="\hat{y} = \theta_0 +\theta_1 x_1 + \theta_2 x_2 + ... + \theta_nx_n" />

Or, <img src="https://latex.codecogs.com/svg.image?\hat{y}&space;=&space;\theta^T&space;X" title="\hat{y} = \theta^T X" />  
where   
<img src="https://latex.codecogs.com/svg.image?\theta^T&space;=&space;[\theta_0,&space;\theta_1,&space;\theta_2,&space;...,&space;\theta_n]" title="\theta^T = [\theta_0, \theta_1, \theta_2, ..., \theta_n]" /> 
and   
<img src="https://latex.codecogs.com/svg.image?X&space;=&space;\begin{bmatrix}&space;1\\&space;x_1\\&space;x_2\\&space;...\\\end{bmatrix}" title="X = \begin{bmatrix} 1\\ x_1\\ x_2\\ ...\\\end{bmatrix}" />

Optimal parameter: minize the error of our model, such as MSE or MAE.

![image](https://user-images.githubusercontent.com/51500878/143665866-25cd3eea-e73a-4661-a228-2deab0224bfe.png)

After finding good estimation of parameters, prediction is just a piece of cake. 

How many independent variables should we use?

- Adding too many independent variables without theoratical justification will make our model overfitting (not general enough for prediction)

Should the independent variable be continuous?

- Categorical variables could be converted into a numeric variable to cooperate with linear regression

How to check the linear regression relationship? 

- Scatter plot is one of the easiest way.


## Intro of Non-Linear Regression

We could try scatter plot to check the regression is linear or not.

![image](https://user-images.githubusercontent.com/51500878/143666291-7dbef7d9-ced7-49f5-9139-64160d5ff79d.png)

The regression above could be called **polynomial** regression in general.

Polynomial: curvy data. 

However, a polynomial regression can be transformed into linear regression model.

![image](https://user-images.githubusercontent.com/51500878/143666376-48792654-78be-4151-b919-ef3cea64b878.png)

Then we could apply the _least square_ to the transformed 'linear' regression.

![image](https://user-images.githubusercontent.com/51500878/143666462-9bea8554-44a4-4239-9a8b-456a0548f1a4.png)


# Intro to Classification

- Supervised-learning
- Target attribute is a category/discrete

Eg, the bank can clssify a user to the default group (value = 1) or NOT-default group (value = 0) based on the user's information.

![image](https://user-images.githubusercontent.com/51500878/144528237-0bbe40e7-9344-430e-b725-7f4ab0cf8525.png)

The target/dependent variable could also have multiple (>2) values.

Classification algorithms in ML: 

- Decision trees (ID3, C4.5, C5.0)
- Naive Bayes
- Linear Discriminant Analysis
- K-Nearest Neighbor (KNN)
- Logistic Regression
- Neural Networks
- Support Vector Machines (SVM)

## KNN

Given an example,

![image](https://user-images.githubusercontent.com/51500878/144528605-4e5e06cf-be4b-4887-bb04-6866407388e4.png)

**What's KNN?**

- A method for classifying cases based on their similarity to other cases
- Cases that are near each other are said to be `neighbors`
- Based on similar cases with same calss labels are near each other 

**Algo**

![image](https://user-images.githubusercontent.com/51500878/144529120-344ba0fa-ed92-4bb0-bbee-b4eb377fda8d.png)

Then we might have two questions: 1. how to select parameter `k`; 2. how to measure the distance between two cases. 

For Q2, apparently we could use the Euclid distance as following but there are also many other method we could use.

![image](https://user-images.githubusercontent.com/51500878/144530430-14296c3e-02ef-4e76-8782-b6e6e4d6f204.png)

For Q1, let's take the income and age as two independent variables as an example:

![image](https://user-images.githubusercontent.com/51500878/144538375-6c6b4b8a-0c5b-43fe-b868-5f1bcb0eaca5.png)

## Evaluation matrics in classification

How to measure the accuracy? 

![image](https://user-images.githubusercontent.com/51500878/144538824-94613cba-f0e8-4468-b2e3-1ade173f4615.png)

**Jaccard index**

![image](https://user-images.githubusercontent.com/51500878/144538897-a40ab211-d833-4b50-9067-4ae172ebf871.png)

 If `J(y, y_hat) = 1` then it means a perfect prediction. 
 
_The higher the index is, the more accurate our model is._

**F1-score**

Confusion matrix: (which shows the model's ability to correctly classify the object)

![image](https://user-images.githubusercontent.com/51500878/144539166-4beb6bb9-9836-4ac3-9c6c-8512991df948.png)

Further,

![image](https://user-images.githubusercontent.com/51500878/144539554-39522f2f-0fe1-46f3-8306-388ebf1f3a55.png)

**F1-score = 2 * (prc * rec) / (prc + rec)**

_The higher the F1-score is, the more accurate our model is._

**Comment**: the Jaccard index and F1-score can be used for multiple discrete variable as well.

**Log loss**

Performance of a classifier where the predicted output is a **probability** value between 0 and 1.

Using the following formula to calculate the log loss:

<img src="https://latex.codecogs.com/svg.image?LogLoss&space;=&space;-\frac{1}{n}\sum(y\times&space;log(\hat{y})&plus;&space;(1-y)&space;\times&space;log(1-\hat{y}))" title="LogLoss = -\frac{1}{n}\sum(y\times log(\hat{y})+ (1-y) \times log(1-\hat{y}))" />

where `y_hat` is the probability value.

_The lower the logloss is, the more accurate our model is._




















