export function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Welcome to KYN</h2>
            <p className="text-gray-700 leading-relaxed">
              Discover luxury western wear crafted for women who lead with style. From bold party looks to refined
              formal wear, KYN blends premium fabrics with modern silhouettes—so every outfit makes a statement.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-neutral-100 to-stone-200 p-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
