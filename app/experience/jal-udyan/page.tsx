"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waves, Clock, MapPin, Droplets, Fish, TreePine } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function JalUdyanPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/jal-udyan"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } =
    useApiData<TabMenuData[]>("/zooexp/jal-udyan");

  const [activeTab, setActiveTab] = useActiveTab(menuData);

  const waterFeatures = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      features: tabData.tab_content.map((item) => ({
        name: item.title,
        price: item.price,
        description: item.description,
        timing: item.timing,
        season: item.timing,
        active: item.tag.toUpperCase(),
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
      title: "Natural Water Features",
      description:
        "Multiple fountains, ponds, and water bodies creating a serene environment",
    },
    {
      icon: <Fish className="w-6 h-6" />,
      title: "Aquatic Life",
      description:
        "Diverse fish species and aquatic animals in natural habitats",
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Lush Greenery",
      description:
        "Beautiful landscaping with aquatic plants and surrounding gardens",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Clean Environment",
      description: "Well-maintained water quality and eco-friendly practices",
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
          title="JAL UDYAN"
          subtitle="A serene water garden paradise in the heart of the zoo"
          backgroundImage="/images/header/jal-udyan.jpg"
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
                      WATER WONDERLAND
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Jal Udyan is a magnificent water garden that offers
                      visitors a peaceful retreat with its stunning collection
                      of fountains, ponds, and aquatic life. This beautifully
                      landscaped area combines natural water features with
                      artistic design elements.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      From musical fountains that dance to rhythm to serene
                      lotus ponds that bloom with vibrant colors, Jal Udyan
                      provides a perfect escape from the bustling city life.
                      Enjoy boat rides, feed the fish, or simply relax by the
                      water's edge.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Open: 6:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">Eastern Section</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Waves className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Multiple Water Features
                        </span>
                      </div>
                    </div>
                  </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/images/jal-udyan.jpg"
                  alt="Jal Udyan water garden"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Peaceful water garden with musical fountains</p>
                </div>
              </div>
            </div>
          </div>
        </section>

            {/* Water Features */}
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
                    WATER FEATURES
                  </h2>
                  <p className="text-xl text-white/80">
                    Discover the beauty of our aquatic attractions
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full h-auto grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {waterFeatures.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {waterFeatures.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {category.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            {category.features.map(
                              (feature: any, index: number) => (
                                <div
                                  key={index}
                                  className="flex justify-between items-start p-4 bg-white/5 rounded-lg"
                                >
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-medium">
                                        {feature.name}
                                      </span>
                                      {feature.active && (
                                        <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                          <Waves className="w-3 h-3 mr-1" />
                                          ACTIVE
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-white/70 text-sm mb-1">
                                      {feature.description}
                                    </p>
                                    {feature.timing &&
                                      activeTab != "water-bodies" &&
                                      activeTab != "aquatic" && (
                                        <p className="text-zoo-yellow-600 text-xs">
                                          Timing: {feature.timing}
                                        </p>
                                      )}
                                    {feature.season &&
                                      activeTab != "water-fountains" &&
                                      activeTab != "water-activities" && (
                                        <p className="text-zoo-yellow-600 text-xs">
                                          Season: {feature.season}
                                        </p>
                                      )}
                                  </div>
                                  {feature.price &&
                                    activeTab == "water-activities" && (
                                      <div className="text-right ml-4">
                                        <span className="text-lg font-bold text-zoo-yellow-600">
                                          ₹{feature.price}
                                        </span>
                                      </div>
                                    )}
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
                    WHY VISIT JAL UDYAN
                  </h2>
                  <p className="text-xl text-white/80">
                    Experience the tranquility of our water garden paradise
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
                    JAL UDYAN GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    Explore the beauty of our water garden through images
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
                        <span className="font-medium">Summer (Apr-Sep)</span>
                        <span className="text-zoo-yellow-600">
                          6:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Winter (Oct-Mar)</span>
                        <span className="text-zoo-yellow-600">
                          5:30 AM - 5:00 PM
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
                          <strong>Note:</strong> Musical fountain shows every 30
                          minutes during peak hours
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
                        Location & Activities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Location</p>
                        <p className="text-white/80">
                          Eastern section of Patna Zoo, near the main entrance
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Best Time to Visit</p>
                        <p className="text-white/80">
                          Early morning or evening for peaceful experience
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Special Features</p>
                        <p className="text-white/80">
                          Musical fountain shows, boat rides, and meditation
                          areas
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
