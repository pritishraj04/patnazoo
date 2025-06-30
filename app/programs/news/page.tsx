import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Megaphone, Award, Heart, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "News Updates - Patna Zoo",
  description:
    "Stay updated with the latest news, announcements, and events from Patna Zoo. Read about our conservation efforts, new arrivals, and special programs.",
}

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "New Tiger Cubs Born at Patna Zoo",
      date: "2024-12-15",
      category: "Birth Announcement",
      image: "/images/meet-animals/a1.jpg",
      summary:
        "We are thrilled to announce the birth of two healthy Royal Bengal Tiger cubs. The mother and cubs are doing well under expert veterinary care.",
      content:
        "Our Royal Bengal Tiger pair has welcomed two beautiful cubs, marking a significant milestone in our breeding program. The cubs, born on December 10th, are healthy and active. Our veterinary team is closely monitoring their progress, and visitors will be able to see them once they are old enough to venture outside their den.",
      featured: true,
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Patna Zoo Wins National Conservation Award",
      date: "2024-12-10",
      category: "Achievement",
      image: "/images/meet-animals/a2.jpg",
      summary:
        "Patna Zoo has been honored with the National Wildlife Conservation Excellence Award for outstanding efforts in species preservation.",
      content:
        "The Central Zoo Authority has recognized Patna Zoo's exceptional work in wildlife conservation and breeding programs. This prestigious award acknowledges our successful breeding of endangered species and our commitment to wildlife education.",
      featured: false,
      readTime: "2 min read",
    },
    {
      id: 3,
      title: "Special Winter Care Program Launched",
      date: "2024-12-05",
      category: "Program Launch",
      image: "/images/meet-animals/a3.jpg",
      summary:
        "A comprehensive winter care program has been initiated to ensure the comfort and health of all animals during the cold season.",
      content:
        "With winter approaching, we have implemented special care measures including heated enclosures, modified diets rich in calories, and additional bedding materials. Our veterinary team has also prepared winter health protocols for all species.",
      featured: false,
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "New Educational Center Opens to Public",
      date: "2024-11-28",
      category: "Facility Update",
      image: "/images/meet-animals/a4.jpg",
      summary:
        "The state-of-the-art Wildlife Education Center is now open, featuring interactive exhibits and digital learning experiences.",
      content:
        "Our new 2,000 sq ft Education Center features interactive displays, virtual reality experiences, and hands-on learning stations. The center aims to educate visitors about wildlife conservation and the importance of biodiversity protection.",
      featured: false,
      readTime: "3 min read",
    },
    {
      id: 5,
      title: "Successful Elephant Health Check-up Completed",
      date: "2024-11-20",
      category: "Health Update",
      image: "/placeholder.svg?height=300&width=400",
      summary:
        "Annual comprehensive health examinations for our elephant family have been completed with excellent results.",
      content:
        "Our elephant care team, along with specialist veterinarians, conducted thorough health check-ups for all elephants. The examinations included blood tests, dental care, and foot care. All elephants are in excellent health and spirits.",
      featured: false,
      readTime: "2 min read",
    },
    {
      id: 6,
      title: "Community Outreach Program Reaches 10,000 Students",
      date: "2024-11-15",
      category: "Community",
      image: "/placeholder.svg?height=300&width=400",
      summary:
        "Our mobile education program has successfully reached over 10,000 students across Bihar, spreading wildlife conservation awareness.",
      content:
        "The zoo's mobile education unit has visited 150 schools across Bihar, conducting interactive sessions about wildlife conservation. The program includes puppet shows, educational games, and hands-on activities that make learning about animals fun and engaging.",
      featured: false,
      readTime: "3 min read",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Birth Announcement":
        return <Heart className="w-4 h-4" />
      case "Achievement":
        return <Award className="w-4 h-4" />
      case "Program Launch":
        return <Megaphone className="w-4 h-4" />
      case "Community":
        return <Users className="w-4 h-4" />
      default:
        return <Megaphone className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Birth Announcement":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30"
      case "Achievement":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "Program Launch":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "Health Update":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Facility Update":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "Community":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const featuredNews = newsItems.filter((item) => item.featured)
  const regularNews = newsItems.filter((item) => !item.featured)

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          images={["/images/hero/s1.jpg"]}
          title="NEWS UPDATES"
          subtitle="Stay Connected with Latest Zoo Happenings"
          height="medium"
        />

        {/* Introduction */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Stay Informed</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Keep up with the latest developments at Patna Zoo. From exciting animal births and conservation
                milestones to new facilities and educational programs, discover what's happening in our wildlife
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-16 bg-zoo-teal-800">
            <div className="zoo-container">
              <div className="text-center mb-12 animate-on-scroll">
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">FEATURED NEWS</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Highlighting our most important announcements and achievements.
                </p>
              </div>

              <div className="grid lg:grid-cols-1 gap-8">
                {featuredNews.map((item, index) => (
                  <Card
                    key={item.id}
                    className={`overflow-hidden animate-on-scroll stagger-${index + 1} bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300`}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-auto">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                        <Badge className="absolute top-4 left-4 bg-zoo-yellow-600 text-zoo-teal-900 hover:bg-zoo-yellow-500">
                          FEATURED
                        </Badge>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className={`flex items-center gap-1 ${getCategoryColor(item.category)}`}>
                            {getCategoryIcon(item.category)}
                            {item.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-white/60 text-sm">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </div>
                        </div>

                        <h3 className="font-heading text-2xl text-white mb-3">{item.title}</h3>

                        <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                          <Calendar className="w-4 h-4" />
                          {formatDate(item.date)}
                        </div>

                        <p className="text-white/80 mb-6 leading-relaxed">{item.content}</p>

                        <Link href={`/programs/news/${item.id}`}>
                          <button className="flex items-center gap-2 text-zoo-yellow-600 hover:text-zoo-yellow-500 font-heading font-semibold transition-colors duration-200 group">
                            READ FULL STORY
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular News */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">RECENT UPDATES</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Catch up on all the latest news and announcements from our zoo community.
              </p>
            </div>

            {regularNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((item, index) => (
                  <Card
                    key={item.id}
                    className={`overflow-hidden animate-on-scroll stagger-${index + 1} bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <Badge
                        className={`absolute top-4 right-4 flex items-center gap-1 ${getCategoryColor(item.category)}`}
                      >
                        {getCategoryIcon(item.category)}
                        {item.category}
                      </Badge>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {formatDate(item.date)}
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </div>

                      <h3 className="font-heading text-lg text-white mb-3 line-clamp-2">{item.title}</h3>
                      <p className="text-white/80 text-sm mb-4 line-clamp-3">{item.summary}</p>

                      <Link href={`/programs/news/${item.id}`}>
                        <button className="flex items-center gap-2 text-zoo-yellow-600 hover:text-zoo-yellow-500 font-heading font-semibold text-sm transition-colors duration-200 group">
                          READ MORE
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="max-w-2xl mx-auto text-center animate-on-scroll bg-white/10 backdrop-blur-sm border-white/20 text-white p-12">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Megaphone className="w-10 h-10 text-white/60" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">No Current Updates</h3>
                <p className="text-white/80">
                  We don't have any news updates at the moment. Please check back soon for the latest announcements and
                  developments from Patna Zoo.
                </p>
              </Card>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Megaphone className="w-8 h-8 text-zoo-teal-900" />
                </div>
                <h3 className="font-heading text-2xl text-white mb-4">Stay Updated</h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest news, announcements, and updates directly in your
                  inbox. Be the first to know about new arrivals, special events, and conservation milestones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zoo-yellow-600"
                  />
                  <button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 px-6 py-3 rounded-lg font-heading font-bold transition-colors duration-200">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Media */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">MEDIA INQUIRIES</h2>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  For press releases, media kits, or interview requests, please contact our communications team. We're
                  happy to provide information about our conservation efforts, educational programs, and special events.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                      <Megaphone className="w-5 h-5 text-zoo-teal-900" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Media Relations</p>
                      <p className="text-white/80">media@patnazoo.gov.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-zoo-teal-900" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Press Office</p>
                      <p className="text-white/80">+91 612 2234567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden animate-on-scroll stagger-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Media and press activities at the zoo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zoo-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/90 text-sm">Professional media support for all your coverage needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
