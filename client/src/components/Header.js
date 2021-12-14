import React from 'react';
import { MdPets, MdLocalHospital } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { NavDropdown, Nav } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const { logout } = useAuth0();
    return (
    <>
        <header>
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/home" style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><MdPets style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                    PETS
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/vet-visits" style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><MdLocalHospital style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                    VET VISITS
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/account" style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><FaUser style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                    ACCOUNT
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => logout()} style={{ color: "var(--platinum)"}}><div className= "bi d-flex justify-content-center mx-auto mb-1"><FiLogOut style={{fontSize: "2.5rem", color: "var(--platinum)"}} /></div>
                LOGOUT</Nav.Link>
            </Nav.Item>
        </Nav>
        </header>
    </>
    )
}

export default Header;
