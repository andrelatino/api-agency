

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

if (localStorage.getItem("authToken") == null) {
  window.location.href = './login.html';
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
<a href = 'projects.html'> Projects </a>
<a href = 'agencies.html'> Agencies </a>
<a href = 'managers.html'> Managers </a>
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
  window.location.href = './login.html'
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


