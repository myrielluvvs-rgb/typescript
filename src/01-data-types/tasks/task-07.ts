/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */


type Registration = {
    studentID: string;
    studentName: string;
    grade: number;
    courseID: string;
    courseTitle: string;
    instructor: string;
    learningHours: number;
    date: string;
    isPaid: boolean;
};

const registration1: Registration = {
    studentID: "S001",
    studentName: "Marsya",
    grade: 10,
    courseID: "C001",
    courseTitle: "TypeScript",
    instructor: "Mr. Andi",
    learningHours: 10,
    date: "2026-10-22",
    isPaid: true
};

const registration2: Registration = {
    studentID: "S002",
    studentName: "Aisyah",
    grade: 10,
    courseID: "C002",
    courseTitle: "Flutter",
    instructor: "Mr. Budi",
    learningHours: 15,
    date: "2026-10-22",
    isPaid: true
};

const registration3: Registration = {
    studentID: "S003",
    studentName: "Nadia",
    grade: 10,
    courseID: "C003",
    courseTitle: "Web Development",
    instructor: "Ms. Sinta",
    learningHours: 12,
    date: "2026-10-22",
    isPaid: false
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);
