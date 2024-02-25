import logo from '../img/logo.png'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__logotype">
                <img src={logo} alt="logotype" className='header__logo'/>
                <strong className="header__title">Survey site</strong>
            </div>
            <nav className='header__nav'>
                <ul className='header__ul'>
                    <li className='header__li'><a href="#" className='header__a'>Тренуй мозок</a></li>
                    <li className='header__li'><a href="#" className='header__a'>Рефлексія</a></li>
                    <li className='header__li'><a href="#" className='header__a'>Детальніше</a></li>
                    <li className='header__li'><a href="#" className='header__a'><span className='header__span'>Статистика студента</span></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header