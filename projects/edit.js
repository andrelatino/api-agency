window.onload = function() {
    
    // Get the projectID from local storage
    var projectID = localStorage.getItem('projectID');
    // Set the global variable to the projectID value
    window.globalProjectID = projectID;

    showProgressBar();
    loadFormContent();
    
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

  
  async function editNewContent() {

    const formID = globalProjectID;

    document.getElementById('formMessage').textContent = 'SENDING...!';
    const formData = new FormData(document.getElementById('projectForm'));
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    try {
        
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:Gj5ATWME:v1/projects/${formID}`, {
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
    editNewContent();
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

        const freelancersSelect = document.getElementById('freelancers_id');
        data.freelancers.forEach(freelancers => {
          const option = document.createElement('option');
          option.value = freelancers.id;
          option.textContent = freelancers.freelancerFirstname + ' ' + freelancers.freelancerLastname;
          freelancersSelect.appendChild(option);
        });
        const freelancersGetId = localStorage.getItem('freelancerID');
        freelancersSelect.value = freelancersGetId;


        const agenciesSelect = document.getElementById('agencies_id');
        data.agencies.forEach(agencies => {
          const option = document.createElement('option');
          option.value = agencies.id;
          option.textContent = agencies.agencyName;
          agenciesSelect.appendChild(option);
        });
        const agenciesGetId = localStorage.getItem('agencyID');
        agenciesSelect.value = agenciesGetId;

          
        const customersSelect = document.getElementById('customers_id');
        data.customers.forEach(customers => {
          const option = document.createElement('option');
          option.value = customers.id;
          option.textContent = customers.customerFirstname + ' ' + customers.customerLastname;
          customersSelect.appendChild(option);
        });
        const customersGetId = localStorage.getItem('customerID');
        customersSelect.value = customersGetId;


        const managersSelect = document.getElementById('managers_id');
        data.managers.forEach(managers => {
          const option = document.createElement('option');
          option.value = managers.id;
          option.textContent = managers.managerFirstname;
          managersSelect.appendChild(option);
        });
        const managersGetId = localStorage.getItem('managerID');
        managersSelect.value = managersGetId;


        const servicesSelect = document.getElementById('services_id');
        data.services.forEach(services => {
          const option = document.createElement('option');
          option.value = services.id;
          option.textContent = services.serviceName;
          servicesSelect.appendChild(option);
        });
        const servicesGetId = localStorage.getItem('serviceID');
        servicesSelect.value = servicesGetId;

        const technologiesSelect = document.getElementById('technologies_id');
        data.technologies.forEach(technologies => {
          const option = document.createElement('option');
          option.value = technologies.id;
          option.textContent = technologies.technologyName;
          technologiesSelect.appendChild(option);
        });
        const technologiesGetId = localStorage.getItem('technologyID');
        technologiesSelect.value = technologiesGetId;

        const workflowsSelect = document.getElementById('workflows_id');
        data.workflows.forEach(workflows => {
          const option = document.createElement('option');
          option.value = workflows.id;
          option.textContent = workflows.workflowName;
          workflowsSelect.appendChild(option);
        });
        const workflowsGetId = localStorage.getItem('workflowID');
        workflowsSelect.value = workflowsGetId;

        const teamsSelect = document.getElementById('teams_id');
        data.teams.forEach(teams => {
          const option = document.createElement('option');
          option.value = teams.id;
          option.textContent = teams.teamFirstname + ' ' + teams.teamLastname;
          teamsSelect.appendChild(option);
        });
        const teamsGetId = localStorage.getItem('teamID');
        teamsSelect.value = teamsGetId;
        

        const contractsSelect = document.getElementById('contracts_id');
        data.contracts.forEach(contracts => {
          const option = document.createElement('option');
          option.value = contracts.id;
          option.textContent = contracts.contractName;
          contractsSelect.appendChild(option);
        });
        const contractsGetId = localStorage.getItem('contractID');
        contractsSelect.value = contractsGetId;


        const billingsSelect = document.getElementById('billings_id');
        data.billings.forEach(billings => {
          const option = document.createElement('option');
          option.value = billings.id;
          option.textContent = billings.billingBrand;
          selectBillings.appendChild(option);
        });
        const billingsGetId = localStorage.getItem('billingID');
        billingsSelect.value = billingsGetId;


        const paymentsSelect = document.getElementById('payments_id');
        data.payments.forEach(payments => {
          const option = document.createElement('option');
          option.value = payments.id;
          option.textContent = payments.paymentType;
          selectPayments.appendChild(option);
        });
        const paymentsGetId = localStorage.getItem('paymentID');
        paymentsSelect.value = paymentsGetId;

        const projectPriceStorage = localStorage.getItem('projectPrice');
        const projectPriceInput = document.getElementById("projectPrice");
        projectPriceInput.value = projectPriceStorage; 

        const projectStartStorage = localStorage.getItem('projectStart');
        const projectStartInput = document.getElementById("projectStart");
        projectStartInput.value = projectStartStorage;

        const projectEndStorage = localStorage.getItem('projectEnd');
        const projectEndInput = document.getElementById("projectEnd");
        projectEndInput.value = projectEndStorage;

    })
    .catch(error => console.error('Error fetching data:', error));
}