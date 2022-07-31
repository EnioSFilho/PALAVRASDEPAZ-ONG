import React, { Fragment } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png"
import "./styles.css"


const Header: React.FC = () => {
    return (

        <Fragment>
            <Navbar expand="lg">
                <Container fluid >
                    <img src={Logo} alt="Logo Palavras de paz" />
                    <div className='textoHeader'>
                        <h3>Palavras de Paz</h3>
                        <p>PROGRAMA DE EDUCAÇÃO PARA PAZ</p>
                    </div>
                    <Navbar.Brand href="#">      </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link  > <Link to="/" style={{ textDecoration: "none", color: "#00A97E" }}> Início</Link></Nav.Link>
                            <NavDropdown title="Sobre nós" id="navbarScrollingDropdown">
                                <NavDropdown.Item >  <Link to="/nos" style={{ textDecoration: "none", color: "#00A97E" }}>Sobre nós</Link></NavDropdown.Item>
                                <NavDropdown.Item >  <Link to="/equipe" style={{ textDecoration: "none", color: "#00A97E" }}>Nossa Equipe</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/downloads" style={{ textDecoration: "none", color: "#00A97E" }}>Downloads</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item ><Link to="/perguntas" style={{ textDecoration: "none", color: "#00A97E" }}>Perguntas e Respostas</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Programa" id="navbarScrollingDropdown">
                                <NavDropdown.Item> <Link to="/programa" style={{ textDecoration: "none", color: "#00A97E" }}> Programa</Link></NavDropdown.Item>
                                <NavDropdown.Item> <Link to="/conheca" style={{ textDecoration: "none", color: "#00A97E" }}>Conheça o Programa</Link></NavDropdown.Item>
                                <NavDropdown.Item> <Link to="/locais" style={{ textDecoration: "none", color: "#00A97E" }}>Aonde Ocorre ?</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/atualmente" style={{ textDecoration: "none", color: "#00A97E" }}>O Programa Atualmente</Link></NavDropdown.Item>
                                <NavDropdown.Item> <Link to="/implementar" style={{ textDecoration: "none", color: "#00A97E" }}>Como Implementar</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Depoimentos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action6">
                                    Notícias
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Envolva-se" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Doe</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Participe do PEP ONLINE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">Contato</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquisar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Pesquisar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>







        </Fragment>
    );

}

export default Header;