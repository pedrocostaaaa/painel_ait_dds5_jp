import React from 'react';
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import AbreviaAmbiente from '../tabelaAulas/AbreviaAmbiente';


function Home() {
  return (
    <>
      <Cabecalho/>
      <TabelaAulas/>
      <AbreviaAmbiente/>
    </>
  )
}

export default Home;