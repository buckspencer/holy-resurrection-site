export function HistoryExpanded() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gold py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/90 to-rust/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-blue mb-4">
            Our Parish History
          </h1>
          <p className="font-body text-xl text-blue/90 max-w-3xl mx-auto">
            The story of Holy Resurrection Antiochian Orthodox Church: from humble beginnings to vibrant community.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl text-red mb-6">Rooted in Tradition, Alive in Christ</h2>
            <p className="font-body text-rust leading-relaxed text-lg mb-8">
              For over four decades, Holy Resurrection Antiochian Orthodox Church has served 
              as a beacon of Orthodox faith in Tucson, Arizona. Our story is one of faithful 
              perseverance, community growth, and unwavering commitment to preserving the 
              ancient faith while meeting the needs of modern Orthodox Christians.
            </p>
            <div className="bg-gold/10 rounded-lg p-6">
              <p className="font-quote text-lg text-rust italic leading-relaxed">
                "Remember the days of old; consider the years of many generations; 
                ask your father, and he will show you, your elders, and they will tell you."
              </p>
              <p className="font-body text-rust/80 text-sm mt-2">— Deuteronomy 32:7</p>
            </div>
          </div>

          {/* Historical Timeline */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-12 text-center">Timeline of Our Parish</h2>
            
            {/* 1970s - Foundation */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue h-full"></div>
              
              <div className="space-y-16">
                
                {/* 1978 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-blue mb-3">1978 - The Beginning</h3>
                        <p className="font-body text-rust mb-4">
                          A small group of Orthodox families in Tucson began meeting in homes for 
                          prayer and fellowship, dreaming of establishing an Orthodox church to 
                          serve Southern Arizona.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          Led by George Khoury and Michael Saliba, these faithful pioneers 
                          laid the foundation for what would become our parish family.
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 bg-blue text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">78</span>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>

                {/* 1982 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="relative z-10 bg-green text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">82</span>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-green mb-3">1982 - Official Charter</h3>
                        <p className="font-body text-rust mb-4">
                          Holy Resurrection received its official charter from the Antiochian 
                          Orthodox Christian Archdiocese of North America, becoming a recognized 
                          mission parish.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          The community celebrated their first Divine Liturgy as an official 
                          Orthodox parish in a rented space at St. Mark's Presbyterian Church.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1985 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-gold mb-3">1985 - First Building</h3>
                        <p className="font-body text-rust mb-4">
                          After years of meeting in various rented facilities, the parish 
                          purchased its first building on 5th Street, establishing a permanent 
                          home for worship and community life.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          Fr. Paul Saliba was assigned as the first full-time pastor, 
                          bringing stability and growth to the young community.
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 bg-gold text-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">85</span>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>

                {/* 1990 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="relative z-10 bg-rust text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">90</span>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-rust mb-3">1990 - Growing Community</h3>
                        <p className="font-body text-rust mb-4">
                          The parish reached full parish status with over 80 families. 
                          The Antiochian Women organization was established, along with 
                          a youth ministry program.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          Construction began on expanded facilities including a proper 
                          sanctuary, parish hall, and educational classrooms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1995 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-red mb-3">1995 - Sacred Space</h3>
                        <p className="font-body text-rust mb-4">
                          The beautiful iconostasis was installed, crafted by master 
                          iconographer George Kordis. The church was formally consecrated 
                          by Archbishop Philip.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          This milestone marked the transformation from mission to a 
                          mature parish with a truly sacred worship space.
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 bg-red text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">95</span>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>

                {/* 2001 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="relative z-10 bg-blue text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">01</span>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-blue mb-3">2001 - New Millennium</h3>
                        <p className="font-body text-rust mb-4">
                          Fr. Michael Nasser began his pastoral tenure, bringing fresh 
                          energy and vision. The parish launched its first website and 
                          began recorded services for shut-ins.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          Educational programs expanded with adult catechism classes 
                          welcoming many converts to Orthodox Christianity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2010 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-green mb-3">2010 - Community Outreach</h3>
                        <p className="font-body text-rust mb-4">
                          The parish began significant community outreach programs, 
                          including food drives, homeless ministry, and partnerships 
                          with local charities.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          The Men's Fellowship and expanded youth ministry programs 
                          were launched, strengthening parish life across all ages.
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 bg-green text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">10</span>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>

                {/* 2015 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="relative z-10 bg-gold text-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">15</span>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-gold mb-3">2015 - New Leadership</h3>
                        <p className="font-body text-rust mb-4">
                          Fr. Gabriel Bilas arrived as pastor, bringing renewed focus on 
                          Orthodox education and spiritual formation. The parish began 
                          streaming services online.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          Renovation projects improved accessibility and enhanced the 
                          beauty of the worship space for future generations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2020 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-heading text-2xl text-rust mb-3">2020 - Challenges & Growth</h3>
                        <p className="font-body text-rust mb-4">
                          Despite pandemic challenges, the parish adapted with enhanced 
                          online ministry, outdoor services, and innovative ways to 
                          maintain community connection.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          The faith and resilience of our community shone brightly 
                          during this difficult period, emerging stronger than ever.
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 bg-rust text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">20</span>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>

                {/* 2025 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="relative z-10 bg-blue text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <span className="font-heading text-lg font-bold">25</span>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue">
                        <h3 className="font-heading text-2xl text-blue mb-3">2025 - Looking Forward</h3>
                        <p className="font-body text-rust mb-4">
                          Today, Holy Resurrection serves over 150 families with vibrant 
                          ministries for all ages. We continue to grow while staying 
                          rooted in Orthodox tradition.
                        </p>
                        <p className="font-body text-rust/80 text-sm">
                          As we look to the future, we remain committed to preserving 
                          the faith for generations to come.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Founding Families */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">Founding Families</h2>
            <p className="font-body text-cream/90 text-lg mb-8 text-center max-w-4xl mx-auto">
              We honor the pioneer families whose vision, sacrifice, and dedication 
              made our parish possible. Their faithful legacy continues to inspire us today.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-cream/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-2">The Khoury Family</h3>
                <p className="font-body text-cream/80 text-sm">George & Helen Khoury and their children</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-cream/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-2">The Saliba Family</h3>
                <p className="font-body text-cream/80 text-sm">Michael & Mary Saliba and their children</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-cream/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-heading text-lg text-cream mb-2">The Andros Family</h3>
                <p className="font-body text-cream/80 text-sm">John & Sophie Andros and their children</p>
              </div>
            </div>
          </div>

          {/* Significant Milestones */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Significant Milestones</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">⛪</div>
                <h3 className="font-heading text-lg text-blue mb-2">150+</h3>
                <p className="font-body text-rust text-sm">Families served today</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="font-heading text-lg text-green mb-2">300+</h3>
                <p className="font-body text-rust text-sm">Baptisms celebrated</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">💒</div>
                <h3 className="font-heading text-lg text-gold mb-2">85+</h3>
                <p className="font-body text-rust text-sm">Weddings blessed</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-heading text-lg text-red mb-2">125+</h3>
                <p className="font-body text-rust text-sm">Adults received into Orthodoxy</p>
              </div>
            </div>
          </div>

          {/* Legacy & Future */}
          <div className="bg-gold/10 rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-gold mb-6">Our Living Legacy</h2>
            <p className="font-body text-rust leading-relaxed text-lg mb-8 max-w-4xl mx-auto">
              As we reflect on our parish history, we see the hand of God at work through 
              faithful people who have built something beautiful for His glory. From our 
              humble beginnings to our vibrant present, Holy Resurrection continues to be 
              a place where ancient faith meets modern life, where all are welcomed, and 
              where the Orthodox tradition is preserved for future generations.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="/about" 
                className="inline-block bg-gold text-blue font-body px-8 py-3 rounded hover:bg-gold/90 transition-colors"
              >
                Learn More About Us
              </a>
              <a 
                href="/visitors" 
                className="inline-block border border-gold text-gold font-body px-8 py-3 rounded hover:bg-gold hover:text-blue transition-colors"
              >
                Visit Our Community
              </a>
            </div>
            <div className="mt-8">
              <p className="font-quote text-lg text-rust italic">
                "The memory of the righteous is blessed."
              </p>
              <p className="font-body text-rust/80 text-sm mt-2">— Proverbs 10:7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}