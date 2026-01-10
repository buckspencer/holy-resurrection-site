export function Privacy() {
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
            Privacy Policy
          </h1>
          <p className="font-body text-xl text-cream/90 max-w-3xl mx-auto">
            How we protect and use your personal information at Holy Resurrection Antiochian Orthodox Church.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-8 p-6 bg-blue/5 rounded-lg">
                <p className="font-body text-rust mb-0">
                  <strong>Effective Date:</strong> January 1, 2025<br />
                  <strong>Last Updated:</strong> January 1, 2025
                </p>
              </div>

              <h2 className="font-heading text-2xl text-red mb-4">Our Commitment to Your Privacy</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                Holy Resurrection Antiochian Orthodox Church ("we," "our," or "the Church") is committed to 
                protecting your privacy and maintaining the confidentiality of your personal information. 
                This Privacy Policy explains how we collect, use, and protect your information when you 
                visit our website, attend our services, or participate in our parish activities.
              </p>

              <h2 className="font-heading text-2xl text-red mb-4">Information We Collect</h2>
              
              <h3 className="font-heading text-xl text-blue mb-3">Personal Information</h3>
              <p className="font-body text-rust leading-relaxed mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="font-body text-rust mb-6 space-y-2 list-disc pl-6">
                <li>Name, address, phone number, and email address</li>
                <li>Emergency contact information</li>
                <li>Information about your family members and dependents</li>
                <li>Donation and stewardship information</li>
                <li>Participation in parish activities and ministries</li>
                <li>Sacramental records (baptism, chrismation, marriage)</li>
              </ul>

              <h3 className="font-heading text-xl text-blue mb-3">Website Information</h3>
              <p className="font-body text-rust leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="font-body text-rust mb-6 space-y-2 list-disc pl-6">
                <li>Your IP address and browser information</li>
                <li>Pages you visit on our website</li>
                <li>Time and date of your visit</li>
                <li>Referring website information</li>
              </ul>

              <h2 className="font-heading text-2xl text-red mb-4">How We Use Your Information</h2>
              <p className="font-body text-rust leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="font-body text-rust mb-6 space-y-2 list-disc pl-6">
                <li>Parish administration and communication</li>
                <li>Pastoral care and spiritual guidance</li>
                <li>Event planning and ministry coordination</li>
                <li>Processing donations and maintaining stewardship records</li>
                <li>Emergency contact and safety purposes</li>
                <li>Compliance with canonical and legal requirements</li>
                <li>Preserving historical parish records</li>
              </ul>

              <h2 className="font-heading text-2xl text-red mb-4">Information Sharing</h2>
              <p className="font-body text-rust leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following limited circumstances:
              </p>
              <ul className="font-body text-rust mb-6 space-y-2 list-disc pl-6">
                <li>With the Antiochian Orthodox Christian Archdiocese of North America for canonical purposes</li>
                <li>With service providers who assist in our operations (email services, donation processing)</li>
                <li>When required by law or to protect the safety of individuals</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>

              <h2 className="font-heading text-2xl text-red mb-4">Data Security</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                We implement appropriate physical, electronic, and administrative safeguards to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="font-heading text-2xl text-red mb-4">Retention of Information</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this policy or as required by law. Sacramental records are maintained 
                permanently as part of our canonical obligations and historical preservation.
              </p>

              <h2 className="font-heading text-2xl text-red mb-4">Your Rights</h2>
              <p className="font-body text-rust leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="font-body text-rust mb-6 space-y-2 list-disc pl-6">
                <li>Access your personal information we maintain</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request removal from non-essential communications</li>
                <li>Withdraw consent for specific uses of your information</li>
                <li>Request information about how your data is used</li>
              </ul>

              <h2 className="font-heading text-2xl text-red mb-4">Cookies and Website Tracking</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                Our website may use cookies to enhance your browsing experience. You can configure 
                your browser to refuse cookies, though this may limit some website functionality. 
                We do not use tracking technologies for advertising or commercial purposes.
              </p>

              <h2 className="font-heading text-2xl text-red mb-4">Children's Privacy</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                We collect information about children only with parental consent and for legitimate 
                pastoral and educational purposes. Parents may review and request changes to their 
                child's information at any time.
              </p>

              <h2 className="font-heading text-2xl text-red mb-4">Changes to This Policy</h2>
              <p className="font-body text-rust leading-relaxed mb-6">
                We may update this Privacy Policy periodically. We will notify you of significant 
                changes through our website, email, or parish announcements. Your continued 
                participation in parish life constitutes acceptance of any changes.
              </p>

              <h2 className="font-heading text-2xl text-red mb-4">Contact Information</h2>
              <p className="font-body text-rust leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights 
                regarding your personal information, please contact us:
              </p>
              
              <div className="bg-blue/5 rounded-lg p-6">
                <p className="font-body text-rust">
                  <strong>Holy Resurrection Antiochian Orthodox Church</strong><br />
                  5910 E. 5th Street<br />
                  Tucson, Arizona 85711<br />
                  Phone: (520) 622-2265<br />
                  Email: info@holyresurrectiontucson.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}