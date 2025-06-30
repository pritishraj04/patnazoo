"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuGroup {
  title: string
  items: { title: string; href: string }[]
}

interface MenuItem {
  title: string
  groups?: MenuGroup[]
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  menuItems: MenuItem[]
}

export function MobileNav({ isOpen, onClose, menuItems }: MobileNavProps) {
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
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <Image src="/images/logo-large.svg" alt="Conservation work" width={180} height={50} className="ml-4" />
        </Link>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-zoo-teal-700 text-white hover:bg-zoo-teal-800 transition-colors"
        >
          <X className="w-6 h-6" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search"
            className="w-full p-3 rounded-full bg-white border border-zoo-teal-200 text-zoo-teal-700 placeholder-zoo-teal-700 focus:outline-none focus:ring-2 focus:ring-zoo-yellow-600"
          />
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.title} className="border-b border-zoo-teal-200">
              <button
                className="flex items-center justify-between w-full py-4 text-zoo-teal-700 font-medium hover:text-zoo-teal-500 transition-colors"
                onClick={() => toggleSection(item.title)}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform text-zoo-yellow-600",
                    expandedSection === item.title ? "rotate-180" : "",
                  )}
                />
              </button>

              {expandedSection === item.title && item.groups && (
                <div className="pb-4 space-y-4">
                  {item.groups.map((group) => (
                    <div key={group.title} className="px-4">
                      <h4 className="font-semibold text-zoo-teal-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full"></div>
                        {group.title}
                      </h4>
                      <div className="space-y-1">
                        {group.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center px-3 py-2.5 text-zoo-teal-600 hover:text-zoo-teal-500 hover:bg-zoo-teal-50 rounded-lg transition-all duration-200 group"
                            onClick={onClose}
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {subItem.title}
                            </span>
                            <ChevronRight className="w-4 h-4 ml-auto text-zoo-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          {/* <Link
            href="/join"
            className="block w-full py-3 text-center font-bold text-zoo-teal-700 border-2 border-zoo-teal-700 rounded-full hover:bg-zoo-teal-700 hover:text-white transition-all duration-200"
            onClick={onClose}
          >
            JOIN
          </Link> */}
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
