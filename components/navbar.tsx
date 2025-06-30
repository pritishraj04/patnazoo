"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";
import { useApiData } from "@/hooks/index";
import { LandingInfo } from "@/types/index";
import Image from "next/image"
// Simplified menu structure without overview pages
const menuItems = [
  {
    title: "About",
    groups: [
      {
        title: "Our Story",
        items: [
          { title: "About Patna Zoo", href: "/about" },
          { title: "History & Legacy", href: "/about/history" },
          { title: "Director's Message", href: "/about/directors-message" },
        ],
      },
      {
        title: "Resources",
        items: [
          { title: "Gallery", href: "/about/gallery" },
          { title: "Zoo Map", href: "/about/map" },
          { title: "Contact Us", href: "/contact" }
        ],
      },
    ],
  },
  {
    title: "Plan a Visit",
    groups: [
      {
        title: "Visitor Guide",
        items: [
          { title: "Quick Summary", href: "/visit" },
          { title: "Tickets & Timings", href: "/visit/tickets" },
          { title: "Rules & Safety Guidelines", href: "/visit/rules" },
        ],
      },
      {
        title: "Trip Tools",
        items: [
          { title: "Location & How to Reach", href: "/visit/location" },
          { title: "Facilities", href: "/visit/facilities" },
        ],
      },
    ],
  },
  {
    title: "What's Here",
    groups: [
      {
        title: "Wildlife",
        items: [
          { title: "Animals", href: "/animals" },
          { title: "Birds", href: "/animals?category=birds" },
          { title: "Reptiles", href: "/animals?category=reptiles" },
        ],
      },
      {
        title: "Nature",
        items: [{ title: "Plants & Flora", href: "/plants" }],
      },
    ],
  },
  {
    title: "Zoo Experience",
    groups: [
      {
        title: "Dining & Shopping",
        items: [
          { title: "Mayur Canteen", href: "/experience/mayur-canteen" },
          { title: "Souvenir Shop", href: "/experience/souvenir-shop" },
        ],
      },
      {
        title: "Attractions",
        items: [
          { title: "Jal Udyan", href: "/experience/jal-udyan" },
          { title: "Shishu Udyan", href: "/experience/shishu-udyan" },
          { title: "Toy Train", href: "/experience/toy-train" },
          { title: "Boating / Lake", href: "/experience/boating-lake" },
          { title: "3D Theater", href: "/experience/3d-theater" },
        ],
      },
      {
        title: "Zoo Features",
        items: [
          { title: "Nature Library", href: "/experience/nature-library" },
          {
            title: "Rhino Breeding Center",
            href: "/experience/rhino-breeding-center",
          },
          { title: "Photo Services", href: "/experience/photo-services" },
          { title: "Rose Garden", href: "/experience/rose-garden" },
          { title: "Golf Carts", href: "/experience/golf-carts" },
        ],
      },
    ],
  },
  {
    title: "Programs & Updates",
    groups: [
      {
        title: "Get Involved",
        items: [
          { title: "Adopt an Animal", href: "/programs/adopt-an-animal" },
          { title: "Breeding Programs", href: "/programs/breeding" },
          { title: "Events", href: "/events" }
        ],
      },
      {
        title: "Latest News",
        items: [
          { title: "Live Tenders", href: "/programs/tenders" },
          { title: "News Update", href: "/programs/news" },
        ],
      },
    ],
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const navRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<number | null>(null)

  const { data: landingPageData, loading } = useApiData<LandingInfo>(
    "/landingpagedetails"
  );

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Clear timeout helper
  const clearTimeout = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // Handle mouse enter on menu item
  const handleMenuEnter = useCallback(
    (title: string) => {
      clearTimeout()
      setActiveMenu(title)
    },
    [clearTimeout],
  )

  // Handle mouse leave from entire menu area
  const handleMenuAreaLeave = useCallback(() => {
    clearTimeout()
    timeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }, [clearTimeout])

  // Handle mouse enter back into menu area
  const handleMenuAreaEnter = useCallback(() => {
    clearTimeout()
  }, [clearTimeout])

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu && navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null)
      }
    };

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <div className="bg-zoo-teal-900/90 text-white/60 py-1.5 px-4 flex justify-between items-center text-xs relative">
        <div className="flex-1"></div>
        <div className="flex-grow text-center flex flex-col md:flex-row justify-center items-center gap-1 max-w-3xl mx-auto">
          <div className="font-medium">Sanjay Gandhi Biological Park</div>
          <div className="hidden md:block mx-1">•</div>
          <div>
            {landingPageData?.opening_time ? (
              landingPageData.opening_time
            ) : (
              <span className="text-gray-400 animate-pulse">
                Loading opening time...
              </span>
            )}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          {/* <button
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close notification"
            onClick={() => {
              const banner = document.querySelector(".bg-zoo-teal-900/90");
              if (banner) banner.classList.add("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button> */}
        </div>
      </div>

      <header className={cn("fixed left-0 right-0 z-50 transition-all duration-300", isScrolled ? "top-0" : "top-10 md:top-8")}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav
            ref={navRef}
            className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 shadow-lg border border-white/20"
          >
						<Link href="/" className="flex items-center gap-2 z-10">
                <Image src="/images/logo-large.svg" alt="Conservation work" width={180} height={50} className="ml-4" />
						</Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(item.title)}
                  onMouseLeave={handleMenuAreaLeave}
                >
                  {/* Parent Menu Item - Non-clickable trigger */}
                  <button
                    className={cn(
                      "px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-200 text-zoo-teal-700 hover:text-zoo-teal-500 hover:bg-zoo-teal-50/80 focus:outline-none focus:ring-2 focus:ring-zoo-yellow-600 focus:ring-offset-2",
                      activeMenu === item.title && "bg-zoo-teal-50/80 text-zoo-teal-500",
                    )}
                    aria-expanded={activeMenu === item.title}
                    aria-haspopup="true"
                  >
                    <span className="font-medium text-sm">{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeMenu === item.title && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Reverted Dropdown Menu Design */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/98 backdrop-blur-lg rounded-2xl shadow-2xl border border-zoo-teal-100/50 overflow-hidden transition-all duration-300 ease-out",
                      activeMenu === item.title
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible",
                      item.groups.length <= 2 ? "w-96" : "w-[600px]",
                    )}
                    onMouseEnter={handleMenuAreaEnter}
                    onMouseLeave={handleMenuAreaLeave}
                  >
                    {/* Previous design with white background */}
                    <div className="bg-gradient-to-br from-zoo-teal-50/50 to-zoo-beige-light/30 p-1">
                      <div
                        className={cn(
                          "p-6 grid gap-8 bg-white/80 rounded-xl",
                          item.groups.length <= 2 ? "grid-cols-2" : "grid-cols-3",
                        )}
                      >
                        {/* Grouped Items */}
                        {item.groups.map((group) => (
                          <div key={group.title} className="space-y-3">
                            <h3 className="font-semibold text-zoo-teal-800 text-sm uppercase tracking-wider border-b border-zoo-teal-200 pb-2 flex items-center gap-2">
                              {group.title}
                            </h3>
                            <div className="space-y-1">
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block px-3 py-2.5 text-zoo-teal-600 hover:text-zoo-teal-800 hover:bg-zoo-teal-50/80 rounded-lg transition-all duration-200 text-sm font-medium group border border-transparent hover:border-zoo-teal-200/50"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                      {subItem.title}
                                    </span>
                                    <svg
                                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/tickets"
                className="ml-4 bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold text-sm px-6 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zoo-yellow-600 focus:ring-offset-2"
              >
                BOOK TICKETS
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center gap-3 ml-10">
              <Link
                href="/tickets"
                className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold text-sm px-4 py-2 rounded-full transition-colors"
              >
                TICKETS
              </Link>
              <button
                className="p-2 rounded-full transition-colors bg-zoo-teal-600 hover:bg-zoo-teal-500 text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
}
