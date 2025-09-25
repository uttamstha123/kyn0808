export function WhereLoveMeetsLuxury() {
  const stories = [
    {
      title: "Cocktail Dresses",
      description: "Designed for glamorous nights & bold statements.",
  image: "/IMG-20250925-WA0010.jpg",
      category: "Party Wear",
    },
    {
      title: "Blazers & Suits",
      description: "Power dressing with a classy edge.",
  image: "/IMG-20250925-WA0011.jpg",
      category: "Formal Wear",
    },
    {
      title: "Statement Tops",
      description: "Everyday luxury with a modern touch.",
  image: "/IMG-20250925-WA0012.jpg",
      category: "Essentials",
    },
    {
      title: "Designer Exclusives",
      description: "Exclusive pieces curated for the season.",
  image: "/IMG-20250925-WA0013.jpg",
      category: "Limited",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">KYN COLLECTION CATALOG</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover party wear, formal wear, essentials, and limited editions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-medium bg-white bg-opacity-20 px-2 py-1 rounded">{story.category}</span>
                  <h3 className="font-semibold mt-2 text-sm leading-tight">{story.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
