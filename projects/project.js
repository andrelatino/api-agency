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
          <button id="edit"><img class='addIcon' src="../media/Edit.svg"></button>          
          <button id="delete"><img class='addIcon' src="../media/Delete.svg"></button>          
          <button id="add"><img class='addIcon' src="../media/plus.svg"></button>                        
      </div>
      `;

      // Get the button element by ID
      const deleteButton = document.getElementById("delete");
      deleteButton.addEventListener("click", function() {
        
        
        deleteProject();


      });

      // Get the button element by ID
      const addButton = document.getElementById("add");
      addButton.addEventListener("click", function() {
        window.location.href = './new.html';
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
                <p>ID : ${api.id}</p>
                <p>Ref : ${api.created_at}</p>
                <p>Budget : ${api.projectBudget}$</p>
                <p>Start : ${api.projectStart}</p>
                <p>End : ${api.projectEnd}</p>
                <p>Service : ${api.service.serviceName}</p>
                <p>Technology : ${api.technology.technologyName}</p>               
                <p>Status : ${api.workflow.workflowName}</p>
            </div>             
            <div id="agency" class="item">
                <p class = title>Agency assigned</p>
                <p>ID : ${api.agency.id}</p>
                <p>Ref : ${api.agency.created_at}</p>
                <p>Name : ${api.agency.agencyName}</p>
                <p>Country : ${api.agency.agencyCountry}</p>
                <p>Website : ${api.agency.agencyWebsite}</p>
                <p>Manager : ${api.agency.agencyManager}</p>
                <p>Email : ${api.agency.agencyEmail}</p>
                <p>Phone : ${api.agency.agencyPhone}</p>
                
            </div>  
            <div id="projectManager details" class="item">
                <p class = title>Project manager</p>
                <p>ID : ${api.manager.id}</p>
                <p>Ref : ${api.manager.created_at}</p>
                <p>Email : ${api.manager.managerEmail}</p>
                <p>Name : ${api.manager.managerFirstname} ${api.manager.managerLastname}</p> 
                <p>Phone : ${api.manager.managerPhone}</p>
                <p>Role : ${api.manager.managerRole}</p>  
                
            </div>
            <div id="projectManager details" class="item">
                <p class = title>Customer details</p>
                <p>ID : ${api.customer.id}</p>
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

  openModal();

  // document.getElementById('message').textContent = 'Deleting';
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
      // document.getElementById('message').textContent = 'Succes!';
      showCheckmark();
      
      // window.location.href = './';

    } else {
      throw new Error(`Error: ${response.status}`);
    }
  })
  .catch(error => {
    // document.getElementById('message').textContent = 'Failed';
  });
} 


function openModal() {

  
  // create the modal overlay
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = 9999;

  // create the modal content
  var modal = document.createElement('div');
  modal.style.position = 'absolute';
  modal.style.width = '100px';
  modal.style.height = '100px';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
  modal.style.zIndex = 10000;
  modal.innerHTML = `
        
  <div class="center">
  <div id='holder'>
    <div id="spinner">
     <div class="spinner"></div>
    </div>
    <div id ="checkmark">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
    </div>
  </div>  
</div>          


  `;

  // add the modal content to the overlay
  overlay.appendChild(modal);

  // add the overlay to the document body
  document.body.appendChild(overlay);
}


function showCheckmark() {
  var checkmark = document.getElementById("checkmark");
  checkmark.style.display = "grid"; // Change to inline-block
  var spinner = document.getElementById("spinner");
  spinner.style.display = "none"; // Hide the spinner

  window.setTimeout(function(){   
     window.location.href = './';
  }, 1500);
}