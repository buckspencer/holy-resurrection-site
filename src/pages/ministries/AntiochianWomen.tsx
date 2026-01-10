export function AntiochianWomen() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gold py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/90 to-green/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-blue mb-4">
            Antiochian Women
          </h1>
          <p className="font-body text-xl text-blue/90 max-w-3xl mx-auto">
            Empowering women in faith, service, and sisterhood within the Orthodox tradition.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl text-red mb-6">Sisters in Christ</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                The Antiochian Women of Holy Resurrection is an active organization dedicated 
                to spiritual growth, charitable service, and fellowship among Orthodox women. 
                We strive to follow the example of the Theotokos and Orthodox women saints 
                in living lives of faith, service, and devotion.
              </p>
              <p className="font-body text-rust leading-relaxed mb-6">
                Our organization supports both parish needs and broader charitable works, 
                while providing opportunities for women to deepen their Orthodox faith 
                through study, prayer, and community action.
              </p>
              <div className="bg-gold/10 rounded-lg p-6">
                <p className="font-quote text-lg text-rust italic leading-relaxed">
                  "Many daughters have done virtuously, but you excel them all."
                </p>
                <p className="font-body text-rust/80 text-sm mt-2">— Proverbs 31:29</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-2xl text-blue mb-6">Meeting Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">When:</span>
                  <span className="font-body text-rust">2nd Saturday of each month</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Time:</span>
                  <span className="font-body text-rust">10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Location:</span>
                  <span className="font-body text-rust">Parish Hall</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Membership:</span>
                  <span className="font-body text-rust">All Orthodox women welcome</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body font-semibold text-rust">Contact:</span>
                  <span className="font-body text-rust">Maria Andros, President</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="font-heading text-xl text-cream mb-3">Spiritual Growth</h3>
                <p className="font-body text-cream/90">
                  Deepening our Orthodox faith through prayer, study, and spiritual direction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="font-heading text-xl text-cream mb-3">Charitable Service</h3>
                <p className="font-body text-cream/90">
                  Serving those in need through local and international humanitarian efforts.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👭</span>
                </div>
                <h3 className="font-heading text-xl text-cream mb-3">Fellowship</h3>
                <p className="font-body text-cream/90">
                  Building strong relationships among Orthodox women across all ages.
                </p>
              </div>
            </div>
          </div>

          {/* Activities & Programs */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Our Activities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-green mb-4">Bible Study & Book Club</h3>
                <p className="font-body text-rust mb-3">
                  Monthly study sessions focusing on Orthodox spiritual texts, lives of female 
                  saints, and contemporary Orthodox authors.
                </p>
                <p className="font-body text-rust/80 text-sm">
                  <strong>Current Reading:</strong> "The Way of a Pilgrim"
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-green mb-4">Charitable Projects</h3>
                <p className="font-body text-rust mb-3">
                  Supporting local food banks, clothing drives, and international Orthodox 
                  missions through fundraising and volunteer work.
                </p>
                <p className="font-body text-rust/80 text-sm">
                  <strong>Current Focus:</strong> IOCC Syria Relief Fund
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-green mb-4">Retreat & Pilgrimage</h3>
                <p className="font-body text-rust mb-3">
                  Annual retreats for spiritual renewal and occasional pilgrimages 
                  to Orthodox monasteries and holy sites.
                </p>
                <p className="font-body text-rust/80 text-sm">
                  <strong>Next Event:</strong> Spring Retreat at Holy Trinity Monastery
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-green mb-4">Parish Support</h3>
                <p className="font-body text-rust mb-3">
                  Organizing coffee hours, parish dinners, and special events while 
                  beautifying our church with flowers and decorations.
                </p>
                <p className="font-body text-rust/80 text-sm">
                  <strong>Ongoing:</strong> Weekly altar flower arrangements
                </p>
              </div>
            </div>
          </div>

          {/* Special Events */}
          <div className="bg-green/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-green mb-8 text-center">Annual Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌸</span>
                </div>
                <h3 className="font-heading text-lg text-green mb-2">Mother's Day Luncheon</h3>
                <p className="font-body text-rust text-sm">
                  Celebrating motherhood with a special meal and program
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍂</span>
                </div>
                <h3 className="font-heading text-lg text-gold mb-2">Fall Bazaar</h3>
                <p className="font-body text-rust text-sm">
                  Annual fundraising bazaar with handmade crafts and food
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎄</span>
                </div>
                <h3 className="font-heading text-lg text-blue mb-2">Christmas Tea</h3>
                <p className="font-body text-rust text-sm">
                  Elegant afternoon tea celebrating the Nativity season
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌹</span>
                </div>
                <h3 className="font-heading text-lg text-red mb-2">Rose Sunday</h3>
                <p className="font-body text-rust text-sm">
                  Honoring the Theotokos with roses and special prayers
                </p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-rust/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-rust mb-8 text-center">Current Officers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-heading text-lg text-rust mb-2">Maria Andros</h3>
                <p className="font-body text-rust/80 text-sm mb-1">President</p>
                <p className="font-body text-rust/60 text-xs">maria.andros@email.com</p>
              </div>
              
              <div className="text-center">
                <h3 className="font-heading text-lg text-rust mb-2">Catherine Mikhail</h3>
                <p className="font-body text-rust/80 text-sm mb-1">Vice President</p>
                <p className="font-body text-rust/60 text-xs">catherine.mikhail@email.com</p>
              </div>
              
              <div className="text-center">
                <h3 className="font-heading text-lg text-rust mb-2">Sophia Khoury</h3>
                <p className="font-body text-rust/80 text-sm mb-1">Secretary</p>
                <p className="font-body text-rust/60 text-xs">sophia.khoury@email.com</p>
              </div>
              
              <div className="text-center">
                <h3 className="font-heading text-lg text-rust mb-2">Helen Saliba</h3>
                <p className="font-body text-rust/80 text-sm mb-1">Treasurer</p>
                <p className="font-body text-rust/60 text-xs">helen.saliba@email.com</p>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div className="bg-gold rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-blue mb-6">Join the Antiochian Women</h2>
            <p className="font-body text-blue/90 text-lg mb-8 max-w-3xl mx-auto">
              All Orthodox women are welcome to join our sisterhood. Whether you're new to 
              Orthodoxy or have been in the faith for years, we invite you to grow with us 
              in faith, service, and friendship.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-blue text-cream font-body px-8 py-3 rounded hover:bg-blue/90 transition-colors"
              >
                Contact Our President
              </a>
              <a 
                href="mailto:antiochianwomen@holyresurrectiontucson.org" 
                className="inline-block border border-blue text-blue font-body px-8 py-3 rounded hover:bg-blue hover:text-cream transition-colors"
              >
                Email Us
              </a>
            </div>
            <div className="mt-6">
              <p className="font-body text-blue/80 text-sm">
                Next Meeting: February 8th at 10:00 AM in the Parish Hall
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}