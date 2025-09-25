import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AllProductsGrid } from "@/components/all-products-grid"

function AllProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white overflow-hidden">
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
          <div className="w-32 h-64 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">All Products</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Browse our complete collection of luxury fragrances. Use filters to find your perfect scent.
          </p>
        </div>
      </section>

      {/* Products Grid with Filters */}
      <AllProductsGrid />

      <Footer />
    </div>
  )
}

export default AllProductsPage
