let recipe=document.getElementById("recipe");
let next1=document.getElementById("next1");
let previous1=document.getElementById("previous1");
var option=localStorage.getItem("choice");
let img=document.getElementById("image1");
let recipedetail=document.getElementById("recipedetail");
let mealname=document.getElementById("mealname");
let dinnerData;
let breakfastData;
let lunchData;
let meal1;
console.log(option);
//edamam Api fetch
let googleapi='AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk';
let apiCall='https://www.googleapis.com/customsearch/v1?key=AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk&cx=0376c30bf308d4095&q=breakfastrecipe';
let apiCall0='https://api.edamam.com/api/recipes/v2?app_id=a548ca0c&app_key=21bfdc6a49ab9438451159297881e944&q=dinner%rolls%rice&type=public&mealType=Dinner'
let apiCall1="https://api.edamam.com/api/recipes/v2?app_id=a548ca0c&app_key=21bfdc6a49ab9438451159297881e944&q=breakfast recipe&type=public&mealType=Breakfast";
let apiCall2="https://api.edamam.com/api/recipes/v2?app_id=a548ca0c&app_key=21bfdc6a49ab9438451159297881e944&q=lunch%soup%rice&type=public&mealType=lunch";
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
     recipe.innerHTML=dinnerData.hits[i].recipe.label;
     meal1=recipe.innerHTML;
    displayVideo(meal1)
    img.src=dinnerData.hits[i].recipe.images.REGULAR.url;
  //   recipedetail.addEventListener('click', () => {
  // location.href=dinnerData.hits[i].recipe.shareAs;
  //   })
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
meal1=recipe.innerHTML;
displayVideo(meal1)
img.src=data.hits[i].recipe.images.REGULAR.url;
recipedetail.addEventListener('click', () => {
  location.href=data.hits[i].recipe.shareAs;
})
  })
}
}
function Breakfast(){
   if(i>=2){
     mealname.innerHTML="Breakfast Recipe";
     recipe.innerHTML=breakfastData.hits[i].recipe.label;
      meal1=recipe.innerHTML;
    displayVideo(meal1)
    img.src=breakfastData.hits[i].recipe.images.REGULAR.url;
    recipedetail.addEventListener('click', () => {
  location.href=breakfastData.hits[i].recipe.shareAs;
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
 meal1=recipe.innerHTML;
  displayVideo(meal1)
img.src=data.hits[i].recipe.images.REGULAR.url;
recipedetail.addEventListener('click', () => {
  location.href=data.hits[i].recipe.shareAs;
  })

  })
}
}

function lunch(){
   if(i>=2){
     mealname.innerHTML="Lunch Recipe";
     recipe.innerHTML=lunchData.hits[i].recipe.label;
      meal1=recipe.innerHTML;
     displayVideo(meal1)
    img.src=lunchData.hits[i].recipe.images.REGULAR.url;
    recipedetail.addEventListener('click', () => {
  location.href=lunchData.hits[i].recipe.shareAs;
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
meal1=recipe.innerHTML;
displayVideo(meal1);
img.src=data.hits[i].recipe.images.REGULAR.url;
recipedetail.addEventListener('click', () => {
  location.href=data.hits[i].recipe.shareAs;
  })

  })
}
}



next1.addEventListener("click", function() {
  i=i+1;
  console.log(i);
  if(option==="Dinner"){
  dinner();
  initMap();
  }
  else if ( option==="Breakfast"){
  Breakfast();
  initMap();
  }
  else{
    lunch();
    initMap();
  }
})

previous1.addEventListener("click", function() {
  i=i-1;
  console.log(i);
  if(option==="Dinner"){
  dinner();
  initMap();
  }
  else if ( option==="Breakfast"){
  Breakfast();
  initMap();
  }
  else{
    lunch();
    initMap();
  }
})


var ytApiKey = 'AIzaSyAsBXKaD9_eZFOU47VxHRgamxC7SBp-uU0';
function displayVideo(meal) {
var mealName = meal; 
var recipeVidTitleEl = $(".recipeVidTitle");
var recipeVidFrameEl = $(".recipeVidFrame");
var searchLink = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + mealName + '&key=' + ytApiKey;

fetch(searchLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    recipeVidTitleEl.text(data.items[0].snippet.title);
    var videoLink = "https://www.youtube.com/embed/" + data.items[0].id.videoId;
    recipeVidFrameEl.attr("src",videoLink);
    displayDescription(data.items[0].id.videoId);
  });
};


function displayDescription(vidId) {
  var videoId = vidId;
  var videoDescriptEl = $('.videoDescript');
  var descriptSearch = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + ytApiKey;

  fetch (descriptSearch)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data: ");
    console.log(data);
    console.log(data.items[0].snippet.description);
    videoDescriptEl.text(data.items[0].snippet.description);
  });
};




// Google Maps

let breakfastOrigin = ['american','british', 'american', 'american', 'american','american', 'french', 'mexican', 'mediterranean','american','british','american','american','british','italian', 'mexican', 'italian', 'american', 'french','american'];
let lunchOrigin = ['french','south east asian', 'japan', 'south east asian', 'middle eastern', 'american', 'japanese', 'japanese', 'south east asian', 'japanese', 'american', 'middle eastern', 'south east asian', 'peruvian', 'russian', 'south east asia', 'american', 'american','american'];
let dinnerOrigin = ['italian', 'french', 'american','american', 'south east asian' ,'american', 'south east asian', 'french', 'south east asian', 'american', 'mexican', 'nordic', 'korean', 'american', 'korean', 'japanese', 'mexican', 'south east asian', 'japanese', 'middle eastern'];

let coordinates = [  //  USA 
  {lat: 39.8765,
  lng: -100.0195},
  //  Italy
  {lat: 43.0173, 
  lng: 12.4484},
  //  France
  {lat: 46.6432, 
  lng: 2.1176},
  //  South East Asia
  {lat: 14.4913, 
  lng: 106.4630},
  // Mexico
  {lat: 24.0981, 
  lng: -102.9505},
  // Nordic Region
  {lat: 63.0250,
  lng: 16.3037},
  // Korea
  {lat: 25.1858, 
  lng: 117.2977},
  // Japan
  {lat: 36.5938, 
  lng: 138.7109},
  // Middle East
  {lat: 32.9816,
  lng: 43.318},
  // British
 {lat:55.0072,
  lng:-2.9295},
  // Mediterranean
  {lat: 39.5141, 
  lng: 22.5282},
  // Peruvian 
  {lat:-10.2566, 
  lng:-75.6277},
  // Russian
  {lat:62.7323,
  lng: 93.8593},
];


function initMap() { 


  if(option==="Dinner"){

      if (dinnerOrigin[i] === 'american'){
        var latcoordinates = coordinates[0].lat;
        var lngcoordinates = coordinates[0].lng;
      } else if (dinnerOrigin[i] === 'italian'){
        var latcoordinates = coordinates[1].lat;
        var lngcoordinates = coordinates[1].lng;
      } else if (dinnerOrigin[i] === 'french'){
        var latcoordinates = coordinates[2].lat;
        var lngcoordinates = coordinates[2].lng;
      } else if (dinnerOrigin[i] === 'south east asian'){
        var latcoordinates = coordinates[3].lat;
        var lngcoordinates = coordinates[3].lng;
      } else if (dinnerOrigin[i] === 'mexican'){
        var latcoordinates = coordinates[4].lat;
        var lngcoordinates = coordinates[4].lng;
      } else if (dinnerOrigin[i] === 'nordic'){
        var latcoordinates = coordinates[5].lat;
        var lngcoordinates = coordinates[5].lng;
      } else if (dinnerOrigin[i] === 'korea'){
        var latcoordinates = coordinates[6].lat;
        var lngcoordinates = coordinates[6].lng;
      } else if (dinnerOrigin[i] === 'japanese'){
        var latcoordinates = coordinates[7].lat;
        var lngcoordinates = coordinates[7].lng;
      } else if (dinnerOrigin[i] === 'middle eastern'){
        var latcoordinates = coordinates[8].lat;
        var lngcoordinates = coordinates[8].lng;
      } else {
        var latcoordinates = coordinates[0].lat;
        var lngcoordinates = coordinates[0].lng;
      };
      
     } else if(option==="Breakfast"){
      if (breakfastOrigin[i] === 'american'){
        var latcoordinates = coordinates[0].lat;
        var lngcoordinates = coordinates[0].lng;
      } else if (breakfastOrigin[i] === 'italian'){
        var latcoordinates = coordinates[1].lat;
        var lngcoordinates = coordinates[1].lng;
      } else if (breakfastOrigin[i] === 'french'){
        var latcoordinates = coordinates[2].lat;
        var lngcoordinates = coordinates[2].lng;
      } else if (breakfastOrigin[i] === 'south east asian'){
        var latcoordinates = coordinates[3].lat;
        var lngcoordinates = coordinates[3].lng;
      } else if (breakfastOrigin[i] === 'mexican'){
        var latcoordinates = coordinates[4].lat;
        var lngcoordinates = coordinates[4].lng;
      } else if (breakfastOrigin[i] === 'nordic'){
        var latcoordinates = coordinates[5].lat;
        var lngcoordinates = coordinates[5].lng;
      } else if (breakfastOrigin[i] === 'korea'){
        var latcoordinates = coordinates[6].lat;
        var lngcoordinates = coordinates[6].lng;
      } else if (breakfastOrigin[i] === 'japanese'){
        var latcoordinates = coordinates[7].lat;
        var lngcoordinates = coordinates[7].lng;
      } else if (breakfastOrigin[i] === 'middle eastern'){
        var latcoordinates = coordinates[8].lat;
        var lngcoordinates = coordinates[8].lng;
      } else {
       console.log('wrong lat/lon')}

    } else if(option==="Lunch"){
      if (lunchOrigin[i] === 'american'){
        var latcoordinates = coordinates[0].lat;
        var lngcoordinates = coordinates[0].lng;
      } else if (lunchOrigin[i] === 'italian'){
        var latcoordinates = coordinates[1].lat;
        var lngcoordinates = coordinates[1].lng;
      } else if (lunchOrigin[i] === 'french'){
        var latcoordinates = coordinates[2].lat;
        var lngcoordinates = coordinates[2].lng;
      } else if (lunchOrigin[i] === 'south east asian'){
        var latcoordinates = coordinates[3].lat;
        var lngcoordinates = coordinates[3].lng;
      } else if (lunchOrigin[i] === 'mexican'){
        var latcoordinates = coordinates[4].lat;
        var lngcoordinates = coordinates[4].lng;
      } else if (lunchOrigin[i] === 'nordic'){
        var latcoordinates = coordinates[5].lat;
        var lngcoordinates = coordinates[5].lng;
      } else if (lunchOrigin[i] === 'korea'){
        var latcoordinates = coordinates[6].lat;
        var lngcoordinates = coordinates[6].lng;
      } else if (lunchOrigin[i] === 'japanese'){
        var latcoordinates = coordinates[7].lat;
        var lngcoordinates = coordinates[7].lng;
      } else if (lunchOrigin[i] === 'middle eastern'){
        var latcoordinates = coordinates[8].lat;
        var lngcoordinates = coordinates[8].lng;
      } else if(lunchOrigin[i] === 'peruvian'){
        var latcoordinates = coordinates[9].lat;
        var lngcoordinates = coordinates[9].lng;
      } else if(lunchOrigin[i] === 'peruvian'){
        var latcoordinates = coordinates[10].lat;
        var lngcoordinates = coordinates[10].lng;
      } else {
        var latcoordinates = coordinates[0].lat;
        var lngcoordinates = coordinates[0].lng;}
    }
  

  var myLatLng = {lat: latcoordinates, lng: lngcoordinates };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
  });
}

window.initMap = initMap;

