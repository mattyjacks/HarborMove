import { Truck } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  Harbor Move
                </h1>
                <p className="text-xs text-gray-600">Boston&apos;s Trusted Movers</p>
              </div>
            </a>
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
            Pricing
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Transparent rates and clear expectations for Boston-area moves.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Local Moving (Hourly)</h2>
          <p className="text-gray-700 mb-6">
            Typical local moves in Boston are billed hourly. Current market averages:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-orange-50 shadow">
              <h3 className="font-bold text-xl text-gray-800 mb-2">2 Movers + Truck</h3>
              <p className="text-gray-700 text-lg">~ $150 / hour</p>
              <p className="text-sm text-gray-500 mt-2">Avg. $75/hr per mover</p>
            </div>
            <div className="p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-orange-50 shadow">
              <h3 className="font-bold text-xl text-gray-800 mb-2">3 Movers + Truck</h3>
              <p className="text-gray-700 text-lg">~ $225 / hour</p>
              <p className="text-sm text-gray-500 mt-2">Avg. $75/hr per mover</p>
            </div>
            <div className="p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-orange-50 shadow">
              <h3 className="font-bold text-xl text-gray-800 mb-2">4 Movers + Truck</h3>
              <p className="text-gray-700 text-lg">~ $300 / hour</p>
              <p className="text-sm text-gray-500 mt-2">Avg. $75/hr per mover</p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-5 gap-4">
            {[ 
              { size: "Studio", total: "$450" },
              { size: "1 Bedroom", total: "$600" },
              { size: "2 Bedroom", total: "$1,350" },
              { size: "3 Bedroom", total: "$2,100" },
              { size: "4 Bedroom", total: "$2,700" },
            ].map((item) => (
              <div key={item.size} className="p-5 rounded-2xl border border-blue-100 bg-white shadow-sm">
                <div className="text-sm text-gray-500">Typical Total</div>
                <div className="text-2xl font-bold text-gray-800">{item.total}</div>
                <div className="text-gray-600 mt-1">{item.size}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Estimates reflect typical durations and crew sizes for Boston moves. Actuals depend on access, stairs/elevators, packing needs, and inventory.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-14 mb-6">Long-Distance Moves</h2>
          <p className="text-gray-700 mb-6">
            Interstate moves are priced as flat-rate quotes based on inventory, distance, and services (packing, assembly, storage). Request a custom estimate.
          </p>

          <div className="p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-orange-50 shadow">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="font-semibold">Pricing basis:</span> inventory volume/weight, miles, access, and add-ons.</li>
              <li><span className="font-semibold">Typical add-ons:</span> packing/unpacking, specialty items, storage, COI, shuttle service.</li>
              <li><span className="font-semibold">Scheduling:</span> dedicated vs. shared loads affect delivery windows and price.</li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-xl hover:shadow-2xl transform hover:scale-105">
              Get My Custom Quote
            </a>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <div className="font-semibold mb-2">Sources</div>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                MoveAdvisor: Average local rates in Boston (~$75/hr per mover; ~$150/hr for 2 movers + truck). 
                <a href="https://moveadvisor.com/move/how-much-do-movers-cost-in-boston/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
