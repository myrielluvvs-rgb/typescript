/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type Submission = {
    studentName: string;
    isSubmitted: boolean;
    studentScore: number;
};

const submissionData: Submission[] = [
    {
        studentName: "Alya",
        isSubmitted: true,
        studentScore: 90
    },
    {
        studentName: "Budi",
        isSubmitted: false,
        studentScore: 0
    },
    {
        studentName: "Citra",
        isSubmitted: true,
        studentScore: 84
    },
    {
        studentName: "Dimas",
        isSubmitted: true,
        studentScore: 72
    },
    {
        studentName: "Eka",
        isSubmitted: false,
        studentScore: 0
    },
    {
        studentName: "Fajar",
        isSubmitted: true,
        studentScore: 96
    }
];

function countTotalStudents(data: Submission[]): number {
    return data.length;
}

function countSubmittedAssignments(data: Submission[]): number {
    return data.filter((item) => item.isSubmitted).length;
}

function countMissingAssignments(data: Submission[]): number {
    return data.filter((item) => !item.isSubmitted).length;
}

function countPassedStudents(data: Submission[]): number {
    return data.filter((item) => item.isSubmitted && item.studentScore >= 75).length;
}

function countStudentsRequiringRevision(data: Submission[]): number {
    return data.filter((item) => item.isSubmitted && item.studentScore < 75).length;
}

function calculateAverageScore(data: Submission[]): number {
    if (data.length === 0) {
        return 0;
    }

    const sumScore = data.reduce((total, item) => total + (item.isSubmitted ? item.studentScore : 0), 0);
    return sumScore / data.length;
}

function findHighestScore(data: Submission[]): number {
    return Math.max(...data.map((item) => item.studentScore));
}

function findLowestScore(data: Submission[]): number {
    return Math.min(...data.map((item) => item.studentScore));
}

function printSubmissionReport(data: Submission[]): void {
    console.log("Submission Report");
    console.log(`Total students: ${countTotalStudents(data)}`);
    console.log(`Submitted assignments: ${countSubmittedAssignments(data)}`);
    console.log(`Missing assignments: ${countMissingAssignments(data)}`);
    console.log(`Passed students: ${countPassedStudents(data)}`);
    console.log(`Students requiring revision: ${countStudentsRequiringRevision(data)}`);
    console.log(`Average score: ${calculateAverageScore(data).toFixed(2)}`);
    console.log(`Highest score: ${findHighestScore(data)}`);
    console.log(`Lowest score: ${findLowestScore(data)}`);
}

printSubmissionReport(submissionData);