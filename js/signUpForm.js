function SignupForm() {
  localStorage.setItem("fname", fname.value);
  localStorage.setItem("lname", lname.value);
  localStorage.setItem("uname", uname.value);
  localStorage.setItem("email", email.value);
  var passOne = document.getElementById("pass");
  var passTwo = document.getElementById("pass2");
  if (passOne.value == passTwo.value) {
    localStorage.setItem("pass", pass.value);
    localStorage.setItem("pass2", pass2.value);
    location.reload();
  } else {
    alert("Passwords dont match");
  }
}
