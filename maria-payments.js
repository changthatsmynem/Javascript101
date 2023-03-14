// Exercise #1

// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

// Return the value of what she should be paying.
let monthlyTransaction = Math.floor(Math.random() * 101);
let costPerT = Math.random().toFixed(1) * 501;

const mariaPayments = (transaction) => {
  transaction = costPerT;
  if (transaction <= 500) {
    let actualCost = (transaction * 1.01 + 3) * monthlyTransaction;
    console.log(actualCost);
  } else {
    return "Your transaction is invalid.";
  }
};

mariaPayments();
