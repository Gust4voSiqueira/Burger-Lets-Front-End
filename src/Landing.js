import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Footer from './components/Footer/Footer'
import { useProducts } from "./services/hooks/useProducts"

function Landing() {
    const { products } = useProducts()

    return (
        <>
            <Header />
            {products.map((products) => (
                <Products key={products.id} 
                           id={products.id} 
                           name={products.name} 
                           value={products.value} 
                           image={products.image}
                           comments={products.comments}
                           ingredients={products.ingredients} />
                    ))}

            <Footer />
        </>
    )

}

export default Landing