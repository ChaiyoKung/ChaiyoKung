"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx/lite";
import { ComponentProps } from "react";

export interface BgCircleProps {
  className?: ComponentProps<"div">["className"];
  scale?: number;
  position?: (size: number) => { top?: number; right?: number; bottom?: number; left?: number };
}

export function BgCircle({ className, scale, position }: BgCircleProps) {
  const windowSize = useWindowSize();
  const minWindowSize = Math.min(windowSize.width ?? 0, windowSize.height ?? 0);
  const size = minWindowSize * (scale ?? 1);
  const radius = size / 2;
  const pos = position?.(size) ?? {};

  return (
    <div
      className={clsx("absolute", className)}
      style={{ width: size, height: size, borderRadius: radius, ...pos }}
    ></div>
  );
}

export default BgCircle;
