const principal = 70000;
const rate = 8;
const time = 17;

let totalAmount = principal * (1 + rate / 100) ** time;
console.log("total amount:", totalAmount);

const investments = [
  [18000, 2, 10],
  [35600, 6.5, 8],
  [34268, 5.1, 4],
];

const calculateInvestment = (P, r, t) => {
  return P * (1 + r / 100) ** t;
};

const futureValues = investments.map((arr) =>
  Math.round(calculateInvestment(arr[0], arr[1], arr[2]))
);
console.log(futureValues);

let maxFutureValue = Math.max(...futureValues);
console.log("max value:", maxFutureValue);

let above30k = [];
futureValues.forEach((x) => (x > 30000 ? above30k.push(x) : {}));
console.log("above 30k:", above30k);
