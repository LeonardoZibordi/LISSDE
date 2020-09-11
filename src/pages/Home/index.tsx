import React from 'react';
import './style.css'
import Logo from '../../assets/images/Logos/Logo.png'
import { Link } from 'react-router-dom'

function App() {
    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt="LISSDE" />
                    </Link>
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <h1>LISDDE Brechó</h1>
                    </Link>
                </div>
            </header>
            <div className='itens-grid'>

                <div className="looks">
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <h1>LOOKS</h1>
                    </Link>
                </div>

                <div className="peças">
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <h1>TODAS AS PEÇAS</h1>
                    </Link>
                </div>

                <div className="contato">
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <h1>CONTATO</h1>
                    </Link>
                </div>

                <div className="informaçoes">
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <h1>INFORMAÇÕES</h1>
                    </Link>
                </div>

            </div>
        </div >
    );
}

export default App;
