function alert(color, message) {
    alertBox=document.getElementById('alert-box')
    alertBox.style.background = color
    alertBox.style.borderColor = color
    alertBox.innerHTML = message
    alertBox.style.display = "block"

    setTimeout(function(){
        alertBox.style.display = "none"
    },3000)
}

function filterArrayOnParams(
    bookTitle, 
    author, 
    publishedDateFrom, 
    publishedDateTo,
    books) {

    var result = books
    var rangeStartingDate
    var rangeEndingDate

    if(bookTitle.length > 0) {
        result = result.filter(function(book) {
            if(book.title.toLowerCase().includes(bookTitle.toLowerCase())) {
                return true
            }

            return false
        })
    }

    if(author.length > 0) {
        result = result.filter(function(book) {
            if(book.author.toLowerCase().includes(author.toLowerCase())) {
                return true
            }

            return false
        })
    }

    if(publishedDateFrom) {
        rangeStartingDate = new Date(publishedDateFrom)
    } else {
        rangeStartingDate = new Date('1001-01-01')
    }

    if(publishedDateTo) {
        rangeEndingDate = new Date(publishedDateTo)
    } else {
        rangeEndingDate = new Date()
    }

    if(publishedDateFrom != null || publishedDateTo != null) {
        result = result.filter(function(book) {
            publishedDate = new Date(book.published)
            if(rangeStartingDate <= publishedDate && publishedDate <= rangeEndingDate){
                return true
            }

            return false
        })
    }
    return result
}

function constructTableFromResult(result) {
    var resultTable = document.createElement("TABLE")
    resultTable.setAttribute("id", "books")

    var tableHeadingRow = document.createElement("tr")

    var titleHeadingCell = document.createElement("th")
    titleHeadingCell.appendChild(document.createTextNode("Title"))

    var authorHeadingCell = document.createElement("th")
    authorHeadingCell.appendChild(document.createTextNode("Author"))

    var publishedDateHeadingCell = document.createElement("th")
    publishedDateHeadingCell.appendChild(document.createTextNode("Published Date"))


    tableHeadingRow.appendChild(titleHeadingCell)
    tableHeadingRow.appendChild(authorHeadingCell)
    tableHeadingRow.appendChild(publishedDateHeadingCell)

    resultTable.appendChild(tableHeadingRow)

    if(result.length == 0) {
        var tableContentRow = document.createElement("tr")

        var notFoundCell = document.createElement("td")
        notFoundCell.appendChild(document.createTextNode("Didn't find anything mathing your query"))
        notFoundCell.setAttribute("colspan", "3")
        notFoundCell.setAttribute("align", "center")

        tableContentRow.appendChild(notFoundCell)

        resultTable.appendChild(tableContentRow)
    }

    result.forEach(function(book) {
        var tableContentRow = document.createElement("tr")

        var titleCell = document.createElement("td")
        titleCell.appendChild(document.createTextNode(book.title))

        var authorCell = document.createElement("td")
        authorCell.appendChild(document.createTextNode(book.author))

        var publishedDateCell = document.createElement("td")
        publishedDateCell.appendChild(document.createTextNode(book.published))

        tableContentRow.appendChild(titleCell)
        tableContentRow.appendChild(authorCell)
        tableContentRow.appendChild(publishedDateCell)

        resultTable.appendChild(tableContentRow)
    })

    return resultTable
}
