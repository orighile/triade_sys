import { Button } from "@/components/ui/button";
import triadelogo from "@/assets/triade-logo.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-[var(--glass-bg)] backdrop-blur-md sticky top-0 z-50 border-b border-[var(--glass-border)]">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={triadelogo} 
              alt="Triade Systems logo" 
              className="h-20 w-20 transition-transform group-hover:scale-110" 
            />
            <span className="font-bold tracking-wider text-white text-lg">TRIADE SYSTEMS</span>
          </a>
          <Button variant="hero" asChild>
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
          <p className="text-sm text-slate-400">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              Triade Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance user experience and analyze website traffic.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Responding to inquiries and customer support requests</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information. We may share your information with trusted third-party service providers who assist us in operating our business, subject to confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: <a href="mailto:privacy@triadesys.com" className="text-accent hover:underline">privacy@triadesys.com</a>
              <br />
              Phone: 737-259-8686
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
