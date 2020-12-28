// from data.js
var tableData = data;

// YOUR CODE HERE!

//Selecting the table's body
var tbody = d3.select("tbody");

//Function for adding data to the table
function addToTable() {
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

addToTable();
var button = d3.select("filter-btn");
button.on("click", function(){
    var addValue = d3.select("#datetime").property("value");
    console.log(addValue);

    var tableFilter = tableData.filter(data => data.datetime === addValue);
    console.log(tableFilter);

    tbody.html("");
})

/* addToTable();
var button = d3.select("filter-btn");
button.on("click", function(){
    var addValue = d3.select("#city").property("value");
    console.log(addValue);

    var tableFilter = tableData.filter(data => data.city === addValue);
    console.log(tableFilter);

    tbody.html("");
}) */

    tableFilter.array.forEach(element => {
        var tbl = tbody.append("tr");
            tbl.append("td").text(obj.datetime);
            tbl.append("td").text(obj.city);
            tbl.append("td").text(obj.state);
            tbl.append("td").text(obj.country);
            tbl.append("td").text(obj.shape);
            tbl.append("td").text(obj.durationMinutes);
            tbl.append("td").text(obj.comments);
        });