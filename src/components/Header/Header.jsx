import './Header.css'
import headerImg from '../../assets/headerImg.png';

export function Header(){
    return (
        <header className='header-das-paginas'>
            <img src={headerImg} alt='Imagens do header contendo as respectivas logos do "vivências do mundo" e "Centro de serviços ao migrante."'/>
        </header>
    );
}

