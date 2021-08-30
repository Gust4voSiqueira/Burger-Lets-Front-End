import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Footer from './components/Footer/Footer'

import { useSearch } from "./services/hooks/useSearch"
import { useEffect } from "react"
import { useState } from "react"
import { useProducts } from "./services/hooks/useProducts"


function Landing() {
    const { products } = useProducts()
    const [result, setResult] = useState(Number)

    return (
        <>
            <Header />
            {products.map((products) => (
                < Products key={products.id} id={products.id} name={products.name} value={products.value} image={products.image} createdAt={products.createdAt} updatedAt={products.updatedAt} />
            ))}

            <Footer />
        </>
    )

}

export default Landing