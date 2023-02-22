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
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/projects')
    // fetch('./projects.json')
    .then(response => response.json())
    .then(data => {  

      addSubtitle = document.getElementById('grid');
      addSubtitle.innerHTML= `
      <div class='subtitle'>
          <p> Edit </p>
          <button id="edit"><img class='addIcon' src="../media/Edit.svg"></button>
          <p> Delete </p>
          <button id="delete"><img class='addIcon' src="../media/Delete.svg"></button>
          <p id='message'></p>               
      </div>`;

      // Get the button element by ID
      const deleteButton = document.getElementById("delete");

      // Add a click event listener to the button
      deleteButton.addEventListener("click", function() {
        deleteProject();
      });

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
                <p class = title>Project details</p> 
                <p>ID : ${api.created_at}</p>
                <p>Budget : ${api.projectBudget}$</p>
                <p>Type : ${api.projectName}</p>
                <p>Technology : ${api.projectTech}</p>
                <p>Start : ${api.projectStart}</p>
                <p>End : ${api.projectEnd}</p>
                <p>Status : ${api.projectStatus}</p>

            </div>             
            <div id="agency" class="item">
                <p class = title>Agency assigned</p>
                <p>ID : ${api.agency.created_at}</p>
                <p>ID : ${api.agency.agencyBudget}</p>
                <p>Name : ${api.agency.agencyName}</p>
                <p>Country : ${api.agency.agencyCountry}</p>
                <p>Website : ${api.agency.agencyWebsite}</p>
                <p>Manager : ${api.agency.agencyManager}</p>
                <p>Email : ${api.agency.agencyEmail}</p>
                <p>Phone : ${api.agency.agencyPhone}</p>
                
            </div>  
            <div id="projectManager details" class="item">
                <p class = title>Project manager</p>
                <p>ID : ${api.manager.created_at}</p>
                <p>Email : ${api.manager.managerEmail}</p>
                <p>Name : ${api.manager.managerFirstname} ${api.manager.managerLastname}</p> 
                <p>Phone : ${api.manager.managerPhone}</p>
                <p>Role : ${api.manager.managerRole}</p>  
                
            </div>
            <div id="projectManager details" class="item">
                <p class = title>Customer details</p>
                <p>ID : ${api.customer.created_at}</p>
                <p>Name : ${api.customer.customerFirstname} ${api.customer.customerLastname}</p>
                <p>Ref : ${api.customer.customerRef}</p>
                
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

function deleteProject() {

  document.getElementById('message').textContent = 'Deleting';
  const data = {projects_id: projectID};
  
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/projects/${projectID}`, {
    method: 'DELETE',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status === 200) {
      // Update the text of the message element to "deleted"
      document.getElementById('message').textContent = 'Succes!';
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  })
  .catch(error => {
    document.getElementById('message').textContent = 'Failed';
  });
} 