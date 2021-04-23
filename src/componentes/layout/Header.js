import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

export default function Header() {

    return (
        <>
            <Navbar expand="lg" light style={{ backgroundColor: '#e3f2fd' }} fixed="top" mb="3">
                <Navbar.Brand href="#">Logo Empresa</Navbar.Brand>
                <Navbar.Toggler target="#navbarColor2" />
                <Collapse navbar id="navbarColor2">

                    <Form mr="auto">
                        <Form.Input type="search" placeholder="Encontre seu produto..." mr="sm-2" />
                    </Form>

                    <Navbar.Nav inline my="2 lg-0">
                        <NavLink to="/">
                            <Nav.ItemLink active>Home</Nav.ItemLink>
                        </NavLink>
                        <NavLink to="produto-cadastro">
                            <Nav.ItemLink >Produtos</Nav.ItemLink>
                        </NavLink>
                        <Nav.ItemLink href="#">Login</Nav.ItemLink>
                    </Navbar.Nav>
                </Collapse>
            </Navbar>
        </>
    )
}