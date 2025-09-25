"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Infinite Love Dreaming",
    category: "women",
    price: 80,
    originalPrice: 90,
    rating: 4.8,
    reviews: 124,
    image: "/luxury-red-perfume-bottle.jpg",
    inStock: false,
    description: "A romantic floral fragrance with notes of rose, jasmine, and vanilla",
  },
  {
    id: 2,
    name: "Magnolia Eau De Parfum",
    category: "women",
    price: 110,
    originalPrice: 140,
    rating: 4.9,
    reviews: 89,
    image: "/luxury-burgundy-perfume-bottle.jpg",
    inStock: false,
    description: "Elegant magnolia with hints of white tea and musk",
  },
  {
    id: 3,
    name: "Queen of Minds",
    category: "women",
    price: 95,
    originalPrice: 110,
    rating: 4.7,
    reviews: 156,
    image: "/luxury-gold-perfume-bottle.jpg",
    inStock: false,
    description: "Bold and sophisticated with bergamot, iris, and sandalwood",
  },
  {
    id: 4,
    name: "Best Collection 3 in Pack",
    category: "unisex",
    price: 120,
    originalPrice: 150,
    rating: 4.9,
    reviews: 203,
    image: "/luxury-perfume-collection-set.jpg",
    inStock: false,
    description: "Three signature scents in travel-friendly sizes",
  },
  {
    id: 5,
    name: "Midnight Essence",
    category: "men",
    price: 95,
    originalPrice: 120,
    rating: 4.6,
    reviews: 78,
    image: "/luxury-mens-cologne-dark-bottle.jpg",
    inStock: true,
    description: "Deep and mysterious with cedar, leather, and amber",
  },
  {
    id: 6,
    name: "Ocean Breeze",
    category: "unisex",
    price: 85,
    originalPrice: 100,
    rating: 4.5,
    reviews: 92,
    image: "/luxury-blue-perfume-bottle.jpg",
    inStock: true,
    description: "Fresh aquatic scent with sea salt and citrus",
  },
  {
    id: 7,
    name: "Royal Oud",
    category: "men",
    price: 150,
    originalPrice: 180,
    rating: 4.8,
    reviews: 67,
    image: "/luxury-oud-perfume-bottle.jpg",
    inStock: true,
    description: "Rich oud with rose and saffron for the discerning gentleman",
  },
  {
    id: 8,
    name: "Garden Party",
    category: "women",
    price: 75,
    originalPrice: 90,
    rating: 4.4,
    reviews: 134,
    image: "/luxury-floral-perfume-bottle.jpg",
    inStock: true,
    description: "Light and airy with peony, lily of the valley, and green leaves",
  },
]

const categories = [
  { id: "all", name: "All", count: products.length },
  { id: "men", name: "Men", count: products.filter((p) => p.category === "men").length },
  { id: "women", name: "Women", count: products.filter((p) => p.category === "women").length },
  { id: "unisex", name: "Unisex", count: products.filter((p) => p.category === "unisex").length },
]

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">EXPLORE OUR LUXURY FRAGRANCES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From timeless classics to modern masterpieces, find your signature scent in our carefully curated
            collection.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm text-gray-500">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100 relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Badge variant="secondary" className="bg-white text-gray-900">
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    product.inStock
                      ? "bg-rose-600 hover:bg-rose-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
