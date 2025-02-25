document.getElementById("add-money-click").style.display = "none";
document.getElementById("cash-out-click").style.display = "none";
document.getElementById("Transfer-money-click").style.display = "none";
document.getElementById("bonous-money-click").style.display = "none";
document.getElementById("pay-money-click").style.display = "none";

document
  .getElementById("add-money-click-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-click").style.display = "block";
    document.getElementById("add-money-click-button").style.backgroundColor =
      "#90EE90";

    document.getElementById("cash-out-click").style.display = "none";
    document.getElementById("Cashout-button").style.backgroundColor = "";

    document.getElementById("Transfer-money-click").style.display = "none";
    document.getElementById("Transfer-button").style.backgroundColor = "";

    document.getElementById("bonous-money-click").style.display = "none";
    document.getElementById("bonus-button").style.backgroundColor = "";

    document.getElementById("pay-money-click").style.display = "";
    document.getElementById("bill-button").style.backgroundColor = "";
  });

document
  .getElementById("Cashout-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-click").style.display = "none";
    document.getElementById("add-money-click-button").style.backgroundColor =
      "";

    document.getElementById("cash-out-click").style.display = "block";
    document.getElementById("Cashout-button").style.backgroundColor = "#90EE90";

    document.getElementById("Transfer-money-click").style.display = "none";
    document.getElementById("Transfer-button").style.backgroundColor = "";

    document.getElementById("bonous-money-click").style.display = "none";
    document.getElementById("bonus-button").style.backgroundColor = "";

    document.getElementById("pay-money-click").style.display = "";
    document.getElementById("bill-button").style.backgroundColor = "";
  });

document
  .getElementById("Transfer-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-click").style.display = "none";
    document.getElementById("add-money-click-button").style.backgroundColor =
      "";

    document.getElementById("cash-out-click").style.display = "none";
    document.getElementById("Cashout-button").style.backgroundColor = "";

    document.getElementById("Transfer-money-click").style.display = "block";
    document.getElementById("Transfer-button").style.backgroundColor =
      "#90EE90";
    document.getElementById("bonous-money-click").style.display = "none";
    document.getElementById("bonus-button").style.backgroundColor = "";

    document.getElementById("pay-money-click").style.display = "";
    document.getElementById("bill-button").style.backgroundColor = "";
  });

document.getElementById("bonus-button").addEventListener("click", function () {
  document.getElementById("add-money-click").style.display = "none";
  document.getElementById("add-money-click-button").style.backgroundColor = "";

  document.getElementById("cash-out-click").style.display = "none";
  document.getElementById("Cashout-button").style.backgroundColor = "";

  document.getElementById("Transfer-money-click").style.display = "none";
  document.getElementById("Transfer-button").style.backgroundColor = "";

  document.getElementById("bonous-money-click").style.display = "block";
  document.getElementById("bonus-button").style.backgroundColor = "#90EE90";

  document.getElementById("pay-money-click").style.display = "none";
  document.getElementById("bill-button").style.backgroundColor = "";
});

document.getElementById("bill-button").addEventListener("click", function () {
  document.getElementById("add-money-click").style.display = "none";
  document.getElementById("add-money-click-button").style.backgroundColor = "";

  document.getElementById("cash-out-click").style.display = "none";
  document.getElementById("Cashout-button").style.backgroundColor = "";

  document.getElementById("Transfer-money-click").style.display = "none";
  document.getElementById("Transfer-button").style.backgroundColor = "";

  document.getElementById("bonous-money-click").style.display = "none";
  document.getElementById("bonus-button").style.backgroundColor = "";

  document.getElementById("pay-money-click").style.display = "block";
  document.getElementById("bill-button").style.backgroundColor = "#90EE90";
});
