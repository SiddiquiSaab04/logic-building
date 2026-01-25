import { useGetAllProducts } from "./hooks/useProducts";
import {  useEffect } from "react";
import DataTable from "react-data-table-component";
import type { product } from "./interfaces/Product";

function App() {
  const { data, isLoading, isError, error } = useGetAllProducts();
  const products = data?.products;
  useEffect(() => {
    if (products)
    console.log("Fetched Products:", products);
  }, [products]);


  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h1>React Data Table Practice</h1>
      <p>Products loaded successfully</p>
      {/* You can render your data table here using the fetched products */}
<DataTable<product>
  title="Product List"
  columns={[
    { name: 'ID', selector: (row: product) => row.id, sortable: true },
    { name: 'Name', selector: (row: product) => row.title, sortable: true },
    { name: 'Price', selector: (row: product) => row.price, sortable: true, right: true },
    { name: 'Category', selector: (row: product) => row.category, sortable: true },
    { name: 'Description', selector: (row: product) => row.description },
  ]}
  data={data?.products || []}
  pagination
/>
    </div>
  );
}

export default App;
