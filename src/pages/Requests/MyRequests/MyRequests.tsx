/* eslint-disable no-lone-blocks */
import './MyRequests.css'

import LixeiraIcon from '../../../images/lixeira.png'
import { useCart } from '../../../services/hooks/useCart'
import { useState } from 'react'

interface cartProps {
    id: number;
    name: string;
    amount: number;
    value: number
    image: string
}

export function MyRequests({ id, name, amount, value, image }: cartProps) {
    const { remove, increment, decrement } = useCart()
    var [quantities, setQuantities] = useState(1)

    return (
        <>
            <div className="carrinho-container">
                < section className='product-name'>
                    <h1>Produto</h1>
                    <span>{name}</span>
                </section>

                <section className='quantities'>
                    <h1>Quantidade</h1>
                    <button onClick={() => {
                        decrement(quantities, setQuantities, value)
                    }}>-</button>
                    <span>{quantities}</span>
                    <button onClick={() => {
                        setQuantities(quantities + 1)
                        increment(quantities, id, value)
                    }}>+</button>
                </section>

                <section className='subtotal'>
                    <h1>SubTotal</h1>
                    <span>{(value * quantities).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                </section>

                < img src={LixeiraIcon} alt='' onClick={() => {
                    remove(id, value * quantities)
                }} />
            </div>

            <div id="carrinho-container-mobile" className='carrinho-container-mobile'>
                <header><span style={{ color: "black" }}>PRODUTO</span><span style={{ color: "#05AC50" }}>{(value * quantities).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></header>
                <section className="body-carrinho">
                    <img src={image} alt="" />
                    <div>
                        <span>{name}</span>
                        <section className='quantities'>
                            <h1>Quantidade</h1>
                            <button onClick={() => {
                                decrement(quantities, setQuantities, value)
                            }}>-</button>
                            <span>{quantities}</span>
                            <button onClick={() => {
                                setQuantities(quantities + 1)
                                increment(quantities, id, value)
                            }}>+</button>
                        </section>

                    </div>
                    <img src={LixeiraIcon} alt="" className='lixeira-icon' onClick={() => {
                       remove(id, value * quantities)
                    }} />
                </section>
            </div>
        </>
    )
}