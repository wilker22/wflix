import './header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='logo' to='/'>WFLIX HOME</Link>
            <Link className='favoritos' to='/favoritos'>Meus Filmes Favoritos</Link>
        </header>
    )
}

export default Header;