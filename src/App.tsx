import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

// Import page components
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import FragrancesPage from "./pages/FragrancesPage"
import CollectionsPage from "./pages/CollectionsPage"
import BlogsPage from "./pages/BlogsPage"
import AllProductsPage from "./pages/AllProductsPage"
import ContactPage from "./pages/ContactPage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Suspense
          fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/fragrances" element={<FragrancesPage />} /> */}
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/all-products" element={<AllProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Suspense>
        <Analytics />
      </Router>
    </div>
  )
}

export default App
