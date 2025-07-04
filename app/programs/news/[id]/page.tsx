"use client";

import { useApiData } from "@/hooks/index";
import { NewsItem } from "@/types/index";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  Award,
  Megaphone,
  Users,
  LoaderCircle,
} from "lucide-react";
import Loader from "@/components/Loader";

export default function NewsDetailsPage() {
  const params = useParams();
  const id = params.id;

  const { data: newsItemsData, loading } = useApiData<NewsItem>(
    `/featurednews/${id}`
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Birth Announcement":
        return <Heart className="w-4 h-4" />;
      case "Achievement":
        return <Award className="w-4 h-4" />;
      case "Program Launch":
        return <Megaphone className="w-4 h-4" />;
      case "Community":
        return <Users className="w-4 h-4" />;
      default:
        return <Megaphone className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Birth Announcement":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30";
      case "Achievement":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Program Launch":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Health Update":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Facility Update":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Community":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!newsItemsData && loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          images={["/images/hero/s1.jpg"]}
          title="NEWS DETAILS"
          subtitle="Stay Informed About Our Latest Developments"
          height="medium"
        />

        {/* Back Navigation */}
        <section className="py-8 bg-zoo-teal-700">
          <div className="zoo-container">
            <Link href="/programs/news">
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News Updates
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <div className="animate-on-scroll">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {newsItemsData?.category && (
                    <Badge
                      className={`flex items-center gap-1 ${getCategoryColor(
                        newsItemsData?.category
                      )}`}
                    >
                      {getCategoryIcon(newsItemsData.category)}
                      {newsItemsData.category}
                    </Badge>
                  )}
                  {newsItemsData?.date && (
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(newsItemsData.date)}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Clock className="w-4 h-4" />
                    {newsItemsData?.readtime}
                  </div>
                </div>

                <h1 className="font-heading text-3xl md:text-5xl text-white mb-6 leading-tight">
                  {newsItemsData?.title}
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {newsItemsData?.summary}
                </p>

                {newsItemsData?.author && (
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-10 h-10 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-zoo-teal-900 font-bold text-sm">
                        {newsItemsData.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">By {newsItemsData.author}</p>
                      <p className="text-sm text-white/60">
                        Published on {formatDate(newsItemsData.date)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                {newsItemsData?.image && (
                  <Image
                    // src={newsItemsData?.image || "/placeholder.svg"}
                    src="/placeholder.svg"
                    alt={newsItemsData?.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              {newsItemsData?.description && (
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 md:p-12 animate-on-scroll">
                  <div
                    className="prose prose-lg prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: newsItemsData?.description,
                    }}
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: "1.8",
                    }}
                  />
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Tags and Share */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="font-heading text-lg text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {JSON.parse(newsItemsData?.tags || "[]").map(
                      (tag: string, index: number) => (
                        <Badge
                          key={index}
                          className="bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
                        >
                          {tag}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg text-white mb-3">
                    Share Article
                  </h3>
                  <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related News */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
                MORE NEWS
              </h2>
              <p className="text-white/80 mb-8">
                Stay updated with more news and announcements from Patna Zoo.
              </p>
              <Link href="/programs/news">
                <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-heading font-bold">
                  VIEW ALL NEWS
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
