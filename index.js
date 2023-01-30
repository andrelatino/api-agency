if (localStorage.getItem("authToken") == null) {
    window.location.href = './login.html';
}else{
    window.location.href = './app/home.html';
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}