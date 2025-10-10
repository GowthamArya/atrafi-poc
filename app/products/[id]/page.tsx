"use client";

import ProductDetail from "../../components/ProductDetail";
import { exampleProducts } from "../productsDummyData";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description?: string;
  type: string;
  sizes: string[];
  price: string;
  image: string;
}

interface PageProps {
  params: { id: string };
}

export default function ProductDetailsPage({ params }: PageProps) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const found = exampleProducts.find((p) => p.id === Number(id));
    if (found) {
      // Add description based on type
      let description = "";
      if (found.type === "Orthotic") {
        description =
          "Orthotic devices are designed to support, align, prevent, or correct deformities or to improve the function of movable parts of the body. Our orthotic products provide customized support to enhance mobility and comfort.";
      } else if (found.type === "Prosthetic") {
        description =
          "Prosthetic devices replace missing body parts to restore function and appearance. Our prosthetic products use advanced materials and technology to offer durability and a natural feel.";
      }

      // Set product with description
      setProduct({ ...found, description });
    } else {
      setProduct(null);
    }
  }, [id]);

  if (product === null) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return <ProductDetail product={product} />;
}
