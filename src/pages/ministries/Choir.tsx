export function Choir() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-red py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red/90 to-blue/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-cream mb-4">
            Parish Choir
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            Lifting our voices in praise through the sacred music of the Orthodox tradition.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl text-red mb-6">Sacred Song in Worship</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                The choir of Holy Resurrection serves as the voice of the congregation, 
                leading the faithful in the ancient melodies and chants that have been 
                part of Orthodox worship for centuries. Our music ministry enhances the 
                beauty of the Divine Liturgy and helps create an atmosphere of reverence and prayer.
              </p>
              <p className="font-body text-rust leading-relaxed mb-6">
                We welcome singers of all experience levels who wish to contribute their 
                voices to the glory of God. Whether you're a trained musician or simply 
                love to sing, there's a place for you in our choir family.
              </p>
              <div className="bg-red/10 rounded-lg p-6">
                <p className="font-quote text-lg text-rust italic leading-relaxed">
                  "Sing to the Lord a new song; sing to the Lord, all the earth."
                </p>
                <p className="font-body text-rust/80 text-sm mt-2">— Psalm 96:1</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-2xl text-blue mb-6">Choir Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Rehearsals:</span>
                  <span className="font-body text-rust">Thursday evenings</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Time:</span>
                  <span className="font-body text-rust">7:00 - 8:30 PM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Location:</span>
                  <span className="font-body text-rust">Church sanctuary</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Director:</span>
                  <span className="font-body text-rust">Anna Khoury</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body font-semibold text-rust">Experience:</span>
                  <span className="font-body text-rust">All levels welcome</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Music */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Our Musical Tradition</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="font-heading text-xl text-blue mb-3">Byzantine Chant</h3>
                <p className="font-body text-rust">
                  Ancient melodies that have been sung in Orthodox churches for over a millennium.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎼</span>
                </div>
                <h3 className="font-heading text-xl text-green mb-3">Four-Part Harmony</h3>
                <p className="font-body text-rust">
                  Beautiful harmonizations of traditional Orthodox hymns and responses.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-heading text-xl text-gold mb-3">Antiochian Tradition</h3>
                <p className="font-body text-rust">
                  Music from our Antiochian heritage, including Arabic and English hymns.
                </p>
              </div>
            </div>
          </div>

          {/* Choir Schedule */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">Service Schedule</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">Regular Services</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Sunday Divine Liturgy</span>
                    <span className="font-body text-cream/80">10:00 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Saturday Vespers</span>
                    <span className="font-body text-cream/80">6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-cream">Special Feast Days</span>
                    <span className="font-body text-cream/80">As scheduled</span>
                  </div>
                </div>
              </div>
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">Special Events</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Holy Week Services</span>
                    <span className="font-body text-cream/80">Full participation</span>
                  </div>
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Christmas Pageant</span>
                    <span className="font-body text-cream/80">December</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-cream">Pascha Celebration</span>
                    <span className="font-body text-cream/80">Easter Sunday</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Parts */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Voice Parts We Need</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-green text-cream rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🎤</div>
                <h3 className="font-heading text-lg mb-2">Soprano</h3>
                <p className="font-body text-cream/90 text-sm">
                  High women's voices carrying the melody and descant lines
                </p>
              </div>
              
              <div className="bg-blue text-cream rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🎵</div>
                <h3 className="font-heading text-lg mb-2">Alto</h3>
                <p className="font-body text-cream/90 text-sm">
                  Lower women's voices providing rich harmonies
                </p>
              </div>
              
              <div className="bg-gold text-blue rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🎶</div>
                <h3 className="font-heading text-lg mb-2">Tenor</h3>
                <p className="font-body text-blue/90 text-sm">
                  Higher men's voices often carrying melodic lines
                </p>
              </div>
              
              <div className="bg-rust text-cream rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🎼</div>
                <h3 className="font-heading text-lg mb-2">Bass</h3>
                <p className="font-body text-cream/90 text-sm">
                  Lower men's voices providing the foundation
                </p>
              </div>
            </div>
          </div>

          {/* What We Provide */}
          <div className="bg-green/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-green mb-8 text-center">What We Provide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-body font-semibold text-rust mb-1">Music & Instruction</h4>
                    <p className="font-body text-rust/80 text-sm">All sheet music provided, plus vocal coaching for beginners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-body font-semibold text-rust mb-1">Flexible Commitment</h4>
                    <p className="font-body text-rust/80 text-sm">Sing when you're available - no pressure for perfect attendance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-body font-semibold text-rust mb-1">Musical Community</h4>
                    <p className="font-body text-rust/80 text-sm">Fellowship with other music lovers who share your faith</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-body font-semibold text-rust mb-1">Orthodox Training</h4>
                    <p className="font-body text-rust/80 text-sm">Learn the meaning and tradition behind our sacred music</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-body font-semibold text-rust mb-1">Performance Opportunities</h4>
                    <p className="font-body text-rust/80 text-sm">Special concerts and community performances throughout the year</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-body font-semibold text-rust mb-1">Spiritual Growth</h4>
                    <p className="font-body text-rust/80 text-sm">Deepen your worship experience through musical participation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Upcoming Musical Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red">
                <h3 className="font-heading text-lg text-red mb-3">Theophany Concert</h3>
                <p className="font-body text-rust text-sm mb-3">
                  Special choral concert celebrating the Baptism of Christ 
                  with traditional Orthodox hymns.
                </p>
                <p className="font-body text-rust/80 text-xs">January 19th, 7:00 PM</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue">
                <h3 className="font-heading text-lg text-blue mb-3">Lenten Music Workshop</h3>
                <p className="font-body text-rust text-sm mb-3">
                  Learning the special melodies and hymns used 
                  during the Great Fast season.
                </p>
                <p className="font-body text-rust/80 text-xs">February 15th, 7:00 PM</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gold">
                <h3 className="font-heading text-lg text-gold mb-3">Pascha Preparation</h3>
                <p className="font-body text-rust text-sm mb-3">
                  Special rehearsals for the joyful Easter services 
                  and celebration music.
                </p>
                <p className="font-body text-rust/80 text-xs">March dates TBA</p>
              </div>
            </div>
          </div>

          {/* Director & Contact */}
          <div className="bg-red/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Meet Our Director</h2>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-32 h-32 bg-red/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">🎵</span>
              </div>
              <h3 className="font-heading text-2xl text-red mb-3">Anna Khoury</h3>
              <p className="font-body text-rust text-lg mb-4">Choir Director & Organist</p>
              <p className="font-body text-rust leading-relaxed max-w-2xl mx-auto">
                Anna has been leading our choir for over 8 years, bringing both musical expertise 
                and deep love for Orthodox liturgical tradition. She holds a degree in Music Education 
                and has extensive experience in church music ministry. Anna welcomes singers of all 
                levels and takes joy in helping each person find their voice in worship.
              </p>
            </div>
          </div>

          {/* Join the Choir */}
          <div className="bg-red rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-cream mb-6">Join Our Musical Family</h2>
            <p className="font-body text-cream/90 text-lg mb-8 max-w-3xl mx-auto">
              Whether you're an experienced singer or just love to lift your voice in praise, 
              we invite you to join our choir. Experience the joy of leading God's people in 
              worship through the beautiful tradition of Orthodox sacred music.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-cream text-red font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors"
              >
                Contact Anna Khoury
              </a>
              <a 
                href="mailto:choir@holyresurrectiontucson.org" 
                className="inline-block border border-cream text-cream font-body px-8 py-3 rounded hover:bg-cream hover:text-red transition-colors"
              >
                Email the Choir
              </a>
            </div>
            <div className="mt-6">
              <p className="font-body text-cream/80 text-sm">
                Next Rehearsal: Thursday, January 16th at 7:00 PM
                <br />
                Come early at 6:45 PM to meet Anna and get acquainted!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}