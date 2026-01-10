export function Home() {
  return (
    <div>
      <section className="relative bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Rooted in Tradition, Alive in Christ
          </h1>
          <p className="font-body text-lg text-gray-200 max-w-2xl mx-auto">
            Tucson, Arizona
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[url('/ornament.svg')] bg-repeat-x opacity-50"></div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-primary text-center mb-8">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-700 leading-relaxed text-center">
              Holy Resurrection Antiochian Orthodox Church is a welcoming community of faith in the heart of Tucson. 
              We are part of the Antiochian Orthodox Christian Archdiocese of North America, tracing our roots 
              back to the ancient Christian community of Antioch where the disciples were first called Christians.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-primary text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Service Times', icon: '⏰' },
              { title: 'Directions', icon: '📍' },
              { title: 'Live Stream', icon: '📺' },
              { title: 'Donate', icon: '💝' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-heading text-lg text-primary">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-primary text-center mb-8">Join Us Online</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-body text-gray-700 mb-6">
              Can't make it in person? Join us for our live-streamed services every Sunday.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-white font-body px-8 py-3 rounded hover:bg-primary-dark transition-colors"
            >
              Watch Live
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-primary text-center mb-8">Visitors Welcome</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Whether you're exploring Orthodoxy for the first time or looking for a new parish home, 
              we invite you to come and see. Orthodox worship may be different from what you're used to, 
              and that's okay—we're here to help you along the way.
            </p>
            <a
              href="/visitors"
              className="inline-block bg-secondary text-primary font-body px-8 py-3 rounded hover:bg-secondary/90 transition-colors"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
