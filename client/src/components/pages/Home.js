import React from 'react';
import { FiLogIn } from "react-icons/fi";
import { Nav } from 'react-bootstrap';

import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <header>
                <div className="row d-flex justify-content-center">
                    <h1 style={{ color: "var(--platinum)"}} className="col-sm-12 col-lg-6">PetMed</h1>
                    <Nav className="col-sm-12 col-lg-4">
                        <Nav.Item>
                            <Nav.Link onClick={() => loginWithRedirect()} style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><FiLogIn style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                                LOGIN
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </header>
        )
    ) 
}

export default Home;