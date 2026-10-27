import { Menu, X } from "lucide-react"
import { navLinks } from "../constants"
import { useState } from "react"
import { cn } from "../lib/utils"

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav className="bg-blue-950 border-b border-blue-400 shadow-2xl top-0 w-full fixed backdrop-blur-2xl z-100">
        <div className="w-full h-15  max-w-7xl gap-5 mx-auto flex items-center px-5 lg:px-6 justify-between">
            <div className="">
                <div className="flex gap-2 items-center font-semibold text-blue-400">
                    <div 
                        className="bg-light-blue text text-black px-2 py-1 rounded-sm w-fit"
                    >
                        ADS
                    </div>
                    <p className="hidden sm:block tracking-wide">AVIS DIGITAL SOLUTIONS</p>
                </div>
            </div>
            <div className="flex-1 hidden lg:block">
                <ul className="flex justify-between">
                    {
                        navLinks.map((navLink, index) => (
                        <li key={index} className="hover:bg-blue-400/20 py-1 px-3 rounded-sm transition-colors duration-300">
                            <a
                                href={navLink.href}
                                className="py-1 px-3 text-gray-300"
                            >
                                {navLink.label}
                            </a>
                        </li>  
                        ))
                    }
                                                         
                </ul>
            </div>
            <button 
                onClick={() => setIsMobileNavOpen(true)}
                className={cn("text-white lg:hidden p-1 cursor-pointer flex justify-center items-center hover:bg-blue-900",
                    isMobileNavOpen ? "opacity-0" : "opacity-100", "transition-all duration-200"
                )}
            >
                <Menu size={32} />
            </button>
        </div>
        {/* Overlay for mobile menu */}
        {
            isMobileNavOpen &&  (
                <div 
                    onClick={() => setIsMobileNavOpen(false)}
                    className="absolute inset-0 bg-black/70 w-full h-screen z-10" 
                />
            )
        }

        {/* Mobile navigation */}

        <div className={cn("absolute top-0 left-0 h-screen bg-blue-950 z-20 w-10/12 sm:w-9/12",
            isMobileNavOpen ? "translate-0" : "-translate-x-full", "transition-all ease-in duration-300"
        )}>
            <button 
                onClick={() => setIsMobileNavOpen(false)}
                className={cn("absolute top-5 right-5 cursor-pointer p-2 rounded-full flex justify-center items-center hover:bg-blue-900 transition-colors duration-200 text-white"
                )}>
                <X size={40} />
            </button>
            <ul className="flex flex-col py-20 px-5">
                {
                    navLinks.map((navLink, index) => (
                        <li key={index} className="hover:bg-blue-400/20 py-1 px-3">
                            <a
                                href={navLink.href}
                                className=" rounded-sm transition-colors duration-300 text-gray-300"
                            >
                                {navLink.label}
                            </a>                            
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar