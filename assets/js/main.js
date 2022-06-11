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
 })
