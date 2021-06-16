function checkUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ((username == 51 && password == "A")) {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  }

 