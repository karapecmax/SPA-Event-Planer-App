function LoginForm() {
  var storedName = localStorage.getItem("uname");
  var storedPw = localStorage.getItem("pass");

  var userName = document.getElementById("uname-login").value;
  var userPw = document.getElementById("pass-login").value;

  if (userName == storedName && userPw == storedPw) {
    document.getElementById("event-preview").style.display = "block";
    document.getElementById("addEvent").style.display = "none";
    left_form.style.display = "none";
    console.log("logged");
  } else {
    document.getElementById("error-span").style.display = "block";

    console.log("error");
  }
}
