"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { EventsCarousel } from "@/components/events-carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { MapPin, Car, Utensils, Accessibility, Camera, Baby, Dog, Bus, Train } from "lucide-react"

export default function VisitPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const facilities = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Food Stalls",
      description: "Variety of local food and snack options available",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Parking",
      description: "Designated parking area available for visitors",
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: "Accessibility",
      description: "Ramps and accessible routes in key areas",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography",
      description: "Capture your memories (flash prohibited near animals)",
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Rest Areas",
      description: "Shaded rest areas for families and seniors",
    },
    {
      icon: <Dog className="w-6 h-6" />,
      title: "First Aid",
      description: "First aid services available on-site",
    },
  ]

  const rules = [
    "Do not tease or provoke the animals",
    "Maintain a safe distance from enclosures",
    "No outside food allowed inside the zoo",
    "Dispose of waste in designated bins",
    "No loud music or disruptive behavior",
    "Children must be accompanied by adults",
    "Follow instructions from zoo staff",
    "Respect the natural environment",
  ]

const carouselEvents = [
    {
      id: 1,
      title: "A Lake Break",
      description:
        "Experience a joy-full time with family boating, at the Lake.",
      image: "/images/bottom-s1.jpg",
      href: "/experience/boating-lake",
      buttonText: "Learn more",
    },
    {
      id: 2,
      title: "Animal Feeding Time",
      description:
        "Watch our zookeepers feed some of the zoo's most popular animals and learn about their diets and habits.",
      image: "/images/d2.jpg",
      href: "/events/animal-feeding",
      buttonText: "See schedule",
    },
    {
      id: 3,
      title: "Conservation Talk Series",
      description:
        "Join our experts for an in-depth discussion about wildlife conservation efforts in Bihar and how you can make a difference.",
      image: "/images/d3.jpg",
      href: "/events/conservation-talks",
      buttonText: "Learn more",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="PLAN YOUR VISIT"
          subtitle="Everything you need to know for the perfect zoo experience"
          backgroundImage="/images/header/overview.webp"
          height="medium"
        />

        {/* Opening Times & Prices */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl text-white mb-8">OPENING TIMES</h2>
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monday</span>
                        <Badge variant="secondary" className="bg-red-500 text-white">
                          Closed
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Tuesday - Sunday</span>
                        <span>9:00 AM - 5:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Last Entry</span>
                        <span>5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Morning Walk</span>
                        <span>5:30 AM - 9:00 AM</span>
                      </div>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-sm text-white/80">
                          <strong>Note:</strong> Zoo remains open on public holidays that fall on Monday
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl text-white mb-8">TICKET PRICES</h2>
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Adult (18-59)</span>
                        <span className="text-zoo-yellow-600 font-bold">₹50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Child (3-17)</span>
                        <span className="text-zoo-yellow-600 font-bold">₹25</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Senior (60+)</span>
                        <span className="text-zoo-yellow-600 font-bold">₹30</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Foreign Visitor</span>
                        <span className="text-zoo-yellow-600 font-bold">₹100</span>
                      </div>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-sm text-white/80">Children under 3 years enter free</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Zoo Map */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">ZOO MAP</h2>
              <p className="text-xl text-white/80">Navigate your way around our sanctuary</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white border-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-96 w-full md:h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0333387688593!2d85.10212109999999!3d25.603808400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed570303d1e895%3A0x9afbc441239dd40a!2sPatna%20Zoo!5e0!3m2!1sen!2sin!4v1751109448138!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-zoo-teal-700 mb-4">Interactive Map Features</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-zoo-teal-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-zoo-yellow-600" />
                        <span>Animal enclosures and habitats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-zoo-yellow-600" />
                        <span>Mayur Canteen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Accessibility className="w-4 h-4 text-zoo-yellow-600" />
                        <span>Accessible routes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-zoo-yellow-600" />
                        <span>Parking areas</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">FACILITIES & AMENITIES</h2>
              <p className="text-xl text-white/80">Everything you need for a comfortable visit</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="text-zoo-yellow-600 mb-2">{facility.icon}</div>
                    <CardTitle className="font-heading text-xl">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rules & Guidelines */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <div
                className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">RULES & GUIDELINES</h2>
                <p className="text-xl text-white/80">Help us keep our animals and visitors safe</p>
              </div>

              <Card className="bg-white border-none">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {rules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-zoo-teal-900 text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-zoo-teal-700">{rule}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experiences Carousel */}
        <EventsCarousel events={carouselEvents} backgroundImage="/images/bg.png" />

        {/* FAQ Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <div
                className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">FREQUENTLY ASKED QUESTIONS</h2>
                <p className="text-xl text-white/80">Find answers to common visitor questions</p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 text-lg text-zoo-teal-700 font-medium hover:no-underline">
                    Can I bring my own food and drinks?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-zoo-teal-600">
                    Outside food is generally discouraged to maintain cleanliness and prevent animal feeding by
                    visitors. However, small quantities of water are permitted. Food stalls are available inside.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 text-lg text-zoo-teal-700 font-medium hover:no-underline">
                    Is the zoo wheelchair accessible?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-zoo-teal-600">
                    While efforts are made to provide accessibility, some areas may have limited access due to terrain.
                    Please inquire at the entrance for specific accessible routes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 text-lg text-zoo-teal-700 font-medium hover:no-underline">
                    What should I do if it rains during my visit?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-zoo-teal-600">
                    Seek shelter in covered exhibits or the cafeteria. The animals often remain active even during light
                    rain.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 text-lg text-zoo-teal-700 font-medium hover:no-underline">
                    How long does a typical visit take?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-zoo-teal-600">
                    A typical visit lasts 2-3 hours, but allow more time if you wish to see all the animals and exhibits
                    at a relaxed pace.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 text-lg text-zoo-teal-700 font-medium hover:no-underline">
                    Are there guided tours available?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-zoo-teal-600">
                    Guided tours may be available; please check at the information counter upon arrival for availability
                    and timings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">GETTING HERE</h2>
              <p className="text-xl text-white/80">Plan your journey to Patna Zoo</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white border-none">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl text-zoo-teal-700 mb-2">Location</h3>
                    <p className="text-zoo-teal-600">Patna Zoo, Bailey Road, Patna, Bihar, India</p>

                    <h3 className="font-heading text-2xl text-zoo-teal-700 mb-2">By Public Transport</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-zoo-teal-600">
                      <div className="flex items-center gap-2">
                        <Bus className="w-4 h-4 text-zoo-yellow-600" />
                        <span>Regular bus services operate along Bailey Road. Get off at the Patna Zoo stop.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Train className="w-4 h-4 text-zoo-yellow-600" />
                        <span>
                          Patna Junction is the nearest railway station. Take an auto-rickshaw or taxi to the zoo.
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl text-zoo-teal-700 mb-2">By Car</h3>
                    <p className="text-zoo-teal-600">
                      Ample parking space is available near the zoo entrance. Follow signs for parking areas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
