"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface WishlistCartContextValue {
  wishlist: number[];
  cart: number[];
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const WishlistCartContext = createContext<WishlistCartContextValue | undefined>(undefined);

const LOCAL_STORAGE_WISHLIST_KEY = "atrfi_wishlist";
const LOCAL_STORAGE_CART_KEY = "atrfi_cart";

export const WishlistCartProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [cart, setCart] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToWishlist = (id: number) =>
    setWishlist((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const removeFromWishlist = (id: number) =>
    setWishlist((prev) => prev.filter((item) => item !== id));

  const addToCart = (id: number) =>
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const removeFromCart = (id: number) =>
    setCart((prev) => prev.filter((item) => item !== id));

  return (
    <WishlistCartContext.Provider
      value={{ wishlist, cart, addToWishlist, removeFromWishlist, addToCart, removeFromCart }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};

export const useWishlistCart = () => {
  const context = useContext(WishlistCartContext);
  if (!context) throw new Error("useWishlistCart must be used within WishlistCartProvider");
  return context;
};
