import axiosInstance from "../axiosInstance/axiosInstances";


export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get("/products");
        console.log(response);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}


