export function Donate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-red py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red/90 to-rust/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-cream mb-4">
            Make a Donation
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            Support the ongoing mission and ministry of our parish through your generous gifts.
          </p>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl text-red mb-6">Your Generosity Makes a Difference</h2>
              <div className="font-body text-rust leading-relaxed space-y-4">
                <p>
                  By contributing your treasure, you support the ongoing mission and ministry of our 
                  parish through financial gifts that sustain worship, faith formation, charitable 
                  outreach, and the daily care of our parish home.
                </p>
                <p>
                  Your generosity—whether given weekly, monthly, or as a one-time gift—helps ensure 
                  that our parish remains a welcoming and vibrant place for prayer, service, and 
                  community.
                </p>
                <p>
                  To make an online donation, please click the button below to give securely through 
                  Tithe.ly.
                </p>
              </div>

              {/* Donation Options */}
              <div className="mt-8 space-y-4">
                <a 
                  href="https://tithe.ly/give_new/www/#/tithely/give-one-time/5467891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto bg-green text-cream font-body px-8 py-4 rounded hover:bg-green/90 transition-colors text-center"
                >
                  Donate Online
                </a>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue/10 rounded-lg p-4 text-center">
                    <h3 className="font-heading text-blue mb-2">Monthly Giving</h3>
                    <p className="font-body text-rust text-sm">Set up recurring donations</p>
                  </div>
                  <div className="bg-blue/10 rounded-lg p-4 text-center">
                    <h3 className="font-heading text-blue mb-2">One-Time Gift</h3>
                    <p className="font-body text-rust text-sm">Make a single donation</p>
                  </div>
                </div>
              </div>

              {/* Alternative Giving Methods */}
              <div className="mt-8 p-6 bg-blue/5 rounded-lg">
                <h3 className="font-heading text-xl text-blue mb-4">Other Ways to Give</h3>
                <div className="space-y-3 font-body text-rust text-sm">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue">💳</span>
                    <div>
                      <strong>In Person:</strong> Cash or check donations can be placed in the collection basket during services
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue">📮</span>
                    <div>
                      <strong>By Mail:</strong> Send checks to Holy Resurrection Antiochian Orthodox Church, 5910 E. 5th Street, Tucson, AZ 85711
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue">🎁</span>
                    <div>
                      <strong>Memorial & Honor Gifts:</strong> Contact the church office to make donations in memory or honor of loved ones
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/donation-priest-couple.jpg" 
                alt="Fr. Gabriel with parishioners" 
                className="w-full rounded-lg shadow-lg"
              />
              <p className="font-body text-sm text-rust mt-4 text-center italic">
                Fr. Gabriel with parishioners during a parish celebration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Donations Are Used */}
      <section className="py-16 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-cream mb-6">How Your Gifts Are Used</h2>
            <p className="font-body text-cream/90 text-lg max-w-3xl mx-auto">
              Every donation directly supports the ministry and mission of our parish community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue text-3xl">⛪</span>
              </div>
              <h3 className="font-heading text-cream text-lg mb-3">Worship & Liturgy</h3>
              <p className="font-body text-cream/80 text-sm">
                Maintaining our beautiful church, liturgical supplies, and supporting our worship services
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue text-3xl">👨‍🏫</span>
              </div>
              <h3 className="font-heading text-cream text-lg mb-3">Education & Formation</h3>
              <p className="font-body text-cream/80 text-sm">
                Sunday School, adult education, catechism classes, and youth programs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue text-3xl">🤝</span>
              </div>
              <h3 className="font-heading text-cream text-lg mb-3">Charitable Outreach</h3>
              <p className="font-body text-cream/80 text-sm">
                Supporting local community needs, food drives, and assistance programs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue text-3xl">🏠</span>
              </div>
              <h3 className="font-heading text-cream text-lg mb-3">Parish Operations</h3>
              <p className="font-body text-cream/80 text-sm">
                Utilities, maintenance, insurance, and day-to-day operational expenses
              </p>
            </div>
          </div>

          {/* Stewardship Quote */}
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-8 mt-12 max-w-3xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-cream/20">"</div>
              <p className="font-quote text-2xl text-cream italic leading-relaxed relative z-10">
                Each of you should give what you have decided in your heart to give, 
                not reluctantly or under compulsion, for God loves a cheerful giver.
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-cream/20">"</div>
            </div>
            <p className="font-body text-cream/80 text-sm mt-4">— 2 Corinthians 9:7</p>
          </div>
        </div>
      </section>

      {/* Special Funds & Memorial Gifts */}
      <section className="py-16 bg-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-blue mb-6">Special Giving Opportunities</h2>
            <p className="font-body text-rust text-lg max-w-3xl mx-auto">
              Consider supporting these special funds that enhance our parish life and mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-xl text-blue mb-4">Building Fund</h3>
              <p className="font-body text-rust text-sm mb-4">
                Support ongoing maintenance, improvements, and future expansion of our church facilities.
              </p>
              <a href="/donate?fund=building" className="text-blue hover:text-blue/80 font-body text-sm font-semibold">
                Donate to Building Fund →
              </a>
            </div>

            <div className="bg-cream rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-xl text-blue mb-4">Youth Ministry Fund</h3>
              <p className="font-body text-rust text-sm mb-4">
                Help support youth programs, summer camps, retreats, and activities for our young people.
              </p>
              <a href="/donate?fund=youth" className="text-blue hover:text-blue/80 font-body text-sm font-semibold">
                Support Youth Ministry →
              </a>
            </div>

            <div className="bg-cream rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-xl text-blue mb-4">Charitable Outreach</h3>
              <p className="font-body text-rust text-sm mb-4">
                Support our community service projects, food assistance, and help for those in need.
              </p>
              <a href="/donate?fund=outreach" className="text-blue hover:text-blue/80 font-body text-sm font-semibold">
                Support Outreach →
              </a>
            </div>

            <div className="bg-cream rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-xl text-blue mb-4">Memorial Gifts</h3>
              <p className="font-body text-rust text-sm mb-4">
                Honor the memory of loved ones with donations that support ongoing parish ministries.
              </p>
              <a href="/contact" className="text-blue hover:text-blue/80 font-body text-sm font-semibold">
                Contact About Memorial Gifts →
              </a>
            </div>

            <div className="bg-cream rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-xl text-blue mb-4">Iconography Fund</h3>
              <p className="font-body text-rust text-sm mb-4">
                Contribute to the beautification of our church through traditional Orthodox iconography.
              </p>
              <a href="/donate?fund=iconography" className="text-blue hover:text-blue/80 font-body text-sm font-semibold">
                Support Iconography →
              </a>
            </div>

            <div className="bg-cream rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-xl text-blue mb-4">Priest's Discretionary Fund</h3>
              <p className="font-body text-rust text-sm mb-4">
                Provide resources for Fr. Gabriel to assist parishioners and community members in need.
              </p>
              <a href="/donate?fund=discretionary" className="text-blue hover:text-blue/80 font-body text-sm font-semibold">
                Contribute to Fund →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">Questions About Giving?</h2>
          <p className="font-body text-cream/90 text-lg max-w-3xl mx-auto mb-8">
            Our parish treasurer and clergy are happy to discuss stewardship, planned giving, 
            or answer any questions about supporting our ministry.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-heading text-xl text-cream mb-4">Fr. Gabriel Bullock</h3>
              <p className="font-body text-cream/90 mb-4">Pastor</p>
              <div className="font-body text-cream/80 text-sm space-y-1">
                <p>📧 gabriel.bullock@holyresurrectiontucson.org</p>
                <p>📞 (520) 622-2265</p>
              </div>
            </div>
            
            <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-heading text-xl text-cream mb-4">David Petrov</h3>
              <p className="font-body text-cream/90 mb-4">Parish Treasurer</p>
              <div className="font-body text-cream/80 text-sm space-y-1">
                <p>📧 treasurer@holyresurrectiontucson.org</p>
                <p>📞 (520) 622-2265</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="/contact" 
              className="inline-block bg-cream text-rust font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}