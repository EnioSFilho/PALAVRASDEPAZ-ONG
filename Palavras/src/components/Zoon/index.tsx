import React, { Fragment } from 'react'
import "./styles.css"
import Imagem from "../../assets/images/Zoom.jpg"
import Blur from "../../assets/images/testeblur.png"
import { Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Zoom() {
    return (
        <Fragment>

            <div className='headerZoom'></div>
            <div className='containerZoom'>
                <div >
                    <Figure >

                        <Figure.Image style={{ borderRadius: "10px", boxShadow: "2px 4px 6px black" }}
                            width={400}
                            height={100}
                            alt="Imagem Zomm"
                            src={Imagem}
                        /></Figure>
                </div>
                <div className=' containerTextoZoon'>
                    <h1>Participe do curso online pelo ZOOM</h1>
                    <p> Todas as aulas são transmitidas pela plataforma<a href="https://zoom.us/s/293555970"> ZOOM</a> e têm uma hora de duração, sendo   exibidos os vídeos mais reflexivos e inspiradores do Programa de Educação para Paz. Basta acessar às 19h30 - <a href="https://zoom.us/s/293555970"> ZOOM </a>  Essa programação especial também será um bom treinamento a todos que queiram facilitar o Programa de Educação para Paz da Fundação Prem Rawat.</p>
                </div>

            </div>



        </Fragment>

    )
}

export default Zoom