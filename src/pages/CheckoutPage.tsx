import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/src/context/CartContext"
import { CheckCircle2, ChevronRight, CreditCard, MapPin, Package, Lock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

type Step = "shipping" | "payment" | "review"

type ShippingInfo = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

type PaymentInfo = {
  cardNumber: string
  cardName: string
  expiryDate: string
  cvv: string
}

function CheckoutPage() {
  const navigate = useNavigate()
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState<Step>("shipping")
  const [completedSteps, setCompletedSteps] = useState<Step[]>([])

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

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
            <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Items to Checkout</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Your cart is empty. Add some items before proceeding to checkout.
            </p>
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link to="/all-products">Start Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const validateShipping = () => {
    const required = ["firstName", "lastName", "email", "phone", "address", "city", "state", "zipCode"]
    for (const field of required) {
      if (!shippingInfo[field as keyof ShippingInfo]) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        })
        return false
      }
    }
    return true
  }

  const validatePayment = () => {
    if (!paymentInfo.cardNumber || !paymentInfo.cardName || !paymentInfo.expiryDate || !paymentInfo.cvv) {
      toast({
        title: "Missing Payment Information",
        description: "Please fill in all payment details",
        variant: "destructive",
      })
      return false
    }
    return true
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateShipping()) {
      setCompletedSteps([...completedSteps, "shipping"])
      setCurrentStep("payment")
    }
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validatePayment()) {
      setCompletedSteps([...completedSteps, "payment"])
      setCurrentStep("review")
    }
  }

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. You will receive a confirmation email shortly.",
    })
    clearCart()
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }

  const steps = [
    { id: "shipping" as Step, label: "Shipping", icon: MapPin },
    { id: "payment" as Step, label: "Payment", icon: CreditCard },
    { id: "review" as Step, label: "Review", icon: Package },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link> / 
            <Link to="/cart" className="hover:text-gray-900"> Cart</Link> / 
            <span className="text-gray-900"> Checkout</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((step, index) => {
                const isCompleted = completedSteps.includes(step.id)
                const isCurrent = currentStep === step.id
                const Icon = step.icon

                return (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isCompleted
                            ? "bg-green-600 text-white"
                            : isCurrent
                            ? "bg-rose-600 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                      </div>
                      <div className="mt-2 text-center">
                        <div
                          className={`text-sm font-semibold ${
                            isCurrent ? "text-rose-600" : isCompleted ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {step.label}
                        </div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <ChevronRight
                        className={`w-6 h-6 mx-2 ${
                          completedSteps.includes(steps[index + 1].id) ? "text-green-600" : "text-gray-300"
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Shipping Information */}
              {currentStep === "shipping" && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                    <form onSubmit={handleShippingSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={shippingInfo.firstName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={shippingInfo.lastName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            value={shippingInfo.state}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            value={shippingInfo.zipCode}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 h-12">
                        Continue to Payment
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Payment Information */}
              {currentStep === "payment" && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Payment Information</h2>
                      <div className="flex items-center text-sm text-gray-600">
                        <Lock className="w-4 h-4 mr-1" />
                        Secure Payment
                      </div>
                    </div>

                    <Tabs defaultValue="card" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
                        <TabsTrigger value="upi">UPI/Other</TabsTrigger>
                      </TabsList>

                      <TabsContent value="card">
                        <form onSubmit={handlePaymentSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={paymentInfo.cardNumber}
                              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="cardName">Cardholder Name *</Label>
                            <Input
                              id="cardName"
                              placeholder="John Doe"
                              value={paymentInfo.cardName}
                              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiryDate">Expiry Date *</Label>
                              <Input
                                id="expiryDate"
                                placeholder="MM/YY"
                                value={paymentInfo.expiryDate}
                                onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                type="password"
                                maxLength={4}
                                value={paymentInfo.cvv}
                                onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                                required
                              />
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1"
                              onClick={() => setCurrentStep("shipping")}
                            >
                              Back
                            </Button>
                            <Button type="submit" className="flex-1 bg-rose-600 hover:bg-rose-700">
                              Review Order
                              <ChevronRight className="w-5 h-5 ml-2" />
                            </Button>
                          </div>
                        </form>
                      </TabsContent>

                      <TabsContent value="upi">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="upiId">UPI ID</Label>
                            <Input id="upiId" placeholder="yourname@upi" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Other payment methods like PayPal, Apple Pay, Google Pay will be available soon.
                          </p>
                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1"
                              onClick={() => setCurrentStep("shipping")}
                            >
                              Back
                            </Button>
                            <Button
                              type="button"
                              className="flex-1 bg-rose-600 hover:bg-rose-700"
                              onClick={() => {
                                setCompletedSteps([...completedSteps, "payment"])
                                setCurrentStep("review")
                              }}
                            >
                              Review Order
                              <ChevronRight className="w-5 h-5 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}

              {/* Order Review */}
              {currentStep === "review" && (
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Order</h2>

                      {/* Shipping Address */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">Shipping Address</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setCurrentStep("shipping")}
                            className="text-rose-600"
                          >
                            Edit
                          </Button>
                        </div>
                        <div className="text-gray-700 space-y-1 bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium">
                            {shippingInfo.firstName} {shippingInfo.lastName}
                          </p>
                          <p>{shippingInfo.address}</p>
                          <p>
                            {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                          </p>
                          <p>{shippingInfo.country}</p>
                          <p className="pt-2">{shippingInfo.email}</p>
                          <p>{shippingInfo.phone}</p>
                        </div>
                      </div>

                      <Separator className="my-6" />

                      {/* Payment Method */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">Payment Method</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setCurrentStep("payment")}
                            className="text-rose-600"
                          >
                            Edit
                          </Button>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                          <CreditCard className="w-6 h-6 text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Card ending in {paymentInfo.cardNumber.slice(-4)}
                            </p>
                            <p className="text-sm text-gray-600">{paymentInfo.cardName}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Order Items */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Order Items ({getTotalItems()})</h3>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4">
                            <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={item.product.images[0] || "/placeholder.svg"}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.product.name}</h4>
                              <div className="flex gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  Size: {item.selectedSize}
                                </Badge>
                                {item.selectedColor && (
                                  <Badge variant="outline" className="text-xs">
                                    {item.selectedColor}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                                <span className="font-semibold text-gray-900">
                                  ${(item.product.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" onClick={() => setCurrentStep("payment")}>
                      Back
                    </Button>
                    <Button onClick={handlePlaceOrder} className="flex-1 bg-rose-600 hover:bg-rose-700 h-12">
                      Place Order (${total.toFixed(2)})
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Secure SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Free returns on all orders</span>
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

export default CheckoutPage
