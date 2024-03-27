---
layout: post
title: Machine Learning Notes (2)
bigimg:
- "/img/hands-on-ml.jpg" : "Hands-On Machine Learning"
---

Continue with [this article](https://linyiguo96.github.io//2024-03-10-machine-learning-note1/)

- [Ensemble Method](#ensemble-method)

# Ensemble Method

## 1. Development and difference of BT, GDBT, XGBOOST, LIGHTGBM

Terminology
- BT: boosted tree
- GBDT: gradient boosting decision tree, aka gradient boosting machine (GBM) 
- XGBOOST: extreme gradient boosting 
- LIGHTGBM: light gradient boosting machine

### History

`Boosted Tree` is a more general term referring to any ensemble method that combines decision trees;  

`GBDT` specifically refers to the gradient descent optimization applied to decision trees within a boosted tree framework;  

Besides GBDT, there are some others under BT including `AdaBoost` (trained sequentially, focus on misclassified examples, weights differ), `LogitBoost`, and `BrownBoost`.  

`XGBoost` and `LightGBM` are developed by Tianqi Chen and Microsoft in 2014 and 2016 separately. Both can be viewed as types of `GBDT`, with each own optimizations and enhancements.


### Theory

**Boosted Tree**

At each step, a new tree will be trained with the residual from last step. The goal is to fit residuals step by step and finally we will take the weighted sum of all precitions at each step. 

**GBDT**


### Difference
