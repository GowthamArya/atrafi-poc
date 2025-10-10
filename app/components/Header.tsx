"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  MenuOutlined,
  HomeOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Badge, Button, Drawer, Menu, Typography, Spin, Input } from "antd";
import { useWishlistCart } from "../context/WishlistCartContext";
import GoogleTranslateWidget from "../GoogleTranslateWidget";

const { Search } = Input;
const { Title } = Typography;
const NAV_ITEMS = [
  { key: "/", label: "Home", icon: <HomeOutlined /> },
  { key: "/products", label: "Products", icon: <AppstoreOutlined /> },
  { key: "/service", label: "Services", icon: <SettingOutlined /> },
  { key: "/about", label: "About Us", icon: <InfoCircleOutlined /> },
  { key: "/wishlist", label: "Wishlist", icon: <HeartOutlined /> },
  { key: "/cart", label: "Cart", icon: <ShoppingCartOutlined /> },
];

const Header: React.FC = () => {
  const path = usePathname() || "/";
  const router = useRouter();
  const searchParams = useSearchParams();
  const { wishlist, cart } = useWishlistCart();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const goTo = (href: string) => {
    setLoading(true);
    setDrawerVisible(false);
    router.push(href);
    setTimeout(() => setLoading(false), 800);
  };

  const handleSearch = (value: string) => {
    setDrawerVisible(false);
    router.push(`/products?search=${encodeURIComponent(value)}`);
  };

  useEffect(() => {
    const param = searchParams.get("search") ?? "";
    setSearchValue(param);
  }, [searchParams]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/90 flex items-center justify-center">
          <Spin size="large" tip="Loading..." />
        </div>
      )}
      {/* Drawer for mobile menu */}
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
          className="bg-transparent border-none"
          items={NAV_ITEMS.slice(0, 4).map(({ key, label, icon }) => ({
            key,
            label: (
              <span
                role="button"
                tabIndex={0}
                onClick={() => goTo(key)}
                onKeyUp={(e) => { if (e.key === 'Enter') goTo(key); }}
                className="flex items-center gap-2 py-2 px-3 whitespace-nowrap"
              >
                {icon}
                <span>{label}</span>
              </span>
            ),
          }))}
        />
      </Drawer>

      <header className="w-full flex items-center justify-between px-3 md:px-6 py-2 bg-white shadow-sm gap-2">
        {/* Left (mobile: menu icon, desktop: logo) */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Menu Icon (visible only on mobile) */}
          <Button
            className="md:!hidden"
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24 }} />}
            onClick={() => setDrawerVisible(true)}
            aria-label="Open menu"
          />

          {/* Logo always visible, with name hidden on mobile */}
          <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
            <img src="/logo.png" alt="Atrafi logo" className="h-10 md:h-12 w-auto" />
            <Title level={5} className="m-0 md:inline hidden text-primary cursor-pointer whitespace-nowrap">
              Atrafi Medical Center
            </Title>
          </Link>
        </div>

        {/* Center (menu, only desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <Menu
            mode="horizontal"
            selectedKeys={[path]}
            className="bg-transparent border-none"
            items={NAV_ITEMS.slice(0, 4).map(({ key, label, icon }) => ({
              key,
              label: (
                <Link href={key} className="flex items-center gap-2 px-4 py-1 whitespace-nowrap">
                  {icon}
                  <span>{label}</span>
                </Link>
              ),
            }))}
          />
        </div>

        {/* Right (search and icons) - always in one row with logo/menu */}
        <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
          {/* Search: always shown, full-width on mobile, 200px on desktop */}
          <div className="flex-1 md:w-48 min-w-[120px] max-w-[200px]">
            <Search
              placeholder="Search Products..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onSearch={handleSearch}
              allowClear
              size="middle"
              className="w-full"
            />

          </div>
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
          {/* <GoogleTranslateWidget /> */}
        </div>
      </header>
    </>
  );
};

export default Header;