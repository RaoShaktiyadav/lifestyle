document.querySelector("form").addEventListener("submit", myfunc);
var regid = JSON.parse(localStorage.getItem("userDataCollection"))
function myfunc(event) {
    event.preventDefault();
    var email = document.querySelector(".emails").value;
    var pass = document.querySelector(".passd").value;
    var flag = true;
    for (var i = 0; i < regid.length; i++) {
        console.log(regid[i].passward)
        if (regid[i].emailadd == email && regid[i].passward == pass) {
            flag = false;

        }

    }
    if (flag == false) {
        alert = ("Sign In Successful");
        window.location.href = "home.html"
    }
    else {
        alert("Wrong Details")
    }
}