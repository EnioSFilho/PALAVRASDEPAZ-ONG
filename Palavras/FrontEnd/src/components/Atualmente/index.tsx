import React, { Fragment } from 'react'
import "./styles.css"
import Footer from '../Footer'
import Header from '../Header'
import Figure from 'react-bootstrap/esm/Figure'
import Presidio from "../../assets/ImgAtualmente/presidio.png"
import Moradores from "../../assets/ImgAtualmente/moradores.png"
import Feminino from "../../assets/ImgAtualmente/presidiofeminino.png"
import Zoom from "../../assets/ImgAtualmente/imgzoom.png"

function Atualmente() {
    return (
        <Fragment>

            <div className='headerSombraDoacao'></div>
            <div className='containerAtualmente'>

                <div className='tituloAtualmente'>
                    <h3>O Programa Atualmente</h3>
                    <p>Conheça onde o Palavras de Paz está sendo atualmente executado no Brasil</p>
                </div>
                <div className='containerPresidio'>
                    <div className='textoAtualmente'>
                        <h5>O Programa de Educação para a Paz nas unidades prisionais</h5>
                        <p>Com apoio da FUNAP e da Ação pela Paz, começamos em 14 de dezembro o Programa de Educação para Paz nas Unidades Prisionais no Estado de São Paulo. A proposta é iniciarmos em 10 Unidades Prisionais após 1 de março de 2021.</p>
                    </div>

                    <div>
                        <div>

                            <Figure style={{ boxShadow: "10px 12px 3px #00A97E" }}>
                                <Figure.Image
                                    width={350}
                                    height={180}
                                    alt="171x180"
                                    src={Presidio}
                                />
                                <Figure.Caption>
                                    Tremembé 1 - Dezembro de 2020
                                </Figure.Caption>
                            </Figure>

                        </div>
                    </div>
                </div>

                <div className='barraAtualmente'></div>

                <div className='containerEducacao'>
                    <div>
                        <Figure style={{ boxShadow: "10px 12px 3px #00A97E" }}>
                            <Figure.Image
                                width={350}
                                height={180}
                                alt="171x180"
                                src={Moradores}
                            />
                            <Figure.Caption>
                                Programa de Educação
                            </Figure.Caption>
                        </Figure>

                    </div>

                    <div>
                        <div className='textoAtualmente'>
                            <h5>O Programa de Educação para moradores em situação de rua</h5>
                            <p>Com apoio da Bibli - Aspa e POP RUA, começamos em dezembro o Programa de Educação para Paz junto à população em situação de rua no centro de São Paulo. Todos os dias, 2500 pessoas retiram gratuitamente suas refeições.</p>
                        </div>
                    </div>
                </div>
                <div className='barraAtualmente'></div>


                <div className='containerPresidio'>
                    <div className='textoAtualmente'>
                        <h5>O Programa de Educação para a Paz na Penitenciária Feminina II de Tremembé</h5>
                        <p>Com apoio da FUNAP e da Ação pela Paz, foi realizado dos dias 11 a 21 de Janeiro de 2021 o Programa de Educação para Paz na Penitenciária Feminina II de Tremembé, em São Paulo.</p>
                    </div>

                    <div>
                        <Figure style={{ boxShadow: "10px 12px 3px #00A97E" }}>
                            <Figure.Image
                                width={350}
                                height={180}
                                alt="171x180"
                                src={Feminino}
                            />
                            <Figure.Caption>
                                Programa de Educação
                            </Figure.Caption>
                        </Figure>
                    </div>
                </div>

                <div className='barraAtualmente'></div>

                <div className='containerEducacao'>
                    <div>
                        <Figure style={{ boxShadow: "10px 12px 3px #00A97E" }}>
                            <Figure.Image
                                width={350}
                                height={180}
                                alt="171x180"
                                src={Zoom}
                            />
                            <Figure.Caption>
                                Zoom
                            </Figure.Caption>
                        </Figure>

                    </div>

                    <div>
                        <div className='textoAtualmente'>
                            <h5>ZOOM</h5>
                            <p>Cursos online pelo ZOOM.</p>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Atualmente