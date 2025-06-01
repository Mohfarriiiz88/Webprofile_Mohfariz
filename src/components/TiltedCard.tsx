// src/components/TiltedCard.tsx
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, SpringOptions, PanInfo } from "framer-motion";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted avatar",
  containerHeight = "192px", // default setara 48 * 4 = 192px
  containerWidth = "192px",
  imageHeight = "192px",
  imageWidth = "192px",
  scaleOnHover = 1.05,
  rotateAmplitude = 10,
  showMobileWarning = true,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values untuk rotasi dan skala
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  // Motion values untuk tooltip (tidak dipakai di About)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useSpring(0);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Hitung offset relatif ke tengah container
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Rumus rotasi X dan Y
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    // Update posisi event untuk tooltip (bisa diabaikan)
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    // turunkan kecepatan rotasi figcaption (tidak dipakai)
    opacity.set(1);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    opacity.set(0);
  }

  return (
    <div
      ref={ref}
      className="relative [perspective:800px] flex items-center justify-center"
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-0 left-0 w-full text-center text-xs sm:hidden text-white">
          Effect not optimized for mobile
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d] rounded-full overflow-hidden"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover w-full h-full rounded-full will-change-transform"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />
      </motion.div>
    </div>
  );
}
