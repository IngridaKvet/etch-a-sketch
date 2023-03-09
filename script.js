//running without user input
document.querySelector("#colorModeBtn").style.backgroundColor = "#92ebf0";
const bigpad = document.querySelector('.sketchpad');      
 //bigpad.addEventListener('mousedown', function(){drawSolidColor()});

let i = 0;
let y =0;

function createDivs(numOfDivs){
    let oneDivSize = 534/numOfDivs + "px";

    while(i<numOfDivs){
        const newRow = document.createElement("div");
        newRow.setAttribute("id", "DivRow");
        newRow.style.height = oneDivSize;
        newRow.classList.add("newDivStyle");
        y=0;

        while(y<numOfDivs){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "allDivs");
            newDiv.setAttribute("id", "Div1");
            newDiv.style.width = oneDivSize; 
            newDiv.style.height = oneDivSize; 
            newRow.appendChild(newDiv);
            y++;
            }
    bigpad.appendChild(newRow);
    i++
    }
 }

function deleteDivs( ){
    const divsToDelete = document.querySelectorAll('#Div1');
    divsToDelete.forEach(Div1 => {
      Div1.remove();
    });
    
    const divsToDelete2 = document.querySelectorAll('#DivRow');
    divsToDelete2.forEach(DivRow => {
      DivRow.remove();
    });
    i=0;
}

// user input part
const slider = document.getElementById("myRange");
const sliderText = document.getElementById('sliderText');
let numOfDivs;

numOfDivs = parseInt(slider.value);
createDivs(numOfDivs);
sliderText.innerHTML = slider.value + " X " + slider.value //current

slider.oninput = function() {
    deleteDivs();

    sliderText.innerHTML = this.value + " X " + this.value;; //update
   
     numOfDivs =parseInt(slider.value) ;
    createDivs(numOfDivs)
} 

//color mode button
document.querySelector("#colorModeBtn").addEventListener("click", function(){colorMode()})
function colorMode(){
  document.getElementById("eraserBtn").style.backgroundColor = "white";
  document.getElementById("clearBtn").style.backgroundColor = "white";
  document.getElementById("rainbowModeBtn").style.backgroundColor = "white";
  document.getElementById("darkenModeBtn").style.backgroundColor = "white";
  document.getElementById("lightenModeBtn").style.backgroundColor = "white";
  document.querySelector("#colorModeBtn").style.backgroundColor = "#92ebf0";

 
 let bigpad = document.querySelector('.sketchpad');   
 const elements = document.querySelectorAll('#Div1');

  function bigpressed(){
    const divPressed = (e) => {
      e.target.style.backgroundColor = document.getElementById("myColor").value;
      function bigPressed2(){
         
       elements.forEach(Div1 => Div1.removeEventListener('mouseenter', divPressed))

      }
      
      bigpad.addEventListener('mouseup', bigPressed2);
      }
  
       elements.forEach(Div1 => Div1.addEventListener('mouseenter', divPressed))
  

  } 
bigpad.addEventListener('mousedown', bigpressed);

// removing event listener to remove residue reaction
const buttonpressed = document.querySelectorAll('.buttons');
buttonpressed.forEach(buttons => buttons.addEventListener('click', () => {

  const bigpad = document.querySelector('.sketchpad');

    bigpad.removeEventListener('mousedown', bigpressed);
 }))
};

//rainbow mode button
document.querySelector("#rainbowModeBtn").addEventListener("click", rainbowMode)
function rainbowMode(){
  document.getElementById("eraserBtn").style.backgroundColor = "white";
  document.getElementById("clearBtn").style.backgroundColor = "white";
  document.getElementById("colorModeBtn").style.backgroundColor = "white";
  document.getElementById("darkenModeBtn").style.backgroundColor = "white";
  document.getElementById("lightenModeBtn").style.backgroundColor = "white";
  document.querySelector("#rainbowModeBtn").style.backgroundColor = "#92ebf0";

 const bigpad = document.querySelector('.sketchpad');      
 const elements = document.querySelectorAll('#Div1');

  function bigpressed(){
    const divPressed = (e) => {
      let randomcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
      e.target.style.backgroundColor = randomcolor;
      function bigPressed2(){
         
       elements.forEach(Div1 => Div1.removeEventListener('mouseenter', divPressed))

      }
      
      bigpad.addEventListener('mouseup', bigPressed2);
      }
  
       elements.forEach(Div1 => Div1.addEventListener('mouseenter', divPressed))
  

  } 
bigpad.addEventListener('mousedown', bigpressed);

// removing event listener to remove residue reaction
const buttonpressed = document.querySelectorAll('.buttons');
buttonpressed.forEach(buttons => buttons.addEventListener('click', () => {

  const bigpad = document.querySelector('.sketchpad');

    bigpad.removeEventListener('mousedown', bigpressed);
 }))
};


// color pickers

document.getElementById("colorBtn").addEventListener("click", function() {  
    document.getElementById("myColor").focus();
    document.getElementById("myColor").click();
  });

  document.getElementById("backgroundBtn").addEventListener("click", function() {  
    document.getElementById("myColor2").focus();
    document.getElementById("myColor2").click();
  });
  
  document.getElementById("colorBtn").style.backgroundColor = "black";
  const colorPicker = document.getElementById("myColor");
  colorPicker.oninput = function() {
    document.getElementById("colorBtn").style.backgroundColor = document.getElementById("myColor").value;
  }

  document.getElementById("backgroundBtn").style.backgroundColor = "white";
  const colorPicker2 = document.getElementById("myColor2");
  colorPicker2.oninput = function() {
   

    //jei pakeisti tik nepakeistus langelius?
   
    document.querySelectorAll("#Div1").forEach(Div1 => {
    
      Div1.style.backgroundColor = document.getElementById("myColor2").value;
  });

 document.getElementById("backgroundBtn").style.backgroundColor = document.getElementById("myColor2").value;
//console.log(document.getElementById("backgroundBtn").style.backgroundColor )
  
  }

// eraser
document.querySelector("#eraserBtn").addEventListener("click", erase)
function erase(){
 
  document.getElementById("colorModeBtn").style.backgroundColor = "white";
  document.getElementById("rainbowModeBtn").style.backgroundColor = "white";
  document.getElementById("darkenModeBtn").style.backgroundColor = "white";
  document.getElementById("lightenModeBtn").style.backgroundColor = "white";

  document.querySelector("#eraserBtn").style.backgroundColor = "#92ebf0"

    const bigpad = document.querySelector('.sketchpad');
    const elements = document.querySelectorAll('#Div1');
   
          function bigpressed(){
           const divPressed = (e) => {
    
            let clearColor = document.getElementById("backgroundBtn").style.backgroundColor;
    
    
    
  
             e.target.style.backgroundColor = clearColor;
             function bigPressed2(){
                elements.forEach(Div1 => Div1.removeEventListener('mouseenter', divPressed))
             }
      
             bigpad.addEventListener('mouseup', bigPressed2);
             }
              elements.forEach(Div1 => Div1.addEventListener('mouseenter', divPressed))
         } 
   bigpad.addEventListener('mousedown', bigpressed);


   const buttonpressed = document.querySelectorAll('.buttons');
buttonpressed.forEach(buttons => buttons.addEventListener('click', () => {

  const bigpad = document.querySelector('.sketchpad');

    bigpad.removeEventListener('mousedown', bigpressed);
 }))

   
}


//clear
document.querySelector("#clearBtn").addEventListener("click", clear)
function clear(){
  document.getElementById("eraserBtn").style.backgroundColor = "white";

  let clearColor = document.getElementById("backgroundBtn").style.backgroundColor;
  document.querySelectorAll("#Div1").forEach(Div1 => {
   
    Div1.style.backgroundColor = clearColor;
});
}


// lighten button
document.querySelector("#lightenModeBtn").addEventListener("click", uselightenMode)
function uselightenMode(){
  document.getElementById("eraserBtn").style.backgroundColor = "white";
  document.getElementById("clearBtn").style.backgroundColor = "white";
  document.getElementById("colorModeBtn").style.backgroundColor = "white";
  document.getElementById("rainbowModeBtn").style.backgroundColor = "white";
  document.getElementById("darkenModeBtn").style.backgroundColor = "white";

  document.querySelector("#lightenModeBtn").style.backgroundColor = "#92ebf0";

  const bigpad = document.querySelector('.sketchpad');      

  function lightendiv(){
    const elements = document.querySelectorAll('#Div1');
    const divPressed4 = (e) => {

      let divColor = e.target.style.backgroundColor;

    let justNumbers = divColor.slice(4,divColor.length-1)
  let arrayOfNUm= justNumbers.split(",")

  arrayOfNUm[0] = parseInt(arrayOfNUm[0])+20;
  arrayOfNUm[1] = parseInt(arrayOfNUm[1])+20;
  arrayOfNUm[2] = parseInt(arrayOfNUm[2])+20;

  if (arrayOfNUm[0] >= 255){
    arrayOfNUm[0] = 255;
  }

  if (arrayOfNUm[1] >= 255){
    arrayOfNUm[1] = 255;
  }

  if (arrayOfNUm[2] >= 255){
    arrayOfNUm[2] = 255;
  }

  if (arrayOfNUm[0] <= 0){
    arrayOfNUm[0] = 0
  }

  if (arrayOfNUm[1] <= 0){
    arrayOfNUm[1] = 0
  }

  if (arrayOfNUm[2] <= 0){
    arrayOfNUm[2] = 0;
  }

let newDivColor = "rgb(" + arrayOfNUm[0].toString() + "," + arrayOfNUm[1].toString() + "," + arrayOfNUm[2].toString() + ")"


e.target.style.backgroundColor = newDivColor;

      function bigPressed22(){
         elements.forEach(Div1 => Div1.removeEventListener('mouseenter', divPressed4))
         
      }
  
      bigpad.addEventListener('mouseup', bigPressed22);
      }
  
       elements.forEach(Div1 => Div1.addEventListener('mouseenter', divPressed4))
  }

bigpad.addEventListener('mousedown', lightendiv);

// removing event listener to remove residue reaction
const buttonpressed = document.querySelectorAll('.buttons');
buttonpressed.forEach(buttons => buttons.addEventListener('click', () => {

  const bigpad = document.querySelector('.sketchpad');

    bigpad.removeEventListener('mousedown', lightendiv);
 }))
}

// Darken mode
document.querySelector("#darkenModeBtn").addEventListener("click", useDarkenMode)
function useDarkenMode(){
  document.getElementById("eraserBtn").style.backgroundColor = "white";
  document.getElementById("clearBtn").style.backgroundColor = "white";
  document.getElementById("colorModeBtn").style.backgroundColor = "white";
  document.getElementById("rainbowModeBtn").style.backgroundColor = "white";
  document.getElementById("lightenModeBtn").style.backgroundColor = "white";

  document.querySelector("#darkenModeBtn").style.backgroundColor = "#92ebf0";

  function darkendiv(){
    const elements = document.querySelectorAll('#Div1');
    const divPressed4 = (e) => {
 
console.log(e.target.style.backgroundColor)

 let divColor = e.target.style.backgroundColor;

    let justNumbers = divColor.slice(4,divColor.length-1)
  let arrayOfNUm= justNumbers.split(",")

  arrayOfNUm[0] = parseInt(arrayOfNUm[0])-20;
  arrayOfNUm[1] = parseInt(arrayOfNUm[1])-20;
  arrayOfNUm[2] = parseInt(arrayOfNUm[2])-20;

  if (arrayOfNUm[0] >= 255){
    arrayOfNUm[0] = 255;
  }

  if (arrayOfNUm[1] >= 255){
    arrayOfNUm[1] = 255;
  }

  if (arrayOfNUm[2] >= 255){
    arrayOfNUm[2] = 255;
  }

  if (arrayOfNUm[0] <= 0){
    arrayOfNUm[0] = 0
  }

  if (arrayOfNUm[1] <= 0){
    arrayOfNUm[1] = 0
  }

  if (arrayOfNUm[2] <= 0){
    arrayOfNUm[2] = 0;
  }

let newDivColor = "rgb(" + arrayOfNUm[0].toString() + "," + arrayOfNUm[1].toString() + "," + arrayOfNUm[2].toString() + ")"
console.log(newDivColor)

e.target.style.backgroundColor = newDivColor;


      function bigPressed22(){
         elements.forEach(Div1 => Div1.removeEventListener('mouseenter', divPressed4))
         
      }
  
      bigpad.addEventListener('mouseup', bigPressed22);
      }
  
       elements.forEach(Div1 => Div1.addEventListener('mouseenter', divPressed4))
  }

bigpad.addEventListener('mousedown', darkendiv);

// removing event listener to remove residue reaction
const buttonpressed = document.querySelectorAll('.buttons');
buttonpressed.forEach(buttons => buttons.addEventListener('click', () => {

  const bigpad = document.querySelector('.sketchpad');

    bigpad.removeEventListener('mousedown', darkendiv);
 }))
}

// Darken mode
document.querySelector("#toggleGridLines").addEventListener("click", useGrid)
function useGrid(){
  document.querySelector("#toggleGridLines").style.backgroundColor = "#92ebf0";



  const elements = document.querySelectorAll('#Div1');
  elements.forEach(Div1 => Div1.style.border = "thin solid #000000")

  document.querySelector("#toggleGridLines").addEventListener("click", removeGrid)
function removeGrid(){
  


}



}








