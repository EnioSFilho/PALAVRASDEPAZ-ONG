import React, { Fragment } from 'react'
import "./styles.css"

function Paz() {
  return (
    <Fragment>
        <div className='headerPaz'></div>
        <div className='containerPaz'>

            <h1>E lembre-se: a paz começa com você!</h1>

            <div className='videoPaz'>
                <iframe style={{borderRadius: "10px"}} width="560" height="315" src="https://www.youtube.com/embed/n2eOK8q2M6w" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

            </div>


        </div>

    </Fragment>
  )
}

export default Paz