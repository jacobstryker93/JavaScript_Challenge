// from data.js
var tableData = data;

// YOUR CODE HERE!

//Selecting the table's body
var tbody = d3.select("tbody");

//Function for adding data to the table
function addToTable() {
    tableData.map(data => {
        var row = tbody.append("tr");

        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.comments);
    });
}

addToTable();
var button = d3.select("filter-btn");
button.on("click", function(){
    var addValue = d3.select("#datetime").property("value");
    console.log(addValue);

    var tableFilter = tableData.filter(data => data.datetime === addValue);
    console.log(tableFilter);

    tbody.html("");
})