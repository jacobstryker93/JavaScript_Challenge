// from data.js
var tableData = data;

// YOUR CODE HERE!

//Selecting the table's body
var tbody = d3.select("tbody");

//Function for adding data to the table
function addToTable(tableData) {
    tableData.map(data => {
        var tbl = tbody.append("tr");

        tbl.append("td").text(data.datetime);
        tbl.append("td").text(data.city);
        tbl.append("td").text(data.state);
        tbl.append("td").text(data.country);
        tbl.append("td").text(data.country);
        tbl.append("td").text(data.shape);
        tbl.append("td").text(data.durationMinutes)
        tbl.append("td").text(data.comments);
    });
}
//making the filter button work
addToTable(tableData);
var button = d3.select("#filter-btn");
button.on("click", function () {
    var tblValue = d3.select("#datetime").property("value");
    console.log(tblValue);

    var tableFilter = tableData.filter(data => data.datetime === tblValue);
    console.log(tableFilter);

    tbody.html("");
    addToTable(tableFilter);
});