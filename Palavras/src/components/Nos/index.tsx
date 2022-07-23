import React, { Fragment } from 'react'
import "./styles.css"
import Imagem from "../../assets/images/textosobrenos.png"
import Header from '../Header'
import Footer from '../Footer'
import { Button, Card } from 'react-bootstrap'
import Logo from "../../assets/images/Logo.png"

function Nos() {
    return (
        <Fragment>
            
            <div className='headerSombraDoacao'></div>
            <div className='containerGeralNos'>

                <div className='containerAjusteNos'>
                    <div className='containerTextoNos'>
                        <h3><b>Sobre Nós</b></h3>
                        <p><b>A Sociedade de Apoio à Paz </b>é uma entidade sem fins lucrativos, gerida apenas por voluntários. Baseia-se nos valores essenciais, globalmente partilhados, de Dignidade, Paz e Prosperidade, inspirados na mensagem de <b>Prem Rawat</b>, que partilha a sua convicção de que a paz é uma necessidade humana fundamental.
                            Apoia a difusão do <b>Programa de Educação para Paz</b>, da Fundação TPRF, uma proposta educacional que propicia aos participantes descobrir e lidar com seus próprios recursos internos e a possibilidade de paz pessoal. O Programa é um projeto gratuito, realizado com apoio de voluntários. O programa pode ser realizado e assistido em diversas instituições, associações, escolas, clínicas e prisões.
                            Para mais informações escreva para <b>programaeducacaoparapaz@gmail.com</b></p>

                    </div>

                    <div className='imagemNos'>
                        <img src={Imagem} alt="Imagem sobre nos" />
                    </div>
                </div>

                <div className='containerCardNos'>
                <div className='textosCards'>
                    <Card style={{ width: '35rem', height: "57.1rem", boxShadow: "10px 10px 5px rgb(71, 71, 71)"}}>
                        <Card.Img variant="top" src={Logo} style={{ maxWidth: "30%", marginLeft: 50 }} />
                        <Card.Body>
                            <Card.Title style={{textAlign: "justify" , color: "#00A97E"}}><h3><b>Criação</b></h3></Card.Title>
                            <Card.Text style={{textAlign: "justify" , color: "#00A97E"}}><p>
                            Palavras de Paz e o Programa de Educação para a Paz foram criados pelo Embaixador da Paz, <b>Prem Rawat</b>, que desenvolve um trabalho contínuo pelo mundo, por meio da sua fundação, TPRF - www.tprf.org. Ele transmite sua mensagem em diversas universidades americanas e europeias, centros de cultura e incontáveis eventos. Até hoje,<b> Prem Rawat </b>já falou para mais de 10 milhões de pessoas e sua mensagem agora está disponível em mais de 70 idiomas e 80 países, seja através da TV, vídeos, áudios ou impressos.
                            Nascido na Índia, com apenas oito anos <b>Prem Rawat</b> começou a apresentar a sua mensagem de paz no país. Aos 13, foi convidado a falar em Londres e Los Angeles. Desde então, cerca de 12 milhões de pessoas, em mais de 250 cidades em 50 países, já o ouviram falar pessoalmente. No Brasil, suas palestras são apresentadas no premiado programa Palavras de Paz, que é exibido em emissoras de TV.<br></br>
                            <b>Saiba mais sobre o Embaixador da Paz: www.premrawat.com</b></p>
                            </Card.Text>
                         
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '35rem', boxShadow: "10px 10px 5px rgb(71, 71, 71)" }} >
                        <Card.Img variant="top" src={Logo} style={{ maxWidth: "30%", marginLeft: 50 }} />
                        <Card.Body>
                            <Card.Title style={{color: "#00A97E"}}><h3>Eventos</h3></Card.Title>
                            <Card.Text style={{color: "#00A97E"}}>
                            <p>A Sociedade também realiza no Brasil eventos internacionais em parceria com a <b>Words of Peace Global - WOPG</b>, promovendo palestras sobre a paz em diversos pontos do país. Os mais recentes aconteceram em Florianópolis (setembro de 2010, no Costão do Santinho); São Paulo (abril de 2012, no Teatro Bradesco), Salvador (abril de 2013, no Fiesta Convention Center) e novamente em São Paulo, com apoio da Câmara Municipal, o “Fórum de Sustentabilidade e Cultura da Paz” (abril de 2013).
                            Em 2011, a <b>Sociedade de Apoio à Paz</b> promoveu o <b>Dia da Paz</b> com manifestações artísticas na Casa das Rosas e, este ano, foi convidada pela Secretaria de Direitos Humanos de São Paulo a desenvolver atividades artísticas pelo seu direito à paz em Praça, em São Paulo. Em 2013, em conjunto com o projeto <b>Paulistanos pela Paz</b>, realizamos o Gol pela Paz no Memorial da América Latina.
                            Participamos por três anos consecutivos da “Mostra FIESP/CIESP de Responsabilidade Socioambiental”, do “Festival Mundial da Paz”, promovido pela <b>UNIPAZ</b>, no Parque do Ibirapuera (setembro de 2012), da Feira Nacional das ONGs, e também do encontro “Expandindo A Paz no Cotidiano”, no Memorial da América Latina (setembro de 2013).
                            Todos os eventos são gratuitos e o objetivo do programa é ajudar os participantes a descobrirem seus próprios recursos internos. Os workshops personalizados e interativos não são religiosos nem sectários.</p>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
                </div>

                <div className='containerFinalNos'>
                    <div>
                        <h3>Programas de Televisão</h3>
                        <p style={{margin: 0}}>Programas de Televisão Atualmente os programas de TV não estão sendo exibidos no Brasil.</p>
                    </div>
                </div>

            </div>

            
        </Fragment>
    )
}

export default Nos