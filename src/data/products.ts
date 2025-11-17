export type Product = {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  images: string[]
  inStock: boolean
  sizes: string[]
  colors?: string[]
  description: string
  details?: {
    fabric?: string
    fit?: string
    care?: string[]
  }
}

export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Sequin Cocktail Dress",
    category: "Party Wear",
    price: 220,
    originalPrice: 280,
    rating: 4.7,
    reviewCount: 96,
    images: [
      "/IMG-20250925-WA0003.jpg",
      "/IMG-20250925-WA0004.jpg",
      "/IMG-20250925-WA0005.jpg",
    ],
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gold"],
    description:
      "A statement cocktail dress with hand-placed sequins and a flattering silhouette designed for evenings that turn into memories.",
    details: {
      fabric: "Polyester blend with sequin overlay",
      fit: "Tailored fit, knee length",
      care: ["Dry clean only", "Do not tumble dry"],
    },
  },
  {
    id: "2",
    name: "Tailored Power Blazer & Trousers",
    category: "Formal Wear",
    price: 350,
    originalPrice: 420,
    rating: 4.8,
    reviewCount: 124,
    images: [
      "/IMG-20250925-WA0004.jpg",
      "/IMG-20250925-WA0006.jpg",
      "/IMG-20250925-WA0005.jpg",
    ],
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal"],
    description:
      "A sharp, structured blazer with matching trousers for a commanding presence at work or formal events.",
    details: {
      fabric: "Wool blend with stretch",
      fit: "Structured blazer, straight-leg trousers",
      care: ["Dry clean recommended", "Steam to remove wrinkles"],
    },
  },
  {
    id: "3",
    name: "Silk Co-ord Set",
    category: "Luxury Essentials",
    price: 180,
    originalPrice: 210,
    rating: 4.6,
    reviewCount: 81,
    images: [
      "/IMG-20250925-WA0005.jpg",
      "/IMG-20250925-WA0003.jpg",
      "/IMG-20250925-WA0006.jpg",
    ],
    inStock: true,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Blush"],
    description:
      "Effortless, elevated two-piece set crafted in pure silk for all-day comfort and understated luxury.",
    details: {
      fabric: "100% Mulberry silk",
      fit: "Relaxed fit, elasticated waist",
      care: ["Hand wash cold", "Lay flat to dry", "Cool iron on reverse"],
    },
  },
  {
    id: "4",
    name: "Festive Designer Exclusive Dress",
    category: "Seasonal & Limited",
    price: 420,
    originalPrice: 500,
    rating: 4.9,
    reviewCount: 203,
    images: [
      "/IMG-20250925-WA0006.jpg",
      "/IMG-20250925-WA0004.jpg",
      "/IMG-20250925-WA0003.jpg",
    ],
    inStock: true,
    sizes: ["S", "M", "L"],
    colors: ["Crimson", "Emerald"],
    description:
      "Limited-edition festive dress with intricate detailing and a luxurious drape, perfect for special occasions.",
    details: {
      fabric: "Silk blend with hand embroidery",
      fit: "A-line, floor length",
      care: ["Dry clean only", "Store in garment bag"],
    },
  },
]
