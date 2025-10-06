import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import triadelogo from "@/assets/triade-logo.png";
import techBackground from "@/assets/tech-background.jpg";

export default function Index() {
  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center text-foreground"
      style={{ 
        backgroundImage: `linear-gradient(rgba(11, 20, 36, 0.92), rgba(11, 20, 36, 0.88)), url(${techBackground})` 
      }}
    >
      {/* Header */}
      <header className="bg-[var(--glass-bg)] backdrop-blur-md sticky top-0 z-50 border-b border-[var(--glass-border)]">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={triadelogo} 
              alt="Triade Systems logo" 
              className="h-10 w-10 rounded-md transition-transform group-hover:scale-110" 
            />
            <span className="font-bold tracking-wider text-white text-lg">TRIADE SYSTEMS</span>
          </a>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-slate-200 hover:text-accent transition-colors font-medium">About</a>
            <a href="#services" className="text-slate-200 hover:text-accent transition-colors font-medium">Services</a>
            <a href="#clients" className="text-slate-200 hover:text-accent transition-colors font-medium">Clients</a>
            <a href="#contact" className="text-slate-200 hover:text-accent transition-colors font-medium">Contact</a>
            <Button variant="hero" asChild>
              <a href="#quote">Get a Quote</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="py-32 text-center px-6">
        <img 
          src={triadelogo} 
          alt="Triade Logo" 
          className="mx-auto h-28 w-28 mb-8 animate-pulse" 
          style={{ filter: 'drop-shadow(0 0 30px rgba(45, 139, 95, 0.5))' }}
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Modern IT Consulting,<br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cybersecurity & AI Automation
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-300 text-lg mb-10 leading-relaxed">
          We help organizations modernize, secure, and automate operations with predictable delivery and compliance excellence.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="#quote">Start Your Project</a>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-transparent to-[var(--glass-bg)]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">About Triade Systems</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Triade Systems provides end-to-end IT consulting, cybersecurity compliance, and AI automation solutions across public and private sectors. With a nationwide network of over 35 technicians, we deliver architecture modernization, SOC 2 and ISO readiness, and AI workflow integrations.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Our Core Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="IT Consulting" 
              desc="Strategy, roadmaps, and solution architecture for modernization and growth." 
              points={[
                "Technology assessments and roadmaps",
                "Cloud/On‑prem architecture & migrations",
                "Network design, site turn‑ups, branch transformations"
              ]} 
            />
            <ServiceCard 
              title="Cybersecurity Compliance" 
              desc="SOC 2, ISO 27001, HIPAA, PCI DSS, FedRAMP readiness & audits." 
              points={[
                "Gap assessments and audit support",
                "Control design and remediation plans",
                "Continuous compliance dashboards"
              ]} 
            />
            <ServiceCard 
              title="AI Automation" 
              desc="Agents, chatbots, RPA, and integrations." 
              points={[
                "Workflow automation",
                "Data pipelines",
                "Custom chatbot development"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Clients & Contracts */}
      <section id="clients" className="py-24 bg-gradient-to-b from-[var(--glass-bg)] to-transparent px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Clients & Contracts</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Our team has supported contract vehicles across state, local, and federal agencies, ensuring SLA-backed performance, documentation-first delivery, and secure-by-design integrations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="text-accent text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold text-lg mb-2">Agile Mobilization</h3>
              <p className="text-slate-300">Predictable delivery timelines</p>
            </div>
            <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="text-accent text-3xl mb-3">📋</div>
              <h3 className="text-white font-semibold text-lg mb-2">Documentation-First</h3>
              <p className="text-slate-300">SLA-driven execution</p>
            </div>
            <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="text-accent text-3xl mb-3">🔒</div>
              <h3 className="text-white font-semibold text-lg mb-2">Secure by Design</h3>
              <p className="text-slate-300">Integrated security from day one</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get a Quote Section */}
      <section id="quote" className="py-24 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-10 rounded-3xl shadow-[var(--shadow-card)]">
            <h2 className="text-3xl font-bold mb-6 text-white">Begin Your Digital Transformation</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First Name" required />
                <Field label="Last Name" required />
                <Field label="Work Email" type="email" required />
                <Field label="Phone Number" type="tel" required />
                <Field label="Company Size" />
                <Field label="Budget" />
              </div>
              <div>
                <Label className="text-sm text-slate-200">How can we help?</Label>
                <Textarea 
                  className="mt-2 bg-card/30 border-border text-white placeholder:text-slate-400 rounded-xl" 
                  rows={4} 
                  placeholder="Tell us about your IT challenges or goals..." 
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-md border border-[var(--glass-border)] p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-8 text-white">
              Powering Growth with<br />
              Purpose-Built Solutions
            </h3>
            <ul className="space-y-4 text-slate-200 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span><strong className="text-white">Built Around You</strong> – Tailored to your goals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span><strong className="text-white">Security at the Core</strong> – Enterprise-grade compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span><strong className="text-white">Global Delivery</strong> – Proven success in 20+ industries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span><strong className="text-white">Innovation That Delivers</strong> – Future-ready technology</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-[var(--glass-bg)] px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Triade Headquarters</h3>
            <div className="space-y-4 text-slate-300 text-lg">
              <p className="flex items-start gap-3">
                <span className="text-accent">📍</span>
                <span>5900 Balcones Drive STE 100<br />Austin, TX 78731, USA</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-accent">📞</span>
                <span>737-259-8686</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-accent">✉️</span>
                <span>sales@triadesys.com</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-accent">💬</span>
                <span>support@triadesys.com</span>
              </p>
            </div>
            <Button variant="hero" size="lg" className="mt-8">
              Contact Us
            </Button>
          </div>

          <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Submit Your Inquiry</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First Name" required />
                <Field label="Last Name" required />
                <Field label="Work Email" type="email" required />
                <Field label="Phone Number" type="tel" required />
                <div className="sm:col-span-2">
                  <Field label="Company Name" required />
                </div>
              </div>
              <div>
                <Label className="text-sm text-slate-200">Message</Label>
                <Textarea 
                  rows={4} 
                  className="mt-2 bg-card/30 border-border text-white placeholder:text-slate-400 rounded-xl" 
                  placeholder="Enter details about your inquiry..." 
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--glass-border)] py-8 text-center text-slate-400 bg-[var(--glass-bg)] backdrop-blur-md">
        <img 
          src={triadelogo} 
          alt="Triade Footer Logo" 
          className="h-10 w-10 mx-auto mb-4 opacity-80" 
        />
        <p className="text-sm">© {new Date().getFullYear()} Triade Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label className="text-sm text-slate-200">{label}</Label>
      <Input 
        required={required} 
        type={type} 
        className="mt-2 bg-card/30 border-border text-white placeholder:text-slate-400 rounded-xl focus:ring-primary" 
      />
    </div>
  );
}

function ServiceCard({ title, desc, points }: { title: string; desc: string; points: string[] }) {
  return (
    <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-8 rounded-3xl shadow-[var(--shadow-card)] hover:scale-105 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 mb-6 leading-relaxed">{desc}</p>
      <ul className="space-y-3 text-slate-300">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-accent mt-1">→</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
