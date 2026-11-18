/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
    studentName: string;
    courseName: string;
    isCompleted: boolean;
    studentScore: number;
    learningDuration: number;
};

const enrollmentData: Enrollment[] = [
    {
        studentName: "Alya",
        courseName: "TypeScript",
        isCompleted: true,
        studentScore: 91,
        learningDuration: 38
    },
    {
        studentName: "Budi",
        courseName: "TypeScript",
        isCompleted: false,
        studentScore: 45,
        learningDuration: 12
    },
    {
        studentName: "Citra",
        courseName: "Database",
        isCompleted: true,
        studentScore: 87,
        learningDuration: 42
    },
    {
        studentName: "Dimas",
        courseName: "Backend",
        isCompleted: true,
        studentScore: 96,
        learningDuration: 40
    },
    {
        studentName: "Eka",
        courseName: "Database",
        isCompleted: false,
        studentScore: 60,
        learningDuration: 18
    },
    {
        studentName: "Fajar",
        courseName: "Backend",
        isCompleted: true,
        studentScore: 82,
        learningDuration: 35
    },
    {
        studentName: "Gita",
        courseName: "TypeScript",
        isCompleted: true,
        studentScore: 88,
        learningDuration: 36
    },
    {
        studentName: "Hana",
        courseName: "Backend",
        isCompleted: false,
        studentScore: 70,
        learningDuration: 20
    }
];

function countTotalEnrollments(data: Enrollment[]): number {
    return data.length;
}

function countCompletedEnrollments(data: Enrollment[]): number {
    return data.filter((item) => item.isCompleted).length;
}

function countIncompleteEnrollments(data: Enrollment[]): number {
    return data.filter((item) => !item.isCompleted).length;
}

function calculateCompletionPercentage(data: Enrollment[]): number {
    if (data.length === 0) {
        return 0;
    }

    return (countCompletedEnrollments(data) / data.length) * 100;
}

function getHighestScore(data: Enrollment[]): number {
    return Math.max(...data.map((item) => item.studentScore));
}

function getLowestScore(data: Enrollment[]): number {
    return Math.min(...data.map((item) => item.studentScore));
}

function calculateAverageScore(data: Enrollment[]): number {
    if (data.length === 0) {
        return 0;
    }

    const sumScore = data.reduce((total, item) => total + item.studentScore, 0);
    return sumScore / data.length;
}

function countPassingStudents(data: Enrollment[]): number {
    return data.filter((item) => item.studentScore >= 75).length;
}

function getUniqueCourses(data: Enrollment[]): string[] {
    return [...new Set(data.map((item) => item.courseName))];
}

function countStudentsInCourse(data: Enrollment[], courseName: string): number {
    return data.filter((item) => item.courseName === courseName).length;
}

function calculateAverageScoreForCourse(data: Enrollment[], courseName: string): number {
    const selectedEnrollments = data.filter((item) => item.courseName === courseName);

    if (selectedEnrollments.length === 0) {
        return 0;
    }

    const sumCourseScore = selectedEnrollments.reduce((total, item) => total + item.studentScore, 0);
    return sumCourseScore / selectedEnrollments.length;
}

function getTotalLearningHours(data: Enrollment[]): number {
    return data.reduce((total, item) => total + item.learningDuration, 0);
}

function calculateAverageLearningDuration(data: Enrollment[]): number {
    if (data.length === 0) {
        return 0;
    }

    return getTotalLearningHours(data) / data.length;
}

function printCompletionSummary(data: Enrollment[]): void {
    console.log("Completion Statistics");
    console.log(`Total enrollments: ${countTotalEnrollments(data)}`);
    console.log(`Completed enrollments: ${countCompletedEnrollments(data)}`);
    console.log(`Incomplete enrollments: ${countIncompleteEnrollments(data)}`);
    console.log(`Completion percentage: ${calculateCompletionPercentage(data).toFixed(2)}%`);
}

function printAcademicSummary(data: Enrollment[]): void {
    console.log("Academic Statistics");
    console.log(`Highest score: ${getHighestScore(data)}`);
    console.log(`Lowest score: ${getLowestScore(data)}`);
    console.log(`Average score: ${calculateAverageScore(data).toFixed(2)}`);
    console.log(`Students with passing scores (>= 75): ${countPassingStudents(data)}`);
}

function printCourseSummary(data: Enrollment[]): void {
    console.log("Course Statistics");

    for (const courseName of getUniqueCourses(data)) {
        console.log(
            `${courseName}: ${countStudentsInCourse(data, courseName)} students, average score ${calculateAverageScoreForCourse(data, courseName).toFixed(2)}`
        );
    }
}

function printLearningSummary(data: Enrollment[]): void {
    console.log("Learning Statistics");
    console.log(`Total learning hours: ${getTotalLearningHours(data)}`);
    console.log(`Average learning duration: ${calculateAverageLearningDuration(data).toFixed(2)} hours`);
}

function printEnrollmentDashboard(data: Enrollment[]): void {
    printCompletionSummary(data);
    printAcademicSummary(data);
    printCourseSummary(data);
    printLearningSummary(data);
}

printEnrollmentDashboard(enrollmentData);