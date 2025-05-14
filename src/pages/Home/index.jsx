import * as S from "./styles.js";
import Hero from "../../components/Hero/index.jsx";
import Navbar from "../../components/Navbar/index.jsx";

function Home() {
  return (
    <S.Container>
       <Hero />
      <Navbar />
    </S.Container>
  );
}

export default Home
