"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useApiData } from "@/hooks/index";
import { DirectorMessageInfo } from "@/types/index";

export default function DirectorsMessagePage() {
  const [isVisible, setIsVisible] = useState(false);

  const { data: directorMessageData, loading } =
    useApiData<DirectorMessageInfo>("/directormessage");

  console.log("directorMessageData", directorMessageData);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="DIRECTOR'S MESSAGE"
          subtitle="A vision for conservation and education"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Director's Message */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Director's Photo and Info */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="sticky top-24">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-6">
                    {directorMessageData?.image && (
                      <Image
                        src={directorMessageData?.image}
                        alt="Dr. Amit Sharma, Director of Patna Zoo"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-1">
                    {directorMessageData?.name}
                  </h3>
                  <p className="text-zoo-yellow-600 font-medium mb-4">
                    Director, Sanjay Gandhi Biological Park
                  </p>
                  <div className="space-y-3 text-white/80 text-sm">
                    {/* <p>Ph.D. Wildlife Conservation</p>
                    <p>20+ years in conservation management</p>
                    <p>Former Regional Director, Wildlife Trust of India</p>
                    <p>Member, IUCN Species Survival Commission</p> */}
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div
                className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-zoo-yellow-600 mb-6">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="space-y-6 text-white/90">
                  {/* <p className="text-xl leading-relaxed">
                    {directorMessageData?.message}
                    dangerouslySetInnerHTML={{ __html: directorMessageData?.message }}
                  </p> */}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: String(directorMessageData?.message ?? ""),
                    }}
                  />

                  <div className="pt-6">
                    <p className="text-zoo-yellow-600 font-medium">
                      {directorMessageData?.name}
                    </p>
                    <p className="text-white/80">
                      Director, Sanjay Gandhi Biological Park
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12">
              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-8">
                  <h3 className="font-heading text-3xl mb-6 text-zoo-yellow-600">
                    OUR VISION
                  </h3>
                  {directorMessageData?.vision && (
                    <div
                      className="text-white/90 text-lg mb-4"
                      dangerouslySetInnerHTML={{
                        __html: directorMessageData?.vision,
                      }}
                    />
                  )}
                  {/* <p className="text-white/90 text-lg mb-4">
                    To be a leading center of excellence in wildlife
                    conservation, environmental education, and sustainable
                    practices in Eastern India.
                  </p>
                  <p className="text-white/90 text-lg">
                    We envision a future where people live in harmony with
                    nature, where endangered species thrive in their natural
                    habitats, and where every visitor leaves our zoo with a
                    deeper appreciation for wildlife and a commitment to
                    conservation.
                  </p> */}
                </CardContent>
              </Card>

              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll stagger-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-8">
                  <h3 className="font-heading text-3xl mb-6 text-zoo-yellow-600">
                    OUR MISSION
                  </h3>
                  <ul className="space-y-4 text-white/90">
                    {JSON.parse(directorMessageData?.mission || "[]").map(
                      (msg: string, index: number) => (
                        <li className="flex items-start gap-3" key={index}>
                          <div className="w-6 h-6 rounded-full bg-zoo-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-zoo-teal-900 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <p>{msg}</p>
                        </li>
                      )
                    )}
                    {/* <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-zoo-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-zoo-teal-900 font-bold">2</span>
                      </div>
                      <p>
                        To create awareness about wildlife conservation through
                        education and outreach programs
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-zoo-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-zoo-teal-900 font-bold">3</span>
                      </div>
                      <p>
                        To provide a recreational space that fosters a
                        connection between people and nature
                      </p>
                    </li> */}
                    {/* <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-zoo-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-zoo-teal-900 font-bold">4</span>
                      </div>
                      <p>
                        To conduct research that contributes to the scientific
                        understanding of wildlife and conservation
                      </p>
                    </li> */}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                STRATEGIC GOALS
              </h2>
              <p className="text-xl text-white/80">
                Our roadmap for the future of Patna Zoo focuses on five key
                areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Animal Welfare Excellence",
                  description:
                    "Continuously improve animal habitats and care protocols to ensure the highest standards of welfare for all species in our care.",
                },
                {
                  title: "Conservation Impact",
                  description:
                    "Expand our breeding programs for endangered species and strengthen partnerships with in-situ conservation projects in Bihar and beyond.",
                },
                {
                  title: "Educational Innovation",
                  description:
                    "Develop new educational programs and resources that inspire conservation action and reach diverse audiences.",
                },
                {
                  title: "Visitor Experience",
                  description:
                    "Enhance accessibility, interpretive materials, and interactive elements to create meaningful and memorable experiences for all visitors.",
                },
                {
                  title: "Sustainability Leadership",
                  description:
                    "Implement green practices across all operations and become a model for environmental sustainability in public institutions.",
                },
                {
                  title: "Research Advancement",
                  description:
                    "Strengthen our research capabilities and collaborations to contribute valuable knowledge to wildlife conservation science.",
                },
              ].map((goal, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 animate-on-scroll ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-zoo-yellow-600 flex items-center justify-center mb-4">
                      <span className="text-zoo-teal-900 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl mb-3">{goal.title}</h3>
                    <p className="text-white/80">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-zoo-teal-600 to-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                JOIN OUR CONSERVATION JOURNEY
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Your support helps us protect wildlife and create a sustainable
                future for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support/donate" className="zoo-button-primary">
                  SUPPORT OUR WORK
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
