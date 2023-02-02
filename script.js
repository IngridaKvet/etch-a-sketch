


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
    newDiv.setAttribute("id", "Div1");
    
    //newDiv.classList.add("newDivStyle");
    

    newDiv.style.width = oneDivSize; 
    newDiv.style.height = oneDivSize; 
    
    
    newRow.appendChild(newDiv);
   // sketchcontainer.appendChild(newRow);
    
            y++;
        }
sketchcontainer.appendChild(newRow);
i++

    }
    }



function deleteDivs( ){
    const boxes = document.querySelectorAll('#Div1');
    boxes.forEach(Div1 => {
      Div1.remove();
    });
    
    const boxes2 = document.querySelectorAll('#DivRow');
    boxes2.forEach(DivRow => {
      DivRow.remove();
    });
    i=0;
}



    const slider = document.getElementById("myRange");
const sliderText = document.getElementById('sliderText');
let numOfDivs;

numOfDivs = parseInt(slider.value);

sliderText.innerHTML = slider.value + " X " + slider.value //current

slider.oninput = function() {
    deleteDivs();

    sliderText.innerHTML = this.value + " X " + this.value;; //update
   
     numOfDivs =parseInt(slider.value) ;
      createDivs(numOfDivs)
   
} 



/*
Say, you have stored user's input in a variable called numOfDivs.

    In HTML add a div with a .container class and store that in a variable, say containerEl in JavaScript.

    Create a function, say, createDivs that accepts a parameter num.

    Write a loop, say a FOR loop, with condition i < num.

    Create a div using Document.createElement().

    Write a CSS rule with selector div to add dimensions to the DIV.

    Add that class to the DIV created in step #3 using classList.add.

    Append the created div to containerEl using Node.appendChild().

    Call the createDivs passing it numOfDivs as the arugment.

Note that #7 also should happen inside the FOR loop block itself.

Best of luck!





function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }

  */