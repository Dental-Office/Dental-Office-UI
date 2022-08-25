import { Material } from "../materials/material";
import { Patient } from "../patients/patient";

export interface Record {
    id?: string;
    patient: Patient;
}

export interface RecordResponse {
    content: Record[];
    totalPages: number;
}

export interface RecordRequest {
    patientId: string;
    materialIds: String[];
}