import Header from "./components/Header";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Industries from "./components/Industries";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Technology from "./components/Technology";
import Customers from "./components/Customers";
import ContactUs from "./components/ContactUs";
import Resumes from "./components/Resumes";

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
        <Resumes />
        <ContactUs/>
        <FAQ/>
        <Footer/>
        </>
    )
        
}

export default App