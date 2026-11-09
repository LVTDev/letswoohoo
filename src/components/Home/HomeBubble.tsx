
import React, { useEffect, useId, useRef } from "react";
 
// Same command structure in every shape so the browser can interpolate between them.
const SHAPES = [
  "M190 20 C250 20 290 70 285 140 C280 220 240 300 170 360 C110 400 40 380 30 320 C20 260 80 200 100 140 C115 90 140 20 190 20 Z",
  "M170 30 C235 10 290 80 280 150 C270 230 250 310 180 370 C120 395 30 365 40 300 C50 240 70 210 90 150 C105 100 120 45 170 30 Z",
  "M200 40 C255 40 285 100 270 170 C258 240 225 320 160 372 C100 405 25 385 35 330 C45 270 95 215 110 150 C122 100 150 38 200 40 Z",
  "M180 15 C245 30 295 90 278 160 C262 235 235 305 175 365 C115 405 35 372 32 312 C30 255 85 205 98 145 C108 95 135 8 180 15 Z",
];
const D = [...SHAPES, SHAPES[0]].join(";");
const SPLINES = Array(SHAPES.length).fill("0.45 0 0.55 1").join(";");
const TIMES = Array.from({ length: SHAPES.length + 1 }, (_, i) => (i / SHAPES.length).toFixed(3)).join(";");
 
/**
 * <AbstractBubble size={340} top="#e85aa8" bottom="#f5a623" />
 * Props: size (px width), top / bottom (gradient colors), glow (center highlight), duration (s)
 */
export default function HomeBubble({
  size = 340,
  top = "#e85aa8",
  bottom = "#f5a623",
  glow = "#ffffff",
  duration = 12,
  className = "",
  style = {},
}) {
  const uid = useId().replace(/:/g, "");
  const ref = useRef(null);
  const id = (n:string) => `${n}-${uid}`;
 
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      //@ts-expect-error not needed to esc error
      ref.current?.pauseAnimations?.();
    }
  }, []);
 
  const morph = (
    <animate attributeName="d" dur={`${duration}s`} repeatCount="indefinite"
      calcMode="spline" keyTimes={TIMES} keySplines={SPLINES} values={D} />
  );
 
  return (
    <svg ref={ref} viewBox="-20 -20 340 440" width={size} className={className}
      style={{ overflow: "visible", ...style }} role="img" aria-label="Animated abstract bubble">
      <defs>
        <linearGradient id={id("body")} x1="0.7" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="0.45" stopColor="#d8a0c0" />
          <stop offset="1" stopColor={bottom} />
          <animateTransform attributeName="gradientTransform" type="rotate"
            values="0 .5 .5;18 .5 .5;-12 .5 .5;0 .5 .5" dur={`${duration * 1.5}s`} repeatCount="indefinite" />
        </linearGradient>
        <radialGradient id={id("core")}>
          <stop offset="0" stopColor={glow} stopOpacity="1" />
          <stop offset="0.55" stopColor={glow} stopOpacity="0.85" />
          <stop offset="1" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <filter id={id("blur8")} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id={id("blur3")} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" /></filter>
        <path id={id("shape")} d={SHAPES[0]}>{morph}</path>
        <clipPath id={id("clip")}><use href={`#${id("shape")}`} /></clipPath>
      </defs>
 
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0 0;0 -12;0 0" dur="7s" repeatCount="indefinite"
          calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
 
        {/* soft drop shadow */}
        <use href={`#${id("shape")}`} fill={bottom} opacity="0.25" filter={`url(#${id("blur8")})`} transform="translate(0 16)" />
 
        {/* body */}
        <use href={`#${id("shape")}`} fill={`url(#${id("body")})`} />
 
        <g clipPath={`url(#${id("clip")})`}>
          {/* drifting white core */}
          <ellipse cx="150" cy="190" rx="105" ry="140" fill={`url(#${id("core")})`}>
            <animate attributeName="cx" values="150;165;140;150" dur={`${duration * 0.8}s`} repeatCount="indefinite" />
            <animate attributeName="cy" values="190;170;205;190" dur={`${duration * 0.9}s`} repeatCount="indefinite" />
            <animate attributeName="rx" values="105;95;112;105" dur={`${duration * 0.7}s`} repeatCount="indefinite" />
          </ellipse>
 
          {/* glossy rim: dark edge bottom-right, light edge top-left */}
          <use href={`#${id("shape")}`} fill="none" stroke="#7a3a10" strokeOpacity="0.45" strokeWidth="16" filter={`url(#${id("blur3")})`} />
          <use href={`#${id("shape")}`} fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="5"
            filter={`url(#${id("blur3")})`} transform="translate(-4 -4)" />
 
          {/* specular streaks */}
          <ellipse cx="85" cy="150" rx="10" ry="60" fill="#fff" opacity="0.6" filter={`url(#${id("blur3")})`}
            transform="rotate(18 85 150)">
            <animate attributeName="opacity" values="0.35;0.75;0.35" dur="5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="90" cy="330" rx="40" ry="8" fill="#fff" opacity="0.45" filter={`url(#${id("blur3")})`}
            transform="rotate(-20 90 330)" />
        </g>
      </g>
    </svg>
  );
}
 

