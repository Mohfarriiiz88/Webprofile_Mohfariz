// src/components/GalleryWithSkills.tsx
import React from "react";
import RollingGallery from "./RollingGallery";
import SkillsList from "./Skills";

const GalleryWithSkills: React.FC = () => {
  return (
    // Container utama: flex-col di mobile, flex-row di md ke atas
    <div className="flex flex-col md:flex-row w-full h-screen bg-black">
      {/* Sidebar kiri: RollingGallery */}
      <div className="w-full md:w-2/3 lg:w-3/5 h-full">
        <RollingGallery autoplay={false} pauseOnHover={false} />
      </div>

      {/* Sidebar kanan: SkillsList */}
      <div className="w-full md:w-1/3 lg:w-2/5 h-full overflow-auto">
        <div className="p-8">
          <SkillsList />
        </div>
      </div>
    </div>
  );
};

export default GalleryWithSkills;
