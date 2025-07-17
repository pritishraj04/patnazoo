"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingBag,
  Clock,
  MapPin,
  Star,
  Gift,
  CreditCard,
} from "lucide-react";
import { ImageGallery } from "@/components/image-gallery";
import {
  useApiData,
  useParsedGalleryImages,
  useActiveTab,
} from "@/hooks/index";
import { GalleryItem, TabMenuData } from "@/types/index";
import Loader from "@/components/Loader";

export default function SouvenirShopPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: galleryItem } = useApiData<GalleryItem>(
    "/zoo-exp/gallery/souvenir-shop"
  );

  const galleryImages = useParsedGalleryImages(galleryItem);

  const { data: menuData, loading } = useApiData<TabMenuData[]>(
    "/zooexp/souvenir-shop"
  );
  const [activeTab, setActiveTab] = useActiveTab(menuData);

  useEffect(() => {
    if (!loading && activeTab) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [loading, activeTab]);

  const productCategories = useMemo(() => {
    if (!menuData) return [];

    return menuData?.map((tabData) => ({
      id: tabData.tab.toLowerCase().replace(/\s+/g, "-"),
      name: tabData.tab,
      items: tabData.tab_content.map((item) => ({
        name: item.title,
        price: parseFloat(item.price),
        description: item.description,
        popular: item.tag.toUpperCase(),
      })),
    }));
  }, [menuData]);

  const shopFeatures = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Quality Products",
      description:
        "Carefully selected items that support wildlife conservation efforts",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Perfect Gifts",
      description: "Unique souvenirs and educational items for all ages",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Multiple Payment Options",
      description: "Cash, cards, and digital payments accepted",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Conservation Support",
      description: "Proceeds help fund zoo conservation and education programs",
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
              title="SOUVENIR SHOP"
              subtitle="Take home memories and support wildlife conservation"
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
                      MEMORIES TO TREASURE
                    </h2>
                    <p className="text-white/90 text-lg mb-4">
                      Our souvenir shop offers a wonderful collection of gifts,
                      toys, educational materials, and memorabilia that
                      celebrate wildlife and support conservation efforts. Every
                      purchase helps fund our zoo's mission to protect and
                      preserve endangered species.
                    </p>
                    <p className="text-white/90 text-lg mb-4">
                      From cuddly plush animals to educational books,
                      eco-friendly products to unique handicrafts, find the
                      perfect memento of your zoo visit. Our items are carefully
                      selected to inspire love for wildlife and environmental
                      awareness.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Open: 9:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">Near Main Entrance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="w-5 h-5 text-zoo-yellow-600" />
                        <span className="text-white">
                          Gift Wrapping Available
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
                      alt="Souvenir shop interior"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                      <p className="text-white/90 text-sm">
                        Wide selection of wildlife-themed souvenirs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Products */}
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
                    OUR PRODUCTS
                  </h2>
                  <p className="text-xl text-white/80">
                    Discover unique items that celebrate wildlife
                  </p>
                </div>

                <Tabs
                  defaultValue={activeTab}
                  onValueChange={setActiveTab}
                  className="max-w-6xl mx-auto"
                >
                  <TabsList className="grid w-full h-auto grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                    {productCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                      >
                        {category.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {productCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <CardTitle className="font-heading text-2xl text-center">
                            {category.name}
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
                                    {item.popular && (
                                      <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 text-xs px-2 py-0.5">
                                        <Star className="w-3 h-3 mr-1" />
                                        POPULAR
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-white/70 text-sm">
                                    {item.description}
                                  </p>
                                </div>
                                <div className="text-right ml-4">
                                  <span className="text-lg font-bold text-zoo-yellow-600">
                                    ₹{item.price}
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

            {/* Shop Features */}
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
                    WHY SHOP WITH US
                  </h2>
                  <p className="text-xl text-white/80">
                    Every purchase supports wildlife conservation
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {shopFeatures.map((feature, index) => (
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
                    SHOP GALLERY
                  </h2>
                  <p className="text-xl text-white/80">
                    Browse our collection of unique wildlife souvenirs
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
                          9:00 AM - 6:00 PM
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
                          <strong>Note:</strong> Extended hours during festivals
                          and special events
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
                        Location & Services
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Location</p>
                        <p className="text-white/80">
                          Near main entrance, easily accessible for all visitors
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Payment Methods</p>
                        <p className="text-white/80">
                          Cash, Credit/Debit Cards, UPI, Digital Wallets
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Special Services</p>
                        <p className="text-white/80">
                          Gift wrapping, bulk orders, educational institution
                          discounts
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
