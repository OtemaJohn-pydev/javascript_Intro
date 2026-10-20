
let balance = 50000;

// Select HTML elements
const balanceElement = document.getElementById("balance");
const messageElement = document.getElementById("message");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// Display the current balance
function updateBalance() {
    balanceElement.textContent =
        "UGX " + balance.toLocaleString("en-UG");
}

// Deposit money
depositBtn.addEventListener("click", function () {
    balance = balance + 10000;

    updateBalance();

    messageElement.textContent =
        "Deposit successful: UGX 10,000 added.";
});

// Withdraw money
withdrawBtn.addEventListener("click", function () {
    if (balance >= 5000) {
        balance = balance - 5000;

        updateBalance();

        messageElement.textContent =
            "Withdrawal successful: UGX 5,000 deducted.";
    } else {
        messageElement.textContent = "Insufficient balance.";
    }
});
