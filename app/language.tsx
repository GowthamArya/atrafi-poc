"use client";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

// Extend the Window interface to add Google Translate typings
declare global {
  interface Window {
    google?: {
      translate: {
        GoogleTranslateElement: new (
          options: {
            pageLanguage: string;
            layout: number;
            autoDisplay: boolean;
            includedLanguages: string;
          },
          elementId: string
        ) => void;
        GoogleTranslateInlineLayout: {
          VERTICAL: number;
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}


export default function GoogleTranslateFloatButton() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.id = "googleTranslateScript";
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;

    if (!document.getElementById("googleTranslateScript")) {
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      if (window.google) {
        new window.google.translate.GoogleTranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.GoogleTranslateInlineLayout.VERTICAL,
            autoDisplay: false,
            includedLanguages: "en,hi,ar",
          },
          "google_translate_element"
        );
      }
    };

    return () => {
      const script = document.getElementById("googleTranslateScript");
      if (script) document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <Button
        icon={<GlobalOutlined />}
        type="primary"
        shape="round"
        className={`notranslate animate-pulse ${showWidget ? "animate-pulse" : ""}`}
        onClick={() => setShowWidget(!showWidget)}
        style={{ position: "fixed", right: 24, bottom: 24, zIndex: 10001 }}
      >
        Change Language
      </Button>

      <div
        id="google_translate_element"
        style={{
          display: showWidget ? "block" : "none",
          position: "fixed",
          bottom: 80,
          right: 24,
          zIndex: 10000,
          background: "#000",
          padding: 8,
          borderRadius: 4,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      ></div>
    </>
  );
}
