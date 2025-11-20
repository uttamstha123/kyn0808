import { Link } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/src/context/CartContext"
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center py-16 px-4">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link to="/all-products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link> / <span className="text-gray-900">Shopping Cart</span>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={`${item.product.id}-${item.selectedSize}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.product.images[0] || "/placeholder.svg"}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <div className="flex-1">
                            <Link to={`/product/${item.product.id}`}>
                              <h3 className="font-semibold text-gray-900 hover:text-rose-600 transition-colors">
                                {item.product.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">{item.product.category}</p>
                            <div className="flex gap-3 mt-2">
                              <Badge variant="outline">Size: {item.selectedSize}</Badge>
                              {item.selectedColor && (
                                <Badge variant="outline">Color: {item.selectedColor}</Badge>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-5 h-5" />
                          </Button>
                        </div>

                        {/* Price and Quantity */}
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                updateQuantity(item.product.id, item.selectedSize, Math.max(1, item.quantity - 1))
                              }
                              disabled={item.quantity <= 1}
                              className="h-10 w-10"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                              className="h-10 w-10"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600">${item.product.price} each</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal ({getTotalItems()} items)</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                      </p>
                    )}
                    <div className="flex justify-between text-gray-700">
                      <span>Tax (8%)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-rose-600 hover:bg-rose-700 h-12 mb-3">
                    <Link to="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link to="/all-products">Continue Shopping</Link>
                  </Button>

                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Free returns within 30 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Authentic products guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CartPage
