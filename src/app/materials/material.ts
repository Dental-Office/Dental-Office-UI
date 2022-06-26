export interface Material {
    id?: string;
    materialName: string;
    quantity: string;
}

export interface MaterialResponse {
    content: Material[];
    totalPages: number;
}