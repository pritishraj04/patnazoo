import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Heart, Award, Megaphone, Users } from "lucide-react"

// Sample news data - in a real app, this would come from a database or CMS
const newsData = {
  1: {
    id: 1,
    title: "New Tiger Cubs Born at Patna Zoo",
    date: "2024-12-15",
    category: "Birth Announcement",
    image: "/images/meet-animals/a1.jpg",
    summary:
      "We are thrilled to announce the birth of two healthy Royal Bengal Tiger cubs. The mother and cubs are doing well under expert veterinary care.",
    content: `
      <p>We are delighted to announce the arrival of two beautiful Royal Bengal Tiger cubs at Patna Zoo, marking a significant milestone in our conservation and breeding efforts. The cubs were born on December 10th, 2024, to our resident tiger pair, Rajesh and Priya, who have been part of our breeding program since 2019.</p>

      <p>Both cubs are healthy, active, and showing strong development under the careful supervision of our experienced veterinary team. The mother, Priya, is demonstrating excellent maternal instincts and is providing attentive care to her offspring. Our animal care specialists are monitoring the family around the clock to ensure their continued well-being.</p>

      <p>This birth is particularly significant as it contributes to the conservation of the Royal Bengal Tiger, a species that faces ongoing threats in the wild. The cubs represent hope for the future of this magnificent species and demonstrate the success of our carefully managed breeding program.</p>

      <p>The cubs will remain in their secure den with their mother for the first few weeks of life, as is natural for tiger development. Visitors will have the opportunity to see them once they are old enough to venture outside and explore their enclosure, which we anticipate will be in approximately 8-10 weeks.</p>

      <p>Our veterinary team has conducted initial health assessments, and both cubs show excellent vital signs and normal development patterns. They are nursing well and gaining weight appropriately. The cubs' father, Rajesh, is being kept in a separate but adjacent enclosure, which is standard practice to ensure the safety of the cubs during their vulnerable early weeks.</p>

      <p>This successful breeding is the result of years of careful planning, proper nutrition, optimal habitat conditions, and expert veterinary care. We are proud to contribute to the conservation of this endangered species and look forward to sharing updates on the cubs' progress with our visitors and the broader conservation community.</p>

      <p>We extend our gratitude to our dedicated animal care team, veterinary staff, and all supporters who make our conservation efforts possible. Stay tuned for more updates and photos as these beautiful cubs grow and develop.</p>
    `,
    author: "Dr. Rajesh Kumar, Chief Veterinarian",
    readTime: "5 min read",
    tags: ["Conservation", "Breeding Program", "Royal Bengal Tiger", "New Arrivals"],
  },
  2: {
    id: 2,
    title: "Patna Zoo Wins National Conservation Award",
    date: "2024-12-10",
    category: "Achievement",
    image: "/images/meet-animals/a2.jpg",
    summary:
      "Patna Zoo has been honored with the National Wildlife Conservation Excellence Award for outstanding efforts in species preservation.",
    content: `
      <p>We are immensely proud to announce that Patna Zoo has been awarded the prestigious National Wildlife Conservation Excellence Award by the Central Zoo Authority of India. This recognition acknowledges our unwavering commitment to wildlife conservation, successful breeding programs, and educational initiatives.</p>

      <p>The award ceremony took place at the National Zoo Conference in New Delhi, where our Director, Dr. Sunita Sharma, received the honor on behalf of our entire team. This achievement reflects the collective efforts of our dedicated staff, veterinarians, researchers, and conservation partners.</p>

      <p>Our zoo has been recognized specifically for our outstanding work in the breeding and conservation of endangered species, including the successful breeding programs for Royal Bengal Tigers, Indian Rhinoceros, and various bird species. Over the past five years, we have achieved remarkable success rates in our breeding initiatives, contributing significantly to species preservation efforts.</p>

      <p>The award also acknowledges our innovative educational programs that have reached over 50,000 students across Bihar. Our mobile education unit, interactive workshops, and conservation awareness campaigns have played a crucial role in fostering environmental consciousness among young minds.</p>

      <p>Additionally, our research contributions to wildlife conservation have been recognized. Our team has published several papers on animal behavior, breeding techniques, and habitat management, contributing valuable knowledge to the global conservation community.</p>

      <p>This recognition motivates us to continue our mission of wildlife conservation, education, and research. We remain committed to providing the highest standards of animal care while advancing conservation science and inspiring future generations to protect our natural heritage.</p>

      <p>We thank the Central Zoo Authority, our staff, volunteers, and the community for their continued support in making this achievement possible.</p>
    `,
    author: "Dr. Sunita Sharma, Zoo Director",
    readTime: "4 min read",
    tags: ["Award", "Conservation", "Recognition", "Excellence"],
  },
  3: {
    id: 3,
    title: "Special Winter Care Program Launched",
    date: "2024-12-05",
    category: "Program Launch",
    image: "/images/meet-animals/a3.jpg",
    summary:
      "A comprehensive winter care program has been initiated to ensure the comfort and health of all animals during the cold season.",
    content: `
      <p>As winter approaches, Patna Zoo has launched a comprehensive Winter Care Program to ensure the optimal health, comfort, and well-being of all our animal residents during the colder months. This specialized program addresses the unique needs of different species and their varying tolerance to cold weather.</p>

      <p>Our winter care initiative includes several key components designed to maintain animal welfare standards throughout the season. Heated enclosures have been installed for tropical species that are sensitive to cold temperatures, including our primates, reptiles, and certain bird species. These climate-controlled environments maintain optimal temperatures while allowing animals to move freely between heated and ambient areas.</p>

      <p>Dietary modifications form another crucial aspect of our winter care program. Our nutrition team has developed specialized winter diets that are higher in calories and fats to help animals maintain their body temperature and energy levels. Fresh, warm meals are provided more frequently, and additional supplements are included to boost immune systems during the challenging winter months.</p>

      <p>Enhanced bedding and shelter materials have been provided throughout the zoo. Animals receive extra straw, hay, and specialized bedding materials that provide insulation and comfort. Shelter structures have been reinforced and weatherproofed to protect against wind, rain, and cold temperatures.</p>

      <p>Our veterinary team has implemented enhanced health monitoring protocols during winter months. Regular health checks are conducted more frequently, with special attention to respiratory health, joint mobility, and overall condition. Preventive treatments are administered as needed to maintain optimal health.</p>

      <p>The program also includes enrichment activities specifically designed for winter conditions. Indoor enrichment options have been expanded, and weather-appropriate outdoor activities are provided when conditions permit. This ensures that animals remain mentally stimulated and physically active despite seasonal limitations.</p>

      <p>Staff training has been intensified to ensure all team members are equipped with the knowledge and skills necessary to implement winter care protocols effectively. Regular training sessions cover emergency procedures, animal behavior changes in winter, and proper use of heating equipment.</p>

      <p>We are committed to maintaining the highest standards of animal welfare year-round, and our Winter Care Program demonstrates this commitment to providing exceptional care regardless of seasonal challenges.</p>
    `,
    author: "Animal Care Team",
    readTime: "6 min read",
    tags: ["Animal Welfare", "Winter Care", "Health Program", "Seasonal Care"],
  },
  4: {
    id: 4,
    title: "New Educational Center Opens to Public",
    date: "2024-11-28",
    category: "Facility Update",
    image: "/images/meet-animals/a4.jpg",
    summary:
      "The state-of-the-art Wildlife Education Center is now open, featuring interactive exhibits and digital learning experiences.",
    content: `
      <p>We are excited to announce the grand opening of our new Wildlife Education Center, a state-of-the-art facility designed to enhance visitor learning experiences and promote wildlife conservation awareness. This 2,000 square foot center represents a significant investment in educational infrastructure and demonstrates our commitment to conservation education.</p>

      <p>The Education Center features cutting-edge interactive exhibits that engage visitors of all ages. Touch-screen displays provide detailed information about animal species, their habitats, conservation status, and the challenges they face in the wild. Virtual reality stations offer immersive experiences that transport visitors to natural habitats around the world, providing unique perspectives on wildlife behavior and ecosystem dynamics.</p>

      <p>Hands-on learning stations allow visitors to explore animal adaptations, food chains, and conservation concepts through interactive activities. These stations are designed to accommodate different learning styles and age groups, making complex ecological concepts accessible and engaging for everyone.</p>

      <p>The center includes a dedicated classroom space equipped with modern audio-visual technology for educational programs, workshops, and presentations. This facility will host school groups, conservation talks, and special educational events throughout the year.</p>

      <p>A highlight of the center is the Conservation Action Wall, where visitors can learn about ongoing conservation projects and discover ways to contribute to wildlife protection efforts. Interactive pledge stations allow visitors to make commitments to conservation actions they can take in their daily lives.</p>

      <p>The facility also houses our expanded library of conservation resources, including books, documentaries, and research materials available for students, researchers, and conservation enthusiasts. Digital archives provide access to our research publications and conservation project documentation.</p>

      <p>Special programs for school groups include guided tours, hands-on workshops, and curriculum-aligned educational activities. These programs are designed to complement classroom learning and inspire students to pursue careers in conservation and environmental science.</p>

      <p>The Wildlife Education Center is open daily during zoo hours, with special extended hours for educational programs. Admission to the center is included with zoo entry, making quality conservation education accessible to all visitors.</p>
    `,
    author: "Education Department",
    readTime: "5 min read",
    tags: ["Education", "New Facility", "Interactive Learning", "Conservation"],
  },
  5: {
    id: 5,
    title: "Successful Elephant Health Check-up Completed",
    date: "2024-11-20",
    category: "Health Update",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "Annual comprehensive health examinations for our elephant family have been completed with excellent results.",
    content: `
      <p>We are pleased to report the successful completion of annual comprehensive health examinations for our elephant family. These thorough check-ups, conducted by our veterinary team in collaboration with elephant specialists, have yielded excellent results, confirming the outstanding health status of all our elephants.</p>

      <p>The health assessments included comprehensive blood work, dental examinations, foot care procedures, and behavioral evaluations. Each elephant received individualized attention, with examinations tailored to their specific age, health history, and care requirements.</p>

      <p>Blood tests revealed optimal health parameters across all elephants, with normal values for liver function, kidney function, and immune system markers. These results reflect the high quality of care, nutrition, and veterinary attention our elephants receive throughout the year.</p>

      <p>Dental care formed a crucial component of the health checks. Our veterinary team, working with specialized elephant dental equipment, performed thorough oral examinations and necessary dental maintenance. Proper dental health is essential for elephant well-being, as dental problems can significantly impact their ability to process food and maintain proper nutrition.</p>

      <p>Foot care procedures were conducted with meticulous attention to detail. Elephant feet require specialized care due to their size and the animals' weight. Our team trimmed nails, treated minor abrasions, and applied preventive treatments to maintain optimal foot health. Regular foot care prevents serious complications and ensures the elephants' comfort and mobility.</p>

      <p>Behavioral assessments were conducted to evaluate the psychological well-being of each elephant. Our animal behavior specialists observed social interactions, response to enrichment activities, and overall demeanor. All elephants demonstrated positive behaviors and strong social bonds within their group.</p>

      <p>The examinations also included weight assessments and body condition scoring. All elephants are maintaining optimal body weights and condition, reflecting the effectiveness of our nutrition and exercise programs.</p>

      <p>These annual health checks are part of our comprehensive elephant care program, which includes daily health monitoring, specialized nutrition, enrichment activities, and preventive veterinary care. The excellent results of these examinations validate our commitment to providing world-class elephant care.</p>
    `,
    author: "Dr. Priya Patel, Elephant Specialist",
    readTime: "4 min read",
    tags: ["Elephant Care", "Health Check", "Veterinary Care", "Animal Welfare"],
  },
  6: {
    id: 6,
    title: "Community Outreach Program Reaches 10,000 Students",
    date: "2024-11-15",
    category: "Community",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "Our mobile education program has successfully reached over 10,000 students across Bihar, spreading wildlife conservation awareness.",
    content: `
      <p>We are thrilled to announce a major milestone in our community outreach efforts: our mobile education program has successfully reached over 10,000 students across Bihar. This achievement represents a significant step forward in our mission to spread wildlife conservation awareness and inspire the next generation of environmental stewards.</p>

      <p>Our mobile education unit has visited 150 schools across urban and rural areas of Bihar, bringing interactive conservation education directly to students who might not otherwise have the opportunity to visit our zoo. This program has been particularly impactful in remote areas where access to environmental education resources is limited.</p>

      <p>The mobile program features engaging presentations that combine education with entertainment. Puppet shows featuring animal characters teach students about wildlife behavior, habitat conservation, and the importance of biodiversity. These performances are designed to be both fun and educational, making complex conservation concepts accessible to young minds.</p>

      <p>Interactive workshops allow students to participate in hands-on activities that reinforce learning. Students engage in habitat building exercises, animal adaptation games, and conservation problem-solving activities. These interactive elements help students develop a deeper understanding of ecological relationships and conservation challenges.</p>

      <p>Educational games and quizzes test students' knowledge while maintaining an atmosphere of fun and friendly competition. Prize distributions and certificates of participation encourage continued interest in wildlife conservation and environmental protection.</p>

      <p>The program has been particularly successful in inspiring students to take conservation actions in their own communities. Many schools have reported increased participation in environmental clubs, tree planting initiatives, and waste reduction programs following our visits.</p>

      <p>Teacher feedback has been overwhelmingly positive, with educators noting increased student engagement with environmental topics and improved understanding of conservation concepts. Many teachers have requested follow-up visits and additional resources to continue conservation education in their classrooms.</p>

      <p>Our outreach team consists of experienced educators, conservation specialists, and trained volunteers who are passionate about sharing their knowledge and inspiring young conservationists. Their dedication and enthusiasm have been key factors in the program's success.</p>

      <p>Looking ahead, we plan to expand the program to reach even more students and communities across Bihar and neighboring states. We are also developing new program components, including teacher training workshops and student conservation leadership programs.</p>
    `,
    author: "Community Outreach Team",
    readTime: "5 min read",
    tags: ["Community Outreach", "Education", "Student Programs", "Conservation Awareness"],
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const news = newsData[params.id as keyof typeof newsData]

  if (!news) {
    return {
      title: "News Not Found - Patna Zoo",
      description: "The requested news article could not be found.",
    }
  }

  return {
    title: `${news.title} - Patna Zoo`,
    description: news.summary,
  }
}

export default function NewsDetailsPage({ params }: { params: { id: string } }) {
  const news = newsData[params.id as keyof typeof newsData]

  if (!news) {
    notFound()
  }

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

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          images={[news.image || "/images/hero/s1.jpg"]}
          title="NEWS DETAILS"
          subtitle="Stay Informed About Our Latest Developments"
          height="medium"
        />

        {/* Back Navigation */}
        <section className="py-8 bg-zoo-teal-700">
          <div className="zoo-container">
            <Link href="/programs/news">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News Updates
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <div className="animate-on-scroll">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge className={`flex items-center gap-1 ${getCategoryColor(news.category)}`}>
                    {getCategoryIcon(news.category)}
                    {news.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Calendar className="w-4 h-4" />
                    {formatDate(news.date)}
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Clock className="w-4 h-4" />
                    {news.readTime}
                  </div>
                </div>

                <h1 className="font-heading text-3xl md:text-5xl text-white mb-6 leading-tight">{news.title}</h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">{news.summary}</p>

                {news.author && (
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-10 h-10 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-zoo-teal-900 font-bold text-sm">
                        {news.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">By {news.author}</p>
                      <p className="text-sm text-white/60">Published on {formatDate(news.date)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 md:p-12 animate-on-scroll">
                <div
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "1.8",
                  }}
                />
              </Card>
            </div>
          </div>
        </section>

        {/* Tags and Share */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="font-heading text-lg text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {news.tags.map((tag, index) => (
                      <Badge key={index} className="bg-white/10 text-white/80 border-white/20 hover:bg-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg text-white mb-3">Share Article</h3>
                  <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related News */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">MORE NEWS</h2>
              <p className="text-white/80 mb-8">Stay updated with more news and announcements from Patna Zoo.</p>
              <Link href="/programs/news">
                <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-heading font-bold">
                  VIEW ALL NEWS
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
