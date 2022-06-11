import Header from "./components/Header";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Industries from "./components/Industries";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Technology from "./components/Technology";
import Customers from "./components/Customers";

const App = () => {
    return(
        <>
        <Header/>
        <WhyUs/>
        <Services/>
        <Industries/>
        <Technology/>
        <Testimonials/>
        <Customers/>
        <FAQ/>
        <Footer/>
        </>
    )
        
}

export default App