export function FatherGabriel() {
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
            Father Gabriel Bilas
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            Pastor and Spiritual Father of Holy Resurrection Antiochian Orthodox Church
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Photo and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="w-48 h-48 bg-blue/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="/father-gabriel-portrait.jpg" 
                    alt="Father Gabriel Bilas"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h2 className="font-heading text-2xl text-blue text-center mb-4">Rev. Fr. Gabriel Bilas</h2>
                <div className="space-y-3 text-center">
                  <p className="font-body text-rust"><strong>Title:</strong> Pastor</p>
                  <p className="font-body text-rust"><strong>Ordained:</strong> 2008</p>
                  <p className="font-body text-rust"><strong>At HRAOC:</strong> Since 2015</p>
                  <p className="font-body text-rust"><strong>Education:</strong> St. Vladimir's Seminary</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue/10 rounded-lg p-6">
                <h3 className="font-heading text-lg text-blue mb-4 text-center">Pastoral Contact</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-body text-rust text-center">
                    <strong>Email:</strong> fr.gabriel@holyresurrectiontucson.org
                  </p>
                  <p className="font-body text-rust text-center">
                    <strong>Phone:</strong> (520) 622-2265 ext. 101
                  </p>
                  <p className="font-body text-rust text-center text-xs mt-4">
                    For pastoral emergencies, please call the main church line
                  </p>
                </div>
              </div>
            </div>

            {/* Main Biography Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-heading text-3xl text-red mb-6">About Father Gabriel</h2>
                
                <p className="font-body text-rust leading-relaxed mb-6">
                  Father Gabriel Bilas has served as the pastor of Holy Resurrection Antiochian Orthodox 
                  Church since 2015, bringing deep theological knowledge, compassionate pastoral care, 
                  and infectious enthusiasm for the Orthodox faith to our parish community. His ministry 
                  is characterized by accessible teaching, genuine care for each parishioner, and a 
                  commitment to making the ancient Orthodox tradition relevant to modern life.
                </p>

                <h3 className="font-heading text-2xl text-blue mb-4">Education & Formation</h3>
                <p className="font-body text-rust leading-relaxed mb-6">
                  Father Gabriel completed his theological education at St. Vladimir's Orthodox Theological 
                  Seminary in Yonkers, New York, earning his Master of Divinity degree in 2008. During 
                  his time at seminary, he developed a particular interest in patristic theology and 
                  pastoral counseling, studies that continue to inform his ministry today.
                </p>
                
                <p className="font-body text-rust leading-relaxed mb-6">
                  Prior to entering seminary, Father Gabriel earned his Bachelor's degree in History 
                  from the University of Arizona, where he first encountered the Orthodox Church through 
                  the campus ministry program. This educational background in both secular and theological 
                  studies gives him a unique perspective on faith in the modern world.
                </p>

                <h3 className="font-heading text-2xl text-blue mb-4">Pastoral Ministry</h3>
                <p className="font-body text-rust leading-relaxed mb-6">
                  Father Gabriel was ordained to the holy priesthood in 2008 and served his first 
                  assignment at St. Mary Antiochian Orthodox Church in Phoenix, Arizona, where he 
                  gained valuable experience in parish ministry under the mentorship of the venerable 
                  Fr. Michael Nasser. In 2015, he answered the call to serve as pastor of Holy Resurrection.
                </p>

                <p className="font-body text-rust leading-relaxed mb-6">
                  As our pastor, Father Gabriel celebrates the Divine Liturgy with reverence and joy, 
                  delivers homilies that connect Scripture and Tradition to daily life, and provides 
                  pastoral care to parishioners of all ages. He has a special gift for making newcomers 
                  feel welcome while nurturing the spiritual growth of longtime Orthodox Christians.
                </p>
              </div>
            </div>
          </div>

          {/* Ministry Focus Areas */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-red mb-8 text-center">Areas of Ministry Focus</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="font-heading text-xl text-blue text-center mb-3">Teaching & Preaching</h3>
                <p className="font-body text-rust text-center text-sm">
                  Making Orthodox theology accessible through engaging homilies and adult education classes
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-heading text-xl text-green text-center mb-3">Family Ministry</h3>
                <p className="font-body text-rust text-center text-sm">
                  Supporting families in their spiritual journey and Orthodox Christian parenting
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-heading text-xl text-gold text-center mb-3">Pastoral Care</h3>
                <p className="font-body text-rust text-center text-sm">
                  Providing spiritual guidance, counseling, and care during life's joys and challenges
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-rust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👋</span>
                </div>
                <h3 className="font-heading text-xl text-rust text-center mb-3">Evangelism</h3>
                <p className="font-body text-rust text-center text-sm">
                  Welcoming seekers and helping people discover the beauty of Orthodox Christianity
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-heading text-xl text-red text-center mb-3">Youth Ministry</h3>
                <p className="font-body text-rust text-center text-sm">
                  Mentoring young people and helping them develop a mature Orthodox faith
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-heading text-xl text-blue text-center mb-3">Community Outreach</h3>
                <p className="font-body text-rust text-center text-sm">
                  Building relationships with other churches and serving the wider Tucson community
                </p>
              </div>
            </div>
          </div>

          {/* Personal Life */}
          <div className="bg-green/10 rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-green mb-6 text-center">Personal Life & Interests</h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-body text-rust leading-relaxed mb-6">
                Father Gabriel is married to Presbytera (Khouria) Maria Bilas, who serves as an active 
                partner in ministry and contributes significantly to the life of our parish. Together, 
                they have three children: Michael (16), Sofia (13), and Daniel (10), who are actively 
                involved in parish youth programs and serve as wonderful examples of Orthodox Christian 
                family life.
              </p>
              
              <p className="font-body text-rust leading-relaxed mb-6">
                When not engaged in pastoral duties, Father Gabriel enjoys hiking in the beautiful 
                Arizona mountains, reading patristic texts and modern Orthodox theology, and spending 
                time with his family. He has a particular love for the desert landscape and often 
                incorporates insights from desert spirituality into his teaching and pastoral care.
              </p>
              
              <p className="font-body text-rust leading-relaxed">
                Father Gabriel is known for his approachable demeanor, his genuine love for people, 
                and his ability to help others see the beauty and relevance of Orthodox Christianity. 
                Parishioners often comment on his gift for remembering personal details about their 
                lives and his availability during times of need.
              </p>
            </div>
          </div>

          {/* Schedule & Availability */}
          <div className="bg-blue rounded-lg p-8 mb-16">
            <h2 className="font-heading text-3xl text-cream mb-8 text-center">Pastoral Availability</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p className="font-body text-cream/90">Tuesday - Thursday: 9:00 AM - 3:00 PM</p>
                  <p className="font-body text-cream/90">Friday: 9:00 AM - 12:00 PM</p>
                  <p className="font-body text-cream/90">Sunday: After Divine Liturgy</p>
                  <p className="font-body text-cream/80 text-sm mt-4">
                    Appointments recommended but not required
                  </p>
                </div>
              </div>
              <div className="bg-cream/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-cream mb-4">Emergency Contact</h3>
                <div className="space-y-2">
                  <p className="font-body text-cream/90">For pastoral emergencies:</p>
                  <p className="font-body text-cream/90">Church: (520) 622-2265</p>
                  <p className="font-body text-cream/90">Available 24/7 for:</p>
                  <p className="font-body text-cream/80 text-sm">• Hospital visits • Last rites • Crisis counseling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message from Father Gabriel */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="font-heading text-3xl text-red mb-6">A Message from Father Gabriel</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-blue/20">"</div>
                <p className="font-quote text-2xl text-rust italic leading-relaxed relative z-10 mb-6">
                  It is my great joy and privilege to serve as your pastor. Whether you have been 
                  Orthodox your entire life or are just discovering our beautiful faith, I want 
                  you to know that you are loved, you are welcome, and you belong here. 
                </p>
                <p className="font-quote text-2xl text-rust italic leading-relaxed relative z-10">
                  My door is always open, and I am here to support you in your spiritual journey, 
                  celebrate your joys, and walk with you through life's challenges. Together, 
                  let us grow in the love and knowledge of our Lord Jesus Christ.
                </p>
                <div className="absolute -bottom-4 -right-4 text-6xl text-blue/20">"</div>
              </div>
              <p className="font-body text-rust/80 mt-8">— Father Gabriel Bilas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}