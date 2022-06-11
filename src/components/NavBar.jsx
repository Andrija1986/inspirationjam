
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
      <li><a></a>Services</li>
      <li><a></a>Industry</li>
      <li><a></a>Technology</li>
      <li><a></a>Testimonials</li>
      <li><a></a>FAQ's</li>
      <li><a></a>Contact Us</li>
    </ul>
    </nav>
  )
}

export default NavBar