import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/Product";

export const useGetAllProducts = () =>{
    return useQuery({
        queryKey: ["products"],
        queryFn:getAllProducts,
    })
}