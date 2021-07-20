# BookFinder - https://scheleon.github.io/BookFinder/

### Query Params

#### - Book Title

*Query made using book title will check if the  given query param is a substring of book title from library list*

#### - Author

*Query made using author name will check if the  given query param is a substring of any author from library list*

#### - Published date

*Query on published date can be easily made using the from and to range values in the form
for example, to get an exact match you set both from and to values in the form to your desired date*

Complex queries can be made like getting all the books published last month by J K Rowling,
for this, we'll just set the *from* date to 1st of last month and *to* date to last date of the previous month
and also set *author* to J K Rowling. This simple query will get us the desired results.

To get list of all the books presentt in the library, just make query using empty params.
