import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#3D6B7D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          <Link to="/" className="font-body hover:text-secondary transition-colors">Home</Link>
          <Link to="/about" className="font-body hover:text-secondary transition-colors">About Us</Link>
          <Link to="/visitors" className="font-body hover:text-secondary transition-colors">Visitors</Link>
          <Link to="/contact" className="font-body hover:text-secondary transition-colors">Contact</Link>
          <Link to="/donate" className="font-body hover:text-secondary transition-colors">Donate</Link>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-heading text-2xl text-secondary mb-4">Join our Community</h3>
            <p className="font-body text-sm text-gray-200 leading-relaxed mb-6">
              Stay connected to the life of our parish beyond Sunday. By joining our email list, 
              you'll receive gentle updates on feast days, gatherings, retreats, and opportunities 
              to grow together in faith and fellowship.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 font-body text-sm focus:outline-none focus:border-secondary"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 font-body text-sm focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-secondary text-primary font-body rounded hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="text-right">
            <p className="font-body italic text-2xl md:text-3xl text-secondary leading-relaxed">
              "The disciples were first<br />
              called Christians in<br />
              Antioch"
            </p>
            <p className="font-body text-sm mt-4 text-gray-300">Acts 11:26</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="aspect-[4/3] bg-white/10 rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-body">
              Parish Photo 1
            </div>
          </div>
          <div className="aspect-[4/3] bg-white/10 rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-body">
              Parish Photo 2
            </div>
          </div>
          <div className="aspect-[4/3] bg-white/10 rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-body">
              Parish Photo 3
            </div>
          </div>
          <div className="aspect-[4/3] bg-white/10 rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-body">
              Parish Photo 4
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
          <Link to="/terms" className="font-body text-sm text-gray-300 hover:text-secondary underline">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="font-body text-sm text-gray-300 hover:text-secondary underline">
            Privacy Policy
          </Link>
          <Link to="/disclaimers" className="font-body text-sm text-gray-300 hover:text-secondary underline">
            Disclaimers
          </Link>
        </div>
      </div>
    </footer>
  )
}
