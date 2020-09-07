import React from 'react';

import Logo from '../../assets/logo.png';

import { Container, Navigation, Form, SendButton } from './styles';

const MenuForm: React.FC = () => {
    function handleToggle() {
        if(window.toggleActiveMenu) {
            window.toggleActiveMenu();
        }
    }
    
    return (
        <Container>
            <Navigation>
                <img src={Logo} alt="logo-menu"/>
                <button className="action--close" onClick={handleToggle}>✕</button>
            </Navigation>

            <Form>
                <span className="title">Registre-se</span>
                <span className="subtitle">preencha o formulário abaixo</span>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Sobrenome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <SendButton     >Enviar Cadastro</SendButton>
                <span className="terms">
                    Esta página está sujeita a Política de privacidade e aos Termos de serviço.
                </span>
            </Form>
        </Container>
    )
}

export default MenuForm;