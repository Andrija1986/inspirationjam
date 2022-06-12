import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <footer className='footer'>
      <img src="./assets/logo.png" alt="logo" />
      <div className="div-icons">
      <IconContext.Provider value={{className: "footer-icons"}}>
      <FaFacebookSquare/>
      <FaInstagramSquare/>
      <BsLinkedin/>
      </IconContext.Provider>
      </div>
    </footer>
  )
}

export default Footer