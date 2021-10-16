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

## Specialized Visualization Tools

**Pie Charts**

Our dataset: (Country is the index instead of a variable, and the column `total` is also derived by taking sum.)

_We could using `df = df.set_index('Col1')` to set a column to the index. And then we could use `df.index.names = [None]` to remove the index name. For the table below, we will remove the word `Country` and the blanks within the same row then._

![image](https://user-images.githubusercontent.com/51500878/137569480-c0f419a0-a96b-4def-8e61-14a7fb8dcfe7.png)

We could use the following code to generate a table below.

> df_continents = df_can.groupby('Continent', axis=0).sum()

![image](https://user-images.githubusercontent.com/51500878/137569700-818a4d15-fef0-456d-8ab4-5ac991a2ff96.png)

Then plot:

```python
df_continents['Total'].plot(kind='pie') 

plt.title('...')

plt.show()
```

Output:  
![image](https://user-images.githubusercontent.com/51500878/137569740-f077e0f6-3935-4c1d-9b01-7326d762cf6c.png)

_Note: in many cases, pie charts are not a good choice compared with bar chart, although they may look pretty attractive._

**Box plots**

![image](https://user-images.githubusercontent.com/51500878/137569811-5a8402b3-f83e-41cf-991a-e29673b719cc.png)

Say we want to know the box plot of Japan's immigration:

```python
df_japan = df_can.loc['Japan', years].transpose()

df_japan.plot(kind='box')

...

plt.show()
```

Output:  
![image](https://user-images.githubusercontent.com/51500878/137569909-5e923388-620d-4cbb-8d89-80382c5d3d1b.png)


**Scatter Plots**

![image](https://user-images.githubusercontent.com/51500878/137569994-a1859538-8ff5-4f07-be89-33110f1c114a.png)

Our data:  ![image](https://user-images.githubusercontent.com/51500878/137570011-62236123-e4f9-4ea7-aa9d-9a135a998102.png)

![image](https://user-images.githubusercontent.com/51500878/137570077-8b82d5ce-7432-49b6-90c7-3e3f3ba2cbf1.png)

Say we want the scatter plot of `total` between 1980 to 2013:

```python
# we need to specify the x and y axis variables
df_total.plot(
    kind='scatter',
    x='year',
    y='total',
)

plt.title("...")
... ...
plt.show()
```

Output:  ![image](https://user-images.githubusercontent.com/51500878/137570178-4c3ce769-da03-447e-a649-4bba7e999f3e.png)



