import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About Us', 
    path: '/about',
    dropdown: [
      { name: 'Our Parish', path: '/about' },
      { name: 'Our History', path: '/history' },
      { name: 'Father Gabriel', path: '/leadership/father-gabriel' },
      { name: 'Parish Council', path: '/leadership/parish-council' },
    ]
  },
  { 
    name: 'Ministries',
    dropdown: [
      { name: 'Sunday School', path: '/ministries/sunday-school' },
      { name: 'Youth Ministry', path: '/ministries/youth-ministry' },
      { name: 'Antiochian Women', path: '/ministries/antiochian-women' },
      { name: "Men's Fellowship", path: '/ministries/mens-group' },
      { name: 'Parish Choir', path: '/ministries/choir' },
    ]
  },
  { name: 'Visitors', path: '/visitors' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donate', path: '/donate' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const location = useLocation()

  const isActiveLink = (link: any) => {
    if (link.path && location.pathname === link.path) return true
    if (link.dropdown) {
      return link.dropdown.some((sublink: any) => location.pathname === sublink.path)
    }
    return false
  }

  return (
    <header className="relative mb-16 md:mb-20">
      <div className="bg-primary relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center h-20">
            <Link to="/" className="absolute left-0 top-2 z-30 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Holy Resurrection Antiochian Orthodox Church"
                className={`object-contain md:w-64 md:h-64 ${
                  mobileMenuOpen ? 'w-40 h-40' : 'w-56 h-56'
                }`}
              />
            </Link>

            <div className="hidden md:flex items-center gap-8 ml-auto pr-4">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {link.path ? (
                    <Link
                      to={link.path}
                      className={`font-body transition-colors flex items-center ${
                        isActiveLink(link)
                          ? 'bg-cream text-primary px-4 py-2 rounded-sm' 
                          : 'text-white hover:text-secondary px-2 py-2'
                      }`}
                    >
                      {link.name}
                      {link.dropdown && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  ) : (
                    <button
                      className={`font-body transition-colors flex items-center px-2 py-2 ${
                        isActiveLink(link)
                          ? 'bg-cream text-primary rounded-sm' 
                          : 'text-white hover:text-secondary'
                      }`}
                    >
                      {link.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                  
                  {link.dropdown && dropdownOpen === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {link.dropdown.map((sublink: any) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className={`block px-4 py-2 text-sm font-body transition-colors ${
                            location.pathname === sublink.path
                              ? 'bg-blue text-white'
                              : 'text-rust hover:bg-cream'
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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

      <div className="h-10 bg-primary relative overflow-hidden z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/nav-banner.png" 
            alt="Byzantine Ornamental Border"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary px-4 pb-4 absolute w-full z-50 mt-10">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/10">
              {link.path ? (
                <Link
                  to={link.path}
                  className={`block py-3 font-body text-white hover:text-secondary ${
                    isActiveLink(link) ? 'text-secondary' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <div className="py-3">
                  <span className="font-body text-white font-semibold">{link.name}</span>
                  {link.dropdown && (
                    <div className="mt-2 pl-4">
                      {link.dropdown.map((sublink: any) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className={`block py-2 font-body text-sm hover:text-secondary ${
                            location.pathname === sublink.path ? 'text-secondary' : 'text-cream'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
