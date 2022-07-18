import React, { Fragment } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import "./styles.css"

function Footer() {
    return (
        <Fragment>
            <div className='headerSombraFooter'></div>
            <div className='containerFooter'>

                <div className='textoFooter'>
                    <a href='/'>© 2022 por Palavras de Paz</a>
                </div>

                <div className='iconesFooter'>
                    <a href="https://www.instagram.com/palavrasdepaz.br/" target={"blank"}><i className="fa-brands fa-instagram" ></i></a>
                    <a href="https://www.facebook.com/palavrasdepaz.br" target={"blank"}><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/company/palavrasdepaz/" target={"blank"}><i className="fa-brands fa-linkedin" ></i></a>
                    <a href="https://wa.me/5511999756554" target={"blank"}><i className="fa-brands fa-whatsapp-square"></i></a>
                    <a href="https://www.youtube.com/channel/UCkmhiQTeUfdvKIY9NG9Navg" target={"blank"}><i className="fa-brands fa-youtube"></i></a>
                    <a href="mailto:contato@palavrasdepaz.org" target={"blank"}><i className="fa-solid fa-envelope"></i></a>
                </div>

                <div className='enioFooter'>
                    <a href="https://www.smadvogados.adv.br/enio.html" target={"blank"}>Desenvolvido por: Enio Santinelli Filho</a>
                </div>

                {/* <Navbar bg="light">
                    <Container style={{ padding: "2%" }}>
                        <Navbar.Brand style={{ color: "#00A97E" }} href="/">© 2022 Palavras de Paz</Navbar.Brand>
                        <Container >
                            <NavbarBrand style={{ color: "#00A97E" }} target={"blank"} href="https://www.instagram.com/palavrasdepaz.br/"><i className="fa-brands fa-instagram"></i></NavbarBrand>
                            <NavbarBrand style={{ color: "#00A97E" }} target={"blank"} href="https://www.facebook.com/palavrasdepaz.br"><i className="fa-brands fa-facebook"></i></NavbarBrand>
                            <NavbarBrand style={{ color: "#00A97E" }} target={"blank"} href="https://www.linkedin.com/company/palavrasdepaz/"><i className="fa-brands fa-linkedin"></i></NavbarBrand>
                            <NavbarBrand style={{ color: "#00A97E" }} target={"blank"} href="https://wa.me/5511999756554"><i className="fa-brands fa-whatsapp-square"></i></NavbarBrand>
                            <NavbarBrand style={{ color: "#00A97E" }} target={"blank"} href="https://www.youtube.com/channel/UCkmhiQTeUfdvKIY9NG9Navg"><i className="fa-brands fa-youtube"></i></NavbarBrand>
                            <NavbarBrand style={{ color: "#00A97E" }} target={"blank"} href="mailto:contato@palavrasdepaz.org"><i className="fa-solid fa-envelope"></i></NavbarBrand>
                        </Container>
                        <Container>
                            <NavbarBrand style={{ color: "#00A97E" }} target={"blank"} href="https://www.smadvogados.adv.br/enio.html">Desenvolvido por: Enio Santinelli Filho</NavbarBrand>
                        </Container>
                    </Container>
                </Navbar> */}
            </div>
        </Fragment>
    )
}

export default Footer