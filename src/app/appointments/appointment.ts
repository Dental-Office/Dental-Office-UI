export interface Appointment {
    id?: string;
    patientId: string;
    date: string;
    time: string;
}

export interface AppointmentResponse {
    content: Appointment[];
    totalPages: number;
}