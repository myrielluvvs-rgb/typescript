/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

function showBonusStatus(staffName: string, staffScore: number): void {
    if (staffScore >= 85) {
        console.log(`${staffName} : Bonus Approved`);
    } else {
        console.log(`${staffName} : Bonus Not Approved`);
    }
}

showBonusStatus("John Cena", 92);
showBonusStatus("Undertaker", 76);
showBonusStatus("Rey Mysterio", 88)