"use client";
import BgCircle from "./bg-circle";

export function BgCircleTheme4() {
  return (
    <BgCircle
      className="bg-theme-4"
      scale={1.5}
      position={(size) => ({ bottom: -(size / 1.8), right: -(size / 2.5) })}
    />
  );
}

export default BgCircleTheme4;
