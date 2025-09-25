import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">KYN</span>
              </div>
              <span className="text-xl font-bold tracking-wider">KYN0808</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Join the KYN List</h3>
              <p className="text-gray-400 text-sm">Early access to drops, exclusive edits, and private events.</p>

              <div className="flex space-x-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-white text-black hover:bg-gray-200">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h4 className="font-semibold">COLLECTIONS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/collections" className="hover:text-white transition-colors">
                  Party Wear
                </a>
              </li>
              <li>
                <a href="/collections" className="hover:text-white transition-colors">
                  Formal Wear
                </a>
              </li>
              <li>
                <a href="/collections" className="hover:text-white transition-colors">
                  Luxury Essentials
                </a>
              </li>
              <li>
                <a href="/collections" className="hover:text-white transition-colors">
                  Seasonal & Limited
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">ABOUT US</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <span className="text-gray-400">Kynfashionhouse0808@gmail.com</span>
              </li>
              <li>
                <span className="text-gray-400">9621572283</span>
              </li>
              <li>
                <span className="text-gray-400">
                  Omaxe hazratganj, Gomti nagar, Lucknow - 226010, Shop no - 29, Ground floor
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 KYN0808. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
