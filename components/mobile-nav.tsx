"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <div
      className={cn(
        "fixed inset-0 bg-zoo-beige-light z-50 overflow-y-auto transition-transform duration-300 transform",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="flex justify-between items-center p-4 border-b border-zoo-teal-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-zoo-teal-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <div>
            <div className="font-heading text-2xl leading-none text-zoo-teal-700">Patna</div>
            <div className="font-heading text-2xl leading-none text-zoo-teal-700">Zoo</div>
          </div>
        </Link>

        <button onClick={onClose} className="p-2 rounded-full bg-zoo-teal-700 text-white">
          <X className="w-6 h-6" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <input
            type="search"
            placeholder="Search"
            className="w-full p-3 rounded-full bg-white border border-zoo-teal-200 text-zoo-teal-700"
          />
        </div>

        <nav className="space-y-1">
          {[
            { name: "Visit", href: "/visit" },
            { name: "What's here", href: "/animals" },
            { name: "Support us", href: "/support" },
            { name: "Conservation, science & education", href: "/conservation" },
            { name: "Accommodation", href: "/accommodation" },
          ].map((item) => (
            <div key={item.name} className="border-b border-zoo-teal-200">
              <button
                className="flex items-center justify-between w-full py-4 text-zoo-teal-700 font-medium"
                onClick={() => toggleSection(item.name)}
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={cn("w-5 h-5 transition-transform", expandedSection === item.name ? "rotate-180" : "")}
                />
              </button>

              {expandedSection === item.name && (
                <div className="pb-4 pl-4 space-y-2">
                  <Link href={item.href} className="block text-zoo-teal-600 hover:text-zoo-teal-500" onClick={onClose}>
                    Overview
                  </Link>
                  <Link
                    href={`${item.href}/sub-page-1`}
                    className="block text-zoo-teal-600 hover:text-zoo-teal-500"
                    onClick={onClose}
                  >
                    Sub Page 1
                  </Link>
                  <Link
                    href={`${item.href}/sub-page-2`}
                    className="block text-zoo-teal-600 hover:text-zoo-teal-500"
                    onClick={onClose}
                  >
                    Sub Page 2
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          <Link
            href="/join"
            className="block w-full py-3 text-center font-bold text-zoo-teal-700 border-2 border-zoo-teal-700 rounded-full hover:bg-zoo-teal-700 hover:text-white transition-colors"
            onClick={onClose}
          >
            JOIN
          </Link>
          <Link
            href="/tickets"
            className="block w-full py-3 text-center font-bold text-zoo-teal-900 bg-zoo-yellow-600 rounded-full hover:bg-zoo-yellow-500 transition-colors"
            onClick={onClose}
          >
            BOOK TICKETS
          </Link>
        </div>
      </div>
    </div>
  )
}
