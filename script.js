const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// Array to store transaction data
const transactions = [];

// Function to render a transaction
function renderTransaction(transaction) {
    const transactionElement = document.createElement('div');
    transactionElement.className = 'transaction';
    transactionElement.innerHTML = `
        <p>ID: ${transaction.id}</p>
        <p>Amount: $${transaction.amount}</p>
        <p>Description: ${transaction.description}</p>
    `;
    return transactionElement;
}

// Function to render all transactions
function renderTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const transactionElement = renderTransaction(transaction);
        transactionList.appendChild(transactionElement);
    });
}

// Function to add a new transaction
function addNewTransaction() {
    const newTransaction = {
        id: transactions.length + 1,
        amount: Math.floor(Math.random() * 500) + 50,
        description: `Payment recieved by User ${transactions.length + 234235}`
    };
    transactions.push(newTransaction);
    renderTransactions();
}

// Initial render of transactions
renderTransactions();

// Simulate live scroll by adding a new transaction every 3 seconds
setInterval(addNewTransaction, 3000);