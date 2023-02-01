// document.cookie = "name=value; SameSite=None; Secure";

window.onload = function() {
    getData();
}
function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/agency')
    .then(response => response.json())
    .then(data => {  
        
        totalItems = data.agencies.length;
        

        addTitle = document.getElementById('grid');
        addTitle.innerHTML= "<div class= 'titulo'>Total <span>("+totalItems+")</span></div>";
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');

        for (const api of data.agencies) {
            const DivItems = document.createElement('div');
            DivItems.className = 'items';
            DivItems.innerHTML = `
            <button class="edit" id="btn${api.id}">                
                <div class="content">                   
                    <p>ID : ${api.created_at}</p>
                    <p>Name : ${api.name}</p>
                    <p>Name : ${api.web}</p>
                    <p>Manager : ${api.manager}</p>                                
                </div>
                <div class = "media"> 
                    <div class="timer">${api.project_id.length}</div>
                    <div class="steps">Project(s)</div>
                </div>
            </button>
        `;
          			

        GridList.appendChild(DivItems);

            const button = document.getElementById(`btn${api.id}`);
            button.addEventListener('click', () => {         
            
                // localStorage.setItem("projectID", api.id);
                // localStorage.setItem("projectRef", api.created_at); 
                // window.location.href = './agency.html';
                

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