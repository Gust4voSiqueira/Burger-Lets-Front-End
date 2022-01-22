import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState } from 'react';
import { useAuth } from '../../services/hooks/useAuth'

export default function Footer() {
    const { login } = useAuth()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [cardLogin, setCardLoginAcesso] = useState(false)

    return (
        <>
            <footer className='container-footer'>
                <div>
                    <p>Deixe sua sugestão, ela é muito importante para nós!</p>
                    <textarea className='suggestion' placeholder='Não saia sem deixar sua sugestão!' rows='5' cols='50'  ></textarea>
                    <input className='submit-suggestion' type='button' value='Enviar Sugestão' onClick={() => {
                        //Função que envia os comentários
                    }}></input>
                </div>


                <div className='redes-sociais'>
                    <p>Nos Acompanhe nas Redes Sociais!</p>
                    <a className='icons-social' href="https://www.instagram.com/burgerlets/"> <InstagramIcon /> </a>
                    <a href="https://www.facebook.com/burgerlets-839859673064224/">  <FacebookIcon /> </a>

                    <div className='login-admin' id='login-admin'>
                        <header>
                            <li onClick={() => {
                                document.getElementById('container-login').style.display = 'inline-block'
                                document.getElementById('container-acesso').style.display = 'none'
                                }}>Login</li>
                            <li onClick={() => {
                                document.getElementById('container-login').style.display = 'none'
                                document.getElementById('container-acesso').style.display = 'block'
                                }}
                            >Solicitar Acesso</li>
                        </header>

                        <h1>Faça ou requisite seu Login!</h1>
                        <div className='container-login' id='container-login'>
                            <input type="text" value={user} id='UsernameInput' placeholder='Username' onChange={(e) => setUser(e.target.value)} ></input>
                            <input type="Password" value={password} id='PasswordInput' placeholder='Password' onChange={(e) => setPassword(e.target.value)} ></input>
                            <input className='button-login' type="button" value='Login' onClick={() => {
                                login(login, password)
                            }} />
                        </div>
                        <div className='container-acesso' id='container-acesso'>
                            <input type="text" placeholder='Nome Completo' />
                            <input type="text" placeholder='Username' />
                            <input type="Password" placeholder='Password' />
                            <input className='button-acesso' id='button-acesso' type="button" value='Requisitar' />
                        </div>
                    </div>

                    <p className='login-admin-text' onClick={() => {
                        setCardLoginAcesso(!cardLogin)
                        { cardLogin ? document.getElementById('login-admin').style.display = 'block' : document.getElementById('login-admin').style.display = 'none' }
                        
                    }}>Login for Admin</p>
                </div>

            </footer>
        </>
    )
}