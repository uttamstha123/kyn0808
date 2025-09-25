import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-orange-300 overflow-hidden">
        {/* Decorative perfume bottles on the right */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pr-8">
          <div className="relative">
            {/* Multiple perfume bottles arranged vertically */}
            <div className="flex flex-col space-y-4">
              <div className="w-16 h-32 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full opacity-80"></div>
              <div className="w-12 h-24 bg-gradient-to-b from-purple-300 to-purple-500 rounded-full opacity-70"></div>
              <div className="w-14 h-28 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full opacity-75"></div>
            </div>
          </div>
        </div>

        {/* Gift box decoration */}
        <div className="absolute bottom-32 right-1/4">
          <div className="w-24 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg relative">
            <div className="absolute inset-x-0 top-1/2 h-3 bg-red-500 transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-3 h-full bg-red-500 transform -translate-x-1/2"></div>
            {/* Bow */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-4 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Lux by Sandy, we specialize in curating a distinguished collection of premium perfumes and beauty
                products sourced from around the world. Our commitment to excellence ensures that we offer only the
                finest high-quality imports, bringing luxury to your doorstep.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded with a passion for exceptional fragrances, we believe that the right scent can transform your
                day and elevate your confidence. Every product in our collection is carefully selected to meet our high
                standards of quality and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-200 p-8">
                <div className="w-full h-full bg-gradient-to-b from-pink-200 to-pink-300 rounded-full flex items-center justify-center relative">
                  {/* Perfume bottle silhouette */}
                  <div className="w-24 h-40 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-8 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm"></div>
                  </div>
                  {/* Sparkle effects */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Welcome To A World Of Lux</h2>
              <p className="text-gray-700 leading-relaxed">
                With a commitment to elegance, authenticity, and timeless allure, we handpick every product to ensure an
                unparalleled experience. Each fragrance in our collection tells a story, and every product is a
                testament to our signature world of luxurious. Let us elevate your fragrance journey.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-700">
                  To make luxury fragrances accessible to everyone while maintaining the highest standards of quality
                  and authenticity. We believe that everyone deserves to experience the transformative power of
                  exceptional scents.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Promise</h3>
                <p className="text-gray-700">
                  Every fragrance we offer is 100% authentic and sourced directly from authorized distributors. We stand
                  behind the quality of our products and are committed to your complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
