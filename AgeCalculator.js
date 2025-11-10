let input=document.getElementById("dob");
console.log(input);

let display=document.querySelector(".display");
console.log(display);

let button=document.querySelector("button");
console.log(button);


button.addEventListener("click",(e)=>
{
    e.preventDefault();

    let  previous=new Date(input.value);
    console.log(previous);



    if(isNaN(previous))
    {
         display.innerHTML=`<h3>Please  Enter the Validate Date:</h3>`;
         return;
    }

    let current=new Date();
    
    let currentyear=current.getFullYear() - previous.getFullYear();
    let currentmonth=current.getMonth() - previous.getMonth();
    let currentday = current.getDate() - previous.getDate();
    
    
    if(currentmonth < 0 ||(currentmonth===0 && currentday<0 ))
    {
        currentyear--;
    }
    display.innerHTML=`<h3>Your Current Age is ${currentyear}</h3>`;
})
