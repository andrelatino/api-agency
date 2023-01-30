/** Versioning */
addVersion = "v3";
showVersion = document.getElementById('versionNumber');
showVersion.innerHTML = addVersion;

// Create a new <link> element for the manifest.json file
var link = document.createElement('link');
link.rel = 'manifest';
link.href = './manifest.json';

// Create a new <script> element for the sw.js file
var script = document.createElement('script');
script.src = './sw.js';

// Append the elements to the <head>
document.head.appendChild(link);
document.head.appendChild(script);


if (localStorage.getItem("authToken") == null) {
    window.location.href = 'index.html';
}
function logoutUser() {
    localStorage.removeItem("authToken");
    window.location.href = './'
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
<a href = 'allstats.html'> See all stats </a>
<a href = 'newproject.html'> Add new project </a>
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


