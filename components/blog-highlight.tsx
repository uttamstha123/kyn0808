import { Button } from "@/components/ui/button"

export function BlogHighlight() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src="/IMG-20250925-WA0014.jpg" alt="KYN Lookbook" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">THE KYN EDIT – STYLE, POWER, CONFIDENCE</h2>
            <p className="text-gray-700 leading-relaxed">
              Explore how modern tailoring, bold textures, and timeless silhouettes create looks that turn moments into
              statements. Fashion that’s trendy, empowering, and undeniably you.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Read the Edit</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
