//import logo from "../assets/horizontal_on_white_by_logaster__7_-removebg-preview.png";
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";

import {AiFillLinkedin} from "react-icons/ai";
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <footer className='footer'>
      <img src="./assets/horizontal_on_white_by_logaster__7_-removebg-preview.png" alt="logo" />
      <IconContext.Provider value={{className: "footer-icons"}}>
      <FaFacebookSquare/>
      <FaInstagramSquare/>
      <AiFillLinkedin/>
      </IconContext.Provider>
    </footer>
  )
}

export default Footer