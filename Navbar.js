function blink() 
{
    let h1 = document.querySelector("h1");
    if (h1.style.visibility == "hidden") 
    {
        h1.style.visibility = "visible";
    }
    else 
    {
        h1.style.visibility = "hidden";
    }
}
window.setInterval(blink, 700);
