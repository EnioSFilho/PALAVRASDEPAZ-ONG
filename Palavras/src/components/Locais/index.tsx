import React, { Fragment } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Presos from "../../assets/programa/presos.png"
import SaoPaulo from "../../assets/programa/saopaulo.png"
import Receita from "../../assets/programa/receita.png"
import Fundo from "../../assets/programa/fundosocial.png"
import Senac from "../../assets/programa/senac.png"
import Puc from "../../assets/programa/pucsp.png"
import UniPaz from "../../assets/programa/unipaz.png"
import EcoPaz from "../../assets/programa/ecopaz.png"
import Logo from "../../assets/images/Logo.png"

import Header from '../Header'
import "./styles.css"
import Footer from '../Footer'

function Locais() {
    return (
        <Fragment>
            <Header />
            <div className='headerSombraDoacao'></div>
            <div className='containerPrincipalLocais'>
                <Container fluid>

                    <div className='containerTextosLocais'>
                        <h1>Locais</h1>
                        <p>O Programa de Educação para Paz é uma proposta educacional transformadora. Composto por uma série de vídeos, o Programa permite que os participantes descubram seus próprios recursos internos, alcançando, no processo, um estado de paz. O Programa foi desenvolvido pela Fundação The Prem Rawat Foundation (TPRF) e conta com a ajuda de voluntários comprometidos.</p>
                    </div>


                    <div className='containerCardsLocais'>
                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577" }}>
                                <Card.Img variant="top" src={Presos} style={{ borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Title>Secretaria de Administração Penitenciária e Ressocialização</Card.Title>
                                    <Card.Text>
                                        (SEAP/BA), Salvador, BA
                                        Presídio de Salvador (SEAP/BA), Salvador, BA.
                                        Cadeia Pública de Salvador, Salvador, BA.
                                        Presídio Central do Estado do Paraná (PCE), Piraquara, PR.
                                        Penitenciária Feminina do Paraná (PFP), Piraquara, PR
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577", paddingBottom: 23 }}>
                                <Card.Img variant="top" src={SaoPaulo} style={{ borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Title>FUNAP e Penitenciárias de São Paulo, nos bairros da capital e cidades no estado</Card.Title>
                                    <Card.Text>
                                        Capital: São Miguel Paulista, Santana, Pinheiros, Parelheiros e Belém
                                        Tremembé
                                        Franco da Rocha
                                        Sorocaba
                                        Atibaia
                                        Votorantim
                                        Pirajuí
                                        Campinas
                                        Nova Independência
                                        Serra Azul
                                        Piracicaba
                                    </Card.Text>

                                </Card.Body>
                            </Card>


                        </div>

                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577", paddingBottom: 47 }}>
                                <Card.Img variant="top" src={Receita} style={{ borderRadius: "50%", }} />
                                <Card.Body>
                                    <Card.Title>Receita Federal e ESAF do Ministério da Fazenda</Card.Title>
                                    <Card.Text>
                                        São Paulo Secretaria da Justiça e Cidadania do Estado de São Paulo
                                        Centros de Integração e Cidadania (CIC) da Secretaria de Justiça de São Paulo
                                        Tribunal De Justiça do Estado de São Paulo e do Paraná
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>

                    <div className='containerCardsLocais'>
                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577" }}>
                                <Card.Img variant="top" src={Fundo} style={{ borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Title>Fundo Social</Card.Title>
                                    <Card.Text>
                                        Fundo Social de Solidariedade do Estado de São Paulo, São Paulo, SP.
                                        Secretaria Municipal de Cultura do Rio de Janeiro, Marica, RJ
                                        Prefeitura Municipal de Itapecerica da Serra, SP
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577", paddingBottom: 120 }}>
                                <Card.Img variant="top" src={Senac} style={{ borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Title>SENAC</Card.Title>
                                    <Card.Text>
                                        São Paulo, SP e Fortaleza, CE.
                                    </Card.Text>

                                </Card.Body>
                            </Card>


                        </div>

                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577", paddingBottom: 95 }}>
                                <Card.Img variant="top" src={Puc} style={{ borderRadius: "50%", }} />
                                <Card.Body>
                                    <Card.Title>PUC-SP</Card.Title>
                                    <Card.Text>
                                        São Paulo, SP.
                                        Faculdade de São Bento, São Paulo, SP e Salvador, BA.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>

                    <div className='containerCardsLocaisTres'>
                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577", paddingBottom: 171 }}>
                                <Card.Img variant="top" src={UniPaz} style={{ borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Title>UNIPAZ</Card.Title>
                                    <Card.Text>
                                        São Paulo, SP.
                                        UMAPAZ, São Paulo, SP.
                                        ConPAZ, PR.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577", paddingBottom: 75 }}>
                                <Card.Img variant="top" src={EcoPaz} style={{ borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Title>Ecos da Paz</Card.Title>
                                    <Card.Text>
                                        Espaço de Convivência do Idoso do Parque da Água Branca, São Paulo, SP.
                                        CRECI Centro de Referência do Idoso, São Paulo, SP.
                                        Sênior Goethe Residencial Geriátrico, Porto Alegre, RS.
                                    </Card.Text>

                                </Card.Body>
                            </Card>


                        </div>

                        <div>
                            <Card style={{ width: '18rem', boxShadow: "11px 12px 5px #05050577" }}>
                                <Card.Img variant="top" src={Logo} style={{ borderRadius: "50%" }} />
                            </Card>
                        </div>
                    </div>

                    <div className='textoFinalLocal'>

                        <div className='textoUmLocal'>
                            <p>
                                <b>Prefeitura Municipal de Itapecirica da Serra,</b> São Paulo, SP.<br></br>
                                <b>Colégio Estadual Euricles de Matos,</b> Salvador, BA.<br></br>
                                <b> C. Lafaiete Coutinho,</b> Salvador, BA.<br></br>
                                <b>Casa de Oração Pai Joaquim,</b> Salvador, BA.<br></br>
                                <b>Associação de Moradores do Jardim Brasilândia,</b> Sorocaba, SP.<br></br>
                                <b>Associação Beneficente Antônio José Guarda,</b> Sorocaba, SP.<br></br>
                                <b>SEFRAS Serviço Franciscano de Solidariedade,</b> Curitiba, PR.<br></br>
                                <b>Centro de Recuperação Humano Renascer,</b> São Sebastião, SP.<br></br>
                                <b>COPIHEL,</b> Caxias do Sul, RS.<br></br>
                                <b>RASK 7,</b> Goiânia, GO.<br></br>
                                <b>Pilche Estilo em Couro,</b> São Gabriel, RS.<br></br>
                                <b>Guaimbê </b>- Ponto de Cultura, Pirenópolis, GO.<br></br>
                                <b>Lar Fraciscano Santa Isabel,</b> Salvador, BA​.<br></br>
                                <b>Instituição Ética e Valores Humanos Estrela Da Paz,</b> Salvador, BA.<br></br>
                                <b>Conselho Regional de Contabilidade (CRC),</b> Salvador, BA.<br></br>
                                <b>Fundação Cidade Mãe,</b> Salvador, BA.<br></br>
                                <b>Casa Arte Vida,</b> Guaratiba, RJ.<br></br>
                                <b>ONG da Secretaria Social</b> - Centro Maia, São Paulo, SP.<br></br>
                                <b>MG – Comércio Em Couro Ltda,</b> Porto Alegre, RS.<br></br>
                                <b>Margaret Harrison de Santis Dominguez</b> - ME, São Paulo, SP.<br></br>
                                <b>Carlos Roberto Conceição Instalações Especiais,</b> Atibaia, SP.<br></br>
                                <b>Polícia Militar,</b> Pirenópolis, GO.<br></br>
                                <b>Semente Editorial,</b> Rio de Janeiro, RJ.<br></br>
                                <b>ACOMI </b>- Associação Comunitária Micael, São Paulo, SP.<br></br>
                                <b>MPB Marketing e Consultoria Ltda,</b> Fortaleza, CE.<br></br>
                                <b>Z. R. C. dos Santos-me,</b> São Paulo, SP.<br></br>
                                <b>José Mário Barbosa, </b>São Paulo, SP.<br></br>
                                <b>Secretaria de Saúde de Pirenópolis,</b> GO.<br></br>
                                <b>Casa da Vovó Gigi,</b> São Paulo, SP.<br></br>
                                <b>Colégio Estadual Senhor do Bonfim,</b> Pirenópolis, GO.<br></br>
                                <b>SAICA Santana,</b> São Paulo, SP.<br></br>
                                <b>UBS - Lago Oeste,</b> Brasília, DF.<br></br>
                                <b>Bom Jesus,</b> Curitiba, PR.<br></br>
                                <b>Tribunal De Justiça Do Estado Do Paraná,</b> Curitiba, PR.<br></br>
                                <b>ESAF - Escola de Administração Fazendária,</b> São Paulo, SP.<br></br>
                                <b>Penitenciarias de Campinas</b> - Mairinque, Serra Azul e Piracicaba<br></br>
                            </p>
                        </div>

                        <div className='textoDoisLocal'>
                            <b> CEJUSC - Centro Judiciário de Soluções de Conflitos,</b> Curitiba, PR.<br></br>
                            <b>Unibes Cultural,</b> São Paulo, SP.<br></br>
                            <b>Fórum Mundial da Paz,</b> Florianópolis, SC.<br></br>
                            <b>Clínicas de Repouso,</b> Santo Amaro da Imperatriz, SC.<br></br>
                            <b>Lar da Terceira Idade,</b> São Francisco de Assis, SC.<br></br>
                            <b>Movimento Eu Sou a Paz,</b> Santo Amaro da Imperatriz, SC.<br></br>
                            <b>Tecnopleno Serviços Técnicos,</b> São Paulo, SP.<br></br>
                            <b>Grupo Comolatti,</b> São Paulo, SP.<br></br>
                            <b>Lar Vicentino,</b> São Sebastião, SP.<br></br>
                            <b>Charqueada Boa Vista,</b> Pelotas, RS.<br></br>
                            <b>Capdever Centro Afro de Promoção e Defesa da Vida,</b> Salvador, BA.<br></br>
                            <b>Centro Espírita União, Amor e Luz,</b> Salvador, BA.<br></br>
                            <b>Conexão Consultoria Imobiliária,</b> São Paulo, SP.<br></br>
                            <b>Instituto Abaetê,</b> São Borja, RS.<br></br>
                            <b>Clínica de Recuperação Luz do Caminho,</b> Caraguatatuba, SP.<br></br>
                            <b>Instituto Laban,</b> São Paulo/SP e Pirenópolis, GO.<br></br>
                            <b>Prefeitura Municipal de Rio Claro,</b> Rio Claro, SP.<br></br>
                            <b>Werbus Marketing Integrado S/C Ltda,</b> Marília, SP.<br></br>
                            <b>Casa de Maria, Embaixadora da Paz,</b> São Paulo, SP.<br></br>
                            <b>Virtus Trading C. e Gestão Empresarial LTDA,</b> Recife, PE.<br></br>
                            <b>KLD Consulting,</b> São Paulo, SP e Curitiba, PR.<br></br>
                            <b>Colégio Estadual Henriqueta M. Catharino,</b> Salvador. BA.<br></br>
                            <b>Escola Estadual Dois de Julho,</b> Salvador, BA.<br></br>
                            <b>Tardo Ling - Centro de Desenvolvimento,</b> São Paulo, SP.<br></br>
                            <b>Clínica de Hemodiálise Santa Paula,</b> Anápolis, GO.<br></br>
                            <b>Toca de Assis,</b> Curitiba, PR.<br></br>
                            <b>Comunidade Educacional de Pirenópolis,</b> Pirenópolis, GO.<br></br>
                            <b>Casa de Passagem Carlos Miguel Santos,</b> Caxias do Sul, RS.<br></br>
                            <b>UBS - Lago Oeste,</b> Brasilia, DF.<br></br>
                            <b>Rosemary Dream,</b>Florianópolis, SC.<br></br>
                            <b>Potinho de Jacó,</b> Natal, RN.<br></br>
                            <b>Centro POP,</b> Curitiba, PR.<br></br>
                            <b>Colégio Estadual Senhor do Bonfim,</b> Salvador, BA.<br></br>
                        </div>
                    </div>

                </Container>
            </div>


            <Footer />
        </Fragment >
    )
}

export default Locais