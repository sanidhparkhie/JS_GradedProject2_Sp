function checkData() {
  var enterUserName = document.getElementById("username").value;
  var enterPwd = document.getElementById("pwd").value;

  // get data from local storage
  var getUserName = localStorage.getItem("userName");
  var getPwd = localStorage.getItem("userPwd");

  if (enterUserName == getUserName) {
    if (enterPwd == getPwd) {
      alert("Login Successful");
      location.href = "../Resume/resume.html";
    } else {
      alert("invalid username/password");
    }
  } else {
    alert("invalid username/password");
  }
}
