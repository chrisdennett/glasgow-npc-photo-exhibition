import React from "react";

export const Ribbon = ({ height = 18 }) => {
  const halfHeight = height / 2;

  return (
    <svg
      style={{
        marginTop: -height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
      height={height}
      width="100%"
    >
      <defs>
        <pattern
          id="Pattern"
          x="0"
          y="0"
          width={height}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <circle
            fill="rgba(0, 0, 0, 0.7)"
            cx={halfHeight}
            cy={height}
            r={halfHeight}
          ></circle>
        </pattern>
      </defs>

      <rect x={0} y={0} width={"100%"} height={height} fill="url(#Pattern)" />
    </svg>
  );
};
