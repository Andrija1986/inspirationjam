import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <ul>
        <NavLink
          to='/'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li>Logout</li>
        </NavLink>

        <NavLink
          to='/about'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li>About</li>
        </NavLink>

        <NavLink
          to='/awards'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li>
            Awards
          </li>
        </NavLink>

        <NavLink
          to='/solutions'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li>Solutions</li>
        </NavLink>
      </ul>
    </header>
  )
}

export default Header