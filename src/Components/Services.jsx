import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const services = [
  {
    icon: <FaReact />,
    title: "React Development",
    desc: "We build modern, responsive, and interactive user interfaces using React with reusable components and optimized performance.",
    left: "Responsive UI",
    right: "Fast Loading",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js Development",
    desc: "Develop scalable backend applications, REST APIs, authentication systems, and server-side solutions with Node.js.",
    left: "REST APIs",
    right: "Authentication",
  },
  {
    icon: <FaDatabase />,
    title: "MongoDB Database",
    desc: "Efficient database design, schema creation, data management, and cloud database integration using MongoDB.",
    left: "NoSQL Database",
    right: "Cloud Storage",
  },
  {
    icon: <FaServer />,
    title: "Express.js Backend",
    desc: "Build secure and high-performance server applications with Express.js for modern web applications.",
    left: "API Development",
    right: "Secure Routes",
  },
  {
    icon: <FaCode />,
    title: "Full Stack MERN",
    desc: "Complete MERN stack solutions combining React, Node.js, Express, and MongoDB for powerful web applications.",
    left: "Custom Solutions",
    right: "Scalable Apps",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Applications",
    desc: "Custom web applications tailored to business needs with clean UI, optimized backend, and modern architecture.",
    left: "Modern Design",
    right: "SEO Friendly",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#121A35] py-20 px-8">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#0EBEC0]">
          Services
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base">
          Smart MERN stack solutions from frontend to backend,
          designed to build fast, scalable, and user-friendly
          web applications.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-[#121A35] border border-[#0EBEC0]
            rounded-[22px] p-5 text-center cursor-pointer
            transition-all duration-500
            hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 bg-[#0EBEC0] rounded-xl
              flex items-center justify-center
              text-white text-xl mx-auto shadow-lg
              transition-all duration-500
              group-hover:scale-110 group-hover:rotate-12"
            >
              {service.icon}
            </div>

            {/* Title */}
            <h2
              className="text-[22px] font-bold text-white mt-4
              transition-all duration-500
              group-hover:text-[#0EBEC0]"
            >
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 mt-3 text-sm leading-6">
              {service.desc}
            </p>

            {/* Features */}
            <div className="flex justify-between mt-5 text-xs text-gray-300">
              <div className="flex items-center gap-1">
                <IoCheckmarkCircle className="text-[#0EBEC0]" />
                <span>{service.left}</span>
              </div>

              <div className="flex items-center gap-1">
                <IoCheckmarkCircle className="text-[#0EBEC0]" />
                <span>{service.right}</span>
              </div>
            </div>

            {/* Button */}
            <button
              className="mt-5 border border-[#0EBEC0]
              text-[#0EBEC0] px-5 py-2 rounded-lg text-sm
              transition-all duration-500
              group-hover:bg-[#0EBEC0]
              group-hover:text-white"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;