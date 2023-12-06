const searchBar = document.getElementById("search");
const artistName = document.getElementById("artist");
const container = document.getElementById("container");

const header = document.querySelector(".header");
header.classList.add("hide");

searchBar.addEventListener("click", getEvents); 


function getEvents(e){

  

  let search = artistName.value;
  container.innerHTML = '';  
   
  
fetch('https://api.predicthq.com/v1/events/?category=concerts&q=' + search, {
    method: "GET",
    headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "Bearer 9EcD8vkazw2_3v-UmcAJ_Zi16l_qrCzyAIWKUD8e"
      }
  })
  .then(response => response.json()) 
  
  .then(json => {

    if(json.results.length === 0){
      container.innerHTML = '<p> No concerts found at this time </p>'
    }
    else{
    
    for (let event of json.results) {
      
      let concertDiv = document.createElement("tr");
      concertDiv.className = "event";
      
      let concertTitle = document.createElement("td");
      concertTitle.className = "showtitle";
      concertTitle.textContent = event.title;
    
      let concertLocation = document.createElement("td");
      concertLocation.className = "showlocation";
      concertLocation.textContent = event.location[1] + ", " + event.location[0];

      let concertDate = document.createElement("td");
      concertDate.className = "showdate";
      concertDate.textContent = event.start;
     
     
      let concertDescription = document.createElement("td");
      concertDescription.className = "showdescription";
      concertDescription.textContent = event.description;
      
      
      concertDiv.appendChild(concertTitle);
      concertDiv.appendChild(concertDescription);
      concertDiv.appendChild(concertDate);
      concertDiv.appendChild(concertLocation);
      
      container.appendChild(concertDiv);

      
      if(e){
        header.classList.remove("hide");
      }
    }
    }
  })
  .catch(err => console.log(err));
}






