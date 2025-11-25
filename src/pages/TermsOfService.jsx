import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
                Terms of Service
              </h1>
              <p className="text-gray-400">
                Effective date:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing or using this website ("Site"), you agree to be
                  bound by these Terms of Service ("Terms"). If you do not agree
                  to these Terms, please do not use the Site.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Use of the Site
                </h2>
                <p>
                  You may use the Site for lawful purposes only. You agree not
                  to use the Site in any way that violates applicable laws,
                  infringes the rights of others, or interferes with the
                  operation of the Site.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Intellectual Property
                </h2>
                <p>
                  All content on the Site, including text, images, code, and
                  design, is the property of the site owner or its licensors and
                  is protected by copyright and other intellectual property
                  laws. You may not reproduce, distribute, modify, or create
                  derivative works without prior written permission.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  User Content
                </h2>
                <p>
                  If you submit content through the contact form or other means
                  ("User Content"), you grant the site owner a non-exclusive,
                  royalty-free, worldwide license to use, reproduce, adapt,
                  publish, and display that content for the purposes of
                  operating and improving the Site and responding to inquiries.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Prohibited Conduct
                </h2>
                <p>
                  You agree not to engage in prohibited activities, including
                  but not limited to: uploading malicious content, attempting to
                  breach Site security, harvesting personal data, or sending
                  unsolicited communications through the Site.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Links to Third-Party Sites
                </h2>
                <p>
                  The Site may contain links to third-party websites. These
                  links are provided for convenience and do not imply
                  endorsement. The site owner is not responsible for the content
                  or practices of third-party sites.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Disclaimers
                </h2>
                <p>
                  The Site is provided "as is" without warranties of any kind,
                  either express or implied, including but not limited to
                  merchantability, fitness for a particular purpose, or
                  non-infringement.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, the site owner will
                  not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of your access
                  to or use of the Site.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless the site owner from
                  any claims, losses, liabilities, and expenses arising from
                  your use of the Site or violation of these Terms.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Termination
                </h2>
                <p>
                  The site owner may suspend or terminate access to the Site at
                  any time for any reason, including violation of these Terms.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Governing Law
                </h2>
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of the jurisdiction where the site owner is located,
                  without regard to conflict of law provisions.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Changes to Terms
                </h2>
                <p>
                  The site owner may modify these Terms from time to time.
                  Continued use of the Site after changes are posted constitutes
                  acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Contact
                </h2>
                <p>
                  If you have questions about these Terms, please contact me via
                  the contact form on the Site or by email.
                </p>
              </section>

              <section>
                <p className="text-sm text-gray-500 pt-8 border-t border-gray-700">
                  This Terms of Service is provided for informational purposes
                  and does not constitute legal advice. For legal questions,
                  consult a qualified attorney.
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
