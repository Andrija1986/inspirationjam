import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
    <div>
      Logo Here
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
    </nav>
  )
}

export default NavBar