import {SiJavascript, SiPhp} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {IoLogoAngular,IoLogoNodejs} from "react-icons/io";
import {GrReactjs} from "react-icons/gr";
import { IconContext } from "react-icons";

const Technology = () => {
  return (
    <section id='technology' className='technology'>
    <IconContext.Provider value={{className: "top-icons"}}>
      <SiJavascript/>
      <IoLogoAngular/>
      <GrReactjs/>
    </IconContext.Provider>
    <IconContext.Provider value={{className: "bottom-icons"}}>
      <FaJava/>
      <IoLogoNodejs/>
      <SiPhp/>
    </IconContext.Provider>
    </section>
  )
}

export default Technology