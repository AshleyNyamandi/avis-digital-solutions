import { Menu, X } from "lucide-react"
import { navLinks } from "../constants"
import { useRef, useState } from "react"
import { Link } from "react-router"

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <nav
      aria-label="Main navigation"
      className="bg-blue-950 border-b border-blue-400 shadow-2xl top-0 w-full fixed backdrop-blur-2xl z-100"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsMobileNavOpen(false)
          menuButton.current?.focus()
        }
      }}
    >
      <div className="w-full h-15 max-w-7xl gap-5 mx-auto flex items-center px-5 lg:px-6 justify-between">
        <Link to="/#home" onClick={() => setIsMobileNavOpen(false)} className="flex gap-2 items-center font-semibold text-blue-400" aria-label="Avis Digital Solutions home">
          <span className="bg-light-blue text-black px-2 py-1 rounded-sm w-fit">ADS</span>
          <span className="hidden sm:block tracking-wide">AVIS DIGITAL SOLUTIONS</span>
        </Link>
        <ul className="flex-1 hidden lg:flex justify-between">
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link to={navLink.href} className="nav-link">{navLink.label}</Link>
            </li>
          ))}
        </ul>
        <button
          ref={menuButton}
          type="button"
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="text-white lg:hidden p-1 cursor-pointer flex justify-center items-center hover:bg-blue-900"
        >
          {isMobileNavOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      <ul id="mobile-navigation" hidden={!isMobileNavOpen} className="lg:hidden bg-blue-950 px-5 py-4 border-t border-blue-400">
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <Link to={navLink.href} onClick={() => setIsMobileNavOpen(false)} className="nav-link">
              {navLink.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
