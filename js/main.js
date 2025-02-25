document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addAmount = document.getElementById("ammount").value;
    const blockAddAmount = parseFloat(addAmount);

    const mainBalance = document.getElementById("main-balance").innerText;
    const blockMainBalance = parseFloat(mainBalance);
    const password = document.getElementById("password").value;
    const blocPassword = parseFloat(password);

    if (blocPassword === 1234) {
      const sum = blockAddAmount + blockMainBalance;
      document.getElementById("main-balance").innerText = sum;
    } else {
      console.log("wrong password");
    }
  });
