"use client";

import { useState, useEffect, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PlantCard } from "@/components/plant-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter, LoaderCircle } from "lucide-react";
import {useApiData, useDisplayCategories, useFilteredData} from "@/hooks/index"
import { Plants } from "@/types/index";

export default function PlantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data: plantData, loading } = useApiData<Plants[]>("/botanical");

  
  const categories = useDisplayCategories(plantData);

  const filteredPlants = useFilteredData(plantData, searchTerm, selectedCategory)

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

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="PLANTS & FLORA"
          subtitle="Explore the diverse plant life and botanical wonders at Patna Zoo"
          backgroundImage="/images/header/plant-bg.png"
          height="medium"
        />

        {/* Filters */}
        <section className="py-8 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zoo-teal-400 w-5 h-5" />
                  <Input
                    placeholder="Search plants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zoo-teal-600 border-zoo-teal-500 text-white placeholder-zoo-teal-300 w-full sm:w-80"
                  />
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="bg-zoo-teal-600 border-zoo-teal-500 text-white w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Plant type" />
                  </SelectTrigger>
                  <SelectContent className="bg-zoo-teal-600 border-zoo-teal-500">
                    {categories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category}
                        className="text-white hover:bg-zoo-teal-500 cursor-pointer"
                      >
                        {category === "all" ? "All Plants" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="border-zoo-yellow-600 text-zoo-yellow-600 hover:bg-zoo-yellow-600 hover:text-zoo-teal-900"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                CLEAR ALL FILTERS
              </Button>
            </div>
          </div>
        </section>

        {/* Plants Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <LoaderCircle className="h-12 w-12 animate-spin text-white" />
          </div>
        ) : (
          <section className="py-16 bg-zoo-teal-700">
            <div className="zoo-container">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPlants?.map((plant, index) => (
                  <PlantCard
                    key={plant.id}
                    name={plant.name}
                    species={plant.species}
                    category={plant.category}
                    image={plant.name}
                    slug={plant.slug}
                    height={plant.Qf_height}
                    bloomingSeason={plant.Qf_bloom}
                    medicinal={true}
                    className={`stagger-${(index % 5) + 1}`}
                  />
                ))}
              </div>

              {filteredPlants?.length === 0 && (
                <div className="text-center py-16 animate-fade-in">
                  <p className="text-white text-xl mb-4">
                    No plants found matching your search criteria.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900"
                  >
                    CLEAR FILTERS
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
