import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useProducts } from "../../services/hooks/useProducts";

import RestaurantIcon from '@material-ui/icons/Restaurant';
import ImageIcon from '@mui/icons-material/Image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';

import ProductsAdminPage from './components/ProductsAdminPage'

import './index.css'

export function PageAdmin() {
    const { products, saveProduct } = useProducts()
    const [name, setName] = useState(null)
    const [value, setValue] = useState(null)
    const [file, setFile] = useState(null)
    const [ingredients, setIngredients] = useState("")
    const [ingredientsArray, setIngredientsArray] = useState([])

    const handleSaveIngredients = () => {
        ingredientsArray.push(ingredients)
        console.log(ingredientsArray)
        setIngredients("")
    }

    const handleDeleteIngredients = (item) => {
        var array = ingredientsArray;
        var newArray = array.filter(ingredientsArray => ingredientsArray !== item);
        setIngredientsArray(newArray)
        console.log(newArray);
    }

    return (
        <>
            <Header />
            <form className='products'>
                <div className='file-div'>
                    <label className='file-div' id='file' for="arquivo" >SELECIONAR ARQUIVO</label>
                    <input type="file" name="arquivo" id="arquivo" onChange={(e) => {
                        setFile(e.target.files[0])
                    }} />

                <div style={{
                    display: 'none',
                    margin: '15px auto',
                    width: '100%',
                    padding: '10px',
                    height: '19rem',
                    borderRadius: '3px',
                    background: '#1d2528'
                }} id='ingredients-section'>
                    <h1 style={{
                        color: "white",
                        fontSize: '15pt'
                    }}>Ingredientes</h1>
                    <div style={{
                        height: '10rem',
                        overflowY: 'scroll'
                    }}>
                         {ingredientsArray.map(ingredientsArray => {
                            return (
                                <div style={{
                                    color: "white",
                                    background: "#04d361",
                                    fontSize: "10pt",
                                    padding: "5px",
                                    margin: "7px 0 0 30px",
                                    width: "50%",
                                    borderRadius: "10px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    {ingredientsArray}
                                    <DeleteIcon onClick={() => {
                                        handleDeleteIngredients(ingredientsArray)
                                    }} />
                                </div>
                            )
                        })}
                         
                    </div>
                    <div className="ingredients-form">
                    <input value={ingredients} type='text' onChange={(e) => {
                        setIngredients(e.target.value)
                    }} />
                    <div className="ingredients-button" onClick={() => {
                        handleSaveIngredients()
                    }}>< ArrowForwardIosIcon style={{cursor: "pointer"}} /></div>
                    </div>
                </div>
                </div> 

                <div className="dados-container" >
                    < ImageIcon className='icons' onClick={() => {
                        document.getElementById("file").style.display = 'flex'
                        document.getElementById("ingredients-section").style.display = 'none'
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
                        document.getElementById("ingredients-section").style.display = 'block'
                    }} />
                </div>
                
                <input type='button' className='buy' value='Adicionar' onClick={() => {
                    if(name == null || value == null || ingredientsArray.length == 0) {
                        document.getElementById("message-erro").style.opacity = '1'
                    } else {
                        saveProduct(name, value, ingredientsArray, file)
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