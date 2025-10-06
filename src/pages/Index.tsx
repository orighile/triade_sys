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
              className="h-20 w-20 rounded-md transition-transform group-hover:scale-110" 
            />
            <span className="font-bold tracking-wider text-white text-lg">TRIADE SYSTEMS</span>
          </a>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-slate-200 hover:text-accent transition-colors font-medium">About</a>
            <a href="#services" className="text-slate-200 hover:text-accent transition-colors font-medium">Services</a>
            <a href="#clients" className="text-slate-200 hover:text-accent transition-colors font-medium">Clients</a>
            
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
          Unlock enterprise value with customized IT solutions that align technology with business outcomes. Whether you're modernizing core systems, strengthening cybersecurity posture, or launching intelligent automation platforms, we guide your transformation journey every step of the way with predictable delivery and compliance excellence.
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
          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            Triade Systems is a trusted IT consulting partner for enterprises, delivering tailored technology solutions that accelerate digital transformation and business growth. With deep expertise in infrastructure modernization, cybersecurity compliance, and intelligent automation, we help organizations build secure, scalable, and high-impact digital systems.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
            From strategy to implementation, we cover the full technology spectrum—delivering architecture modernization, SOC 2 and ISO 27001 readiness, FedRAMP compliance support, and AI workflow integrations. Our integrated approach eliminates silos, accelerates results, and ensures seamless alignment across your digital ecosystem.
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
              desc="Strategic technology advisory and solution architecture designed to modernize infrastructure, optimize operations, and accelerate growth across cloud and on-premise environments." 
              points={[
                "Comprehensive technology assessments and multi-year roadmaps",
                "Cloud-native architecture design and hybrid cloud migrations",
                "Network infrastructure modernization, SD-WAN deployment, and branch office transformations",
                "Application modernization and legacy system upgrades"
              ]} 
            />
            <ServiceCard 
              title="Cybersecurity Compliance" 
              desc="End-to-end compliance readiness and audit support for SOC 2, ISO 27001, HIPAA, PCI DSS, and FedRAMP, with continuous monitoring and governance frameworks." 
              points={[
                "Comprehensive gap assessments and remediation planning",
                "Control design, documentation, and evidence collection",
                "Continuous compliance monitoring and real-time dashboards",
                "Risk management frameworks and security posture optimization"
              ]} 
            />
            <ServiceCard 
              title="AI Automation" 
              desc="Intelligent automation solutions powered by AI agents, machine learning, and robotic process automation to transform workflows and enhance operational efficiency." 
              points={[
                "AI-powered workflow automation and intelligent document processing",
                "Custom chatbot and virtual assistant development",
                "Data pipeline engineering and analytics integration",
                "GenAI integration for customer support and knowledge management"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Clients & Contracts */}
      <section id="clients" className="py-24 bg-gradient-to-b from-[var(--glass-bg)] to-transparent px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Contract Vehicles</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-center">
            Our team has successfully supported contract vehicles across state, local, and federal agencies nationwide. We deliver mission-critical technology solutions with SLA-backed performance, documentation-first execution, and secure-by-design integrations.
          </p>
          
          {/* Contract Vehicles List */}
          <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-8 md:p-10 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Active Contract Vehicles</h3>
            <div className="grid gap-4">
              <div className="bg-card/30 border border-border p-6 rounded-xl hover:border-accent/50 transition-colors">
                <a href="https://dir.texas.gov/contracts/dir-tso-4383" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors">
                  DIR-TSO-4383
                </a>
                <p className="text-slate-300 mt-2">Software Products and Services</p>
              </div>
              <div className="bg-card/30 border border-border p-6 rounded-xl hover:border-accent/50 transition-colors">
                <a href="https://dir.texas.gov/contracts/dir-cpo-4458" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors">
                  DIR-CPO-4458
                </a>
                <p className="text-slate-300 mt-2">Data Communication & Networking Equipment</p>
              </div>
              <div className="bg-card/30 border border-border p-6 rounded-xl hover:border-accent/50 transition-colors">
                <a href="https://dir.texas.gov/contracts/dir-cpo-4846" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors">
                  DIR-CPO-4846
                </a>
                <p className="text-slate-300 mt-2">Cyber Security Hardware, Software, & Services</p>
              </div>
              <div className="bg-card/30 border border-border p-6 rounded-xl hover:border-accent/50 transition-colors">
                <a href="https://dir.texas.gov/contracts/dir-cpo-5096" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors">
                  DIR-CPO-5096
                </a>
                <p className="text-slate-300 mt-2">IT Hardware, Peripherals & Services</p>
              </div>
              <div className="bg-card/30 border border-border p-6 rounded-xl hover:border-accent/50 transition-colors">
                <p className="text-accent font-semibold text-lg">OMNIA R200803</p>
                <p className="text-slate-300 mt-2">Advanced Technology Solutions Aggregator</p>
              </div>
              <div className="bg-card/30 border border-border p-6 rounded-xl hover:border-accent/50 transition-colors">
                <p className="text-accent font-semibold text-lg">MAS-GSA-Solicitation 47QSMD20R0001</p>
                <p className="text-slate-300 mt-2">GSA Multiple Award Schedule</p>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="text-accent text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold text-lg mb-2">Agile Mobilization</h3>
              <p className="text-slate-300">Predictable delivery timelines with rapid dispatch</p>
            </div>
            <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="text-accent text-3xl mb-3">📋</div>
              <h3 className="text-white font-semibold text-lg mb-2">Documentation-First</h3>
              <p className="text-slate-300">SLA-driven execution with complete traceability</p>
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
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="mailto:sales@triadesys.com">Submit Request</a>
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


      {/* Footer */}
      <footer className="border-t border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <img 
                src={triadelogo} 
                alt="Triade Systems" 
                className="h-16 w-16 mb-4 rounded-md" 
              />
              <h3 className="text-white font-bold text-lg mb-3">TRIADE SYSTEMS</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Trusted IT consulting partner delivering secure, scalable, and innovative technology solutions for enterprises.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-accent transition-colors">IT Consulting</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Cybersecurity & Compliance</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Artificial Intelligence</a></li>             
                <li><a href="#services" className="hover:text-accent transition-colors">Managed IT Services</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#clients" className="hover:text-accent transition-colors">Contract Vehicles</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">📍</span>
                  <span>5900 Balcones Drive Ste 100<br />Austin, TX 78731, USA</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">📞</span>
                  <a href="tel:737-259-8686" className="hover:text-accent transition-colors">737-259-8686</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✉️</span>
                  <a href="mailto:sales@triadesys.com" className="hover:text-accent transition-colors">sales@triadesys.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">💬</span>
                  <a href="mailto:support@triadesys.com" className="hover:text-accent transition-colors">support@triadesys.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--glass-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Triade Systems. All rights reserved.</p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
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
