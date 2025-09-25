import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Midnight Sequin Cocktail Dress",
    category: "Party Wear",
    price: "$220",
    originalPrice: "$280",
    rating: 4.7,
    reviews: 96,
  image: "/IMG-20250925-WA0003.jpg",
    outOfStock: false,
  },
  {
    id: 2,
    name: "Tailored Power Blazer & Trousers",
    category: "Formal Wear",
    price: "$350",
    originalPrice: "$420",
    rating: 4.8,
    reviews: 124,
  image: "/IMG-20250925-WA0004.jpg",
    outOfStock: false,
  },
  {
    id: 3,
    name: "Silk Co-ord Set",
    category: "Luxury Essentials",
    price: "$180",
    originalPrice: "$210",
    rating: 4.6,
    reviews: 81,
  image: "/IMG-20250925-WA0005.jpg",
    outOfStock: false,
  },
  {
    id: 4,
    name: "Festive Designer Exclusive Dress",
    category: "Seasonal & Limited",
    price: "$420",
    originalPrice: "$500",
    rating: 4.9,
    reviews: 203,
  image: "/IMG-20250925-WA0006.jpg",
    outOfStock: false,
  },
]

const categories = ["Party Wear", "Formal Wear", "Luxury Essentials", "Seasonal & Limited"]

export function ProductShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Explore KYN Collections</h2>

        {/* Category tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`pb-2 text-lg font-medium transition-colors text-gray-700 hover:text-black`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-[3/4] mb-4 bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>

                    <Button className="w-full bg-black hover:bg-zinc-800">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
