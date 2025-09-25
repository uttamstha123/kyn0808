import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { AboutSection } from "@/components/about-section"
import { WelcomeSection } from "@/components/welcome-section"
import { BlogHighlight } from "@/components/blog-highlight"
import { OurStories } from "@/components/our-stories"
import { WhereLoveMeetsLuxury } from "@/components/where-love-meets-luxury"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <WelcomeSection />
      <BlogHighlight />
      <OurStories />
      <WhereLoveMeetsLuxury />
      <Footer />
    </div>
  )
}
