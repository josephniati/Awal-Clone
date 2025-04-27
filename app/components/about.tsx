"use client";

import React, { useState } from "react";
import { Button } from "./button";

type ServiceItemProps = {
  title: string;
  description: string;
  icon: string;
};

const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary-yellow/30 last:border-b-0 py-4">
      <div
        className="flex justify-between items-center cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-semibold text-lg text-primary-yellow group-hover:text-primary-yellow/80 transition-colors">
            {title}
          </h3>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 text-primary-yellow ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <p className="mt-2 text-primary-white/90 pl-9">{description}</p>
      )}
    </div>
  );
};

export const About = () => {
  const services: ServiceItemProps[] = [
    {
      title: "Distribution",
      description:
        "Get your music on all major platforms worldwide with our comprehensive distribution network.",
      icon: "🎵",
    },
    {
      title: "Analytics",
      description:
        "Track your performance with detailed analytics and insights across all platforms.",
      icon: "📊",
    },
    {
      title: "A&R",
      description:
        "Professional artist development and repertoire services to help you grow.",
      icon: "🎸",
    },
    {
      title: "Funding",
      description:
        "Access to funding opportunities and financial support for your music career.",
      icon: "💰",
    },
    {
      title: "Radio",
      description:
        "Get your music on radio stations worldwide through our extensive network.",
      icon: "📻",
    },
    {
      title: "Marketing",
      description:
        "Strategic marketing campaigns to promote your music and build your brand.",
      icon: "📢",
    },
    {
      title: "Playlisting",
      description:
        "Get your music featured on curated playlists across major streaming platforms.",
      icon: "🎧",
    },
    {
      title: "Sync",
      description:
        "Opportunities for music licensing in films, TV shows, commercials, and more.",
      icon: "🎬",
    },
  ];

  return (
    <div className="h-full flex-grow w-full bg-about bg-cover flex flex-col justify-center items-center">
      <div className="m-12 w-[80%] mx-auto bg-primary-purple-light flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 xl:p-32 gap-12">
        <div className="text-center space-y-4">
          <h2 className="text-primary-yellow text-3xl font-bold">
            Who is musicXchange? 🚀
          </h2>
          <p className="text-primary-white text-xl">
            We help artists get their music out TODAY
          </p>
          <div className="flex gap-4 justify-center text-primary-yellow">
            <span>Label services</span>
            <span>•</span>
            <span>Funding Support</span>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <h3 className="text-primary-yellow text-2xl font-bold mb-6 text-center">
            Our Services
          </h3>
          <div className="space-y-2">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
