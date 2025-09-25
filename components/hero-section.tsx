import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-900 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-30">
        <div className="relative w-full h-full">
          {/* Golden crescent moon */}
          <div className="absolute bottom-20 right-20 w-32 h-32 border-8 border-yellow-400 rounded-full border-r-transparent transform rotate-45"></div>
          {/* Ornate lantern/perfume bottle */}
          <div className="absolute bottom-0 right-0 w-40 h-60 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-full opacity-80">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-yellow-300 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-yellow-200 rounded-lg opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-full">
            KYN0808 — Luxury Women’s Fashion
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          KYN — Bold. Classy. Modern.
        </h1>

        <p className="text-xl mb-8 text-zinc-200">
          A luxury women’s fashion brand redefining western wear with premium fabrics, modern cuts,
          and timeless sophistication.
        </p>

        <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
          Explore Collections
        </Button>
      </div>
    </section>
  )
}
