export function SundaySchool() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green/90 to-blue/90"></div>
        
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-rust">
          <div className="h-full bg-repeat-x bg-center" 
               style={{ backgroundImage: "url('/ornament-border.svg')" }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-cream mb-4">
            Sunday School
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            Nurturing young hearts in the Orthodox faith through engaging education and fellowship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl text-red mb-6">Growing in Faith Together</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                Our Sunday School program provides Orthodox Christian education for children 
                ages 3-18, helping them grow in knowledge and love of Christ. Through age-appropriate 
                lessons, crafts, and activities, we teach the stories of Scripture, the lives 
                of saints, and Orthodox traditions.
              </p>
              <p className="font-body text-rust leading-relaxed mb-6">
                Classes meet during the Divine Liturgy, beginning after the Gospel reading. 
                Our dedicated teachers create a warm, engaging environment where children 
                can ask questions and explore their faith in a supportive community.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading text-2xl text-blue mb-4">Class Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">When:</span>
                  <span className="font-body text-rust">Sundays during Liturgy</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Time:</span>
                  <span className="font-body text-rust">10:15 AM - 11:30 AM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Ages:</span>
                  <span className="font-body text-rust">3-18 years old</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-body font-semibold text-rust">Location:</span>
                  <span className="font-body text-rust">Parish Hall</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body font-semibold text-rust">Cost:</span>
                  <span className="font-body text-rust">Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Age Groups */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧒</span>
              </div>
              <h3 className="font-heading text-xl text-blue mb-3">Little Lambs</h3>
              <p className="font-body text-rust text-sm mb-3">Ages 3-6</p>
              <p className="font-body text-rust">
                Simple Bible stories, prayers, and crafts designed for our youngest learners.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👦</span>
              </div>
              <h3 className="font-heading text-xl text-green mb-3">Growing Disciples</h3>
              <p className="font-body text-rust text-sm mb-3">Ages 7-12</p>
              <p className="font-body text-rust">
                Orthodox doctrine, saints' lives, and Scripture study with interactive lessons.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🎓</span>
              </div>
              <h3 className="font-heading text-xl text-gold mb-3">Teen Ministry</h3>
              <p className="font-body text-rust text-sm mb-3">Ages 13-18</p>
              <p className="font-body text-rust">
                Deeper theological discussions, service projects, and leadership development.
              </p>
            </div>
          </div>

          {/* Curriculum Highlights */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">What We Learn</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📖", title: "Holy Scripture", desc: "Old and New Testament stories and teachings" },
                { icon: "⛪", title: "Church History", desc: "The story of the Orthodox Church through the ages" },
                { icon: "👑", title: "Lives of Saints", desc: "Inspiring examples of holy men and women" },
                { icon: "🕊️", title: "Orthodox Faith", desc: "Creeds, sacraments, and traditions" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-heading text-lg text-cream mb-2">{item.title}</h3>
                  <p className="font-body text-cream/90 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Events */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Special Events & Activities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-blue mb-4">Christmas Pageant</h3>
                <p className="font-body text-rust mb-4">
                  Our annual Christmas pageant brings the Nativity story to life with costumes, 
                  songs, and performances by all age groups.
                </p>
                <p className="font-body text-rust/80 text-sm">December - during the Christmas season</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-blue mb-4">Pascha Egg Hunt</h3>
                <p className="font-body text-rust mb-4">
                  Celebrating the Resurrection with a joyful egg hunt and activities 
                  for children of all ages.
                </p>
                <p className="font-body text-rust/80 text-sm">Easter Sunday - after Divine Liturgy</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-blue mb-4">Saints Day Celebrations</h3>
                <p className="font-body text-rust mb-4">
                  Special lessons and activities marking important feast days and 
                  commemorating beloved Orthodox saints.
                </p>
                <p className="font-body text-rust/80 text-sm">Throughout the church year</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-heading text-xl text-blue mb-4">Service Projects</h3>
                <p className="font-body text-rust mb-4">
                  Teaching compassion through hands-on service opportunities 
                  for local charities and community needs.
                </p>
                <p className="font-body text-rust/80 text-sm">Monthly service opportunities</p>
              </div>
            </div>
          </div>

          {/* Contact & Registration */}
          <div className="bg-green/10 rounded-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-green mb-6">Join Our Sunday School Family</h2>
            <p className="font-body text-rust text-lg mb-8 max-w-3xl mx-auto">
              New students are always welcome! No prior Orthodox knowledge is required. 
              Simply bring your child on Sunday morning and we'll get them connected 
              with their age-appropriate class.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-green text-cream font-body px-8 py-3 rounded hover:bg-green/90 transition-colors"
              >
                Contact Sunday School Director
              </a>
              <a 
                href="mailto:sundayschool@holyresurrectiontucson.org" 
                className="inline-block border border-green text-green font-body px-8 py-3 rounded hover:bg-green hover:text-cream transition-colors"
              >
                Email Questions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}