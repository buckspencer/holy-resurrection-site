export function Gallery() {
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
            Gallery
          </h1>
          <p className="font-body text-xl text-blue/90 max-w-3xl mx-auto">
            Explore the beauty of our parish through images of worship, fellowship, and community life.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-red mb-6">Parish Life in Pictures</h2>
            <p className="font-body text-rust text-lg max-w-3xl mx-auto">
              Browse through different aspects of our church community, from liturgical celebrations 
              to fellowship gatherings and special events.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { name: 'All Photos', active: true },
              { name: 'Worship & Liturgy', active: false },
              { name: 'Baptisms & Chrismations', active: false },
              { name: 'Weddings', active: false },
              { name: 'Feast Days', active: false },
              { name: 'Fellowship', active: false },
              { name: 'Youth Ministry', active: false },
              { name: 'Church Building', active: false }
            ].map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-body text-sm transition-colors ${
                  category.active 
                    ? 'bg-blue text-cream' 
                    : 'bg-blue/10 text-blue hover:bg-blue/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Worship & Liturgy Section */}
      <section className="py-16 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-cream mb-4">Worship & Divine Liturgy</h3>
            <p className="font-body text-cream/90 max-w-2xl mx-auto">
              The heart of our parish life: celebrating the Divine Liturgy and other liturgical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/gallery-liturgy-iconostasis.jpg",
                alt: "Divine Liturgy at the Iconostasis",
                caption: "Fr. Gabriel celebrating Divine Liturgy"
              },
              {
                src: "/gallery-liturgy-gospel.jpg", 
                alt: "Gospel Reading",
                caption: "Procession of the Holy Gospel"
              },
              {
                src: "/gallery-liturgy-communion.jpg",
                alt: "Holy Communion",
                caption: "Faithful receiving Holy Communion"
              },
              {
                src: "/gallery-liturgy-incense.jpg",
                alt: "Incense Offering", 
                caption: "Offering incense during worship"
              },
              {
                src: "/gallery-liturgy-choir.jpg",
                alt: "Parish Choir",
                caption: "Our choir leading liturgical chant"
              },
              {
                src: "/gallery-liturgy-congregation.jpg",
                alt: "Congregation in Prayer",
                caption: "Parish family gathered in worship"
              }
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="font-body text-cream/80 text-sm mt-3 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacraments Section */}
      <section className="py-16 bg-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-blue mb-4">Sacramental Life</h3>
            <p className="font-body text-rust max-w-2xl mx-auto">
              Celebrating the holy sacraments that mark important moments in our spiritual journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/gallery-baptism-infant.jpg",
                alt: "Infant Baptism",
                caption: "Baptism of a new member"
              },
              {
                src: "/gallery-chrismation-adult.jpg",
                alt: "Adult Chrismation", 
                caption: "Adult joining the Orthodox Church"
              },
              {
                src: "/gallery-wedding-ceremony.jpg",
                alt: "Orthodox Wedding",
                caption: "Wedding ceremony celebration"
              },
              {
                src: "/gallery-ordination.jpg",
                alt: "Ordination Service",
                caption: "Ordination to the diaconate"
              }
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="font-body text-rust text-sm mt-3 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feast Days & Celebrations */}
      <section className="py-16 bg-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-cream mb-4">Feast Days & Special Celebrations</h3>
            <p className="font-body text-cream/90 max-w-2xl mx-auto">
              Throughout the church year, we celebrate major feast days with special services and gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/gallery-pascha-procession.jpg",
                alt: "Pascha Procession",
                caption: "Holy Pascha midnight procession"
              },
              {
                src: "/gallery-christmas-nativity.jpg",
                alt: "Christmas Celebration",
                caption: "Nativity of Christ celebration"
              },
              {
                src: "/gallery-theophany-blessing.jpg",
                alt: "Theophany Water Blessing",
                caption: "Blessing of waters on Theophany"
              },
              {
                src: "/gallery-palm-sunday.jpg",
                alt: "Palm Sunday",
                caption: "Palm Sunday procession"
              },
              {
                src: "/gallery-assumption.jpg",
                alt: "Assumption of Mary",
                caption: "Feast of the Dormition"
              },
              {
                src: "/gallery-holy-week.jpg",
                alt: "Holy Week Services",
                caption: "Holy Week passion services"
              }
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-red/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="font-body text-cream/80 text-sm mt-3 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowship & Community Life */}
      <section className="py-16 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-cream mb-4">Fellowship & Community</h3>
            <p className="font-body text-cream/90 max-w-2xl mx-auto">
              Beyond worship, our parish family comes together for fellowship, education, and service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                src: "/gallery-coffee-hour.jpg",
                alt: "Coffee Hour Fellowship",
                caption: "Sunday coffee hour"
              },
              {
                src: "/gallery-parish-dinner.jpg",
                alt: "Parish Dinner",
                caption: "Community dinner gathering"
              },
              {
                src: "/gallery-sunday-school.jpg",
                alt: "Sunday School",
                caption: "Children's Sunday School"
              },
              {
                src: "/gallery-youth-group.jpg",
                alt: "Youth Group Activity",
                caption: "Youth ministry event"
              },
              {
                src: "/gallery-womens-ministry.jpg",
                alt: "Women's Ministry",
                caption: "Antiochian Women meeting"
              },
              {
                src: "/gallery-mens-fellowship.jpg",
                alt: "Men's Fellowship",
                caption: "Men's group gathering"
              },
              {
                src: "/gallery-food-drive.jpg",
                alt: "Community Food Drive",
                caption: "Charitable outreach project"
              },
              {
                src: "/gallery-parish-picnic.jpg",
                alt: "Parish Picnic",
                caption: "Annual parish picnic"
              }
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-rust/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="font-body text-cream/80 text-xs mt-2 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Church Building & Architecture */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-blue mb-4">Our Sacred Space</h3>
            <p className="font-body text-rust max-w-2xl mx-auto">
              The beauty of our church building reflects the glory of God and enhances our worship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large Featured Image */}
            <div className="md:col-span-2">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/gallery-church-exterior.jpg" 
                  alt="Holy Resurrection Church Exterior"
                  className="w-full h-96 object-cover"
                />
              </div>
              <p className="font-body text-rust text-center mt-4">
                Holy Resurrection Antiochian Orthodox Church exterior
              </p>
            </div>

            {/* Interior Architecture */}
            {[
              {
                src: "/gallery-iconostasis-detail.jpg",
                alt: "Iconostasis Detail",
                caption: "Beautiful handcrafted iconostasis"
              },
              {
                src: "/gallery-altar-area.jpg",
                alt: "Holy Altar",
                caption: "The holy altar and sanctuary"
              },
              {
                src: "/gallery-nave-view.jpg",
                alt: "Nave Interior",
                caption: "The nave during Divine Liturgy"
              },
              {
                src: "/gallery-church-dome.jpg",
                alt: "Church Dome",
                caption: "Interior dome with Christ Pantocrator"
              }
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="font-body text-rust text-sm mt-3 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Photos Section */}
      <section className="py-16 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">Share Your Photos</h2>
          <p className="font-body text-cream/90 text-lg max-w-3xl mx-auto mb-8">
            Have photos from parish events or services you'd like to share? We'd love to include 
            them in our gallery to help tell the story of our community.
          </p>
          
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-xl text-cream mb-4">Photo Submission Guidelines</h3>
            <div className="font-body text-cream/90 text-sm text-left space-y-2">
              <p>• High resolution images preferred (minimum 1920x1080)</p>
              <p>• Include date and brief description of the event</p>
              <p>• Ensure you have permission to share photos of individuals</p>
              <p>• Submit via email or bring digital files to the church office</p>
            </div>
            
            <div className="mt-6 space-y-4">
              <a 
                href="mailto:photos@holyresurrectiontucson.org" 
                className="inline-block bg-cream text-blue font-body px-8 py-3 rounded hover:bg-cream/90 transition-colors"
              >
                Submit Photos by Email
              </a>
              <p className="font-body text-cream/80 text-sm">
                Or contact the church office: (520) 622-2265
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}