import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import Imagem from "../../assets/images/publico.jpg"
import Header from '../Header'
import Paginaprograma from '../Paginaprograma'
import Footer from "../../assets/images/testeblur.png"
import "./styles.css"

function Sobrenos() {
    return (
        <Fragment>
            <div className='containerGeral'>
                <div className='headerSobreNos'></div>

                <div className='containerSobreNos'>
                    <div>
                        <img style={{ width: "40vw", borderRadius: "10px" }} src={Imagem} alt="Imagem página Sobre nós" />
                    </div>

                    <div className='textoSobreNos'>
                        <h1>Sobre nós</h1>
                        <p> <b>A ONG Palavras de Paz</b> é uma entidade sem fins lucrativos, gerida por voluntários que fazem gratuitamente o Programa de Educação para a Paz, uma série inovadora de workshops baseados em vídeos que ajudam as pessoas a descobrirem sua própria força interior e paz pessoal.
                            Comece a oferecer o programa agora ou se comunique com um representante de suporte da TPRF clicando aqui para saber mais sobre como você pode usar este poderoso programa.</p>

                        <div>
                            <Button variant='outline-success' style={{ marginRight: "1rem", padding: "6px 18px" }} >Mais Sobre Nós </Button>
                            <Button variant='outline-success'>Entre em Contato</Button>
                        </div>
                    </div>
                </div>
                <div className='transicaoZoom'>

                </div>
            </div>
        </Fragment>
    )
}

export default Sobrenos