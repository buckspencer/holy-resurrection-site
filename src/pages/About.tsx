import { TextImageSection } from '../components/TextImageSection'
import { HistorySection } from '../components/HistorySection'
import { FullWidthImage } from '../components/FullWidthImage'

export function About() {
  return (
    <div>
      {/* Hero Banner - Full Width */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-16 md:-mt-20">
        <img 
          src="/about-hero.png" 
          alt="About Us Hero" 
          className="w-full h-56 md:h-64 object-cover object-top"
        />
      </div>

      {/* Our Vision Section */}
      <TextImageSection
        title="Our Vision"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        ]}
        imageSrc="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop"
        imageAlt="Church Interior with Candles"
        backgroundColor="cream"
        imagePosition="right"
        titleColor="rust"
        textColor="rust"
        titleInTextColumn={true}
        halfImage={true}
      />

      {/* Iconostasis Image Section */}
      <FullWidthImage
        src="/banner-iconostasis.png"
        alt="Holy Resurrection Iconostasis"
        height="large"
      />

      {/* Holy Resurrection's History Section */}
      <HistorySection
        title="Holy Resurrection's History"
        firstParagraph="The journey of Holy Resurrection Antiochian Orthodox Church has been a very long and arduous one, beginning with its inception as a mission in Tucson, AZ in 1980, with Father David Russ, and the help of several Antiochian families already residing in Tucson. In 1981, His Grace Bishop Antoun assigned Fr. Andrew Kish to the newly established St. George Antiochian Orthodox Church in Phoenix. Fulfilling the need for an English-speaking Orthodox Church with approximately 75 Orthodox Christians in attendance, the inaugural service was held in the Chapel of the Arizona Seminary at 5651, Palo Alto."
        secondParagraph="For the next few months, Deacon Andrew Kish commuted from Glendale, Arizona to help the newly formed mission. In the summer of 1981, the Kish family moved to Tucson and Deacon Andrew was ordained to the Holy Priesthood on July 13, 1981, and was appointed as the first Pastor of HRAOC. As attendance grew over the next few months, services were moved from the Chapel of the Arizona Seminary to the rental hall of Stone Stables Church and our search for a new and more permanent home hall in the chapel of the Arizona Seminary a Story began."
        image1Src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        image1Alt="Church History - Early Days"
        image2Src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        image2Alt="Church History - Community Growth"
        buttonText="Read More"
        backgroundColor="cream"
        titleColor="rust"
        textColor="rust"
        buttonStyle="primary"
      />

      {/* Our Leadership Section */}
      <section className="py-16 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-cream mb-6 uppercase tracking-wide">Our Leadership</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop" 
                alt="Fr. Gabriel Portrait" 
                className="w-80 h-96 mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            
            <div>
              <div className="font-body text-cream leading-relaxed space-y-4 text-base">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
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
              
              <div className="mt-8">
                <button className="bg-green text-cream font-body px-8 py-3 text-sm uppercase tracking-wide hover:bg-green/90 transition-colors rounded">
                  Meet our Clergy
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
            <h2 className="font-heading text-4xl text-rust mb-6 uppercase tracking-wide">Our Ministries</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="font-body text-rust leading-relaxed space-y-4 text-base">
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
              
              <div className="mt-8">
                <button className="bg-green text-cream font-body px-8 py-3 text-sm uppercase tracking-wide hover:bg-green/90 transition-colors rounded">
                  Get Involved
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop" 
                alt="Church Ministries - Community Gathering" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
