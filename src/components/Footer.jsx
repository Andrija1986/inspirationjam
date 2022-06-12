//import logo from "../assets/horizontal_on_white_by_logaster__7_-removebg-preview.png";
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";

import {AiFillLinkedin} from "react-icons/ai";
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <footer className='footer'>
      <img src="./assets/logo.png" alt="logo" />
      <div className="div-icons">
      <IconContext.Provider value={{className: "footer-icons"}}>
      <FaFacebookSquare/>
      <FaInstagramSquare/>
      <AiFillLinkedin/>
      </IconContext.Provider>
      </div>
    </footer>
  )
}

export default Footer