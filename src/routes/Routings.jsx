import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import Industries from "../components/Industries";
import FAQ from "../components/FAQ";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Technology from "../components/Technology";

const Routings = () => (
    <Router>
        <Header/>
        <main>
        <WhyUs/>
        <Services/>
        <Industries/>
        <Technology/>
        <Testimonials/>
        <FAQ/>
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