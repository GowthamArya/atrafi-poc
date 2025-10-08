"use client";

import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 bg-blue-50 rounded-lg shadow-md my-5">
      <Title level={2} className="!text-blue-400 mb-10 text-center font-semibold">
        About Us
      </Title>

      <Paragraph className="mb-10 text-gray-800 text-lg leading-relaxed text-justify">
        At Atrafi Medical Center, we believe every challenge can be turned into strength.
        Our prosthetics and orthotics empower the differently abled to move stronger,
        live bolder, and feel more alive than ever before. You are not limited. You are unstoppable,
        more energetic, more active, and ready to conquer life with confidence and pride.
      </Paragraph>

      <Paragraph className="mb-16 text-gray-800 text-lg leading-relaxed text-justify">
                في مركز عطرفي الطبي، نؤمن أن كل تحدٍ يمكن أن يتحول إلى قوة.
        أطرافنا الصناعية وأجهزتنا التقويمية تمنح ذوي الهمم طاقة جديدة ليعيشوا بقوة، ويخطوا بثقة، ويشعروا بالحياة أكثر من أي وقت مضى.
        أنتم لستم محدودين، أنتم أقوياء، مفعمون بالطاقة، ونشطون أكثر من الجميع أنتم قادرون على كسر كل القيود والارتقاء بثقة وفخر
      </Paragraph>

      <hr />

      <section className="flex flex-col justify-start items-center my-16">
        <Title level={4} className="!text-blue-400">
          Founder
        </Title>
        <img
          src="/MohamadKhalidBatterjee.png"
          alt="Mohamad Khalid Batterjee - Manager at Atrafi"
          className="w-full rounded-lg shadow-md object-cover max-h-96"
          loading="lazy"
        />
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <Title level={4} className="!text-blue-900 mb-3 font-semibold">
            Mohamad Khalid A Batterjee (Manager) 
          </Title>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Managing Director and Co-founder<br />
            Owner & Co-founder<br />
            Chief OPC specialist & Operation Director
          </Paragraph>
        </div>
        <img
          src="/mkb.png"
          alt="Mohamad Khalid A Batterjee - Manager"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover max-h-96"
          loading="lazy"
        />
      </section>


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
            UK, France, Austria, Switzerland, and the USA. His leadership has been instrumental in
            elevating Atrafi's performance through technical, scientific, education, and training initiatives.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            Dr. Yasser is an active member of several professional organizations including the
            American Medical Director Association, Egyptian Medical Syndicate, Middle East Spine Group, and others.
          </Paragraph>
        </div>
      </section>
    </div>
  );
}
