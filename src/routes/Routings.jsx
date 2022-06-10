import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Industries from "../components/Industries";
import Insights from "../components/Insights";
import Solutions from "../components/Solutions";
import Blog from "../components/Blog";
import Awards from "../components/Awards";

const Routings = () => (
    <Router>
        <Header/>
        <main>
        <About/>
        <Awards/>
        <Blog/>
        <Industries/>
        <Insights/>
        <Solutions/>
{/*             <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/industries" element={<Industries/>}/>
                <Route path="/insights" element={<Insights/>}/>
                <Route path="/solutions" element={<Solutions/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/awards" element={<Awards/>}/>
            </Routes> */}
        </main>
        <Footer/>
    </Router>
)

export default Routings