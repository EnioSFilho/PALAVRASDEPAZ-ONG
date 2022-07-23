import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'
import Footer from '../Footer'
import Header from '../Header'
import "./styles.css"
import Logo from "../../assets/images/Logo.png"

function Programa() {
    return (
        <Fragment>
            <Header />
            <div className='headerSombraDoacao'></div>
            <div className='containerPrograma'>
                <div className='ajustePrograma'>
                    <div className='textoPrograma'>
                        <h3>Programa de Educação para a Paz</h3>
                        <p>Veja os vídeos de Prem Rawat e acompanhe os canais oficiais</p>
                    </div>

                    <div className='videoPrograma'>
                        <iframe width="80%" height="315" src="https://www.youtube.com/embed/MLEdfdBp7PA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                </div>

                <div className='containerEducacaoPrograma'>
                    <div className='textoEducacaoPrograma'>
                        <Card id="teste" style={{ width: '73vw', marginTop: "3%", textAlign: "justify" }}>
                            <Card.Body>
                                <Card.Title style={{color: "#00A97E", textAlign: "center", fontSize: 30}}><b>Programa de Educação para a Paz</b></Card.Title>
                                <Card.Text style={{color: "#00A97E"}}>
                                    <b>O Programa de Educação para a Paz da Fundação TPRF</b> consiste em dez aulas, cada uma com foco em um tema específico. Trata-se de um seminário interativo e personalizado não religioso e não sectário. O conteúdo de cada tema é extraído de palestras internacionais proferidas por <b>Prem Rawat</b>. Os temas são Paz, Apreciação, Força Interior, Consciência de si mesmo, Clareza, Entendimento, Dignidade, Escolha, Esperança e Contentamento. Mais informações: tprf.org<br></br><br></br>
                                    <b>Programa de Educação para a Paz ONLINE AO VIVO:</b><br></br><br></br>
                                    Para participar durante 45 minutos  a 1 hora do Programa online, que acontece todos os dias das 19h30 às 20h30, basta baixar o zoom e acessar: <b>https://zoom.us/s/293555970</b><br></br><br></br>
                                    Atualmente existem três programas independentes, e você pode escolher com qual começar. Eles não são sequenciais. Veja a seguir algumas características de cada programa:<br></br><br></br>
                                    <b>Programa de Educação para a Paz 1</b>: Cada sessão do DVD tem a duração de 1 hora. Inclui vídeos curtos e longos e cinco animações. Em cada sessão existem dois momentos dedicados à reflexão, que poderão ser utilizados conforme o critério de cada facilitador.<br></br><br></br>
                                    <b>Programa de Educação para a Paz 2:</b> Cada sessão tem a duração aproximada de 35 minutos, e cada DVD tem duas sessões. O Módulo 2 é compatível com audiências de todas as idades, inclusive as mais jovens. Esse programa é ideal para pessoas que têm dificuldade de se concentrar por um longo período de tempo, tais como enfermos, idosos e aqueles em centros de reabilitação. Existem dois momentos dedicados à reflexão em cada sessão. O Módulo 2 também inclui algumas entrevistas com Prem Rawat.<br></br>
                                    <b>Programa de Educação para a Paz 3:</b> Desenvolvido para proporcionar maior flexibilidade ao programa, o Módulo 3 consiste em 10 DVDs, cada um com um tema específico. O Módulo 3 contém os mesmos 10 temas dos Módulos 1 e 2. Os folhetos foram reduzidos a uma página por aula, e o material do facilitador foi mesclado com o manual.<br></br><br></br>
                                    O Programa de Educação para a Paz 3 permite que as aulas tenham duração flexível e sejam adequadas a cada situação. De acordo com as restrições de horário da audiência, uma sessão mais curta pode ser necessária, e as sessões podem ser apresentadas com metade de um DVD em uma semana e a outra metade na próxima, ou simplesmente selecionando a metade para um programa de 10 semanas. Também está disponível um segundo momento de reflexão no material de trabalho.<br></br><br></br>
                                    <b>Programa de Educação para a Paz Coleção:</b> Cada sessão tem 30 minutos e é composta por 6 vídeos curtos com muito conteúdo e informações importantes sobre os 10 temas. Indicado para jovens e escolas. O material impresso é simples e direto.<br></br><br></br>
                                   <b> Serviço de ajuda do Programa de Educação para a Paz: para qualquer dúvida sobre o programa, envie e-mail pep@tprf.org.</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>

                    <div className='botoesPrograma'>
                        <p>Programas PEP</p>
                        <Button variant="outline-success">Grupos Cívicos e Governamentais</Button>
                        <Button variant="outline-success">Centros Comunitários</Button>
                        <Button variant="outline-success">Estabelecimentos Prisionais</Button>
                        <Button variant="outline-success">Estabelecimentos de Ensino</Button>
                        <Button variant="outline-success">Grupos de Saúde e Bem Estar</Button>
                        <Button variant="outline-success">Centros de Idosos e Reformados</Button>
                        <Button variant="outline-success">Grupos Especiais</Button>

                        <div className='botoesProgramaDois'>
                            <p>Informação sobre o PEP</p>
                            <Button variant="outline-success">Grupos de Saúde e Bem Estar</Button>
                        <Button variant="outline-success">Centros de Idosos e Reformados</Button>
                        <Button variant="outline-success">Grupos de Saúde e Bem Estar</Button>

                        </div>

                            <div className='logoPrograma'>
                                <img src={Logo} alt="" />
                            </div>

                    </div>


                </div>


            </div>
            <Footer />
        </Fragment>
    )
}

export default Programa