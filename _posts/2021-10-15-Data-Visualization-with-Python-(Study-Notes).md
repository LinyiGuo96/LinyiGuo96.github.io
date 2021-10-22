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


# Week 3

## Advanced Visualization Tools

**Waffle Charts**

![image](https://user-images.githubusercontent.com/51500878/137656144-d7c7c8b2-dba0-4e58-a85e-44b6f6b9cd72.png)

_Not supported by matplotlib. Check PyWaffle._

**Word Clouds**

![image](https://user-images.githubusercontent.com/51500878/137656213-7da638ca-b244-4043-84b4-1b4d15743286.png)

_Not supported by matplotlib._

**Seaborn and Regression Plots**

- Based on Matplotlib
- Efficient. 20~ lines of code using matplotlib could be replaced by 5 fold using seaborn

Let's look at regression plots. Say this is our data:

![image](https://user-images.githubusercontent.com/51500878/137656448-3003ab20-f143-41ea-a920-22337b77b495.png)

Using `regplot`:

```python
import seaborn as sns
ax = sns.regplot(x='year', y='total', data=df_tot)
```

Output:  
![image](https://user-images.githubusercontent.com/51500878/137656533-78a40d7f-25c3-4b4c-8f9b-318e05a4c5ea.png)

We can change the color and marker by adding `color='green', marker='+'` into `regplot()`.


## Visualizing Geospatial Data

**Intro to Folium**

- Create types of Leaflet maps
- Binding of data to a map for choropleth visualizations as well as passing visualiztions as markers on the map
- Has a number of built-in tilesets from OpenStreetMap, Mapbox, and Stamen, and supports custom tilesets with Mapbox API keys

![image](https://user-images.githubusercontent.com/51500878/137657102-98cf7c97-99dd-4751-9b02-124df943db7a.png)

Say we want to center around Canada: (Try changing the `zoom_start` value)  
![image](https://user-images.githubusercontent.com/51500878/137657209-1b9ab149-f388-4b8a-8408-ecf538c0d9f3.png)

Change map styles by naming `tiles=`:  
![image](https://user-images.githubusercontent.com/51500878/137657287-b9d36e33-44e6-49e3-af39-217f056130d4.png)

![image](https://user-images.githubusercontent.com/51500878/137657373-166cea2a-fa02-4596-8f7b-ffdda2aadc5d.png)


**Maps with Markers**

We have seen how to create map centered around Canada:

```python
canada_map = folium.Map(location=[56.130, -106.35], zoom_start=4)

canada_map
```

If we want to add something new to the map, we need to create one thing called `feature group`. At first this group is empty.

```python
# create a feature group
ontario = folium.map.FeatureGroup()
```

Then we need to add styles to this feature group by using `add_child()`:

```python
# style the feature group
ontario.add_child(
    folium.features.CircleMarker(
    [51.25, 85.32], radius = 5,
    color = 'red', fill_color = 'Red'
    )
)
```

Now the feature group already has something, let's add the feature group to the map

```python
canada_map.add_child(ontario)
```

Output:
![image](https://user-images.githubusercontent.com/51500878/137658184-1531b91c-d525-40e0-9f04-0787ada0d9c7.png)

To better express the map, add the following code:

```python
folium.Marker([51.25, -85.32], popup='Ontario').add_to(canada_map)
```  
Output:  
![image](https://user-images.githubusercontent.com/51500878/137658350-9a6e4b95-7b73-46d8-a2c2-2db8f9669e73.png)

Wrap up together:

```python
canada_map = folium.Map(location=[56.130, -106.35], zoom_start=4)

# create a feature group
ontario = folium.map.FeatureGroup()

# style the feature group
ontario.add_child(
    folium.features.CircleMarker(
    [51.25, 85.32], radius = 5,
    color = 'red', fill_color = 'Red'
    )
)

# add the feature group to the map
canada_map.add_child(ontario)

# label the marker
folium.Marker([51.25, -85.32], popup='Ontario').add_to(canada_map)

# generate the map
canada_map
```

**Choropleth Maps**

![image](https://user-images.githubusercontent.com/51500878/137658701-1edc2644-5de7-41cd-8597-3446327c7074.png)

_Geojson File_

![image](https://user-images.githubusercontent.com/51500878/137658826-0f2488f5-741b-46ee-bf84-9724d1c10e13.png)

Say this is our data:

![image](https://user-images.githubusercontent.com/51500878/137658919-405a4125-bf0b-41fd-b351-9ba99790c2ed.png)

Let's create a world map:

![image](https://user-images.githubusercontent.com/51500878/137659215-0ecb383e-ac35-45a8-8c65-5ccd46631c1f.png)

Then add our data:

![image](https://user-images.githubusercontent.com/51500878/137659281-c7c95528-d2cf-4795-810b-dd55d551de23.png)

# Week 4

## Creating Dashboards with Plotly and Dash

**Overview**

- How a dashboard can be used to answer critical business questions.  

- What high-level overview of popular dashboarding tools available in python. 

- How to use basic Plotly, plotly.graph_objects, and plotly express.

- How to use Dash and basic overview of dash components (core and HTML).  

- How to add different elements (like text box, dropdown, graphs, etc) to the dashboard.

- How to add interactivity to dash core and HTML components. 

**Dashboarding Overview**

Using databoards to tell your story, data scientists.

**Web-based Dashboarding**

- Dash from Plotly ![image](https://user-images.githubusercontent.com/51500878/137793444-9e801ab4-abd5-479a-80db-7777c61a62b8.png)
- Panel ![image](https://user-images.githubusercontent.com/51500878/137793463-fae8fd01-30d2-4dd9-99cc-35b78b88de7d.png)
- Voila ![image](https://user-images.githubusercontent.com/51500878/137793477-16cbeb14-1e69-4c31-bdb5-9f5c0f0bad43.png)
- Streamlit ![image](https://user-images.githubusercontent.com/51500878/137793508-5cfd9a8c-8cc9-48ff-9054-c44d62b218c5.png)

**Dashboard Tools**

 ![image](https://user-images.githubusercontent.com/51500878/137793627-6eacc4b8-6c82-4454-ab6c-20a1f2aadc98.png)

Here is a link: [Python dashboarding tools](https://pyviz.org/dashboarding/).

**Intro to Plotly**

- Interactive, open-source 
- support 40+ chart types
- includes chart types like statistical, financial, maps, scientific and 3-dimensional
- can be displayed in Jupyter notebook, saved to HTML, used in developing Python-built web applications

### Plotly sub-modules

Plotly graph objects (low-level interface to figures, traces and layout) `plotly.graph_objects.Figure` and Plotly Express (high-level wrapper).

```python
import plotly.graph_objects as go
import plotly.express as px
import numpy as np

# using numpy to generate samples
x = np.arange(12)
y = np.random.randint(50, 500, size=12)
```

Then the following line to create the figure.   
_Note Ploty.graph contains a JSON object which has a structure of dict. Here, 'go' is the plotly JSON object. Updating values of 'go' object keywords, chart can be plotted._

```python
fig = go.Figure(data=go.Scatter(x=x, y=y))
fig.update_layout(title='...', xaxis_title='Month', yaxis_title='Sales')
fig.show()
```

Output: 
![image](https://user-images.githubusercontent.com/51500878/137795279-e1f6f6c9-a080-4c58-bf9c-a3c776e30580.png)

We can also use `plotly.express` to create the figure:

```python
fig = px.line(x=x, y=y, title='...', labels=dict(x='Month', y='Sales'))
fig.show()
```

**Side Notes**

- `df.sample(n= , random_state= )`: randomly select `n` rows(obs) from the dataframe under the random seed `random_state`
- `line_data = data.groupby('Month')['ArrDelay'].mean().reset_index()` explanation: divide `data` into different groups based on `month` -> extract the `ArrDelay` from the data -> take the `mean` -> generate the index `0,1,2,3...` for rows

**Intro to Dash**

**Dash** is:  
- an open source UI python library from plotly
- easy to build GUI
- declarative and reactive
- rendered in web browser and can be deployed to servers
- inherently cross-platform and mobile ready

Two components: `Core` and `HTML` 

```python
import dash_core_components as dcc
import dash_html_components as html
```

For html: layout, keyword arguments ...

![image](https://user-images.githubusercontent.com/51500878/138381225-32a59730-4d36-4a25-b8e6-aae2befe60f1.png)

Then we create the layout -> add components to it.

![image](https://user-images.githubusercontent.com/51500878/138381283-683e2cda-56f9-4e84-a515-e6d270410aa0.png)

![image](https://user-images.githubusercontent.com/51500878/138381398-801bfcde-99d7-4121-a623-d5944818e27b.png)


`Core` is higher level components that are interactive and are generated with JavaScript, HTML, and CSS through the React.js library.

Eg,

![image](https://user-images.githubusercontent.com/51500878/138381596-14a83a45-4e76-4f1a-be2d-efc4f73e415d.png)  
![image](https://user-images.githubusercontent.com/51500878/138381654-f7d99024-5ee4-476c-a9d5-adc26ee24dfe.png)  
![image](https://user-images.githubusercontent.com/51500878/138381675-90a45cfb-9ae4-43a3-b38e-bfb603dc5157.png)

**Make dashboards interactive**

_Callback_ is a python function that are automatically called by Dash whenever an input component's property changes. `@app.callback`

```python
@app.callback(Output, Input)
def callback_function:
    ... ...
    ... ...
    ... ...
    return some_result
```    

Eg, callback with one input:

![image](https://user-images.githubusercontent.com/51500878/138382216-2265b48e-40c2-437b-91b2-d6bdee392c8a.png)

![image](https://user-images.githubusercontent.com/51500878/138382307-87155d2a-35b3-42d7-a7b7-ce5f56e9d99e.png)

![image](https://user-images.githubusercontent.com/51500878/138382393-b1c9fa1b-f1bd-43a2-8b56-345c8247d805.png)

![image](https://user-images.githubusercontent.com/51500878/138382416-039b2fef-6885-49fb-96d5-4891b78273b2.png)

Output: (`Input` is changeable.)
![image](https://user-images.githubusercontent.com/51500878/138382441-f87f853d-5555-4e80-87a8-6e5de754dcb5.png)


Eg, callback with two inputs:

![image](https://user-images.githubusercontent.com/51500878/138382551-06c8c286-4db3-4d12-bac7-bf237083a4cf.png)

![image](https://user-images.githubusercontent.com/51500878/138382610-2e7850af-b708-483f-9059-0e14f23f15c7.png)

Output:  
![image](https://user-images.githubusercontent.com/51500878/138382649-7c560000-caa7-472c-9280-93878f50a7fd.png)


