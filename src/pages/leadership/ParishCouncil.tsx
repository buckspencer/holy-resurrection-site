export function ParishCouncil() {
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
            Parish Council
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            Dedicated lay leaders serving our parish community with wisdom and vision.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl text-red mb-6">Servant Leadership</h2>
            <p className="font-body text-rust leading-relaxed text-lg mb-6">
              Our Parish Council serves as the governing body of Holy Resurrection, working 
              alongside our pastor to guide the spiritual, administrative, and financial 
              life of our community. These dedicated volunteers bring diverse skills and 
              deep faith to their service.
            </p>
            <div className="bg-rust/10 rounded-lg p-6">
              <p className="font-quote text-lg text-rust italic leading-relaxed">
                "Let each of you look not only to his own interests, but also to the interests of others."
              </p>
              <p className="font-body text-rust/80 text-sm mt-2">— Philippians 2:4</p>
            </div>
          </div>

          {/* Current Council Members */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">2025 Parish Council</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* President */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue">
                <div className="w-20 h-20 bg-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="font-heading text-xl text-blue text-center mb-2">Michael Khoury</h3>
                <p className="font-body text-rust text-center text-sm mb-3">Council President</p>
                <p className="font-body text-rust text-xs text-center mb-4">
                  3rd term • Member since 2019
                </p>
                <p className="font-body text-rust text-sm">
                  Michael brings extensive business leadership experience and deep commitment 
                  to Orthodox life. He oversees council meetings and works closely with 
                  Father Gabriel on parish vision and strategic planning.
                </p>
              </div>

              {/* Vice President */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green">
                <div className="w-20 h-20 bg-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-heading text-xl text-green text-center mb-2">Sarah Andros</h3>
                <p className="font-body text-rust text-center text-sm mb-3">Vice President</p>
                <p className="font-body text-rust text-xs text-center mb-4">
                  2nd term • Member since 2021
                </p>
                <p className="font-body text-rust text-sm">
                  Sarah coordinates many of our parish ministries and special events. 
                  Her organizational skills and passion for community building make her 
                  an invaluable leader.
                </p>
              </div>

              {/* Secretary */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gold">
                <div className="w-20 h-20 bg-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="font-heading text-xl text-gold text-center mb-2">David Mansour</h3>
                <p className="font-body text-rust text-center text-sm mb-3">Secretary</p>
                <p className="font-body text-rust text-xs text-center mb-4">
                  1st term • New member 2025
                </p>
                <p className="font-body text-rust text-sm">
                  David maintains detailed council records and handles official parish 
                  correspondence. His attention to detail and communication skills 
                  keep our council well-organized.
                </p>
              </div>

              {/* Treasurer */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red">
                <div className="w-20 h-20 bg-red/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-heading text-xl text-red text-center mb-2">Helen Saliba</h3>
                <p className="font-body text-rust text-center text-sm mb-3">Treasurer</p>
                <p className="font-body text-rust text-xs text-center mb-4">
                  4th term • Member since 2017
                </p>
                <p className="font-body text-rust text-sm">
                  Helen manages all parish finances with wisdom and transparency. 
                  Her accounting background and faithful stewardship ensure our 
                  resources are used effectively.
                </p>
              </div>

              {/* Member 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue">
                <div className="w-20 h-20 bg-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="font-heading text-xl text-blue text-center mb-2">Joseph Mikhail</h3>
                <p className="font-body text-rust text-center text-sm mb-3">Council Member</p>
                <p className="font-body text-rust text-xs text-center mb-4">
                  2nd term • Member since 2022
                </p>
                <p className="font-body text-rust text-sm">
                  Joseph oversees building maintenance and property management. 
                  His construction expertise helps keep our church facilities 
                  in excellent condition.
                </p>
              </div>

              {/* Member 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green">
                <div className="w-20 h-20 bg-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-heading text-xl text-green text-center mb-2">Maria Torres</h3>
                <p className="font-body text-rust text-center text-sm mb-3">Council Member</p>
                <p className="font-body text-rust text-xs text-center mb-4">
                  1st term • New member 2025
                </p>
                <p className="font-body text-rust text-sm">
                  Maria focuses on educational ministries and youth programs. 
                  Her background in education and heart for young people 
                  strengthens our formation efforts.
                </p>
              </div>

            </div>
          </div>

          {/* Council Responsibilities */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">Council Responsibilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-3">Financial Oversight</h3>
                <p className="font-body text-cream/90 text-sm">
                  Managing parish budget, expenditures, and long-term financial planning
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-3">Property Management</h3>
                <p className="font-body text-cream/90 text-sm">
                  Maintaining church buildings, grounds, and facilities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-3">Strategic Planning</h3>
                <p className="font-body text-cream/90 text-sm">
                  Setting parish goals and supporting ministry development
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-3">Policy Development</h3>
                <p className="font-body text-cream/90 text-sm">
                  Creating and updating parish policies and procedures
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-3">Community Relations</h3>
                <p className="font-body text-cream/90 text-sm">
                  Building relationships with other organizations and the wider community
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-3">Canonical Compliance</h3>
                <p className="font-body text-cream/90 text-sm">
                  Ensuring adherence to Orthodox canon law and Archdiocesan guidelines
                </p>
              </div>
            </div>
          </div>

          {/* Meeting Schedule */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-heading text-2xl text-green mb-6">Meeting Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Regular Meetings:</span>
                  <span className="font-body text-rust">3rd Tuesday monthly</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Time:</span>
                  <span className="font-body text-rust">7:00 PM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Location:</span>
                  <span className="font-body text-rust">Parish Hall</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body font-semibold text-rust">Open to Public:</span>
                  <span className="font-body text-rust">First 30 minutes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-heading text-2xl text-green mb-6">Getting Involved</h3>
              <p className="font-body text-rust mb-4">
                Interested in serving on Parish Council? We welcome nominations 
                and encourage parishioners to consider this important ministry.
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-body text-rust"><strong>Term Length:</strong> 3 years</p>
                <p className="font-body text-rust"><strong>Elections:</strong> Annual Parish Assembly</p>
                <p className="font-body text-rust"><strong>Requirements:</strong> Parish member in good standing</p>
                <p className="font-body text-rust"><strong>Commitment:</strong> Monthly meetings + committees</p>
              </div>
            </div>
          </div>

          {/* Current Initiatives */}
          <div className="bg-green/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-green mb-8 text-center">Current Council Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-green pl-6">
                  <h3 className="font-heading text-lg text-green mb-2">Building Improvement Project</h3>
                  <p className="font-body text-rust text-sm">
                    Coordinating renovations to the parish hall and updates to accessibility features
                  </p>
                </div>
                
                <div className="border-l-4 border-blue pl-6">
                  <h3 className="font-heading text-lg text-blue mb-2">Youth Program Expansion</h3>
                  <p className="font-body text-rust text-sm">
                    Supporting growth of youth ministry and Sunday School programs
                  </p>
                </div>
                
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="font-heading text-lg text-gold mb-2">Stewardship Campaign</h3>
                  <p className="font-body text-rust text-sm">
                    Promoting faithful giving and transparent financial communication
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red pl-6">
                  <h3 className="font-heading text-lg text-red mb-2">Community Outreach</h3>
                  <p className="font-body text-rust text-sm">
                    Developing partnerships with local charities and service organizations
                  </p>
                </div>
                
                <div className="border-l-4 border-rust pl-6">
                  <h3 className="font-heading text-lg text-rust mb-2">Technology Upgrades</h3>
                  <p className="font-body text-rust text-sm">
                    Improving audio-visual systems and expanding online ministry capabilities
                  </p>
                </div>
                
                <div className="border-l-4 border-blue pl-6">
                  <h3 className="font-heading text-lg text-blue mb-2">Long-term Planning</h3>
                  <p className="font-body text-rust text-sm">
                    Developing 5-year strategic plan for parish growth and ministry development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Council */}
          <div className="bg-rust rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-cream mb-6">Contact Parish Council</h2>
            <p className="font-body text-cream/90 text-lg mb-8 max-w-3xl mx-auto">
              Have questions, suggestions, or concerns you'd like to share with Parish Council? 
              We welcome input from all parishioners and are here to serve our community.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="mailto:council@holyresurrectiontucson.org" 
                className="inline-block bg-cream text-rust font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors"
              >
                Email Parish Council
              </a>
              <a 
                href="/contact" 
                className="inline-block border border-cream text-cream font-body px-8 py-3 rounded hover:bg-cream hover:text-rust transition-colors"
              >
                Contact Church Office
              </a>
            </div>
            <div className="mt-6">
              <p className="font-body text-cream/80 text-sm">
                Next Council Meeting: January 21st at 7:00 PM
                <br />
                Public comment period: 7:00-7:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}