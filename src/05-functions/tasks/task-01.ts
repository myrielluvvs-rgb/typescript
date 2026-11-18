/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

function calculateFinalGrade(assignmentScore: number, midtermScore: number, finalScore: number): number {
    let totalScore = ((0.3) * assignmentScore) + ((0.3) * midtermScore) + ((0.4) * finalScore)
    return totalScore;
}

let studentName1 = "Alya";
let finalGrade1 = calculateFinalGrade(85,80,92);
let studentName2 = "Budi";
let finalGrade2 = calculateFinalGrade(78,75,81);
let studentName3 = "citra";
let finalGrade3 = calculateFinalGrade(90,88,95);

console.log(studentName1, finalGrade1)
console.log(studentName2, finalGrade2)
console.log(studentName3, finalGrade3)