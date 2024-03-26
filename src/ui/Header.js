import { NavLink } from "react-router-dom"
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
const Header = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  }







  return (
    <div className="bg-black text-white px-5 flex sm:items-start items-center justify-between  py-2 sticky top-0 z-10">
      <div>
        <h1 className="mb-2">Web Logo</h1>

        {show && <nav className="sm:flex sm:flex-col hidden space-y-2">
          <NavLink to='/about'> About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>}

      </div>

      <div className="mt-1 hidden sm:flex">
        {show ? <button onClick={handleShow}><HiOutlineX size={25} /></button> : <button onClick={handleShow}><HiMenuAlt1 size={25} /></button>}
      </div>
      <nav className="space-x-4 sm:hidden">
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>

    </div>
  )
}
export default Header