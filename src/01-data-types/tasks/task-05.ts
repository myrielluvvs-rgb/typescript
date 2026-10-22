/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */


type Attendance = {
    id: string;
    name: string;
    date: string;
    checkIn: string;
    checkOut: string;
    workingHours: number;
    isPresent: boolean;
};

const attendance1: Attendance = {
    id: "001",
    name: "Marsya",
    date: "2026-10-22",
    checkIn: "07:00",
    checkOut: "15:00",
    workingHours: 8,
    isPresent: true
};

const attendance2: Attendance = {
    id: "002",
    name: "Aisyah",
    date: "2026-10-22",
    checkIn: "07:30",
    checkOut: "15:30",
    workingHours: 8,
    isPresent: true
};

const attendance3: Attendance = {
    id: "003",
    name: "Nadia",
    date: "2026-10-22",
    checkIn: "-",
    checkOut: "-",
    workingHours: 0,
    isPresent: false
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);
