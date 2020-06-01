var pCurrent = 1;
var sCurrent =0;
var sVoltage=0;

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  const saveFirstNumber = (num) => {
      pCurrent = parseInt(num)  }

  const calculate = () =>{
    
    document.getElementById("selection").innerHTML = "Primary Current= " + pCurrent
    sCurrent=pCurrent/5
    document.getElementById("secondaryc").innerHTML = "Secondary Current= " + sCurrent
    sVoltage=pCurrent*5
    document.getElementById("voltage").innerHTML = "CT Voltage= " + sVoltage
    return

  }