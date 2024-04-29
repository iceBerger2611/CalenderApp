"use client";

import { useState } from "react";
import { MainPage } from "./Components/MainPage";

export default function Home() {
  const [showNigga, setShowNigga] = useState(false);

  return <MainPage />;
}
