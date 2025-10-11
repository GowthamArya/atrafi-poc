"use client"
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

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

    if (typeof window !== "undefined") {
      window.googleTranslateElementInit = () => {
        if (!window.google || !window.google.translate) return;
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
            autoDisplay: false,
            includedLanguages: "en,hi,ar",
          },
          "google_translate_element"
        );
      };
    }

    return () => {
      // Optionally cleanup (comment out to keep alive)
      document.body.removeChild(addScript);
      delete window.googleTranslateElementInit;
    };
  }, []);

  useEffect(() => {
    if(!showWidget) return;
    function onLanguageChange() {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        const selectedLanguage = select.value;
        console.log('User selected language:', selectedLanguage);
        setShowWidget(false);
      }
    }

    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.addEventListener('change', onLanguageChange);
    }

    return () => {
      if (select) {
        select.removeEventListener('change', onLanguageChange);
      }
    };
  }, [showWidget]);

  return (
    <>
      <Button
        icon={<GlobalOutlined />}
        type="primary"
        shape="round"
        className={`notranslate ${!showWidget ? "animate-pulse" : "animate-none"}`}
        onClick={() => setShowWidget(!showWidget)}
        style={{ position: "fixed", right: 24, bottom: 24, zIndex: 10001 }}
      >
        Change Language
      </Button>

      <div
        id="google_translate_element"
        onBlur={()=>setShowWidget(false)}
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
