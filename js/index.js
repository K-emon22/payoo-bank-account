document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accountNum = document.getElementById("account-num").value;

    const password = document.getElementById("password").value;
    const convertedPin = parseFloat(password);

    if (accountNum.length === 11 && accountNum.startsWith("01")) {
    } else {
      document.getElementById("account-num").style.border = "2px solid red ";
     
    }

    if (convertedPin === 1234) {
         window.location.href="main.html"
    } else {
      console.log("wrong password");
      document.getElementById("password").style.border = "2px solid red ";
    }
  });
