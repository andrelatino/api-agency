// document.cookie = "name=value; SameSite=None; Secure";

window.onload = function() {
    getData();
}
function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/project')
    .then(response => response.json())
    .then(data => {  
        
        totalProjects = data.projects.length;
        addTitle = document.getElementById('grid');
        addTitle.innerHTML= "<div class= 'titulo'>Total <span>("+totalProjects+")</span></div>";
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');

        for (const api of data.projects) {
        var daysId = `days-${api.id}`;
        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = `
                
            <button class="edit" id="btn${api.id}">
                
                <div class="content">        
                    <p class ='project'>PR : ${api.projectName} ${api.projectTech}</p>
                    <p class = 'budget'>CB : ${api.projectBudget}$ - AB : ${api.projectOffer}$</p>                    
                    <p>AG : ${api.agency[0].web}</p>
                    <p>PM : ${api.agency[0].Manager}</p>                           
                </div>
                <div class = "media">                    
                    <div class="timer" id="${daysId}"></div>  
                    <div class="steps">step : 1</div>
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
        
        console.log( diff_in_days );
        var addDate = document.getElementById(daysId);
        addDate.innerHTML = diff_in_days+"j";

            const button = document.getElementById(`btn${api.id}`);
            button.addEventListener('click', () => {
              

                // document.getElementById('edit_title').innerHTML = `Edit(${api.id})`;
                
                // localStorage.setItem("client_id", api.id);
                // localStorage.setItem("client_name", api.name);
                
                // window.location.href = 'service.html';
                

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