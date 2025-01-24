"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import SecondaryButton from "@/app/components/SecondButton";
import PortfolioCard from "@/app/components/PortfolioCard";
import PartnerCard from "./components/PartnerCard";
import homeside from "@/public/home-1/sidehomeimage.jpg";
import circle from "@/public/home-1/circleblue.jpg";
import companylogo from "@/public/home-1/companylogo.svg";
import enterpricelogo from "@/public/home-1/enterpricelogo.svg";
import oragnzationlogo from "@/public/home-1/organizationlogo.svg";
import venturelogo from "@/public/home-1/venturelogo.svg";
import startuplogo from "@/public/home-1/startuplogo.svg";
import reserch02 from "@/public/home-1/reserch02.jpg";
import reserch03 from "@/public/home-1/reserch03.jpg";
import reserch01 from "@/public/home-1/reserch01.jpg";
import ReadMoreButton from "./components/ReadMoreButton";
import { FaFacebookF } from "react-icons/fa6";
import { CgScreen } from "react-icons/cg";
import { CiMobile2 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Spline from "@splinetool/react-spline";
import ScrollingLogos from "./components/ScrollingLogos";
import { investors } from "@/app/components/data/investors";
import NavigationButton from "@/app/components/NavigationButton";

const researchData = [
  {
    id: "01",
    title: "Discovery",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.",
    image: reserch01,
  },
  {
    id: "02",
    title: "Research",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.",
    image: reserch02,
  },
  {
    id: "03",
    title: "Investment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.",
    image: reserch03,
  },
];

const HomePage = () => {

     // Slice the first 4 investors for Home or About page
     const limitedInvestors = investors.slice(0, 4);
  // State for the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for changing the index
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? researchData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === researchData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Current research item
  const currentResearch = researchData[currentIndex];


  
  return (
    <>
      {/* page1 */}
      <div className="bg-[#f6f8ff]">
        <main className=" flex items-center justify-center lg:flex-row md:flex-col  flex-col lg:justify-between lg:px-0 lg:p-0 p-8 md:p-10 ">
          <div className=" space-y-6 mb-28 w-full lg:px-14 sm:w-full lg:w-2/4">
            <h1 className="text-3xl lg:text-left text-center justify-center sm:text-4xl lg:text-6xl font-bold text-gray-800">
              We invest in the companies of the future, today
            </h1>
            <p className="text-gray-600 lg:text-left  text-center  sm:text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur sollicitudin pulvinar ipsum
              ut senectus malesuada dui lorem ac id vel nunc sapien magna.
            </p>
            <div className="flex flex-col md:justify-center md:flex-row lg:justify-self-start lg:flex-row space-y-5 md:space-y-0 md:space-x-4 lg:space-x-6">
              <Button text="Pitch Your Startup" href="/your-link-here" />
              <SecondaryButton text="Investment portfolio" />
            </div>
          </div>
          <div className="w-full sm:w-full lg:w-2/4">
            <Image
              src={homeside}
              alt="Abstract blue and white wavy background"
              className=" rounded-lg  shadow-md"
            />
          </div>
        </main>
        {/* Use the ScrollingLogos component */}
        <ScrollingLogos />
      </div>
      {/* page2 */}
      <div className="grid grid-cols-1  gap-4  md:grid-cols-2 lg:grid-cols-4 lg:mx-8 mx-4 px-6 py-4 lg:px-20  lg:py-28  bg-white">
        <div className=" text-left  mb-8 ">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-10 ">
            About Our Invest Firm
          </h1>
          <div className="mb-16 lg:mr-28  items-start justify-start ">
            <Button text="Pitch Your Startup" href="/your-link-here" />
          </div>
          <div className="mb-16 lg:mr-20 md:justify-center">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo vestibulum ut neque mus. Tempus arcu metus.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu.
            </p>
          </div>
        </div>
        {/* Center Section */}
        <div className="items-center lg:col-span-2  justify-center ">
          <div className="rounded-full overflow-hidden mb-8">
            <Image
              src={circle} // Your circle image
              alt="Your image description"
              width={900} // Make the image larger
              height={900}
              className="object-cover overflow-hidden"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className=" flex flex-col lg:col-span-1 md:col-span-2 md:flex-wrap lg:text-right text-center font-semibold text-2xl ">
          <div className="flex flex-col  mb-4">
            <p className="text-gray-600  my-4">Companies</p>
            <p className="text-blue-600 lg:text-5xl text-4xl font-bold">+200</p>
            <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
          </div>

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600 my-4">Team members</p>
            <p className="text-blue-600 lg:text-5xl text-4xl font-bold">+50</p>
            <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
          </div>

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600 my-4">Capital investment</p>
            <p className="text-blue-600 lg:text-5xl text-4xl font-bold">+5B</p>
            <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
          </div>

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600  my-4">Years of experience</p>
            <p className="text-blue-600 lg:text-5xl text-4xl font-bold">+15</p>
          </div>
        </div>
      </div>
      {/* page3 */}
      <div className="bg-[#f6f8ff]">
        <div className=" lg:p-12 p-2 mx-4 md:mx-24 lg:mx-28 ">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Our Portfolio
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 m-6">
            <PortfolioCard
              title="Company"
              description="Social Network"
              year="2025"
              icon={companylogo.src}
              link="/company-link"
            />
            <PortfolioCard
              title="Startup"
              description="Cloud Software"
              year="2024"
              icon={startuplogo.src}
              link="/startup-link"
            />
            <PortfolioCard
              title="Organization"
              description="Streaming"
              year="2022"
              icon={oragnzationlogo.src}
              link="/organization-link"
            />
            <div className="lg:col-span-2 col-span-1">
              <PortfolioCard
                title="Venture"
                description="E-commerce"
                year="2023"
                icon={venturelogo.src}
                link="/venture-link"
              />
            </div>
            <PortfolioCard
              title="Enterprise"
              description="AI Solutions"
              year="2026"
              icon={enterpricelogo.src}
              link="/enterprise-link"
            />
          </div>
          <div className="flex justify-center  py-12">
            <SecondaryButton text="Browse investment portfolio" />
          </div>
        </div>
      </div>
      {/* page4 */}
      <div className="flex  items-center justify-center lg:p-6 p-4 m-4 py-12 lg:m-10 lg:py-28 bg-white">
        <div className="w-full lg:mx-32 mx-4 ">
          {/* Header */}
          <div className="flex space-y-4 lg:space-y-0 flex-col lg:flex-row justify-between">
            <h1 className="lg:text-5xl text-3xl font-bold text-gray-900">
              Our approach
            </h1>
            <div className="flex md:flex-row space-y-4 md:space-y-0 flex-col items-start lg:space-x-5 space-x-3  lg:mr-32">
              <Button text="Pitch Your Startup" href="/your-link-here" />
              <SecondaryButton text=" Learn more" />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col my-12">
            {/* Left Section - Image */}
            <div className="">
              <Image
                src={currentResearch.image}
                alt={currentResearch.title}
                className="rounded-2xl"
                width={900}
                height={600}
                priority
              />
            </div>
            {/* Right Section - Content */}
            <div className="lg:w-1/2 w-full lg:px-16 lg:ml-6 mt-4 ">
              <div className="">
                <h2 className="lg:text-5xl text-3xl font-bold  text-gray-900">
                  {currentResearch.id}
                </h2>
                <h3 className="lg:text-2xl text-xl font-semibold my-2 text-gray-900">
                  {currentResearch.title}
                </h3>
                <p className="lg:mt-10 mt-5 text-wrap	lg:mr-6 mr-0 text-lg text-gray-600">
                  {currentResearch.description}
                </p>
              </div>
              {/* Navigation Buttons */}
              <div className="flex  mt-10 ">
              <NavigationButton direction="prev" onClick={handlePrevious} />
              <NavigationButton direction="next" onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 5 */}
      <div className="bg-[#f6f8ff] lg:text-left text-center lg:p-16  p-2 ">
        <div className="text-center mb-8">
          <h1 className="lg:text-5xl text-3xl font-semibold text-gray-800">
            Industries we invest in
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 lg:mx-28 mx-4 gap-2">
          <div className="lg:p-6 lg:mr-6 mr-0 p-2 flex flex-col items-center lg:items-start">
            <CiMobile2 className=" mb-6 h-12 w-12   " />

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Mobile app
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo.
            </p>
            <ReadMoreButton />
          </div>
          <div className="lg:p-6 lg:mr-6 mr-0 p-2 flex flex-col items-center lg:items-start">
            <CgScreen className=" mb-6 h-12 w-12" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Hardware companies
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo.
            </p>
            <ReadMoreButton />
          </div>
          <div className="lg:p-6 lg:mr-6 mr-0 p-2 flex flex-col items-center lg:items-start">
            <IoSettingsOutline className=" mb-6 h-12 w-12" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Software companies
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo.
            </p>
            <ReadMoreButton />
          </div>
        </div>
      </div>
      {/* page 6 */}
      <div className="bg-[#f6f8ff] flex items-center justify-center lg:pb-28 pb-16">
        <div className="relative rounded-3xl overflow-hidden lg:mx-52 mx-4">
          {/* Adjust Spline size for sm and md screens */}
          <div className="sm:scale-110 md:scale-125 sm:mt-8 md:mt-10 lg:scale-100 lg:mt-0 transition-all duration-300">
            <Spline scene="https://prod.spline.design/FbCmIqGsydBqn1vi/scene.splinecode" />
          </div>
          <div className="absolute inset-0 text-white  bg-black bg-opacity-30 flex flex-col items-center justify-center text-center lg:p-8 p-4">
            <h1 className=" flex  lg:mx-56 mx-4   text-2xl md:text-3xl lg:text-4xl lg:font-bold font-semibold lg:mb-4 mb-2">
              We invest in the companies of the future, today
            </h1>
            <p className=" lg:text-lg md:text-base text-sm lg:mb-6 mb-2 lg:mx-80 mx-4">
              Lorem ipsum dolor sit amet consectetur sollicitudin pulvinar ipsum
              ut senectus malesuada dui lorem ac.
            </p>

            <div className="flex   lg:flex-row flex-col items-center lg:mx-10 mx-4 justify-center  lg:gap-8 gap-4">
              <Button text="Pitch Your Startup" href="/your-link-here" />
              <div className="flex gap-4 ">
                <div className="     transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
                  <FaFacebookF />
                </div>
                <div className="  transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
                  <FaTwitter />
                </div>
                <div className="  transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
                  <AiFillInstagram />
                </div>
                <div className="   transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 7 */}

      <div className="bg-white text-gray-900 ">
        <div className="px-4 lg:py-16 lg:mx-48 mx-4 py-8">
          {/* Heading Section */}
          <div className="flex justify-between gap-6 lg:gap-1 text-left mb-12 ">
            <h1 className="lg:text-5xl text-3xl lg:w-1/3 w-full lg:content-end  content-center font-bold text-gray-900">
              Our partners
            </h1>
            <p className="text-gray-500 lg:w-2/5 w-full lg:text-xl text-base mt-4">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo vestibulum ut neque mus.
            </p>
          </div>
          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {limitedInvestors.map((investor) => (
            <PartnerCard
              key={investor.id}
              id={investor.id}
              image={investor.image}
              name={investor.name}
              title={investor.title}
            />
          ))}
          </div>
          {/* Footer Buttons */}
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 ">
            <Button text="Pitch Your Startup" href="/your-link-here" />
            <SecondaryButton text="   Browse all team members " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
