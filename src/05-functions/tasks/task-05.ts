/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const salesData = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(saleList: number[]): number {
  return saleList.reduce((total, amount) => total + amount, 0);
}

function findHighestTransaction(saleList: number[]): number {
  return Math.max(...saleList);
}

function findLowestTransaction(saleList: number[]): number {
  return Math.min(...saleList);
}

function calculateAverageSale(saleList: number[]): number {
  return saleList.length === 0 ? 0 : calculateTotalSales(saleList) / saleList.length;
}

function countLargeTransactions(saleList: number[], minimumAmount: number): number {
  return saleList.filter((amount) => amount > minimumAmount).length;
}

console.log(calculateTotalSales(salesData))
console.log(findHighestTransaction(salesData))
console.log(findLowestTransaction(salesData))
console.log(calculateAverageSale(salesData))
console.log(countLargeTransactions(salesData, 500000))