
window.onload = function() {
    getData();
}
function getData(){
    showProgressBar();
    
    // Fetch the JSON data and create the product elements as before
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/stats')
    .then(response => response.json())
    .then(data => {  
      
        countDown();
        setInterval(hideProgressBar, 1000);
        
        const GridList = document.getElementById('grid');
        
        const totalprojectPrice = data.projects.budget;
        const totalProjectOffer = data.agencies.budget;
        const totalExpenses = totalprojectPrice-totalProjectOffer;
        const totalProject = data.projects.total;
        const totalAgencies = data.agencies.total;
        const totalManagers = data.managers.total;
        const totalCustomers = data.customers.total;
        const totalFreelancers = data.freelancers.total;

        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = 
        `
        <div id class="subtitle" >
            <p id="counter">Update 60</p> 
        </div>
        <div class="sales item">
            <p class="numberStats"> ${totalprojectPrice} $</p>
            <p class="titleStats"> Sales</p>
        </div>
        <div class="profits item">
            <p class="numberStats"> ${totalExpenses} $</p>
            <p class="titleStats"> Profits</p>
        </div>
        <div class="expenses item">
            <p class="numberStats"> ${totalProjectOffer} $</p>
            <p class="titleStats"> Expenses</p>
        </div>
        
        <div class="projects item">
            <p class="numberStats"> ${totalProject}</p>
            <p class="titleStats"> Projects</p>
        </div> 
        
        <div class="projects item">
            <p class="numberStats"> ${totalAgencies}</p>
            <p class="titleStats"> Agencies</p>
        </div> 
        
        <div class="projects item">
            <p class="numberStats"> ${totalManagers}</p>
            <p class="titleStats"> Managers</p>
        </div> 
        <div class="projects item">
            <p class="numberStats"> ${totalFreelancers}</p>
            <p class="titleStats"> Freelancers</p>
        </div>
        <div class="projects item">
            <p class="numberStats"> ${totalCustomers}</p>
            <p class="titleStats"> Customers</p>
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

function countDown(){
    let countdown = 60;
    const reloadPage = setInterval(function() {
        document.getElementById("counter").innerHTML = "Update "+ --countdown;
        if (countdown === 0) {
            location.reload();
            countdown = 60;
        }
    }, 1000);
}