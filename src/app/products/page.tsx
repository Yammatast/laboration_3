import React from "react";
import {ProductList} from "@/ui/components"
import { fetchProducts } from "@/lib/api";


export default async function ProductPage() {
    const data = await fetchProducts();
    console.log(data);
    return (
    <main>
       <ProductList productList={data}/>
    </main>
    );
}
