import { Button } from "@/components/ui/button";
import triadelogo from "@/assets/triade-logo.png";

export default function CookiePolicy() {
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
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
          <p className="text-sm text-slate-400">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-white mt-4">Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve how our website works.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">Functionality Cookies</h3>
            <p>
              These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, personalized features.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors interact with our website by collecting and reporting information anonymously.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Third-Party Cookies</h2>
            <p>
              We may use third-party services such as Google Analytics that also set cookies on your device. These third parties have their own privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most browsers allow you to refuse or accept cookies through their settings</li>
              <li>You can delete cookies that have already been set</li>
              <li>You can set your browser to notify you when you receive a cookie</li>
            </ul>
            <p className="mt-4">
              Please note that disabling cookies may impact your experience on our website and limit the functionality available to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Cookie Duration</h2>
            <p>
              Cookies may be session cookies (deleted when you close your browser) or persistent cookies (remain on your device for a set period or until you delete them).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us:
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
