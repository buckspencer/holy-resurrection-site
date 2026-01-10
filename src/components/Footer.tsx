import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-blue text-white">
      <div className="w-full">
        <img 
          src="/footer-banner.png" 
          alt="Footer Ornamental Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <nav className="flex flex-wrap justify-center gap-12 mb-16">
          <Link to="/" className="font-body text-lg hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="font-body text-lg hover:text-gold transition-colors">About Us</Link>
          <Link to="/visitors" className="font-body text-lg hover:text-gold transition-colors">Visitors</Link>
          <Link to="/contact" className="font-body text-lg hover:text-gold transition-colors">Contact</Link>
          <Link to="/donate" className="font-body text-lg hover:text-gold transition-colors">Donate</Link>
        </nav>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-2">
            <h3 className="font-heading text-3xl text-gold mb-6 uppercase tracking-wide">Join our Community</h3>
            <p className="font-body text-base text-white/90 leading-relaxed mb-8 border border-white/30 p-6 rounded">
              Stay connected to the life of our parish beyond Sunday. By joining our email list, 
              you'll receive gentle updates on feast days, gatherings, retreats, and opportunities 
              to grow together in faith and fellowship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 px-6 py-4 rounded-full bg-white text-blue placeholder-blue/60 font-body text-base focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-6 py-4 rounded-full bg-white text-blue placeholder-blue/60 font-body text-base focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="px-10 py-4 bg-gold text-blue font-body rounded-full hover:bg-gold/90 transition-colors font-semibold text-base"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:col-span-3 text-right">
            <p className="font-quote italic text-4xl md:text-7xl text-gold leading-relaxed text-right w-full tracking-wide">
              "The disciples were first called Christians in Antioch"
            </p>
            <p className="font-body text-2xl mt-8 text-white text-right">Acts 11:26</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <img 
            src="/footer-images.png" 
            alt="Parish Photo 1"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
          />
          <img 
            src="/footer-images.png" 
            alt="Parish Photo 2"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
          />
          <img 
            src="/footer-images.png" 
            alt="Parish Photo 3"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
          />
          <img 
            src="/footer-images.png" 
            alt="Parish Photo 4"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/20">
          <Link to="/terms" className="font-body text-base text-white/70 hover:text-gold underline">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="font-body text-base text-white/70 hover:text-gold underline">
            Privacy Policy
          </Link>
          <Link to="/disclaimers" className="font-body text-base text-white/70 hover:text-gold underline">
            Disclaimers
          </Link>
        </div>
      </div>
    </footer>
  )
}
