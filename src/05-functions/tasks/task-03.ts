/**
 * An online store stores product prices in an array in below.
 * The finance department needs to calculate the total purchase amount.
 * Instead of calculating the total directly in the main program, create reusable function.
 * The function should return the total price.
 * Student Tasks
 * 1. Create a function named calculateTotalPrice.
 * 2. The function receives an array of prices.
 * 3. Use a loop to calculate the total.
 * 4. Return the total price.
 * 5. Display the returned value.
 */

const priceData = [
    250000,
    180000,
    95000,
    420000,
    125000
];
let totalAmount : number = 0;

function calculateTotalPrice(priceList: number[]): number {
    let sum: number = 0;

    for (let index : number = 0; index < priceList.length; index++) {
        totalAmount += priceList[index]
    }

    return sum
}

const purchaseResult = calculateTotalPrice(priceData);
console.log("Total Purchase Amount:", purchaseResult);