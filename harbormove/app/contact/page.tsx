import { Phone, Mail, MapPin, Truck } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
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
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url('/images/pexels/pexels-cottonbro-4569340 moving family with boxes image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-700/30 to-orange-700/40" />
        <div className="max-w-7xl mx-auto relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Request your free quote and we’ll respond within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
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
      </section>
    </div>
  );
}
