/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendance = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let present: number = 0;
let absent: number = 0;
const displayAbsentStudents: string[] = [];

for (let i = 0; i < attendance.length; i++) {
  if (attendance[i].present) {
    present++;
  } else {
    absent++;
    displayAbsentStudents.push(attendance[i].name);
  }
}

const attendancePercentage: number = (present / attendance.length) * 100;

console.log(`${present} Present Students`);
console.log(`${absent} Absent Students`);
console.log(`Names of Absent Students: ${displayAbsentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`)