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