/* eslint-disable no-undef */
import './styles.css'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/Header'

import { useCart } from '../../../services/hooks/useCart'
import { MyRequests } from '../MyRequests/MyRequests';

import carrinhoImage from '../../../images/carrinho-de-compras-vazio.jpg'

function Requests() {
    const { dados, cart, totalValue } = useCart();
    return (
        <>
            < Header />
            {cart.length !== 0 ? (
                <>
                    {cart.map(cart => {
                        return < MyRequests key={cart.id} id={cart.id} name={cart.burger} amount={cart.quantities} value={cart.value} image={cart.image} />
                    })}
                    <strong>Valor Total {totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
                    < section className='buttons' >
                        < Link to='/RequestsForm' ><button className='adress'>Adicionar Endereço</button></Link>
                        {dados.length === 0 ? (<p></p>) : (<button className='finally'>Finalizar compra</button>)}
                    </section >
                </>
            ) : (
                <div id='cart-container'>
                    <img src={carrinhoImage} alt='' />
                    <h1>Parece que seu carrinho está vazio!</h1>
                </div>
            )}


        </>
    )
}


export default Requests