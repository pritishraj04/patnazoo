"use client"

import { useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  images?: string[]
  backgroundImage?: string // NEW: for static image mode
  height?: "full" | "large" | "medium" | "small"
  title?: string
  subtitle?: string
}

export function HeroSection({
  images,
  backgroundImage,
  height = "large",
  title,
  subtitle,
}: HeroSectionProps) {
  // Determine which mode to use
  const isCarousel = images && images.length > 1
  const displayImage = backgroundImage || (images && images[0]) || "/images/hero/b1.jpg"

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
    full: "h-screen min-h-[400px] sm:min-h-[600px] md:min-h-[800px]",
    large:
      "h-[50vh] min-h-[350px] sm:h-[60vh] sm:min-h-[400px] md:h-[70vh] md:min-h-[600px] lg:h-[80vh] lg:min-h-[700px]",
    medium:
      "h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] lg:min-h-[500px]",
    small:
      "h-[30vh] min-h-[180px] sm:h-[35vh] sm:min-h-[200px] md:h-[40vh] md:min-h-[250px] lg:h-[45vh] lg:min-h-[300px]",
  }

  return (
    <section className={cn("relative overflow-hidden flex flex-col justify-center", heightClasses[height])}>
      {isCarousel ? (
        <div className="embla h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full w-full">
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
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={displayImage}
            alt={title || "Hero image"}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}
      {/* Optional overlay for title/subtitle */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          {title && <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">{title}</h1>}
          {subtitle && <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">{subtitle}</p>}
        </div>
      )}
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
