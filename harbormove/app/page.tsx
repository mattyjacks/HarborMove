import { Truck, Box, Home as HomeIcon, Shield, Phone, Mail, MapPin, Clock, Star, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  Harbor Move
                </h1>
                <p className="text-xs text-gray-600">Boston&apos;s Trusted Movers</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
            </div>
            <a href="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl transform hover:scale-105">
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url('/images/pexels/pexels-cottonbro-4569340 moving family with boxes image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-900/50 to-orange-900/60" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              Boston&apos;s Premier
              <br />
              Moving Company
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional, reliable, and stress-free moving services throughout Boston and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-xl hover:shadow-2xl transform hover:scale-105">
                Schedule Your Move
              </a>
              <a href="tel:617-555-0100" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-xl border-2 border-blue-600">
                Call (617) 555-0100
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold">Same-Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Full-service moving solutions tailored to your needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HomeIcon, title: "Residential Moving", desc: "Expert home moving services for apartments, condos, and houses of all sizes." },
              { icon: Box, title: "Commercial Moving", desc: "Minimize downtime with our efficient office and business relocation services." },
              { icon: Truck, title: "Long Distance", desc: "Safe and reliable interstate moving with real-time tracking and updates." },
              { icon: Shield, title: "Packing Services", desc: "Professional packing and unpacking with premium materials and care." }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border border-blue-100">
                <div className="bg-gradient-to-br from-blue-600 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Harbor Move?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "5-Star Service", desc: "Consistently rated as Boston's best moving company with hundreds of positive reviews." },
              { icon: Shield, title: "Fully Insured", desc: "Your belongings are protected with comprehensive insurance coverage on every move." },
              { icon: Clock, title: "On-Time Guarantee", desc: "We value your time. Punctual service is our promise and our reputation." }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            About Harbor Move
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Founded in Boston&apos;s vibrant harbor district, <span className="font-semibold text-blue-600">Harbor Move</span> has been serving the Greater Boston area with exceptional moving services for over a decade. We understand that moving is more than just transporting belongings—it&apos;s about transitioning to a new chapter in your life.
            </p>
            <p>
              Our team of professional movers is carefully trained, background-checked, and committed to treating your possessions with the utmost care. From historic brownstones in Back Bay to modern condos in Seaport, we know Boston inside and out.
            </p>
            <p>
              Whether you&apos;re moving across the street or across the state, Harbor Move combines local expertise with professional service to make your move seamless. Experience the difference that dedicated, customer-focused service makes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Phone</h3>
                  <p className="text-gray-600 text-lg">(617) 555-0100</p>
                  <p className="text-sm text-gray-500 mt-1">Monday - Sunday, 7am - 9pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Email</h3>
                  <p className="text-gray-600 text-lg">info@harbormove.com</p>
                  <p className="text-sm text-gray-500 mt-1">We respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-orange-600 p-4 rounded-xl shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Location</h3>
                  <p className="text-gray-600 text-lg">123 Harbor Street</p>
                  <p className="text-gray-600 text-lg">Boston, MA 02110</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="(617) 555-0100" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Tell us about your move..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Disclaimer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-orange-500 px-4 py-2 rounded-full text-sm font-bold">
                DEMO WEBSITE
              </div>
            </div>
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              This is a Demo Site by MattyJacks.com
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold transition">MattyJacks.com</a> builds AI-powered software and stunning web applications that drive real business results. From custom AI solutions and internal tools to beautiful, conversion-focused websites, we transform ideas into income with senior-level talent and disciplined execution. Whether you need elite engineers, designers, or a complete idea-to-MVP pipeline, we ship fast and iterate with real feedback.
              </p>
              <p>
                Our process is straightforward: share your vision, get a strategic assessment in plain English, and watch as we assemble the right team to build and execute without babysitting. We coordinate handpicked freelancers and operators who deliver quality at speed, reducing costs while increasing throughput. Every project is instrumented to track what actually moves revenue—not vanity metrics.
              </p>
              <p>
                This Harbor Move website showcases the kind of modern, professional web design we create for clients. With clear messaging, intuitive navigation, and compelling visuals, sites like this don&apos;t just look great—they convert visitors into customers. Ready to scale smarter and faster? Visit <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-semibold transition">mattyjacks.com</a> and let&apos;s turn your vision into reality.
              </p>
            </div>
            <div className="mt-8 text-center">
              <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-orange-600 transition shadow-xl hover:shadow-2xl transform hover:scale-105">
                Visit MattyJacks.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Harbor Move</span>
          </div>
          <p className="mb-4">Boston&apos;s Premier Moving Company</p>
          <p className="text-sm">© 2024 Harbor Move. All rights reserved. Demo site by <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">MattyJacks.com</a></p>
        </div>
      </footer>
    </div>
  );
}
