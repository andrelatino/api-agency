// document.cookie = "name=value; SameSite=None; Secure";

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
        
        totalProjects = data.projects.length;
        if (totalProjects==0){
              addImageToCenter('../media/walking.svg','noProject');

        }

        addSubtitle = document.getElementById('grid');
        addSubtitle.innerHTML= `
        <div class='subtitle'>
            <p> Total : ${totalProjects}</p>
            <a class="addNew" href='./new.html' ><img class='addIcon' src="../media/Add.svg"></a>   
                   
        </div>`;
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');

        for (const api of data.projects) {
            
            var daysId = `days-${api.id}`;
            const DivItems = document.createElement('div');
            DivItems.className = 'items';
            DivItems.innerHTML = `
                <button class="edit" id="btn${api.id}">                
                    <div class="content">                   
                        
                        <p>ID : ${api.id}</p>
                        <p>Service : ${api.service.serviceName}</p>
                        <p>Budget : ${api.projectBudget}$</p>
                        <p>Status : ${api.workflow.workflowName}</p>                        
                        <p>Manager : ${api.manager.managerFirstname} ${api.manager.managerLastname}</p>                        
                    </div>
                    <div class = "media">                    
                            <div class="timer" id="${daysId}"></div>
                        <div class='icons'>
                            <img class='serviceIcon' src="../media/${api.service.serviceName}.svg">                            
                        </div>
                        
                    </div>
                </button>
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
        addDate.innerHTML = diff_in_days+"<span class='tiny'> Days</span>";

            const button = document.getElementById(`btn${api.id}`);
            button.addEventListener('click', () => {         
            
                localStorage.setItem("projectID", api.id);
                localStorage.setItem("projectRef", api.created_at); 
                window.location.href = './project.html';
                

            });
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

function addImageToCenter(imageUrl, id) {
    // create a new image element
    const imageElement = document.createElement('img');
    
    // set the source attribute to the provided URL
    imageElement.src = imageUrl;
    imageElement.id = id;
    // set the CSS styles to center the image
    imageElement.style.position = 'absolute';
    imageElement.style.top = '50%';
    imageElement.style.left = '50%';
    imageElement.style.width = '100%';
    imageElement.style.maxWidth = '600px';
    imageElement.style.transform = 'translate(-50%, -50%)';

  
    // add the image element to the body of the document
    document.body.appendChild(imageElement);
  }
  