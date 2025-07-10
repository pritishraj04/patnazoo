"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Train, Clock, MapPin, Star, Users, Ticket } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function ToyTrainPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/toy-train"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } =
    useApiData<TabMenuData[]>("/zooexp/toy-train");

  const [activeTab, setActiveTab] = useActiveTab(menuData);

  const trainInfo = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      items: tabData.tab_content.map((item) => ({
        name: item.title,
        description: item.description,
        time: item.price,
        highlight: item.tag.toUpperCase(),
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

  const trainFeatures = [
    {
      icon: <Train className="w-6 h-6" />,
      title: "Scenic Journey",
      description: "15-minute ride through the most beautiful parts of the zoo",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Friendly",
      description:
        "Perfect for all ages with comfortable seating and safety features",
    },
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Affordable Rates",
      description:
        "Reasonable pricing with special discounts for groups and families",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Educational Experience",
      description: "Learn about animals and conservation during your journey",
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
              title="TOY TRAIN"
              subtitle="A delightful journey through the heart of the zoo"
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
                      ALL ABOARD THE ADVENTURE
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Experience the magic of Patna Zoo from a unique
                      perspective aboard our charming toy train. This 15-minute
                      scenic journey takes you through the most spectacular
                      areas of the zoo, offering comfortable seating and
                      informative commentary about the wildlife you'll
                      encounter.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      Perfect for families, elderly visitors, and anyone who
                      wants to explore the zoo in comfort, our electric train
                      provides an eco-friendly way to see the major attractions
                      while learning about conservation efforts and animal care.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">Every 30 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Main Entrance Station
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Train className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">15-minute Journey</span>
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
                      alt="Toy train at Patna Zoo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                      <p className="text-white/90 text-sm">
                        Comfortable and scenic journey through the zoo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Train Information */}
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
                    TRAIN INFORMATION
                  </h2>
                  <p className="text-xl text-white/80">
                    Everything you need to know for your journey
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {trainInfo.map((info) => (
                      <TabsTrigger
                        key={info.id}
                        value={info.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                      >
                        {info.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {trainInfo.map((info) => (
                    <TabsContent key={info.id} value={info.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {info.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            {info.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-start p-4 bg-white/5 rounded-lg"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">
                                      {item.name}
                                    </span>
                                    {item.highlight && (
                                      <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 text-xs px-2 py-0.5">
                                        <Star className="w-3 h-3 mr-1" />
                                        HIGHLIGHT
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-white/70 text-sm">
                                    {item.description}
                                  </p>
                                </div>
                                <div className="text-right ml-4">
                                  <span className="text-lg font-bold text-zoo-yellow-600">
                                    {item.time}
                                  </span>
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

            {/* Train Features */}
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
                    WHY RIDE OUR TRAIN
                  </h2>
                  <p className="text-xl text-white/80">
                    Comfort, convenience, and conservation education
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trainFeatures.map((feature, index) => (
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
                          {feature.icon}
                        </div>
                        <h3 className="font-heading text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {feature.description}
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
                    TRAIN GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    See the train and the beautiful journey it offers
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
                        Operating Schedule
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">First Train</span>
                        <span className="text-zoo-yellow-600">9:00 AM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Last Train</span>
                        <span className="text-zoo-yellow-600">5:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Frequency</span>
                        <span className="text-zoo-yellow-600">
                          Every 30 minutes
                        </span>
                      </div>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-white/80 text-sm">
                          <strong>Note:</strong> Service may be suspended during
                          heavy rain or maintenance
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
                        Booking & Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Ticket Counter</p>
                        <p className="text-white/80">
                          Located at the main entrance station
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Capacity</p>
                        <p className="text-white/80">
                          40 passengers per journey
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Special Services</p>
                        <p className="text-white/80">
                          Group bookings, wheelchair accessibility available
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
