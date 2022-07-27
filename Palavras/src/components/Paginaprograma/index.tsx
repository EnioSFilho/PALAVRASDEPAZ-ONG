import React, { Fragment } from 'react'
import Header from '../Header'
import "./styles.css"
import Publico from "../../assets/images/publico.jpg"
import { Button } from 'react-bootstrap'

function Paginaprograma(): JSX.Element {
    return (
        <Fragment>
            
            <main className='corpoPaginaPrograma'>
                <div className='backGround'>
                    <div className='textoPrograma'>
                        <h1>Programa de Educação para a Paz</h1>
                           <p> <b>O Programa de Educação para a Paz</b> é uma proposta educacional transformadora. Composto por uma série de vídeos, o Programa permite que os participantes descubram seus próprios recursos internos, alcançando, no processo, um estado de paz. O Programa foi desenvolvido pela ,<b>Fundação The Prem Rawat Foundation (TPRF)</b> e conta com a ajuda de voluntários comprometidos.</p>
                           <div>
                           <Button variant='outline-light' style={{marginRight: 30}}>Receba Informações</Button>
                           <Button variant='outline-light' >Participe dos Cursos</Button>
                           </div>
                    </div>
                        
                    <div >
                    <iframe style={{ width: "40vw", height: "40vh" ,borderRadius: "1%", marginRight: "80px"}}
                        src="https://www.youtube.com/embed/X3cphCj9YVc?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.palavrasdepaz.org&playsinline=1&enablejsapi=1&widgetid=1"
                        ></iframe>
                         </div>
                </div>
            </main>



        </Fragment>
    )
}

export default Paginaprograma