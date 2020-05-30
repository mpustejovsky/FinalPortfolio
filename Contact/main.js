

let namex = null


function myFunction2() {
  alert (namex + " Thank you! I will get back to you within a few days")
  
  
  /*document.getElementById("clearme").innerHTML = "Calculator Cleared" 
  document.getElementById("result").innerHTML = "Results Will Display Here" */
}

const saveFirstName = (jjj) => {
  namex=jjj
  console.log (namex)

}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}