// document.cookie = "name=value; SameSite=None; Secure";

window.onload = function() {
  if (!navigator.onLine) {
    isOffline();
  } else {
    getData();
  }
}

function logoutUser() {
    localStorage.removeItem("authToken");
    window.location.href = './'
}

function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/project')
    .then(response => response.json())
    .then(data => {  
        
        console.log(`Total items: ${data.length}`);
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');

        for (const api of data.projects) {
        var daysId = `days-${api.id}`;
        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = `
                
            <button class="edit" id="btn${api.id}">
                
                <div class="content">        
                    <p>Project : ${api.projectName} ${api.projectTech}</p>
                    <p>Budget : ${api.projectBudget} Agency : ${api.projectOffer}$</p>
                    <p>Start : ${api.projectStart} End : ${api.projectEnd}</p> 
                    
                    <p>Status : ${api.projectStatus}</p> 
                    <div class="days" id="${daysId}"></div>             
                </div>
            </button>
            
        `;
          			

        GridList.appendChild(DivItems);

        var date_1 = new Date(api.projectStart);
        var date_2 = new Date(api.projectEnd);
        
        var day_as_milliseconds = 86400000;
        var diff_in_millisenconds = date_2 - date_1;
        var diff_in_days = diff_in_millisenconds / day_as_milliseconds;
        
        console.log( diff_in_days );
        var addDate = document.getElementById(daysId);
        addDate.innerHTML = "Days left : " +diff_in_days;

            const button = document.getElementById(`btn${api.id}`);
            button.addEventListener('click', () => {
              

                // document.getElementById('edit_title').innerHTML = `Edit(${api.id})`;
                
                localStorage.setItem("client_id", api.id);
                localStorage.setItem("client_name", api.name);
                
                window.location.href = 'service.html';
                

            });
        }
    });
}



function isOffline() {
  setInterval(hideProgressBar, 1000);  
  const offlineMessage = document.getElementById('offline-message');
  offlineMessage.innerHTML = 'Sorry, you appear to be offline. Please check your internet connection and try again.';
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


