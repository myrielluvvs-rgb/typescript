let starAmount = 0;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        starAmount++;
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
console.log("Total stars: " + starAmount);

let starAmountB: number = 0;
for (let d = 1; d <= 3; d++) {
  console.log("*".repeat(d));
  starAmountB += d;
}
for (let d = 2; d >= 1; d--) {
  console.log("*".repeat(d));
  starAmountB += d;
}
console.log(Star amount: ${starAmountB});

console.log(`Star amount: ${starAmount}`);

const baris: number = 5;
for (let i = 0; i < baris; i++) {
  console.log(" ".repeat(i) + "*".repeat(baris));
}