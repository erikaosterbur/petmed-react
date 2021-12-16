import React from 'react';
import { MdPets, MdLocalHospital } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaHome, FaUser } from "react-icons/fa";
import { Nav } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const { user, logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <header>
                <div className="row">
                    {/* <div className="d-flex justify-content-flex-end">
                        <p style={{color: "var(--platinum)"}} className="d-flex align-items-center">Hello, {user.name}!</p>
                        <img src={user.picture} alt={user.name} style={{borderRadius: "50%", width: "3%"}}/>
                    </div> */}
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link href="/home" style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><FaHome style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                                HOME
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/new-pet" style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><MdPets style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                                NEW PET
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/new-vet-visit" style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><MdLocalHospital style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                                NEW VET VISIT
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/account" style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><FaUser style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                                ACCOUNT
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => logout()} style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><FiLogOut style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                                LOGOUT
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </header>
        )
    )
}

export default Header;
