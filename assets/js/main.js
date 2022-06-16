let recipe=document.getElementById("recipe");
//google custom search api
let googleapi='AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk';
let apiCall='https://www.googleapis.com/customsearch/v1?key=AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk&cx=0376c30bf308d4095&q=breakfastrecipe';
 fetch(apiCall)
        .then(function(response) {
          return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.items[1].htmlTitle);
            var a= data.items;
            var b = a.length;
        
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
  



 





