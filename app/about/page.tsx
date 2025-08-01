"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  TreePine,
  Award,
  Heart,
  Calendar,
  MapPin,
  Camera,
  FileText,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useApiData } from "@/hooks/index";
import { AboutInfo } from "@/types/index";
import Loader from "@/components/Loader";
import { useMemo } from "react";

export default function AboutPage() {
  const { data: aboutUsData, loading } = useApiData<AboutInfo>("/about-us");

  const ourImpact = useMemo(() => {
    try {
      return JSON.parse(aboutUsData?.b_t_no || "[]");
    } catch {
      return [];
    }
  }, [aboutUsData?.b_t_no]);

  const parsedHighlights = useMemo(() => {
    try {
      return JSON.parse(aboutUsData?.about_wpm || "[]");
    } catch {
      return [];
    }
  }, [aboutUsData?.about_wpm]);

  const iconMap: Record<string, LucideIcon> = {
    "Conservation Leadership": TreePine,
    "Educational Impact": Award,
    "Community Engagement": Users,
    "Research Excellence": Heart,
  };

  const highlights = parsedHighlights.map((item: any) => ({
    title: item.label,
    description: item.value,
    icon: iconMap[item.label],
  }));

  const stats = [
    {
      icon: MapPin,
      label: "Area",
      value: ourImpact[0]?.value,
      color: "bg-zoo-yellow-600",
    },
    {
      icon: Calendar,
      label: "Established",
      value: ourImpact[1]?.value,
      color: "bg-zoo-teal-600",
    },
    {
      icon: Users,
      label: "Annual Visitors",
      value: ourImpact[2]?.value,
      color: "bg-zoo-yellow-600",
    },
    {
      icon: Award,
      label: "Species",
      value: ourImpact[3]?.value,
      color: "bg-zoo-teal-600",
    },
  ];

  const aboutSections = [
    {
      icon: FileText,
      title: "Director's Message",
      excerpt:
        "Welcome to Sanjay Gandhi Biological Garden, where conservation meets education. Our commitment to wildlife preservation and public awareness has been unwavering for over five decades. As we continue to evolve and adapt to modern conservation challenges...",
      link: "/about/directors-message",
      color: "bg-zoo-teal-600",
    },
    {
      icon: Calendar,
      title: "History & Legacy",
      excerpt:
        "Established in 1973, Patna Zoo has grown from a modest collection to one of India's premier zoological institutions. Our journey spans five decades of dedication to wildlife conservation, education, and research...",
      link: "/about/history",
      color: "bg-zoo-yellow-600",
    },
    {
      icon: Camera,
      title: "Gallery",
      excerpt:
        "Explore our visual journey through stunning photographs capturing the beauty of wildlife, the dedication of our staff, and the joy of our visitors. From majestic tigers to colorful birds, our gallery showcases the diversity...",
      link: "/about/gallery",
      color: "bg-zoo-teal-600",
    },
    {
      icon: MapPin,
      title: "Zoo Map",
      excerpt:
        "Navigate through our 153-acre sanctuary with our comprehensive interactive map. Discover animal habitats, dining areas, rest zones, and special attractions. Plan your visit efficiently and ensure you don't miss any highlights...",
      link: "/about/map",
      color: "bg-zoo-yellow-600",
    },
  ];

  if (!aboutUsData && loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-zoo-teal-700">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="About Patna Zoo"
        subtitle="Sanjay Gandhi Biological Garden"
        backgroundImage="/images/header/about-zoo.jpg"
        height="medium"
      />

      {/* Key Personnel Banner */}
      <section className="bg-zoo-teal-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-zoo-yellow-600 text-zoo-teal-900 border-zoo-yellow-600 mb-4">
              Est. 1973
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Distinguished Patronage
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Under the esteemed guidance and support of our distinguished
              leaders, Patna Zoo continues to excel in wildlife conservation and
              public education.
            </p>
          </div>

          {/* Key Personnel Poster */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src={aboutUsData?.banner_image || "/images/a-h-1.jpg"}
                width={1920}
                height={1080}
                alt="Key Personnel - Chief Minister, Prime Minister and other dignitaries"
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

      {/* About Content */}
      <section className="bg-zoo-teal-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Our Story"
              subtitle="A Legacy of Conservation"
            />

            <div className="prose prose-lg max-w-none text-white/90 space-y-6">
              {aboutUsData?.our_story && (
                <div
                  className="text-xl leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: aboutUsData?.our_story,
                  }}
                />
              )}
              {/* <p className="text-xl leading-relaxed">
                Established in 1973, the Sanjay Gandhi Biological Garden,
                popularly known as Patna Zoo, stands as a testament to Bihar's
                commitment to wildlife conservation and environmental education.
                Spread across 153 acres of lush greenery, our zoo has evolved
                from a modest collection of animals to a comprehensive
                biological garden that serves as a sanctuary for diverse flora
                and fauna.
              </p>

              <p className="leading-relaxed">
                Named after the late Sanjay Gandhi, our institution embodies the
                vision of creating a space where wildlife thrives in
                naturalistic habitats while serving as an educational hub for
                visitors of all ages. Over the decades, we have successfully
                bred numerous endangered species, contributing significantly to
                national and international conservation efforts.
              </p>

              <p className="leading-relaxed">
                Patna Zoo is considered one of the best in the large zoo
                category of India. Recently, our zoo was ranked 4th by the
                Central Zoo Authority, New Delhi, in the MEE-2022. Patna Zoo is
                striving hard to provide an amazing and exhilarating experience
                to common visitors as well as to sensitize and create awareness
                among people about the conservation of our natural flora and
                fauna.
              </p>

              <p className="leading-relaxed">
                Our zoo is home to over 800 animals representing more than 110
                species, including the majestic Royal Bengal Tiger, Asian
                Elephants, One-horned Rhinoceros, and a variety of indigenous
                and exotic birds. The botanical section features over 300
                species of plants, creating a perfect ecosystem that supports
                both wildlife and environmental education.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-zoo-teal-800 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="By the Numbers" subtitle="Our Impact" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-center backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-zoo-yellow-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zoo-teal-700 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Committed to Wildlife Conservation and Education"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-zoo-teal-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {aboutUsData?.about_mission}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-zoo-teal-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {aboutUsData?.about_vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Sections Summary */}
      <section className="bg-zoo-teal-800 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Explore More About Us"
            subtitle="Discover Our Complete Story"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aboutSections.map((section, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${section.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {section.excerpt}
                  </p>
                  <Link
                    href={section.link}
                    className="inline-flex items-center gap-2 bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    View More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="bg-zoo-teal-700 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Patna Zoo Matters"
            subtitle="Our Impact on Conservation and Community"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight: any, index: string) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-zoo-teal-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {highlight?.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {highlight?.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-zoo-teal-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Conservation Mission
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Be part of our journey in protecting wildlife and preserving
              biodiversity for future generations. Your visit and support make a
              real difference in our conservation efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visit"
                className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold px-8 py-3 rounded-full transition-colors duration-200"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/programs/adopt-an-animal"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-3 rounded-full transition-colors duration-200"
              >
                Adopt an Animal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
