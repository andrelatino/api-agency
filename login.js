// if (localStorage.getItem("authToken") !== null) {
//     window.location.href = './login/';
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

const loginForm = document.getElementById('formLogin');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showProgressBar()
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  const body = {
    managerEmail:email,
    managerPassword:password,
  };

  fetch('https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/auth/login', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status !== 200) {
        hideProgressBar();
        // Display error message
        // document.getElementById('loginMesagge').innerHTML = 'Wrong login!';
        alert ("Wrong login, try again!");
        return;
      }
      hideProgressBar()
      response.json().then((data) => {
        const authToken = data.authToken;
        localStorage.setItem('authToken', authToken);
        if (authToken) {
          window.location.href = './projects/';
          // alert ("You are logged");
        }
      });
    });
});


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

