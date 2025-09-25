import { Button } from "@/components/ui/button"

export function OurStories() {
  const stories = [
    {
      title: "Party Wear Guide – Styling Sequin & Shimmer",
  image: "/IMG-20250925-WA0007.jpg",
      category: "Read More",
    },
    {
      title: "Power Dressing – Blazers That Mean Business",
  image: "/IMG-20250925-WA0008.jpg",
      category: "Read More",
    },
    {
      title: "Co-ord Sets – Effortless Luxury for Everyday",
  image: "/IMG-20250925-WA0009.jpg",
      category: "Read More",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">KYN STYLE STORIES</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                {story.title}
              </h3>
              <Button variant="outline" size="sm" className="text-sm bg-transparent">
                {story.category}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
