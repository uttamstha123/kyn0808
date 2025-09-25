import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

function BlogsPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Psychology of Fragrance: How Scents Influence Our Emotions",
      excerpt:
        "Discover the fascinating connection between fragrances and our emotional well-being, and learn how to choose scents that enhance your mood.",
      image: "/blog-perfume-emotions-coral-starfish.jpg",
      author: "Dr. Sarah Mitchell",
      readTime: "8 min read",
      category: "Psychology",
      date: "Dec 15, 2024",
    },
    {
      id: 2,
      title: "The Art of Perfume Gifting: Choosing the Perfect Scent for Someone Special",
      excerpt:
        "Master the delicate art of selecting fragrances as gifts with our comprehensive guide to understanding preferences and personalities.",
      image: "/blog-perfume-gifting-marble-surface.jpg",
      author: "Isabella Rodriguez",
      readTime: "6 min read",
      category: "Lifestyle",
      date: "Dec 12, 2024",
    },
  ]

  const regularPosts = [
    {
      id: 3,
      title: "Fragrance Layering: Creating Your Signature Scent",
      excerpt:
        "Learn the techniques of fragrance layering to create a unique, personalized scent that's entirely your own.",
      image: "/blog-fragrance-layering-golden-bottle.jpg",
      author: "Marcus Chen",
      readTime: "5 min read",
      category: "Tips & Tricks",
      date: "Dec 10, 2024",
    },
    {
      id: 4,
      title: "Understanding Niche Perfumes: What Makes Them Special",
      excerpt:
        "Explore the world of niche fragrances and discover what sets these artisanal creations apart from mainstream perfumes.",
      image: "/blog-niche-perfumes-flowers.jpg",
      author: "Amelie Dubois",
      readTime: "7 min read",
      category: "Education",
      date: "Dec 8, 2024",
    },
    {
      id: 5,
      title: "The Story Behind Jasmine Sunset: A Fragrance Journey",
      excerpt:
        "Take a behind-the-scenes look at the creation of one of our most beloved fragrances and the inspiration behind its unique blend.",
      image: "/blog-jasmine-sunset-history.jpg",
      author: "Sandy Williams",
      readTime: "4 min read",
      category: "Behind the Scenes",
      date: "Dec 5, 2024",
    },
    {
      id: 6,
      title: "Decoding Fragrance Notes: A Beginner's Guide",
      excerpt:
        "Understand the complex world of fragrance notes and learn how to identify and appreciate the different layers in your favorite scents.",
      image: "/blog-perfume-notes-pyramid.jpg",
      author: "James Thompson",
      readTime: "6 min read",
      category: "Education",
      date: "Dec 3, 2024",
    },
    {
      id: 7,
      title: "Luxury Fragrance Trends for 2024",
      excerpt:
        "Stay ahead of the curve with our comprehensive look at the emerging trends shaping the luxury fragrance industry this year.",
      image: "/blog-luxury-trends-2024.jpg",
      author: "Victoria Laurent",
      readTime: "9 min read",
      category: "Trends",
      date: "Dec 1, 2024",
    },
    {
      id: 8,
      title: "The World's Most Rare and Expensive Luxury Scents",
      excerpt:
        "Journey into the exclusive world of ultra-luxury fragrances and discover what makes these rare scents worth their extraordinary prices.",
      image: "/blog-rare-luxury-scents.jpg",
      author: "Alexander Petrov",
      readTime: "10 min read",
      category: "Luxury",
      date: "Nov 28, 2024",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white overflow-hidden">
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
          <div className="w-32 h-64 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Fragrance Stories</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Dive deep into the world of luxury fragrances with expert insights, tips, and stories from the perfume
            industry.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-orange-100 relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-rose-600 text-white">Featured</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <Badge variant="outline" className="text-rose-600 border-rose-600">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button
                      variant="outline"
                      className="border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white bg-transparent"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regular Posts */}
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-orange-100 relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Badge variant="outline" className="text-rose-600 border-rose-600 mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700 p-0">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Fragrance Insights</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest fragrance trends, expert tips, and exclusive stories
            from the world of luxury perfumes.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <Button className="bg-rose-600 hover:bg-rose-700">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogsPage
