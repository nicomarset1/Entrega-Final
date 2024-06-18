import logo from '../../assets/images/logo.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div><img src={logo} alt="" /></div>
            <p>Conde Style | Todos los derechos reservados</p>
        </div>
    )
}

export default Footer 