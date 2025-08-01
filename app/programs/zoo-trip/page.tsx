import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ZooTrip() {
  return (
    <div className="min-h-screen bg-zoo-teal-700">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Zoo Trips and Adventures"
        subtitle="Explore the Wild Side of Patna"
        backgroundImage="/images/header/about-zoo.jpg"
        height="medium"
      />

      {/* Highlight Banner */}
      <section className="bg-zoo-teal-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-zoo-yellow-600 text-zoo-teal-900 border-zoo-yellow-600 mb-4">
              Perfect for All Ages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Unforgettable Zoo Trips</h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Discover the joy of outdoor learning and wildlife exploration with a trip to Patna Zoo — ideal for school groups, families, and nature enthusiasts alike.
            </p>
          </div>

          {/* Promotional Banner */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src="/images/a-h-1.jpg"
                width={1920}
                height={1080}
                alt="Visitors enjoying the zoo"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
                style={{
                  aspectRatio: "21/9",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Zoo Trips */}
      <section className="bg-zoo-teal-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Why Plan a Zoo Trip?"
              subtitle="Engage. Explore. Experience."
            />

            <div className="prose prose-lg max-w-none text-white/90 space-y-6">
              <p className="text-xl leading-relaxed">
                A trip to the zoo isn't just a walk in the park—it's a chance to connect with nature, learn about rare and exotic animals, and spark curiosity in young minds. Patna Zoo offers a rich environment where education meets adventure.
              </p>

              <p className="leading-relaxed">
                Whether you're visiting with school children or planning a weekend outing with friends and family, our zoo is equipped to make your trip exciting, memorable, and informative. From guided tours to self-paced exploration, there’s something for everyone.
              </p>

              <p className="leading-relaxed">
                Kids especially love spotting iconic animals like the Royal Bengal Tiger, Asiatic Lion, and playful monkeys, while adults enjoy the tranquil botanical gardens and scenic walking paths.
              </p>

              <p className="leading-relaxed">
                Planning a trip is easy! Our facilities include picnic zones, drinking water stations, rest areas, and well-marked trails to ensure a hassle-free experience. Weekdays are best for group bookings and educational excursions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-zoo-teal-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Wild Journey Today</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Book your group trip, plan a family day out, or simply take a break to reconnect with nature. Every visit helps support wildlife care and conservation efforts at Patna Zoo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold px-8 py-3 rounded-full transition-colors duration-200 flex gap-4 justify-center items-center"
              >
                <Download className="w-5 h-5" />
                <span>Download Time Sheet</span>
              </Link>
              <Link
                href="https://maps.app.goo.gl/uWp15bYGRUtJoe4NA"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-3 rounded-full transition-colors duration-200 flex gap-4 justify-center items-center" 
              >
                <MapPin className="w-5 h-5" />
                <span>Open in Maps</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
