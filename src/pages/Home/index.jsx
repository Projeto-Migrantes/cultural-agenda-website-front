import * as S from "./styles.js";
import Hero from "../../components/Hero/index.jsx";
import Navbar from "../../components/Navbar/index.jsx";

function Home() {
  return (
    <S.Container>
       <Hero />
      <Navbar />
      <div style={{ height: "100vh", background: "white"}}></div>
    </S.Container>
  );
}

export default Home
