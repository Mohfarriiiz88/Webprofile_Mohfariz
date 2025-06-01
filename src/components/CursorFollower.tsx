// src/components/CursorFollower.tsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower: React.FC = () => {
  // 1. Buat motionValue untuk x dan y
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Wrap mouseX/mouseY dengan spring agar ada easing/lag
  //    Anda bisa sesuaikan stiffness & damping untuk kecepatan/kelenturan
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update posisi kursor (relatif ke viewport)
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    // Tambahkan listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup saat komponen unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 
        3. Render motion.div: 
           - fixed: supaya selalu di atas konten
           - pointer-events-none: agar tidak mengganggu click di elemen lain
           - ukuran: w-4 h-4 (bisa diubah sesuai keinginan)
           - bg-white bg-opacity-75: warna putih semi-transparan (sesuaikan)
           - rounded-full: bentuk lingkaran
           - shadow-md: efek bayangan tipis
      */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white bg-opacity-75 rounded-full shadow-md pointer-events-none z-50"
        style={{
          // posisikan berdasarkan springX & springY, dengan offset supaya dot tepat berada di tengah pointer
          translateX: springX, // ini akan otomatis men-animasi ke nilai terbaru
          translateY: springY,
        }}
      />
    </>
  );
};

export default CursorFollower;
