import { ShoppingCart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" onError={(e) => ((e.currentTarget.src = '/icon.png'))} alt="KYN0808" className="h-8 w-8 rounded-full bg-white object-contain" />
          <div className="text-2xl font-bold tracking-wider">KYN0808</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/collections" className="hover:text-gray-300 transition-colors">
            Party Wear
          </a>
          <a href="/collections" className="hover:text-gray-300 transition-colors">
            Formal Wear
          </a>
          <a href="/collections" className="hover:text-gray-300 transition-colors">
            Luxury Essentials
          </a>
          <a href="/collections" className="hover:text-gray-300 transition-colors">
            Seasonal & Limited
          </a>
          <a href="/all-products" className="hover:text-gray-300 transition-colors">
            Catalog
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="text-sm hidden md:block text-gray-300">KYN – Bold. Classy. Modern.</div>
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
