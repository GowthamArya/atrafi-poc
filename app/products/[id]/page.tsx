"use client"
import { useRouter } from "next/navigation";
import ProductDetail from "../../components/ProductDetail";
import { exampleProducts } from "../productsDummyData";

interface PageProps {
  params: { id: string };
}

export default function ProductDetailsPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = params;

  let product = exampleProducts.find(p => p.id === Number(id));
  if(product){
    if(product.type == "Orthotic"){
      product.description = "Orthotic devices are designed to support, align, prevent, or correct deformities or to improve the function of movable parts of the body. Our orthotic products provide customized support to enhance mobility and comfort.";
    } else if(product.type == "Prosthetic") {
      product.description = "Prosthetic devices replace missing body parts to restore function and appearance. Our prosthetic products use advanced materials and technology to offer durability and a natural feel.";
    }
  }


  if (!product) return <div>Product not found</div>;

  return (
    <ProductDetail
      product={product}
    />
  );
}
