import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import { useProducts } from "../../services/hooks/useProducts";

import './index.css'

export function PageAdmin() {
    const { products, saveProduct } = useProducts()
    const [name, setName] = useState('')
    const [value, setValue] = useState()
    const [file, setFile] = useState()

    return (
        <>
            <Header />
            <form className='products' enctype="multipart/form-data">
                <div className='file-div'>
                    <label className='file-div' for="arquivo">Enviar arquivo</label>
                    <input type="file" name="arquivo" id="arquivo" onChange={(e) => {
                        setFile(e.target.files[0])
                    }} />
                </div>
                < input placeholder="Digite aqui o nome" onChange={(e) => {
                    setName(e.target.value)
                }} />
                < input placeholder="Digite aqui o Valor" onChange={(e) => {
                    setValue(e.target.value)
                }} />
                <input type='button' className='buy' value='Adicionar' onClick={() => {
                    saveProduct(name, value, file)
                }} />
            </form>
            {products.map((products) => (
                < Products key={products.id} id={products.id} name={products.name} value={products.value} createdAt={products.createdAt} updatedAt={products.updatedAt} />
            ))}
            <Footer />
        </>
    )
}