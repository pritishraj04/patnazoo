import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zoo-teal-700 py-8">
      <div className="zoo-container">
        <div className="bg-zoo-beige-light text-zoo-teal-700 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 justify-between mb-8">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zoo-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <div className="font-heading text-2xl leading-none">Patna</div>
                  <div className="font-heading text-2xl leading-none">Zoo</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:ml-0 lg:ml-0">
                <div className="w-8 h-8 bg-zoo-teal-700 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">BS</span>
                </div>
                <div className="text-sm text-zoo-teal-600">Bihar Sarkar</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
              <div>
                <h4 className="font-bold mb-4">Visit</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/visit/opening-times" className="hover:underline">
                      Opening times
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/prices" className="hover:underline">
                      Prices
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/getting-here" className="hover:underline">
                      Find us
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/rules-regulations" className="hover:underline">
                      Rules & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/accessibility" className="hover:underline">
                      Accessibility
                    </Link>
                  </li>
                  <li>
                    <Link href="/visit/faqs" className="hover:underline">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">What's here</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/animals" className="hover:underline">
                      Animals
                    </Link>
                  </li>
                  <li>
                    <Link href="/exhibits" className="hover:underline">
                      Exhibits
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:underline">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/food-drink" className="hover:underline">
                      Food & drink
                    </Link>
                  </li>
                  <li>
                    <Link href="/shops" className="hover:underline">
                      Shops
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Support us</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/support/sponsorship" className="hover:underline">
                      Sponsorship
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/donate" className="hover:underline">
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/volunteer" className="hover:underline">
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/education" className="hover:underline">
                      Education
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Conservation</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/conservation/our-work" className="hover:underline">
                      Our work
                    </Link>
                  </li>
                  <li>
                    <Link href="/conservation/projects" className="hover:underline">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/conservation/breeding-program" className="hover:underline">
                      Breeding Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/conservation/research" className="hover:underline">
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link href="/conservation/awareness" className="hover:underline">
                      Awareness
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zoo-teal-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/PatnaZooOfficial/"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/patnazooofficial/"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com/PatnaZoo"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.youtube.com/@PatnaZooOfficial"
                className="w-10 h-10 rounded-full bg-zoo-teal-700 text-white flex items-center justify-center hover:bg-zoo-teal-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>

            <div className="text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Patna Zoo, Government of Bihar. All rights reserved.</p>
              <div className="flex gap-2 justify-center md:justify-end mt-2 text-xs">
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
                <Link href="/cookies" className="hover:underline">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
