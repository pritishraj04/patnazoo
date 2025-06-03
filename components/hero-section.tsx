"use client"

import { useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  images?: string[]
  height?: "full" | "large" | "medium" | "small"
}

export function HeroSection({
  images = ["/images/hero/s1.jpg", "/images/hero/s2.jpg"],
  height = "large",
}: HeroSectionProps) {
  const autoplayRef = useRef(
    AutoPlay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      dragFree: false,
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [autoplayRef.current],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  const heightClasses = {
    full: "h-screen",
    large: "h-[80vh] min-h-[600px] sm:h-[60vh] sm:min-h-[400px]",
    medium: "h-[60vh] min-h-[400px] sm:h-[45vh] sm:min-h-[300px]",
    small: "h-[40vh] min-h-[300px] sm:h-[30vh] sm:min-h-[200px]",
  }

  return (
    <section className={cn("relative overflow-hidden", heightClasses[height])}>
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-none w-full h-full relative">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          touch-action: pan-y pinch-zoom;
        }
        .embla__slide {
          transform: translate3d(0, 0, 0);
          flex: 0 0 auto;
          min-width: 0;
        }
      `}</style>
    </section>
  )
}
