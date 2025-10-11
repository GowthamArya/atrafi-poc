"use client";

import React from "react";
import { Typography, Divider } from "antd";
import { Expertise } from "../components/Expertise";

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 bg-blue-50 rounded-lg shadow-md my-5">
      <Title level={2} className="!text-blue-400 mb-10 text-center font-semibold">
        About Us
      </Title>
      <Divider className="my-16" />

      <Paragraph className="mb-10 text-gray-800 text-lg leading-relaxed text-justify">
        At Atrafi Medical Center, we believe every challenge can be turned into strength.
        Our prosthetics and orthotics empower the differently abled to move stronger,
        live bolder, and feel more alive than ever before. You are not limited. You are unstoppable,
        more energetic, more active, and ready to conquer life with confidence and pride.
      </Paragraph>

      <Divider className="my-16" />
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Title level={4} className="!text-blue-900 mb-3 font-semibold">
            Prof. Khalid Batterjee, MD
            <span className="text-blue-400 px-1">
              Founder
            </span>
          </Title>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Senior Consultant Orthopedic Spine and Trauma Surgeon<br />
            Consultant Orthopedic and Spine Surgery<br />
            M.D. in Orthopedic Surgery, University of Essen, Germany<br />
            Specialized in Orthopedic Spine Surgery, Hip and Knee Arthroplasty,<br />
            Scoliosis, Minimally Invasive Spine Surgery, and Orthopedic Trauma.<br />
            <br />
            <strong>Languages:</strong> Arabic, English, German
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Prof. Batterjee has extensive expertise in the treatment of spine deformities (scoliosis), minimally invasive spine surgery, and complex orthopedic trauma. He has helped a wide range of patients through his holistic and advanced approach to orthopedic care.
          </Paragraph>
        </div>
        <img
          src="/MohamadKhalidBatterjee.png"
          alt="Prof. Khalid Batterjee, MD - Founder"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover max-h-96"
          loading="lazy"
        />
      </section>

      <Divider className="my-16" />

      <Title level={3} className="!text-blue-400 mb-8 text-center font-semibold">
        Leadership & Technical Team
      </Title>

      <div className="text-center mb-10">
          <Title level={4} className="!text-blue-900 mb-3 font-semibold">
            Naif Al Joufi
          </Title>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Managing Director and Co-founder<br />
          </Paragraph>

          <Title level={4} className="!text-blue-900 mb-3 font-semibold mt-6">
            Azizah Al Joufi
          </Title>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Owner & Co-founder<br />
          </Paragraph>

          <Title level={4} className="!text-blue-900 mb-3 font-semibold mt-6">
            Badran Hassan Badran
          </Title>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Chief OPC Specialist & Operation Director
          </Paragraph>

          <Paragraph className="text-gray-700 text-lg leading-relaxed mt-6">
            Our technical team is led by Mr. Badran, co-founder and Senior Technical Specialist. He is of Jordanian nationality, graduated from the German National Training Institute in Jordan in 1990, supervised by GTZ (German Establishment for Technical Coordination), the Royal Jordanian Medical Service, and Jordan’s Ministry of Health.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Mr. Badran’s extensive expertise comes from working and consulting with many Jordanian medical establishments and serving with the International Committee of the Red Cross (ICRC) in Geneva, Switzerland since 1994. He attended advanced courses in plastic prosthesis techniques and specialized in polypropylene prosthesis technology.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            He has served as an expert in Ethiopia, Pakistan, Afghanistan, and Turkmenistan. Mr. Badran’s innovative approach includes recycling plastic waste, and he was appreciated by the ICRC for inventing a hydraulic machine to produce plastic cuffs for crutches.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Joining Saudi German Hospital in 1999 as head of the workshop department, his background and skills have elevated the SGH workshop to international standards, reflecting positively on patient satisfaction and business outcomes.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Mr. Badran specializes in plastic jackets, including Milwaukee corset, shenue jackets, Boston corset, and unique baby TEV splints and various AFO splints. Atrafi is proud to have Mr. Badran continue leading its technical services since its establishment in 2017.
          </Paragraph>
      </div>

      <Divider className="my-16" />

      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/blob-0008.png/:/cr=t:0.53%25,l:0%25,w:100%25,h:98.94%25/rs=w:1200,h:1600,cg:true"
          alt="Dr. Yasser Eid"
          className="w-full md:w-1/2 bg-white rounded-lg shadow-md object-cover max-h-96"
          loading="lazy"
        />
        <div className="md:w-1/2">
          <Title level={4} className="!text-blue-900 mb-3 font-semibold">
            Dr. Yasser Eid, MD, MBA
          </Title>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Co-founder and Director<br />
            Orthopedic Surgeon with an MBA from Leicester University, UK.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            With over 25 years of experience managing private healthcare services in the GCC,
            Dr. Yasser has collaborated with international institutes and experts from Germany,
            UK, France, Austria, Switzerland, and the USA.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Dr. Yasser is an active member of several professional organizations including the
            American Medical Director Association, Egyptian Medical Syndicate, Middle East Spine Group, and others.
          </Paragraph>
        </div>
      </section>
      <Divider className="my-16" />
      <Expertise />
    </div>
  );
}
