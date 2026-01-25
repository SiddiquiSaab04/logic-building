export interface product{
    id: number;
    title: string;
    price: number;  
    category: string;
    description: string;
}


export interface getAllProductsResponse {
    products: product[];
}