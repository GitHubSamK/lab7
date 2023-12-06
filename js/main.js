const searchBar = document.getElementById("search");
const artistName = document.getElementById("artist");
const container = document.getElementById("container");



searchBar.addEventListener("click", getEvents); 


function getEvents(){

  let artist = artistName.value;
  container.innerHTML = '';   

fetch('https://api.predicthq.com/v1/events/?category=concerts&q=' + artist, {
    method: "GET",
    headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "Bearer 9EcD8vkazw2_3v-UmcAJ_Zi16l_qrCzyAIWKUD8e"
      }
  })
  .then(response => response.json()) 
  
  .then(json => {
    
    for (let event of json.results) {
      
      let concertDiv = document.createElement("div");
      concertDiv.className = "event";
      
      let concertTitle = document.createElement("h2");
      concertTitle.className = "showtitle";
      concertTitle.textContent = event.title;
    
      let concertLocation = document.createElement("p");
      concertLocation.className = "showlocation";
      concertLocation.textContent = event.location[1] + ", " + event.location[0];

      let concertDate = document.createElement("p");
      concertDate.className = "showdate";
      concertDate.textContent = event.start;
     
     
      let concertDescription = document.createElement("p");
      concertDescription.className = "showdescription";
      concertDescription.textContent = event.description;
      
      
      concertDiv.appendChild(concertTitle);
      concertDiv.appendChild(concertDescription);
      concertDiv.appendChild(concertDate);
      concertDiv.appendChild(concertLocation);
      
      container.appendChild(concertDiv);
    }
  })
  .catch(err => console.log(err));
}






