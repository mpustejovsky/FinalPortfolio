
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