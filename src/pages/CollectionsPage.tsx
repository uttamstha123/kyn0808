import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "Signature Classics",
      description: "Timeless fragrances that have defined luxury for generations",
      image: "/signature-classics-collection.jpg",
      productCount: 12,
      priceRange: "$89 - $299",
      featured: true,
    },
    {
      id: 2,
      name: "Modern Luxe",
      description: "Contemporary scents for the modern connoisseur",
      image: "/modern-luxe-collection.jpg",
      productCount: 8,
      priceRange: "$129 - $399",
      featured: true,
    },
    {
      id: 3,
      name: "Niche Artisans",
      description: "Exclusive creations from master perfumers",
      image: "/niche-artisans-collection.jpg",
      productCount: 6,
      priceRange: "$199 - $599",
      featured: false,
    },
    {
      id: 4,
      name: "Oriental Mystique",
      description: "Rich, exotic fragrances inspired by the East",
      image: "/oriental-mystique-collection.jpg",
      productCount: 10,
      priceRange: "$99 - $349",
      featured: false,
    },
    {
      id: 5,
      name: "Fresh & Clean",
      description: "Light, refreshing scents for everyday elegance",
      image: "/fresh-clean-collection.jpg",
      productCount: 14,
      priceRange: "$69 - $199",
      featured: false,
    },
    {
      id: 6,
      name: "Limited Editions",
      description: "Rare and exclusive fragrances in limited quantities",
      image: "/limited-editions-collection.jpg",
      productCount: 4,
      priceRange: "$299 - $899",
      featured: false,
    },
  ]

  const featuredCollections = collections.filter((collection) => collection.featured)
  const regularCollections = collections.filter((collection) => !collection.featured)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white overflow-hidden">
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
          <div className="w-32 h-64 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Collections</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Explore our carefully curated fragrance collections, each telling a unique story and capturing distinct
            moods and moments.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredCollections.map((collection) => (
              <Card key={collection.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-orange-100 relative overflow-hidden">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-rose-600 text-white">Featured</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{collection.name}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{collection.productCount} Products</span>
                    <span className="text-sm font-semibold text-rose-600">{collection.priceRange}</span>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Explore Collection</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regular Collections */}
          <h2 className="text-3xl font-bold text-center mb-12">All Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCollections.map((collection) => (
              <Card key={collection.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-orange-100 relative overflow-hidden">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{collection.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-500">{collection.productCount} Products</span>
                    <span className="text-xs font-semibold text-rose-600">{collection.priceRange}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white bg-transparent"
                  >
                    View Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our fragrance experts are here to help you discover your perfect scent. Get personalized recommendations
            based on your preferences.
          </p>
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
            Get Personal Recommendations
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CollectionsPage
