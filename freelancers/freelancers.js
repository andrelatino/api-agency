// document.cookie = "name=value; SameSite=None; Secure";

window.onload = function() {
    getData();
}
function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/freelancers')
    .then(response => response.json())
    .then(data => {  
        
        totalItems = data.freelancers.length;
        addSubtitle = document.getElementById('grid');
        addSubtitle.innerHTML= "<div class='subtitle'><p> Total : "+totalItems+"</p></div>";
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');

        for (const api of data.freelancers) {

            const DivItems = document.createElement('div');
            DivItems.className = 'items';
            DivItems.innerHTML = `
           
            <button class="edit" id="btn${api.id}">                
                <div class="content">                   
                    
                    <p>Name : ${api.freelancerFirstname}</p>
                    <p>Website : ${api.freelancerWebsite}</p>
                    <p>Manager : ${api.freelancerEmail}</p>
                    <p>Country : ${api.freelancerCountry}</p>
                                                     
                </div>
                <div class = "media"> 
                    <div class="timer">${api.projects_id.length}</div>
                    <div class="steps">Project(s)</div>
                </div>
            </button>
        `;
          			

        GridList.appendChild(DivItems);

            const button = document.getElementById(`btn${api.id}`);
            button.addEventListener('click', () => {     
                
                alert(api.id);
            
                // localStorage.setItem("projectID", api.id);
                // localStorage.setItem("projectRef", api.created_at); 
                // window.location.href = './freelancer.html';
                

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