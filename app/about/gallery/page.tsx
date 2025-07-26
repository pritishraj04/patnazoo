"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoaderCircle, X } from "lucide-react";
import { useApiData } from "@/hooks/index";
import { GalleryItem, PhotoOfMonthInfo } from "@/types/index";
import Loader from "@/components/Loader";

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { data: galleryItem, loading } = useApiData<GalleryItem[]>("/gallery");
  const { data: photoOfTheMonthData } =
    useApiData<PhotoOfMonthInfo>("/photo-of-month");


  const galleryCategories = useMemo(() => {
    return (
      galleryItem?.map((item) => {
        const parsedImages =
          item.image_path && item.image_path !== "[]"
            ? JSON.parse(item.image_path)
            : [];

        return {
          id: item.section_id,
          name:
            item.section_id.charAt(0).toUpperCase() + item.section_id.slice(1),
          images: parsedImages.map((img: any) => ({
            src: img.url,
            alt: img.title ?? "",
            caption: img.description ?? "",
          })),
        };
      }) ?? []
    );
  }, [galleryItem]);

  const [activeTab, setActiveTab] = useState<string>("animal");

  if (!galleryItem && loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="GALLERY"
          subtitle="Explore Patna Zoo through our lens"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Gallery Section */}
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
                VISUAL JOURNEY
              </h2>
              <p className="text-xl text-white/80">
                Discover the beauty and diversity of Patna Zoo through our
                collection of photographs
              </p>
            </div>

            <Tabs
              defaultValue={activeTab}
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="w-full flex overflow-x-auto mb-8 bg-white/10 border-white/20 p-1 rounded-lg">
                {galleryCategories?.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex-1 text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {galleryCategories?.map((category) => {
                return (
                  <TabsContent
                    key={category.id}
                    value={category.id}
                    className="mt-0"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {category.images.map(
                        (
                          image: {
                            src: string;
                            alt?: string;
                            caption?: string;
                          },
                          index: number
                        ) => (
                          <Dialog key={index}>
                            <DialogTrigger asChild>
                              <div
                                className={`relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 animate-on-scroll ${
                                  isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onClick={() => setSelectedImage(image?.src)}
                              >
                                <Image
                                  src={image.src || "/placeholder.svg"}
                                  alt={image.alt || ""}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                  <p className="text-white font-medium">
                                    {image.caption}
                                  </p>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                              <div className="relative">
                                <button
                                  onClick={() => setSelectedImage(null)}
                                  className="absolute top-2 right-2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center z-10"
                                >
                                  <X className="w-5 h-5 text-white" />
                                </button>
                                <div className="relative aspect-video">
                                  <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt || ""}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <div className="bg-zoo-teal-800/90 p-4">
                                  <p className="text-white font-medium">
                                    {image.caption}
                                  </p>
                                  <p className="text-white/70 text-sm">
                                    {image.alt}
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )
                      )}
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </section>

        {/* Featured Photo */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                PHOTO OF THE MONTH
              </h2>
              <p className="text-xl text-white/80">
                Highlighting exceptional moments captured at Patna Zoo
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden animate-on-scroll">
                <Image
                  src={
                    photoOfTheMonthData?.image ||
                    "/placeholder.svg?height=900&width=1600"
                  }
                  alt="Featured photo - Tiger cooling off in water"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">
                    {photoOfTheMonthData?.title}
                  </h3>
                  <p className="text-white/90">
                    {photoOfTheMonthData?.description}
                  </p>
                  <p className="text-zoo-yellow-600 mt-2">
                    Photo by: {photoOfTheMonthData?.photographer},{" "}
                    {photoOfTheMonthData?.month_year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Submission */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                SHARE YOUR MEMORIES
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Have you captured a special moment at Patna Zoo? Share your
                photos with us for a chance to be featured in our gallery.
              </p>
              <button className="zoo-button-primary">SUBMIT YOUR PHOTOS</button>
              <p className="text-white/70 mt-4 text-sm">
                By submitting, you agree to our photo usage policy and confirm
                that you own the rights to the submitted images.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
