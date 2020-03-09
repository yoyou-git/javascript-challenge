// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!
function populate_table(list){
var selector=d3.select("tbody")
selector.html("") 
list.forEach(function(obj){
 var row=selector.append("tr") 
 for(var key in obj){
     var cell=row.append("td")
     cell.text(obj[key])
 }
})

}
populate_table(tableData)
var filter_button=d3.select("#filter-btn")
filter_button.on("click",function(){
    var userInput=d3.select("#datetime").property("value")
    var filtertable=tableData.filter(obj => obj.datetime==userInput)
    populate_table(filtertable)
})
