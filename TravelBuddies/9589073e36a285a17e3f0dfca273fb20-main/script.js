
window.onload = function() {
    document.getElementById("homeButton").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "home.html";
    });
    document.getElementById("aboutButton").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "about.html";
    });
    document.getElementById("serviceButton").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "service.html";
    });
    document.getElementById("contactButton").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "contact.html";
    });
    document.getElementById("loginButton").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "login.html";
    });
    document.getElementById("signinButton").addEventListener("click", function(event){
        event.preventDefault();
        window.location.href ="signin.html";
    })
};
