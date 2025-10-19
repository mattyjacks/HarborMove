import { Truck, Box, Home as HomeIcon, Shield, Package, ClipboardCheck, Warehouse, Compass } from "lucide-react";

export default function ServicesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-900/50 to-orange-900/60" />
        <div className="max-w-7xl mx-auto relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Full-service moving solutions tailored to your home or business.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { icon: HomeIcon, title: "Residential Moving", desc: "Apartments, condos, and single-family homes. Careful handling and efficient moves." },
              { icon: Box, title: "Commercial Moving", desc: "Office and retail relocations with minimal downtime and clear coordination." },
              { icon: Truck, title: "Long Distance", desc: "State-to-state moves with reliable timelines and dedicated support." },
              { icon: Shield, title: "Packing & Unpacking", desc: "Full or partial packing with premium materials to protect your belongings." },
              { icon: Package, title: "Specialty Items", desc: "Pianos, safes, antiques, and fragile items professionally secured and moved." },
              { icon: Warehouse, title: "Storage Coordination", desc: "Short- and long-term storage solutions to bridge gaps between moves." },
            ].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="bg-gradient-to-br from-blue-600 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <s.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[ 
              { icon: ClipboardCheck, title: "In-Home Estimates", desc: "Transparent quotes and no surprises." },
              { icon: Compass, title: "Local Expertise", desc: "Boston neighborhoods, parking, and building rules handled." },
              { icon: Shield, title: "Licensed & Insured", desc: "Your move is protected from start to finish." },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                  <f.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800">{f.title}</h4>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-xl hover:shadow-2xl transform hover:scale-105">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
