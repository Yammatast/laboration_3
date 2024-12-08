import { ProductCard } from "@/ui/components";

export const fetchProducts = async () => {
    return fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=> {
                return json.map((e: any) => {
                    return {
                        productCardProps: {
                            id: e.id,
                            price: e.price,
                            image: e.image,
                            altText: e.title,
                            title: e.title,
                        }
                    }
                })
            })
}
