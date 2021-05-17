---
layout: post
title: SAS Study Notes (for beginners)
subtitle: last update 2021-04-07
bigimg:
- "/img/sas.png" : "SAS Printscreen"
---

**In this blog, I shall use 6-7 sections to record the basics in SAS. If you are a beginner and want to learn SAS like me, this blog may be helpful.**

- [SAS Syntax](#sas-syntax)
- [Data Import](#data-import)
- [Data Exploration and Validation](#data-exploration-and-validation)
- [Data Preparation](#data-preparation)
- [Data Analysis and Report](#data-analysis-and-report)
- [Data and Reports Export](#data-and-reports-export)
- [Ending](#ending)

# SAS Syntax
Two important types(steps): `DATA` and `PROC`.
```
DATA ...;
  some statements;
run;
```
```
PROC ...;
  some statements;
run;
```

And some global statements outside steps: `title`, `options` and `libname`.
```
title ...;
options ...;
libname ...;
```

**NOTES**
- All statements must end with a semicolon `;`
- Space and case insensitive
- Use `*` to make comments
- Press `F4` to add a new program, `F3` to execute the whole program or the selection
- Press `Ctrl+l` or click `Format Code` icon to automatically add spaces (format codes)

# Data Import
Here are two ways to access data in SAS: 
- Import data that you need
- Access data through libraries

## Import data directly

```
PROC IMPORT datafile dbms out <replace>;
      <guessingrows=n>;
RUN;
```

Here, `datafile` is used to define the file path, `dbms` identifies the file type, `out` defines the output SAS table's name,`<replace>` is used to overwrite the output if necessary, `<guessingrows=n>` is used to increase the number of rows SAS scans to determine each column's type and length (default is 20, up to 32,767).

Take the Comma-Delimited (CSV) file and the Excel (XLSX) file as examples:

```
PROC IMPORT datafile="file.csv" dbms=CSV out=output_table replace;
      guessingrows=100;
RUN;
```

```
PROC IMPORT datafile="file.xlsx" dbms=xlsx out=output_table;
      <sheet=sheet-name>; 
      * one .xlsx file may have several sheets
RUN;
```

There are many other `dbms` types, please refer to the [SAS help center](https://documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.5&docsetId=acpcref&docsetTarget=p0jf3o1i67m044n1j0kz51ifhpvs.htm&locale=en).

## Utilize a library

We could also import data by defining a library in SAS:
```
libname libref engine "path";
libname libref clear;
```
where `libref` is the name of our library, `engine` specifies the instruction to read the data. The second statement is used to remove the library when we don't need it anymore.

For example, we could use the following code to read all SAS tables in `mydata` folder.
```
libname mylib base "C:/data";
```
For Excel data, we need to set `engine` to `xlsx` instead of `base`. And when accessing .xlsx file through library, we could add `options validvarname=v7;` to force column names to adhere to strict SAS naming conventions.

**NOTES**
- SAS columns are either numeric or character, date values in SAS are a type of numeric value (take Jan 01, 1960 as the origin)
- `proc contents` will show the general information of one SAS table
```
proc contents data=sas-table;
run;
```
- When importing datasets, SAS tables without the library prefix will be automatically saved to the **Work** library, which is specially used to save the temporary files
- In `libname` statements, the argument `base` could be omitted because it's the default `engine`
- We usually need to re-run all the `libname` statements at the beginning in a project, so it's a good idea to put them together in a seperate file

# Data Exploration and Validation

We have covered the basic syntax of SAS and how to read data into a SAS program, and we could use `proc contents data;` to output the general information of a SAS table. Now, let's see how to explore and validate our data.

## Explore data

Here are some commonly used `proc` steps used to explore data (to help us gain some intuitive understanding):
```
****** PRINT: present the desired variables of limited rows ******
PROC PRINT data=sas-table(OBS=n);
    * OBS is optional, it defines the number of rows listed
    VAR col-names;
    * VAR names the variables in the output table
run;

****** MEANS: present means of specific variables ******
PROC MEANS data=sas-table;
    VAR col-names;
run;

****** UNIVARIATE: present more summary statistics as well as  ******
****** statistics related to distribution and extreme values.  ******
PROC UNIVARIATE data=sas-table;
    VAR col-names;
run;

****** FREQ: creates a frequency table for specific variables ******
PROC UNIVARIATE data=sas-table;
    tables col-names</ options>;
run;
```

## Filter, format and sort data

In this subsection, I want to introduce three basic and commonly-used methods to check our data.

### Filtering Data

No matter in `data` step or `proc` step, we could both use `where` statement to filter data.

```
proc ...;
    WHERE expression;
run;

data ...;
    set ...;
    WHERE expression;
run;
```

The common operators are given below.

Operators | Functions
------------ | -------------
= or EQ | equal to
^= or ~= or NE | not equal to
> or GT | greater than
< or LT | lower than
>= or GE | greater than or equal to
<= or LE | lower than or equal to
BETWEEN...AND...| falls into the range or not
LIKE | Variable has the similar 'appearence'
IS (NOT) MISSING | Variable has missing values or not
IS (NOT) NULL | Variable is null or not
(NOT) IN | Variable falls in the specific set or not

For example, we could use `WHERE name LIKE "%Lincoln_uo";` to select rows whose variable `name` is constructed as *Any character + Lincoln + A single character + uo*.

### Formatting Data

`FORMAT` statements are widely used in `DATA` and `PROC` steps. There are too many different formats in SAS, see [here](https://documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.5&docsetId=lestmtsref&docsetTarget=n0d5oq7e0oia0wn13nsins0x8nmh.htm&locale=en) for details. But remember when formatting data, there is always a  dot in or after the format name. For example, in the following code, we format the column `date` with `date7.`, like `01JAN21`, and format column `value` with `comma12.2`, like `135287.50`. We will also introduce how to customize `FORMAT` to achieve replacement in the future.

```
PROC SORT data=sas-table;
    BY col-name;
    FORMAT date date7.
           value comma12.2;
run;
```

### Sorting Data

The basic structure of `SORT` is as following:
```
PROC SORT DATA=input-table <OUT=output-table>;
   BY <DESCENDING> col-name(s);
RUN;
```
`by` statement names the criterion used to sort the table, and the default order is *ascending*. Typically, the `sort` step is necessary before we merge two datasets, or before we want to use `by` statement in other steps. Another usage of `proc sort` is to remove duplicates:
```
PROC SORT DATA=input-table <OUT=output-table>
          nodupkey <dupout=dupoutput-table>;
   BY _all_; * you can also replace _all_ with variables you are interest in
RUN;
```

# Data Preparation
After validating and exploring the raw data, we now need to prepare the data that we want. This process may include but not limit to: change the variable format, modify a proper length, add(define)/drop columns, transpose the table. In this section, we will talk about part of them.

The easiest way is to copy one existing dataset:
```
DATA new-table;
   SET original-table;
run;
```
By adding a `where` statement, we could only copy desired rows:
```
DATA new-table;
   SET original-table;
   WHERE expression;
run;
```
Sometimes, since the raw data format is not what we expect, then we need to use `format` statement to change it.
```
DATA new-table;
   SET original-table;
   WHERE expression;
   FORMAT column format.name; 
   /* DONT FORGET THE PERIOD; */
 run;
```
Meanwhile, to make our table concise and simple, we usually don't need to keep all variables in the output. With `keep/drop` statements, we could easily achieve that:
```
DATA new-table;
   SET original-table;
   WHERE expression;
   FORMAT column format.name;  /* DONT FORGET THE PERIOD !*/
   KEEP columns-you-need; /* DROP columns-you-hate; */
run;
```
Then let's talk about creating new variables. Essentially we just need to write down the expression of the new column in the data step, just like this:
```
DATA new-table;
   SET original-table;
   WHERE expression;
   FORMAT column format.name;  /* DONT FORGET THE PERIOD !*/
   new-column = expression;
   KEEP columns-you-need; /* DROP columns-you-hate; */
run;
```
_Take care of your new variable's length, otherwise it may get truncated!_
```
length new-column $ length-num;
```
One good news is SAS provides us with a bunch of built-in functions, and they basically cover most of our needs in dealing with data. Here is a glance of it:

Functions for numeric variables | Usage
--------------------- | --------------------
SUM(num1, num2, ...) | calculates the sum
MEAN(num1, num2, ...) | calculates the mean
MEDIAN(num1, num2, ...) | calculates the median
RANGE(num1, num2, ...) | calculates the range
MIN(num1, num2, ...) | calculates the minimum
MAX(num1, num2, ...) | calculates the maximum
N(num1, num2, ...) | calculates the nonmissing
NMISS(num1, num2, ...) | calculates the missing

  
Functions for char variables | Usage
--------------------- | --------------------
UPCASE(char1) | changes letters in a character string to uppercase 
LOWCASE(char1) | changes letters in a character string to lowercase
PROPCASE(char1) | changes the first letter of each word to uppercase and other letters to lowercase
CATS(char1, char2, ...) | concatenates character strings and removes leading and trailing blanks from each argument
SUBSTR(char, position, length) | returns a substring from a character string

  
Functions for date variables | Usage
--------------------- | --------------------
MONTH(sas-date-value) | returns a number from 1 through 12 that represents the month
YEAR(sas-date-value) | returns the four-digit year
DAY(sas-date-value) | returns a number from 1 through 31 that represents the day of the month
WEEKDAY(sas-datevalue) | returns a number from 1 through 7 that represents the day of the week (Sunday=1)
QTR(sas-date-value) | returns a number from 1 through 4 that represents the quarter
TODAY() | returns the current date as a numeric SAS date value
MDY(month, day, year) |  returns SAS date value from month, day, and year values
YRDIF(startdate, enddate, ‘AGE’) | calculates a precise age between two dates

Another common way to define new variables is to use `if-then-else`, and the following is its syntax:
```
IF expression THEN statement;
<ELSE IF expression THEN statement;>
<ELSE IF expression THEN statement;>
<ELSE statement;>
```
When there are over one statement you want to excute, try `do-end` block:
```
IF expression THEN DO;
   statement1;
   statement2;
   end;
<ELSE IF expression THEN DO;
   statement1;
   statement2;
   end;>
<ELSE IF expression THEN DO; 
   statement1;
   statement2;
   end;>
<ELSE DO;
   statement1;
   statement2;
   end;>
```

**NOTES**
- The first appearence of your new variable determines its length. For example:
```
data score;
   set student.grades;
   if grade='A' then evaluation='good';
   else if grade='A+' then evaluation='excellent';
   else evaluation = 'normal';
run;
```
As we can see, we defined a new column named _evaluation_, and the first place it appears is `evaluation='good'`, so the length of variable _evaluation_ is set at 4 as default, which means the other values `excellent` and `normal` will be truncated into `exce` and `norm`. So take care of your new variable's length
- We can also put `keep` and `drop` with `set original-table` together, like `set original-table(keep=col-names)`. However, this approach would come into effect at the beginning, which means we are only able to deal with part of variables in the original dataset
- There are many other powerful functions in SAS, refer to [this official document](https://documentation.sas.com/?cdcId=pgmsascdc&cdcVersion=9.4_3.5&docsetId=lefunctionsref&docsetTarget=titlepage.htm&locale=en)
- Remember to add `end;` after each `do;` statement, and the period `.` in every format 

# Data Analysis and Report

First of all, we won't talk very technical analysis skills in this section. Our main purpose is to give you a generic idea about what a data anlaysis report should be in SAS. 

## Global Setting in Reports

Like what we have saied when introducing SAS syntax, we could use some global statements to enhance our analysis:

```
TITLE "Put your title here";
FOOTNOTE "Put your footnote here";
LABEL colname = "label";

other statements;

TITLE;
FOOTNOTE;
```

Another useful global setting is **macro** variables. Like many other languages, we could assign a specific value (num or char) to a variable and then call it when needed. Also, we could modify its value to another when necessary.

```
%LET var-name = some value;

* for example *
data newtable;
  set oldtable;
  where col-name = "&var-name"; * for character
  * where col-name = &var-name; * for numeric
run;
```

**NOTE**
- We could also add more titles or footnotes to the same report using `title2 "...";` or `footnote2 "...";`
- it's a good habit to add blank `title` and `footnote` in the end of each report, otherwise they would influence others following it
- Macro variables are very useful, they can be basically used in anywhere in SAS

## Enhancing reports

At [Data Exploration and Validation](#data-exploration-and-validation), we have provided a few ways to gain a rough understanding of the data. In this section, we shall still stick to them but with more details.

Let's first have a loook at `proc freq`.
```
PROC FREQ DATA=input-table;
   TABLES col-name(s) </options>;
RUN;
```
Here, `options` are
- `NOCUM`: Disable cumulative frequency and percentage
- `NOPERCENT`: Disable percentage
- `PLOT=FREQPLOT`: Enable the frequency plot
- `OUT=output-table`: Enable output (personally haven't used)

**Note**, we could even utilize the techniques (`where`, `if/else then`, `by` etc) in [Data Preparation](#data-preparation) here. That is, we could merge the data preparation and data analysis together, which is what we usually do in many simple cases. This also apply for other steps like `proc means`.

Now let's look at `proc means`, for convenience I will just write down additional statements directly.
```
PROC MEANS DATA=input-table <stat-list> </options>;
   VAR col-name(s);
   CLASS col-name(s);
   WAYS n;
RUN;
```
Here, `options` is to control the output statistics such as `mean, sum, min, max, sd, maxdec=n` and etc, refer [here](https://documentation.sas.com/doc/en/pgmsascdc/9.4_3.5/proc/n1qnc9bddfvhzqn105kqitnf29cp.htm#n18lxsbsoqwygdn1kp23ql9j7sno) for more details. The `class` statement above is to group the output, just like `GROUP BY` in SQL. `ways` is dependent on the number of variables named in `class`, and its value is to control how many variables we used to group our final output. 

For example, the following step will generate a `means` table without grouping because `ways 0`, and also generate another two `means` table classified by `var1` and `var2` seperately due to `ways 1`. 
```
proc means ... ...;
    statements;
    class var1 var2;
    ways 0 1;
run;
```

With those additional options, we could make our reports more succinct according to our needs. We shall only cover these two commonly-used `proc` steps here.

# Data and Reports Export

Finally, let's talk about how to export our data and reports. 

## Data Export

Basically, there are two ways to export data, which are similar to those for importing data.

### Export data directly

```
PROC EXPORT DATA=input-table OUTFILE="output-file"
            <DBMS=identifier> <REPLACE>;
RUN;
```
Here, we could identify a variety of `dbms` formats for the output.

### Export data through a library

```
OPTIONS VALIDVARNAME=V7;
LIBNAME libref XLSX "path/file.xlsx";
... ...
LIBNAME libref CLEAR;
```
Here, we take `.xlsx` files as an example. At first we defined a file with a `libref`, then we just need to add this `libref` before SAS tables needed. The SAS table would become a worksheet in the final `.xlsx` file.

## Reports Export

The most common method is the `ODS` (Output Delivery System) statements. We could choose several common file types, specific themes/styles, etc... The general formula is 
```
ODS <destination> <destination-specifications>;

    /* SAS code that produces output */
    
ODS <destination> CLOSE;
```
`destination` could be:
- csvall
- excel
- powerpoint
- rtf (Rich text format, could be opened with word, notepad...)
- pdf

Specially, when output is a `xlsx` file, we usually add `options(sheet_name="name_A")` after `ods excel`.
```
ODS EXCEL FILE="filename.xlsx" STYLE=style OPTIONS(SHEET_NAME='name_A');

    /* SAS code that produces output */
    
    ODS EXCEL OPTIONS(SHEET_NAME='name_B');
    
    /* SAS code that produces output */

ODS EXCEL CLOSE;
```

Here is another example regarding the `pdf` file:
```
ODS PDF FILE="filename.pdf" STYLE=style STARTPAGE=NO PDFTOC=1;

    ODS PROCLABEL"label_A";
   /* SAS code that produces output */
    ODS PROCLABEL"label_B";
   /* SAS code that produces output */
  
ODS PDF CLOSE;
```
- `startpage=no` means we won't start a new page with a new output (table, plot, etc.), the dafault is `yes`
- `pdftoc=1` controls the level of expansion of the table of contents
- `ODS PROCLABEL "label_A";` gives the following procedure step a label, like the `sheet_name` in the `ods excel` before

# Ending

I guess the contents as above should be what I want to share for now, as a beginner. I was planning to finish this blog right after passing the SAS 9.4 Base Programming Exam but due to the amount of contents, I ended it until today (April 7th). I think I may start another blog to record more advanced knowledge and techniques of SAS in the near future, since I am preparing for my next SAS Advanced Programming Exam at the beginning of May. According to this, I guess I may finish that blog in the middle of next month.

But I want to talk about my understanding of SAS in my opinion, again, as a beginner. 

Since I am a R/Python user before, the reasons why I want to learn SAS mainly contain:
- Out of interest for programming and data science
- Hope these SAS certifications to help me find a job

Compared with R/Python, SAS difficulty is not tough, although another two is also not hard. But I found systax in it not very flexible. And because R/Python are open source, there are numerous libraries we could choose, the community is stronger, which leads to a stronger and richer functionality. However, purely out of the point of data management or data cleaning, SAS may be even better than R and Python sometimes!
