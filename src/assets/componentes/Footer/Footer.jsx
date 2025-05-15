import "./Footer.css";
function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container">
                <img src="./imagens/globo.svg" alt="Logotipo do globo" className="globo_container"/>
                <img src="./imagens/csm.svg" alt="Imgagem da logo" className="csm_container"/>
            </div>
            <p className="rodape_container">© 2025 Agenda Cultural. Todos direitos reservados</p>
        </footer>     
    )

}
export default Footer;