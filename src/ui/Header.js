import { NavLink } from "react-router-dom"

const Header = () => {


  return (
    <div className="bg-black text-white px-5 flex items-baseline justify-between py-2">
      <h1>Web Logo</h1>
      <nav className="space-x-4">
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>

    </div>
  )
}
export default Header