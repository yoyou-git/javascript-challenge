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

