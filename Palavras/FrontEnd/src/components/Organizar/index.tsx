import React, { Fragment } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Footer from '../Footer'
import Header from '../Header'

import "./styles.css"

export default function Organizar() {
    return (
        <Fragment>
                       <div className='headerSombraDoacao'></div>
            <main className='containerPrincipalOrganizar'>
                <Container >
                    <div className='containerOrganizar'>
                        <div className='textosOrganizar'>
                            <h3>Como Organizar o Programa</h3>
                            <h5>Implemente o Programa na sua região</h5>
                        </div>
                        <div className=' textosDoisOrganizar'>
                            <p>Os cursos do Programa de Educação para a Paz podem ser oferecidos tanto por indivíduos quanto por organizações, desde que estejam  licenciados pela Fundação Prem Rawat/TPRF (The Prem Rawat Foundation). Essa licença é gratuita e pode ser obtida por meio de inscrição na TPRF e, dessa forma, estarão aptos a oferecerem os cursos do programa a grupos interessados.
                                Para conhecer melhor o Programa de Educação para a Paz, visite as páginas de Depoimentos e Vídeos de Impacto, Pesquisas e o conteúdo do curso. Clique aqui para obter respostas às perguntas mais frequentes.
                                Abaixo, mais conteúdos do Programa.​</p>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className='containerDoisOrganizar'>
                        <div>

                            <Card style={{ width: '15rem', backgroundColor: "#00A97E", color: "#fff", height: "15rem" }}>

                                <Card.Body>
                                    <Card.Title>Onde ocorre</Card.Title>
                                    <Card.Text>
                                        Saiba onde já ocorre o Programa
                                    </Card.Text>

                                </Card.Body>
                                <Button variant="outline-light">Conheça os Locais</Button>
                            </Card>
                        </div>

                        <div>
                            <Card style={{ width: '15rem', backgroundColor: "#00A97E", color: "#fff", height: "15rem" }}>

                                <Card.Body>
                                    <Card.Title>Licença</Card.Title>
                                    <Card.Text>
                                        Receba a licença da TPRF para começar o seu Programa de Educação para Paz
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="outline-light" >Liçenca</Button>
                            </Card>


                        </div>
                        <div>
                            <Card style={{ width: '15rem', backgroundColor: "#00A97E", color: "#fff", height: "15rem" }}>

                                <Card.Body>
                                    <Card.Title>Materiais</Card.Title>
                                    <Card.Text>
                                        Baixe os materiais necessários para implementar o Programa
                                    </Card.Text>


                                </Card.Body>
                                <Button variant="outline-light">Baixe os Materiais</Button>
                            </Card>


                        </div>
                        <div>
                            <Card style={{ width: '15rem', backgroundColor: "#00A97E", color: "#fff", height: "15rem" }}>

                                <Card.Body>
                                    <Card.Title>Artigos</Card.Title>
                                    <Card.Text>
                                        Leia sobre o Programa
                                    </Card.Text>

                                </Card.Body>
                                <Button variant="outline-light">Leia os Artigos</Button>
                            </Card>
                        </div>
                    </div>

                    <div>

                         <div className='textoTresOrganizar'>
                            <p>
                            O contrato de licença autoriza a organização a acessar o material e a conduzir os cursos do Programa de Educação para a Paz dentro de sua organização. Ele também autoriza o indivíduo a acessá-lo e a levar os cursos a organizações e grupos interessados. Os contratos entre licenciados e outras organizações são estabelecidos independentemente desta licença, desde que os licenciados não cobrem taxas dos participantes pela participação no Programa de Educação para a Paz.
                            Você pode baixar ou visualizar o Contrato de Licença aqui.
                            Quando você estiver pronto para se inscrever para uma licença, clique abaixo. Sua inscrição será analisada e você receberá uma solicitação de mais informações sobre sua inscrição ou um aviso de aprovação com as próximas etapas. Aguarde até duas semanas para aprovação.
                            Caso tenha alguma dúvida, entre em contato com o Palavras de Paz.
                            </p>

                         </div>

                        <div className='buttonsOrganizar'>

                            <div>
                                <Button variant='outline-success'>Inscreva-se</Button>
                            </div>

                            <div>

                                <Button variant='outline-success'>Entre em contato</Button>
                            </div>




                        </div>



                    </div>

                    
                </Container>
                
            </main>
        </Fragment>
    )
}
