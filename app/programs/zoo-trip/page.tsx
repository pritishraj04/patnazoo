"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useApiData } from "@/hooks/index";
import { zooTrip } from "@/types/index";
import Loader from "@/components/Loader";

export default function ZooTrip() {
  const { data: zooTripData, loading } = useApiData<zooTrip>("/dynamicContent");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="min-h-screen bg-zoo-teal-700">
            <Navbar />

            {/* Hero Section */}
            <HeroSection
              title="Zoo Trips and Adventures"
              subtitle="Explore the Wild Side of Patna"
              backgroundImage="/images/header/about-zoo.jpg"
              height="medium"
            />

            {/* Highlight Banner */}
            <section className="bg-zoo-teal-800 py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                  <Badge
                    variant="outline"
                    className="bg-zoo-yellow-600 text-zoo-teal-900 border-zoo-yellow-600 mb-4"
                  >
                    {zooTripData?.tag}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {zooTripData?.heading}
                  </h2>
                  <p className="text-white/80 text-lg max-w-3xl mx-auto">
                    {zooTripData?.sub_heading}
                  </p>
                </div>

                {/* Promotional Banner */}
                <div className="max-w-6xl mx-auto">
                  <div className="relative">
                    <Image
                      src="/images/a-h-1.jpg"
                      width={1920}
                      height={1080}
                      alt="Visitors enjoying the zoo"
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

            {/* About Zoo Trips */}
            <section className="bg-zoo-teal-700 py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <SectionHeading
                    title={zooTripData?.banner_heading || ""}
                    subtitle={zooTripData?.sub_heading2}
                  />

                  <div className="prose prose-lg max-w-none text-white/90 space-y-6">
                    <p className="leading-relaxed">
                      {zooTripData?.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-zoo-teal-800 py-16">
              <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Start Your Wild Journey Today
                  </h2>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Book your group trip, plan a family day out, or simply take
                    a break to reconnect with nature. Every visit helps support
                    wildlife care and conservation efforts at Patna Zoo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {zooTripData?.file_upload && (
                      <Link
                        href={zooTripData?.file_upload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold px-8 py-3 rounded-full transition-colors duration-200 flex gap-4 justify-center items-center"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download Time Sheet</span>
                      </Link>
                    )}
                    <Link
                      href="https://maps.app.goo.gl/uWp15bYGRUtJoe4NA"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-3 rounded-full transition-colors duration-200 flex gap-4 justify-center items-center"
                    >
                      <MapPin className="w-5 h-5" />
                      <span>Open in Maps</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </>
      )}
    </>
  );
}
