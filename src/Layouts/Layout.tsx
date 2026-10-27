import { type ReactNode, useState } from "react"
import { contactDetails } from "../constants"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { WhatsAppIcon } from "../components/Icons"
import { motion, AnimatePresence } from "motion/react"

const Layout = ({children}: {children: ReactNode}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
<div> 
  <div>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto min-h-screen py-20 relative">
          {children}
      </main>
      <Footer />
      
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-50">
          <div className="relative flex items-center">
              {/* Tooltip */}
              <AnimatePresence>
                  {isHovered && (
                      <motion.div
                          initial={{ opacity: 0, x: 10, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-full mr-3 whitespace-nowrap 
                                    bg-gray-900 text-white px-4 py-2 rounded-lg 
                                    text-sm font-medium shadow-lg pointer-events-none"
                      >
                          Chat with us 💬

                          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 
                                          w-3 h-3 bg-gray-900 rotate-45" />
                      </motion.div>
                  )}
              </AnimatePresence>

              <motion.a
                  href={contactDetails.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="block shadow-lg hover:shadow-xl rounded-full 
                            bg-green-500 hover:bg-green-600 transition-colors animate-pulse"
                  aria-label="Contact on WhatsApp"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
              >
                  <WhatsAppIcon size={48} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              </motion.a>
          </div>
      </div>
  </div>
</div>
  )
}

export default Layout