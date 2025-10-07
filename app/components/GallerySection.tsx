// CarouselSection.tsx
import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";

// Sample images - replace with your own URLs
const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1581090124360-558a029c4148?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Comprehensive Orthotic Care",
  },
  {
    src: "https://images.unsplash.com/photo-1706777248191-3e6bec8d2123?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Custom Prosthetic Solutions",
  },
  {
    src: "https://media.istockphoto.com/id/1181502764/photo/handsome-fit-sporty-caucasian-handicapped-young-mn-in-sportswear-and-with-artificial-leg.jpg?s=612x612&w=0&k=20&c=ZraTZmxy0jnfSz2dqjWmTmpKOghgOtKiG8mBWIRODS4=",
    caption: "Expert Rehabilitation Team",
  },
];

export default function CarouselSection() {
  return (
    <div className="w-full h-full md:max-w-3xl mx-auto">
      <Carousel dotPosition="top" autoplay={{ dotDuration: true }} autoplaySpeed={4000}>
        {carouselImages.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center rounded-lg">
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg text-center font-semibold p-2 text-gray-700">{item.caption}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
