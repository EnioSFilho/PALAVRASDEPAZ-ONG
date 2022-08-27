import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'
import "./styles.css"
import ImgDoacao from "../../assets/images/doacao.jpg"
import Voluntarios from "../../assets/images/voluntarios.jpg"
import Inscrever from "../../assets/images/inscrever.jpg"

function Doacao() {
    return (
        <Fragment>

                <div className='headerSombraDoacao'></div>
            <div className='containerDoacao'>

                <div className='cardOneDoacao'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={ImgDoacao} />
                        <Card.Body>
                            <Card.Title>Faça uma Doação</Card.Title>
                            <Card.Text>
                                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                                <b>Você pode fazer parte da conquista pela paz.</b>
                            </Card.Text>
                            <Button variant="outline-success" style={{marginLeft: "50px"}}>Faça sua Doação</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardDoisInscrever'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Inscrever} />
                        <Card.Body>
                            <Card.Title>Inscreva-se</Card.Title>
                            <Card.Text>
                            <b>Você está convidado a se inscrever.</b>
                            Somente os participantes previamente inscritos poderão participar. É simples e rápido, basta optar pelas formas abaixo, e boa sorte.
                            </Card.Text>
                            <Button variant="outline-success" style={{marginLeft: "20px", marginRight: "15px", marginTop: "15px"}}>Whatsapp</Button>
                            <Button variant="outline-success" style={{marginTop: "15px"}}>Inscrições</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardTresVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img  src={Voluntarios} />
                        <Card.Body>
                            <Card.Title>Seja um Voluntário!</Card.Title>
                            <Card.Text>
                            <b>Precisamos de você</b> para nos ajudar a promover a paz em todo o mundo. Faça parte do voluntariado: doe, socialize, faça compras, vá aos eventos, ou simplesmente assista aos vídeos.
                            </Card.Text>
                            <Button variant="outline-success" style={{marginLeft: "60px", marginTop: "15px"}}>Junte-se a nós</Button>
                        </Card.Body>
                    </Card>
                </div>



            </div>
            


        </Fragment>

    )
}

export default Doacao