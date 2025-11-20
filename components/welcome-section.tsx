import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Award, Sparkles, TrendingUp } from "lucide-react"

export function WelcomeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-4">
                <Sparkles className="w-3 h-3" />
                EST. 2024
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to <span className="text-black">KYN</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Discover luxury western wear crafted for women who lead with style. From bold party looks to refined
                formal wear, KYN blends premium fabrics with modern silhouettes—so every outfit makes a statement.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Each piece is thoughtfully designed to empower confidence, celebrate individuality, and redefine what it means
                to dress with intention. Whether you're stepping into the spotlight or owning the boardroom, KYN is your
                partner in making every moment unforgettable.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                  <p className="text-sm text-gray-600">Finest fabrics and meticulous craftsmanship</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Modern Designs</h3>
                  <p className="text-sm text-gray-600">Contemporary cuts with timeless appeal</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link to="/collections">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/IMG-20250925-WA0004.jpg"
                    alt="KYN Collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/IMG-20250925-WA0005.jpg"
                    alt="KYN Collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/IMG-20250925-WA0006.jpg"
                    alt="KYN Collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/IMG-20250925-WA0003.jpg"
                    alt="KYN Collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-black/5 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-black/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
