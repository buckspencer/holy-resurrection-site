export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue/90 to-green/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-cream mb-4">
            Contact Us
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-2xl mx-auto">
            We're here to help answer your questions and welcome you into our parish family.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl text-red mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Church Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-blue mb-2">Church Address</h3>
                    <div className="font-body text-rust space-y-1">
                      <p>5910 E. 5th Street</p>
                      <p>Tucson, Arizona 85711</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-blue mb-2">Phone</h3>
                    <div className="font-body text-rust">
                      <a href="tel:+15206222265" className="hover:text-blue transition-colors">
                        (520) 622-2265
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-blue mb-2">Email</h3>
                    <div className="font-body text-rust space-y-1">
                      <a href="mailto:info@holyresurrectiontucson.org" className="hover:text-blue transition-colors block">
                        info@holyresurrectiontucson.org
                      </a>
                      <a href="mailto:gabriel.bullock@holyresurrectiontucson.org" className="hover:text-blue transition-colors block">
                        gabriel.bullock@holyresurrectiontucson.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cream text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-blue mb-2">Office Hours</h3>
                    <div className="font-body text-rust space-y-1">
                      <p>Tuesday - Thursday</p>
                      <p>9:00 AM - 3:00 PM</p>
                      <p className="text-sm text-rust/70 mt-2">Or by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Times Card */}
              <div className="bg-blue/10 rounded-lg p-6 mt-8">
                <h3 className="font-heading text-xl text-blue mb-4">Service Times</h3>
                <div className="font-body text-rust space-y-2">
                  <div className="flex justify-between">
                    <span>Saturday Vespers:</span>
                    <span>6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday Orthros:</span>
                    <span>9:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday Divine Liturgy:</span>
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex justify-between text-sm text-rust/70 mt-3 pt-2 border-t border-blue/20">
                    <span>Holy Days:</span>
                    <span>Times vary</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-heading text-2xl text-red mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block font-body text-sm font-medium text-rust mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-rust/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-body text-sm font-medium text-rust mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-rust/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-rust mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-rust/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-rust mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-rust/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-body text-sm font-medium text-rust mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-rust/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                  >
                    <option value="">Please select...</option>
                    <option value="general">General Question</option>
                    <option value="visit">Planning a Visit</option>
                    <option value="orthodox">Learning about Orthodoxy</option>
                    <option value="baptism">Baptism Information</option>
                    <option value="wedding">Wedding Information</option>
                    <option value="funeral">Funeral Services</option>
                    <option value="ministries">Ministry Involvement</option>
                    <option value="pastoral">Pastoral Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-rust mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Please share your question or let us know how we can help you..."
                    className="w-full px-3 py-2 border border-rust/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue text-cream font-body px-8 py-3 rounded hover:bg-blue/90 transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-rust/70 text-center">
                  We'll respond within 24-48 hours. For urgent pastoral needs, please call directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-blue mb-4">Find Us</h2>
            <p className="font-body text-rust max-w-2xl mx-auto">
              Located in east Tucson, we're easy to find with plenty of parking available.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-blue/10 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🗺️</span>
                  <p className="font-body text-rust">Interactive Map</p>
                  <p className="font-body text-sm text-rust/70">Google Maps integration would go here</p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white rounded-lg p-6 shadow-lg h-fit">
              <h3 className="font-heading text-xl text-blue mb-4">Directions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-heading text-rust mb-2">From Downtown Tucson</h4>
                  <p className="font-body text-sm text-rust/80">
                    Take E Broadway Blvd east to Wilmot Rd, turn north, then east on 5th Street.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-heading text-rust mb-2">From I-10</h4>
                  <p className="font-body text-sm text-rust/80">
                    Exit at Wilmot Rd (Exit 264), head south, then west on 5th Street.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-heading text-rust mb-2">Parking</h4>
                  <p className="font-body text-sm text-rust/80">
                    Ample free parking available on church grounds and adjacent streets.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rust/20">
                <a 
                  href="https://maps.google.com?q=5910+E+5th+Street+Tucson+AZ+85711" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue text-cream text-center font-body px-4 py-2 rounded hover:bg-blue/90 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Contact Section */}
      <section className="py-16 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-cream mb-4">Our Leadership</h2>
            <p className="font-body text-cream/90 max-w-2xl mx-auto">
              Feel free to reach out to our pastoral and administrative team with any questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pastor */}
            <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-rust text-2xl">✨</span>
              </div>
              <h3 className="font-heading text-xl text-cream mb-2">Fr. Gabriel Bullock</h3>
              <p className="font-body text-cream/80 mb-4">Pastor</p>
              <div className="font-body text-cream/90 text-sm space-y-1">
                <p>📧 gabriel.bullock@holyresurrectiontucson.org</p>
                <p>📞 (520) 622-2265</p>
                <p className="text-xs text-cream/70 mt-2">Office Hours: Tue-Thu 9AM-3PM</p>
              </div>
            </div>

            {/* Parish Council President */}
            <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-rust text-2xl">👑</span>
              </div>
              <h3 className="font-heading text-xl text-cream mb-2">Michael Thompson</h3>
              <p className="font-body text-cream/80 mb-4">Parish Council President</p>
              <div className="font-body text-cream/90 text-sm">
                <p>📧 president@holyresurrectiontucson.org</p>
              </div>
            </div>

            {/* Church Office */}
            <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-rust text-2xl">🏛️</span>
              </div>
              <h3 className="font-heading text-xl text-cream mb-2">Church Office</h3>
              <p className="font-body text-cream/80 mb-4">Administrative Questions</p>
              <div className="font-body text-cream/90 text-sm space-y-1">
                <p>📧 info@holyresurrectiontucson.org</p>
                <p>📞 (520) 622-2265</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}