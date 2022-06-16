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
let googleapi='AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk';
let apiCall='https://www.googleapis.com/customsearch/v1?key=AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk&cx=0376c30bf308d4095&q=breakfastrecipe';
let apiCall0='https://api.edamam.com/api/recipes/v2?app_id=&app_key=&q=dinner%rolls%rice&type=public&mealType=Dinner'
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
  
 fetch(apiCall0)
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
  for(i=0;i<=b-1;i++){
var recipe1=document.createElement('p');
recipe.appendChild(recipe1);
 recipe1.innerHTML=data.items[i].htmlTitle;

  }
 youtubeAPI;
 });



var meal = "fish-tacos"; //sample meal name

//get actual value of "meal" from google search/recipe?
displayVideo(meal);

function displayVideo(meal) {
//youtube api
var mealName = meal; 

var recipeVidTitleEl = $(".recipeVidTitle");
var recipeVidFrameEl = $(".recipeVidFrame");

var ytApiKey = "AIzaSyD4MIilTmWgkRGpkukDcnqegu0wJP1Q-Qk";
var searchLink = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + mealName + '&key=' + ytApiKey;

fetch(searchLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log('Raw data from search results');
    // console.log("data: ");
    // console.log(data);
    // console.log('Individual search result items:');
    // console.log("data.item: ");
    // console.log(data.items);
    recipeVidTitleEl.text(data.items[0].snippet.title);
    var videoLink = "https://www.youtube.com/embed/" + data.items[0].id.videoId;
    recipeVidFrameEl.attr("src",videoLink);
  });
};
  



 





