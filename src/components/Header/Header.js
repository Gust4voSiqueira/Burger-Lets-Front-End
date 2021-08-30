/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import "./Header.css"
import logo from '../../images/logo.png'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";

import { useSearch } from '../../services/hooks/useSearch'

function Header() {
    const { busca } = useSearch()
    return (
        <>
            <div id='container-header'>
                <nav>
                    <img src={logo} id='logo' />

                    <input type='text' autoComplete='off' id='search' placeholder='Pesquisar' onChange={(e) => {
                        busca(e.target.value)
                    }} ></input>


                    <ul id='main-desktop'>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Requests">Meus Pedidos</Link></li>
                        <li><Link to="/Location">Localização</Link></li>
                    </ul>
                </nav>
            </div>
            <nav id='main-mobile'>
                <Link to="/"><li>< HomeOutlinedIcon className='icons' /></li></Link>
                <li onClick={() => {
                    { document.getElementById('search').style.display = "block" }
                }}>< SearchIcon className='icons' /></li>
                <Link to="/Requests"><li>< AttachMoneyIcon className='icons' /></li></Link>
                <Link to="/Location"><li>< LocationOnIcon className='icons' /></li></Link>
            </nav>
        </>
    )
}

export default Header