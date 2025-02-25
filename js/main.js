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

    if (addAmount === "" || isNaN(blockAddAmount)) {
      alert("Please add an amount");
      return;
    }

    if (blocPassword === 1234) {
      const sum = blockAddAmount + blockMainBalance;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("wrong password");
    }
  });

document
  .getElementById("cash-out-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalance2 = document.getElementById("main-balance").innerText;
    const numberMainBalance2 = parseFloat(mainBalance2);

    const ammount2 = document.getElementById("ammount-2").value;
    const numberammount2 = parseFloat(ammount2);

    const password2 = document.getElementById("password-2").value;

    if (password2 !== "1234") {
      alert("Wrong password");
      return;
    }

    if (isNaN(numberammount2)) {
      alert("Please add an amount");
      return;
    }

    const left = numberMainBalance2 - numberammount2;
    document.getElementById("main-balance").innerText = left;
  });
