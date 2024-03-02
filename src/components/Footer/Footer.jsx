import './Footer.css'
import logo from '../img/logo.png'

function Footer() {
    return (
        <>
            <div className="footer__block">
                <div className="contact__block">
                    <a href="tel:+380630000000" className='contact__phone'>380630000000</a>
                    <a href="mailto:aleksname04@gmail.com" className='contact__mail'>aleksname04@gmail.com</a>
                </div>
                <div className="footer__logotype">
                    <img src={logo} alt="logotype" className='footer__logo'/>
                    <strong className="footer__title">Survey site</strong>
                </div>
            </div>
        </>
    )
}

export default Footer