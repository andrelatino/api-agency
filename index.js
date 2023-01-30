if (localStorage.getItem("authToken") == null) {
    window.location.href = './login.html';
}else{
    window.location.href = './home.html';
}