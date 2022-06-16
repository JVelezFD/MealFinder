var choice1=document.getElementById("button1");
var choice2=document.getElementById("button2");
var choice3=document.getElementById("button3");
var choicetext1=document.getElementById("button1").innerHTML;
var choicetext2=document.getElementById("button2").innerHTML;
var choicetext3=document.getElementById("button3").innerHTML;




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