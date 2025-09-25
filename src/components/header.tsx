import { ShoppingCart, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" onError={(e) => ((e.currentTarget.src = '/icon.png'))} alt="KYN0808" className="h-8 w-8 rounded-full bg-white object-contain" />
          <Link to="/" className="text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors">KYN0808</Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/collections" className="hover:text-gray-300 transition-colors">Party Wear</Link>
          <Link to="/collections" className="hover:text-gray-300 transition-colors">Formal Wear</Link>
          <Link to="/collections" className="hover:text-gray-300 transition-colors">Luxury Essentials</Link>
          <Link to="/collections" className="hover:text-gray-300 transition-colors">Seasonal & Limited</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link to="/blogs" className="hover:text-gray-300 transition-colors">
            Stories
          </Link>
          <Link to="/all-products" className="hover:text-gray-300 transition-colors">Catalog</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <span className="text-gray-300">10,000+ Five Star Reviews | </span>
            <span className="text-white">SALE</span>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
