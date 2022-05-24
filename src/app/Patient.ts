export interface Patient {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
}

export interface PatientsResponse {
    content: Patient[];
    totalPages: number;
}



