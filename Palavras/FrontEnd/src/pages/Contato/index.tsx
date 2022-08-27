import React, { Fragment } from 'react';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';
import Header from '../../components/Header';



const ContatoPage: React.FC = () => {
  return (
    <Fragment>
    <Header/>
    <Contato/>
    <Footer/>
    </Fragment>
  )
}

export default ContatoPage;