
var j=0;
var j2=0;


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  //Function to rotate image and core value in welcom area//
  const nextImage = () =>{
    var timer = setInterval(change, 3000);
    var timer2= setInterval(change2, 4250);
    
    console.log("hello")
    }
    
    var change = () =>{

        if (j==1){
        document.getElementById("WelcomeArea").style.backgroundImage = "url('./img/hardworking.webp')";
        document.getElementById("wpar").textContent = "  I am Hard Working"
      
        }

        if (j==2){
          document.getElementById("WelcomeArea").style.backgroundImage = "url('./img/electricalsuit.jpg')";
          document.getElementById("wpar").textContent = "  I am an Electrical Subject Matter Expert"
        }

          if (j==3){
            document.getElementById("WelcomeArea").style.backgroundImage = "url('./img/training.webp')";
            document.getElementById("wpar").textContent = "  I am an Experienced Trainer"
          }

            if (j==4){
              document.getElementById("WelcomeArea").style.backgroundImage = "url('./img/business.webp')";
              document.getElementById("wpar").textContent = "  I have Business Acumen"
            }
       
              if (j==0){
                document.getElementById("WelcomeArea").style.backgroundImage = "url('./img/puzzle1.jpg')"; 
                document.getElementById("wpar").textContent = " I am a Problem Solver"
              }
        
                
       
        j++;  
         if (j==5)
                {j=0
                }
        console.log(j)
    }

    var change2 = () =>{

      if (j2==1){
      document.getElementById("WelcomeArea2").style.backgroundImage = "url('./img/reponsiveprograming.webp')";
      document.getElementById("WelcomeArea3").textContent = "Skills Include: Responsive Websites"
    
      }

      if (j2==2){
        document.getElementById("WelcomeArea2").style.backgroundImage = "url('./img/frontenddev.webp')";
        document.getElementById("WelcomeArea3").textContent = "Skills Include: Front End Development"
      }

        if (j2==3){
          document.getElementById("WelcomeArea2").style.backgroundImage = "url('./img/js.JPG')";
          document.getElementById("WelcomeArea3").textContent = "Skills Include: JavaScript"
        }

          if (j2==4){
            document.getElementById("WelcomeArea2").style.backgroundImage = "url('./img/api.webp')";
            document.getElementById("WelcomeArea3").textContent = "Skills Include: API"
          }
     
            if (j2==0){
              document.getElementById("WelcomeArea2").style.backgroundImage = "url('./img/html.webp')"; 
              document.getElementById("WelcomeArea3").textContent = "Skills Include: HTML Development"
            }
      
              
     
      j2++;  
       if (j2==5)
              {j2=0
              }
      console.log(j)
  }

//second script

  const FPS = 30;
var bs = 10;
var bx=[], by=[];

var xv=[],yv=[];

var canvas,context;

var interval;

var numballs=20;
// load canvas
canvas=document.getElementById("gameCanvas");
context = canvas.getContext("2d");
canvas2=document.getElementById("gameCanvas2");
context2 = canvas2.getContext("2d");
console.log("yes");
// set up interval (gam loop)

const startelec = () =>{
  console.log("balls = " +numballs)
   interval = setInterval(update,1000/FPS);
   var element = document.getElementById("explode1");
  element.classList.add("explode");
  var element2 = document.getElementById("explode2");
  element2.classList.add("explode");
  document.getElementById("gameCanvas").style.display="block";
  document.getElementById("gameCanvas2").style.display="block";
  document.getElementById("blinky").style.display="none";
  document.getElementById("logo").style.width="90px";
}

const stopelec = () => {
  clearInterval(interval);
  var element = document.getElementById("explode1");
  element.classList.remove("explode");
  var element2 = document.getElementById("explode2");
  element2.classList.remove("explode");
  document.getElementById("gameCanvas").style.display="none";
  document.getElementById("gameCanvas2").style.display="none";
  document.getElementById("blinky").style.display="block";
  document.getElementById("logo").style.width="150px";
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
