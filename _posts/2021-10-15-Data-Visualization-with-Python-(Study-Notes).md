---
layout: post
title: Data Visualization with Python (Study Notes)
---

This blog is my personal study notes about data visualization with python. Contents within this blog would be very basic, you are welcome to look through them and provide your valuable feedback. Thanks.

# Week 2

## Basic Visualization Tools

**Area Plots**

- Aka area chart, area graph
- represent cumulated totals using numbers or percentages
- based on the line plot

Say this is our dataset:

![image](https://user-images.githubusercontent.com/51500878/137568114-a98fe4fc-743e-45ef-afd8-53d9ac2dab07.png)

Sort the dataframe using `total`:
 
> df_can.sort_values(['Total'], ascending = False, axis = 0, inplace = True)

Let's see how to have a dataframe as following:

![image](https://user-images.githubusercontent.com/51500878/137568219-0f3a87f7-7b16-4670-bfa6-054dec383f54.png)

Apparently we need to transpose the dataset with specific columns: 

```python
years = list(map(str, range(1980, 2014)))
df_can.sort_values(['Total'], ascending = False, axis = 0, inplace = True)
df_top5 = df_can.head()
df_top5 = df_top5[years].transpose()
```

Plot:
```python
df_top5.plot(kind='area') # we have seen `kind = 'line` before

plt.title("...")
plt.ylabel("...")
plt.xlabel("...")

plt.show()
```

Output:  
![image](https://user-images.githubusercontent.com/51500878/137568329-46294f5a-411e-421d-82fe-fdbf603a7719.png)


**Histograms**

Dist'n of frequency of a numeric dataset(variable).

Again, this is our dataset: (each row stands for a country and its relevant immigration info to Canada)  
![image](https://user-images.githubusercontent.com/51500878/137568463-3726f98f-0c97-478e-9df3-dda5830db4a0.png)

Say we are interested in the immigration situation in 2013:

```python
df.can['2013'].plot(kind='hist')

plt.title("...")
plt.ylabel("...")
plt.xlabel("...")

plt.show()
```
Output:  
![image](https://user-images.githubusercontent.com/51500878/137568587-e06b85c8-8794-4845-80f4-580f8c09f874.png)

_Note: the bins is not aligned with the tick marks on the horizontal axis._

To make the result more effective:

```python
import numpy as np

count, bin_edges = np.histogram(df_can['2013']) # divide/partition into 10 bins and save the frequency into `count`, and the bin edges into `bin_edges`

df_can['2013'].plot(kind='hist', xticks = bin_edges) # use the bin edges as the x-axis ticks

plt.title()
... ...

plt.show()
```

**Bar Charts**

Unlike histograms, compare the values of _a variable_ at a given point in time. Eg, the immigration situations of iceland to Canada from 1980 to 2013.

![image](https://user-images.githubusercontent.com/51500878/137568869-4d3af039-c8ed-4532-8857-52668b6e42fb.png)

Again, this is our dataset:

![image](https://user-images.githubusercontent.com/51500878/137568886-1be8966e-a809-4f13-87e3-6f4f88844890.png)

So how to draw the figure above?

```python
years = list(map(str, range(1980, 2014)))

df_iceland = df_can.loc['iceland', years] # df.iloc[#,#]

df_iceland.plot(kind = 'bar')

plt.title("...")
...
plt.show()
```











