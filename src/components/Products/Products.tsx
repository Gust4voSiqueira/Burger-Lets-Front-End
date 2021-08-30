/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState } from 'react'
import './Products.css'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import { useCart } from '../../services/hooks/useCart'

interface Products {
    id: number;
    name: string;
    value: number;
    image: string;
    createdAt: string;
    updatedAt: string;
}

function Products({ id, name, value, image }: Products) {
    const { add } = useCart();
    var [msg, setMsg] = useState(false)
    let products = {
        id: 0,
        image: '',
        burger: "",
        value: 0,
        quantities: 1,
        subTotal: 0
    }
    return (
        <>
            <div className='products'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <div id='icons-div'>
                    < RestaurantIcon id='icon-ingredients' />
                    <div className='buy'>
                        <p onClick={() => {
                            setMsg(!msg)
                            products.id = id
                            products.burger = name
                            products.value = value
                            products.subTotal = products.value * products.quantities
                            add(products)
                        }}>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>

                    </div>
                    < ModeCommentIcon id='icon-comments' />
                </div>
                <p id='mensagem-carrinho'>{msg === false && "Clique para adicionar"}{msg && "Adicionado no carrinho!"}</p>


            </div>

        </>
    )
}

export default Products