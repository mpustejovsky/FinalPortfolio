const FPS = 30;
var bs = 10;
var bx=[], by=[];

var xv=[],yv=[];

var canvas,context;

var interval;

var numballs=1;
// load canvas
canvas=document.getElementById("gameCanvas");
context = canvas.getContext("2d");
canvas2=document.getElementById("gameCanvas2");
context2 = canvas2.getContext("2d");

// set up interval (gam loop)

const startelec = () =>{
  console.log("balls = " +numballs)
   interval = setInterval(update,1000/FPS);
   var element = document.getElementById("testexp");
  element.classList.add("explode");
  
}

const stopelec = () => {
  clearInterval(interval);
  var element = document.getElementById("testexp");
  element.classList.remove("explode");
}

//ball starting postion
for(let i=0;i<numballs;i++){
bx[i] = canvas.width/2;
by[i] = canvas.height/2;
console.log(bx[i]);


//random ball starting speed (between 100 and 200)

xv[i]=Math.floor(Math.random() * 101 +100)/FPS;
yv[i]=Math.floor(Math.random() * 101 +100)/FPS;
console.log(i);
console.log("ball speed = " + xv[i])

//random ball direction
if (Math.floor(Math.random()*2) == 0){
  xv[i]=-xv[i]
}
if (Math.floor(Math.random()*2) == 0){
  yv[i]=-yv[i]
}
  console.log("direction = " + xv[i])}

//update function

function update(){

  for(let i=0;i<numballs;i++) {
//move the ball
bx[i] += xv[i];
by[i] += yv[i];

//bounce the ball of each wall
if (bx[i]-bs/2 < 0 && xv[i] < 0){
  xv[i]=-xv[i];
}

if (bx[i]+bs/2 > canvas.width && xv[i] >0){
  xv[i]=-xv[i];
}
if (by[i]-bs/2 < 0 && yv[i] < 0){
  yv[i]=-yv[i];
}

if (by[i]+bs/2 > canvas.height && yv[i] >0){
  yv[i]=-yv[i];
}


//draw background and ball 
context.fillStyle = "black";
context.fillRect(0,0,canvas.width, canvas.height);
context2.fillStyle = "black";
context2.fillRect(0,0,canvas2.width, canvas2.height);


for(let i2=0;i2<numballs;i2++){
context.fillStyle="blue";
context.fillRect(bx[i2]-bs/2,by[i2]-bs/2,bs, bs);
context2.fillStyle="blue";
context2.fillRect(bx[i2]-bs/2,by[i2]-bs/2,bs, bs);
}


}
}

const saveNumberBalls = (passednumber) =>{
  numballs=passednumber;
  if (numballs>100){
    numballs=100;
  }
  console.log(numballs)
  for(let i=0;i<numballs;i++){
    bx[i] = canvas.width/2;
    by[i] = canvas.height/2;
    console.log(bx[i]);
    
    
    //random ball starting speed (between 100 and 200)
    
    xv[i]=Math.floor(Math.random() * 101 +100)/FPS;
    yv[i]=Math.floor(Math.random() * 101 +100)/FPS;
    console.log(i);
    console.log("ball speed = " + xv[i])
    
    //random ball direction
    if (Math.floor(Math.random()*2) == 0){
      xv[i]=-xv[i]
    }
    if (Math.floor(Math.random()*2) == 0){
      yv[i]=-yv[i]
    }
      console.log("direction = " + xv[i])}
}
