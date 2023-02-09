if (localStorage.getItem("authToken") == null) {
    window.location.href = './login/';
}else{
    window.location.href = './home/';
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}