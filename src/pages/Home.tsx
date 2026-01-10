export function Home() {
  return (
    <div>
      {/* Orthodox Icons Header */}
      <section className="bg-rust py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-end space-x-2 overflow-x-auto">
            {[
              { src: "/orthodox-icon-1.jpg", height: "h-16" },
              { src: "/orthodox-icon-2.jpg", height: "h-20" },
              { src: "/orthodox-icon-3.jpg", height: "h-24" },
              { src: "/orthodox-icon-4.jpg", height: "h-28" },
              { src: "/orthodox-icon-5.jpg", height: "h-24" },
              { src: "/orthodox-icon-6.jpg", height: "h-20" },
              { src: "/orthodox-icon-7.jpg", height: "h-16" }
            ].map((icon, index) => (
              <div key={index} className={`${icon.height} w-12 bg-gold/20 rounded-t-lg flex items-end justify-center border-2 border-gold/30 flex-shrink-0`}>
                <img 
                  src={icon.src} 
                  alt="Orthodox Icon"
                  className="w-10 h-full object-cover rounded-t"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="bg-red py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img src="/hraoc-logo.png" alt="HRAOC Logo" className="w-24 h-24 mx-auto mb-4" />
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl text-cream mb-6">
            HOLY RESURRECTION ANTIOCHIAN ORTHODOX CHURCH
          </h1>
          <p className="font-quote text-xl text-cream/90 italic mb-8 max-w-2xl mx-auto">
            Divine Liturgy Sunday 10am
          </p>
          
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <img 
              src="/father-gabriel-portrait.jpg" 
              alt="Fr. Gabriel" 
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-cream"
            />
            <h3 className="font-heading text-lg text-cream mb-2">Fr. Gabriel Bilas</h3>
            <p className="font-body text-cream/90 text-sm">Pastor</p>
          </div>
        </div>
      </section>

      {/* Biographical Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl text-rust mb-6 uppercase tracking-wide">Brief Bio</h2>
              <div className="font-body text-rust leading-relaxed space-y-4 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
                  omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/bio-photo-1.jpg" 
                alt="Church Photo 1" 
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="/bio-photo-2.jpg" 
                alt="Church Photo 2" 
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="/bio-photo-3.jpg" 
                alt="Church Photo 3" 
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="/bio-photo-4.jpg" 
                alt="Church Photo 4" 
                className="w-full h-32 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life as a Church Section */}
      <section className="py-16 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src="/church-couple-photo.jpg" 
                alt="Church Life" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="font-quote text-3xl text-cream mb-6 italic leading-tight">
                Life as a church that meets<br />with Jesus
              </h2>
              <div className="font-body text-cream leading-relaxed space-y-4 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              
              <button className="mt-6 bg-cream text-rust font-body px-6 py-2 text-sm uppercase tracking-wide hover:bg-cream/90 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Here Section */}
      <section className="py-16 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-cream text-center mb-12 uppercase tracking-wide">What's New Here</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/news-photo-1.jpg",
                title: "Lorem ipsum dolor sit"
              },
              {
                image: "/news-photo-2.jpg",
                title: "Consectetur adipiscing elit"
              },
              {
                image: "/news-photo-3.jpg",
                title: "Sed do eiusmod tempor"
              }
            ].map((news, index) => (
              <div key={index} className="text-center">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="font-body text-cream text-sm">{news.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Saint Visit Section */}
      <section className="py-16 bg-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-cream mb-8 uppercase tracking-wide">Principal Saint Visit</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "SAINT NICHOLAS", image: "/saint-icon-1.jpg" },
              { name: "SAINT MARY", image: "/saint-icon-2.jpg" },
              { name: "SAINT JOHN", image: "/saint-icon-3.jpg" }
            ].map((saint, index) => (
              <div key={index} className="text-center">
                <img 
                  src={saint.image} 
                  alt={saint.name}
                  className="w-32 h-40 mx-auto rounded mb-4 object-cover"
                />
                <h3 className="font-body text-cream text-sm uppercase tracking-wide">{saint.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Info Section */}
      <section className="py-12 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-cream">
            <div>
              <h3 className="font-heading text-lg mb-4 uppercase tracking-wide">Address</h3>
              <p className="font-body text-sm">
                5910 E. 5th Street<br />
                Tucson, Arizona 85711
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4 uppercase tracking-wide">Contact</h3>
              <p className="font-body text-sm">
                (520) 622-2265<br />
                info@holyresurrectiontucson.org
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4 uppercase tracking-wide">Service Times</h3>
              <p className="font-body text-sm">
                Saturday: 6:00 PM Vespers<br />
                Sunday: 10:00 AM Divine Liturgy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}