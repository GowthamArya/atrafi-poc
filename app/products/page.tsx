"use client";
import React, { useState } from "react";
import { Input, Select, Card, Button, Space } from "antd";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined, ShoppingFilled, FilterOutlined } from "@ant-design/icons";
import { useWishlistCart } from "../context/WishlistCartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { exampleProducts } from "./productsDummyData";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { Pagination } from "antd";



const { Search } = Input;

const filterTypes = [
    { label: "All", value: "all" },
    { label: "Orthotic", value: "Orthotic" },
    { label: "Prosthetic", value: "Prosthetic" },
];

export default function ProductsPage() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() ?? "";
    const router = useRouter();
    const { wishlist, cart, addToWishlist, addToCart } = useWishlistCart();
    const [selectedTypes, setSelectedTypes] = useState<string[]>(["all"]);
    const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});


    
    const filteredProducts = exampleProducts.filter((product) => {
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type) || selectedTypes.includes("all");
        const searchMatch = product.name.toLowerCase().includes(searchQuery)
        return matchesType && searchMatch;
    });

    const handleSizeSelect = (productId: number, size: string) => {
        setSelectedSizes((s) => ({ ...s, [productId]: size }));
    };

    // Inside ProductsPage component:

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Compute paginated data:
    const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    );

    // Handle page change event:
    const onPageChange = (page: number) => {
    setCurrentPage(page);
    };
    
    return (
        <div className="p-6 w-full md:px-20 bg-blue-50/50 mx-auto">
            <span className="flex items-center justify-between gap-2 pb-5 font-semibold text-blue-400">
                <h1 className="text-xl text-blue-400 font-bold">Products</h1>
                <div>
                    <FaFilter className="text-blue-400 mb-1 mx-1 inline" />
                    <span className="mr-1">Filters:</span>
                    <Space>
                        <Select
                            value={selectedTypes}
                            onChange={(vals) => setSelectedTypes(vals as string[])}
                            style={{ minWidth: 100 }}
                        >
                            {filterTypes.map((ft) => (
                                <Select.Option value={ft.value} key={ft.value}>
                                    {ft.label}
                                </Select.Option>
                            ))}
                        </Select>
                    </Space>
                </div>
            </span>
            <div className="flex justify-center mb-6">
                <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={filteredProducts.length}
                    onChange={onPageChange}
                    showSizeChanger={false}
                />
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {paginatedProducts.length === 0 && (
                    <div className="col-span-full flex flex-col gap-4 items-center justify-center min-h-[60vh] text-gray-500">
                        No products found.
                        <Link href={"/products"}><Button type="dashed">Clear Filter</Button></Link>
                    </div>
                )}
                {paginatedProducts.map((product) => {
                    const sizeSelected = selectedSizes[product.id] || product.sizes[0] || "";
                    const inWishlist = wishlist.includes(product.id);
                    const inCart = cart.includes(product.id);

                    return (
                        <Link key={product.id} href={`/products/${product.id}`}>
                        <Card
                        key={product.id}
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
                        className="shadow-xl !p-0"
                        >
                        <img alt={product.name} src={product.image} className="object-cover p-0 m-0 overflow-hidden h-62 w-full rounded" />
                        <h3 className="text-blue-400 font-semibold text-lg mt-3 mb-4 text-center">{product.name}</h3>
                        <div>
                            <div className="mb-2">
                                <span className="text-gray-600 font-semibold mr-1"><strong>Type: </strong></span>
                                {product.type}
                            </div>
                            <div className="mb-2">
                                <span className="text-gray-600 font-semibold mr-1"><strong>Sizes:</strong></span>
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
                            <span className="text-gray-600 font-semibold mr-1"><strong>Price:</strong></span>
                            {product.price}
                            </div>
                        </div>
                        </Card>
                        </Link>
                    );
                })}
            </div>
            <div className="flex justify-center mt-6">
                <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={filteredProducts.length}
                    onChange={onPageChange}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
}
