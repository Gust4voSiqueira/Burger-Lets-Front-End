
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

    function saveProduct(name, value, ingredients) {
        const imagem = new FormData();

        const json = {
            "name": name,
            "ingredients": ingredients,
            "comments": [],
            "value": value,
            "createdAt": new Date().toISOString().slice(0, -14),
            "updatedAt": new Date().toISOString().slice(0, -14)
        }

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
            "createdAt": new Date().toISOString().slice(0, -14),
            "updatedAt": new Date().toISOString().slice(0, -14)
        }

        api.put("/",
            json
        ).then(function (response) {
            console.log(response.data);
        })
    }

    function saveComment(id, name, value, commentsOne,commentsNew) {
        const json = {
            "id": id,
            "name": name,
            "ingredients": "Carne e Pão",
            "comments": commentsOne,
            "value":  value,
            "createdAt": new Date().toISOString().slice(0, -14),
            "updatedAt": new Date().toISOString().slice(0, -14)
        }

        json.comments.push(commentsNew)

        console.log(json)

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
        editProduct,
        saveComment
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
        editProduct,
        saveComment
    } = context

    return {
        products,
        deleteProduct,
        saveProduct,
        editProduct,
        saveComment
    }
}