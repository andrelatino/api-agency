window.onload = function() {
    setTimeout(function() {
        hideProgressBar();
        showForm();
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
            document.getElementById('formMessage').textContent = 'SUCCEED!';
            // closeAndReloadNew();
        } else {
            document.getElementById('formMessage').textContent = 'FAILED';
        }
    } catch (error) {
        document.getElementById('formMessage').textContent = 'ERROR';
    }
}

function checkEmptyFields() {
  const form = document.getElementById('projectForm');
  const formFields = form.querySelectorAll('input, textarea, select');
  let allFieldsAreFilled = true;

  for (const field of formFields) {
      if (field.value === '') {
        allFieldsAreFilled = false;
        break;
      }
  }  

  if (allFieldsAreFilled) {
    // alert('All fields are filled');
    addNewContent();

  } 
}
