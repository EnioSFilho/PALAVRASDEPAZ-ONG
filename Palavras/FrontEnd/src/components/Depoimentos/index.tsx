import React, { Fragment } from 'react'
import "./styles.css"
import Footer from '../Footer'
import Header from '../Header'
import Figure from 'react-bootstrap/esm/Figure'


function Depoimentos() {
    return (
        <Fragment>

            <div className='headerSombraDoacao'></div>
            <div className='containerDepoimento'>
                <div className='tituloDepoimento'>
                    <h3>Depoimentos</h3>
                    <p>O que as pessoas falam sobre o Programa de Educação para a Paz</p>
                </div>
                <div className='containerFacilitadores'>
                    <div className='textoFacilitadores'>
                        <h1>Facilitadores</h1>
                    </div>
                    <div>
                        <div>
                            <iframe style={{ height: "300px", width: "350px" }}
                                src="https://www.youtube.com/embed/Mo61LOc8PG8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>"

                        </div>
                    </div>
                </div>

                <div className='barraDepoimento'></div>

                <div className='containerFacilitadores'>
                    <div>
                        <iframe style={{ height: "300px", width: "350px" }}
                            width="560" height="315" src="https://www.youtube.com/embed/cDzUyUzbgCE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                    </div>

                    <div>
                        <div className='textoFacilitadores'>
                            <h1>Participantes</h1>
                        </div>
                    </div>
                </div>
                <div className='barraDepoimento'></div>


                <div className='containerPresidio'>
                    <div className='textoFacilitadores'>
                        <h1>Pedagoga</h1>

                    </div>

                    <div>
                        <iframe style={{ height: "300px", width: "350px" }}
                            width="560" height="315" src="https://www.youtube.com/embed/9P-7aoc4d5k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                </div>

                <div className='barraDepoimento'></div>

                <div className='containerEducacao'>
                    <div>
                        <iframe style={{ height: "300px", width: "350px" }}
                            src="https://video.wixstatic.com/video/6a67de_e7be1a999a83476eb810009839d12bc0/480p/mp4/file.mp4"
                        ></iframe>
                    </div>

                    <div>
                        <div className='textoFacilitadores'>
                            <h1>Participante</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Depoimentos