import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'
import Footer from '../Footer'
import Header from '../Header'
import "./styles.css"
import Espelho from "../../assets/Downloads/Imagens/espelho.png"
import Pedra from "../../assets/Downloads/Imagens/pedra.png"
import Jornada from "../../assets/Downloads/Imagens/jornada.png"
import Leao from "../../assets/Downloads/Imagens/leao.png"
import Formiga from "../../assets/Downloads/Imagens/formiga.png"
import Arqueiro from "../../assets/Downloads/Imagens/arqueiro.png"
import Irmaos from "../../assets/Downloads/Imagens/irmaos.png"
import Arvore from "../../assets/Downloads/Imagens/arvore.png"
import Porta from "../../assets/Downloads/Imagens/porta.png"
import Coelho from "../../assets/Downloads/Imagens/coelho.png"
import Caderno from "../../assets/Downloads/Imagens/caderno1.png"
import Paz from "../../assets/Downloads/Imagens/paz.png"

function Downloads() {
    return (
        <Fragment>
            <Header />




            <div className='headerSombraDoacao'></div>
            <div className='containerDoacao'>

                <div className='cardOneDoacao'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Espelho} style={{maxWidth: "90%"}}/>
                        <Card.Body>
                            <Card.Title>O Espelho na Parede</Card.Title>
                            <Card.Text>
                                <p>Era uma vez uma aldeia distante onde viviam pessoas muito simples. Um dia, chegou um turista. Na manhã seguinte, ele pegou seu espelho e colocou-o na parede para se barbear. </p>
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardDoisInscrever'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Pedra} style={{maxWidth: "90%"}} />
                        <Card.Body>
                            <Card.Title>O Empresário e a Pedra Mágica - Apreciação</Card.Title>
                            <Card.Text>
                                <p>Era uma vez um empreário que tinha um pequeno negócio. Claro que, sendo um empresário, sua vontade era a de ganhar o máximo de dinheiro possível.</p>
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardTresVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img src={Jornada} />
                        <Card.Body>
                            <Card.Title>A Jornada da vida - Força Interior</Card.Title>
                            <Card.Text>
                                <p>NESTA VIDA você é um viajante solitário. E se você não entender a natureza da viagem, vai se perder, porque a vida é a única jornada que, por natureza, não pode andar em um círculos.</p>
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardTresVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img src={Leao} />
                        <Card.Body>
                            <Card.Title>O Leão e a Ovelha - Auto Conhecimento</Card.Title>
                            <Card.Text>
                                <p>Às vezes esquecemos quem somos. por Prem Rawat Ficamos tão envolvidos em nossas causas e definições que não vemos que cada ser humano tem a mesma ambição: ser feliz, estar em paz.</p>
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div>


            </div>

            <div className='containerDoacao'>

                <div className='cardOneDoacao'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Formiga} />
                        <Card.Body>
                            <Card.Title>Faça uma Doação</Card.Title>
                            <Card.Text>
                                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                                <b>Você pode fazer parte da conquista pela paz.</b>
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardDoisInscrever'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Arqueiro} />
                        <Card.Body>
                            <Card.Title>Inscreva-se</Card.Title>
                            <Card.Text>
                                <b>Você está convidado a se inscrever.</b>
                                Somente os participantes previamente inscritos poderão participar. É simples e rápido, basta optar pelas formas abaixo, e boa sorte.
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardTresVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img src={Irmaos} />
                        <Card.Body>
                            <Card.Title>Seja um Voluntário!</Card.Title>
                            <Card.Text>
                                <b>Precisamos de você</b> para nos ajudar a promover a paz em todo o mundo. Faça parte do voluntariado: doe, socialize, faça compras, vá aos eventos, ou simplesmente assista aos vídeos.
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardTresVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img src={Arvore} />
                        <Card.Body>
                            <Card.Title>Seja um Voluntário!</Card.Title>
                            <Card.Text>
                                <b>Precisamos de você</b> para nos ajudar a promover a paz em todo o mundo. Faça parte do voluntariado: doe, socialize, faça compras, vá aos eventos, ou simplesmente assista aos vídeos.
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div>


            </div>


            <div className='containerDoacao'>

                <div className='cardOneDoacao'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Porta} />
                        <Card.Body>
                            <Card.Title>Faça uma Doação</Card.Title>
                            <Card.Text>
                                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                                <b>Você pode fazer parte da conquista pela paz.</b>
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardDoisInscrever'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img variant="top" src={Coelho} />
                        <Card.Body>
                            <Card.Title>Inscreva-se</Card.Title>
                            <Card.Text>
                                <b>Você está convidado a se inscrever.</b>
                                Somente os participantes previamente inscritos poderão participar. É simples e rápido, basta optar pelas formas abaixo, e boa sorte.
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div >
                <div className='cardTresVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img src={Caderno} />
                        <Card.Body>
                            <Card.Title>Seja um Voluntário!</Card.Title>
                            <Card.Text>
                                <b>Precisamos de você</b> para nos ajudar a promover a paz em todo o mundo. Faça parte do voluntariado: doe, socialize, faça compras, vá aos eventos, ou simplesmente assista aos vídeos.
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardTresVoluntario'>
                    <Card style={{ width: '18rem', height: "31rem" }}>
                        <Card.Img src={Caderno} />
                        <Card.Body>
                            <Card.Title>Seja um Voluntário!</Card.Title>
                            <Card.Text>
                                <b>Precisamos de você</b> para nos ajudar a promover a paz em todo o mundo. Faça parte do voluntariado: doe, socialize, faça compras, vá aos eventos, ou simplesmente assista aos vídeos.
                            </Card.Text>
                            <Button variant="success">Download</Button>
                        </Card.Body>
                    </Card>
                </div>


            </div>


            <div className='containerDoacao'>

<div className='cardOneDoacao'>
    <Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div >
<div className='cardDoisInscrever'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div >
<div className='cardTresVoluntario'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div>
<div className='cardTresVoluntario'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div>


</div>

<div className='containerDoacao'>

<div className='cardOneDoacao'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div >
<div className='cardDoisInscrever'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div >
<div className='cardTresVoluntario'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div>
<div className='cardTresVoluntario'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div>


</div>

<div className='containerDoacao'>

<div className='cardOneDoacao'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div >
<div className='cardDoisInscrever'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div >
<div className='cardTresVoluntario'>
<Card style={{ width: '18rem', height: "31rem" }}>
        <Card.Img variant="top" src={Paz} style={{maxWidth: "70%", marginLeft: "40px"}}  />
        <Card.Body>
            <Card.Title>Faça uma Doação</Card.Title>
            <Card.Text>
                A doação para Palavras de Paz é um passo em direção a um futuro melhor. Seu presente significa que podemos ajudar a moldar um mundo mais pacífico, uma pessoa de cada vez.
                <b>Você pode fazer parte da conquista pela paz.</b>
            </Card.Text>
            <Button variant="success">Download</Button>
        </Card.Body>
    </Card>
</div>
</div>
            <Footer />
        </Fragment>
    )
}

export default Downloads