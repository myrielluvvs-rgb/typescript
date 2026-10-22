/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const order = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let orderReady: number = 0;
let orderWaitingStock: number = 0;
let unpaidOrder: number = 0;
const displayOrderReady: string[] = [];

for (let i : number = 0; i < order.length ; i++) {
  if (order[i].paid && order[i].stockAvailable){
    orderReady++;
    displayOrderReady.push(order[i].id)
  }
  if (!order[i].paid){
    unpaidOrder++;
  }
  if (!order[i].stockAvailable){
    orderWaitingStock++;
  }
}

console.log (`${orderReady} Orders Ready To Ship`);
console.log (`${unpaidOrder} Unpaid Order`);
console.log (`${orderWaitingStock} Orders Waiting For Stock`);
console.log (`${displayOrderReady.join(", ")} Order IDs That are Ready to Ship`)