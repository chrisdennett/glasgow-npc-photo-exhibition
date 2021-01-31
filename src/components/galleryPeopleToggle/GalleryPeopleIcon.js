import React from "react";

export default function GalleryPeopleIcon({ showBanPeople, width = 35 }) {
  return (
    <svg viewBox="0 0 400 400" width={width} height={width}>
      <circle
        cx="50%"
        cy="50%"
        r="185"
        fill="none"
        stroke={"white"}
        strokeWidth="30"
      />

      <g transform={`translate(10 8)`}>
        <path
          stroke="none"
          fill={"white"}
          d="M189.507 36.816c-15.514 2.015-29.58 20.213-29.58 43.777 0 12.986 4.495 24.47 11.084 32.411l7.86 9.47-12.094 2.273c-8.565 1.61-14.845 6.135-20.213 13.502-5.368 7.368-9.472 17.633-12.348 29.463-5.207 21.432-6.352 47.6-6.534 70.668h28.462l7.815 104.794c19.848 4.48 41.04 4.323 60.155.017l6.914-104.81h27.1c-.018-23.351-.317-49.88-5.035-71.475-2.602-11.907-6.546-22.157-11.978-29.44-5.434-7.284-12.004-11.783-21.62-13.273l-12.344-1.912 7.792-9.762c6.304-7.9 10.578-19.253 10.578-31.924 0-25.123-15.706-43.717-32.798-43.717z"
        />
      </g>

      {showBanPeople && (
        <g transform={`translate(5 5)`}>
          <path
            fill="none"
            stroke={"white"}
            strokeLinecap="round"
            strokeWidth="40"
            d="M71.865 75.114l242.08 242.08"
          />
        </g>
      )}
    </svg>
  );
}
