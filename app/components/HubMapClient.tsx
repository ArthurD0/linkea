"use client";

import dynamic from "next/dynamic";

const HubMap = dynamic(() => import("./HubMap"), { ssr: false });

export default function HubMapClient() {
  return <HubMap />;
}
