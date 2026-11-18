/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

type Student = {
  studentName: string;
  studentMajor: string;
  isActive: boolean;
};

const studentData: Student[] = [
  {
    studentName: "Alya",
    studentMajor: "Software Engineering",
    isActive: true
  },
  {
    studentName: "Budi",
    studentMajor: "Networking",
    isActive: false
  },
  {
    studentName: "Citra",
    studentMajor: "Software Engineering",
    isActive: true
  },
  {
    studentName: "Dimas",
    studentMajor: "Multimedia",
    isActive: true
  },
  {
    studentName: "Eka",
    studentMajor: "Networking",
    isActive: false
  }
];

function countActiveStudents(data: Student[]): number {
  return data.filter((item) => item.isActive).length;
}

function countInactiveStudents(data: Student[]): number {
  return data.filter((item) => !item.isActive).length;
}

function countStudentsByMajor(data: Student[], majorName: string): number {
  return data.filter((item) => item.studentMajor === majorName).length;
}

function printEnrollmentReport(data: Student[]): void {
  const totalStudent = data.length;
  const activeStudent = countActiveStudents(data);
  const inactiveStudent = countInactiveStudents(data);
  const softwareEngineeringData = countStudentsByMajor(data, "Software Engineering");
  const networkingData = countStudentsByMajor(data, "Networking");
  const multimediaData = countStudentsByMajor(data, "Multimedia");

  console.log("Enrollment Report");
  console.log(`Total students: ${totalStudent}`);
  console.log(`Active students: ${activeStudent}`);
  console.log(`Inactive students: ${inactiveStudent}`);
  console.log(`Software Engineering students: ${softwareEngineeringData}`);
  console.log(`Networking students: ${networkingData}`);
  console.log(`Multimedia students: ${multimediaData}`);
}

printEnrollmentReport(studentData);