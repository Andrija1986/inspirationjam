import {SiJavascript, SiPhp, SiMongodb, SiOracle} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {IoLogoAngular,IoLogoNodejs} from "react-icons/io";
import {GrReactjs, GrMysql, GrApple} from "react-icons/gr";
import {DiRuby, DiMsqlServer, DiPostgresql, DiAndroid} from "react-icons/di";
import {TbBrandReactNative} from "react-icons/tb";
import {RiVuejsFill} from "react-icons/ri"
import { IconContext } from "react-icons";

const Technology = () => {
  return (
    <div id='technology' className="biggest">
        <div className="main tech">
            <div className="details">
                <h1>Technology Stack</h1>
            </div>
            <div className="horizontal-scroll">
                <div className="scroll-element">
                    <h3>Backend</h3>
                    <ul>
                        <IconContext.Provider value={{className: "icons"}}>

                        <li><IoLogoNodejs/></li>
                        <li><DiRuby/></li>
                        <li><FaJava/></li>
                        <li><SiPhp/></li>
                        </IconContext.Provider>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>Frontend</h3>
                    <ul>
                        <IconContext.Provider value={{className: "icons"}}>

                        <li><SiJavascript/></li>
                        <li><GrReactjs/></li>
                        <li><RiVuejsFill/></li>
                        <li><IoLogoAngular/></li>
                        </IconContext.Provider>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>Database</h3>
                    <ul>
                        <IconContext.Provider value={{className: "icons"}}>

                        <li><DiMsqlServer/></li>
                        <li><DiPostgresql/></li>
                        <li><GrMysql/></li>
                        <li><SiMongodb/></li>
                        <li><SiOracle/></li>
                        </IconContext.Provider>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>Mobility</h3>
                    <ul>
                        <IconContext.Provider value={{className: "icons"}}>

                        <li><GrApple/></li>
                        <li><TbBrandReactNative/></li>
                        <li><DiAndroid/></li>
                        </IconContext.Provider>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>Marketing Expertise</h3>
                    <ul>
                        <li>SEO</li>
                        <li>Market Research</li>
                        <li>Strategy Planning</li>
                        <li>Analytics, Social Media</li>
                        <li>Media, E-Mail Marketing</li>
                        <li>Video Marketing</li>
                        <li>PR </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Technology

/* <section id='technology' className='technology'>
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
    </section> */
