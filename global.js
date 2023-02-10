

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js');
}

if (localStorage.getItem("authToken") == null) {
  window.location.href = '../login/';
}

/** NAV BOTTOM */
var openBtn = document.createElement('button');
openBtn.innerHTML = '+';
openBtn.className = 'nav-style open-btn';
document.body.appendChild(openBtn);

var closeBtn = document.createElement('button');
closeBtn.innerHTML = 'X';
closeBtn.className = 'nav-style close-btn';
document.body.appendChild(closeBtn);

var popup = document.createElement('div');
popup.innerHTML = `
<div id="popup">
  <button class="user" onclick="logoutUser()">
    <div id="user" class="navigation" style="grid-column: 1 / -1;">
        <img src="../media/logout.svg">
        <a id = 'projects' href = '../projects/'>Hi André R. </a>
    </div>
  </button>
  <div id="projects" class="navigation">
      <img src="../media/projects.svg">
      <a id = 'projects' href = '../projects/'> Projects </a>
  </div>
  <div id="managers" class="navigation">
      <img src="../media/managers.svg">
      <a id = 'managers' href = '../managers/'> Managers </a>
  </div>
  <div id="agencies" class="navigation">
      <img src="../media/agencies.svg">
      <a id = 'agencies' href = '../agencies/'> Agencies </a>
  </div>
  <div id="freelancers" class="navigation">
      <img src="../media/freelancers.svg">
      <a id = 'freelancers' href = '../freelancers/'> Freelancers </a>
  </div>
  <div id="earnings" class="navigation">
      <img src="../media/earnings2.svg">
      <a id = 'earnings' href = '../earnings/'> Earnings </a>
  </div>
  <div id="stats" class="navigation">
      <img src="../media/stats3.svg">
      <a id = 'stats' href = '../stats/'> Stats </a>
  </div>
  
</div>
`;
popup.style.display = 'none';
document.body.appendChild(popup);

openBtn.addEventListener('click', function() {
  popup.style.display = 'block';
  openBtn.style.display = 'none';
  closeBtn.style.display = 'grid';
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
  openBtn.style.display = 'grid';
  closeBtn.style.display = 'none';
});

function logoutUser() {
  localStorage.removeItem("authToken");
  window.location.href = '../login/'
}

// function showOfflineMessage() {
//   if (!navigator.onLine) {
//     const message = document.createElement('div');
//     message.innerHTML = 'You are offline.';
//     message.style.backgroundColor = 'red';
//     message.style.color = 'white';
//     message.style.padding = '10px';
//     document.body.appendChild(message);
    
//   }else{
//     const message = document.createElement('div');
//     message.innerHTML = 'You are online.';
//     message.style.backgroundColor = 'blue';
//     message.style.color = 'white';
//     message.style.padding = '10px';
//     document.body.appendChild(message);
    
//   }
// }
// window.addEventListener('load', showOfflineMessage);


