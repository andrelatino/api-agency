window.onload = function() {
    setTimeout(function() {
        showProgressBar();
        loadFormContent();
    }, 1000);
  };
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
  function showForm(){
    const showForm = document.getElementById('projectForm');
    showForm .style.opacity = 1;
  }

  
  async function addNewContent() {
    document.getElementById('formMessage').textContent = 'SENDING...!';
    const formData = new FormData(document.getElementById('projectForm'));
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    try {
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/projects`, {
            method: 'POST',
            headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            showForm();
            document.getElementById('formMessage').textContent = 'SUCCEED!';
            // closeAndReloadNew();
        } else {
            document.getElementById('formMessage').textContent = 'FAILED';
        }
    } catch (error) {
        document.getElementById('formMessage').textContent = 'ERROR';
    }
  }

function checkRequiredFields() {
  const form = document.getElementById('projectForm');
  const requiredFields = form.querySelectorAll('[required]');
  let allFieldsAreFilled = true;

  for (const field of requiredFields) {
    if (field.value === '') {
      allFieldsAreFilled = false;
      break;
    }
  }

  if (allFieldsAreFilled) {
    addNewContent();
  } else {
    // alert('Please fill in all required fields.');
  }
}

function loadFormContent(){
  const selectCustomers = document.querySelector('#customers_id');
  const selectManagers = document.querySelector('#managers_id');
  const selectServices = document.querySelector('#services_id');
  const selectTechnologies = document.querySelector('#technologies_id');
  const selectWorkflows = document.querySelector('#workflows_id');
  const selectTeams = document.querySelector('#teams_id');
  const selectAgencies = document.querySelector('#agencies_id');
  const selectFreelancers = document.querySelector('#freelancers_id');
  const selectContracts = document.querySelector('#contracts_id');
  const selectBillings = document.querySelector('#billings_id');
  const selectPayments = document.querySelector('#payments_id');


  fetch('https://x8ki-letl-twmt.n7.xano.io/api:Nwul72Uo:v1/projectForm')
    .then(response => response.json())
    .then(data => {
      
        hideProgressBar();
        showForm();

        data.agencies.forEach(agency => {
          const option = document.createElement('option');
          option.value = agency.id;
          option.textContent = agency.agencyName;
          selectAgencies.appendChild(option);
        });

        data.freelancers.forEach(freelancer => {
          const option = document.createElement('option');
          option.value = freelancer.id;
          option.textContent = freelancer.freelancerFirstname + ' ' + freelancer.freelancerLastname;
          selectFreelancers.appendChild(option);
        });

        data.customers.forEach(customer => {
          const option = document.createElement('option');
          option.value = customer.id;
          option.textContent = customer.customerFirstname + ' ' + customer.customerLastname;
          selectCustomers.appendChild(option);
        });

        data.managers.forEach(manager => {
          const option = document.createElement('option');
          option.value = manager.id;
          option.textContent = manager.managerFirstname + ' ' + manager.managerLastname;
          selectManagers.appendChild(option);
        });

        data.services.forEach(service => {
          const option = document.createElement('option');
          option.value = service.id;
          option.textContent = service.serviceName;
          selectServices.appendChild(option);
        });

        data.technologies.forEach(technology => {
          const option = document.createElement('option');
          option.value = technology.id;
          option.textContent = technology.technologyName;
          selectTechnologies.appendChild(option);
        });

        data.workflows.forEach(workflow => {
          const option = document.createElement('option');
          option.value = workflow.id;
          option.textContent = workflow.workflowName;
          selectWorkflows.appendChild(option);
        });

        data.teams.forEach(team => {
          const option = document.createElement('option');
          option.value = team.id;
          option.textContent = team.teamFirstname+ ' ' + team.teamLastname;
          selectTeams.appendChild(option);
        });

        data.contracts.forEach(contract => {
          const option = document.createElement('option');
          option.value = contract.id;
          option.textContent = contract.contractName;
          selectContracts.appendChild(option);
        });

        data.billings.forEach(billing => {
          const option = document.createElement('option');
          option.value = billing.id;
          option.textContent = billing.billingBrand;
          selectBillings.appendChild(option);
        });

        data.payments.forEach(payment => {
          const option = document.createElement('option');
          option.value = payment.id;
          option.textContent = payment.paymentType;
          selectPayments.appendChild(option);
        });

    })
    .catch(error => console.error('Error fetching data:', error));

    function getCurrentDate() {
      const currentDate = new Date();
    
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
    
      return `${year}-${month}-${day}`;
    } 
    document.getElementById("projectStart").value = getCurrentDate();
}