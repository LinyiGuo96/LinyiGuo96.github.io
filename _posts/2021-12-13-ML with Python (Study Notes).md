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

# Table of Contents

1. [Intro to ML](#Intro-to-ML)
2. [Intro to Regression](#Intro-to-Regression)  
3. [Intro to Classification](#Intro-to-Classification)
4. [Intro to Clustering](#Intro-to-Clustering)
5. [Intro to Recommender Systems](#Intro-to-Recommender-Systems)


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

## Decision Trees (DT)

What's a decision tree? 

The basic intuition is to map out all possible decision paths in the form of a tree.

For example, say we need to decide which drug the patient `p15` need to take.

![image](https://user-images.githubusercontent.com/51500878/144696877-8e58ac5c-5a68-422b-9817-016ea2b4a129.png)

Suppose we have the following decision tree:

![image](https://user-images.githubusercontent.com/51500878/144696973-1873ca55-270e-4fa9-b929-40c34583da92.png)

- `Sex` here is called a _internal node_, and each internal node corresponds to a test
- `M` here is called a _branch_, and each branch corresponds to a result of the test
- `B` here is called a _leaf node_, and each leaf node assigns a classification

So how to build a DT? 

![image](https://user-images.githubusercontent.com/51500878/144697058-45e0707c-3de7-4e99-8079-146cb0f7446b.png)

Let's talk more about this process. How to choose the attribute we used to split the tree? That is, which attribute is the best? 

Let's say we used `cholesterol` as the attribute, then we have

![image](https://user-images.githubusercontent.com/51500878/144760839-fab029a2-a050-4416-8e49-b4fe7022d946.png)

Apparently it's not a good choice. If we used the `sex` attribute, we have 

![image](https://user-images.githubusercontent.com/51500878/144760904-274e2f98-541c-4817-90f0-115ff0cf1eb1.png)

Compared with `cholesterol`, using `sex` attribute give us more predictiveness, less impurity and lower entropy. But the results for `men` is still not very good. Then we take a further step:

![image](https://user-images.githubusercontent.com/51500878/144761084-358d2fd6-99fe-4d46-9f3a-a8258f2a63fc.png)

The node with only one class is called _pure nodde_.

As the internal nodes increase, the impurity decreases. And the impurity is measured by `entropy`. 

So what is **entropy**? 

- Measure of randomness or uncertainty
- The lower the entropy, the less uniform the distrubution, the purer the node.

![image](https://user-images.githubusercontent.com/51500878/144761200-fe488fa7-617c-4a9d-88ac-409728392291.png)

Mathematically,

**Entropy = -p(A)log(p(A)) - p(B)log(p(B))**

where `p` is the proportion of drug A/B.

For example, we could calculate the entropy before spliting.

![image](https://user-images.githubusercontent.com/51500878/144761285-3f7d7ce3-21c3-4adb-98a8-bc27d41c29f2.png)

> 9 B, 5 A, 14 in Total
> E = -(9/14)log(9/14) - (5/14)log(5/14)
> E = 0.94

If we use the `cholesterol` to split, then we have entropy as

![image](https://user-images.githubusercontent.com/51500878/144761352-65afad2b-3222-42ce-9865-7ca0337c64ca.png)

But if we use the `sex`, then 

![image](https://user-images.githubusercontent.com/51500878/144761372-8df8ebb1-c7e2-4c42-a7d1-ca7580822f95.png)

Now back to our question, which one is a bette choice?

Ans: we need to choose the tree with the **higher information gain** after splitting.

> So what is information gain?
>
> - The information that can increase the level of certainty after splitting
> - IG(information gain) = entropy before split - weighted entropy after split
> - The weighted entropy ⬆️, the IG ⬇️

![image](https://user-images.githubusercontent.com/51500878/144761773-664e385b-77f7-451d-8d58-eaca0440eadd.png)

Therefore, we should go with the `sex` attribute. As we can imagine, the next step is to repeat the same process as above until we find the purest leaf node as below.

![image](https://user-images.githubusercontent.com/51500878/144761830-b09fa939-5145-4797-b084-5a90094d8d98.png)


## Intro to Logistic Regression

- what is LR (logistic regression, same as below, not linear regression)?
- what problem we could solve with LR?
- which situation do we use with LR? 

What is LR? 

- A classification algo for categorial variables
- Applications:![image](https://user-images.githubusercontent.com/51500878/144762176-8ee8c8bd-ba7a-4e71-8d63-31d07692e5bd.png)

When should we use?

- if your data is binary: 1/0, T/F, Y/N
- if you need probabilistic results (because for LR, we computed the probability of one object belonging to a specific class and then map it to the class type)
- when you need a linear decision boundary (line, plan, or hyperplane) 
![image](https://user-images.githubusercontent.com/51500878/144762261-b19dbf1e-1cf5-4b19-a2df-b48623fe3fdd.png)
- if you need to understand the impact of a feature (attribute/independent variable)

Logistic Regression vs Linear Regression

Can we use the linear regression to predict a categorial data? 

![image](https://user-images.githubusercontent.com/51500878/144762476-8e72c49f-ea38-4539-aac5-747732455336.png)

![image](https://user-images.githubusercontent.com/51500878/144762485-de587559-6a7a-450a-a616-d7b8f1fd8af8.png)

Our job is to predict a point is red or blue given its X (age) value. Because the output is only 0/1, so we may end up with a stepwise function like this

![image](https://user-images.githubusercontent.com/51500878/144762800-4c7cc958-6f19-4f39-9358-17ee397c8b93.png)

Note, in this case, no matter how large the <img src="https://latex.codecogs.com/svg.image?\theta^TX" title="\theta^TX" /> is, the output is always 1, as long as it's greater than 0.5.

Therefore it would be nice if we could find some method to map the value of y_hat into the range `[0,1]`. 

Fortunately, `sigmoid` function could help us achieve this.

![image](https://user-images.githubusercontent.com/51500878/144762908-89c45014-d932-4f37-9b7a-320b52f952ea.png)

> So what is sigmoid function?
> 
> - also called logistic function
> - ![image](https://user-images.githubusercontent.com/51500878/144762936-51dbf2b0-ce9d-45d2-bc0b-d706be04c155.png)
> - As <img src="https://latex.codecogs.com/svg.image?\theta^TX" title="\theta^TX" /> ⬆️, the value of the exponential of the -<img src="https://latex.codecogs.com/svg.image?\theta^TX" title="\theta^TX" /> becomes to 0, then the value of the sigmoid function becomes to 1; on the other hand, if <img src="https://latex.codecogs.com/svg.image?\theta^TX" title="\theta^TX" /> is very small, then the sigmoid function value is 0
![image](https://user-images.githubusercontent.com/51500878/144763048-8cc11813-3bed-4153-9b33-03bbc2b1866b.png)

So now how to explain the output of our model if we use the sigmoid function?

![image](https://user-images.githubusercontent.com/51500878/144764358-8e8aaac0-6195-42a6-9537-9eede0fece91.png)

Having understood the output, how to train our model to find the θ is the only question left.

1. Initialize θ; 
2. Calculate y_hat = σ(θ^T X) for a customer;
3. Compare the output of y_hat with actual output of customer, y, and record it as error;
4. Calculate the error for all customers;
5. Change the θ to reduce the cost;
6. Go back to step 2.

Now let's talk more details in this training process, such as how to change the parameter to have a better outcome, as well as the cost function.

To find the best parameter, we should formulate the expression of our cost, and by finding its derivative, we could know how to change θ to have a better outcome.

General cost function could be ![image](https://user-images.githubusercontent.com/51500878/144764657-a0ba58b9-6f8d-421b-8559-f972b341fa11.png)

But because of the negativity and simplicity, we take ![image](https://user-images.githubusercontent.com/51500878/144764684-9a5c382a-65d7-400b-bba1-0a5cf2e07728.png) as our cost function. Thus for all customers, our final cost is ![image](https://user-images.githubusercontent.com/51500878/144764708-266dca73-53e5-4a7d-9c8f-e5a9d77f19cf.png)

Given its complexity, it's not easy to find the global minimal value of this function using derivative. But if we could find its GM (global minimal), then we could find the best estimate of our parameter. ➡️ _Gradient Descent_

So we chose another cost function, which is easier to find the GM. Let's see how to find such a cost function:

Since we know ![image](https://user-images.githubusercontent.com/51500878/144772729-ed352d4b-8235-4520-af4b-d87d2bf96b9a.png)

if we plot the cost function ![image](https://user-images.githubusercontent.com/51500878/144772778-4210e955-f9a1-4d2a-a61c-642aee923c2d.png)

we could find the function `-log(y_hat)` could provide us a good fit for this curve.

Therefore, we could replace the cost function and the total cost function as following:

![image](https://user-images.githubusercontent.com/51500878/144772916-6258fcbf-b2fb-4729-b5be-f06766bab94e.png)

Now we could minimize the total cost function to find the best estimate of parameters.

And here are some Q&A regarding minimizing the cost function:

![image](https://user-images.githubusercontent.com/51500878/144773127-ae8ba829-286d-4b61-9d3a-5719b2196e7b.png)

How gradient descend works? 

**Important**

![image](https://user-images.githubusercontent.com/51500878/144773517-c8d727c3-c455-4408-9873-c40ac2470ba3.png)

**COMMENT**

- With the new total cost function, compute its derivative of all parameters separately, then we could get the _gradient vector_ 
- Given a _learning rate_, we could update our parameter with a specific speed, just like the step width.

Training Algorithm Recap

![image](https://user-images.githubusercontent.com/51500878/144776106-2c81607d-99b4-4280-8f99-9b78fc9ec49b.png)


## Intro to SVM （Support Vector Machine）

![image](https://user-images.githubusercontent.com/51500878/144776397-a64adc03-e48f-41cd-8f11-595bd72d1886.png)

Now we have two new challenges: 1. How to transform the data into a higher dimension space? 2. How to find the best/optimized separator? 

Data Transformation

![image](https://user-images.githubusercontent.com/51500878/144776632-fc767b34-9324-482e-a0cb-c258abc918a4.png)

The function we used to transform the data is called **kernal function**. The four common types are linear, polynomial, radial basis function (RBF) and sigmoid function.

Using SVM to find the hyperplane

Our goal is to find such a hyperplane with a bigger margin as possible

![image](https://user-images.githubusercontent.com/51500878/144776883-0b1564c4-2234-42d7-9ee0-3190304988fc.png)

The points on the boundary are called support vectors.

Mathematically, our goal is 

![image](https://user-images.githubusercontent.com/51500878/144777014-16112d37-b4ae-40b3-9f3b-5ad53b1b69ab.png)

Not surprisingly, we still need to use the gradient descent. (skip for now)

Pros & Cons of SVM

![image](https://user-images.githubusercontent.com/51500878/144777213-a0444b80-f135-402f-96bc-bf4cc35e7df3.png)

Therefore when should we use SVM?

- image recognition
- text category assignment
- detecting spam
- sentiment analysis
- gene expression classification
- regression, outlier detection and clustering


# Intro to Clustering

Say we have a dataset like 

![image](https://user-images.githubusercontent.com/51500878/145330366-f02f1916-dba6-4358-900f-8ab3bae37f87.png)

We need to derive segments and groups from large datasets. That is, how to use this unlabelled dataset to understand and identify how customers are similar to each other.

> **Clustering**

_Client segmentation_ is one of the popular usage of clustering. But clustering also has many other applications in different domains.

What's a cluster?

A group of objects that are similar to other objects in the cluster and dissimilar to data points in other clusters.

![image](https://user-images.githubusercontent.com/51500878/145331032-07634972-b8e4-4597-98de-9c6cfb75fc90.png)

What's the difference between clustering and classification?

Classification is a supervised learning algorithm to predict the label of objects.

However, clustering is an unsupervised learning algorithm, to group similar objects and assign them to different clusters.

![image](https://user-images.githubusercontent.com/51500878/145331111-52d75e0d-8e24-4b84-8362-e1e687f02d1e.png)

More Applications

- Retail/marketing
  - identifying buying patterns of customers
  - recommending new books or movies to new customers
- Banking
  - Fraud detection in credit card use
  - identifying clusters of customers
- Insurance
  - fraud detection in claims analysis
  - insurance risk of customers
- Publication Media
  - auto-categorizing news based on their content
  - recommending similar news articles
- Medicine
  - Characterizing patient behavior 
- Biology
  - Clustering genetic markers to identify family ties 

Why clustering? 

- Exploratory data analysis
- summary generation
- outlier detection
- finding duplicates
- pre-processing step

Clustering algorithms

- Partitioned-based clustering (for medium/large databases)
  - Relatively _efficient_
  - eg, K-means, K-median, Fuzzy c-Means
- Hierarchical Clustering (intuitive, small sets)
  - Produces _trees_ of clusters
  - eg, agglomerative, divisive
- Density-based clustering (good for spatial datasets or datasets with noise)
  - produces arbitrary shaped clusters
  - eg DBSCAN

## Intro to K-means

![image](https://user-images.githubusercontent.com/51500878/145332279-6942b598-de4f-4698-b6ac-1cedf628752f.png)

- Partitioning Clustering
- K-means divides the data into _non-overlapping_ subsets without any cluster-internal structure
- objects within a cluster are very similar
- objects within different clusters are very different

The _distance_ between samples from each other is used to shape the clusters. K-means is to minimize the intra-cluster(集群内) distance and maximize the inter-cluster(集群间) distance. 

So how can we compute the dissimilarity/distance? Let's look at following examples with Euclidean distance.

![image](https://user-images.githubusercontent.com/51500878/145332883-415af9cd-1a00-4ec6-91f1-978f143b4347.png)

![image](https://user-images.githubusercontent.com/51500878/145332913-972074e1-a745-44e5-aa77-551d0fe8163c.png)

We could also use [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity), average distance, etc.

Now let's suppose our data has only two features and looks as following:

![image](https://user-images.githubusercontent.com/51500878/145333345-fb0ee99d-bb86-40ec-88bd-42f709eb9e51.png)

1. Then to start our process, we need to initialize `k` points as the cluster center. These points could be random.

> We will talk more about how to select `k` later

![image](https://user-images.githubusercontent.com/51500878/145493142-c6427520-1200-4d6f-9e07-1942b6642c1e.png)

2. Distance calculation

Compute the distance between each point and all cluster centers, and put them together to form the _distance matrix_.

![image](https://user-images.githubusercontent.com/51500878/145493178-8f2e0a8f-5a15-4490-9dba-366364003d3e.png)

3. Assign points to its closest centroid

With SSE (sum of squared error), we could easily compare which clustering is better. In another word, our job is to find such a clustering with a minimal SSE. Apparently the initialized points are not good enough, therefore we need to move them.

![image](https://user-images.githubusercontent.com/51500878/145493340-7972854c-7ebb-4eed-a45c-f62c928bd9bb.png)

4. Compute the new centroids for each cluster

Use the mean of points in each cluster as the new centroids.

![image](https://user-images.githubusercontent.com/51500878/145493717-c72f6c92-7e1c-4123-8521-8d0da764fdf2.png)

Repeat this process until the centroids no longer move.

**Note**: there is no guarantee that it will converge to the global optimum and the result may depend on the initial clusters.

### K-means Accuracy and Characteristics

Algo summary:

1. randomly placing `k` centroids, one for each cluster
2. calculate the distance of each point from each centroid
3. assign each data point to its closest centroid, creating a cluster
4. recalculate the position of the `k` centroids
5. Repeat the steps 2-4, until the centroids no longer move

How to measure its accuracy?

- External: compare the culters with the ground truth, if it is available
- Internal: average the distance between data points within a cluster

How to choose K?

Run the algorithm with different K, and then compare their accuracy (this accuracy could be the average distance of points to its centroid). 

However, the truth is, as K increase, the average distance will always decrease (accuracy increase). Therefore, we mainly need to find the _elbow point_, where the rate of accuracy sharply changes. This method is called the **elbow method**. 

![image](https://user-images.githubusercontent.com/51500878/145494715-e10b954b-f338-4b64-a244-33e84abb19f0.png)

## Intro to Hierarchical Clustering

![image](https://user-images.githubusercontent.com/51500878/145664676-40f79222-0afb-4ef3-82ec-33627984fedc.png)

![image](https://user-images.githubusercontent.com/51500878/145664695-f8234714-23fa-4567-ac36-e992c9f815bf.png)

Agglomerative would be our focus in this video. As the picture above shows, agglomerative starts with each observation as one cluster and then combine them one by one.

So how to do agglomerative `/əˈɡlɑːməˌreɪtɪv/` clustering?

Say we want to cluster these 6 cities in Canada, the numbers are distances between each city.

![image](https://user-images.githubusercontent.com/51500878/145664972-b107c973-9879-4785-a1b2-6a51f6a4873b.png)

Start with 6 clusters, and then we select the minimal distance and put them together, which is `OT-MO` at 167.

![image](https://user-images.githubusercontent.com/51500878/145665383-0d949be3-cb50-4d2e-b3f3-6b5e8932e712.png)

And then we take `OT/MO`as one cluster and re-compute the distance: 

> As for how to compute the distance to `OT/MO`, one sensible choice is to use the midpoint as the location of `OT/MO`.

![image](https://user-images.githubusercontent.com/51500878/145665420-8557fc22-ecaa-4051-918a-26a073b9a959.png)

And then repeat this process until we reach the _threhold_. If there is no threshold, we will finally merge all clusters at the begining into a single cluster.

> What's the threshold?
> The hierarchical clustering typically can be visualized by a _dendrogram_.  
> ![image](https://user-images.githubusercontent.com/51500878/145665568-32d0f155-e4bf-4793-92a9-91044c2a0d5a.png)
> If we pre-defined a `y`, then the hierarchy would be cutted into different disjoint clusters.
> ![image](https://user-images.githubusercontent.com/51500878/145665626-0d545ed7-ef17-4088-ac04-116962346215.png)

### More about HC

Let's say our dataset has n points. Now let's summarize the agglomerative algorithm: (Note that the final `until` statement could also be `until we reach the threshold`.)

![image](https://user-images.githubusercontent.com/51500878/145665742-24472a0a-e334-4e4c-91ff-9a3df531ed79.png)

If we look at this summary, we will found our real problems are

1. Which distance should we use?
2. How to compute the distance, especially after merging part of them?
3. How to find the lowest distance? 

Take the following patient info as an example, then our data is `3-d`, here we take the Euclidean distance.

The example here shows how to compute the distance between two points, so how about the distance between two clusters?

![image](https://user-images.githubusercontent.com/51500878/145665843-eb62b023-a220-4386-b3c2-551b34cd577d.png)

There are a lot of choices as shown below. But generally it depends on the data type, the dimension and most importantly, the domain knowledge of the dataset. In fact these different distance definition distinguishs different algorithms.

![image](https://user-images.githubusercontent.com/51500878/145666045-e3adec9d-8622-4e8f-85bc-1bc1888acc7a.png)

Pros VS Cons

![image](https://user-images.githubusercontent.com/51500878/145666069-fe82e8c3-51e8-4b1d-906b-ecdccbf144d5.png)

Hierarchical Clustering vs K-means

![image](https://user-images.githubusercontent.com/51500878/145666104-934c4841-d859-477c-b8f4-cbc0fe98d961.png)

## DBSCAN Clustering

DBSCAN: Density-Based Spatial Clutering of Applciations with Noise

Density-based clustering

![image](https://user-images.githubusercontent.com/51500878/145697577-25b93a0e-ea4c-4d48-af3e-89449fa48de1.png)

K-Means vs Density-based clustering

![image](https://user-images.githubusercontent.com/51500878/145697596-91bd8317-762f-4029-a20b-52362f7d1473.png)


About DBSCAN

- DBSCAN is one of density-based clustering methods.
- DBSCAN: Density-Based **Spatial** Clutering of Applciations with Noise
- It can find out any arbitrary shaped cluster without getting effected by noise
- Based on two parameters: `R` (radius) and `M` (Min number of neighbors)

![image](https://user-images.githubusercontent.com/51500878/145920745-e269529c-b950-40ee-af33-2a30cf7c1921.png)

The points meet the requirement `R` and `M` are called _core points_; the points which can be reached by a core point but whose neighbors are less tha `M` are called _border points_. But if a point is not neither a core point nor a border point, then it's called an _outlier_.

Advantages of DBSCAN

1. Arbitrarily shaped clusters
2. Robust to outliers
3. Does not require specification of the number of clusters



# Intro to Recommender Systems

What are recommender systems?

Recommender systems capture the pattern of peoples' behavior and use it to predict what else you might like.

Applications

- what's to buy?
- where to eat?
- which job to apply?
- who you should be friends with?
- personalize your experience on the web  

![image](https://user-images.githubusercontent.com/51500878/145930744-5a424a2c-3dd6-4f7b-a6e0-8e1d939465ba.png)

Advantages

- Broader exposure
- Continual usage/purchase of products
- provide better experience

![image](https://user-images.githubusercontent.com/51500878/145933650-89c2f8f1-88b2-48bb-885f-2b744925b347.png)

![image](https://user-images.githubusercontent.com/51500878/145933787-d62fd7a6-100b-4a4c-b57b-32c65edab7a3.png)

## Content-based recommender system

- Recommend based on user's profile
- based on similarity of user's liked/disliked items

Take the movie recommendation as an example:

![image](https://user-images.githubusercontent.com/51500878/146110229-25f8ab0b-2f7b-4421-a496-9c6c79159628.png)

And then normalized the weight to define user's profile.

![image](https://user-images.githubusercontent.com/51500878/146110356-a5e88d81-ca5f-4fe7-80e0-f32505a56750.png)

And then use the user's profile to find the most suitable movie for user.

![image](https://user-images.githubusercontent.com/51500878/146110636-6ae26e6a-97cc-4b37-807a-c7312b35909a.png)

But this method doesn't work if the user has never seen some specific types of movie, such as drama. That is, the content-based RS won't recommend those types of movie that user has never watched before.

Therefore, in this case we need to introduce other methods such as _collaborative filtering_.

## Collaborative Filtering

Two types:

![image](https://user-images.githubusercontent.com/51500878/146111105-45cd3d54-924b-4780-a9ab-e83d27509d41.png)

![image](https://user-images.githubusercontent.com/51500878/146111411-a2c673c4-610f-468f-a250-46f04d494722.png)

Suppose we already know the correlation among different user are 0.7, 0.9 and 0.4, and we want to calculate the expected score for the last user.

![image](https://user-images.githubusercontent.com/51500878/146111743-5d899605-673f-4f78-84dd-a50285112d78.png)

Then calculate the weighted rating matrix for the movie of interest:

![image](https://user-images.githubusercontent.com/51500878/146112024-082ea02a-356e-447c-a091-e295fb8bd01b.png)

Then we divide the sum of weighted rating for each movie by the total weight (because not all movies have all users' weighted rating, we need to eliminate this influence).

![image](https://user-images.githubusercontent.com/51500878/146112183-134cc372-4c2a-4f5b-ae21-529fdd46466e.png)

Actually both collaborative filtering types are similar. The difference is, their objective is opposite.

![image](https://user-images.githubusercontent.com/51500878/146112697-336d9790-f535-425e-ba85-b00cec6c6b54.png)

![image](https://user-images.githubusercontent.com/51500878/146113071-1cc2f65d-ae67-403b-9e2d-1db9a361fd6e.png)






