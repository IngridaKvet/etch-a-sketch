
const sketchcontainer = document.querySelector('.sketchpad');

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
    sketchcontainer.appendChild(newRow);
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



const slider = document.getElementById("myRange");
const sliderText = document.getElementById('sliderText');
let numOfDivs;

numOfDivs = parseInt(slider.value);
createDivs(numOfDivs);
sliderText.innerHTML = slider.value + " X " + slider.value //current

//fit the border to content
document.querySelector('.sketchpad').style.width = "fit-content";



slider.oninput = function() {
    deleteDivs();

    sliderText.innerHTML = this.value + " X " + this.value;; //update
   
     numOfDivs =parseInt(slider.value) ;
    createDivs(numOfDivs)

    //slider sketchpad dalis.
    const bigpad = document.querySelector('.sketchpad');
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
} 



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
    document.getElementById("backgroundBtn").style.backgroundColor = document.getElementById("myColor2").value;
    document.querySelectorAll("#Div1").forEach(Div1 => {
      Div1.style.backgroundColor = document.getElementById("myColor2").value;
  });
  }




 
//sketchpad drawing before user input
const bigpad = document.querySelector('.sketchpad');
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




// clear and erase part
// eraser
document.querySelector("#eraserBtn").addEventListener("click", erase)
function erase(){
  document.querySelector("#eraserBtn").style.backgroundColor = "#92ebf0"
  const divPressed = (e) => {
    e.target.style.backgroundColor = document.getElementById("myColor").value = "white";
    }
  
    elements.forEach(Div1 => Div1.addEventListener('mouseenter', divPressed));
}


//clear
document.querySelector("#clearBtn").addEventListener("click", clear)
function clear(){
 

  let clearColor = document.getElementById("backgroundBtn").style.backgroundColor = "white";
  document.querySelectorAll("#Div1").forEach(Div1 => {
    Div1.style.backgroundColor = clearColor;
});
}

//
    
