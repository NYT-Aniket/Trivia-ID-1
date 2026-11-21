import type { ReactNode } from "react";
import { Bubble, type BubbleOptions } from "@/components/canvasui/Bubble";

type DemoProps = {
  children: ReactNode;
  showControls?: boolean;
};

const SOAP_PRESET = {
  size: 44,
  iridescence: 2,
  dispersion: 2,
  intensity: 1.4,
} satisfies BubbleOptions;

export function BubbleDemo({ children }: DemoProps) {
  return (
    <Bubble
      {...SOAP_PRESET}
      style={{ position: "fixed", inset: 0, zIndex: 30 }}
    >
      {children}
    </Bubble>
  );
}
