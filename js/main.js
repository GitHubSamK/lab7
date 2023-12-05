const searchBar = document.getElementById("search");
const artistName = document.getElementById("artist");
const container = document.getElementById("container");



searchBar.addEventListener("click", getEvents); 


function getEvents(){

    

fetch('https://api.predicthq.com/v1/events/?category=concerts', {
    method: "GET",
    headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "Bearer 9EcD8vkazw2_3v-UmcAJ_Zi16l_qrCzyAIWKUD8e"
      }
  })
  .then(response => response.json()) 
  .then(json => console.log(json.results))
  .catch(err => console.log(err));


} 

function displayEvents(){

}



//headers: {"Content-type": "application/json;charset=UTF-8;9EcD8vkazw2_3v-UmcAJ_Zi16l_qrCzyAIWKUD8e"}