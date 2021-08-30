import './ProductsAdminPage.css'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import { useState } from 'react';

import { useProducts } from "../../../services/hooks/useProducts";

export default function ProductsAdminPage({ id, name, value, image }) {
    const { deleteProduct, editProduct } = useProducts()
    const [newName, setNewName] = useState('')
    const [newValue, settNewValue] = useState('')

    const [edit, setEdit] = useState(false)
    return (
        <div className='products'>
            <img src={image} alt="" />
            {edit ?
                (< input placeholder="Digite aqui o nome" value={name} id='input-edit' onChange={(e) => {
                    setNewName(e.target.value)
                }} />)
                : (<h3 id='name-product'>{name}</h3>)}

            <div id='icons-div'>
                {edit ? (
                    < SaveIcon id='icon-comments' onClick={() => {
                        setEdit(!edit)
                        const argument = {
                            "name": newName,
                            "value": newValue
                        }
                        editProduct(argument, id)
                        document.location.reload(true);
                    }} />
                ) : (
                    < EditIcon id='icon-comments' onClick={() => {
                        setEdit(!edit)
                    }} />
                )}
                {edit ?
                    (< input type='number' placeholder="Valor" value={value} id='input-edit-value' onChange={e => settNewValue(e.target.value)} />)
                    : (
                        <div className='buy'>
                            <p id='product-value'>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                    )}


                < DeleteIcon id='icon-ingredients' onClick={() => {
                    deleteProduct(id)
                    document.location.reload(true);
                }} />

            </div>
        </div>
    )
}