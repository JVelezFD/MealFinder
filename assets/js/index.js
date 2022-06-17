var choice1=document.getElementById("btnBreakfast");
var choice2=document.getElementById("btnLunch");
var choice3=document.getElementById("btnDinner");
var choicetext1=document.getElementById("btnBreakfast").innerHTML;
var choicetext2=document.getElementById("btnLunch").innerHTML;
var choicetext3=document.getElementById("btnDinner").innerHTML;




choice1.addEventListener("click", function(){
    localStorage.setItem("choice", choicetext1)
    location.href="display.html"
  
});
choice2.addEventListener("click", function(){
    localStorage.setItem("choice", choicetext2)
    location.href="display.html"
  
});
choice3.addEventListener("click", function(){
    localStorage.setItem("choice", choicetext3)
    location.href="display.html"
  
});