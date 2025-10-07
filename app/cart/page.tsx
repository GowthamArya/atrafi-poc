"use client";
import React from "react";
import { Card, Button, Select, Empty, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useWishlistCart } from "../context/WishlistCartContext";
import { exampleProducts } from "../products/productsDummyData";

export default function CartPage() {
  const { cart, removeFromCart } = useWishlistCart();
  const [selectedSizes, setSelectedSizes] = React.useState<Record<number, string>>({});

  const cartItems = exampleProducts.filter((p) => cart.includes(p.id));
  const total = cartItems.reduce((acc, p) => acc + Number((p.price || "0").replace(/\D/g, "")), 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <Empty description="Your cart is empty." />
      ) : (
        <div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {cartItems.map(product => {
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
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => {
                        removeFromCart(product.id);
                        message.info("Removed from cart");
                      }}
                    >
                      Remove
                    </Button>,
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
          <div className="text-right mt-8 text-lg font-bold text-blue-700">
            Total: ₹{total}
          </div>
          <div className="flex justify-end mt-4">
            <Button type="primary" size="large" disabled>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
