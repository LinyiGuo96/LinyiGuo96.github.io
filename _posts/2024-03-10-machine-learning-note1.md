---
layout: post
title: Machine Learning Notes (1)
---

Here is the list I prepared about ML. Keep updating...

- [Foundamental](#Foundamental)
- [Regression](#Regression)
- [Reguarlization](#Reguarlization)


# Foundamental 

## 1. What is overfitting/underfitting?
   
Underfitting: Machine learning model is too simple to capture the underlying patterns in the data. Model performs poorly on both training and new unseen data.  
  - Sign: training and validation error both high  
  - Fix: more complex model, adding more features
    
Overfitting: machine learning model becomes too complex and starts to memorize the trianing data instead of learning generalizable patterns; consider too many noises.  
  - Sign: training error significantly lower than the validation error/model perform poorly on new data
  - Fix: 1) reducing the complexity of the model; 2) regularizing the model (l1, l2 regularization, dropout, cross-validation to choose best model); 3) collecting more training data

    
## 2. What is bias/variance trade off?

- Bias: difference between **predicted value** and the **expectation** of the real data. Bias happens when the model **oversimplifies** the underlying patterns in the data and makes strong assumptions. This can lead to **underfitting**, where the model fails to capture the true relationships between the features and the target variable.
  
- Variance: measures **how spread the predicted values are** from the expected value. A model with high variance is **sensitive** to the specific data points and memorize noise or outliers. This can lead to **overfitting**.
  
- Trade-off: Low variance models tend to be less complex, with simple structure, this can lead to high bias. Low bias models tend to be more complex, with flexible undering structure, which can leads to high variance. decreasing one component often leads to an increase in the other. Achieving low bias and low variance simultaneously is challenging. The goal is to find the right balance between bias and variance for optimal model performance.


## 3. How to avoid Overfitting?
   
- Reducing the complexity of the model (reduce features)
- Regularization:  l1, l2 regularization, dropout, cross-validation to choose best model
- Early stop
- Collecting more training data
- Data augmentation

  
## 4. Give a set of ground truths and 2 models, how do you be confident that one model is better than another? Model Selection

- Evaluation Metrics
- Cross-Validation (split data into multi-fold，train each model on different fold and test on alternating set, evaluate their average performance)
- Hypothesis Testing A/B testing 
- Domain Experties


  
# Regression

## 1. What's the assumptions of Linear Regression?

- Linear relationship: There is a linear relationship between the independent variables(X) and the dependent variables (y)
- Independence: Independence assumes that there is no relationship or correlation between the errors (residuals) of different observations.
- Normality: The residuals of the linear regression model are assumed to be normally distributed.
- Homoscedasticity(同方差性): Homoscedasticity assumes that **the variability of the errors** (residuals) is **constant** across all levels of the independent variables.
- Multicollinearity: No or little Multicollinearity between features


## 2. What will happen when we have correlated variables? How to solve it?

Outcome of correlated variables: 
- unstable coefficient estimates
- unreliable significance tests
- difficulties in interpreting the individual contributions of the correlated variables
  
Solution: 
- feature selection
- ridge regression
- PCA
- ...

  
## 3. Explain regression coefficient.

Coefficients represent **the change in the dependent variable** associated with a **one-unit change in the corresponding independent variable**, while holding other variables constant. It is essential to note that the interpretation of regression coefficients should be done with caution and within the context of the specific regression model and dataset.


## 4. What is the relationship between minimizing squared error and maximizing the likelihood?

- **In linear regression**, when the assumption of Gaussian errors holds, minimizing the squared error is **equivalent** to maximizing the likelihood of the observed data. This connection arises because the squared error can be derived from the likelihood function assuming Gaussian errors (take log of the $L(\theta)$).
  
- In cases where **the assumption of Gaussian errors is not appropriate**, such as when dealing with non-Gaussian or heteroscedastic errors, the relationship between minimizing squared error and maximizing likelihood **might not hold**.

  
## 5. How could you minimize the inter-correlation between variables with Linear Regression?

- Feature Selection
- PCA
- Ridge Regression
- Feature Engineering

  
## 6. If the relationship between y and x is no linear, can linear regression solve that?

Simple linear regression sometimes may not accurately capture the underlying relationship.

Solution:
- Interaction terms (y = a + b1x1 + b2x2 + **b3x1x2** + noise)
- Piecewise linear regression (分段函数)
- Non-linear regression

  
## 7. Why use interaction variables?

- Capture Non-Additive Effects
- Improved Model Fit
- Context-Specific Relationships
- Avoiding Omitted Variable Bias
- Enhanced Interpretability


  
# Reguarlization

## 1. What is L1 vs L2 regularization? what's the difference?

- Add a term of L1 norm of the parameters in the loss function (sum of absolute values) (Lasso regression)
- Add a term of L2 norm of the parameters in the loss function ($||\beta||_2 = (\sum \beta_i^2)^{1/2}$) (Ridge regression)

In summary, the main difference between L1 and L2 regularization lies in the type of penalty applied to the coefficients and their impact on the resulting model. L1 regularization encourages **sparsity** and **automatic feature selection**, while L2 regularization penalizes **large coefficients** and helps to improve **generalization** performance without necessarily leading to sparse solutions.


## 2. What is Lasso Regression?
   
- Least Absolute Shrinkage and Selection Operator
- Introduces an additional penalty term based on the absolute values of the coefficients, L1 norm of the coefficients
- objective: find the value of the coefficients that minimize the sum of the squared differences between the predicted values and the actual values, while also minimizing the L1 regularization term
- $L=|| \hat{y} - y ||_2 + \lambda || \beta ||_1$,
- where $\hat{y} = f_{\beta}(x)$
- Lasso regression can shrink the coefficients towards zero. when $\lambda$ is sufficiently large, some coefficients are driven to zero. Useful for feature selection.


## 3. What is Ridge Regression?

- Linear Regression with L2 Regularization
- $L = ||\hat{y} - y||_2 + \lambda||\beta||_2$
- Higher values of lambda result in more aggressive shrinkage of the coefficient estimators.

  
## 4. Why L1 is sparser than L2?

- L1 norm has corners at zero, while L2 norm is smooth and continuously differentiable
- L1 norm penalty creates diamond-shaped constraint regions in the coefficient space, centered around the origin. As a result, the optimization process may drive some coefficient exactly to zero, leading to sparsity (the optimum solution/plain usually hits the vertex(顶点) of the dimond) Whereas L2 norm is a ball, the optimum solution usually hits a point where the coefficients are non zero.

![image](https://github.com/LinyiGuo96/LinyiGuo96.github.io/assets/51500878/717a4789-2a18-4494-b0a6-b235179e4da4)


## 5. Why regularization works?

Regularization works by introducing penalty term into the objective function of a machine learning model. This penalty term encourage the model to have certain desirable properties, such as simplicity, sparsity, or smoothness (Adding more constrains to the coefficient). Reduce the variance.


## 6. Why regularization uses L1 and L2, instead of L3 and L4?

- Mathematical properties (theoretical foundation): L1 L2 norms have well-studied mathematical properties that make them particularly useful for regularization. Their properties align with the goals for reducing model complexity, handling Multicollinearity and identifying important features
- Computational simplicity: high order can introduce additional computational complexity without providing significant advantages over L1 and L2 norm
- Geometric Interpretation: clear geometric interpretations, intuitive for understanding regularization effects.



# Metrics

## 1. What are accuracy, precision, recall, trade-off, F1-score, ROC, AUC?

**Accuracy** is the base metric used for model evaluation, describing the number of correct predictions over all predictions.

$$\frac{TP + TN}{TP+TN+FP+FN}$$


**Precision(精确率)** is a measure of how many of the **positively predicted instances are actually true** positives.
  
$$\frac{TP}{TP + FP}$$

- Precision focuses on **the quality of the positive predictions**, high precision aiming for **a low number of false positives**.


**Recall(召回率)** is a measure of how many of **the actual positive instances are correctly identified**.

$$\frac{TP}{TP + FN}$$

- Recall emphasizes the completeness of the positive predictions, high recall aiming for a **low number of false negatives.**

  
**Trade-off**: improving one metric might lead to a decrease in the other.

- high precision, low recall: tuned to prioritize precision. more **conservative** in predicting positive instances. result in a **low number of false positives but may lead to missing some true positive instances, resulting in a low recall.** 
- low precision, high recall: be more **liberal(自由的,不精确的)** in predicting positive instances, lead to a **high number of true positives, but may also generate more false positives, reducing precision.**
- the consequences of false positives and false negatives
- the desired balance between avoiding mis-classification errors and capturing all relevant positive instances
- It's important to consider precision and recall together and select the appropriate balance -> F1 score (harmonic mean (调和平均) of precision and recall)
  
**F1-score**

$$2 * \frac{Precision * Recall}{Precision+Recall}$$

- Balenced measure: It penalizes models with imbalanced precision and recall values, making it suitable for evaluating classifiers on imbalanced datasets.
- Trade-off: F1-score is much more sensitive to one of the two inputs having a **lower** value


**ROC (Receiver Operating Characteristic) Curve** and **AUC (Area Under the ROC Curve)**


ROC is the graphical representation of the trade-off between sensitivity (**true positive rate**) and specificity (**true negative rate**) **across various threshold values**.

AUC quantifies the **overall performance** of a classifier across all possible threshold values. It represents the area under the ROC curve and ranges from 0 to 1.
<img width="700" alt="image" src="https://github.com/LinyiGuo96/LinyiGuo96.github.io/assets/51500878/22229217-e3e7-4ba4-9dbd-69d9d19e8bb6">

- X-axis: FP rate (FPR)
- Y-axis: TP rate (TPR) (FPR+TPR = 1)
- Diagonal line: represents for random guessing, i.e. TP rate = FP rate
- Perfect Classifier: A perfect classifier would have an ROC curve that passes through the top-left corner of the plot, where sensitivity is 1 and specificity is 1 
- AUC = 0.5: the classifier performs no better than random guessing; AUC = 1: perfect classification performance
- AUC is robust to imbalanced datasets
- AUC is used for evaluating models trained using algorithms that **don't output probability scores** directly


## 2. What metrics to use when labels are imbalanced? 

- Precision and Recall
- F1-score (harmonic mean of precision and recall) provides a balanced evaluation metric for imbalanced dataset
- **Area Under the Precision-Recall Curve (AUPRC)** always use when the focus is on the positive class robust to class imbalance
- **Receiver Operating Characteristic (ROC)** curve and the **Area Under The Curve (AUC)**. ROC curve plots the true positive rate (recall) against the false positive rate at **different classification thresholds**. AUC is the area under the ROC curve it is widely used metric that quantifies the model’s discriminative power and is suitable for imbalanced dataset



## 3. what type of metrics should be used in classification problems? and why?

- Understand the problem, identify the importance of correctly classifying each class and whether there is a class imbalance in the dataset
- Define evaluation goals, consider false positive vs false negative, different impacts? Decide whether the emphasis is on overall accuracy, precision or recall, or a balanced trade-off
- class imbalance
- domain knowledge
- multiple metrics

  
## 4. what is confusion matrix?

A confusion matrix is a table that summarizes the performance of a classification model by showing the counts of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN) for each class. By examining the values in the confusion matrix, you can gain insights into different performance aspects of the classification model, such as accuracy, precision, recall, and F1-score.


## 5. What is true positive rate, false positive rate, ROC (for binary classification)?

- **True Positive Rate (TPR) or Sensitivity or Recall**: The TPR measures the proportion of actual positive instances that are correctly classified as positive by the classifier. It is calculated as the ratio of true positives (TP) to the sum of true positives and false negatives (FN). **TPR = TP / (TP + FN) = TP / (ALL Actual positive examples)**
- **False Positive Rate (FPR):** The FPR measures the proportion of actual negative instances that are incorrectly classified as positive by the classifier. It is calculated as the ratio of false positives (FP) to the sum of false positives and true negatives (TN). **FPR = FP / (FP + TN) = FP / (All Actual Negative examples).** The TPR indicates the classifier's ability to correctly identify positive instances from the actual positive class. A higher TPR suggests better sensitivity or recall.
- **Receiver Operating Characteristic (ROC) Curve**: plots the true positive rate (TPR) against the false positive rate (FPR) at various classification thresholds

  
## 6. AUC explanation (for binary classification)

- The AUC represents the area under the receiver operating characteristic (ROC) curve, which plots the true positive rate (TPR) against the false positive rate (FPR) at various classification thresholds.
- It represents the probability that the model will rank a randomly chosen positive instance higher than a randomly chosen negative instance.
- The AUC value ranges from 0 to 1. A model with an AUC of 0.5 performs no better than random guessing, as the ROC curve coincides with the diagonal line connecting (0,0) and (1,1). A perfect classifier achieves an AUC of 1, as it can perfectly separate positive and negative instances.


## 7. Ranking metrics

- **Mean reciprocal rank (MRR)**: This metric measures the quality of the model by considering the rank of the first relevant item in each output list produced by the model, and then averaging them.
- $$MRR = \frac{1}{m} \sum_{i=1}^m \frac{1}{\text{rank}_i}$$
- shortcoming: only considers the first relevant item and ignores other relevant items in the list, it does not measure the precision and ranking quality of a ranked list.
- **Recall@k:** This metric measures **the ratio between the number of relevant items** **in the output list** and **the total number or relevant items available in the entire dataset**. The formula is
- $$\text{recall \@ k} = \frac{\text{number of relevant items among the top $k$ items in the output list}}{\text{total relevant items}}$$
- measures how many relevant items the model failed to include in the output list
- shortcoming: in some systems, the total number of relevant items can be very high. This negatively affects the recall as the denominator is very large. For example, if we want to find a list of image the close to a query image of dog, when the databse may contain millions of dog images. The goal is not to return every dog image but to retreve a handful of the most similar dog images.
- **Precision@k:** measures the **proportion** of **relevant items among the top k items in the output list**. The formula is:
- $$\text{precision\@k} = \frac{\text{number of relevant items among the top $k$ items in the output list}}{k}$$
- measures **how precise the output lists are**, but **it doesn’t consider the ranking quality**.
- **Average Precision (AP):** computes average precision@K for each k. AP is high if more relevant items are located at the top of the list.
- **mAP**: first computes the average precision (AP) for each output list, and then averages AP values.
- mAP is designed for binary relevances; in other words, it works well when each item is either relevant or irrelevant. For continuous relevance scores, nDCG is a better choice.
- Normalized discounted cumulative gain (nDCG)
- DCG calculates the cumulative gain of items in a list by summing up the relevance score of each item
- $$\text{DCG}p = \sum_{i=1}^p\frac{rel_i}{\log_2(i+1)}$$
- **nDCG divides the DCG by the DCG of an ideal ranking. The formula is:**
- $$nDCG_p = \frac{DCG_p}{IDCG_p}$$
- Its primary shortcoming is that **deriving ground truth relevance scores is not always possible**.


## 8. Recommender System Metrics
- **Precision@k: proportion of relevant content among the top k recommended items**
- MRR: focuses on the rank of the first relevant item in the list, suitable in system where only one relevant item is expected
- mAP: average of all recommended items AP, measures the ranking quality of recommended items. mAP works only when the relevance scores are binary (if the score is ether relevant vs irrelevant, mAP is a better fit)
- nDCG: relevance score between a user and an item is non-binary ( [relevant vs irrelevant case(mAP)] vs [how relevant case(nDCG)]
- Diversity: This metric measures how dissimilar recommended videos are to each other. This metric is important to track, as users are more interested in diversified videos. To measure diversity, we calculate the average pairwise similarity (e.g., cosine similarity or dot product) between videos in the list. A low average pairwise similarity score indicates the list is diverse.
mAP, MRR, nDCG are commonly used to measure ranking quality


