
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

    function saveProduct(name, value) {
        const imagem = new FormData();

        const json = {
            "name": name,
            "ingredients": "Carne e Pão",
            "value": value,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }

        json.createdAt = json.createdAt.toISOString().slice(0, -14)
        json.updatedAt = json.updatedAt.toISOString().slice(0, -14)

        /* imagem.append('imagem', {
            arquivo
        }); */
        
        api.post("/insert", json)
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
            "ingredients": "Carne e Pão",
            "value": value,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }

        json.createdAt = json.createdAt.toISOString().slice(0, -14)
        json.updatedAt = json.updatedAt.toISOString().slice(0, -14)

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