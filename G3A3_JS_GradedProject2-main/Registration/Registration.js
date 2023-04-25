function addData() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pwd").value;

  if (username === "") {
    window.alert("Please enter an userName");
  }

  if (password === "") {
    window.alert("Please enter a password");
  } else {
    localStorage.setItem("userName", username);
    localStorage.setItem("userPwd", password);
    location.href = "../Login/login.html";
  }
}
