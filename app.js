var today = new Date()
var eid = new Date("July 10, 2022")

var mstoday = today.getTime()
var mseid = eid.getTime()
var diff = mseid - mstoday
var diff2 = (Math.floor(diff / (1000 * 60 * 60 * 24)))
console.log(diff2)


document.getElementById('date').innerHTML = " Only " + diff2 + " Days are Left on Bakra Eid Season 2022"