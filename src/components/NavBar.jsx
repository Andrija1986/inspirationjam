
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
      <li>About</li>
      <li>Why Us</li>
      <li>Technology</li>
      <li>Case Studies</li>
      <li>Reach Out</li>
    </ul>
    </nav>
  )
}

export default NavBar