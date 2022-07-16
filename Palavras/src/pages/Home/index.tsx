import React, { Fragment } from 'react'
import Header from '../../components/Header'
import Paginaprograma from '../../components/Paginaprograma'
import Sobrenos from '../../components/Sobrenos'
import Zoom from '../../components/Zoon'

function Home() {
  return (
    <Fragment>
        <Header/>
        <Paginaprograma/>
        <Sobrenos/>
        <Zoom/>
    </Fragment>
  )
}

export default Home