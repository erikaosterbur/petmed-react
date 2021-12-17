import React from 'react';
import { FiLogIn } from "react-icons/fi";
import { Nav } from 'react-bootstrap';

import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <>
                <header>
                    <div className="row d-flex justify-content-center">
                        <Nav className='p-3'>
                            <Nav.Item>
                                <Nav.Link onClick={() => loginWithRedirect()} style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><FiLogIn style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                                    LOGIN
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </header>
                <h1 className="d-flex justify-content-center p-4">Welcome to PetMed</h1>
                <h4 className="d-flex justify-content-center">Login to get started!</h4>
            </>
        )
    ) 
}

export default Login;