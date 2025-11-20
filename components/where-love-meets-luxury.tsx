import { useCallback, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CatalogEntry = {
  title: string
  subtitle: string
  description: string
  category: string
  image: string
  href: string
  lookbookHref?: string
}

const catalog: CatalogEntry[] = [
  {
    title: "Cocktail Dresses",
    subtitle: "Sequins • Drapes • Drama",
    description:
      "Designed to turn heads at every soirée with intricate handwork, fluid drapes, and unapologetic sparkle.",
    category: "Party Wear",
    image: "/IMG-20250925-WA0010.jpg",
    href: "/collections?focus=party-wear",
    lookbookHref: "/collections",
  },
  {
    title: "Blazers & Power Suits",
    subtitle: "Tailored • Structured • Statement",
    description:
      "Architectural lines crafted in luxe suiting blends that move with you from boardroom to after-hours.",
    category: "Formal Wear",
    image: "/IMG-20250925-WA0011.jpg",
    href: "/collections?focus=formal-wear",
  },
  {
    title: "Statement Tops",
    subtitle: "Polished • Versatile • Effortless",
    description:
      "Elevated separates with signature detailing—perfect for layering or making the simplest pairing feel special.",
    category: "Essentials",
    image: "/IMG-20250925-WA0012.jpg",
    href: "/collections?focus=essentials",
  },
  {
    title: "Designer Exclusives",
    subtitle: "Limited • Curated • Collectible",
    description:
      "Limited drops crafted in premium fabrics for milestone moments. Once gone, they are gone for good.",
    category: "Limited Edition",
    image: "/IMG-20250925-WA0013.jpg",
    href: "/collections?focus=limited-edition",
    lookbookHref: "/collections",
  },
]

export function WhereLoveMeetsLuxury() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCollection = useMemo(() => catalog[activeIndex] ?? catalog[0], [activeIndex])

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + catalog.length) % catalog.length)
  }, [])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % catalog.length)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">KYN COLLECTION CATALOG</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover signature party wear, refined formal edits, everyday essentials, and limited couture drops waiting
            for their next wardrobe.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-start">
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl">
            <img
              src={activeCollection.image || "/placeholder.svg"}
              alt={activeCollection.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={goToPrevious}
                className="h-10 w-10 bg-white/15 text-white backdrop-blur hover:bg-white/25"
                aria-label="View previous collection"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={goToNext}
                className="h-10 w-10 bg-white/15 text-white backdrop-blur hover:bg-white/25"
                aria-label="View next collection"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
              <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-widest">
                {activeCollection.category}
              </div>
              <div className="mt-5 space-y-3">
                <h3 className="text-3xl font-semibold sm:text-4xl">{activeCollection.title}</h3>
                <p className="text-sm font-medium text-white/80 sm:text-base">{activeCollection.subtitle}</p>
                <p className="text-sm text-white/70 sm:text-base">{activeCollection.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link to={activeCollection.href}>Explore This Edit</Link>
                </Button>
                {activeCollection.lookbookHref ? (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white/40 bg-transparent text-white hover:bg-white/10"
                  >
                    <Link to={activeCollection.lookbookHref}>View Lookbook</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {catalog.map((entry, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={entry.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-full rounded-2xl border px-6 py-5 text-left transition-all",
                    "bg-white/80 backdrop-blur hover:border-gray-300 hover:bg-white",
                    isActive ? "border-gray-900 shadow-lg" : "border-transparent"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">{entry.category}</p>
                      <h4 className="mt-1 text-lg font-semibold text-gray-900">{entry.title}</h4>
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-5 w-5 text-gray-400 transition-transform",
                        isActive ? "translate-x-1 text-gray-900" : ""
                      )}
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{entry.description}</p>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link to="/collections">Browse Full Catalog</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
