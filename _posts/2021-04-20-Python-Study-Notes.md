---
layout: post
title: Python Study Notes (for Data Analysis)
subtitle: last update 2021-04-25
bigimg:
- "/img/python.png" : "Python for Data Analysis"
---

# _Preface_

_As a new international graduate student without much work experience in North America, starting a career is always not an easy errand. But I still strongly believe that I would finally receive my dream offer at someday in the future. I always believe._

The following notes are mainly based on the book **Python for Data Analysis (2nd Edition)** written by Wes McKinney, which is [available](https://www.programmer-books.com/wp-content/uploads/2019/04/Python-for-Data-Analysis-2nd-Edition.pdf) online.

- [Overview](#chapter-1)
- [Python Basics, IPython and Jupyter Notebooks](#chapter-2)
- [Built-in Data Structure, Functions and Files](#chapter-3)
- [Numpy Basics](#chapter-4)
- [Pandas Basics](#chapter-5)
- [Data Loading, Storage and File Formats](#chapter-6)
- [Data Manipulation](#chapter-7)

# Chapter 1
# Overview

An overview of Python and the common libraries. Also talked about the content distribution of this book.

# Chapter 2 
# Python Basics, IPython and Jupyter Nootbooks

- IPython is an enhanced Python interpreter
- Type `ipython` on the command line to launch **ipython** 
- Jupyter Notebooks is created within IPython project
- Type `jupyter notebook` on the command line to launch **Jupyter Notebook**
- In IPython or Jupyter Notebooks, use `<tab>` key to see all variables sharing the same beginning
- Typing `?` after variable names will display some general info
- Typing `??` will show the source code if possible
- Try `np.*load*?` for yourself
- Try `%run` and `%load` for yourself
- Other magic commands in IPython includes: `%timeit`, `%debug`, `%pwd`, refer to **Page 29** of the book
- Type `%matplotlib inline` in Jupyter Notebook to avoid to interfere with the console session
- Python uses ` `(whitespace or tabs) to structure code instead of using braces (such as R)
- After using `b=a`, if we make a change (such as `append()`, instead of assigning a new object) to `a`, then `b` will change simutaneously, vice versa
- `isinstance(object, type(s))` returns _True_ or _False_
- Try `object.<tab>` 
- **Page 37**: Binary operators and comparisons
- Strings and tuples(contained in `()`) are immutable but most of the rest is mutable(can be modified)
- Scalar types: None, str, bytes, float, bool, int (See **Page 39** for explanation)
- Use single quotes `'` or double quotes `"` for strings, use triple quotes `'''`, `"""` for multiline strings
- If need the backslash in strings, double-type it  `pytho\\n!` otherwise `pytho\n!` will output `pytho <new line> !`
- Add `r` before a string if there are a lot of `\`
- Strings can be added together to generate a new sentence
- Try to import `datetime` package and use `datetime`, `date` and `time`
- `strftime('date time format')` could format a datetime as a string
- `dt.replace(minute = 0)` could replace the minute as 0
- Two datetimes could add or minus each other, and the difference's type is `datetime.timedelta`, see **P 44** for more details regarding the datetime
- Try `if-elif-else`
- `for` loop could iterate over a collection (like a list or a tuple, even a string) or an iterator
- Use `continue` to skip some specific values in a loop
- Use `break` to stop a loop and output when encountering some specific values, but only works for inner loops
- Try `while` loops
- `pass` in Python is the `no-op` statement, which can be left as a placeholder
- `range` is often used for iterating through sequences by index
- Try `True if condition else False` (Ternary expression)


# Chapter 3
# Build-in Data Structures, Functions, Files

- Python's workhorse structures: tuples, lists, dicts and sets
- Use comma-separated sequence to define a tuple or a nested tuple
- Use `tuple()` to convert any sequence(such as lists and strings) or iterators to a tuple
- _tuple_ is immutable, and the object in it is also immutable **in each slot** even if the object itself is mutable
- `+` could concatenate tuples/lists
- Assign a tuple to a tuple-like expression, Python will unpack the tuple 
- Use `*rest` to _pluck_ a few elements from the beginning of tuples, use `*_` to discard unwanted values in tuples
- `tuple.count(object)` count the number of object in the tuple
- List is like tuple but mutable, use `list()` to convert 
- `list.append()` add to the end; `list.insert(index,object)` insert the object at the certain index; `list.pop(index)` removes and returns the object at the certain index
- Use `(not) in` to check whether the list(or tuple) contains the object
- `list.extend(another list)` used to extend one existing list, and it's faster than using `+` to concatenate two lists and thus preferable
- Use `sort` function to sort a list, but not for tuple
- `bisect.bisect()` returns the location where an element should be inserted to keep the list sorted; `bisect.insort()` actually inserts the element into that location
- Index `[]` is to slice the list, try `list[1:]`, `list[-1:]`, `list[-3:-1]` and `list[-1:-3]`, `list[::2]`, `list[::-1]`  for yourself
- Slicing method also works for tuples
- `enumerate(list/tuple)` function returns the index and the corresponding value in a list/tuple at each time, usually used in a for loop and used to compute a `dict`
- `sorted(list/tuple)` function returns a sorted list or tuple
- `zip` _pairs_ up the elements of a number of lists, tuples, or other sequences to create a
list of tuples, and it can be also used for unzip a list by `zip(*list)`, see **Page 61**
- `reversed` to reverse a list/tuple but have to come with a materialization (eg, `list()`)
- A `dict` is composed by `key` and `value`, both are Python objects (strings, lists...)
- Use `(not) in` to check whether a `key` is in the dict
- `del dict[key]` to delete the specific key and its value
- Use `dict.pop(key)` to delete the corresponding key and its value
- `list(dict.keys())` shows all keys in dict, `list(dict.values())` show all values
- `dict.update({another dict})` to update/add the dict
- `dict(zip(seq1, seq2))` can be used to generate a dict, try
- `dict.get(key, default)` help you to _get_ the corresponding _key_'s value, otherwise returns the default value if the key doesn't exist
- Check **Page 64** for some practical functions regarding `dict`
- Keys in dict are usually immutable, `hash()` function could tell whether one object is immutable or not
- `Set` is an unordered collection of _unique_ elements, like `{1,2,3}`. It can be created via `set(list/tuple)` function or via a _set literal_ with curly braces, just like a dict without values, only keys 
- The math set operaters are available here, see **Page 66**
- Set elements are generally immutable as well
- `set1.issubset(set2)` and `set1.issuperset(set2)` are used to check whether set1 is the subset/superset of set2
- Try `[expr for x in collection if condition]` for yourself (_list_)
- Try `{key-expr : value-expr for value in collection if condition}` for yourself (_dict_)
- Try `{value-expr for value in collection if condition}` for yourself (_set_)
- Check **Page 68** for _nested_ lsit comprehensions, which is just another concise expression of nested `for` loop
- Functions can have multiple returns
- Functions are objects
- Check `re.sub()` for yourself
- `str.strip()` remove whitespaces, `str.title()` define propercase
- Anonymous (Lambda) functions consist a single statement such as `f = lambda x: x**2`
- Using `yield` in a function is to create a _generator_ (iterable object)
- Another way is to use a list comprehension but within parentheses `(expr for x in collection)`, and we can modify its type with `list/tuple/set/dict` as we want
- Check `itertools` library in Python, see **Page 77**
- Try `try/except` for yourself (like `if/else`), we could also add more conditions after except, such as `ValueError` or `(TypeError, ValueError)`
- Try `file = open(path)` for yourself, add `file.close()` after finishing our work
- Check **Page 82** for more details about dealing with files in standard Python libraries
- The last subsection is about bytes and unicode


# Chapter 4
# NumPy Basics

Reasons for using Numpy:  
- Written in the C language and use much less memory than built-in Python sequences
- Perform complex computation on entire arrays without the need for Python `for` loops

## 4.1
## ndarray

- Try `data = np.random.randn(2,3)`
- Try `data.dtype` and `data.shape`
- `np.array()` create arrays, or convert other types to arrays
- `np.ones()`, `np.zeros()` and `np.empty()` return corresponding arrays, see **Page 90** for more array types
- **Page 91** for _Numpy_ data types
- Use `astype()` function to convert data type in Numpy
- Arrays can be applied with batch operations without `for` loop, we call this _Vectorization_
- The slicing array is the _view_ on the original array, thus a change in the slicing array will lead to a change in the original array. To avoid this, add `.copy()` after slicing
- For multi-dim arrays, use `array[1,2,:]` to slice/select. In a word, the slicing method is quite similar to that for Python lists
- Use _boolean indexing_ (True/False, 1/0) to slice an array
- Comparison operator `!=` has the same effect as negating the condition `~(A == B)`
- `and` and `or` don't work for boolean arrays, use `&` and `|` instead
- We can also self-define the order of rows/cols in the slicing array, see **Page 102**
- Try `np.arange(30).reshape(5,6)`, `np.arange(60).reshape(3,4,5)` for yourself
- `array.T` transpose 2-d array, `np.dot()` compute inner matrix product
- For higher dimensional arrays, transpose will accept a tuple of axis numbers to permute the axes, such as `arr.transpose((1,0,2))`
- check `arr.swapaxes(0,1)` for yourself

## 4.2
## Array Functions

- Try `np.sqrt(arr)`, `np.exp(arr)`, `np.maximum(arr1, arr2)`(arr1 and arr2 must have the same length)
- `np.modf(arr)` is the vectorized version of built-in Python `divmod`, returns the decimal and integer parts (two arrays) of an array
- Refer to **Page 107** for more functions

## 4.3
## Array-Oriented Programming with Arrays

- Try `np.meshgrid(arr1, arr1)` for yourself
- `np.where` is similar to `x if condition else y` in standard Python, used like `np.where(cond, arr1, arr2)`. At each slot, if `condition` is true then pick `arr1`, otherwise take `arr2`. Note, the last two arguments don't have to be arrays or same length, both or one of them could be scalar
- Try `arr.cumsum()` and `arr.cumprod()` for yourself
- Argument `axis=1`means _compute XXX across the columns_, # of anws should equal to # of rows
- Argument `axis=0`means _compute XXX across the rows_, # of anws should equal to # of columns
- Try basic statistical methods for yourself, see **Page 112**
- `any` and `all` are expecially useful for boolean arrays: `any` checks whether there is any `True` value; `all` checks whether the array are all `True`
- Arrays can also be sorted. `arr.sort()` will modify `arr` itself, but the top-level method `np.sort(array)` returns a copy of sorted array instead of modifying it
- We could use sorted array to find the quantile number, `sorted_array[int(Quantile * len(sorted_array))]`
- `np.unique(object)` returns the sorted unique values, basically as same as `sorted(set(object))`
- `np.in1d(arr1, arr2)` checks whether the value in `arr1` exists in `arr2`, also works for other types, eg lists and tuples, returns a boolean array
- Refer to **Page 115** for more array set operations


## 4.4 - 4.8

- Check **Page 115** for saving and loading data with Numpy
- `*` is element-wise product, `np.dot` or `x.dot(y)` excutes the matrix dot product
- `x @ y` also excutes a matrix dot product
- Try `inv`(inverse) and `qr`(QR decomposition) in _numpy.linalg_ for matrices, check **Page 117** for more functions
- Use `np.random.seed(1234)` to change the Numpy's GLOBAL random generation seed, `np.random.RandomState()` for a specific number/array, see **Page 119** for more np.random functions
- **Page 120** gives a simple application to simulate (multiple) random walks


# Chapter 5
# Pandas Basics

About Pandas:

- Often used with numerical computing tools like Numpy and Scipy, analytical libraries like statsmodels and scikit-learn, data visualization libraries like matplotlib
- Designed for working with tabular or heterogeneous data, but Numpy is mainly for homogeneous numerical array data
- Open source in 2010, has over 800 distinct contributors

## 5.1
## pandas Data Structures

- Two workhorse data structures: Series and DataFrame
- Series is formed by a sequence of values, called _values_ and an associated array of data labels, called _index_, the latter is not required
- Try `obj = pd.Series(arr)`, and then `obj.values`, `obj.index` by yourself
- `obj[ind]` returns the corresponding value, try `obj[[ind1,ind2,ind3]]` by yourself
- Series can also be treated as a sorted dict but with the fixed value length at 1
- Many Numpy's function also apply to pd.Series object, and many operators for dict also works for pd.Series objects
- `pd.Series(dict, index)` returns the _dict_'s keys in sorted order (order in _index_). If there is no `index1` in the previous _dict_, then _value_ is _NaN_; if `key1` in _dict_ is not in `index`, then it would be removed
- Check `pd.isnull(obj)` and `pd.notnull(obj)` by yourself
- Try `obj1 + obj2`, suppose they are similar but not the same index
- Each series object and its index have a `name` attribute, eg. `obj.name = 'population'`, `obj.index.name = 'state'`
- _DataFrame_ is a rectangular table of data with an collection of columns (**NOTE**: the book said the columns will be sorted automatically, but when I ran the same code in my PC, it's not. The Python version is `3.7.4` and I am using Jupyter Notebook)
- DataFrame has both a row and column index, can be viewed as a dict of Series sahring the same index
- You can use `pd.DataFrame(data, columns=['col3','col2','col1'])` to customize the column order
- If you pass a column that isn’t contained in the dict, it will appear with missing values _NaNs_
- Try `df['col1']` and `df.col1` yourself and see output
- Try `df.loc[row_index]`
- `df['col1']=..` or `df.col1=..` can be used to assign a list/array to an existing column
- If we assign a Series to a column, then its labels will be realigned exactly to the DataFrame’s index, inserting _NaN_ in any holes
- New column cannot be created with `df.col` syntax
- `del df['col1']` delete col1 from df, also doesn't work for `df.col1`
- The column returned from indexing a DataFrame is a view on the underlying data, which means any in-place change to the series will be reflected in the DataFrame. Try `copy()` function
- `df.T` to transpose 
- Compared with Series, DataFrame has one more `df.columns.name = ...` attribute
- Check **Page 134** for more possible data inputs to DataFrame
- _Index_ objects are immutable, but this makes it safe to share Index objects among data structures
- Pandas Index can contain duplicate labels, and there are also a number of related methods, see **Page 136** 

## 5.2
## Essential Functionality

- `obj.reindex([new index])` re-orders the obj by new index and introduce missing values if there is no corresponding index
- `obj.reindex(columns = [new column index])` used to re-order columns, see **Page 138** for more details
- Try `obj.drop('index1')` and `obj.drop(['index1', 'index2'])`
- To drop columns in a DataFrame object, you need to add columns before the index, or add `axis=1` or `axis = columns`
- `obj.drop(index, inplace=True)` will manipulate the object _in-place_ without returning a new object
- The slicing method is similar to Numpy array, except that we could also use the indices, not only numbers
- When using index, the slicing result will include the end index, different from numbers
- This indexing method cannot select a subset from DataFrame
- `loc` (indices) and `iloc` (numbers) enable us to select a subset of rows and columns from a DataFrame, see **Page 144** for more indexing options with loc and iloc
- when indexes are integer, try to use `loc` and `iloc`
- Try `series1 + series2` yourself, it works like the _outer join_ in database (thus there are often a lot of NaNs in the output DataFrame)
- To avoid NaNs, try `df1.add(df2, fill_value=0)`, `fill_value` argument can also be used in other places
- All basic arithematic methods (+,-,\*,/) have the counterpart, starting with the letter `r` (reverse, I guess), eg. `1/df1` equals to `df1.rdiv(1)`, see **Page 149** for more details
- When an array +/- a row/column, the computation would be performed for every row/col in the array, which is called _broadcasting_, same for the computation between DataFrame and Series
- `df.apply(func, axis)` apply function `func` to each row/column(default)
- Check `%` (format code) yourself
- Use `df.applymap(func)` function for every elements in `df`
- `obj.sort_index(axis, ascending)` returns a new, sorted object, and any missing values are sorted to the end of the Series by default
- Use `df.sort_values(by=...)` to sort a DataFrame by one or more columns
- Try `obj.rank()` yourself, then add `method='first'` as an argument into it and see what happened
- Check **Page 156** for more methods
- `obj.index.is_unique` returns whether `obj`'s labels are unique

## 5.3
## Descriptive Statistics

- Most basic mathematical and statistical methods in Pandas are similar to Numpy, and they have built-in handling for missing value, see **Page 159 & 160**
- `df.corrwith(series1/df1)` returns pairwise correlations between a DataFrame's cols and another series/df
- Try `series.unique()` yourself
- `obj.value_counts()` returns the unique values and their counts, `pd.value_counts(obj.values)` also works for arrays
- `obj.isin(target_list)` checks whether the value is in the target_list, returns a boolean series, is often used for filtering
- `Index.get_indexer` gives you an index array from an array of possibly non-distinct values into another array of distinct values, refer to **Page 164** for more details
- Apply `data.apply(pd.value_counts).fillna(0)` to your data and see what will happen


# Chapter 6
# Data Loading, Storage, and File Formats

- Focus on using pandas
- Input and output are mainly categorized as 

## 6.1 - 6.2

- **Page 167** provides tons of methods （eg. `read_csv()` and `read_table()`） to read tabular data as a DataFrame
- `df = pd.read_csv('filepath')` read the specific csv file 
- `df = pd.read_csv('filepath', sep=',')` specify the delimiter
- `pd.read_csv('examples/ex2.csv', header=None)` will let pandas assign default column names {0, 1, 2, ...}
- `pd.read_csv('examples/ex2.csv', names = ['a', 'b', 'c', 'd'])` Specify the column names by yourself
- `result = pd.read_csv('examples/ex5.csv', na_values=['NULL'])` 
- **Page 172** lists some frequently used options in `read_csv()` and `read_table()`
- Try `pd.options.display.max_rows = 10` and then print a DataFrame, see what happens
- `data.to_csv('out.csv')`, where `data` could be a DataFrame or a Series
- JSON (short for JavaScript Object Notation) data is one of the standard formats for sending data by HTTP
- Use `json.loads(jsonfile)` to convert a JSON string to Python form
- `pd.read_json()` assume each object in the JSON array is a row in the table
- `xlsx = pd.ExcelFile()` and then `pd.read_excel(xlsx, 'Sheet1')` FOR LOAD
- `writer = pd.ExcelWriter('examples/ex2.xlsx')` and then `frame.to_excel(writer, 'Sheet1')`

## 6.3 - 6.4

- Use `request` package to interact with Web APIs, see **Page 187**
- Use `sqlalchemy` package to access SQL databases, see **Page 190**, then use `pd.read_sql()`

_Since my main purpose is to learn how to do data analysis and my time now is not very much, I will have a glance this chapter for now._


# Chapter 7
# Data Cleaning and Preparation

## 7.1
## Handling Missing Data

- All descriptive statistics in Pandas exclude missing value by default
- Missing value for numeric data in pandas is represented as `NaN`, a floating-point value
- Try `dropna`, `fillna`, `isnull` and `notnull` yourself
- `dropna` for a DataFrame will drop any row containing a missing value by default
- Adding `how='all'` will only drop rows with all NAs, or `thresh=?` to restrict the number of missing value
- `df.fillna(0, replace=True)` fill NA with 0, and replace the previous DataFrame
- `df.fillna(data.mean())` fill NA with the mean value, see **Page 197** for more details

## 7.2
## Data Transformation

- `data.duplicated()` returns a boolean Series indicating whether each row is a duplicate (compared with the previous row)
- `data.drop_duplicates()` drops the duplicate; `data.drop_duplicates(['col1'])` drops the duplicate according to the `col1`; add `keep='last'` will keep the last duplicate instead of the first, which is the default
- `dict` could be viewed as a mapping in python
- Using `map` is a convenient way to perform element-wise transformations and other data cleanning-related operations
- `data.replace(value1, value2)` replace the value1 in data with value2, where value1 could be a list
- We can also use `map` to modify DataFrame's index, but we could use a more useful method `rename`, but `rename` won't save the change until you add `inplace=True`
- `pd.cut(values, bins)` returns a _categorical_ object, `bins` is to divide your data



### TBC




