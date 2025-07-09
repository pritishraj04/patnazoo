"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Leaf, Heart } from "lucide-react";

interface PlantCardProps {
  name: string;
  species: string;
  category: string;
  image: string;
  slug: string;
  height: string;
  bloomingSeason: string;
  medicinal: boolean;
  className?: string;
}

export function PlantCard({
  name,
  species,
  category,
  image,
  slug,
  height,
  bloomingSeason,
  medicinal,
  className,
}: PlantCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link
      href={`/plants/${slug}`}
      className={cn("block zoo-card group animate-on-scroll", className)}
      ref={cardRef}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          // src={image || "/placeholder.svg"}
          src={"/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <Badge
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-white border-none uppercase tracking-wider font-heading responsive-text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 ${
            category === "Herb"
              ? "bg-emerald-500"
              : category === "Medicinal"
              ? "bg-emerald-700"
              : category === "Cultural"
              ? "bg-yellow-600"
              : category === "Fruit & Cultural"
              ? "bg-orange-500"
              : category === "Ornamental"
              ? "bg-rose-500"
              : category === "Sacred"
              ? "bg-purple-700"
              : category === "Medicinal & Fruit"
              ? "bg-green-500"
              : category === "Sacred & Medicinal"
              ? "bg-indigo-700"
              : category === "Medicinal & Cultural"
              ? "bg-amber-600"
              : category === "Timber"
              ? "bg-rose-700"
              : category === "Fruit"
              ? "bg-orange-400"
              : category === "Shade"
              ? "bg-cool-gray-600"
              : "bg-zoo-teal-600"
          }`}
        >
          {category}
        </Badge>

        {medicinal && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </div>
        )}

        <div className="zoo-card-overlay">
          <h3 className="font-heading responsive-text-xl sm:responsive-text-2xl text-white">
            {name}
          </h3>
          <p className="text-white/80 responsive-text-sm italic leading-relaxed mb-2">
            {species}
          </p>
          <div className="flex items-center gap-2 text-white/70 responsive-text-xs">
            <Leaf className="w-3 h-3" />
            <span>Height: {height}</span>
          </div>
          <div className="text-white/70 responsive-text-xs mt-1">
            Blooms: {bloomingSeason}
          </div>
        </div>
      </div>
    </Link>
  );
}
