document.querySelector("form").addEventListener("submit", myfun);
  var localbag = JSON.parse(localStorage.getItem("userDataCollection")) || [];
  function myfun(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    var passd = document.querySelector("#passd").value;

    var userData = {
      emailadd: email,
      passward: pass,
    };
    localbag.push(userData);

    localStorage.setItem("userDataCollection", JSON.stringify(localbag));
    alert("sign up Successful ");
    window.location.href = "signin.html";
  }