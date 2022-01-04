document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let el, el2, user;
    user = localStorage.getItem("user");
    el = document.getElementsByClassName("login")[0];
    el2 = document.getElementsByClassName("login")[1];
    el.innerText += ` ${user}`;
    el.style.color = "green";
    el2.innerText += ` ${user}`;
    localStorage.clear();
    sessionStorage.clear();
});