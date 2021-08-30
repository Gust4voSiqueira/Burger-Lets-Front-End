
import React, { createContext, useState, useContext, useEffect } from "react";
import { api } from '../api'

const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get("/")
            .then(function (response) {
                setProducts(response.data);
            })
    }, [])

    function deleteProduct(id) {
        api.delete(`/${id}`)
            .then(response => setProducts(response.data))
    }

    function saveProduct(name, value, arquivo) {
        let imagem = new FormData();

        imagem.append('file', {
            imagem
        });

        api.post("/file", imagem, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            "name": name,
            "value": value,
        }).then(function (response) {
            setProducts(response.data);
        })
    }

    const store = {
        products,
        deleteProduct,
        saveProduct
    }

    return (
        <ProductsContext.Provider value={store}>
            {children}
        </ProductsContext.Provider>
    )

}

export function useProducts() {
    const context = useContext(ProductsContext)

    const {
        products,
        deleteProduct,
        saveProduct
    } = context

    return {
        products,
        deleteProduct,
        saveProduct
    }
}