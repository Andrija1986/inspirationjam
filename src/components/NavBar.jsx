
const NavBar = () => {
  return (
    <nav className="top-nav">
    <div>
    Logo Here
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
    </label>
    <ul className="menu">
      <li><a href="#">Why Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Industry</a></li>
      <li><a href="#">Technology</a></li>
      <li><a href="#">Testimonials</a></li>
      <li><a href="#">FAQ's</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    </nav>
  )
}

export default NavBar