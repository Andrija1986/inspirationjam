import {SiJavascript, SiPhp} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {IoLogoAngular,IoLogoNodejs} from "react-icons/io";
import {GrReactjs} from "react-icons/gr";
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
                        <li>.NET</li>
                        <li>Node</li>
                        <li>Ruby</li>
                        <li>Java</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>Database</h3>
                    <ul>
                        <li>SQL Server</li>
                        <li>Postgre SQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Oracle</li>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>Mobility</h3>
                    <ul>
                        <li>iOS</li>
                        <li>React Native</li>
                        <li>Android</li>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>title</h3>
                    <ul>
                        <li>list</li>
                        <li>list</li>
                    </ul>
                </div>
                <div className="scroll-element">
                    <h3>title</h3>
                    <ul>
                        <li>list</li>
                        <li>list</li>
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