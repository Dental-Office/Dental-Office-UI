export interface Service {
    id?: string;
    serviceName: string;
}

export interface ServiceResponse {
    content: Service[];
    totalPages: number;
}