import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useProducts } from "../../services/hooks/useProducts";

import RestaurantIcon from '@material-ui/icons/Restaurant';
import ImageIcon from '@mui/icons-material/Image';

import ProductsAdminPage from './components/ProductsAdminPage'

import './index.css'

export function PageAdmin() {
    const { products, saveProduct } = useProducts()
    const [name, setName] = useState(null)
    const [value, setValue] = useState(null)
    const [file, setFile] = useState(null)
    const [ingredients, setIngredients] = useState(null)

    return (
        <>
            <Header />
            <form className='products'>
                <div className='file-div'>
                    <label className='file-div' id='file' for="arquivo" style={{
                        display: "block",
                    }} >Enviar arquivo</label>
                    <input type="file" name="arquivo" id="arquivo" onChange={(e) => {
                        setFile(e.target.files[0])
                    }} />

                    <textarea placeholder="Insira aqui os Ingredientes" rows="14" cols="42" id='ingredients' style={{
                        display: 'none',
                        color: 'black',
                        padding: "10px"
                    }} onChange={(e) => {
                        setIngredients(e.target.value)
                    }} />
                </div> 

                <div className="dados-container" >
                    < ImageIcon className='icons' onClick={() => {
                        document.getElementById("file").style.display = 'block'
                        document.getElementById("ingredients").style.display = 'none'
                    }} />
                    <div>
                        < input placeholder="Digite aqui o nome" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        < input placeholder="Digite aqui o Valor" onChange={(e) => {
                            setValue(e.target.value)
                        }} />
                    </div>
                    < RestaurantIcon className='icons' onClick={() => {
                        document.getElementById("file").style.display = 'none'
                        document.getElementById("ingredients").style.display = 'block'
                    }} />
                </div>
                
                <input type='button' className='buy' value='Adicionar' onClick={() => {
                    if(name == null || value == null || ingredients == null) {
                        document.getElementById("message-erro").style.opacity = '1'
                    } else {
                        saveProduct(name, value, ingredients)
                        document.location.reload(true);
                    }
                }} />
                <p className="message-erro" id='message-erro' style={{opacity: "0"}}>Insira os Ingredientes para cadastrar</p>
            </form>

            {products.map((products) => (
                < ProductsAdminPage key={products.id} id={products.id} name={products.name} value={products.value} createdAt={products.createdAt} updatedAt={products.updatedAt} />
            ))}
            
            <Footer />
        </>
    )
}