
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
        const imagem = new FormData();

        imagem.append('imagem', {
            arquivo
        });

        api.post("/post", imagem, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            "name": name,
            "value": value,
        }).then(function (response) {
            setProducts(response.data);
        })
    }

    function deleteProduct(id) {
        api.delete(`/delete/${id}`)
            .then(function (response) {
                console.log(response.data);
            })
    }

    function editProduct(argumento, id) {
        api.put(`/edit/${id}`,
            argumento
        ).then(function (response) {
            console.log(response.data);
        })
    }


    const store = {
        products,
        deleteProduct,
        saveProduct,
        editProduct
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
        saveProduct,
        editProduct
    } = context

    return {
        products,
        deleteProduct,
        saveProduct,
        editProduct
    }
}