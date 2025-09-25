"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter } from "lucide-react"

const allProducts = [
  {
    id: 1,
    name: "Infinite Love Dreaming",
    category: "women",
    collection: "Signature Classics",
    price: 80,
    originalPrice: 90,
    rating: 4.8,
    reviews: 124,
    image: "/luxury-red-perfume-bottle.jpg",
    inStock: false,
    description: "A romantic floral fragrance with notes of rose, jasmine, and vanilla",
    brand: "Lux by Sandy",
    size: "50ml",
    notes: ["Rose", "Jasmine", "Vanilla"],
  },
  {
    id: 2,
    name: "Magnolia Eau De Parfum",
    category: "women",
    collection: "Modern Luxe",
    price: 110,
    originalPrice: 140,
    rating: 4.9,
    reviews: 89,
    image: "/luxury-burgundy-perfume-bottle.jpg",
    inStock: false,
    description: "Elegant magnolia with hints of white tea and musk",
    brand: "Lux by Sandy",
    size: "75ml",
    notes: ["Magnolia", "White Tea", "Musk"],
  },
  {
    id: 3,
    name: "Queen of Minds",
    category: "women",
    collection: "Niche Artisans",
    price: 95,
    originalPrice: 110,
    rating: 4.7,
    reviews: 156,
    image: "/luxury-gold-perfume-bottle.jpg",
    inStock: false,
    description: "Bold and sophisticated with bergamot, iris, and sandalwood",
    brand: "Lux by Sandy",
    size: "50ml",
    notes: ["Bergamot", "Iris", "Sandalwood"],
  },
  {
    id: 4,
    name: "Best Collection 3 in Pack",
    category: "unisex",
    collection: "Limited Editions",
    price: 120,
    originalPrice: 150,
    rating: 4.9,
    reviews: 203,
    image: "/luxury-perfume-collection-set.jpg",
    inStock: false,
    description: "Three signature scents in travel-friendly sizes",
    brand: "Lux by Sandy",
    size: "3x30ml",
    notes: ["Various"],
  },
  {
    id: 5,
    name: "Midnight Essence",
    category: "men",
    collection: "Oriental Mystique",
    price: 95,
    originalPrice: 120,
    rating: 4.6,
    reviews: 78,
    image: "/luxury-mens-cologne-dark-bottle.jpg",
    inStock: true,
    description: "Deep and mysterious with cedar, leather, and amber",
    brand: "Lux by Sandy",
    size: "100ml",
    notes: ["Cedar", "Leather", "Amber"],
  },
  {
    id: 6,
    name: "Ocean Breeze",
    category: "unisex",
    collection: "Fresh & Clean",
    price: 85,
    originalPrice: 100,
    rating: 4.5,
    reviews: 92,
    image: "/luxury-blue-perfume-bottle.jpg",
    inStock: true,
    description: "Fresh aquatic scent with sea salt and citrus",
    brand: "Lux by Sandy",
    size: "75ml",
    notes: ["Sea Salt", "Citrus", "Aquatic"],
  },
  {
    id: 7,
    name: "Royal Oud",
    category: "men",
    collection: "Niche Artisans",
    price: 150,
    originalPrice: 180,
    rating: 4.8,
    reviews: 67,
    image: "/luxury-oud-perfume-bottle.jpg",
    inStock: true,
    description: "Rich oud with rose and saffron for the discerning gentleman",
    brand: "Lux by Sandy",
    size: "50ml",
    notes: ["Oud", "Rose", "Saffron"],
  },
  {
    id: 8,
    name: "Garden Party",
    category: "women",
    collection: "Fresh & Clean",
    price: 75,
    originalPrice: 90,
    rating: 4.4,
    reviews: 134,
    image: "/luxury-floral-perfume-bottle.jpg",
    inStock: true,
    description: "Light and airy with peony, lily of the valley, and green leaves",
    brand: "Lux by Sandy",
    size: "50ml",
    notes: ["Peony", "Lily of the Valley", "Green Leaves"],
  },
  {
    id: 9,
    name: "Velvet Dreams",
    category: "women",
    collection: "Signature Classics",
    price: 105,
    originalPrice: 125,
    rating: 4.7,
    reviews: 98,
    image: "/luxury-velvet-dreams-perfume.jpg",
    inStock: true,
    description: "Luxurious blend of black cherry, almond, and tonka bean",
    brand: "Lux by Sandy",
    size: "75ml",
    notes: ["Black Cherry", "Almond", "Tonka Bean"],
  },
  {
    id: 10,
    name: "Citrus Burst",
    category: "unisex",
    collection: "Fresh & Clean",
    price: 70,
    originalPrice: 85,
    rating: 4.3,
    reviews: 156,
    image: "/luxury-citrus-burst-perfume.jpg",
    inStock: true,
    description: "Energizing citrus blend with grapefruit, lemon, and mint",
    brand: "Lux by Sandy",
    size: "100ml",
    notes: ["Grapefruit", "Lemon", "Mint"],
  },
  {
    id: 11,
    name: "Smoky Nights",
    category: "men",
    collection: "Oriental Mystique",
    price: 125,
    originalPrice: 145,
    rating: 4.6,
    reviews: 87,
    image: "/luxury-smoky-nights-cologne.jpg",
    inStock: false,
    description: "Intense and smoky with tobacco, vanilla, and spices",
    brand: "Lux by Sandy",
    size: "75ml",
    notes: ["Tobacco", "Vanilla", "Spices"],
  },
  {
    id: 12,
    name: "White Lotus",
    category: "women",
    collection: "Modern Luxe",
    price: 115,
    originalPrice: 135,
    rating: 4.8,
    reviews: 112,
    image: "/luxury-white-lotus-perfume.jpg",
    inStock: true,
    description: "Pure and elegant with lotus, white musk, and bamboo",
    brand: "Lux by Sandy",
    size: "50ml",
    notes: ["Lotus", "White Musk", "Bamboo"],
  },
]

const categories = [
  { id: "all", name: "All Categories", count: allProducts.length },
  { id: "men", name: "Men", count: allProducts.filter((p) => p.category === "men").length },
  { id: "women", name: "Women", count: allProducts.filter((p) => p.category === "women").length },
  { id: "unisex", name: "Unisex", count: allProducts.filter((p) => p.category === "unisex").length },
]

const collections = [
  "All Collections",
  "Signature Classics",
  "Modern Luxe",
  "Niche Artisans",
  "Oriental Mystique",
  "Fresh & Clean",
  "Limited Editions",
]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
]

export function AllProductsGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedCollection, setSelectedCollection] = useState("All Collections")
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  let filteredProducts = allProducts

  // Filter by search term
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.notes.some((note) => note.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }

  // Filter by category
  if (activeCategory !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category === activeCategory)
  }

  // Filter by collection
  if (selectedCollection !== "All Collections") {
    filteredProducts = filteredProducts.filter((product) => product.collection === selectedCollection)
  }

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search fragrances, notes, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full"
            />
          </div>

          {/* Filter Toggle */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              {/* Category Tabs */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === category.id
                          ? "bg-rose-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Collection and Sort */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Collection</label>
                  <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {collections.map((collection) => (
                        <SelectItem key={collection} value={collection}>
                          {collection}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white bg-opacity-90 text-gray-900 text-xs">
                    {product.collection}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-xs text-gray-500 ml-2">{product.size}</span>
                </div>

                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>

                <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>

                <div className="flex flex-wrap gap-1">
                  {product.notes.slice(0, 3).map((note) => (
                    <Badge key={note} variant="outline" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>

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

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setActiveCategory("all")
                setSelectedCollection("All Collections")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
