"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Heart,
  Clock,
  Utensils,
  Globe,
  Shield,
  LoaderCircle,
} from "lucide-react";
import { useApiData, useConvertStringToArray } from "@/hooks/index";
import { AnimalInfo } from "@/types/index";
import { useParams } from "next/navigation";
import { iucnImages } from "@/public/images/INCU";
import Loader from "@/components/Loader";

export default function AnimalDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const params = useParams();
  const slug = params.slug as string;
  const { data: animalDetails, loading } = useApiData<AnimalInfo>(
    `/zoological/${slug}`
  );
  console.log("Animals Details", animalDetails);

  const didYouKnowArray = useConvertStringToArray(animalDetails?.fun_facts);
  const threatsArray = useConvertStringToArray(animalDetails?.CS_tent);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionImages = useMemo(() => {
    try {
      return JSON.parse(animalDetails?.section_image || "[]");
    } catch {
      return [];
    }
  }, [animalDetails]);

  const facts = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Habitat",
      value: animalDetails?.AI_habitat || "Unknown habitat",
      color: "bg-green-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Weight",
      value: animalDetails?.AI_weight
        ? `${animalDetails.AI_weight} kg`
        : "Weight not available",
      color: "bg-blue-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Length",
      value: animalDetails?.AI_length
        ? `${animalDetails.AI_length} meters`
        : "Length not available",
      color: "bg-purple-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lifespan",
      value: animalDetails?.AI_lifespan
        ? `${animalDetails.AI_lifespan} years`
        : "Lifespan unknown",
      color: "bg-orange-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Origin",
      value: animalDetails?.AI_origin || "Origin not known",
      color: "bg-teal-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Status",
      value: animalDetails?.AI_status || "Status not specified",
      color: "bg-red-500",
    },
  ];

  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  if (!animalDetails || loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          // title={animalDetails.name}
          // subtitle={animalDetails.species}
          // backgroundImage={sectionImages[activeImage] || "/placeholder.svg"}
          // backgroundImage={"/placeholder.svg"}
          backgroundImage={
            (sectionImages &&
              sectionImages.length > 0 &&
              sectionImages[activeImage]) ||
            "/placeholder.svg"
          }
          height="large"
        />

        {/* Photo Gallery */}
        <section className="bg-zoo-teal-800 py-6">
          <div className="zoo-container">
            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {sectionImages?.map((photo: any, index: any) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index
                      ? "border-zoo-yellow-600 scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={photo || "/placeholder.svg"}
                      alt={`${animalDetails.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Animal Title Section */}
        <section className="py-8 bg-zoo-teal-700">
          <div className="zoo-container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
              {animalDetails.name}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">
              {animalDetails.species}
            </p>
          </div>
        </section>

        {/* Quick Facts Grid */}
        <section className="py-12 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facts.map((fact, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="text-zoo-yellow-600 mb-2 flex justify-center">
                      {fact.icon}
                    </div>
                    <h3 className="font-heading text-sm mb-1">{fact.title}</h3>
                    <p className="text-white/80 text-xs">{fact.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="animate-on-scroll">
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-zoo-teal-600 text-white border-none px-4 py-2 text-sm">
                    {animalDetails?.category}
                  </Badge>
                  <Badge
                    className={`${
                      animalDetails?.tag === "Endangered"
                        ? "bg-red-500"
                        : "bg-green-500"
                    } text-white border-none px-4 py-2 text-sm`}
                  >
                    {animalDetails?.tag}
                  </Badge>
                </div>

                <h2 className="font-heading text-4xl text-white mb-6">
                  About the {animalDetails?.name}
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {animalDetails?.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <CardTitle className="text-lg">
                          Location in Zoo
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{animalDetails?.location}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-zoo-yellow-600" />
                        <CardTitle className="text-lg">Feeding Times</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* <div className="space-y-1">
                        {animal.feedingTimes.map((time, index) => (
                          <p key={index} className="text-white/80">
                            {time}
                          </p>
                        ))}
                      </div> */}
                      <p className="text-white/80">
                        {animalDetails?.feeding_times}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="animate-on-scroll stagger-2">
                <Card className="bg-white border-none">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-6 h-6 text-zoo-teal-700" />
                      <CardTitle className="text-zoo-teal-700 text-xl">
                        Feeding Habits
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zoo-teal-600 leading-relaxed">
                      {animalDetails?.feeding_habit}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                Fun Facts
              </h2>
              <p className="text-xl text-white/80">
                Amazing things you might not know about{" "}
                {animalDetails?.name.toLowerCase()}s
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {didYouKnowArray.map((fact, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 animate-on-scroll`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-zoo-yellow-600 text-3xl font-bold mb-3">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-white/90 leading-relaxed">{fact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conservation Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-heading text-4xl text-white mb-6">
                  Conservation Status
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl text-zoo-yellow-600 mb-3">
                      Current Threats
                    </h3>
                    <ul className="space-y-2">
                      {threatsArray.map((threat, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-white/90"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          {threat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl text-zoo-yellow-600 mb-3">
                      Our Conservation Efforts
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {animalDetails?.CS_efforts}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link href="/conservation" className="zoo-button-primary">
                      LEARN MORE
                    </Link>
                    <Link
                      href="/support/adopt"
                      className="zoo-button-secondary"
                    >
                      ADOPT A TIGER
                    </Link>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll stagger-2">
                <div className="relative rounded-2xl overflow-hidden">
                  {animalDetails?.IUCN && (
                    <Image
                      src={
                        iucnImages[
                          animalDetails.IUCN as keyof typeof iucnImages
                        ] || iucnImages["1"]
                      }
                      alt={`${animalDetails.name} IUCN category`}
                      width={644}
                      height={324}
                      className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
                    />
                  )}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-heading text-2xl text-white mb-2">
                        Help Save Tigers
                      </h3>
                      <p className="text-white/90">
                        Your support helps protect these magnificent creatures
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Information */}
        <section className="py-16 bg-gradient-to-r from-zoo-teal-600 to-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                Visit the {animalDetails?.name}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Come see this magnificent animal up close and learn more about
                our conservation efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tickets" className="zoo-button-primary">
                  BOOK TICKETS
                </Link>
                <Link href="/visit" className="zoo-button-secondary">
                  PLAN YOUR VISIT
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
