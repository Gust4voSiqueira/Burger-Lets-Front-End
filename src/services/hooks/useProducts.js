
import React, { createContext, useState, useContext, useEffect } from "react";
import { api } from '../api'

const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get("/")
            .then(function (response) {
                setProducts(response.data);
                console.log(response.data)
            })
    }, [])

    function deleteProduct(id) {
        api.delete(`/${id}`)
            .then(response => setProducts(response.data))
    }

    function saveProduct(name, value, arquivo) {
        const imagem = new FormData();
        const json = {
            "id": null,
            "name": name,
            "image": "bbb",
            "ingredients": "Carne e Pão",
            "value": value,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }

        imagem.append('imagem', {
            arquivo
        });

        api.post("/", json)
            .then(function (response) {
                setProducts(response.data);
            })
    }

    function deleteProduct(id) {
        api.delete(`/${id}`)
            .then(function (response) {
                console.log(response.data);
            })
    }

    function editProduct(name, value, id) {
        const json = {
            "id": id,
            "name": name,
            "image": "bbb",
            "ingredients": "Carne e Pão",
            "value": value,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
        api.put("/",
            json
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