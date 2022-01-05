document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, warning, email, password;
    let exprmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let exprmdp = /^[a-zA-Z0-9._-]{2,15}$/;
    warning = document.querySelector(".warning");
    email = document.getElementsByTagName("input")[0].value;
    password = document.getElementsByTagName("input")[1].value;
    btn = document.getElementsByTagName("input")[2];

    btn.addEventListener("click", e => {
        e.preventDefault();
        login();
    });
    let login = () => {
        email = document.getElementsByTagName("input")[0].value;
        password = document.getElementsByTagName("input")[1].value;
        if (exprmail.test(email) && exprmdp.test(password)) {
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
            document.location.assign("accueil.html");
        } else if (!exprmail.test(email) || !exprmdp.test(password)) {
            warning.innerText = "Mail ou mot de passe invalide";
            warning.classList.remove("success");
        } else {
            warning.innerText = "Mail ou mot de passe invalide";
            warning.classList.remove("success");
        };
    };
});