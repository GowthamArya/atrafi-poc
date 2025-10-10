"use client";

import React, { useState } from "react";
import { Select, Button, Typography } from "antd";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined, ShoppingFilled } from "@ant-design/icons";
import { useWishlistCart } from "../context/WishlistCartContext";
import { useRouter } from "next/navigation";

const { Title, Paragraph } = Typography;

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    description?: string;
    type: string;
    sizes: string[];
    price: string;
    image: string;
  };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { wishlist, cart, addToWishlist, addToCart } = useWishlistCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");

  const inWishlist = wishlist.includes(product.id);
  const inCart = cart.includes(product.id);

  return (
    <div className="max-w-6xl my-4 mx-auto p-6 md:p-12 bg-blue-50/50 rounded shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 w-auto rounded bg-white shadow-md object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 flex flex-col justify-start gap-6">
          <Title level={3} className="text-blue-700">{product.name}</Title>

          {product.description && (
            <Paragraph className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </Paragraph>
          )}

          <div>
            <strong className="text-gray-600 mr-2">Type:</strong> {product.type}
          </div>

          <div>
            <strong className="text-gray-600 mr-2">Sizes:</strong>
            <Select
              value={selectedSize}
              onChange={(val) => setSelectedSize(val)}
              style={{ minWidth: 120 }}
            >
              {product.sizes.map((sz) => (
                <Select.Option value={sz} key={sz}>{sz}</Select.Option>
              ))}
            </Select>
          </div>

          <div>
            <strong className="text-gray-600 mr-2">Price:</strong>
            <span className="text-xl font-semibold">{product.price}</span>
          </div>

          <div className="flex gap-4 mt-4">
            <Button
              type={inWishlist ? "primary" : "default"}
              icon={inWishlist ? <HeartFilled /> : <HeartOutlined />}
              onClick={() => {
                if (inWishlist) {
                  router.push("/wishlist");
                } else {
                  addToWishlist(product.id);
                }
              }}
            >
              {inWishlist ? "Wishlisted" : "Add to Wishlist"}
            </Button>

            <Button
              type={inCart ? "primary" : "default"}
              icon={inCart ? <ShoppingFilled /> : <ShoppingCartOutlined />}
              onClick={() => {
                if (inCart) {
                  router.push("/cart");
                } else {
                  addToCart(product.id);
                }
              }}
            >
              {inCart ? "In Cart" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
