import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useProducts } from '../../services/hooks/useProducts';


export default function Footer() {
    const { deleteProduct } = useProducts()
    return (
        <>
            < footer id='container-footer'>
                <div>
                    <p>Deixe sua sugestão, ela é muito importante para nós!</p>
                    <textarea id='suggestion' placeholder='Sugestões' rows='5' cols='50'  ></textarea>
                    <input id='submit-suggestion' type='button' value='Enviar Sugestão' onClick={() => {
                        deleteProduct(3)
                    }}></input>
                </div>


                <div id='redes-sociais'>
                    <p>Nos Acompanhe nas Redes Sociais!</p>
                    <a id='icons-social' href="https://www.instagram.com/burgerlets/"> <InstagramIcon /> </a>
                    <a href="https://www.facebook.com/burgerlets-839859673064224/">  <FacebookIcon /> </a>

                    <div id='login-admin'>
                        <header><li onClick={() => {
                            document.getElementById('container-login').style.display = 'inline-block'
                            document.getElementById('container-acesso').style.display = 'none'

                        }} >Login</li><li onClick={() => {

                            document.getElementById('container-login').style.display = 'none'
                            document.getElementById('container-acesso').style.display = 'block'
                        }}
                        >Solicitar Acesso</li></header>
                        <h1>Faça ou requisite seu Login!</h1>
                        <div id='container-login'>
                            <input type="text" placeholder='Username' ></input>
                            <input type="Password" placeholder='Password' ></input>
                            <input id='button-login' type="button" value='Login' ></input>
                        </div>
                        <div id='container-acesso'>
                            <input type="text" placeholder='Nome Completo' ></input>
                            <input type="text" placeholder='Username' ></input>
                            <input type="Password" placeholder='Password' ></input>
                            <input id='button-acesso' type="button" value='Requisitar' ></input>
                        </div>
                    </div>

                    <p id='login-admin-text' onClick={() => {

                        document.getElementById('login-admin').style.display = 'block'

                    }} > Login for Admin</p>
                </div>

            </footer>
        </>
    )
}