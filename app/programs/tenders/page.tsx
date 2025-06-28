import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { Download, Calendar, Clock, FileText, AlertCircle, Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Live Tenders - Patna Zoo",
  description:
    "Current tender opportunities at Patna Zoo. Find active tenders for construction, maintenance, supplies, and services.",
}

export default function LiveTendersPage() {
  // Sample tender data - in a real application, this would come from a database or API
  const activeTenders = [
    {
      id: "TND-2024-001",
      title: "Construction of New Primate Enclosure",
      description:
        "Tender for the design and construction of a modern primate enclosure facility including visitor viewing areas, animal housing, and safety features.",
      category: "Construction",
      publishDate: "2024-01-15",
      submissionDeadline: "2024-02-15",
      estimatedValue: "₹25,00,000",
      documentUrl: "/downloads/tender-primate-enclosure.pdf",
      status: "active",
    },
    {
      id: "TND-2024-002",
      title: "Annual Animal Feed Supply Contract",
      description:
        "Supply of high-quality animal feed for various species including carnivores, herbivores, and birds for the financial year 2024-25.",
      category: "Supply",
      publishDate: "2024-01-20",
      submissionDeadline: "2024-02-20",
      estimatedValue: "₹15,00,000",
      documentUrl: "/downloads/tender-animal-feed.pdf",
      status: "active",
    },
    {
      id: "TND-2024-003",
      title: "Veterinary Equipment and Medical Supplies",
      description:
        "Procurement of modern veterinary equipment, medical instruments, and pharmaceutical supplies for the zoo hospital.",
      category: "Medical",
      publishDate: "2024-01-25",
      submissionDeadline: "2024-02-25",
      estimatedValue: "₹8,00,000",
      documentUrl: "/downloads/tender-veterinary-equipment.pdf",
      status: "active",
    },
    {
      id: "TND-2024-004",
      title: "Landscaping and Garden Maintenance Services",
      description:
        "Comprehensive landscaping services including garden maintenance, plant care, and beautification of zoo premises.",
      category: "Services",
      publishDate: "2024-01-30",
      submissionDeadline: "2024-03-01",
      estimatedValue: "₹12,00,000",
      documentUrl: "/downloads/tender-landscaping.pdf",
      status: "active",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "construction":
        return "bg-orange-500"
      case "supply":
        return "bg-green-500"
      case "medical":
        return "bg-red-500"
      case "services":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isDeadlineNear = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7 && diffDays > 0
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          images={["/images/hero/s1.jpg"]}
          title="LIVE TENDERS"
          subtitle="Current Tender Opportunities"
          height="medium"
        />

        {/* Introduction */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <SectionHeading
                title="TENDER OPPORTUNITIES"
                subtitle="Participate in our procurement process and contribute to wildlife conservation"
                align="center"
              />
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Patna Zoo invites qualified vendors and contractors to participate in our tender process. We maintain
                transparency and fairness in all our procurement activities, ensuring the best value for public funds
                while supporting our mission of wildlife conservation and education.
              </p>

              {/* Important Notice */}
              <div className="bg-zoo-yellow-600/20 backdrop-blur-sm border border-zoo-yellow-600/30 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-zoo-yellow-600 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h3 className="font-heading text-lg text-white mb-2">Important Notice</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      All tender submissions must be made in accordance with the Government of Bihar procurement
                      guidelines. Incomplete or late submissions will not be considered. Please read all tender
                      documents carefully before submitting your bid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Tenders */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">ACTIVE TENDERS</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Current tender opportunities available for bidding. Download tender documents and submit your proposals
                before the deadline.
              </p>
            </div>

            {activeTenders.length > 0 ? (
              <div className="grid gap-6">
                {activeTenders.map((tender, index) => (
                  <Card
                    key={tender.id}
                    className={`animate-on-scroll stagger-${index + 1} bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge
                              className={`${getCategoryColor(tender.category)} text-white hover:${getCategoryColor(tender.category)}`}
                            >
                              {tender.category}
                            </Badge>
                            <span className="text-white/60 text-sm font-mono">{tender.id}</span>
                            {isDeadlineNear(tender.submissionDeadline) && (
                              <Badge className="bg-red-500 text-white animate-pulse">
                                <Clock className="w-3 h-3 mr-1" />
                                URGENT
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="font-heading text-xl md:text-2xl text-white mb-3">
                            {tender.title}
                          </CardTitle>
                          <p className="text-white/80 leading-relaxed">{tender.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zoo-yellow-600 mb-1">{tender.estimatedValue}</div>
                          <div className="text-white/60 text-sm">Estimated Value</div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-zoo-yellow-600" />
                          <div>
                            <div className="text-white/60">Published</div>
                            <div className="text-white font-medium">{formatDate(tender.publishDate)}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-zoo-yellow-600" />
                          <div>
                            <div className="text-white/60">Deadline</div>
                            <div className="text-white font-medium">{formatDate(tender.submissionDeadline)}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="w-4 h-4 text-zoo-yellow-600" />
                          <div>
                            <div className="text-white/60">Status</div>
                            <div className="text-green-400 font-medium capitalize">{tender.status}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={tender.documentUrl}
                          className="flex items-center justify-center gap-2 bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 px-6 py-3 rounded-lg font-heading font-bold transition-colors duration-200 flex-1"
                        >
                          <Download className="w-5 h-5" />
                          DOWNLOAD TENDER DOCUMENT
                        </Link>
                        <Link
                          href={`/programs/tenders/${tender.id}`}
                          className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white text-white hover:text-zoo-teal-700 px-6 py-3 rounded-lg font-heading font-bold transition-all duration-200"
                        >
                          <FileText className="w-5 h-5" />
                          VIEW DETAILS
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* No Active Tenders State */
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center py-16">
                <CardContent>
                  <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-10 h-10 text-white/60" />
                    </div>
                    <h3 className="font-heading text-2xl text-white mb-4">No Active Tenders</h3>
                    <p className="text-white/80 mb-6">
                      There are currently no active tenders available. Please check back later or contact us for
                      upcoming opportunities.
                    </p>
                    <button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 px-6 py-3 rounded-lg font-heading font-bold transition-colors duration-200">
                      NOTIFY ME OF NEW TENDERS
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Tender Process */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">TENDER PROCESS</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Understanding our transparent and fair tender process for all procurement activities.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Tender Publication",
                  description: "Tenders are published on our website and in leading newspapers with complete details.",
                  icon: FileText,
                },
                {
                  step: "2",
                  title: "Document Download",
                  description: "Download tender documents, specifications, and terms & conditions from our website.",
                  icon: Download,
                },
                {
                  step: "3",
                  title: "Bid Submission",
                  description: "Submit your sealed bids before the deadline at our administrative office.",
                  icon: Calendar,
                },
                {
                  step: "4",
                  title: "Evaluation & Award",
                  description: "Bids are evaluated transparently and contracts awarded to qualified bidders.",
                  icon: AlertCircle,
                },
              ].map((item, index) => (
                <Card
                  key={item.step}
                  className={`text-center animate-on-scroll stagger-${index + 1} bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 hover:bg-white/15 transition-all duration-300`}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <item.icon className="w-8 h-8 text-zoo-teal-900" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-zoo-teal-900 font-bold text-sm shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">TENDER ENQUIRIES</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                For any questions regarding tenders, procurement process, or technical clarifications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 animate-on-scroll bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="w-8 h-8 text-zoo-teal-900" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Tender Helpline</h3>
                <p className="text-white/80 mb-4">For immediate assistance with tender-related queries.</p>
                <p className="text-zoo-yellow-600 font-semibold">+91 612 2234567</p>
                <p className="text-white/60 text-sm mt-2">Mon-Fri: 10:00 AM - 5:00 PM</p>
              </Card>

              <Card className="p-8 animate-on-scroll stagger-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Mail className="w-8 h-8 text-zoo-teal-900" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Email Support</h3>
                <p className="text-white/80 mb-4">Send your tender queries and clarifications via email.</p>
                <p className="text-zoo-yellow-600 font-semibold">tenders@patnazoo.gov.in</p>
                <p className="text-white/60 text-sm mt-2">Response within 24 hours</p>
              </Card>

              <Card className="p-8 animate-on-scroll stagger-3 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <MapPin className="w-8 h-8 text-zoo-teal-900" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Submission Office</h3>
                <p className="text-white/80 mb-4">Physical submission of tender documents and bids.</p>
                <p className="text-zoo-yellow-600 font-semibold">Administrative Office</p>
                <p className="text-white/60 text-sm mt-2">Patna Zoo, Bailey Road, Patna</p>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="mt-12 animate-on-scroll">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-8">
                <h3 className="font-heading text-xl text-white mb-4 text-center">Important Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Eligibility Criteria:</h4>
                    <ul className="space-y-1 text-white/80">
                      <li>• Valid business registration and licenses</li>
                      <li>• GST registration certificate</li>
                      <li>• Previous experience in similar projects</li>
                      <li>• Financial capability documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Submission Requirements:</h4>
                    <ul className="space-y-1 text-white/80">
                      <li>• Sealed envelope with tender ID</li>
                      <li>• Technical and financial bids separately</li>
                      <li>• All required documents and certificates</li>
                      <li>• Earnest money deposit (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
