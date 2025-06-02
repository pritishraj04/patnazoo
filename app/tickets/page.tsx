"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedContentCard } from "@/components/featured-content-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, MapPin, Star } from "lucide-react"

export default function TicketsPage() {
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const ticketTypes = [
    {
      id: "adult",
      name: "Adult",
      price: 150,
      description: "Ages 18-59",
      popular: false,
    },
    {
      id: "child",
      name: "Child",
      price: 75,
      description: "Ages 3-17",
      popular: true,
    },
    {
      id: "senior",
      name: "Senior Citizen",
      price: 100,
      description: "Ages 60+",
      popular: false,
    },
    {
      id: "student",
      name: "Student",
      price: 100,
      description: "With valid ID",
      popular: false,
    },
    {
      id: "foreigner",
      name: "Foreign Visitor",
      price: 300,
      description: "International guests",
      popular: false,
    },
    {
      id: "group",
      name: "Group Booking",
      price: 120,
      description: "10+ people (per person)",
      popular: false,
    },
  ]

  const updateTicketCount = (ticketId: string, count: number) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketId]: Math.max(0, count),
    }))
  }

  const getTotalPrice = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, count]) => {
      const ticket = ticketTypes.find((t) => t.id === ticketId)
      return total + (ticket ? ticket.price * count : 0)
    }, 0)
  }

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((total, count) => total + count, 0)
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="TICKETS & EXPERIENCES"
          subtitle="Book your visit and explore incredible animal experiences"
          backgroundImage="/placeholder.svg?height=800&width=1920"
          height="medium"
        />

        {/* Ticket Selection */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <div
                className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">DAY TICKETS</h2>
                <p className="text-xl text-white/80">Choose your ticket type and plan your perfect zoo visit</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {ticketTypes.map((ticket, index) => (
                  <Card
                    key={ticket.id}
                    className={`relative bg-white border-none transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {ticket.popular && (
                      <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-zoo-yellow-600 text-zoo-teal-900 border-none">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}

                    <CardHeader className="text-center">
                      <CardTitle className="font-heading text-2xl text-zoo-teal-700">{ticket.name}</CardTitle>
                      <p className="text-zoo-teal-600">{ticket.description}</p>
                      <div className="text-3xl font-bold text-zoo-teal-700">₹{ticket.price}</div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-center gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateTicketCount(ticket.id, (selectedTickets[ticket.id] || 0) - 1)}
                          className="w-8 h-8 p-0 border-zoo-teal-300 text-zoo-teal-700 hover:bg-zoo-teal-100"
                        >
                          -
                        </Button>

                        <span className="text-xl font-bold text-zoo-teal-700 w-8 text-center">
                          {selectedTickets[ticket.id] || 0}
                        </span>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateTicketCount(ticket.id, (selectedTickets[ticket.id] || 0) + 1)}
                          className="w-8 h-8 p-0 border-zoo-teal-300 text-zoo-teal-700 hover:bg-zoo-teal-100"
                        >
                          +
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Booking Summary */}
              {getTotalTickets() > 0 && (
                <div className="bg-white rounded-3xl p-8 animate-fade-in">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <h3 className="font-heading text-2xl text-zoo-teal-700 mb-2">Booking Summary</h3>
                      <p className="text-zoo-teal-600">
                        {getTotalTickets()} ticket{getTotalTickets() !== 1 ? "s" : ""} selected
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-zoo-teal-700 mb-2">₹{getTotalPrice()}</div>
                      <Button className="zoo-button-primary">PROCEED TO CHECKOUT</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Visit Information */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Clock className="w-8 h-8 text-zoo-yellow-600 mb-2" />
                  <CardTitle className="font-heading text-xl">Opening Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <strong>Daily:</strong> 10:00 AM - 6:00 PM
                  </p>
                  <p className="mb-2">
                    <strong>Last Entry:</strong> 5:00 PM
                  </p>
                  <p className="text-sm text-white/80">Closed on Mondays (except holidays)</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-zoo-yellow-600 mb-2" />
                  <CardTitle className="font-heading text-xl">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Sanjay Gandhi Biological Park</p>
                  <p className="mb-2">Bailey Road, Patna</p>
                  <p className="mb-2">Bihar 800001</p>
                  <p className="text-sm text-white/80">Free parking available</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Users className="w-8 h-8 text-zoo-yellow-600 mb-2" />
                  <CardTitle className="font-heading text-xl">Group Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Special rates for groups of 10+</p>
                  <p className="mb-2">Educational programs available</p>
                  <p className="mb-2">Advanced booking required</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 border-white text-white hover:bg-white hover:text-zoo-teal-700"
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Experience */}
        <section className="py-16 bg-zoo-teal-700">
          <FeaturedContentCard
            title="VIP Safari"
            subtitle="experience"
            description="Get up close with our amazing animals on a guided VIP safari tour. Includes behind-the-scenes access, animal feeding experiences, and exclusive photo opportunities with our conservation team."
            image="/placeholder.svg?height=400&width=600"
            href="/experiences/vip-safari"
            buttonText="BOOK VIP EXPERIENCE"
          />
        </section>
      </main>

      <Footer />
    </>
  )
}
