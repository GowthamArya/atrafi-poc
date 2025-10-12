"use client";

import React from "react";
import { Typography, Card, Row, Col, List, Divider, Image } from "antd";
import { exampleProducts } from "../products/productsDummyData";

const { Title, Paragraph, Text } = Typography;

const serviceData = [
  {
    title: "Pre-surgical Consultation & Clinical Evaluation",
    description:
      "Comprehensive consultations and clinical evaluations to assess patient needs and prepare for optimal orthotic or prosthetic solutions.",
    features: ["Pre-surgical Consultation", "Clinical Evaluation", "Patient Measuring & Casting"],
    relatedTypes: ["Orthotic", "Prosthetic"],
  },
  {
    title: "Custom Orthotic Fabrication & Solutions",
    description:
      "State-of-the-art custom orthotic fabrication and design services tailored to meet specific patient requirements.",
    features: [
      "Custom Orthotic Fabrication",
      "Custom Designed Orthotic Solutions to Meet Specific Patient Requirements",
      "Digital Scanning / Computer Aided Design Services",
      "Custom Orthotic Fit and Finishing",
      "Device Refinement & Adjustments",
      "Device Wear & Care Protocols",
    ],
    relatedTypes: ["Orthotic"],
  },
  {
    title: "Spinal Orthoses",
    description:
      "Support and stabilization solutions for the spine from the cervical to lumbar regions, used postoperatively or for chronic conditions and injuries.",
    features: [
      "Support from neck (cervical spine) to lower back (lumbar spine)",
      "Postoperative alignment and healing promotion",
      "Treatment for chronic diseases like stenosis",
      "Injury stabilization such as spinal trauma",
    ],
    relatedTypes: ["Orthotic"],
  },
  {
    title: "Orthotic & Prosthetic Centers' Commitment",
    description:
      "Dedicated to improving patients' lives using advanced prosthetics and a team approach for optimal rehabilitation outcomes.",
    features: [
      "Collaboration between physician, prosthetist, and therapist",
      "Upper Extremity Prosthetics with diagnosis-specific innovation",
      "Lower Extremity Prosthetics using latest lightweight materials",
      "Focus on practical, comfortable, and aesthetic prosthetic devices",
    ],
    relatedTypes: ["Orthotic", "Prosthetic"],
  },
  {
    title: "Pediatric Orthotic & Prosthetic Care",
    description:
      "Specialized pediatric teams offering advanced care, including mobility solutions and custom devices for various conditions.",
    features: [
      "Treatment for infants to young adults",
      "Solutions addressing head, neck, back, lower and upper limbs",
      "Custom solutions for plagiocephaly, scoliosis, cerebral palsy",
      "Continuous training and latest technology use by clinical leaders",
    ],
    relatedTypes: ["Orthotic", "Prosthetic"],
  },
];

export default function ServicePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "auto", padding: "2rem 1rem", backgroundColor: "#f0f5f9" }}>
      <Typography>
        <Title level={2} style={{ textAlign: "center", color: "#2952a3" }}>
          Our Services
        </Title>
        <Paragraph style={{ maxWidth: 800, margin: "0 auto 2rem", fontSize: 16, lineHeight: 1.6 }}>
          At the Orthotic & Prosthetic Centers, we are committed to providing state-of-the-art services that improve the quality of life for our patients. Our experienced team offers tailored solutions through consultation, fabrication, pediatric care, spinal support, and advanced prosthetic technologies.
        </Paragraph>

        <Row gutter={[24, 24]}>
          {serviceData.map(({ title, description, features, relatedTypes }) => {
            // Filter related products by type
            const relatedProducts = exampleProducts.filter((p) => relatedTypes.includes(p.type)).slice(0, 3);

            return (
              <Col xs={24} md={12} key={title}>
                <Card hoverable style={{ borderRadius: 8, boxShadow: "0 3px 8px rgba(0,0,0,0.12)" }}>
                  <Title level={4} style={{ color: "#2a58a1" }}>
                    {title}
                  </Title>
                  <Paragraph style={{ minHeight: 70, fontSize: 14 }}>{description}</Paragraph>
                  <Divider />
                  <List
                    dataSource={features}
                    renderItem={(item) => (
                      <List.Item>
                        <Text > {">"} {item}</Text>
                      </List.Item>
                    )}
                    split={true}
                    size="small"
                  />
                  <Row gutter={[8, 8]} style={{ marginTop: 12 }}>
                    {relatedProducts.map((product) => (
                      <Col key={product.id} span={8}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          style={{ borderRadius: 6, height: 100, objectFit: "cover", width: "100%" }}
                          preview={{ mask: <span>{product.name}</span> }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Divider />

        <Paragraph
          style={{
            maxWidth: 700,
            margin: "2rem auto 0",
            textAlign: "center",
            fontSize: 14,
            color: "rgba(0,0,0,0.65)",
          }}
        >
          We continuously update our technologies and training to offer the best patient-centered care. Contact us to learn how we can help you with orthotic or prosthetic solutions tailored to your needs.
        </Paragraph>
      </Typography>

      <Divider />

      <PhotoGallery />
    </div>
  );
}

export function PhotoGallery() {
  const images = exampleProducts.map((e) => e.image);

  return (
    <Image.PreviewGroup>
      <Row gutter={[16, 16]}>
        {images.map((src, index) => (
          <Col xs={12} sm={8} md={6} lg={4} key={index}>
            <Image
              src={src}
              alt={`Photo ${index + 1}`}
              preview={{ mask: <span>View</span> }} // Shows viewer on hover
              style={{ cursor: "pointer", borderRadius: 8 }}
            />
          </Col>
        ))}
      </Row>
    </Image.PreviewGroup>
  );
}
