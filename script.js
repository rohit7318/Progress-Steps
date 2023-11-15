const progressLine = document.getElementById("progress");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const circles = document.querySelectorAll(".circle");


let currentActive = 1; 


nextEl.addEventListener("click",()=>
{
    currentActive++;

    if(currentActive>circles.length)
    {
        currentActive = circles.length;
    }

    update();
});


prevEl.addEventListener("click",()=>{
    currentActive--;
    if(currentActive<1)
    {
        currentActive=1;
    }

    update();
})




function update()
{
    circles.forEach((circle , index)=>{
        if(index<currentActive)
        {
            circle.classList.add("active");
        }
        else 
        {
            circle.classList.remove("active");
        }
    });


    const activeClasses = document.querySelectorAll(".active");
    progressLine.style.width =(activeClasses.length -1 ) /(circles.length -1) * 100 +"%"; 


    if(currentActive===1)
    {
        prevEl.disabled=true;
    }
    else if(currentActive===circles.length)
    {
        nextEl.disabled=true;
    }
    else 
    {
        prevEl.disabled=false;
        nextEl.disabled=false;
    }
}




