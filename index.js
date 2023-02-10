if (localStorage.getItem("authToken") == null) {
    window.location.href = './login/';
}else{
    window.location.href = './projects/';
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}