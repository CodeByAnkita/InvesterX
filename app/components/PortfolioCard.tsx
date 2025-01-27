import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  year: string;
  icon: string; // Image source URL
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  year,
  icon,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse hover effect
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
      href={isHovered ? "#" : link} // Disable link if hovered
      target={isHovered ? "" : "_blank"}
      rel={isHovered ? "" : "noopener noreferrer"}
      className={`relative p-4 lg:p-8 my-4 h-96 rounded-2xl border border-solid bg-white text-black group hover:bg-custom-blue hover:text-white transition-all duration-300 flex flex-col cursor-${isHovered ? "not-allowed" : "pointer"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover effect for "Upcoming" */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white font-bold text-lg py-2 text-center rounded-t-2xl">
          Upcoming
        </div>
      )}
      {/* Arrow Icon */}
      <div className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white">
        <MdOutlineArrowOutward />
      </div>
      {/* Image */}
      <div className="flex justify-center items-center lg:mt-20 mt-16">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={80} // Adjust the width to match your design
          height={80} // Adjust the height to match your design
          className="transition-all duration-300"
          priority={true} // Prioritize loading for performance-critical images
        />
      </div>

      {/* Text content */}
      <div className="mt-24 text-left">
        <h3 className="text-xl font-semibold text-black transition-all duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-500 transition-all duration-300 group-hover:text-white">
          {description} / {year}
        </p>
      </div>
    </a>
  );
};

export default PortfolioCard;

