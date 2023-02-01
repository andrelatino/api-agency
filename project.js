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
                <p>Budget : ${api.projectBudget}$</p>
                <p>Type : ${api.projectName}</p>
                <p>Technology : ${api.projectTech}</p>
                <p>Start : ${api.projectStart}</p>
                <div id ="${daysId}"></div>  
                <p>Status : ${api.projectStatus}</p>
                <p>Manager : Jhon Smith</p>

            </div>             
            <div id="agency" class="item">
                <p class = title>Agency Asigned</p>
                <p>ID : ${api.agency[0].created_at}</p>
                <p>Budget : ${api.projectOffer}$</p> 
                <p>Manager : ${api.agency[0].manager}</p>
                <p>Phone : ${api.agency[0].phone}</p>
                <p>Email : ${api.agency[0].email}</p>
                <p>Website : ${api.agency[0].web}</p>
                <p>From : ${api.agency[0].country} - ${api.agency[0].city}</p>
                <p>Manager : ${api.agency[0].Manager}</p>
            </div>  
            <div id="projectManager" class="item">
                <p class = title>Project Manager</p>
                <p>Manager : André R.</p>               
                
            </div> 
            
        `;
          			

        GridList.appendChild(DivItems);

        var today = new Date();
        currentDate = today.getFullYear() + "-" + (today.getMonth() + 1).toString().padStart(2, '0') + "-" + today.getDate().toString().padStart(2, '0');
        var date_1 = new Date(currentDate);
        var date_2 = new Date(api.projectEnd);
        
        var day_as_milliseconds = 86400000;
        var diff_in_millisenconds = date_2 - date_1;
        var diff_in_days = diff_in_millisenconds / day_as_milliseconds;
        
        // alert(diff_in_days)
        var addDate = document.getElementById(daysId);
        addDate.innerHTML = "End : " +diff_in_days+" day(s)";
        
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