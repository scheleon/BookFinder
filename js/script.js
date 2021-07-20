const books = [{
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J K Rowling",
    "published": "1997-06-26"
  }, {
    "title": "The Lost Symbol",
    "author": "Dan Brown",
    "published": "2009-09-15"
  }]

document.getElementById("goToSearchButton").addEventListener("click", function() {
    document.getElementById("add-book-div").toggleAttribute("hidden")
    document.getElementById("search-form-div").toggleAttribute("hidden")
})

document.getElementById("goToAddBookButton").addEventListener("click", function() {
    document.getElementById("search-form-div").toggleAttribute("hidden")
    document.getElementById("add-book-div").toggleAttribute("hidden")
    document.getElementById("result").innerHTML = ""
})

document.getElementById("addBookButton").addEventListener("click", function() {
    var bookTitleElement = document.getElementById("bookTitle")
    var authorElement = document.getElementById("author")
    var publishedDateElement = document.getElementById("publishedDate")

    books.push({
        title: bookTitleElement.value,
        author: authorElement.value,
        published: publishedDateElement.value 
    })

    alert('green', 'Book added to library')

    bookTitleElement.value = ''
    authorElement.value = ''
    publishedDateElement.value = ''
})

document.getElementById("searchButton").addEventListener("click", async function(){
    var bookTitleElement = document.getElementById("bookTitleForSearch")
    var authorElement = document.getElementById("authorForSearch")
    var publishedDateFromElement = document.getElementById("publishedDateFromForSearch")
    var publishedDateToElement = document.getElementById("publishedDateToForSearch")

    var result = filterArrayOnParams(
        bookTitleElement, 
        authorElement, 
        publishedDateFromElement, 
        publishedDateToElement,
        books
    )

    document.getElementById("result").innerHTML = ""

    document.getElementById("result").appendChild(constructTableFromResult(result))
})
