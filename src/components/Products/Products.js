/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect, useState } from 'react'
import './Products.css'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import { useCart } from '../../services/hooks/useCart'
import { useProducts } from '../../services/hooks/useProducts';


function Products({ id, image, ingredients, comments, name, value }) {
    const { add } = useCart();
    const { products, saveComment } = useProducts()
    const [commentsText, setCommentsText] = useState('')

    var [msg, setMsg] = useState(false)

    const [handleImage, setHandleImage] = useState(true)
    const [handleIgredientes, setHandleIgredientes] = useState(false)
    const [handleComments, setHandleComments] = useState(false)

    return (
        <>
        <div className='products'>
            {/* <img src={image} alt="Burger" /> */}

            {/* Sessão dos comentários */}
            <div id={`comentarios${id}`} style={{
                    display: 'none',
                    margin: '15px auto',
                    width: '88%',
                    padding: '10px',
                    height: '19rem',
                    borderRadius: '3px',
                    background: '#1d2528'
                }}>
                    <h1 style={{
                        color: "white"
                    }}>Comentários</h1>
                    <div style={{
                        height: '10rem',
                        overflowY: 'scroll'
                    }}>
                        {comments.map(comments => {
                            return (
                                <div style={{
                                    background: "#04d361",
                                    color: "black",
                                    fontSize: "10pt",
                                    padding: "5px",
                                    margin: "7px 0 0 30px",
                                    width: "50%",
                                    borderRadius: "10px",
                                }}>
                                    {comments}
                                </div>
                            )
                        })} 
                    </div>
                    <input id='coment-text' type='text' onChange={(e) => {
                        setCommentsText(e.target.value)
                    }} />
                    <input id='coment-button' type='button' style={{background: "#04d361", cursor: "pointer"}} value='Enviar' onClick={() => {
                        saveComment(id, name, value, comments, commentsText)
                        document.location.reload(true);
                    }} />
                </div>

                {/* Sessão dos Ingredientes */}
                <div id={`ingredientes${id}`}
                    style={{
                        display: 'none',
                        margin: '15px auto',
                        width: '88%',
                        height: '19rem',
                        borderRadius: '3px',
                        background: '#1d2528'
                    }}>

                    <h1 style={{
                        color: 'white',
                        paddingTop: "10px"
                    }}>Ingredientes</h1>

                    <span style={{
                        display: 'block',
                        color: '#fd6505',
                        margin: "25%  10px 0 10px"
                    }}>{ingredients}</span>
                </div>

            <h3>{name}</h3>
            <div className='icons-div'>
                < RestaurantIcon className='icon-ingredients' onClick={() => {
                    document.getElementById(`comentarios${id}`).style.display = 'none'
                    document.getElementById(`ingredientes${id}`).style.display = 'block'
                }} />
                <div className='buy'>
                    <p onClick={() => {
                        setMsg(!msg)
                        products.id = id
                        products.burger = name
                        products.value = value
                        products.subTotal = value * products.quantities
                        add(products)
                    }}>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>

                </div>
                < ModeCommentIcon className='icon-comments'  onClick={() => {
                    document.getElementById(`ingredientes${id}`).style.display = 'none'
                    document.getElementById(`comentarios${id}`).style.display = 'block'
                }} />
            </div>
            <p id='mensagem-carrinho'>{msg === false && "Clique para adicionar"}{msg && "Adicionado no carrinho!"}</p>
        </div>

    </>
    )
}

export default Products