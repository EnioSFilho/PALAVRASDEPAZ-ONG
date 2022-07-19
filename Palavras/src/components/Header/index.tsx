import React, { Fragment } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png"
import "./styles.css"


const Header: React.FC = () => {
    return (

        <Fragment>
            <Navbar bg="light" expand="lg">
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
                            <Nav.Link href="/">Início</Nav.Link>
                            <NavDropdown title="Sobre nós" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/equipe">Nossa Equipe</NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/downloads">Downloads</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">Perguntas e Respostas</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Programa" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action1">Conheça o Programa</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">Onde Ocorre ?</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">O Programa Atualmente</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Como Implementar</NavDropdown.Item>
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