#joins.


##relationships

one to one - for every parent object there is exactly one child object
example a countrys only have one capitol

one to many -  one parent - many children
countrys have multiple citys. or authers have multiple books.

many to many -  many parents - many children. see, twins, arnold swartzenager and danny devito.
many authors collaborating on many movies.

one to many,
foreign key -  is an identifier and it usually correspoonds to a primary key in another table.

for example -  employees                            department
            primary key                              names
             dept key --------------------------->   primary key
            dept key, as foriegn key  is = to primary key on other table



foreign key constraints help us normalize our data.


cross join -  takes the cross product of both tables cortesion product
 lots of info.. brings everything back for everyone.. every combination of every row. in both tables. BOOM

 inner join  - set of rows from both tables that match a specific join predicate.
    say, select * from employees inner join on department on employees.debtkey = departnet.primary_key.

 left outer join - if you have null values in the table you are joining from.
 so u get all the rows from the the left table

 right outer join - if you have null values in the table you are joining to.
so you get all the rows from the right table.

 full outer join - all null values
 all values from each table.
 null or otherwise.
 





