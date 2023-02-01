//GET DATA

projectID = localStorage.getItem('projectID');
projectID = parseInt(projectID);



if (typeof projectID === 'number') {
  console.log('projectID is a number');
} else if (typeof projectID === 'string') {
  console.log('projectID is a string');
} else {
  console.log('projectID is something else');
}

window.onload = function() {
    getData();
}
function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/project')
    .then(response => response.json())
    .then(data => {  

        const filteredProjects = data.projects.filter(projects => projects.id === projectID);
        console.log(filteredProjects);
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');

        for (const api of filteredProjects) {
        var daysId = `${api.id}`;
        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = `        
        
            
            <div id="project" class="item">   
                <p class = title>Project</p> 
                <p>ID : ${api.created_at}</p>
                <p>Type: ${api.projectName}</p>
                <p>Technology: ${api.projectTech}</p>
                <p>Start: ${api.projectStart}</p>
                <p>End: ${api.projectEnd}</p>
                <p>Deadline : ${daysId} day(s)</p>
                <p>Status : ${api.projectStatus}</p>
                <p>Manager : Carlos Sanchez</p>

            </div>    
            <div id="customer" class="item">
                <p class = title>Customer</p>
                <p>ID: ${api.agency[0].created_at}</p>
                <p>Customer: Jhon Smith</p>
                <p>Budget: ${api.projectBudget}$</p>
                
                
            </div>
            
            <div id="agency" class="item">
                <p class = title>Agency</p>
                <p>ID: ${api.agency[0].created_at}</p>
                <p>Budget: ${api.projectOffer}$</p> 
                <p>Manager: ${api.agency[0].Manager}</p>
                <p>Phone: ${api.agency[0].phone}</p>
                <p>Email: ${api.agency[0].email}</p>
                <p>Website: ${api.agency[0].web}</p>
                <p>From: ${api.agency[0].country} - ${api.agency[0].city}</p>
            </div>   
            
        `;
          			

        GridList.appendChild(DivItems);

        
        }
    });
}


function hideProgressBar() {
  const progressBar = document.getElementById('g-progressbar');
  progressBar.style.transition = 'opacity 0.5s ease-out';
  progressBar.style.opacity = 0;
}

function showProgressBar() {
  const progressBar = document.getElementById('g-progressbar');
  progressBar.style.transition = 'opacity 0.5s ease-out';
  progressBar.style.opacity = 1;
}