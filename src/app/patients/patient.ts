
export interface Patient {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
}

export interface PatientsResponse {
    content: Patient[];
    totalPages: number;
}