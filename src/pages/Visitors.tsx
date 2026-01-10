export function Visitors() {
  return (
    <div>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl text-white mb-4">Our Vision</h1>
          <p className="font-body text-gray-200 max-w-2xl mx-auto">
            To be a beacon of Orthodox Christianity in Tucson, nurturing souls in the ancient faith 
            while serving our community with love and compassion.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">Our History</h2>
              <p className="font-body text-gray-700 leading-relaxed mb-4">
                Holy Resurrection Antiochian Orthodox Church was established to bring the ancient 
                Christian faith to the people of Tucson. Our parish is part of the Antiochian Orthodox 
                Christian Archdiocese of North America.
              </p>
              <p className="font-body text-gray-700 leading-relaxed">
                The Antiochian Archdiocese traces its roots to the Church of Antioch, where the followers 
                of Christ were first called Christians (Acts 11:26). We maintain the apostolic faith, 
                worship, and practice of the ancient Church.
              </p>
            </div>
            <div className="bg-primary/10 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500 font-body">Parish Photo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-primary text-center mb-12">Our Ministries</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Religious Education',
                description: 'Sunday School classes for children and adult education programs.',
              },
              {
                title: 'Youth Ministry',
                description: 'Programs for teens to grow in faith and fellowship together.',
              },
              {
                title: 'Outreach',
                description: 'Serving our community through charitable works and hospitality.',
              },
              {
                title: 'Choir',
                description: 'Leading the congregation in beautiful Byzantine chant.',
              },
              {
                title: 'Antiochian Women',
                description: 'Fellowship and service opportunities for women of the parish.',
              },
              {
                title: 'Men\'s Fellowship',
                description: 'Brotherhood and spiritual growth for men of all ages.',
              },
            ].map((ministry) => (
              <div key={ministry.title} className="bg-cream rounded-lg p-6">
                <h3 className="font-heading text-xl text-primary mb-3">{ministry.title}</h3>
                <p className="font-body text-gray-700 text-sm">{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-primary text-center mb-12">Our Leadership</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500 font-body text-sm">Photo</span>
              </div>
              <h3 className="font-heading text-xl text-primary mb-2">Fr. Pastor Name</h3>
              <p className="font-body text-secondary mb-4">Parish Priest</p>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                Father has served Holy Resurrection since [year]. He received his theological 
                education at [seminary] and was ordained in [year].
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-primary mb-6">What to Expect</h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-700 leading-relaxed mb-8">
              Orthodox worship is rich, ancient, and deeply meaningful. Services are primarily sung, 
              with beautiful iconography and incense that engage all the senses. Don't worry if you 
              don't know what to do—just come, observe, and let the worship wash over you.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-heading text-lg text-primary mb-3">Service Length</h3>
                <p className="font-body text-gray-700 text-sm">
                  Divine Liturgy typically lasts about 90 minutes. Feel free to step out if you need a break.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-heading text-lg text-primary mb-3">Dress Code</h3>
                <p className="font-body text-gray-700 text-sm">
                  Come as you are. Business casual is common, but the most important thing is that you come.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-heading text-lg text-primary mb-3">Children Welcome</h3>
                <p className="font-body text-gray-700 text-sm">
                  Children are an important part of our community. Don't worry about noise—they belong here.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-heading text-lg text-primary mb-3">After Service</h3>
                <p className="font-body text-gray-700 text-sm">
                  Join us for coffee hour after Liturgy. It's a great time to meet parishioners and ask questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
