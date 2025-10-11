"use client";
import React from "react";
import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Spin size="large" tip="Loading...">
        <div style={{ minHeight: 40 }} />
      </Spin>
    </div>
  );
}
