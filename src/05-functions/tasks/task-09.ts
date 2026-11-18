/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type Patient = {
    patientId: string;
    patientName: string;
    patientAge: number;
    patientDepartment: string;
    isAdmitted: boolean;
    hospitalBill: number;
};

const patientData: Patient[] = [
    {
        patientId: "PT001",
        patientName: "Alya",
        patientAge: 17,
        patientDepartment: "Pediatrics",
        isAdmitted: true,
        hospitalBill: 850000
    },
    {
        patientId: "PT002",
        patientName: "Budi",
        patientAge: 45,
        patientDepartment: "Cardiology",
        isAdmitted: false,
        hospitalBill: 1200000
    },
    {
        patientId: "PT003",
        patientName: "Citra",
        patientAge: 68,
        patientDepartment: "Cardiology",
        isAdmitted: true,
        hospitalBill: 2500000
    },
    {
        patientId: "PT004",
        patientName: "Dimas",
        patientAge: 33,
        patientDepartment: "Orthopedics",
        isAdmitted: true,
        hospitalBill: 640000
    },
    {
        patientId: "PT005",
        patientName: "Eka",
        patientAge: 14,
        patientDepartment: "Pediatrics",
        isAdmitted: false,
        hospitalBill: 350000
    }
];

function countTotalPatients(data: Patient[]): number {
    return data.length;
}

function countAdmittedPatients(data: Patient[]): number {
    return data.filter((item) => item.isAdmitted).length;
}

function countDischargedPatients(data: Patient[]): number {
    return data.filter((item) => !item.isAdmitted).length;
}

function countPatientsInDepartment(data: Patient[], departmentName: string): number {
    return data.filter((item) => item.patientDepartment === departmentName).length;
}

function getHighestHospitalBill(data: Patient[]): number {
    return Math.max(...data.map((item) => item.hospitalBill));
}

function getLowestHospitalBill(data: Patient[]): number {
    return Math.min(...data.map((item) => item.hospitalBill));
}

function calculateAverageHospitalBill(data: Patient[]): number {
    if (data.length === 0) {
        return 0;
    }

    const sumBill = data.reduce((total, item) => total + item.hospitalBill, 0);
    return sumBill / data.length;
}

function calculateTotalHospitalRevenue(data: Patient[]): number {
    return data.reduce((total, item) => total + item.hospitalBill, 0);
}

function getAdmittedPatientNames(data: Patient[]): string[] {
    return data.filter((item) => item.isAdmitted).map((item) => item.patientName);
}

function printHospitalReport(data: Patient[]): void {
    const pediatricsData = countPatientsInDepartment(data, "Pediatrics");
    const cardiologyData = countPatientsInDepartment(data, "Cardiology");
    const orthopedicsData = countPatientsInDepartment(data, "Orthopedics");

    console.log("Hospital Daily Report");
    console.log(`Total patients: ${countTotalPatients(data)}`);
    console.log(`Total admitted patients: ${countAdmittedPatients(data)}`);
    console.log(`Total discharged patients: ${countDischargedPatients(data)}`);
    console.log(`Patients in Pediatrics: ${pediatricsData}`);
    console.log(`Patients in Cardiology: ${cardiologyData}`);
    console.log(`Patients in Orthopedics: ${orthopedicsData}`);
    console.log(`Highest hospital bill: ${getHighestHospitalBill(data)}`);
    console.log(`Lowest hospital bill: ${getLowestHospitalBill(data)}`);
    console.log(`Average hospital bill: ${calculateAverageHospitalBill(data).toFixed(2)}`);
    console.log(`Total hospital revenue: ${calculateTotalHospitalRevenue(data)}`);
    console.log(`Admitted patients: ${getAdmittedPatientNames(data).join(", ")}`);
}

printHospitalReport(patientData);