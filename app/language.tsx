"use client"
import React, { useEffect, useState } from "react";
import { Button, FloatButton, Tooltip } from "antd";
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

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.VERTICAL,
          autoDisplay: false,
          includedLanguages:"en,hi,ar"
        },
        "google_translate_element"
      );
    };

    return () => {
      // Optionally cleanup (comment out to keep alive)
      document.body.removeChild(addScript);
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  return (
    <>
        <Button
            icon={<GlobalOutlined />}
            type="primary"
            shape="round"
            className="notranslate"
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
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}
        ></div>
    </>
  );
}
