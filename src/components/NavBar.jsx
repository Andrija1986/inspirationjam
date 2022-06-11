import logo from "../assets/horizontal_on_white_by_logaster (7).png"

const NavBar = () => {
  return (
    <nav className="top-nav">
    <div>
    <img src={logo} alt="Logo" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
    </label>
    <ul className="menu">
      <li><a href="#whyus">Why Us</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#industry">Industry</a></li>
      <li><a href="#technology">Technology</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#faq">FAQ's</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
    </nav>
  )
}

export default NavBar