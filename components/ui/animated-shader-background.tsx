"use client";

import AnoAIShader from "./animated-shader-background-core";

/**
 * Lightweight CSS gradient background - renders on all devices.
 * Previously used a heavy WebGL shader, now replaced with performant CSS.
 */
const AnoAI = () => {
  return <AnoAIShader />;
};

export default AnoAI;
