export function YouthMinistry() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-rust py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rust/90 to-red/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-cream mb-4">
            Youth Ministry
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            Building strong foundations for the next generation of Orthodox Christians.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl text-red mb-6">Faith, Fellowship, and Fun</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                Our Youth Ministry serves teenagers and young adults (ages 13-25) with programs 
                designed to strengthen their Orthodox faith while building lasting friendships. 
                We believe that young people need both spiritual formation and vibrant community 
                to thrive in their faith journey.
              </p>
              <p className="font-body text-rust leading-relaxed mb-6">
                Through Bible studies, service projects, retreats, and social activities, 
                our youth discover how their Orthodox faith applies to modern life and develop 
                the skills to be faithful Orthodox Christians in college and beyond.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-2xl text-blue mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gold mr-3 text-xl">👥</span>
                  <span className="font-body text-rust">Ages 13-25</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-3 text-xl">📅</span>
                  <span className="font-body text-rust">Sunday evenings & special events</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-3 text-xl">📍</span>
                  <span className="font-body text-rust">Youth Room & various locations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-3 text-xl">💰</span>
                  <span className="font-body text-rust">Free regular meetings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Program Components */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-heading text-xl mb-3">Bible Study</h3>
                <p className="font-body text-cream/90">
                  Weekly exploration of Scripture through an Orthodox lens, discussing 
                  how ancient wisdom applies to modern challenges.
                </p>
              </div>
              <div className="bg-green text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-heading text-xl mb-3">Service Projects</h3>
                <p className="font-body text-cream/90">
                  Hands-on opportunities to serve our community while living out 
                  Christ's call to love our neighbors.
                </p>
              </div>
              <div className="bg-gold text-blue rounded-lg p-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading text-xl mb-3">Social Events</h3>
                <p className="font-body text-blue/90">
                  Fun activities that build friendships: game nights, outdoor adventures, 
                  movie nights, and seasonal celebrations.
                </p>
              </div>
              <div className="bg-rust text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">⛰️</div>
                <h3 className="font-heading text-xl mb-3">Retreats</h3>
                <p className="font-body text-cream/90">
                  Annual retreats for deeper spiritual formation, worship, and 
                  fellowship away from daily distractions.
                </p>
              </div>
              <div className="bg-red text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="font-heading text-xl mb-3">Drama & Arts</h3>
                <p className="font-body text-cream/90">
                  Creative expression through drama, music, and visual arts 
                  that celebrate our Orthodox heritage.
                </p>
              </div>
              <div className="bg-blue text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-heading text-xl mb-3">Mission Trips</h3>
                <p className="font-body text-cream/90">
                  Opportunities to serve Orthodox communities and learn about 
                  the global Orthodox Church.
                </p>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">Weekly Schedule</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">High School (13-18)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Sunday Evening</span>
                    <span className="font-body text-cream/80">6:00-8:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Bible Study</span>
                    <span className="font-body text-cream/80">6:00-7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-cream">Fellowship/Activities</span>
                    <span className="font-body text-cream/80">7:00-8:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">Young Adults (19-25)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Sunday Evening</span>
                    <span className="font-body text-cream/80">7:30-9:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-cream/20 pb-2">
                    <span className="font-body text-cream">Discussion/Study</span>
                    <span className="font-body text-cream/80">7:30-8:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-cream">Social Time</span>
                    <span className="font-body text-cream/80">8:30-9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg text-green">Winter Retreat</h3>
                  <span className="font-body text-rust/60 text-sm">Feb 14-16</span>
                </div>
                <p className="font-body text-rust text-sm mb-3">
                  Three-day retreat focused on Orthodox spirituality and community building.
                </p>
                <p className="font-body text-rust/80 text-xs">Mount Lemmon, AZ</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg text-blue">Game Night</h3>
                  <span className="font-body text-rust/60 text-sm">Jan 19</span>
                </div>
                <p className="font-body text-rust text-sm mb-3">
                  Board games, snacks, and fellowship in the youth room.
                </p>
                <p className="font-body text-rust/80 text-xs">7:00 PM - Youth Room</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gold">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg text-gold">Service Project</h3>
                  <span className="font-body text-rust/60 text-sm">Jan 26</span>
                </div>
                <p className="font-body text-rust text-sm mb-3">
                  Volunteering at local food bank to serve those in need.
                </p>
                <p className="font-body text-rust/80 text-xs">9:00 AM - Community Food Bank</p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-green/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-green mb-8 text-center">Youth Ministry Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="font-heading text-xl text-green mb-2">Fr. Gabriel Bilas</h3>
                <p className="font-body text-rust text-sm mb-2">Spiritual Director</p>
                <p className="font-body text-rust/80 text-xs">
                  Provides spiritual guidance and Orthodox teaching
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <h3 className="font-heading text-xl text-blue mb-2">Sarah Mitchell</h3>
                <p className="font-body text-rust text-sm mb-2">Youth Director</p>
                <p className="font-body text-rust/80 text-xs">
                  Coordinates programs and mentors young people
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <h3 className="font-heading text-xl text-gold mb-2">Mike & Lisa Torres</h3>
                <p className="font-body text-rust text-sm mb-2">Adult Mentors</p>
                <p className="font-body text-rust/80 text-xs">
                  Support and encourage youth in their faith journey
                </p>
              </div>
            </div>
          </div>

          {/* Get Involved */}
          <div className="bg-rust rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-cream mb-6">Join Our Youth Community</h2>
            <p className="font-body text-cream/90 text-lg mb-8 max-w-3xl mx-auto">
              Whether you're new to Orthodoxy or have been raised in the faith, 
              our youth ministry welcomes you to grow, serve, and have fun together. 
              Come as you are and discover the joy of Orthodox Christian community.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-cream text-rust font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors"
              >
                Contact Youth Director
              </a>
              <a 
                href="mailto:youth@holyresurrectiontucson.org" 
                className="inline-block border border-cream text-cream font-body px-8 py-3 rounded hover:bg-cream hover:text-rust transition-colors"
              >
                Email Us
              </a>
            </div>
            <div className="mt-6">
              <p className="font-body text-cream/80 text-sm">
                Follow us on social media for updates and photos from our activities!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}