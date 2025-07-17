"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Clock, MapPin, Users, Volume2, Eye } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function ThreeDTheaterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/3d-theater"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } =
    useApiData<TabMenuData[]>("/zooexp/3d-theater");

  const [activeTab, setActiveTab] = useActiveTab(menuData);

  const showCategories = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      shows: tabData.tab_content.map((item) => ({
        name: item.title,
        duration: item.duration,
        description: item.description,
        language: item.language,
        ageGroup: item.age,
        showTimes: item.showtime
          ? item.showtime.split(",").map((time) => time.trim())
          : [],
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
      icon: <Film className="w-6 h-6" />,
      title: "Latest 3D Technology",
      description:
        "State-of-the-art 3D projection system with crystal clear visuals and immersive experience",
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Surround Sound",
      description:
        "Premium audio system with surround sound for complete immersion",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comfortable Seating",
      description:
        "Ergonomic seats with perfect viewing angles for all audience members",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "3D Glasses Provided",
      description:
        "High-quality 3D glasses sanitized after each show for hygiene and safety",
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
              title="3D THEATER"
              subtitle="Immersive wildlife experiences in stunning 3D"
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
                      CINEMATIC WILDLIFE ADVENTURE
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Step into our cutting-edge 3D theater and embark on
                      extraordinary wildlife adventures without leaving your
                      seat. Our state-of-the-art facility brings you
                      face-to-face with nature's most magnificent creatures
                      through immersive 3D documentaries and educational films.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      From the depths of the ocean to the heights of the
                      Himalayas, experience wildlife like never before. Our
                      carefully curated collection of films focuses on
                      conservation, education, and the incredible diversity of
                      life on Earth, making learning both entertaining and
                      memorable.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Shows: 10:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">Central Complex</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">80 Seats</span>
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
                      alt="3D Theater interior with audience"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                      <p className="text-white/90 text-sm">
                        Immersive 3D wildlife experiences for all ages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Show Schedule */}
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
                    SHOW SCHEDULE
                  </h2>
                  <p className="text-xl text-white/80">
                    Choose from our exciting collection of 3D wildlife films
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full h-auto grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {showCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                      >
                        {category.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {showCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {category.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {category.shows.map((show: any, index: number) => (
                              <div
                                key={index}
                                className="p-4 bg-white/5 rounded-lg"
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-medium text-lg">
                                        {show.name}
                                      </span>
                                      {show.special && (
                                        <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 text-xs px-2 py-0.5">
                                          {show.special}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-white/70 text-sm mb-2">
                                      {show.description}
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-zoo-yellow-600">
                                      <span>Duration: {show.duration}</span>
                                      <span>Language: {show.language}</span>
                                      <span>Age: {show.ageGroup}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  <span className="text-white/80 text-sm mr-2">
                                    Show Times:
                                  </span>
                                  {show.showTimes.map(
                                    (time: any, timeIndex: number) => (
                                      <Badge
                                        key={timeIndex}
                                        className="bg-white/10 text-white hover:bg-white/20 text-xs px-2 py-1"
                                      >
                                        {time}
                                      </Badge>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </section>

            {/* Facilities */}
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
                    THEATER FEATURES
                  </h2>
                  <p className="text-xl text-white/80">
                    Experience the latest in 3D cinema technology
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
                    THEATER GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    Take a look inside our modern 3D theater facility
                  </p>
                </div>

                <ImageGallery images={galleryImages} />
              </div>
            </section>

            {/* Pricing & Hours */}
            <section className="py-16 bg-zoo-teal-700">
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
                        Show Timings & Pricing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Adult Ticket</span>
                        <span className="text-zoo-yellow-600 font-bold">
                          ₹40
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          Child Ticket (3-12 years)
                        </span>
                        <span className="text-zoo-yellow-600 font-bold">
                          ₹25
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Group Booking (20+)</span>
                        <span className="text-zoo-yellow-600 font-bold">
                          ₹30 per person
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
                          <strong>Note:</strong> Tickets included with zoo
                          entry. Advance booking recommended for weekends
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
                          Central complex, near the main entrance and visitor
                          center
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Capacity</p>
                        <p className="text-white/80">
                          80 seats with wheelchair accessible seating available
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Guidelines</p>
                        <p className="text-white/80">
                          No outside food, mobile phones on silent, arrive 10
                          minutes early
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
