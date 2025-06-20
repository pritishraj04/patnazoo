"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Heart,
  Leaf,
  Sun,
  Droplets,
  LoaderCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useApiData } from "@/hooks/index";
import { PlantInfo } from "@/types/index";

export default function PlantDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const params = useParams();
  const slug = params.slug as string;

  const { data: plantDetails, loading } = useApiData<PlantInfo>(
    `/botanical/${slug}`
  );

  const didYouKnowRaw = plantDetails?.DYK || "";

  const didYouKnowArray = didYouKnowRaw
    .split("•")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  if (!plantDetails || loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-zoo-teal-700 flex items-center justify-center">
          <div className="flex justify-center items-center py-10">
            <LoaderCircle className="h-12 w-12 animate-spin text-white" />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zoo-teal-700">
        {/* Breadcrumb */}
        <div className="bg-zoo-teal-800 py-4">
          <div className="zoo-container">
            <Link
              href="/plants"
              className="inline-flex items-center text-zoo-yellow-600 hover:text-zoo-yellow-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Plants
            </Link>
          </div>
        </div>

        <div className="zoo-container py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  // src={
                  //   plantDetails?.images[currentImageIndex] ||
                  //   "/placeholder.svg"
                  // }
                  src={"/placeholder.svg"}
                  alt={plantDetails?.name ?? "Plant Image"}
                  fill
                  className="object-cover"
                />
              </div>

              {plantDetails?.images.length > 1 && (
                <div className="flex gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? "border-zoo-yellow-600"
                          : "border-transparent hover:border-zoo-yellow-600/50"
                      }`}
                    >
                      <Image
                        src="/placeholder.svg"
                        alt={`Placeholder ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plant Information */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    className={`text-white border-none uppercase tracking-wide font-heading text-sm font-bold px-3 py-1 ${
                      plantDetails?.category === "Trees"
                        ? "bg-green-600"
                        : plantDetails?.category === "Flowers"
                        ? "bg-pink-500"
                        : plantDetails?.category === "Herbs"
                        ? "bg-emerald-500"
                        : plantDetails?.category === "Grasses"
                        ? "bg-lime-500"
                        : plantDetails?.category === "Aquatic"
                        ? "bg-blue-500"
                        : plantDetails?.category === "Succulents"
                        ? "bg-teal-500"
                        : "bg-zoo-teal-600"
                    }`}
                  >
                    {plantDetails?.category}
                  </Badge>

                  <Badge className="bg-red-500 text-white">
                    {/* <Heart className="w-3 h-3 mr-1" /> */}
                    {plantDetails?.Qf_medicinal}
                  </Badge>
                </div>

                <h1 className="text-4xl font-heading font-bold text-white mb-2">
                  {plantDetails?.name}
                </h1>
                <p className="text-zoo-yellow-600 text-xl italic mb-4">
                  {plantDetails?.species}
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  {plantDetails?.description}
                </p>
              </div>

              {/* Quick Facts */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-heading text-xl mb-4">
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <Ruler className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">
                        Height: {plantDetails?.Qf_height}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">
                        Blooms: {plantDetails?.Qf_bloom}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Sun className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">{plantDetails?.Qf_clr}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Droplets className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">{plantDetails?.Qf_temp}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visit Information */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-heading text-xl mb-4">
                    Visit Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-zoo-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-white/80 text-sm">
                          {plantDetails?.vi_loc_info}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-zoo-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">
                          Best Viewing Time
                        </p>
                        <p className="text-white/80 text-sm">
                          {plantDetails?.vi_duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Habitat & Care */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-heading text-xl mb-4">
                  Habitat & Care
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">
                      Natural Habitat
                    </h4>
                    <p className="text-white/80 text-sm">
                      {plantDetails?.hc_nat_hab}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">
                      Lifespan
                    </h4>
                    <p className="text-white/80 text-sm">
                      {plantDetails?.hc_life_span}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">
                      Temperature Range
                    </h4>
                    <p className="text-white/80 text-sm">
                      {plantDetails?.hc_temp}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural & Medicinal Significance */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-heading text-xl mb-4">
                  Significance
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">
                      Medicinal Uses
                    </h4>
                    <p className="text-white/80 text-sm">
                      {plantDetails?.S_MU}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">
                      Cultural Significance
                    </h4>
                    <p className="text-white/80 text-sm">
                      {plantDetails?.S_CS}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-zoo-yellow-600 font-medium mb-1">
                      Conservation Status
                    </h4>
                    <p className="text-white/80 text-sm">
                      {plantDetails?.S_Con}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interesting Facts */}
          <Card className="mt-8 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-white font-heading text-xl mb-4">
                Did You Know?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {didYouKnowArray?.map((fact: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-zoo-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 text-sm">{fact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-white font-heading text-2xl mb-4">
              Plan Your Visit
            </h3>
            <p className="text-white/80 mb-6">
              Come and see this amazing plant species in person at Patna Zoo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tickets">
                <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold px-8 py-3">
                  BOOK TICKETS
                </Button>
              </Link>
              <Link href="/plants">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zoo-teal-900 px-8 py-3"
                >
                  EXPLORE MORE PLANTS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
