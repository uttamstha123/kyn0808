import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-900 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10" />
        <img
          src="/IMG-20250925-WA0003.jpg"
          alt="KYN Fashion"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
        <div className="absolute inset-0 border-4 border-white rounded-full animate-pulse" />
        <div className="absolute inset-8 border-2 border-white/50 rounded-full" />
      </div>
      <div className="absolute bottom-32 left-10 w-48 h-48 opacity-10">
        <div className="absolute inset-0 border-4 border-white transform rotate-45" />
        <div className="absolute inset-8 border-2 border-white/50 transform rotate-45" />
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-6 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                <Sparkles className="w-4 h-4" />
                KYN0808 — Luxury Women's Fashion
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight text-white">
              KYN —<br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Bold. Classy. Modern.
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-zinc-200 leading-relaxed max-w-2xl">
              A luxury women's fashion brand redefining western wear with premium fabrics, modern cuts,
              and timeless sophistication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold group">
                <Link to="/collections">
                  Explore Collections
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-zinc-400">Premium Designs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-zinc-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-zinc-400">Cities Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
