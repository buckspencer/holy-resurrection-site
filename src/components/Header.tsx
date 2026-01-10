import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Visitors', path: '/visitors' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donate', path: '/donate' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="relative">
      <div className="bg-primary">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <Link to="/" className="relative z-20 flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#2D6A7A] border-4 border-secondary flex items-center justify-center absolute top-0 -translate-y-1/4">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#2D6A7A] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[7px] md:text-[9px] text-white font-body tracking-widest uppercase">Holy Resurrection</span>
                  <div className="text-white text-xl md:text-2xl">☦</div>
                  <div className="w-14 h-10 md:w-16 md:h-12 bg-secondary rounded flex items-center justify-center my-1">
                    <span className="text-primary text-2xl md:text-3xl">⛪</span>
                  </div>
                  <span className="text-[6px] md:text-[7px] text-white font-body tracking-wide">Antiochian Orthodox Church</span>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-10 ml-auto pr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-cream text-primary px-5 py-1.5 rounded-sm' 
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden p-2 text-white ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div className="h-10 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-8 bg-cream/10 flex items-center justify-center text-cream/40 text-xs font-body tracking-wider">
            ━━━ ❧ ━━━ ❧ ━━━ ❧ ━━━ [ Ornamental Border - Replace with SVG ] ━━━ ❧ ━━━ ❧ ━━━ ❧ ━━━
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary px-4 pb-4 absolute w-full z-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 font-body text-white hover:text-secondary border-b border-white/10 ${
                location.pathname === link.path ? 'text-secondary' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
