"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MenuOutlined,
  HomeOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Badge, Button, Drawer, Menu, Typography, Spin } from "antd";
import { useWishlistCart } from "../context/WishlistCartContext";

const { Title } = Typography;
const NAV_ITEMS = [
  { key: "/", label: "Home", icon: <HomeOutlined /> },
  { key: "/products", label: "Products", icon: <AppstoreOutlined /> },
  { key: "/service", label: "Services", icon: <SettingOutlined /> },
  { key: "/about", label: "About Us", icon: <InfoCircleOutlined /> },
];

const Header: React.FC = () => {
  const path = usePathname() || "/";
  const router = useRouter();
  const { wishlist, cart } = useWishlistCart();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const goTo = (href: string) => {
    setLoading(true);
    setDrawerVisible(false);
    router.push(href);
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/90 flex items-center justify-center">
          <Spin size="large" tip="Loading...">
            <div style={{ minHeight: 32 }} />
          </Spin>
        </div>
      )}

      <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm w-full">
       <Drawer
          title={
            <Link href="/" onClick={() => setDrawerVisible(false)} className="flex items-center space-x-3" aria-label="Homepage">
              <img src="/logo.png" alt="Atrafi logo" className="h-10 w-auto" />
              <Title level={4} className="m-0 text-primary cursor-pointer whitespace-nowrap">Atrafi</Title>
            </Link>
          }
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={260}
        >
          <Menu
            mode="inline"
            selectedKeys={[path]}
            onClick={() => setDrawerVisible(false)}
            className="bg-transparent border-none"
            items={NAV_ITEMS.map(({ key, label, icon }) => ({
              key,
              label: (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => goTo(key)}
                  onKeyUp ={(e) => { if (e.key === 'Enter') goTo(key); }}
                  className="flex items-center gap-2 py-2 px-3 whitespace-nowrap"
                >
                  {icon}
                  <span>{label}</span>
                </span>
              ),
            }))}
          />
          <div className="flex flex-col items-center justify-around mt-6 mx-6">
            <Button type="text" aria-label="Go to Wishlist" onClick={() => goTo("/wishlist")}>
              <Badge count={wishlist.length} size="small" offset={[0, 5]}>
                <HeartOutlined style={{ fontSize: 20, color: "#1890ff" }} />
              </Badge>Go to Wishlist
            </Button>
            <Button type="text" aria-label="Go to Cart" onClick={() => goTo("/cart")}>
              <Badge count={cart.length} size="small" offset={[0, 5]}>
                <ShoppingCartOutlined style={{ fontSize: 20, color: "#1890ff" }} />
              </Badge>Go to Cart
            </Button>
          </div>
        </Drawer>
        <div className="flex items-center">
          <Button
            className="md:!hidden"
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24 }} />}
            onClick={() => setDrawerVisible(true)}
            aria-label="Open menu"
          />
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0" aria-label="Homepage">
            <img src="/logo.png" alt="Atrafi logo" className="h-12 w-auto" />
            <Title level={4} className="m-0 text-primary cursor-pointer whitespace-nowrap">
              Atrafi Medical Center
            </Title>
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 justify-center items-center">
          <Menu
            mode="horizontal"
            selectedKeys={[path]}
            className="bg-transparent border-none"
            items={NAV_ITEMS.map(({ key, label, icon }) => ({
              key,
              label: (
                <Link href={key} className="flex items-center gap-2 px-4 py-1 whitespace-nowrap">
                  {icon}
                  <span>{label}</span>
                </Link>
              ),
            }))}
          />
        </nav>

        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Button type="text" aria-label="Go to Wishlist" onClick={() => goTo("/wishlist")}>
            <Badge count={wishlist.length} size="small" offset={[0, 5]}>
              <HeartOutlined style={{ fontSize: 20, color: "#1890ff" }} />
            </Badge>
          </Button>
          <Button type="text" aria-label="Go to Cart" onClick={() => goTo("/cart")}>
            <Badge count={cart.length} size="small" offset={[0, 5]}>
              <ShoppingCartOutlined style={{ fontSize: 20, color: "#1890ff" }} />
            </Badge>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
