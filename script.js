const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


    // Sample data of recent transactions
    const recentTransactions = [
        "Transaction 23343: $50",
        "Transaction 23344: $100",
        "Transaction 23345: $75",
        "Transaction 23346: $30",
        "Transaction 23347: $200",
        "Transaction 23348: $140",
        "Transaction 23349: $30",
        "Transaction 23350: $45",
        "Transaction 23351: $30",
    ];

    // Function to populate transaction list
    function populateTransactionList() {
        const transactionList = document.getElementById("transactionList");
        transactionList.innerHTML = ""; // Clear previous list items

        recentTransactions.forEach(transaction => {
            const listItem = document.createElement("li");
            listItem.textContent = transaction;
            listItem.classList.add("transaction-item");
            transactionList.appendChild(listItem);
        });
    }

    // Call the function to initially populate the list
    populateTransactionList();