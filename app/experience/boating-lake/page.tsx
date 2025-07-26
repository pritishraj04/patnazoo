"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waves, Clock, MapPin, Anchor, Users, Camera } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function BoatingLakePage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/boating-lake"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } = useApiData<TabMenuData[]>(
    "/zooexp/boating-lake"
  );

  const [activeTab, setActiveTab] = useActiveTab(menuData);

  const boatingOptions = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      options: tabData.tab_content.map((item) => ({
        name: item.title,
        price: item.price,
        description: item.description,
        capacity: item.capacity,
        duration: item.duration,
        available: item.tag.toUpperCase(),
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
      icon: <Waves className="w-6 h-6" />,
      title: "Crystal Clear Lake",
      description:
        "Clean, well-maintained lake water with regular quality monitoring",
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "Safe Boating",
      description:
        "Life jackets provided, trained staff supervision, and safety protocols",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Friendly",
      description:
        "Suitable for all ages with special boats for children and families",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Scenic Views",
      description:
        "Beautiful lake surrounded by lush greenery and wildlife viewing opportunities",
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
          title="BOATING LAKE"
          subtitle="Peaceful boat rides on our scenic lake"
          backgroundImage="/images/header/lake.jpg"
          backgroundImage="/images/header/lake.jpg"
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
                      SERENE LAKE EXPERIENCE
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Escape into tranquility at our beautiful boating lake,
                      nestled within the heart of Patna Zoo. This pristine water
                      body offers visitors a chance to relax and enjoy nature
                      from a unique perspective while observing wildlife around
                      the lake's edges.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      Choose from our variety of boats including pedal boats,
                      row boats, and electric boats. Whether you're seeking
                      adventure, romance, or family fun, our lake provides the
                      perfect setting for memorable moments surrounded by
                      nature's beauty.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Open: 9:00 AM - 5:30 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">Northern Section</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Waves className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">Multiple Boat Types</span>
                      </div>
                    </div>
                  </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/images/lake.jpg"
                  alt="Boating lake with pedal boats"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Peaceful boating experience on our scenic lake</p>
                </div>
              </div>
            </div>
          </div>
        </section>

            {/* Boating Options */}
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
                    BOATING OPTIONS
                  </h2>
                  <p className="text-xl text-white/80">
                    Choose your perfect boat for an unforgettable lake
                    experience
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full h-auto grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {boatingOptions.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                      >
                        {category.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {boatingOptions.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {category.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            {category.options.map(
                              (option: any, index: number) => (
                                <div
                                  key={index}
                                  className="flex justify-between items-start p-4 bg-white/5 rounded-lg"
                                >
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-medium">
                                        {option.name}
                                      </span>
                                      {option.available && (
                                        <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                          <Anchor className="w-3 h-3 mr-1" />
                                          {option.available}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-white/70 text-sm mb-1">
                                      {option.description}
                                    </p>
                                    <p className="text-zoo-yellow-600 text-xs mb-1">
                                      Capacity: {option.capacity}
                                    </p>
                                    {option.duration && (
                                      <p className="text-zoo-yellow-600 text-xs">
                                        Duration: {option.duration}
                                      </p>
                                    )}
                                    {option.timing && (
                                      <p className="text-zoo-yellow-600 text-xs">
                                        Timing: {option.timing}
                                      </p>
                                    )}
                                    {option.includes && (
                                      <p className="text-zoo-yellow-600 text-xs">
                                        Includes: {option.includes}
                                      </p>
                                    )}
                                  </div>
                                  <div className="text-right ml-4">
                                    <span className="text-lg font-bold text-zoo-yellow-600">
                                      ₹{option.price}
                                    </span>
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
                    WHY CHOOSE OUR LAKE
                  </h2>
                  <p className="text-xl text-white/80">
                    Experience the best boating facilities in a natural setting
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
                    LAKE GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    Discover the beauty of our boating lake through images
                  </p>
                </div>

                <ImageGallery images={galleryImages} />
              </div>
            </section>

            {/* Location & Hours */}
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
                        Operating Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Tuesday - Sunday</span>
                        <span className="text-zoo-yellow-600">
                          9:00 AM - 5:30 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Last Boat Rental</span>
                        <span className="text-zoo-yellow-600">5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monday</span>
                        <Badge variant="destructive" className="bg-red-500">
                          Closed
                        </Badge>
                      </div>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-white/80 text-sm">
                          <strong>Note:</strong> Weather dependent - closed
                          during heavy rain or storms
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
                        Location & Safety
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Location</p>
                        <p className="text-white/80">
                          Northern section of Patna Zoo, near the bird sanctuary
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Safety Features</p>
                        <p className="text-white/80">
                          Life jackets provided, trained lifeguards on duty,
                          shallow water areas
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Best Time to Visit</p>
                        <p className="text-white/80">
                          Early morning or late afternoon for cooler weather and
                          better wildlife viewing
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
