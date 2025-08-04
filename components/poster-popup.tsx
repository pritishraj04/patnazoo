"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PosterPopupProps {
  imageUrl?: string;
  linkUrl?: string;
  alt?: string;
  onClose: any;
}

export function PosterPopup({
  imageUrl,
  linkUrl,
  alt = "Poster",
  onClose,
}: PosterPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only show if imageUrl is provided and valid
    if (imageUrl && imageUrl.trim() !== "") {
      // Small delay to ensure it appears after other elements load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [imageUrl]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleImageClick = () => {
    if (linkUrl && linkUrl.trim() !== "") {
      handleClose();
      // Small delay for smooth transition
      setTimeout(() => {
        router.push(linkUrl);
      }, 300);
    }
  };

  const handleBackdropClick = () => {
    // Backdrop click should only close, never navigate
    handleClose();
  };

  // Don't render if no image URL or not visible
  if (!imageUrl || imageUrl.trim() === "" || !isVisible) {
    return null;
  }

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        animation: "posterFadeIn 0.5s ease-out forwards",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 10,
          padding: "0.75rem",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          e.currentTarget.style.color = "#d1d5db";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          e.currentTarget.style.color = "white";
        }}
        aria-label="Close poster"
      >
        <X size={24} />
      </button>

      {/* Image Container - SIRF YAHAN CLICK KARNE SE NAVIGATION HOGA */}
      <div
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "90vh",
          width: "auto",
          height: "auto",
        }}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          width={800}
          height={600}
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            cursor: linkUrl ? "pointer" : "default",
          }}
          onLoad={() => setImageLoaded(true)}
          onClick={handleImageClick}
          priority
        />

        {/* Click indicator for links */}
        {linkUrl && imageLoaded && (
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              maxWidth: "90vw",
              textAlign: "center",
            }}
          >
            Click image to learn more
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes posterFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
