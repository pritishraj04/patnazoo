"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Clock, MapPin, Users, Zap, Shield } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function GolfCartsPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/golf-carts"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } =
    useApiData<TabMenuData[]>("/zooexp/golf-carts");

  const [activeTab, setActiveTab] = useActiveTab(menuData);

  const cartCategories = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      tabheader: tabData.tab_header.toUpperCase(),
      items: tabData.tab_content.map((item) => ({
        name: item.title,
        price: item.price,
        description: item.description,
        duration: item.duration,
        distance: item.distance,
        capacity: item.capacity,
        features: item.features,
        offer: item.offer,
        benefit: item.benefit,
        highlights: item.highlights,
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
      icon: <Zap className="w-6 h-6" />,
      title: "Eco-Friendly Electric",
      description:
        "100% electric vehicles with zero emissions and solar charging stations",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multiple Capacity Options",
      description: "Carts available for 4-6 people with accessibility options",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description:
        "Comprehensive safety features and regular maintenance checks",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Comfortable Ride",
      description: "Cushioned seats, weather protection, and smooth operation",
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
              title="GOLF CARTS"
              subtitle="Comfortable and eco-friendly transportation around the zoo"
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
                      COMFORTABLE EXPLORATION
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Explore Patna Zoo in comfort and style with our
                      eco-friendly electric golf carts. Perfect for families,
                      elderly visitors, and anyone who wants to cover more
                      ground while conserving energy for enjoying the
                      attractions.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      Our fleet of well-maintained electric carts offers a
                      quiet, emission-free way to navigate the zoo's extensive
                      pathways. Choose from various cart sizes and tour routes
                      to customize your perfect zoo experience.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Available: 9:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Multiple Pickup Points
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">100% Electric</span>
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
                      alt="Electric golf cart at Patna Zoo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                      <p className="text-white/90 text-sm">
                        Eco-friendly electric carts for comfortable zoo
                        exploration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cart Services */}
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
                    CART SERVICES
                  </h2>
                  <p className="text-xl text-white/80">
                    Choose the perfect cart and route for your zoo adventure
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full h-auto grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {cartCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                      >
                        {category.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {cartCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {category.tabheader}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            {category.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-start p-4 bg-white/5 rounded-lg"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">
                                      {item.name}
                                    </span>
                                    {item.status && (
                                      <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                        <Car className="w-3 h-3 mr-1" />
                                        {item.status}
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-white/70 text-sm mb-1">
                                    {item.description}
                                  </p>
                                  {Object.entries(item).map(([key, value]) => {
                                    if (
                                      [
                                        "duration",
                                        "capacity",
                                        "features",
                                        "distance",
                                        "highlights",
                                        "benefit",
                                        "offer",
                                        "price",
                                      ].includes(key) &&
                                      value
                                    ) {
                                      switch (key) {
                                        case "duration":
                                          return (
                                            <p
                                              key={key}
                                              className="text-zoo-yellow-600 text-xs"
                                            >
                                              Duration: {value}
                                            </p>
                                          );
                                        case "capacity":
                                          return (
                                            <p
                                              key={key}
                                              className="text-zoo-yellow-600 text-xs"
                                            >
                                              Capacity: {value}
                                            </p>
                                          );
                                        case "features":
                                          return (
                                            <p
                                              key={key}
                                              className="text-white/60 text-xs"
                                            >
                                              Features: {value}
                                            </p>
                                          );
                                        case "distance":
                                          return (
                                            <p
                                              key={key}
                                              className="text-zoo-yellow-600 text-xs"
                                            >
                                              Distance: {value}
                                            </p>
                                          );
                                        case "highlights":
                                          return (
                                            <p
                                              key={key}
                                              className="text-white/60 text-xs"
                                            >
                                              Highlights: {value}
                                            </p>
                                          );
                                        case "benefit":
                                          return (
                                            <p
                                              key={key}
                                              className="text-zoo-yellow-600 text-xs"
                                            >
                                              Benefit: {value}
                                            </p>
                                          );
                                        case "offer":
                                          return (
                                            <p
                                              key={key}
                                              className="text-green-400 text-xs"
                                            >
                                              Offer: {value}
                                            </p>
                                          );
                                        case "price":
                                          return (
                                            <div
                                              key={key}
                                              className="text-right ml-4"
                                            >
                                              <span className="text-lg font-bold text-zoo-yellow-600">
                                                ₹{value}
                                              </span>
                                            </div>
                                          );

                                          return null;
                                        default:
                                          return null;
                                      }
                                    }
                                    return null;
                                  })}
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
                    WHY CHOOSE OUR CARTS
                  </h2>
                  <p className="text-xl text-white/80">
                    Experience comfort, safety, and environmental responsibility
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
                    CART GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    See our fleet and facilities in action
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
                          9:00 AM - 5:00 PM
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
                          <strong>Note:</strong> Last rental 2 hours before zoo
                          closing time
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
                        Pickup Locations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Main Entrance</p>
                        <p className="text-white/80">
                          Primary rental station with full fleet
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Central Plaza</p>
                        <p className="text-white/80">
                          Mid-zoo pickup point for convenience
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Booking</p>
                        <p className="text-white/80">
                          Online booking recommended, walk-ins welcome
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
