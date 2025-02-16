"use client";
import BgCircle from "./bg-circle";

export function BgCircleTheme2() {
  return (
    <BgCircle className="bg-theme-2" scale={2} position={(size) => ({ bottom: -(size / 1.5), left: -(size / 3) })} />
  );
}

export default BgCircleTheme2;
