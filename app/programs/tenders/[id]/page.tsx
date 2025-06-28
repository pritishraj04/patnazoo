import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import {
  Download,
  Calendar,
  Clock,
  FileText,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  CheckCircle,
  Users,
  Building,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tender Details - Patna Zoo",
  description:
    "Detailed information about tender opportunities at Patna Zoo including specifications, requirements, and submission guidelines.",
}

// Sample tender data - in a real application, this would come from a database or API
const getTenderData = (id: string) => {
  const tenders = {
    "TND-2024-001": {
      id: "TND-2024-001",
      title: "Construction of New Primate Enclosure",
      description:
        "Tender for the design and construction of a modern primate enclosure facility including visitor viewing areas, animal housing, and safety features.",
      detailedDescription:
        "This comprehensive project involves the construction of a state-of-the-art primate enclosure that will house various species of primates in a naturalistic environment. The facility will include indoor and outdoor habitats, visitor viewing areas with safety barriers, feeding stations, veterinary access points, and enrichment features to ensure animal welfare. The construction must comply with international zoo standards and local building codes.",
      category: "Construction",
      publishDate: "2024-01-15",
      submissionDeadline: "2024-02-15",
      estimatedValue: "₹25,00,000",
      documentUrl: "/downloads/tender-primate-enclosure.pdf",
      status: "active",
      eligibilityCriteria: [
        "Valid contractor license for construction projects above ₹20 lakhs",
        "Minimum 5 years experience in zoo or wildlife facility construction",
        "GST registration and tax compliance certificates",
        "Financial turnover of minimum ₹50 lakhs in the last 3 years",
        "Previous experience with animal enclosure construction (preferred)",
        "Valid insurance coverage for construction activities",
      ],
      technicalRequirements: [
        "Reinforced concrete construction with steel framework",
        "Specialized glass barriers for visitor safety",
        "Climate control systems for indoor areas",
        "Drainage and water management systems",
        "Emergency access and evacuation routes",
        "Enrichment features and climbing structures",
      ],
      submissionRequirements: [
        "Technical proposal with detailed drawings and specifications",
        "Financial proposal in sealed envelope",
        "Company profile and experience certificates",
        "Earnest Money Deposit of ₹50,000",
        "All required licenses and certificates",
        "Project timeline and milestone schedule",
      ],
      contactPerson: {
        name: "Shri Rajesh Kumar",
        designation: "Assistant Director (Projects)",
        phone: "+91 612 2234567",
        email: "projects@patnazoo.gov.in",
      },
      keyDates: [
        { event: "Tender Published", date: "2024-01-15" },
        { event: "Site Visit (Optional)", date: "2024-01-25" },
        { event: "Last Date for Queries", date: "2024-02-05" },
        { event: "Submission Deadline", date: "2024-02-15" },
        { event: "Technical Bid Opening", date: "2024-02-16" },
        { event: "Financial Bid Opening", date: "2024-02-20" },
      ],
    },
    "TND-2024-002": {
      id: "TND-2024-002",
      title: "Annual Animal Feed Supply Contract",
      description:
        "Supply of high-quality animal feed for various species including carnivores, herbivores, and birds for the financial year 2024-25.",
      detailedDescription:
        "This tender is for the supply of nutritious and high-quality animal feed for all species housed at Patna Zoo. The contract covers the supply of specialized feeds for carnivores, herbivores, omnivores, and birds. All feed must meet international quality standards and be delivered fresh according to the specified schedule. The supplier must ensure proper storage, handling, and timely delivery of all feed items.",
      category: "Supply",
      publishDate: "2024-01-20",
      submissionDeadline: "2024-02-20",
      estimatedValue: "₹15,00,000",
      documentUrl: "/downloads/tender-animal-feed.pdf",
      status: "active",
      eligibilityCriteria: [
        "Valid license for animal feed manufacturing/supply",
        "FSSAI registration for animal feed products",
        "Minimum 3 years experience in zoo/wildlife feed supply",
        "Quality certification from recognized laboratories",
        "GST registration and tax compliance",
        "Financial capability to handle annual supply contract",
      ],
      technicalRequirements: [
        "Fresh, nutritious feed meeting species-specific requirements",
        "Proper packaging and labeling of all feed items",
        "Cold storage facilities for perishable items",
        "Regular quality testing and certification",
        "Timely delivery schedule as per zoo requirements",
        "Emergency supply arrangements during festivals/holidays",
      ],
      submissionRequirements: [
        "Technical proposal with feed specifications",
        "Rate list for all feed categories",
        "Quality certificates and test reports",
        "Supply schedule and delivery plan",
        "Company registration and licenses",
        "Financial guarantee or bank guarantee",
      ],
      contactPerson: {
        name: "Dr. Priya Sharma",
        designation: "Veterinary Officer",
        phone: "+91 612 2234568",
        email: "veterinary@patnazoo.gov.in",
      },
      keyDates: [
        { event: "Tender Published", date: "2024-01-20" },
        { event: "Feed Sample Submission", date: "2024-02-01" },
        { event: "Quality Testing Period", date: "2024-02-05" },
        { event: "Submission Deadline", date: "2024-02-20" },
        { event: "Bid Opening", date: "2024-02-21" },
        { event: "Contract Award", date: "2024-02-25" },
      ],
    },
    "TND-2024-003": {
      id: "TND-2024-003",
      title: "Veterinary Equipment and Medical Supplies",
      description:
        "Procurement of modern veterinary equipment, medical instruments, and pharmaceutical supplies for the zoo hospital.",
      detailedDescription:
        "This tender covers the procurement of essential veterinary equipment and medical supplies for the zoo hospital. The equipment includes diagnostic instruments, surgical tools, monitoring devices, and pharmaceutical supplies necessary for animal healthcare. All equipment must be of international standard and suitable for treating various wildlife species.",
      category: "Medical",
      publishDate: "2024-01-25",
      submissionDeadline: "2024-02-25",
      estimatedValue: "₹8,00,000",
      documentUrl: "/downloads/tender-veterinary-equipment.pdf",
      status: "active",
      eligibilityCriteria: [
        "Valid license for medical equipment supply",
        "Authorization from equipment manufacturers",
        "Minimum 3 years experience in veterinary equipment supply",
        "After-sales service capability",
        "GST registration and compliance",
        "Technical support and training provision",
      ],
      technicalRequirements: [
        "International standard veterinary equipment",
        "Warranty and maintenance support",
        "Training for zoo veterinary staff",
        "Installation and commissioning services",
        "Spare parts availability guarantee",
        "Compliance with medical device regulations",
      ],
      submissionRequirements: [
        "Technical specifications and brochures",
        "Price quotation with warranty terms",
        "Authorization certificates from manufacturers",
        "Installation and training proposal",
        "Company credentials and experience",
        "After-sales service commitment",
      ],
      contactPerson: {
        name: "Dr. Amit Verma",
        designation: "Chief Veterinary Officer",
        phone: "+91 612 2234569",
        email: "cvo@patnazoo.gov.in",
      },
      keyDates: [
        { event: "Tender Published", date: "2024-01-25" },
        { event: "Technical Clarifications", date: "2024-02-05" },
        { event: "Equipment Demonstration", date: "2024-02-10" },
        { event: "Submission Deadline", date: "2024-02-25" },
        { event: "Technical Evaluation", date: "2024-02-28" },
        { event: "Final Selection", date: "2024-03-05" },
      ],
    },
    "TND-2024-004": {
      id: "TND-2024-004",
      title: "Landscaping and Garden Maintenance Services",
      description:
        "Comprehensive landscaping services including garden maintenance, plant care, and beautification of zoo premises.",
      detailedDescription:
        "This tender is for comprehensive landscaping and garden maintenance services throughout the zoo premises. The scope includes regular maintenance of existing gardens, planting of new flora, lawn care, tree pruning, pest control, and overall beautification of the zoo environment. The service provider must have expertise in horticulture and landscape management.",
      category: "Services",
      publishDate: "2024-01-30",
      submissionDeadline: "2024-03-01",
      estimatedValue: "₹12,00,000",
      documentUrl: "/downloads/tender-landscaping.pdf",
      status: "active",
      eligibilityCriteria: [
        "Valid license for landscaping and horticulture services",
        "Minimum 5 years experience in large-scale landscaping",
        "Qualified horticulturist on staff",
        "Equipment and machinery for landscaping work",
        "GST registration and tax compliance",
        "Insurance coverage for landscaping activities",
      ],
      technicalRequirements: [
        "Regular maintenance of gardens and lawns",
        "Seasonal planting and flower bed management",
        "Tree care and pruning services",
        "Pest and disease control measures",
        "Irrigation system maintenance",
        "Waste management and composting",
      ],
      submissionRequirements: [
        "Service proposal with maintenance schedule",
        "Rate structure for different services",
        "Portfolio of previous landscaping projects",
        "Staff qualifications and certifications",
        "Equipment list and availability",
        "Environmental compliance certificates",
      ],
      contactPerson: {
        name: "Shri Suresh Gupta",
        designation: "Horticulture Officer",
        phone: "+91 612 2234570",
        email: "horticulture@patnazoo.gov.in",
      },
      keyDates: [
        { event: "Tender Published", date: "2024-01-30" },
        { event: "Site Inspection", date: "2024-02-10" },
        { event: "Query Resolution", date: "2024-02-20" },
        { event: "Submission Deadline", date: "2024-03-01" },
        { event: "Proposal Evaluation", date: "2024-03-05" },
        { event: "Contract Finalization", date: "2024-03-10" },
      ],
    },
  }

  return tenders[id as keyof typeof tenders] || null
}

export default function TenderDetailsPage({ params }: { params: { id: string } }) {
  const tender = getTenderData(params.id)

  if (!tender) {
    notFound()
  }

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
          title="TENDER DETAILS"
          subtitle="Complete Tender Information & Requirements"
          height="medium"
        />

        {/* Back Navigation */}
        <section className="py-8 bg-zoo-teal-700">
          <div className="zoo-container">
            <Link
              href="/programs/tenders"
              className="inline-flex items-center gap-2 text-white hover:text-zoo-yellow-600 transition-colors duration-200 animate-on-scroll"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-heading">Back to Live Tenders</span>
            </Link>
          </div>
        </section>

        {/* Tender Overview */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <Card className="animate-on-scroll bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
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
                    <CardTitle className="font-heading text-2xl md:text-3xl text-white mb-4">{tender.title}</CardTitle>
                    <p className="text-white/80 leading-relaxed text-lg">{tender.description}</p>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-3xl font-bold text-zoo-yellow-600 mb-2">{tender.estimatedValue}</div>
                    <div className="text-white/60 text-sm mb-4">Estimated Value</div>
                    <div className="flex items-center justify-center lg:justify-end gap-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium capitalize">{tender.status}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-zoo-teal-900" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Published</div>
                      <div className="text-white font-medium">{formatDate(tender.publishDate)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Submission Deadline</div>
                      <div className="text-white font-medium">{formatDate(tender.submissionDeadline)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Tender ID</div>
                      <div className="text-white font-medium font-mono">{tender.id}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={tender.documentUrl}
                    className="flex items-center justify-center gap-2 bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 px-8 py-4 rounded-lg font-heading font-bold transition-colors duration-200 flex-1"
                  >
                    <Download className="w-5 h-5" />
                    DOWNLOAD TENDER DOCUMENT
                  </Link>
                  <button className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white text-white hover:text-zoo-teal-700 px-8 py-4 rounded-lg font-heading font-bold transition-all duration-200">
                    <Phone className="w-5 h-5" />
                    CONTACT FOR QUERIES
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="animate-on-scroll">
              <SectionHeading
                title="DETAILED DESCRIPTION"
                subtitle="Complete project overview and specifications"
                align="center"
              />
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-8">
                <p className="text-white/90 leading-relaxed text-lg">{tender.detailedDescription}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements & Criteria */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Eligibility Criteria */}
              <Card className="animate-on-scroll bg-white/10 backdrop-blur-sm border-white/20 text-white p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-zoo-teal-900" />
                  </div>
                  <h3 className="font-heading text-xl text-white">Eligibility Criteria</h3>
                </div>
                <ul className="space-y-3">
                  {tender.eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Technical Requirements */}
              <Card className="animate-on-scroll stagger-2 bg-white/10 backdrop-blur-sm border-white/20 text-white p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-zoo-teal-900" />
                  </div>
                  <h3 className="font-heading text-xl text-white">Technical Requirements</h3>
                </div>
                <ul className="space-y-3">
                  {tender.technicalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Submission Requirements */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="animate-on-scroll">
              <SectionHeading
                title="SUBMISSION REQUIREMENTS"
                subtitle="Documents and materials required for bid submission"
                align="center"
              />
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-zoo-yellow-600" />
                      Required Documents
                    </h4>
                    <ul className="space-y-3">
                      {tender.submissionRequirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-white/90">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-zoo-yellow-600" />
                      Important Notes
                    </h4>
                    <div className="space-y-4 text-white/90">
                      <p>• All documents must be submitted in sealed envelopes</p>
                      <p>• Technical and financial bids should be in separate envelopes</p>
                      <p>• Late submissions will not be accepted under any circumstances</p>
                      <p>• Incomplete bids will be rejected without evaluation</p>
                      <p>• Original documents must be produced during verification</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Dates Timeline */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="animate-on-scroll">
              <SectionHeading
                title="IMPORTANT DATES"
                subtitle="Timeline for tender process and key milestones"
                align="center"
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tender.keyDates.map((dateItem, index) => (
                  <Card
                    key={index}
                    className={`animate-on-scroll stagger-${index + 1} bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 hover:bg-white/15 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-zoo-yellow-600 rounded-full flex items-center justify-center text-zoo-teal-900 font-bold text-sm">
                        {index + 1}
                      </div>
                      <Calendar className="w-5 h-5 text-zoo-yellow-600" />
                    </div>
                    <h4 className="font-heading text-white mb-2">{dateItem.event}</h4>
                    <p className="text-zoo-yellow-600 font-semibold">{formatDate(dateItem.date)}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="animate-on-scroll">
              <SectionHeading
                title="CONTACT INFORMATION"
                subtitle="Get in touch for queries and clarifications"
                align="center"
              />
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-zoo-teal-900" />
                    </div>
                    <h3 className="font-heading text-xl text-white">Project Contact</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-1">{tender.contactPerson.name}</h4>
                      <p className="text-white/70 text-sm">{tender.contactPerson.designation}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-zoo-yellow-600" />
                      <span className="text-white">{tender.contactPerson.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-zoo-yellow-600" />
                      <span className="text-white">{tender.contactPerson.email}</span>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-zoo-teal-900" />
                    </div>
                    <h3 className="font-heading text-xl text-white">Submission Address</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Administrative Office</h4>
                      <p className="text-white/90 leading-relaxed">
                        Patna Zoo
                        <br />
                        Bailey Road, Patna - 800001
                        <br />
                        Bihar, India
                      </p>
                    </div>
                    <div className="text-sm text-white/70">
                      <p>Office Hours: Monday to Friday</p>
                      <p>10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
