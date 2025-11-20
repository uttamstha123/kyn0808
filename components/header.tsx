import { ShoppingCart, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/src/context/CartContext"

export function Header() {
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" onError={(e) => ((e.currentTarget.src = '/icon.png'))} alt="KYN0808" className="h-8 w-8 rounded-full bg-white object-contain" />
          <div className="text-2xl font-bold tracking-wider">KYN0808</div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/collections" className="hover:text-gray-300 transition-colors">
            Party Wear
          </Link>
          <Link to="/collections" className="hover:text-gray-300 transition-colors">
            Formal Wear
          </Link>
          <Link to="/collections" className="hover:text-gray-300 transition-colors">
            Luxury Essentials
          </Link>
          <Link to="/collections" className="hover:text-gray-300 transition-colors">
            Seasonal & Limited
          </Link>
          <Link to="/all-products" className="hover:text-gray-300 transition-colors">
            Catalog
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="text-sm hidden md:block text-gray-300">KYN – Bold. Classy. Modern.</div>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
            <Search className="h-5 w-5" />
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-white hover:text-gray-300 relative">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-rose-600 text-white text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
