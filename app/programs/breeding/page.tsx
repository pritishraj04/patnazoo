import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeading } from "@/components/section-heading"
import { ImageGallery } from "@/components/image-gallery"
import { Download, Heart, Users, Award, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function BreedingProgramsPage() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Royal Bengal Tiger breeding program",
      title: "Royal Bengal Tiger Conservation",
      description: "Successful breeding program contributing to tiger population recovery",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Indian Elephant breeding facility",
      title: "Indian Elephant Breeding",
      description: "State-of-the-art facilities for elephant conservation",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "White Rhinoceros breeding center",
      title: "White Rhinoceros Program",
      description: "Critical breeding program for endangered rhinoceros species",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Gharial crocodile conservation",
      title: "Gharial Conservation",
      description: "Protecting India's critically endangered gharial population",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Asiatic Lion breeding success",
      title: "Asiatic Lion Recovery",
      description: "Contributing to the recovery of Asiatic lion populations",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Snow Leopard conservation program",
      title: "Snow Leopard Initiative",
      description: "High-altitude species conservation and breeding program",
    },
  ]

  return (
    <div className="min-h-screen bg-zoo-teal-700">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        backgroundImage="/placeholder.svg?height=600&width=1200"
        height="medium"
        title="Breeding Programs"
        subtitle="Conservation Through Scientific Excellence"
      />

      {/* Introduction Section */}
      <section className="bg-zoo-teal-800 py-16 sm:py-20">
        <div className="zoo-container">
          <SectionHeading
            title="Wildlife Conservation Excellence"
            subtitle="Leading India's efforts in species preservation and genetic diversity"
          />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Patna Zoo's breeding programs represent decades of scientific excellence and conservation commitment. Our
              state-of-the-art facilities and expert veterinary team work tirelessly to preserve endangered species and
              maintain genetic diversity for future generations.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Through partnerships with national and international conservation organizations, we contribute to global
              species recovery efforts while educating the public about wildlife conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Download PDF Section */}
      <section className="bg-zoo-teal-700 py-16 sm:py-20">
        <div className="zoo-container">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto text-center shadow-lg">
            <div className="bg-zoo-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-10 h-10 text-zoo-teal-900" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">Breeding Programs Report</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Download our comprehensive report detailing breeding successes, conservation milestones, and future
              program objectives. Learn about our scientific approach to wildlife preservation.
            </p>
            <button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Download PDF Report
            </button>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-zoo-teal-800 py-16 sm:py-20">
        <div className="zoo-container">
          <SectionHeading
            title="Program Achievements"
            subtitle="Celebrating conservation milestones and breeding successes"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="bg-zoo-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-zoo-teal-900" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Species Conservation</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Successfully breeding 15+ endangered species including Royal Bengal Tigers, Indian Elephants, and White
                Rhinoceros, contributing to global conservation efforts.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="bg-zoo-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-zoo-teal-900" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Research Partnerships</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Collaborating with leading wildlife research institutions and international conservation organizations
                to advance breeding techniques and genetic studies.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="bg-zoo-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-zoo-teal-900" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Recognition</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Awarded for excellence in conservation breeding by national wildlife authorities and recognized for
                contributions to species recovery programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Gallery */}
      <section className="bg-zoo-teal-700 py-16 sm:py-20">
        <div className="zoo-container">
          <SectionHeading
            title="Breeding Program Gallery"
            subtitle="Witness our conservation efforts and breeding successes"
          />
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Key Objectives */}
      <section className="bg-zoo-teal-800 py-16 sm:py-20">
        <div className="zoo-container">
          <SectionHeading
            title="Our Mission & Objectives"
            subtitle="Driving conservation through scientific breeding programs"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-zoo-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-zoo-teal-900" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-4">Conservation Goals</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintain genetic diversity in captive populations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Support wild population recovery through reintroduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advance reproductive technologies for endangered species</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborate with global conservation networks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-zoo-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-zoo-teal-900" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-4">Scientific Excellence</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>State-of-the-art veterinary and breeding facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expert team of veterinarians and animal behaviorists</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advanced genetic analysis and health monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Research publication and knowledge sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-zoo-teal-700 py-16 sm:py-20">
        <div className="zoo-container">
          <SectionHeading
            title="Conservation Success Stories"
            subtitle="Celebrating breeding program achievements and milestones"
          />
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="/placeholder.svg?height=96&width=96" alt="Tiger cubs" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-3">Royal Bengal Tiger Program</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Our tiger breeding program has successfully produced 12 healthy cubs over the past 5 years,
                    contributing significantly to the genetic diversity of captive tiger populations. Two of our tigers
                    have been successfully relocated to support wild population recovery efforts.
                  </p>
                  <div className="text-zoo-yellow-600 text-sm font-medium">
                    Achievement: 12 cubs born • 2 successful relocations
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="/placeholder.svg?height=96&width=96" alt="Elephant calf" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-3">Indian Elephant Conservation</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    The birth of our elephant calf marked a significant milestone in our conservation efforts. Our
                    specialized elephant care program focuses on natural breeding behaviors and optimal nutrition to
                    ensure healthy offspring and strong family bonds.
                  </p>
                  <div className="text-zoo-yellow-600 text-sm font-medium">
                    Achievement: 1 healthy calf • Advanced maternal care program
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Gharial hatchlings"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-3">Gharial Recovery Program</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Our gharial breeding program has achieved remarkable success with over 50 hatchlings produced in the
                    last three years. These critically endangered crocodilians are being prepared for release into
                    protected river systems to boost wild populations.
                  </p>
                  <div className="text-zoo-yellow-600 text-sm font-medium">
                    Achievement: 50+ hatchlings • Reintroduction program active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-zoo-teal-800 py-16 sm:py-20">
        <div className="zoo-container">
          <SectionHeading title="Get Involved" subtitle="Support our conservation efforts and breeding programs" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="font-heading text-xl text-white mb-4">Research Partnerships</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Collaborate with our expert team on conservation research projects and breeding studies.
              </p>
              <button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold px-8 py-3 rounded-full transition-all duration-200">
                Contact Research Team
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="font-heading text-xl text-white mb-4">Support Conservation</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Make a difference by supporting our breeding programs through adoption or donations.
              </p>
              <button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold px-8 py-3 rounded-full transition-all duration-200">
                Support Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
