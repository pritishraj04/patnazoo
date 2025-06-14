"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar, Ruler, Heart, Leaf, Sun, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample plant data - in a real app, this would come from an API or database
const plantsData = {
  "banyan-tree": {
    id: 1,
    name: "Banyan Tree",
    species: "Ficus benghalensis",
    category: "Trees",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    height: "20-25m",
    bloomingSeason: "Year-round",
    medicinal: true,
    description:
      "The Banyan tree is one of India's most revered trees, known for its massive canopy and aerial roots. It's considered sacred in Hindu culture and provides shelter to countless species of birds and animals.",
    habitat: "Native to India and Pakistan, thrives in tropical and subtropical regions",
    lifespan: "Over 500 years",
    sunlight: "Full sun to partial shade",
    watering: "Moderate, drought tolerant once established",
    temperature: "20-35°C",
    medicinalUses: "Bark used for treating diabetes, leaves for wounds and skin conditions",
    culturalSignificance: "Sacred tree in Hinduism, symbol of eternal life and wisdom",
    conservationStatus: "Least Concern",
    location: "Central Garden Area, Near Main Entrance",
    bestViewingTime: "Early morning and evening",
    interestingFacts: [
      "Can spread over several acres with its aerial roots",
      "Provides oxygen for up to 20 people per day",
      "Can live for over 1000 years",
      "National tree of India",
    ],
  },
  "neem-tree": {
    id: 2,
    name: "Neem Tree",
    species: "Azadirachta indica",
    category: "Trees",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    height: "15-20m",
    bloomingSeason: "March-May",
    medicinal: true,
    description:
      "Known as the 'Village Pharmacy', the Neem tree is one of the most versatile medicinal plants. Every part of the tree has therapeutic properties and has been used in traditional medicine for centuries.",
    habitat: "Native to India and Myanmar, grows in arid and semi-arid regions",
    lifespan: "150-200 years",
    sunlight: "Full sun",
    watering: "Low to moderate, highly drought tolerant",
    temperature: "21-32°C",
    medicinalUses: "Antibacterial, antifungal, used for skin conditions, dental care, and pest control",
    culturalSignificance: "Sacred tree, used in traditional Ayurvedic medicine",
    conservationStatus: "Least Concern",
    location: "Medicinal Plant Garden",
    bestViewingTime: "Morning hours during flowering season",
    interestingFacts: [
      "Called 'Sarva Roga Nivarini' - curer of all ailments",
      "Natural pesticide and insect repellent",
      "Leaves are used to store grains to prevent pest infestation",
      "Can survive in poor soil conditions",
    ],
  },
  // Add more plant data as needed...
}

export default function PlantDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [plant, setPlant] = useState<any>(null)

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const plantData = plantsData[slug as keyof typeof plantsData]
    if (plantData) {
      setPlant(plantData)
    }
  }, [slug])

  if (!plant) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-zoo-teal-700 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Plant not found</h1>
            <Link href="/plants">
              <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900">Back to Plants</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zoo-teal-700">
        {/* Breadcrumb */}
        <div className="bg-zoo-teal-800 py-4">
          <div className="zoo-container">
            <Link
              href="/plants"
              className="inline-flex items-center text-zoo-yellow-600 hover:text-zoo-yellow-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Plants
            </Link>
          </div>
        </div>

        <div className="zoo-container py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={plant.images[currentImageIndex] || "/placeholder.svg"}
                  alt={plant.name}
                  fill
                  className="object-cover"
                />
              </div>

              {plant.images.length > 1 && (
                <div className="flex gap-2">
                  {plant.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? "border-zoo-yellow-600"
                          : "border-transparent hover:border-zoo-yellow-600/50"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${plant.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plant Information */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    className={`text-white border-none uppercase tracking-wide font-heading text-sm font-bold px-3 py-1 ${
                      plant.category === "Trees"
                        ? "bg-green-600"
                        : plant.category === "Flowers"
                          ? "bg-pink-500"
                          : plant.category === "Herbs"
                            ? "bg-emerald-500"
                            : plant.category === "Grasses"
                              ? "bg-lime-500"
                              : plant.category === "Aquatic"
                                ? "bg-blue-500"
                                : plant.category === "Succulents"
                                  ? "bg-teal-500"
                                  : "bg-zoo-teal-600"
                    }`}
                  >
                    {plant.category}
                  </Badge>
                  {plant.medicinal && (
                    <Badge className="bg-red-500 text-white">
                      <Heart className="w-3 h-3 mr-1" />
                      Medicinal
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl font-heading font-bold text-white mb-2">{plant.name}</h1>
                <p className="text-zoo-yellow-600 text-xl italic mb-4">{plant.species}</p>
                <p className="text-white/80 text-lg leading-relaxed">{plant.description}</p>
              </div>

              {/* Quick Facts */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-heading text-xl mb-4">Quick Facts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <Ruler className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">Height: {plant.height}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">Blooms: {plant.bloomingSeason}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Sun className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">{plant.sunlight}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Droplets className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">{plant.watering}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visit Information */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-heading text-xl mb-4">Visit Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-zoo-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-white/80 text-sm">{plant.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-zoo-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Best Viewing Time</p>
                        <p className="text-white/80 text-sm">{plant.bestViewingTime}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Habitat & Care */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-heading text-xl mb-4">Habitat & Care</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">Natural Habitat</h4>
                    <p className="text-white/80 text-sm">{plant.habitat}</p>
                  </div>
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">Lifespan</h4>
                    <p className="text-white/80 text-sm">{plant.lifespan}</p>
                  </div>
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">Temperature Range</h4>
                    <p className="text-white/80 text-sm">{plant.temperature}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural & Medicinal Significance */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-heading text-xl mb-4">Significance</h3>
                <div className="space-y-4">
                  {plant.medicinal && (
                    <div>
                      <h4 className="text-zoo-yellow-600 font-medium mb-1">Medicinal Uses</h4>
                      <p className="text-white/80 text-sm">{plant.medicinalUses}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">Cultural Significance</h4>
                    <p className="text-white/80 text-sm">{plant.culturalSignificance}</p>
                  </div>
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">Conservation Status</h4>
                    <p className="text-white/80 text-sm">{plant.conservationStatus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interesting Facts */}
          <Card className="mt-8 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-white font-heading text-xl mb-4">Did You Know?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {plant.interestingFacts.map((fact: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-zoo-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 text-sm">{fact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-white font-heading text-2xl mb-4">Plan Your Visit</h3>
            <p className="text-white/80 mb-6">Come and see this amazing plant species in person at Patna Zoo</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tickets">
                <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold px-8 py-3">
                  BOOK TICKETS
                </Button>
              </Link>
              <Link href="/plants">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zoo-teal-900 px-8 py-3"
                >
                  EXPLORE MORE PLANTS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
