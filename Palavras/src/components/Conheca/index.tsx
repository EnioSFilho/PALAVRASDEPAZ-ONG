import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import "./styles.css"

function Conheca() {
  return (
    < Fragment>
    <div className='headerSombraDoacao'></div>
    <div className='containerConheca'>

        <div className='containerConhecaTexto'>
            <h1>Demonstração</h1>
            <p>Conheça o Programa de Educação para a Paz</p>
        </div>

        <div className='containerConhecaVideo'>
            <p>Este vídeo demonstra o conteúdo das aula do Programa.</p>
        <iframe width="70%" height="356vh" src="https://www.youtube.com/embed/9gJk4-njcbY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

        </div>


    </div>
    
    
    </Fragment>
  )
}

export default Conheca