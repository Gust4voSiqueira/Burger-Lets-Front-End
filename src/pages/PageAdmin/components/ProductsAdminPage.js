import './ProductsAdminPage.css'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import { useState } from 'react';

import { useProducts } from "../../../services/hooks/useProducts";

export default function ProductsAdminPage({ id, name, value, image }) {
    const { deleteProduct, editProduct } = useProducts()
    const [newName, setNewName] = useState(name)
    const [newValue, setNewValue] = useState(value)

    const [edit, setEdit] = useState(false)
    return (
        <div className='products'>
            <img src={image} alt="" />
            {edit ?
                (< input placeholder={name} id='input-edit' onChange={(e) => {
                    setNewName(e.target.value)
                }} />)
                : (<h3 id='name-product'>{name}</h3>)}

            <div className='icons-div'>
                {edit ? (
                    < SaveIcon className='icon-comments' onClick={() => {
                        setEdit(!edit)
                        editProduct(newName, newValue, id)
                        document.location.reload(true); 
                    }} />
                ) : (
                    < EditIcon className='icon-comments' onClick={() => {
                        setEdit(!edit)
                    }} />
                )}
                {edit ?
                    (< input type='number' placeholder={value} className='input-edit-value' onChange={e => setNewValue(e.target.value)} />)
                    : (
                        <div className='buy'>
                            <p className='product-value'>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                    )}


                < DeleteIcon className='icon-ingredients' onClick={() => {
                    deleteProduct(id)
                    document.location.reload(true);
                }} />

            </div>
        </div>
    )
}