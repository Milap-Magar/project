function auth() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email == "admin@gmail.com" && password == "admin123") {
    alert("Login Sucessfull");
    window.location.assign("./page/hompage.html");
  } else {
    alert("Incorrect information");
    return;
  }
}
