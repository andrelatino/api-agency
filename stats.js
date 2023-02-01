// document.cookie = "name=value; SameSite=None; Secure";
let countdown = 60;

const reloadPage = setInterval(function() {
    document.getElementById("countdown").innerHTML = --countdown;
    if (countdown === 0) {
        location.reload();
        countdown = 60;
    }
}, 1000);

window.onload = function() {
    getData();
}
function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:Gj5ATWME/stats')
    .then(response => response.json())
    .then(data => {  
      
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');
        const totalProjectBudget = data.stats.total_projectBudget;
        const totalProjectOffer = data.stats.project_projectOffer;
        const totalExpenses = totalProjectBudget-totalProjectOffer;
        const totalProject = data.stats.project_total;

        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = 
        `
        <div class="item">
            <p class="numberStats"> ${totalProject}</p>
            <p class="titleStats"> Projects</p>
        </div>
        <div class="item">
            <p class="numberStats"> ${totalProjectBudget} $</p>
            <p class="titleStats"> Sales</p>
        </div>
        <div class="item">
            <p class="numberStats"> ${totalProjectOffer} $</p>
            <p class="titleStats"> Expenses</p>
        </div>
        <div class="item">
            <p class="numberStats"> ${totalExpenses} $</p>
            <p class="titleStats"> Profits</p>
        </div>        
        `;

        GridList.appendChild(DivItems);
        
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