let principal = 40000;
let rate = 3;
let time = 5;
let totalAmount = principal * (1 + rate / 100) ** time;

console.log(
  "With a principal of $",
  principal,
  "at the growth rate of",
  rate,
  "% p.a. over the period of",
  time,
  "year(s),",
  "the total amount will be $",
  totalAmount
);

let investments = [
  [30000, 8, 10],
  [15000, 4, 20],
  [20000, 15, 4],
];

function calculateInvestment([principal, rate, time]) {
  return principal * (1 + rate / 100) ** time;
}

let futureValues = investments.map(calculateInvestment);
console.log("Future Values:", futureValues);

let maxFutureValue = Math.max(...futureValues);
console.log("Maximum Future Value:", maxFutureValue);

let threshold = 20000;

let minFutureValue = Math.min(...futureValues);
console.log("Min Future Value", minFutureValue);

if (minFutureValue > threshold) {
  console.log("Above threshold");
} else
  () => {
    console.log("Below threshold");
  };
