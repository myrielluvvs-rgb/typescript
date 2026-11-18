/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendanceData = [
    { studentName: "Alya", isPresent: true },
    { studentName: "Budi", isPresent: false },
    { studentName: "Citra", isPresent: true },
    { studentName: "Dimas", isPresent: true },
    { studentName: "Eka", isPresent: false }
];

function printAttendanceReport(attendanceList: {studentName : string; isPresent : boolean}[]): void {
    let presentCount = 0;
    let absentCount = 0 ;
    const absentStudentNames : string[] = [];

    for (const student of attendanceList){
        if (student.isPresent){
            presentCount++
        }else {
            absentCount++
            absentStudentNames.push(student.studentName)
        }

    }

    console.log (`Total Present: ${presentCount}`)
    console.log (`Total Absent: ${absentCount}`)
    console.log (`Name of Absent Students: ${absentStudentNames}`)
}
printAttendanceReport (attendanceData)