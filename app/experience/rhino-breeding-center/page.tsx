"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Clock, MapPin, Shield, Baby, Users } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function RhinoBreedingCenterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/rhino-breeding-center"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } = useApiData<TabMenuData[]>(
    "/zooexp/rhino-breeding-center"
  );

  const [activeTab, setActiveTab] = useActiveTab(menuData);

  const programCategories = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      tabheader: tabData.tab_header.toUpperCase(),
      activities: tabData.tab_content.map((item) => ({
        name: item.title,
        details: item.details,
        description: item.description,
        success: item.success,
        publications: item.publications,
        area: item.area,
        frequency: item.frequency,
        participants: item.participants,
        reach: item.reach,
        status: item.tag?.toUpperCase(),
      })),
    }));
  }, [menuData]);

  useEffect(() => {
    if (!loading && activeTab) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [loading, activeTab]);

  
  
  const facilities = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Specialized Care",
      description:
        "Dedicated veterinary team with expertise in rhino reproduction and health care",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Environment",
      description:
        "24/7 security monitoring and protected habitat ensuring safety of breeding pairs",
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Nursery Facilities",
      description:
        "Specialized nursery areas for newborn calves with climate control and monitoring",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description:
        "International team of rhino specialists, veterinarians, and conservation biologists",
    },
  ];

  const achievements = [
    {
      title: "Successful Births",
      number: "12",
      description: "Healthy rhino calves born since program inception",
      period: "2018-2024",
    },
    {
      title: "Breeding Pairs",
      number: "6",
      description: "Active breeding pairs in the program",
      period: "Current",
    },
    {
      title: "Survival Rate",
      number: "100%",
      description: "Calf survival rate in first year",
      period: "2022-2024",
    },
    {
      title: "Research Papers",
      number: "25",
      description: "Published research contributions to rhino conservation",
      period: "2020-2024",
    },
  ];

  return (
    <>
      {loading || !activeTab ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <main>
            <HeroSection
              title="RHINO BREEDING CENTER"
              subtitle="Pioneering conservation through successful breeding programs"
              backgroundImage="/images/header/animal-bg.png"
              height="medium"
            />

            {/* Introduction */}
            <section className="py-16 bg-zoo-teal-700">
              <div className="zoo-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div
                    className={`transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                      CONSERVATION THROUGH BREEDING
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Our Rhino Breeding Center stands as a beacon of hope for
                      one of the world's most endangered species. Established in
                      2018, this state-of-the-art facility has successfully bred
                      12 healthy rhino calves, contributing significantly to the
                      global conservation efforts for the Greater One-Horned
                      Rhinoceros.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      Through advanced reproductive techniques, comprehensive
                      veterinary care, and international collaboration, we're
                      not just breeding rhinos – we're securing their future.
                      Our program combines cutting-edge science with traditional
                      conservation wisdom to create optimal conditions for these
                      magnificent creatures to thrive.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Visits: 10:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">Eastern Section</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">12 Successful Births</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Rhino mother with calf in breeding center"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                      <p className="text-white/90 text-sm">
                        Successful breeding program ensuring species
                        conservation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Program Categories */}
            <section className="py-16 bg-zoo-teal-800">
              <div className="zoo-container">
                <div
                  className={`text-center mb-12 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                    OUR PROGRAMS
                  </h2>
                  <p className="text-xl text-white/80">
                    Comprehensive approach to rhino conservation and breeding
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full h-auto grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {programCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                      >
                        {category.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {programCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {category.tabheader}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {category.activities.map(
                              (activity: any, index: number) => (
                                <div
                                  key={index}
                                  className="p-4 bg-white/5 rounded-lg"
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium text-lg">
                                          {activity.name}
                                        </span>
                                        <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                          {activity.status}
                                        </Badge>
                                      </div>
                                      <p className="text-white/70 text-sm mb-2">
                                        {activity.description}
                                      </p>
                                      <p className="text-white/60 text-xs">
                                        {activity.details}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-zoo-yellow-600">
                                    {activity.success && (
                                      <span>Success: {activity.success}</span>
                                    )}
                                    {activity.area && (
                                      <span>Area: {activity.area}</span>
                                    )}
                                    {activity.partners && (
                                      <span>Partners: {activity.partners}</span>
                                    )}
                                    {activity.reach && (
                                      <span>Reach: {activity.reach}</span>
                                    )}
                                    {activity.publications && (
                                      <span>
                                        Publications: {activity.publications}
                                      </span>
                                    )}
                                    {activity.improvements && (
                                      <span>
                                        Improvements: {activity.improvements}
                                      </span>
                                    )}
                                    {activity.technology && (
                                      <span>
                                        Technology: {activity.technology}
                                      </span>
                                    )}
                                    {activity.frequency && (
                                      <span>
                                        Frequency: {activity.frequency}
                                      </span>
                                    )}
                                    {activity.participants && (
                                      <span>
                                        Participants: {activity.participants}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </section>

            {/* Achievements */}
            <section className="py-16 bg-zoo-teal-700">
              <div className="zoo-container">
                <div
                  className={`text-center mb-12 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                    OUR ACHIEVEMENTS
                  </h2>
                  <p className="text-xl text-white/80">
                    Measurable success in rhino conservation efforts
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="text-4xl font-bold text-zoo-yellow-600 mb-2">
                          {achievement.number}
                        </div>
                        <h3 className="font-heading text-lg mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-2">
                          {achievement.description}
                        </p>
                        <p className="text-zoo-yellow-600 text-xs">
                          {achievement.period}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Facilities */}
            <section className="py-16 bg-zoo-teal-800">
              <div className="zoo-container">
                <div
                  className={`text-center mb-12 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                    WORLD-CLASS FACILITIES
                  </h2>
                  <p className="text-xl text-white/80">
                    Advanced infrastructure supporting successful breeding
                    programs
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {facilities.map((facility, index) => (
                    <Card
                      key={index}
                      className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="text-zoo-yellow-600 mb-4 flex justify-center">
                          {facility.icon}
                        </div>
                        <h3 className="font-heading text-lg mb-2">
                          {facility.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {facility.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section className="py-16 bg-zoo-teal-700">
              <div className="zoo-container">
                <div
                  className={`text-center mb-12 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                    CENTER GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    Witness the success of our rhino breeding program
                  </p>
                </div>

                <ImageGallery images={galleryImages} />
              </div>
            </section>

            {/* Visit Information */}
            <section className="py-16 bg-zoo-teal-800">
              <div className="zoo-container">
                <div className="grid md:grid-cols-2 gap-12">
                  <Card
                    className={`bg-white/10 border-white/20 text-white animate-on-scroll ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl flex items-center gap-2">
                        <Clock className="w-6 h-6 text-zoo-yellow-600" />
                        Visiting Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Guided Tours</span>
                        <span className="text-zoo-yellow-600">
                          10:00 AM, 2:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Self-Guided Visits</span>
                        <span className="text-zoo-yellow-600">
                          10:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Research Visits</span>
                        <span className="text-zoo-yellow-600">
                          By Appointment
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monday</span>
                        <Badge variant="destructive" className="bg-red-500">
                          Closed
                        </Badge>
                      </div>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-white/80 text-sm">
                          <strong>Note:</strong> Advance booking required for
                          guided tours and research visits
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`bg-white/10 border-white/20 text-white animate-on-scroll stagger-2 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-zoo-yellow-600" />
                        Location & Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Location</p>
                        <p className="text-white/80">
                          Eastern section of the zoo, accessible via the
                          conservation trail
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Visitor Guidelines</p>
                        <p className="text-white/80">
                          Maintain quiet, no flash photography, follow guide
                          instructions
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Best Viewing Times</p>
                        <p className="text-white/80">
                          Early morning and late afternoon when rhinos are most
                          active
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
      )}
    </>
  );
}
