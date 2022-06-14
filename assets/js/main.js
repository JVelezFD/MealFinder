// let recipe=document.getElementById("recipe");
// //google custom search api
// let googleapi='AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk';
// let apiCall='https://www.googleapis.com/customsearch/v1?key=AIzaSyAokFh6lKdcKUYeUx-39ZeqJAHVwyocZmk&cx=0376c30bf308d4095&q=breakfastrecipe';
//  fetch(apiCall)
//         .then(function(response) {
//           return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             console.log(data.items[1].htmlTitle);
//             var a= data.items;
//             var b = a.length;
        
//   for(i=0;i<=b-1;i++){
// var recipe1=document.createElement('p');
// recipe.appendChild(recipe1);
//  recipe1.innerHTML=data.items[i].htmlTitle;

//   }
//  youtubeAPI();
//  });


//youtube api
// get meal name from google search?
var recipeVidTitleEl = $(".recipeVidTitle");
var recipeVidFrameEl = $(".recipeVidFrame");
var mealName = "fish-tacos"; //sample meal name
//old key: AIzaSyD-YLZ0by6WplSCkblIufQSI-2tE_W5Vpw
var ytApiKey = "AIzaSyAbaqrxrs3TdOu7sGbZyN_ZPWOnXRH0aKs";
var searchLink = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + mealName + '&key=' + ytApiKey;

var vidDataArr = [];
var vidObjArr = [];

var videoObj = {
  vidId: "",
  vidTitle: "",
}


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
document.cookie = "SameSite=None; secure";



 





