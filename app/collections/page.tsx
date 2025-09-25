import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const collections = [
  {
    id: 1,
    name: "Signature Classics",
    description: "Timeless fragrances that have defined elegance for generations",
    image: "/signature-classics-collection.jpg",
    productCount: 12,
    priceRange: "$75 - $150",
    featured: true,
  },
  {
    id: 2,
    name: "Modern Luxe",
    description: "Contemporary scents for the modern connoisseur",
    image: "/modern-luxe-collection.jpg",
    productCount: 8,
    priceRange: "$90 - $200",
    featured: false,
  },
  {
    id: 3,
    name: "Niche Artisans",
    description: "Exclusive fragrances from master perfumers around the world",
    image: "/niche-artisans-collection.jpg",
    productCount: 15,
    priceRange: "$120 - $300",
    featured: true,
  },
  {
    id: 4,
    name: "Oriental Mystique",
    description: "Rich, exotic scents inspired by Eastern traditions",
    image: "/oriental-mystique-collection.jpg",
    productCount: 10,
    priceRange: "$85 - $180",
    featured: false,
  },
  {
    id: 5,
    name: "Fresh & Clean",
    description: "Light, refreshing fragrances perfect for everyday wear",
    image: "/fresh-clean-collection.jpg",
    productCount: 14,
    priceRange: "$60 - $120",
    featured: false,
  },
  {
    id: 6,
    name: "Limited Editions",
    description: "Rare and exclusive fragrances available for a limited time",
    image: "/limited-editions-collection.jpg",
    productCount: 6,
    priceRange: "$150 - $400",
    featured: true,
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
          <div className="w-32 h-64 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
        </div>
        <div className="absolute right-24 bottom-20 opacity-20">
          <div className="w-24 h-48 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Collections</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Discover carefully curated collections that tell unique stories through the art of fragrance. Each
            collection represents a different facet of luxury and sophistication.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and exclusive collections, handpicked for their exceptional quality and unique character.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {collections
              .filter((collection) => collection.featured)
              .map((collection) => (
                <div key={collection.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-rose-600 text-white">Featured</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-sm text-gray-200">{collection.productCount} Products</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{collection.priceRange}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-rose-600 group-hover:text-white bg-transparent"
                      >
                        Explore Collection
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Collections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete range of fragrance collections, each offering a unique olfactory journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {collection.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-rose-600 text-white">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{collection.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{collection.productCount} Products</span>
                    <span className="font-medium text-gray-900">{collection.priceRange}</span>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">View Collection</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Decide Which Collection to Choose?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Let our fragrance experts help you find the perfect collection that matches your style and preferences.
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Get Personal Recommendations
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
