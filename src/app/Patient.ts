export interface Patient {
    id?: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
}

export interface PatientsResponse {
    content: Patient[];
    totalPages: number;
}



