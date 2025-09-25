"use client"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus, Share2 } from "lucide-react"

function ProductDetailPage() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock product data - in a real app, this would be fetched based on the ID
  const product = {
    id: id || "1",
    name: "Jasmine Sunset Eau de Parfum",
    brand: "Lux by Sandy",
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 127,
    description:
      "A captivating blend of jasmine, bergamot, and warm amber that evokes the golden hour of a perfect sunset. This sophisticated fragrance opens with fresh citrus notes, develops into a heart of intoxicating jasmine, and settles into a warm, sensual base of amber and sandalwood.",
    images: [
      "/product-jasmine-sunset-main.jpg",
      "/product-jasmine-sunset-bottle.jpg",
      "/product-jasmine-sunset-packaging.jpg",
      "/product-jasmine-sunset-lifestyle.jpg",
    ],
    sizes: [
      { size: "30ml", price: 89, inStock: true },
      { size: "50ml", price: 149, inStock: true },
      { size: "100ml", price: 189, inStock: true, popular: true },
    ],
    inStock: true,
    category: "Floral Oriental",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Mandarin"],
      heart: ["Jasmine", "Rose Petals", "Lily of the Valley"],
      base: ["Amber", "Sandalwood", "White Musk"],
    },
    features: ["Long-lasting (8-10 hours)", "Cruelty-free", "Authentic ingredients", "Gift-ready packaging"],
  }

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely stunning fragrance! The jasmine is so elegant and not overpowering. I get compliments every time I wear it.",
      verified: true,
    },
    {
      id: 2,
      name: "Emily R.",
      rating: 5,
      date: "1 month ago",
      comment:
        "This has become my signature scent. The longevity is incredible and it develops beautifully throughout the day.",
      verified: true,
    },
    {
      id: 3,
      name: "Jessica L.",
      rating: 4,
      date: "2 months ago",
      comment: "Beautiful fragrance, very sophisticated. The packaging is also gorgeous - perfect for gifting!",
      verified: true,
    },
  ]

  const relatedProducts = [
    {
      id: "2",
      name: "Rose Garden Elixir",
      price: 159,
      image: "/product-rose-garden.jpg",
      rating: 4.7,
    },
    {
      id: "3",
      name: "Midnight Orchid",
      price: 199,
      image: "/product-midnight-orchid.jpg",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Golden Amber",
      price: 179,
      image: "/product-golden-amber.jpg",
      rating: 4.6,
    },
  ]

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <span>Home</span> / <span>Fragrances</span> / <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-orange-100 rounded-lg overflow-hidden relative">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gradient-to-br from-rose-100 to-orange-100 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-rose-600" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-rose-600 border-rose-600">
                    {product.category}
                  </Badge>
                  {product.inStock && <Badge className="bg-green-100 text-green-800">In Stock</Badge>}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{product.brand}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-100 text-red-800">Save ${product.originalPrice - product.price}</Badge>
                  )}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      className={`p-3 border rounded-lg text-center relative ${
                        size.popular ? "border-rose-600 bg-rose-50" : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white text-xs">
                          Popular
                        </Badge>
                      )}
                      <div className="font-semibold">{size.size}</div>
                      <div className="text-sm text-gray-600">${size.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4 py-2 font-semibold">{quantity}</span>
                      <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleAddToCart} className="flex-1 bg-rose-600 hover:bg-rose-700">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b">
                <div className="text-center">
                  <Truck className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Free Shipping</div>
                  <div className="text-xs text-gray-600">Orders over $75</div>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Authentic</div>
                  <div className="text-xs text-gray-600">100% Genuine</div>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">30-Day Return</div>
                  <div className="text-xs text-gray-600">Easy returns</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="notes">Fragrance Notes</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Top Notes</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.top.map((note) => (
                            <Badge key={note} variant="outline" className="text-rose-600 border-rose-600">
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Heart Notes</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.heart.map((note) => (
                            <Badge key={note} variant="outline" className="text-rose-600 border-rose-600">
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Base Notes</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.base.map((note) => (
                            <Badge key={note} variant="outline" className="text-rose-600 border-rose-600">
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold">{review.name}</span>
                              {review.verified && (
                                <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-orange-100 relative overflow-hidden">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-rose-600">${relatedProduct.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductDetailPage
