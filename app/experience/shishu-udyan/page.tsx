"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, Clock, MapPin, Star, Users, Shield } from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function ShishuUdyanPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/shishu-udyan"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } = useApiData<TabMenuData[]>(
    "/zooexp/shishu-udyan"
  );

  const [activeTab, setActiveTab] = useActiveTab(menuData);

  const playAreas = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      items: tabData.tab_content.map((item) => ({
        name: item.title,
        description: item.description,
        age: item.timing,
        safety: item.tag.toUpperCase(),
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

  const gardenFeatures = [
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Age-Appropriate Design",
      description:
        "Separate zones designed specifically for different age groups",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description:
        "All equipment meets international safety standards with trained supervision",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Educational Programs",
      description:
        "Learning activities that connect children with nature and wildlife",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Interactive Experiences",
      description: "Hands-on activities that make learning fun and memorable",
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
              title="SHISHU UDYAN"
              subtitle="A magical playground where children connect with nature"
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
                      CHILDREN'S PARADISE
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Shishu Udyan is a specially designed children's garden
                      that combines fun, learning, and nature exploration. Our
                      safe and engaging environment helps children develop a
                      love for wildlife and environmental conservation from an
                      early age.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      With age-appropriate play areas, educational activities,
                      and interactive experiences, children can explore, learn,
                      and play while parents relax knowing their little ones are
                      in a secure, supervised environment.
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
                        <span className="text-white">Near Children's Zoo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Supervised Play Areas
                        </span>
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
                      alt="Children playing in Shishu Udyan"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                      <p className="text-white/90 text-sm">
                        Children enjoying safe and educational play activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Play Areas */}
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
                    PLAY AREAS & ACTIVITIES
                  </h2>
                  <p className="text-xl text-white/80">
                    Age-appropriate fun and learning experiences
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {playAreas.map((area) => (
                      <TabsTrigger
                        key={area.id}
                        value={area.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900 text-xs"
                      >
                        {area.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {playAreas.map((area) => (
                    <TabsContent key={area.id} value={area.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {area.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            {area.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-start p-4 bg-white/5 rounded-lg"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">
                                      {item.name}
                                    </span>
                                    {item.safety && (
                                      <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                        <Shield className="w-3 h-3 mr-1" />
                                        SAFE
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-white/70 text-sm mb-1">
                                    {item.description}
                                  </p>
                                  <p className="text-zoo-yellow-600 text-xs font-medium">
                                    {item.age}
                                  </p>
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

            {/* Garden Features */}
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
                    WHY CHOOSE SHISHU UDYAN
                  </h2>
                  <p className="text-xl text-white/80">
                    Safe, educational, and fun for the whole family
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {gardenFeatures.map((feature, index) => (
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
                    GARDEN GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    See children enjoying our safe and fun activities
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
                        <span className="font-medium">Monday</span>
                        <Badge variant="destructive" className="bg-red-500">
                          Closed
                        </Badge>
                      </div>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-white/80 text-sm">
                          <strong>Note:</strong> Adult supervision required for
                          children under 8 years
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
                          Adjacent to the children's zoo, easily accessible
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Safety Features</p>
                        <p className="text-white/80">
                          Trained staff, first aid station, secure boundaries
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Special Programs</p>
                        <p className="text-white/80">
                          Birthday parties, school trips, summer camps available
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
