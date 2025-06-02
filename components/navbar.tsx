"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-zoo-teal-900/90 text-white/60 py-1.5 px-4 flex justify-between items-center text-xs relative">
        <div className="flex-1"></div>
        <div className="flex-grow text-center flex flex-col md:flex-row justify-center items-center gap-1 max-w-3xl mx-auto">
          <div className="font-medium">Sanjay Gandhi Biological Park</div>
          <div className="hidden md:block mx-1">•</div>
          <div>Opening times today: 10am - 6pm (Last entry at 5pm)</div>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close notification"
            onClick={() => {
              const banner = document.querySelector(".bg-zoo-teal-900/90")
              if (banner) banner.classList.add("hidden")
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
          </button>
        </div>
      </div>

      <header className="fixed top-8 left-0 right-0 z-50 transition-all duration-300">
        <div className="zoo-container py-4">
          <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 shadow-lg border border-white/20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-zoo-teal-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <div className="font-heading text-2xl leading-none text-zoo-teal-700">Patna</div>
                <div className="font-heading text-2xl leading-none text-zoo-teal-700">Zoo</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/visit" className="text-zoo-teal-700 hover:text-zoo-teal-500 transition-colors font-medium">
                Visit
              </Link>
              <Link href="/animals" className="text-zoo-teal-700 hover:text-zoo-teal-500 transition-colors font-medium">
                What's here
              </Link>
              <Link href="/support" className="text-zoo-teal-700 hover:text-zoo-teal-500 transition-colors font-medium">
                Support us
              </Link>
              <Link
                href="/conservation"
                className="text-zoo-teal-700 hover:text-zoo-teal-500 transition-colors font-medium"
              >
                Conservation, science & education
              </Link>
              <Link
                href="/accommodation"
                className="text-zoo-teal-700 hover:text-zoo-teal-500 transition-colors font-medium"
              >
                Accommodation
              </Link>
              <Link href="/join" className="text-zoo-teal-700 hover:text-zoo-teal-500 transition-colors font-bold">
                JOIN
              </Link>
              <Link href="/tickets" className="zoo-button-primary">
                BOOK TICKETS
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/tickets"
                className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold text-sm px-4 py-2 rounded-full transition-colors"
              >
                TICKETS
              </Link>
              <button
                className="p-2 rounded-full bg-zoo-teal-600 hover:bg-zoo-teal-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5 text-white" />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
