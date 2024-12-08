import React from "react";
import {Cart} from "@/ui/components"
import { fetchProducts } from "@/lib/api";


export default function CartPage() {
    return (
    <main>
       <Cart/>
    </main>
    );
}
