/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sale: number[] = [
    125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000 
];

const aw: number = 300000;
let worthAmmount: number= 0;
let revenueTotal: number = 0;
let highestTransaction: number = 0;
let lowestTransaction: number = 0;

for (let i: number = 0; i < sale.length; i++) {
    const currentSales: number = sale[i]

    revenueTotal += currentSales
    highestTransaction = Math.max(...sale)
    lowestTransaction = Math.min(...sale)

    if (sale[i] >= aw) {
    worthAmmount++;
    }
}
const averageWorth: number = revenueTotal / sale.length;

console.log (`Total Revenue = ${revenueTotal}`)
console.log (`Highest transaction = ${highestTransaction}`)
console.log (`Lowest transaction = ${lowestTransaction}`)
console.log (`Number of transactions worth Rp300,000 or more = ${worthAmmount}`)
console.log(`Average Worth = ${averageWorth}`);