import React, { Fragment } from 'react'
import Doacao from '../../components/Doacao'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Paginaprograma from '../../components/Paginaprograma'
import Paz from '../../components/Paz'
import Sobrenos from '../../components/Sobrenos'
import Zoom from '../../components/Zoon'

function Home() {
  return (
    <Fragment>
        <Header/>
        <Paginaprograma/>
        <Sobrenos/>
        <Zoom/>
        <Doacao/>
        <Paz/>
        <Footer/>
    </Fragment>
  )
}

export default Home