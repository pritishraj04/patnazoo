"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export default function HistoryPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Enhanced animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    // Fallback to ensure all elements become visible
    const timeout = setTimeout(() => {
      animatedElements.forEach((el) => el.classList.add("is-visible"))
    }, 1500)

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
      clearTimeout(timeout)
    }
  }, [])

  const team = [
    {
      "name": "Ram Kr. Pandey",
      "image": "/images/teams/ram.png",
      "designation": "Veterinary Officer, Patna Zoo",
      "message": "Patna zoo's 50th anniversary celebrates our commitment to wildlife conservation. This coffee table book showcases the remarkable journey of nurturing and protecting diverse species. Together, let's continue our efforts in preserving our natural heritage for generations to come."
    },
    {
      "name": "Samrendra Bahadur Singh",
      "image": "/images/teams/samrendra.png",
      "designation": "Veterinary Officer, Patna Zoo",
      "message": "Through the pages of this coffee table book, we celebrate the vibrant wildlife and conservation efforts of Patna zoo over the past 50 years. May it inspire future generations to protect and cherish our precious biodiversity for years to come."
    },
    {
      "name": "Anand Kumar",
      "image": "/images/teams/anand.png",
      "designation": "ROF, Zoology section, Patna Zoo",
      "message": "The first cage of Patna Zoo stands as a testament to its remarkable five-decade journey. Its structure, meticulously designed by architects, encapsulates the enduring legacy of the zoo. With every passing year, it has stood the test of time, witnessing the evolution and progress of the zoo and its inhabitants. The First Cage stands tall, embodying the rich history and growth of Patna Zoo in a remarkable 50-year span."
    },
    {
      "name": "Arvind Kr. Verma",
      "image": "/images/teams/arvind.png",
      "designation": "ROF, Botany section, Patna Zoo",
      "message": "Delighted to present the coffee table book celebrating the 50th anniversary of Patna Zoo. It showcases the incredible bio-diversity, conservation efforts, and memorable moments. A heartfelt tribute to the zoo's rich heritage and its role in promoting wildlife awareness. Enjoy the journey!"
    },
    {
      "name": "Arif",
      "image": "/images/teams/arif.png",
      "designation": "Field Biologist, Patna Zoo",
      "message": "Congratulations to Patna Zoo on its 50th anniversary! As a field biologist, I am inspired by the incredible biodiversity and conservation efforts here. May this coffee table book showcase the zoo's journey and inspire future generations to protect our precious wildlife."
    }

  ]
  

  const timelineEvents = [
    {
      year: "1969",
      title: "Foundation",
      description:
        "The foundation of Patna Zoo was laid by the Government of Bihar to create a sanctuary for wildlife conservation and public education.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "1973",
      title: "Official Inauguration",
      description:
        "Sanjay Gandhi Biological Park was officially inaugurated and opened to the public with a small collection of native animals.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "1980",
      title: "Expansion Phase",
      description:
        "Major expansion of the zoo with new enclosures and introduction of several endangered species to the collection.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "1995",
      title: "Conservation Focus",
      description:
        "Shift towards conservation-focused approach with breeding programs for endangered species native to Bihar and Eastern India.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2005",
      title: "Modern Facilities",
      description:
        "Renovation of visitor facilities and animal enclosures to meet international standards of animal welfare and visitor experience.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2015",
      title: "Education Center",
      description:
        "Establishment of a dedicated education center to promote wildlife awareness and conservation education among visitors.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Introduction of digital initiatives including online ticketing, virtual tours, and interactive educational resources.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="HISTORY & LEGACY"
          subtitle="Discover the journey of Patna Zoo through the decades"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Introduction */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">OUR STORY</h2>
                <p className="text-white/90 text-lg mb-4">
                  Established in 1969, Sanjay Gandhi Biological Park, commonly known as Patna Zoo, has evolved from a
                  modest beginning to become one of Eastern India's premier wildlife conservation centers.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  Spread over 153 acres of lush landscapes, the zoo has been a cornerstone of Bihar's environmental
                  education and conservation efforts for over five decades, serving as both a sanctuary for endangered
                  species and a beloved recreational space for generations of visitors.
                </p>
                <p className="text-white/90 text-lg">
                  Through changing times and growing environmental challenges, Patna Zoo has remained committed to its
                  founding mission of wildlife conservation, research, education, and providing a connection between
                  people and nature.
                </p>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <Image
                  src="/images/history-legacy.jpg"
                  alt="Historic photo of Patna Zoo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">A Golden Jubilee of Patna Zoo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <SectionHeading title="OUR JOURNEY THROUGH TIME" subtitle="Key milestones in the evolution of Patna Zoo" />

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-zoo-yellow-600/50"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className="relative flex flex-col md:flex-row gap-8 animate-on-scroll"
                    style={{
                      transitionDelay: `${index * 150}ms`,
                      opacity: 1,
                      transform: "translateY(0px)",
                    }}
                  >
                    {/* Year marker - left on mobile, alternating on desktop */}
                    <div
                      className={`md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                    >
                      <div className="relative">
                        {/* Mobile year marker */}
                        <div className="md:hidden absolute left-4 top-0 -translate-x-1/2 w-8 h-8 bg-zoo-yellow-600 rounded-full flex items-center justify-center z-10">
                          <span className="text-zoo-teal-900 font-bold text-xs">{event.year.slice(-2)}</span>
                        </div>

                        {/* Desktop year marker */}
                        <div
                          className="hidden md:flex absolute top-0 w-16 h-16 bg-zoo-yellow-600 rounded-full items-center justify-center z-10 transform -translate-y-1/2 
                          ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"
                        >
                          <span className="text-zoo-teal-900 font-bold">{event.year}</span>
                        </div>

                        <Card
                          className={`bg-white/10 border-white/20 text-white overflow-hidden md:max-w-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                        >
                          <div className="relative h-48">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-heading text-xl mb-2">
                              {event.title} <span className="md:hidden text-zoo-yellow-600">({event.year})</span>
                            </h3>
                            <p className="text-white/80">{event.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Empty space for alternating layout on desktop */}
                    <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className="max-w-3xl mx-auto text-center animate-on-scroll"
              style={{ opacity: 1, transform: "translateY(0px)" }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">OUR LEGACY</h2>
              <p className="text-white/90 text-lg mb-8">
                For over five decades, Patna Zoo has been a cornerstone of wildlife conservation in Bihar, educating
                millions of visitors and contributing significantly to the preservation of endangered species. Our
                legacy is built on a foundation of respect for nature, commitment to education, and dedication to
                creating meaningful connections between people and wildlife.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl text-zoo-yellow-600 font-bold mb-2">50+</div>
                  <p className="text-white">Years of conservation excellence</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl text-zoo-yellow-600 font-bold mb-2">2.5M+</div>
                  <p className="text-white">Annual visitors educated</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl text-zoo-yellow-600 font-bold mb-2">100+</div>
                  <p className="text-white">Species protected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directors Through History */}
        {/* <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <SectionHeading
              title="VISIONARY LEADERSHIP"
              subtitle="Directors who shaped Patna Zoo through the decades"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 text-white overflow-hidden transition-all duration-500 hover:scale-105 animate-on-scroll"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: 1,
                    transform: "translateY(0px)",
                  }}
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`Member ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl mb-1">{member.name}</h3>
                    <p className="text-zoo-yellow-600 text-sm mb-3">{member.designation}</p>
                    <p className="text-white/80">
                      {member.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  )
}
