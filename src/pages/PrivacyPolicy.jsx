import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div
        id="particles-js"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="relative z-10">
        <Navigation />

        <main className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/"
                className="text-sm text-purple-400 hover:text-purple-300 mb-6 inline-block"
              >
                ← Back to Portfolio
              </Link>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: "var(--primary-green)" }}
              >
                Privacy Policy
              </h1>
              <p className="text-gray-400">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-gray-300">
              {/* Introduction */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Introduction
                </h2>
                <p>
                  Welcome to my portfolio website. I am committed to protecting
                  your privacy and ensuring you have a positive experience on my
                  site. This Privacy Policy explains how I collect, use,
                  disclose, and safeguard your information when you visit my
                  website.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Information I Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "var(--primary-green)" }}
                    >
                      Information You Provide Voluntarily
                    </h3>
                    <p>
                      When you contact me through the contact form on my
                      website, I collect information such as your name, email
                      address, phone number, and message content. This
                      information is used solely to respond to your inquiry.
                    </p>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "var(--primary-green)" }}
                    >
                      Automatically Collected Information
                    </h3>
                    <p>
                      When you visit my portfolio, my web server automatically
                      logs certain information including:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Your IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on each page</li>
                      <li>Referrer information</li>
                      <li>Device information</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Use of Information */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  How I Use Your Information
                </h2>
                <p className="mb-3">
                  I use the information I collect in the following ways:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>To respond to your inquiries and provide support</li>
                  <li>
                    To improve and optimize my website and user experience
                  </li>
                  <li>
                    To monitor and analyze website performance and traffic
                  </li>
                  <li>To detect and prevent technical issues and fraud</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Cookies and Tracking Technologies
                </h2>
                <p className="mb-3">
                  My website may use cookies and similar tracking technologies
                  to enhance your experience. Cookies are small files stored on
                  your device that help me remember your preferences and improve
                  site functionality.
                </p>
                <p>
                  You can control cookie settings through your browser
                  preferences. However, disabling cookies may affect your
                  ability to use certain features of my website.
                </p>
              </section>

              {/* Third-Party Services */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Third-Party Services
                </h2>
                <p className="mb-3">
                  My website may use third-party services for analytics,
                  hosting, and other functions. These may include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Google Analytics for website traffic analysis</li>
                  <li>Email service providers for contact form submissions</li>
                  <li>Web hosting providers</li>
                  <li>Content delivery networks</li>
                </ul>
                <p className="mt-3">
                  These third parties have their own privacy policies and are
                  responsible for their use of your data according to their
                  policies.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Data Security
                </h2>
                <p>
                  I implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the Internet is 100% secure. While
                  I strive to protect your personal information, I cannot
                  guarantee absolute security.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Your Rights and Choices
                </h2>
                <p className="mb-3">
                  Depending on your location, you may have certain rights
                  regarding your personal information:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to opt-out of communications</li>
                  <li>The right to restrict processing of your data</li>
                </ul>
              </section>

              {/* GDPR and Compliance */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  GDPR and Regional Compliance
                </h2>
                <p>
                  If you are located in the European Union or other regions with
                  data protection regulations, I comply with applicable laws
                  including the General Data Protection Regulation (GDPR). You
                  have the right to withdraw consent at any time for any
                  processing activities that rely on your consent.
                </p>
              </section>

              {/* Retention */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Data Retention
                </h2>
                <p>
                  I retain your personal information only for as long as
                  necessary to fulfill the purposes for which it was collected
                  or as required by law. Once the purpose is fulfilled, your
                  data will be securely deleted or anonymized.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Children's Privacy
                </h2>
                <p>
                  My website is not directed to children under the age of 13. I
                  do not knowingly collect personal information from children
                  under 13. If I become aware that I have collected personal
                  information from a child under 13, I will take steps to delete
                  such information promptly.
                </p>
              </section>

              {/* Updates to Policy */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Updates to This Privacy Policy
                </h2>
                <p>
                  I may update this Privacy Policy from time to time to reflect
                  changes in my practices, technology, legal requirements, or
                  other factors. I will notify you of any material changes by
                  updating the "Last updated" date at the top of this policy.
                  Your continued use of the website following the posting of
                  changes constitutes your acceptance of those changes.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Contact Me
                </h2>
                <p>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or my privacy practices, please contact me
                  through the contact form on my website or reach out via email.
                  I will respond to your inquiry within a reasonable timeframe.
                </p>
              </section>

              {/* Disclaimer */}
              <section>
                <p className="text-sm text-gray-500 pt-8 border-t border-gray-700">
                  This privacy policy is provided for informational purposes. It
                  reflects general privacy practices and is not a guarantee of
                  specific privacy protection. Users are encouraged to review
                  this policy regularly for updates.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
