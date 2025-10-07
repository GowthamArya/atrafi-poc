"use client";
import React, { useState } from "react";
import { Input, Select, Card, Button, Checkbox, message } from "antd";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined, ShoppingFilled } from "@ant-design/icons";
import { useWishlistCart } from "../context/WishlistCartContext";
import { useRouter } from "next/navigation";
import { exampleProducts } from "./productsDummyData";

const { Search } = Input;


const filterTypes = [
  { label: "Orthotic", value: "Orthotic" },
  { label: "Prosthetic", value: "Prosthetic" },
];

export default function ProductsPage() {
  const router = useRouter();
  const { wishlist, cart, addToWishlist, removeFromWishlist, addToCart, removeFromCart } = useWishlistCart();
  const [search, setSearch] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const filteredProducts = exampleProducts.filter((product) => {
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes((s) => ({ ...s, [productId]: size }));
  };

  return (
    <div className="p-6 w-full md:px-20 bg-blue-50/50 mx-auto">
      <h1 className="text-3xl text-blue-600 font-bold text-center mb-6">Orthotic & Prosthetic Products</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
        <Search
          placeholder="Search Products..."
          value={search}
          onChange={(e) => e.target.value && setSearch(e.target.value)}
          className="md:w-1/3 w-full"
          allowClear
        />
        <Checkbox.Group
          options={filterTypes}
          value={selectedTypes}
          onChange={(vals) => setSelectedTypes(vals as string[])}
        />
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        )}
        {filteredProducts.map((product) => {
          const sizeSelected = selectedSizes[product.id] || product.sizes[0] || "";

          const inWishlist = wishlist.includes(product.id);
          const inCart = cart.includes(product.id);

          return (
            <Card
              key={product.id}
              title={<span className="font-semibold text-lg text-blue-800">{product.name}</span>}
              cover={<img alt={product.name} src={product.image} className="object-cover p-1 overflow-hidden h-62" />}
              actions={[
                <Button
                  key="wishlist"
                  type={inWishlist ? "primary" : "default"}
                  icon={inWishlist ? <HeartFilled /> : <HeartOutlined />}
                  onClick={() => (inWishlist ? router.push("/wishlist") : addToWishlist(product.id))}
                >
                  {inWishlist ? "Wishlisted" : "Wishlist"}
                </Button>,
                <Button
                  key="cart"
                  type={inCart ? "primary" : "default"}
                  icon={inCart ? <ShoppingFilled /> : <ShoppingCartOutlined />}
                  onClick={() => (inCart ? router.push("/cart") : addToCart(product.id))}
                >
                  {inCart ? "In Cart" : "Add to Cart"}
                </Button>,
              ]}
              className="shadow-xl"
            >
              <div>
                <div className="mb-2">
                  <span className="text-gray-600 font-semibold mr-1">Type:</span>
                  {product.type}
                </div>
                <div className="mb-2">
                  <span className="text-gray-600 font-semibold mr-1">Sizes:</span>
                  <Select
                    value={sizeSelected}
                    onChange={(val) => handleSizeSelect(product.id, val)}
                    style={{ minWidth: 100 }}
                  >
                    {product.sizes.map((sz) => (
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
    </div>
  );
}
