import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return <section className="container mainContainer">

    <Head title="Fotos" descriptions="Bem vindo ao InstaDogs"/>
    <Feed />
  </section>;
};

export default Home;
