let recipe=document.getElementById("recipe");
let next1=document.getElementById("next1");
var option=localStorage.getItem("choice");
let img=document.getElementById("image1");
let recipedetail=document.getElementById("recipedetail");
let mealname=document.getElementById("mealname");
let dinnerData;
let breakfastData;
let lunchData;
console.log(option);
//edamam Api fetch
let apiCall='https://api.edamam.com/api/recipes/v2?app_id=&app_key=&q=dinner%rolls%rice&type=public&mealType=Dinner'
let apiCall1="https://api.edamam.com/api/recipes/v2?app_id=&app_key=&q=breakfast recipe&type=public&mealType=Breakfast";
let apiCall2="https://api.edamam.com/api/recipes/v2?app_id=&app_key=&q=lunch%soup%rice&type=public&mealType=lunch";
let i=0;
console.log(i);
if(option==="Dinner"){
  dinner();
  //localStorage.removeItem("choice");
}
if(option==="Breakfast"){
  Breakfast()
 // localStorage.removeItem("choice");
}
if(option==="Lunch"){
 lunch()
 // localStorage.removeItem("choice");
}

//Dinner Data
function dinner(){ 
  if(i>=2){
    mealname.innerHTML="Dinner Recipe";
     recipe.innerHTML=data.hits[i].recipe.label;
    img.src=dinnerData.hits[i].recipe.images.REGULAR.url;
    recipedetail.addEventListener('click', () => {
  location.href=dinnerData.hits[i].recipe.url;
    })
  }
  else{
  
 fetch(apiCall)
        .then(function(response) {
         return response.json();
        })
      .then(function (data) {
            console.log(data);
           //console.log(data.items[1].htmlTitle);
            //var a= data.items;
            //var b = a.length;
            dinnerData=data;
            //console.log(dinnerData);
        
  //for(i=0;i<=b-1;i++){
//var recipe1=document.createElement('p');
//recipe.appendChild(recipe1);
mealname.innerHTML="Dinner Recipe";
 recipe.innerHTML=data.hits[i].recipe.label;
img.src=data.hits[i].recipe.images.REGULAR.url;
recipedetail.addEventListener('click', () => {
  location.href=data.hits[i].recipe.url;
})
  })
}
  
}
function Breakfast(){
   if(i>=2){
     mealname.innerHTML="Breakfast Recipe";
     recipe.innerHTML=breakfastData.hits[i].recipe.label;
    img.src=breakfastData.hits[i].recipe.images.REGULAR.url;
    recipedetail.addEventListener('click', () => {
  location.href=breakfastData.hits[i].recipe.url;
    })
  }
  else{
 fetch(apiCall1)
        .then(function(response) {
         return response.json();
        })
      .then(function (data) {
            console.log(data);
            breakfastData=data;
           //console.log(data.items[1].htmlTitle);
            //var a= data.items;
            //var b = a.length;
        
  //for(i=0;i<=b-1;i++){
//var recipe1=document.createElement('p');
//recipe.appendChild(recipe1);
mealname.innerHTML="Breakfast Recipe";
recipe.innerHTML=data.hits[i].recipe.label;
img.src=data.hits[i].recipe.images.REGULAR.url;
recipedetail.addEventListener('click', () => {
  location.href=data.hits[i].recipe.url;
  })
  })
}
}

function lunch(){
   if(i>=2){
     mealname.innerHTML="Lunch Recipe";
     recipe.innerHTML=lunchData.hits[i].recipe.label;
    img.src=lunchData.hits[i].recipe.images.REGULAR.url;
    recipedetail.addEventListener('click', () => {
  location.href=lunchData.hits[i].recipe.url;
    })
  }
  else{
 fetch(apiCall2)
        .then(function(response) {
         return response.json();
        })
      .then(function (data) {
            console.log(data);
            lunchData=data;

mealname.innerHTML="Lunch Recipe";       
recipe.innerHTML=data.hits[i].recipe.label;
img.src=data.hits[i].recipe.images.REGULAR.url;
recipedetail.addEventListener('click', () => {
  location.href=data.hits[i].recipe.url;
  })

  })
}
}



next1.addEventListener("click", function() {
  i=i+1;
  console.log(i);
  if(option==="Dinner"){
  dinner()
  }
  else if ( option==="Breakfast"){
  Breakfast()
  }
  else{
    lunch()
  }
})
