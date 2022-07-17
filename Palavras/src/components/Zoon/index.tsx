import React, { Fragment } from 'react'
import "./styles.css"
import Imagem from "../../assets/images/Zoom.jpg"
import Blur from "../../assets/images/testeblur.png"

function Zoom() {
    return (
        <Fragment>

                <div className='headerZoom'></div>
            <div className='containerZoom'>


                <div className='textoEImagem'>
                    <div className='ajusteTextos'>
                        <h2>Participe do curso online pelo Zoom</h2>
                        <br></br>
                        <p>Todas as aulas são transmitidas pela plataforma ZOOM e têm uma hora de duração, sendo   exibidos os vídeos mais reflexivos e inspiradores do Programa de Educação para Paz. Basta clicar no link ao lado às 19h30.
                            Essa programação especial também será um bom treinamento a todos que queiram facilitar o Programa de Educação para Paz da Fundação Prem Rawat.
                        </p>
                    </div>
                    <div className='imagemZoom'>
                       <a href='https://zoom.us/s/293555970' > <img src={Imagem} alt="Logo do Zoom" style={{borderRadius: "10px"}} /></a>
                    </div>
                </div>



            </div>



        </Fragment>

    )
}

export default Zoom