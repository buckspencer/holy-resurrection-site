export function About() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-4xl text-primary text-center mb-12">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Holy Resurrection Antiochian Orthodox Church is a welcoming community of faith 
            in the heart of Tucson, Arizona. We are part of the Antiochian Orthodox Christian 
            Archdiocese of North America.
          </p>
          
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The Antiochian Archdiocese traces its roots to the Church of Antioch, where the 
            followers of Christ were first called Christians (Acts 11:26). We maintain the 
            apostolic faith, worship, and practice of the ancient Church.
          </p>

          <h2 className="font-heading text-2xl text-primary mt-12 mb-6">Our Mission</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            To proclaim and live the Orthodox Christian Faith, nurturing the spiritual growth 
            of our members while welcoming all who seek to know Christ through His Church.
          </p>

          <h2 className="font-heading text-2xl text-primary mt-12 mb-6">Service Times</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-3 font-body text-gray-700">
              <p><strong>Sunday Orthros:</strong> 8:30 AM</p>
              <p><strong>Sunday Divine Liturgy:</strong> 9:30 AM</p>
              <p><strong>Wednesday Vespers:</strong> 6:00 PM</p>
            </div>
          </div>

          <h2 className="font-heading text-2xl text-primary mt-12 mb-6">Location</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="font-body text-gray-700">
              [Church Address]<br />
              Tucson, Arizona [ZIP]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
