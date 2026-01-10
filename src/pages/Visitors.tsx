export function Visitors() {
  return (
    <div>
      {/* Visitors Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop" 
                alt="Priest in Vestments" 
                className="w-full max-w-sm mx-auto rounded shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="font-heading text-2xl text-rust mb-6 uppercase tracking-wide">Visitors</h2>
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
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl text-cream mb-6 uppercase tracking-wide">What to Expect</h2>
            <div className="font-body text-cream leading-relaxed space-y-4 text-sm max-w-3xl mx-auto">
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
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="py-16 bg-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl text-cream mb-6 uppercase tracking-wide">Helpful Links</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop", title: "Service Schedule" },
              { src: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=150&h=100&fit=crop", title: "Directions" },
              { src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=150&h=100&fit=crop", title: "What to Wear" },
              { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop", title: "Orthodox Basics" },
              { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=150&h=100&fit=crop", title: "Children's Area" },
              { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=150&h=100&fit=crop", title: "Coffee Hour" }
            ].map((link, index) => (
              <div key={index} className="text-center">
                <img 
                  src={link.src} 
                  alt={link.title}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p className="font-body text-cream text-xs">{link.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl text-cream mb-6 uppercase tracking-wide">Gallery</h2>
            <div className="font-body text-cream leading-relaxed space-y-4 text-sm max-w-2xl mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
              alt="Church Gallery" 
              className="w-full max-w-md mx-auto rounded shadow-lg"
            />
          </div>
          
          <div className="text-center">
            <button className="bg-cream text-blue font-body px-6 py-2 text-sm uppercase tracking-wide hover:bg-cream/90 transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </section>
      
      {/* Join Us Online Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl text-rust mb-6 uppercase tracking-wide">Join Us Online</h2>
          <div className="font-body text-rust leading-relaxed space-y-4 text-sm max-w-2xl mx-auto mb-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </p>
          </div>
          
          <button className="bg-rust text-cream font-body px-6 py-2 text-sm uppercase tracking-wide hover:bg-rust/90 transition-colors">
            Watch Live
          </button>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-quote text-2xl text-cream italic leading-tight mb-4">
                "For where Your treasure is, there will Your heart be also."
              </div>
              <p className="font-body text-cream/80 text-sm">— Matthew 6:21</p>
              
              <div className="font-body text-cream leading-relaxed space-y-4 text-sm mt-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
                alt="Orthodox Art" 
                className="w-full max-w-md mx-auto rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Gallery */}
      <section className="py-12 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-heading text-lg text-cream mb-4 uppercase tracking-wide">Experience Orthodox Worship</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop" },
              { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop" },
              { src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&h=100&fit=crop" },
              { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=200&h=100&fit=crop" }
            ].map((image, index) => (
              <img 
                key={index}
                src={image.src} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-24 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Times Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-blue mb-6">Service Times</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading text-blue mb-2">Saturday Evening</h4>
              <p className="font-body text-blue/90">6:00 PM - Great Vespers</p>
            </div>
            <div>
              <h4 className="font-heading text-blue mb-2">Sunday Morning</h4>
              <p className="font-body text-blue/90">9:00 AM - Orthros</p>
              <p className="font-body text-blue/90">10:00 AM - Divine Liturgy</p>
            </div>
            <div>
              <h4 className="font-heading text-blue mb-2">Holy Days</h4>
              <p className="font-body text-blue/90">Times vary - check calendar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="py-16 bg-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-cream mb-6">Helpful Links</h2>
            <p className="font-body text-cream/90 text-lg max-w-3xl mx-auto">
              Resources to help you prepare for your visit and learn more about Orthodox Christianity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Orthodox Worship Guide",
                description: "Learn about the Divine Liturgy and what happens during Orthodox worship.",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
                link: "/worship-guide"
              },
              {
                title: "Frequently Asked Questions", 
                description: "Common questions about Orthodoxy, services, and visiting our parish.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                link: "/faq"
              },
              {
                title: "Orthodox Beliefs",
                description: "An introduction to Orthodox Christian theology and traditions.",
                image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop", 
                link: "/beliefs"
              },
              {
                title: "Getting Here",
                description: "Directions, parking information, and maps to our church.",
                image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=300&h=200&fit=crop",
                link: "/directions"
              }
            ].map((link, index) => (
              <a key={index} href={link.link} className="bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-heading text-lg text-blue mb-2">{link.title}</h3>
                  <p className="font-body text-rust text-sm">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-cream mb-6">Gallery</h2>
            <p className="font-body text-cream/90 text-lg max-w-3xl mx-auto">
              Get a glimpse of our beautiful church, worship services, and parish life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", 
              "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&h=200&fit=crop",
              "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=200&h=200&fit=crop",
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop",
              "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=200&h=200&fit=crop"
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/gallery" 
              className="inline-block bg-cream text-blue font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Join Us Online Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-blue mb-6">Join Us Online</h2>
              <div className="font-body text-rust leading-relaxed space-y-4">
                <p>
                  Can't make it in person? Our services are live-streamed every Sunday, allowing 
                  you to participate in worship from wherever you are. While nothing replaces 
                  being present in the church community, we're grateful technology allows us 
                  to include those who cannot physically join us.
                </p>
                <p>
                  Our online viewers include parishioners traveling, those who are ill, military 
                  personnel deployed overseas, and people exploring Orthodoxy from around the world.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="/live-stream" 
                  className="inline-block bg-blue text-cream font-body px-8 py-3 rounded hover:bg-blue/90 transition-colors mr-4"
                >
                  Watch Live Stream
                </a>
                <a 
                  href="/past-services" 
                  className="inline-block bg-rust text-cream font-body px-8 py-3 rounded hover:bg-rust/90 transition-colors"
                >
                  View Past Services
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue/10 rounded-lg p-8 relative">
                <div className="absolute -top-4 -left-4 text-6xl text-blue/20">"</div>
                <p className="font-quote text-2xl text-blue italic leading-relaxed relative z-10">
                  Come and see the beauty of Orthodox worship, where every liturgy connects us 
                  to the ancient faith passed down from the apostles.
                </p>
                <div className="absolute -bottom-4 -right-4 text-6xl text-blue/20">"</div>
              </div>
              
              {/* Decorative ornament */}
              <div className="mt-6 text-center">
                <div className="w-24 h-8 mx-auto bg-center bg-no-repeat" 
                     style={{ backgroundImage: "url('/decorative-ornament.svg')" }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
