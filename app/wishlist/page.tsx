"use client";
import React from "react";
import { Card, Button, Select, Empty, message } from "antd";
import { HeartFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useWishlistCart } from "../context/WishlistCartContext";
import { exampleProducts } from "../products/productsDummyData";

export default function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist, cart } = useWishlistCart();
  const [selectedSizes, setSelectedSizes] = React.useState<Record<number, string>>({});

  const wishlistItems = exampleProducts.filter((p) => wishlist.includes(p.id));

  const handleAddToCart = (id: number) => {
    if (!cart.includes(id)) {
      addToCart(id);
      message.success("Added to cart");
    }
  };

  return (
    <div className="p-6 max-w-4xl min-h-screen mx-auto">
      <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <Empty description="Your wishlist is empty." />
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {wishlistItems.map(product => {
            const sizeSelected = selectedSizes[product.id] || product.sizes[0];
            return (
              <Card
                key={product.id}
                title={
                  <span className="font-semibold text-lg text-blue-800">
                    {product.name}
                  </span>
                }
                cover={
                  <img
                    alt={product.name}
                    src={product.image}
                    className="object-contain h-44"
                  />
                }
                actions={[
                  <Button
                    key="remove"
                    type="default"
                    icon={<HeartFilled style={{ color: "red" }} />}
                    danger
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove
                  </Button>,
                  <Button
                    key="add-cart"
                    type={cart.includes(product.id) ? "primary" : "default"}
                    icon={<ShoppingCartOutlined />}
                    disabled={cart.includes(product.id)}
                    onClick={() => handleAddToCart(product.id)}
                  >
                    {cart.includes(product.id) ? "In Cart" : "Add to Cart"}
                  </Button>
                ]}
                className="shadow"
              >
                <div>
                  <div className="mb-3">
                    <span className="text-gray-600 font-semibold mr-1">Type:</span>
                    {product.type}
                  </div>
                  <div className="mb-3">
                    <span className="text-gray-600 font-semibold mr-1">Sizes:</span>
                    <Select
                      value={sizeSelected}
                      onChange={val => setSelectedSizes(s => ({ ...s, [product.id]: val }))}
                      style={{ minWidth: 100 }}
                    >
                      {product.sizes.map(sz => (
                        <Select.Option value={sz} key={sz}>
                          {sz}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <span className="text-gray-600 font-semibold mr-1">Price:</span>
                    {product.price}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
