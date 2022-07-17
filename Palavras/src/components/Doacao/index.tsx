import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'
import "./styles.css"
import ImgDoacao from "../../assets/images/doacao.png"
import Voluntarios from "../../assets/images/voluntarios.jpg"

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
                            <Button variant="outline-success">Faça sua Doação</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardDoisVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Voluntarios} />
                        <Card.Body>
                            <Card.Title>Seja um Voluntário!</Card.Title>
                            <Card.Text>
                            Precisamos de você para nos ajudar a promover a paz em todo o mundo. Faça parte do voluntariado: doe, socialize, faça compras, vá aos eventos, ou simplesmente assista aos vídeos.
                            </Card.Text>
                            <Button variant="outline-success">Junte-se a nós</Button>
                        </Card.Body>
                    </Card>
                </div>



            </div>



        </Fragment>

    )
}

export default Doacao