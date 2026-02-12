"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load the shader component - no SSR
const AnoAIShader = dynamic(
  () => import("./animated-shader-background-core"),
  {
    ssr: false,
    loading: () => null,
  }
);

/**
 * Wrapper component that only renders the GPU-heavy shader on desktop screens.
 * Disables on mobile (< 1024px) for battery and performance.
 */
const AnoAI = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render shader on desktop screens
    const checkScreenSize = () => {
      setShouldRender(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return <AnoAIShader />;
};

export default AnoAI;
