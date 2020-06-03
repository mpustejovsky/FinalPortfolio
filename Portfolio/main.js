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
    sCurrent=pCurrent/20
    document.getElementById("secondaryc").innerHTML = "Secondary Current= " + sCurrent
            if (sCurrent>5)
            {document.getElementById("secondaryc").style.color="red"
            document.getElementById("warning").innerHTML = "Warning Above Secondary Rating"
            } else {document.getElementById("secondaryc").style.color="black"
            document.getElementById("warning").innerHTML = ""}
    sVoltage=sCurrent*5
            if (sVoltage <100)
            {document.getElementById("voltage").innerHTML = "CT Voltage= " + sVoltage
            document.getElementById("voltage").style.color="black"
            }
            else{
              {document.getElementById("voltage").innerHTML = "CT SATURATED"
               document.getElementById("voltage").style.color="red"}
            }
   if ((blockdroping+blockdroping2)==2){
    sVoltage1=Math.floor(sVoltage)
    if (sVoltage>120){sVoltage1=120}
  document.getElementById("meterdisplay").innerHTML = sVoltage1}


    if (sCurrent > 5){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.getElementById("currentspan").innerHTML = sCurrent +"A"
    }
    if (sVoltage > 100){
      var modal = document.getElementById("myModal2");
      modal.style.display = "block";
      document.getElementById("satspan").innerHTML = sVoltage +"V"
      }

    return

  }

  const closeit = () => {
    // Get the <span> element that closes the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  const closeit2 = () => {
    // Get the <span> element that closes the modal
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
  }
 
  /*------------------------Drag and Drop Code -------*/
  var blockdroping = 0;
var blockdroping2 = 0;
var black=0;
var red=0;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  if (blockdroping==0){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
 
  var changeme = document.getElementById(data)
  changeme.setAttribute('draggable',false);
  blockdroping=1;}
  if ((blockdroping+blockdroping2)==2){
    sVoltage1=Math.floor(sVoltage)
    if (sVoltage>120){sVoltage1=120}
    document.getElementById("meterdisplay").innerHTML = sVoltage1}
}
function drop2(ev) {
  if (blockdroping2==0){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data)); 
 
  var changeme = document.getElementById(data)
  changeme.setAttribute('draggable',false);
  blockdroping2=1;}
  
  if ((blockdroping+blockdroping2)==2){
    sVoltage1=Math.floor(sVoltage)
    if (sVoltage>120){sVoltage1=120}
    document.getElementById("meterdisplay").innerHTML = sVoltage1}
}

