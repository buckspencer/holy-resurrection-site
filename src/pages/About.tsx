export function About() {
  return (
    <div>

      {/* Our Vision Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl text-rust mb-6 uppercase tracking-wide">Our Vision</h2>
              <div className="font-body text-rust leading-relaxed space-y-4 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
                  omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                  architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                  sit amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/about-vision-1.jpg" 
                alt="Church Interior 1" 
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="/about-vision-2.jpg" 
                alt="Church Interior 2" 
                className="w-full h-32 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Iconostasis Image Section */}
      <section className="py-0">
        <div className="w-full">
          <img 
            src="/iconostasis-full.jpg" 
            alt="Holy Resurrection Iconostasis" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Holy Resurrection's History Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl text-rust mb-6 uppercase tracking-wide">Holy Resurrection's History</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="font-body text-rust leading-relaxed space-y-4 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
                  omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                  architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                  sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/history-photo-1.jpg" 
                alt="Church History 1" 
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="/history-photo-2.jpg" 
                alt="Church History 2" 
                className="w-full h-32 object-cover rounded"
              />
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-rust text-cream font-body px-6 py-2 text-sm uppercase tracking-wide hover:bg-rust/90 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-16 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl text-cream mb-6 uppercase tracking-wide">Our Leadership</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="text-center">
              <img 
                src="/father-gabriel-portrait-framed.jpg" 
                alt="Fr. Gabriel Portrait" 
                className="w-64 h-auto mx-auto rounded shadow-lg"
              />
            </div>
            
            <div>
              <div className="font-body text-cream leading-relaxed space-y-4 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
                  omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                  architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                  sequi nesciunt.
                </p>
              </div>
              
              <div className="mt-6">
                <button className="bg-cream text-rust font-body px-6 py-2 text-sm uppercase tracking-wide hover:bg-cream/90 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ministries Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl text-rust mb-6 uppercase tracking-wide">Our Ministries</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="font-body text-rust leading-relaxed space-y-4 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
                  omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
              </div>
              
              <div className="mt-6">
                <button className="bg-rust text-cream font-body px-6 py-2 text-sm uppercase tracking-wide hover:bg-rust/90 transition-colors">
                  Read More
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="/ministries-photo.jpg" 
                alt="Church Ministries" 
                className="w-full max-w-md mx-auto rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
