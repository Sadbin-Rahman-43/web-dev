const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the last digit of your ID: ", (input) => {
  const lastDigit = parseInt(input);
  console.log("Next integer:", lastDigit+1);
  rl.close();
});
