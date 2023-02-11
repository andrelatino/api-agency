// document.cookie = "name=value; SameSite=None; Secure";

window.onload = function() {
    getData();
}
function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    // fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/projects')
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/earnings')
    .then(response => response.json())
    .then(data => {  
        
        totalEarnings = data.earnings.length;

        addSubtitle = document.getElementById('grid');
        addSubtitle.innerHTML= "<div class='subtitle'><p> Total : "+totalEarnings+"</p></div>";
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');

        for (const api of data.earnings) {
            
            
            const DivItems = document.createElement('div');
            DivItems.className = 'items';
            DivItems.innerHTML = `
                <button class="edit" id="btn${api.id}">                
                    <div class="content">                   
                        <p>ID : ${api.created_at}</p>
                    </div>
                    <div class = "content">                    
                        <p>${api.earningBudget}$<p>
                    </div>
                </button>
            `;
        GridList.appendChild(DivItems);

            const button = document.getElementById(`btn${api.id}`);
            button.addEventListener('click', () => {         
            
                // localStorage.setItem("projectID", api.id);
                // localStorage.setItem("projectRef", api.created_at); 
                // window.location.href = './project.html';

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