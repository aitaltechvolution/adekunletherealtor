import useScrollAnimation from "../hooks/useScrollAnimation";
import { COMPANY } from "../data/data";

export default function PolicyPage() {
  useScrollAnimation();
  const sections = [
    { title: "1. Information We Collect", body: "We collect personal information you provide when you fill out our contact form, call us, or interact with our listings. This includes your name, phone number, email address, and property preferences. We do not collect sensitive financial data through this website." },
    { title: "2. How We Use Your Information", body: "Your information is used solely to respond to your enquiries, provide property recommendations, and send relevant updates about listings. We will not use your data for any purpose beyond our real estate consultancy services without your explicit consent." },
    { title: "3. Data Sharing", body: "Samspring Global Shelters Limited does not sell, rent, or share your personal information with third parties except where required by Nigerian law or where necessary to complete a property transaction (e.g., with legal representatives or government agencies)." },
    { title: "4. Cookies", body: "Our website may use basic cookies to improve your browsing experience. These cookies do not collect personally identifiable information. You may disable cookies in your browser settings without affecting your ability to use this site." },
    { title: "5. Property Listings Accuracy", body: "We strive to ensure all property information, prices, and availability are accurate and up to date. However, properties may be sold or prices may change without prior notice. We recommend contacting us directly to confirm the current status of any listing." },
    { title: "6. Third-Party Links", body: "This website may contain links to third-party websites (e.g., social media). We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies independently." },
    { title: "7. Data Security", body: "We take reasonable steps to protect your personal information from unauthorized access, disclosure, or misuse. However, no internet transmission is completely secure. Please exercise caution when sharing sensitive details online." },
    { title: "8. Your Rights", body: "You have the right to request access to, correction of, or deletion of your personal data held by us. To exercise these rights, contact us at " + COMPANY.email + " or call " + COMPANY.phone + "." },
    { title: "9. Changes to This Policy", body: "We may update this policy from time to time. Any changes will be posted on this page. Continued use of our services after updates constitutes your acceptance of the revised policy." },
    { title: "10. Contact Us", body: `For questions about this Privacy Policy, reach us at: ${COMPANY.name}, ${COMPANY.address}. Email: ${COMPANY.email}. Phone: ${COMPANY.phone}.` },
  ];

  return (
    <div className="pt-16">
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-3 mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: May 2025</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <p className="text-gray-600 text-sm leading-relaxed animate-on-scroll">
            Samspring Global Shelters Limited ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website or services.
          </p>
          {sections.map((s, i) => (
            <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 60}ms` }}>
              <h2 className="font-display font-bold text-lg text-charcoal mb-2">{s.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
