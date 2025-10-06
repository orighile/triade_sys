import { Button } from "@/components/ui/button";
import triadelogo from "@/assets/triade-logo.png";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-foreground/90">
          <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Triade Systems' website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Services</h2>
            <p>
              Triade Systems provides IT consulting, cybersecurity, artificial intelligence solutions, and managed IT services. The specific terms of each engagement will be outlined in separate service agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on our website are owned by Triade Systems or our licensors. You may not use, reproduce, or distribute our content without prior written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>
              Triade Systems shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of our business relationship.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact:
              <br />
              Email: <a href="mailto:legal@triadesys.com" className="text-accent hover:underline">legal@triadesys.com</a>
              <br />
              Phone: 737-259-8686
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
