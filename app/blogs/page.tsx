import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "THE POWER OF PERFUME - HOW SCENTS INFLUENCE EMOTIONS & CONFIDENCE",
    excerpt:
      "A fragrance does more than smell good—it can uplift, relax, or empower you. Learn how different scents influence mood, energy, and confidence levels.",
    image: "/blog-perfume-emotions-coral-starfish.jpg",
    category: "Psychology",
    author: "Sandy Martinez",
    date: "2024-03-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Perfume Gifting Made Easy - How to Pick the Perfect Scent",
    excerpt:
      "Choosing a fragrance as a gift can be daunting. Our expert guide helps you select the perfect scent for your loved ones based on their personality and preferences.",
    image: "/blog-perfume-gifting-marble-surface.jpg",
    category: "Guide",
    author: "Emily Chen",
    date: "2024-03-12",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Fragrance Layering - The Ultimate Guide to Customizing Your Scent",
    excerpt:
      "Master the art of fragrance layering to create your unique signature scent. Learn which notes complement each other and how to build complexity.",
    image: "/blog-fragrance-layering-golden-bottle.jpg",
    category: "Tutorial",
    author: "Michael Rodriguez",
    date: "2024-03-10",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Niche Perfumes - The Secret to Exclusive, Signature Scents",
    excerpt:
      "Discover the world of niche fragrances and why they're becoming the choice for those seeking truly unique and exclusive scents.",
    image: "/blog-niche-perfumes-flowers.jpg",
    category: "Education",
    author: "Sarah Johnson",
    date: "2024-03-08",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    title: "A Jasmine Sunset Ride - The History of Perfume",
    excerpt:
      "Journey through the fascinating history of perfumery, from ancient civilizations to modern luxury houses, and discover how fragrance has shaped culture.",
    image: "/blog-jasmine-sunset-history.jpg",
    category: "History",
    author: "Dr. Alexandra Dubois",
    date: "2024-03-05",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: 6,
    title: "Perfume Notes 101 - How to Choose Your Ideal Scent",
    excerpt:
      "Understanding fragrance notes is key to finding your perfect scent. Learn about top, middle, and base notes and how they work together.",
    image: "/blog-perfume-notes-pyramid.jpg",
    category: "Education",
    author: "James Wilson",
    date: "2024-03-03",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    title: "The Latest Luxury Perfume Trends - Our Top 3 Picks",
    excerpt:
      "Stay ahead of the fragrance curve with our analysis of the latest luxury perfume trends and our expert recommendations for 2024.",
    image: "/blog-luxury-trends-2024.jpg",
    category: "Trends",
    author: "Isabella Martinez",
    date: "2024-03-01",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 8,
    title: "The Luxury Connoisseur's Choice: Our Rarest All-Day Scents",
    excerpt:
      "Explore our most exclusive collection of long-lasting fragrances designed for the discerning collector who appreciates rarity and quality.",
    image: "/blog-rare-luxury-scents.jpg",
    category: "Collection",
    author: "Robert Kim",
    date: "2024-02-28",
    readTime: "7 min read",
    featured: true,
  },
]

const categories = ["All", "Psychology", "Guide", "Tutorial", "Education", "History", "Trends", "Collection"]

export default function BlogsPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
          <div className="w-32 h-64 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
        </div>
        <div className="absolute right-24 bottom-20 opacity-20">
          <div className="w-24 h-48 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Stories</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Dive into the fascinating world of fragrances with our expert insights, guides, and stories that celebrate
            the art of perfumery.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and insightful articles about the world of luxury fragrances.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-rose-600 text-white">Featured</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge variant="secondary" className="bg-white bg-opacity-20 text-white mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-bold leading-tight">{post.title}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-rose-600 group-hover:text-white bg-transparent"
                  >
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of fragrance insights, guides, and educational content.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-rose-600 hover:text-white bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-rose-600 text-white">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white bg-opacity-90 text-gray-900">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">Read Article</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Stories</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest fragrance insights, guides, and exclusive content.
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
