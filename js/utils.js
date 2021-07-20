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
    bookTitleElement, 
    authorElement, 
    publishedDateFromElement, 
    publishedDateToElement,
    books) {

    var result = books
    var rangeStartingDate
    var rangeEndingDate

    if(bookTitleElement.value.length > 0) {
        result = result.filter(function(book) {
            if(book.title.toLowerCase().includes(bookTitleElement.value.toLowerCase())) {
                return true
            }

            return false
        })
    }

    if(authorElement.value.length > 0) {
        result = result.filter(function(book) {
            if(book.author.toLowerCase().includes(authorElement.value.toLowerCase())) {
                return true
            }

            return false
        })
    }

    if(publishedDateFromElement.value) {
        rangeStartingDate = new Date(publishedDateFromElement.value)
    } else {
        rangeStartingDate = new Date('1001-1-1')
    }

    if(publishedDateToElement.value) {
        rangeEndingDate = new Date(publishedDateToElement.value)
    } else {
        rangeEndingDate = new Date()
    }

    if(publishedDateFromElement.value || publishedDateToElement.value) {
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
