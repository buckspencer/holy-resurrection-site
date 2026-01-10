export function MensGroup() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue/90 to-rust/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-cream mb-4">
            Men's Fellowship
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            Orthodox men gathering for fellowship, spiritual growth, and service to God and community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl text-red mb-6">Brothers in Christ</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                The Men's Fellowship of Holy Resurrection is a brotherhood dedicated to 
                supporting one another in living authentic Orthodox Christian lives. 
                We believe that men need the encouragement and accountability that comes 
                from gathering with other faithful men who share the same struggles and aspirations.
              </p>
              <p className="font-body text-rust leading-relaxed mb-6">
                Our group focuses on practical spirituality, discussing how Orthodox teachings 
                apply to our roles as husbands, fathers, workers, and community members. 
                Through study, prayer, and service, we strive to become the men God calls us to be.
              </p>
              <div className="bg-blue/10 rounded-lg p-6">
                <p className="font-quote text-lg text-rust italic leading-relaxed">
                  "As iron sharpens iron, so one man sharpens another."
                </p>
                <p className="font-body text-rust/80 text-sm mt-2">— Proverbs 27:17</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-2xl text-blue mb-6">Fellowship Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">When:</span>
                  <span className="font-body text-rust">1st & 3rd Saturday</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Time:</span>
                  <span className="font-body text-rust">7:00 AM - 8:30 AM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Location:</span>
                  <span className="font-body text-rust">Parish Hall</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Breakfast:</span>
                  <span className="font-body text-rust">Coffee & light meal provided</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body font-semibold text-rust">Contact:</span>
                  <span className="font-body text-rust">John Mansour, Coordinator</span>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">What We Do Together</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="font-heading text-xl mb-3">Scripture Study</h3>
                <p className="font-body text-cream/90">
                  In-depth study of Scripture and Orthodox Church Fathers, 
                  applying ancient wisdom to modern challenges.
                </p>
              </div>
              
              <div className="bg-rust text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-heading text-xl mb-3">Brotherhood</h3>
                <p className="font-body text-cream/90">
                  Honest discussion about faith, family, work, and the 
                  challenges of Christian living in today's world.
                </p>
              </div>
              
              <div className="bg-green text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">🔨</div>
                <h3 className="font-heading text-xl mb-3">Service Projects</h3>
                <p className="font-body text-cream/90">
                  Hands-on service to our church and community, putting 
                  our faith into action through practical work.
                </p>
              </div>
              
              <div className="bg-gold text-blue rounded-lg p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-heading text-xl mb-3">Accountability</h3>
                <p className="font-body text-blue/90">
                  Supporting each other in spiritual disciplines, 
                  family responsibilities, and personal growth.
                </p>
              </div>
              
              <div className="bg-red text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">🏕️</div>
                <h3 className="font-heading text-xl mb-3">Retreats</h3>
                <p className="font-body text-cream/90">
                  Annual retreats for deeper spiritual formation and 
                  stronger bonds of brotherhood away from distractions.
                </p>
              </div>
              
              <div className="bg-blue text-cream rounded-lg p-6">
                <div className="text-4xl mb-4">👨‍👦</div>
                <h3 className="font-heading text-xl mb-3">Mentorship</h3>
                <p className="font-body text-cream/90">
                  Older men mentoring younger men in faith, marriage, 
                  parenting, and Orthodox Christian living.
                </p>
              </div>
            </div>
          </div>

          {/* Current Studies */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">Current Study & Topics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">Scripture Study</h3>
                <p className="font-body text-cream/90 mb-3">
                  We're currently studying the Gospel of Matthew, focusing on Christ's teachings 
                  about discipleship and the Kingdom of Heaven.
                </p>
                <p className="font-body text-cream/80 text-sm">
                  <strong>Current Chapter:</strong> The Sermon on the Mount (Matthew 5-7)
                </p>
              </div>
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">Book Study</h3>
                <p className="font-body text-cream/90 mb-3">
                  Reading "The Way of the Ascetics" by Tito Colliander, exploring 
                  practical Orthodox spirituality for laymen.
                </p>
                <p className="font-body text-cream/80 text-sm">
                  <strong>Discussion Topic:</strong> Prayer and spiritual discipline in daily life
                </p>
              </div>
            </div>
          </div>

          {/* Recent & Upcoming Activities */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Recent & Upcoming Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green">
                <h3 className="font-heading text-lg text-green mb-3">Church Cleanup Day</h3>
                <p className="font-body text-rust text-sm mb-3">
                  Monthly church maintenance and beautification projects, 
                  keeping our worship space in excellent condition.
                </p>
                <p className="font-body text-rust/80 text-xs">Next: January 18th, 8:00 AM</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue">
                <h3 className="font-heading text-lg text-blue mb-3">Winter Retreat</h3>
                <p className="font-body text-rust text-sm mb-3">
                  Annual men's retreat focusing on Orthodox spirituality, 
                  fellowship, and renewal in beautiful mountain setting.
                </p>
                <p className="font-body text-rust/80 text-xs">February 28 - March 2, Flagstaff</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gold">
                <h3 className="font-heading text-lg text-gold mb-3">Community Service</h3>
                <p className="font-body text-rust text-sm mb-3">
                  Volunteering at local shelter and food bank, 
                  serving those in need in our community.
                </p>
                <p className="font-body text-rust/80 text-xs">Quarterly projects throughout the year</p>
              </div>
            </div>
          </div>

          {/* Leadership & Contact */}
          <div className="bg-rust/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-rust mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-rust/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="font-heading text-xl text-rust mb-2">Fr. Gabriel Bilas</h3>
                <p className="font-body text-rust/80 text-sm mb-2">Spiritual Advisor</p>
                <p className="font-body text-rust/70 text-xs">
                  Provides Orthodox guidance and spiritual direction
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="font-heading text-xl text-blue mb-2">John Mansour</h3>
                <p className="font-body text-rust/80 text-sm mb-2">Fellowship Coordinator</p>
                <p className="font-body text-rust/70 text-xs">
                  Organizes meetings and coordinates activities
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🔧</span>
                </div>
                <h3 className="font-heading text-xl text-green mb-2">Michael Khoury</h3>
                <p className="font-body text-rust/80 text-sm mb-2">Service Projects Leader</p>
                <p className="font-body text-rust/70 text-xs">
                  Coordinates community service and church projects
                </p>
              </div>
            </div>
          </div>

          {/* Typical Meeting Schedule */}
          <div className="bg-green/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-green mb-8 text-center">Typical Meeting Schedule</h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-green/20 pb-3">
                  <span className="font-body text-rust font-semibold">7:00 - 7:15 AM</span>
                  <span className="font-body text-rust">Coffee & Fellowship</span>
                </div>
                <div className="flex justify-between items-center border-b border-green/20 pb-3">
                  <span className="font-body text-rust font-semibold">7:15 - 7:30 AM</span>
                  <span className="font-body text-rust">Morning Prayer & Scripture Reading</span>
                </div>
                <div className="flex justify-between items-center border-b border-green/20 pb-3">
                  <span className="font-body text-rust font-semibold">7:30 - 8:00 AM</span>
                  <span className="font-body text-rust">Study & Discussion</span>
                </div>
                <div className="flex justify-between items-center border-b border-green/20 pb-3">
                  <span className="font-body text-rust font-semibold">8:00 - 8:15 AM</span>
                  <span className="font-body text-rust">Prayer Requests & Planning</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-rust font-semibold">8:15 - 8:30 AM</span>
                  <span className="font-body text-rust">Closing Prayer & Departure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div className="bg-blue rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-cream mb-6">Join Our Brotherhood</h2>
            <p className="font-body text-cream/90 text-lg mb-8 max-w-3xl mx-auto">
              All Orthodox men are welcome to join our fellowship. Whether you're new to 
              the faith or have been Orthodox your whole life, you'll find brothers ready 
              to support you in your journey with Christ.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-cream text-blue font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors"
              >
                Contact John Mansour
              </a>
              <a 
                href="mailto:mens@holyresurrectiontucson.org" 
                className="inline-block border border-cream text-cream font-body px-8 py-3 rounded hover:bg-cream hover:text-blue transition-colors"
              >
                Email Us
              </a>
            </div>
            <div className="mt-6">
              <p className="font-body text-cream/80 text-sm">
                Next Meeting: January 18th at 7:00 AM - Come join us for coffee and fellowship!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}