export function NotFound() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-red min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-red/80 to-blue/80"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img src="/hraoc-logo.png" alt="HRAOC Logo" className="w-24 h-24 mx-auto mb-6 opacity-80" />
          </div>
          
          <h1 className="font-heading text-8xl md:text-9xl text-cream mb-4 opacity-90">
            404
          </h1>
          
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
            Page Not Found
          </h2>
          
          <p className="font-body text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off the path. 
            Let us help you find your way back to our community.
          </p>

          <div className="space-y-4 mb-12">
            <a 
              href="/" 
              className="inline-block bg-cream text-red font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors mr-4"
            >
              Return Home
            </a>
            <a 
              href="/contact" 
              className="inline-block border border-cream text-cream font-body px-8 py-3 rounded hover:bg-cream hover:text-red transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Helpful Links */}
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-xl text-cream mb-6">Perhaps you were looking for:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-3">
                <a 
                  href="/about" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">⛪</span>
                  <span className="font-body">About Our Parish</span>
                </a>
                <a 
                  href="/visitors" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">👋</span>
                  <span className="font-body">Visitor Information</span>
                </a>
                <a 
                  href="/gallery" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">📸</span>
                  <span className="font-body">Photo Gallery</span>
                </a>
                <a 
                  href="/donate" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">💝</span>
                  <span className="font-body">Make a Donation</span>
                </a>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="/contact" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">📞</span>
                  <span className="font-body">Contact Information</span>
                </a>
                <a 
                  href="/#service-times" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">🕐</span>
                  <span className="font-body">Service Times</span>
                </a>
                <a 
                  href="/live-stream" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">📺</span>
                  <span className="font-body">Live Stream</span>
                </a>
                <a 
                  href="/directions" 
                  className="flex items-center text-cream/90 hover:text-cream transition-colors group"
                >
                  <span className="text-gold mr-3 group-hover:scale-110 transition-transform">🗺️</span>
                  <span className="font-body">Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-cream/20">"</div>
              <p className="font-quote text-2xl text-cream italic leading-relaxed relative z-10">
                Come unto me, all ye that labor and are heavy laden, and I will give you rest.
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-cream/20">"</div>
            </div>
            <p className="font-body text-cream/80 text-sm mt-4">— Matthew 11:28</p>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 text-center">
            <p className="font-body text-cream/80 text-sm mb-2">
              Need immediate pastoral assistance?
            </p>
            <a 
              href="tel:+15206222265" 
              className="font-body text-cream hover:text-gold transition-colors"
            >
              Call (520) 622-2265
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}