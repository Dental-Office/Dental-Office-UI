import { Patient } from "../patients/patient";

export interface Appointment {
    id?: string;
    patient: Patient;
    date: string;
    time: string;
}

export interface AppointmentResponse {
    content: Appointment[];
    totalPages: number;
}

export interface AppointmentRequest {
    patientId: string;
    date: string;
    time: string;
}

