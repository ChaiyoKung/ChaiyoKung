"use client";
import BgCircle from "./bg-circle";

export function BgCircleTheme3() {
  return (
    <BgCircle className="bg-theme-3" scale={1.2} position={(size) => ({ top: -(size / 2), right: -(size / 4) })} />
  );
}

export default BgCircleTheme3;
