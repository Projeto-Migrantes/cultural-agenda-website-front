import * as S from "./styles.js";
import Hero from "../../components/Hero/index.jsx";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "@components/Footer/index.jsx";

function Home() {
  return (
    <>
      <S.Container>
        <Hero />
        <Navbar />

        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <p>ISSO É UM EXEMPLO DE TEXTO -- OS CARDS VÃO FICAR AQUI </p>
        <Footer />
      </S.Container>
    </>
  );
}

export default Home;
