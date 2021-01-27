import React from "react";
import styles from "./museumMap.module.css";

const Hotspot = ({
  children,
  id,
  focusedRoom,
  setFocusedRoom,
  onRoomSelect,
}) => (
  <g
    className={styles.hotspot}
    onMouseOut={() => setFocusedRoom(null)}
    onMouseOver={() => setFocusedRoom(id)}
    onClick={() => onRoomSelect(id)}
    style={{ opacity: focusedRoom === id ? 1 : 0 }}
  >
    {children}
  </g>
);

export default function MuseumMap(props) {
  return (
    <svg viewBox="0 0 55 190" width={140} className={styles.museumMap}>
      <g
        id="hotspots"
        transform="translate(17 0)"
        fill="#fff"
        fillOpacity="1"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Hotspot id="A" {...props}>
          <path d="M-16.086 26.324h26.84v33.141h-26.84z" />
        </Hotspot>
        <Hotspot id="B" {...props}>
          <path d="M10.754 26.324h26.84v33.141h-26.84z" />
        </Hotspot>
        <Hotspot id="C" {...props}>
          <path d="M-16.07 59.983h53.882v19.686H-16.07z" />
        </Hotspot>
        <Hotspot id="D" {...props}>
          <path d="M-16.07 79.983h53.882v19.686H-16.07z" />
        </Hotspot>
        <Hotspot id="E" {...props}>
          <path d="M-16.127 99.84h26.84v33.141h-26.84z" />
        </Hotspot>
        <Hotspot id="F" {...props}>
          <path d="M10.713 99.84h26.84v33.141h-26.84z" />
        </Hotspot>
        <Hotspot id="G" {...props}>
          <path d="M-16.07 133.348h53.882v19.686H-16.07z" />
        </Hotspot>
        <Hotspot id="H" {...props}>
          <path d="M-16.07 153.348h53.882v19.686H-16.07z" />
        </Hotspot>

        <Hotspot id="info" {...props}>
          <g transform={`translate(-16 173)`}>
            <rect x={0} y={0} width={53} height={16} fill="rgb(18,72,104)" />
          </g>
        </Hotspot>

        {/* Moved the info bit up here for convenience with the hotspot */}
        <g transform={`translate(-16 173)`} className={styles.drawnBits}>
          <rect
            x={0}
            y={0}
            width={53}
            height={16}
            fill={props.focusedRoom === "info" ? "none" : "#7c7c7c"}
            fillOpacity="0.4"
          />

          <text>
            <tspan
              x="7"
              y="10"
              fill="#fff"
              opacity="0.9"
              fontFamily="'Alegreya Sans SC'"
              fontSize="7.042"
              fontWeight="700"
            >
              Information
            </tspan>
          </text>
        </g>
      </g>

      <g className={styles.drawnBits} transform="translate(-20 -18.432)">
        <g
          strokeLinejoin="round"
          strokeMiterlimit="4"
          paintOrder="markers fill stroke"
        >
          <g
            id="youAreHereIcon"
            strokeWidth="1.043"
            transform="matrix(1.01485 0 0 1.01462 12.6 -61.995)"
          >
            <circle
              id="circle2"
              cx="14.099"
              cy="83.128"
              r="3.338"
              fill="#fff"
              stroke="#a8c25e"
              strokeOpacity="1"
              overflow="visible"
              stopColor="#000"
            />
            <circle
              id="circle4"
              cx="14.099"
              cy="83.128"
              r="1.719"
              fill="#a8c25e"
              stroke="none"
              strokeOpacity="0.469"
              overflow="visible"
              stopColor="#000"
            />
          </g>
          <text
            id="text9"
            style={{
              lineHeight: "125%",
              WebkitTextAlign: "end",
              textAlign: "end",
            }}
            x="67.876"
            y="23.743"
            fill="none"
            stroke="#000"
            strokeOpacity="0.469"
            strokeWidth="1.058"
            fontFamily="'Alegreya Sans SC'"
            fontSize="11.289"
            fontWeight="700"
            overflow="visible"
            stopColor="#000"
            textAnchor="end"
            writingMode="lr-tb"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan7"
              x="67.876"
              y="23.743"
              fill="#000"
              fillOpacity="0.431"
              stroke="none"
              strokeWidth="1.058"
              fontSize="5.644"
            >
              = You are here
            </tspan>
          </text>
        </g>
        <g
          strokeLinejoin="round"
          strokeMiterlimit="4"
          color="#000"
          opacity="0.5"
          paintOrder="markers fill stroke"
        >
          <path
            id="path13"
            fill="#7c7c7c"
            fillOpacity="1"
            stroke="none"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M20.82 44.718v-15.08h53.51v15.08H34.72z"
            overflow="visible"
            stopColor="#000"
          />
          <path
            id="path15"
            fill="none"
            fillOpacity="1"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M30.372 45.096h-9.553V29.165h22.744m10.559 0h20.274v15.931H39.104"
            overflow="visible"
            stopColor="#000"
          />
          <path
            id="path17"
            fill="none"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M47.682 71.592v6.267H20.86V45.03m26.822 0v18.823"
            overflow="visible"
            stopColor="#000"
          />
          <path
            id="path19"
            fill="none"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M47.66 77.859h12.085m8.844 0h5.782V45.03"
            overflow="visible"
            stopColor="#000"
          />
          <g id="g27" fillOpacity="1" transform="translate(-69.82 -59.798)">
            <circle
              id="circle21"
              cx="103.726"
              cy="121.378"
              r="5.717"
              fill="#7c7c7c"
              stroke="none"
              strokeOpacity="1"
              strokeWidth="0.529"
              overflow="visible"
              stopColor="#000"
            />
            <text
              id="text25"
              style={{
                lineHeight: "125%",
                WebkitTextAlign: "end",
                textAlign: "end",
              }}
              x="101.63"
              y="123.659"
              fill="#fff"
              stroke="#000"
              strokeOpacity="0.469"
              strokeWidth="1.058"
              fontFamily="'Alegreya Sans SC'"
              fontSize="14.085"
              fontWeight="700"
              overflow="visible"
              stopColor="#000"
              textAnchor="end"
              transform="scale(1.00012 .99988)"
              writingMode="lr-tb"
              xmlSpace="preserve"
            >
              <tspan
                id="tspan23"
                style={{ WebkitTextAlign: "start", textAlign: "start" }}
                x="101.63"
                y="123.659"
                fill="#fff"
                fillOpacity="1"
                stroke="none"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="7.042"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="700"
                textAnchor="start"
              >
                A
              </tspan>
            </text>
          </g>
          <g id="g35" fillOpacity="1" transform="translate(-45.61 -76.713)">
            <circle
              id="circle29"
              cx="107.298"
              cy="137.82"
              r="5.717"
              fill="#7c7c7c"
              stroke="none"
              strokeOpacity="1"
              strokeWidth="0.529"
              overflow="visible"
              stopColor="#000"
            />
            <text
              id="text33"
              style={{
                lineHeight: "125%",
                WebkitTextAlign: "end",
                textAlign: "end",
              }}
              x="105.201"
              y="140.103"
              fill="#fff"
              stroke="#000"
              strokeOpacity="0.469"
              strokeWidth="1.058"
              fontFamily="'Alegreya Sans SC'"
              fontSize="14.085"
              fontWeight="700"
              overflow="visible"
              stopColor="#000"
              textAnchor="end"
              transform="scale(1.00012 .99988)"
              writingMode="lr-tb"
              xmlSpace="preserve"
            >
              <tspan
                id="tspan31"
                style={{ WebkitTextAlign: "start", textAlign: "start" }}
                x="105.201"
                y="140.103"
                fill="#fff"
                fillOpacity="1"
                stroke="none"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="7.042"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="700"
                textAnchor="start"
              >
                B
              </tspan>
            </text>
          </g>
          <g id="g43" fillOpacity="1" transform="translate(-66.645 -75.144)">
            <circle
              id="circle37"
              cx="113.669"
              cy="163.155"
              r="5.717"
              fill="#7c7c7c"
              stroke="none"
              strokeOpacity="1"
              strokeWidth="0.529"
              overflow="visible"
              stopColor="#000"
            />
            <text
              id="text41"
              style={{
                lineHeight: "125%",
                WebkitTextAlign: "end",
                textAlign: "end",
              }}
              x="111.571"
              y="165.441"
              fill="#fff"
              stroke="#000"
              strokeOpacity="0.469"
              strokeWidth="1.058"
              fontFamily="'Alegreya Sans SC'"
              fontSize="14.085"
              fontWeight="700"
              overflow="visible"
              stopColor="#000"
              textAnchor="end"
              transform="scale(1.00012 .99988)"
              writingMode="lr-tb"
              xmlSpace="preserve"
            >
              <tspan
                id="tspan39"
                style={{ WebkitTextAlign: "start", textAlign: "start" }}
                x="111.571"
                y="165.441"
                fill="#fff"
                fillOpacity="1"
                stroke="none"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="7.042"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="700"
                textAnchor="start"
              >
                C
              </tspan>
            </text>
          </g>
          <g id="g51" fillOpacity="1" transform="translate(-81.462 -75.144)">
            <circle
              id="circle45"
              cx="128.485"
              cy="183.709"
              r="5.717"
              fill="#7c7c7c"
              stroke="none"
              strokeOpacity="1"
              strokeWidth="0.529"
              overflow="visible"
              stopColor="#000"
            />
            <text
              id="text49"
              style={{
                lineHeight: "125%",
                WebkitTextAlign: "end",
                textAlign: "end",
              }}
              x="126.386"
              y="185.998"
              fill="#fff"
              stroke="#000"
              strokeOpacity="0.469"
              strokeWidth="1.058"
              fontFamily="'Alegreya Sans SC'"
              fontSize="14.085"
              fontWeight="700"
              overflow="visible"
              stopColor="#000"
              textAnchor="end"
              transform="scale(1.00012 .99988)"
              writingMode="lr-tb"
              xmlSpace="preserve"
            >
              <tspan
                id="tspan47"
                style={{ WebkitTextAlign: "start", textAlign: "start" }}
                x="126.386"
                y="185.998"
                fill="#fff"
                fillOpacity="1"
                stroke="none"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="7.042"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="700"
                textAnchor="start"
              >
                D
              </tspan>
            </text>
          </g>
          <path
            id="path53"
            fill="none"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M30.401 98.266h-9.54V77.897m53.51 0v20.369h-35.25"
            overflow="visible"
            stopColor="#000"
          />
          <path
            id="path55"
            fill="none"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M64.83 118.563h9.541v-20.37m-53.51 0v20.37H56.11"
            overflow="visible"
            stopColor="#000"
          />
          <path
            id="path57"
            fill="none"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M47.682 145.146v6.267H20.86v-32.828m26.822 0v18.824"
            overflow="visible"
            stopColor="#000"
          />
          <path
            id="path59"
            fill="none"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M47.66 151.413h9.968m6.917 0h9.826v-32.828"
            overflow="visible"
            stopColor="#000"
          />
          <g id="g67" fillOpacity="1" transform="translate(-69.82 -59.798)">
            <circle
              id="circle61"
              cx="103.726"
              cy="195.461"
              r="5.717"
              fill="#7c7c7c"
              stroke="none"
              strokeOpacity="1"
              strokeWidth="0.529"
              overflow="visible"
              stopColor="#000"
            />
            <text
              id="text65"
              style={{
                lineHeight: "125%",
                WebkitTextAlign: "end",
                textAlign: "end",
              }}
              x="101.63"
              y="197.751"
              fill="#fff"
              stroke="#000"
              strokeOpacity="0.469"
              strokeWidth="1.058"
              fontFamily="'Alegreya Sans SC'"
              fontSize="14.085"
              fontWeight="700"
              overflow="visible"
              stopColor="#000"
              textAnchor="end"
              transform="scale(1.00012 .99988)"
              writingMode="lr-tb"
              xmlSpace="preserve"
            >
              <tspan
                id="tspan63"
                style={{ WebkitTextAlign: "start", textAlign: "start" }}
                x="101.63"
                y="197.751"
                fill="#fff"
                fillOpacity="1"
                stroke="none"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="7.042"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="700"
                textAnchor="start"
              >
                E
              </tspan>
            </text>
          </g>
          <g id="g75" fillOpacity="1" transform="translate(-69.82 -59.798)">
            <circle
              id="circle69"
              cx="131.507"
              cy="194.988"
              r="5.717"
              fill="#7c7c7c"
              stroke="none"
              strokeOpacity="1"
              strokeWidth="0.529"
              overflow="visible"
              stopColor="#000"
            />
            <text
              id="text73"
              style={{
                lineHeight: "125%",
                WebkitTextAlign: "end",
                textAlign: "end",
              }}
              x="129.408"
              y="197.279"
              fill="#fff"
              stroke="#000"
              strokeOpacity="0.469"
              strokeWidth="1.058"
              fontFamily="'Alegreya Sans SC'"
              fontSize="14.085"
              fontWeight="700"
              overflow="visible"
              stopColor="#000"
              textAnchor="end"
              transform="scale(1.00012 .99988)"
              writingMode="lr-tb"
              xmlSpace="preserve"
            >
              <tspan
                id="tspan71"
                style={{ WebkitTextAlign: "start", textAlign: "start" }}
                x="129.408"
                y="197.279"
                fill="#fff"
                fillOpacity="1"
                stroke="none"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="7.042"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="700"
                textAnchor="start"
              >
                F
              </tspan>
            </text>
          </g>
          <text
            id="text79"
            style={{
              lineHeight: "125%",
              WebkitTextAlign: "end",
              textAlign: "end",
            }}
            x="62.782"
            y="39.387"
            fill="#fff"
            fillOpacity="0.972"
            stroke="#000"
            strokeOpacity="0.469"
            strokeWidth="1.058"
            fontFamily="'Alegreya Sans SC'"
            fontSize="7.042"
            fontWeight="700"
            overflow="visible"
            stopColor="#000"
            textAnchor="end"
            transform="scale(1.00012 .99988)"
            writingMode="lr-tb"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan77"
              x="63.841"
              y="39.387"
              fill="#fff"
              fillOpacity="0.972"
              stroke="none"
              strokeWidth="1.058"
              fontFamily="'Alegreya Sans SC'"
              fontSize="7.042"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="700"
            >
              Entrance
            </tspan>
          </text>

          <path
            id="path83"
            fill="none"
            fillOpacity="1"
            stroke="#7c7c7c"
            strokeOpacity="1"
            strokeWidth="1.058"
            d="M74.33 191.51v15.932H20.82V191.51"
            overflow="visible"
            stopColor="#000"
          />

          <g id="g99" transform="translate(-.06 .326)">
            <g id="g95" fillOpacity="1" transform="translate(-66.645 -2.119)">
              <circle
                id="circle89"
                cx="113.669"
                cy="163.155"
                r="5.717"
                fill="#7c7c7c"
                stroke="none"
                strokeOpacity="1"
                strokeWidth="0.529"
                overflow="visible"
                stopColor="#000"
              />
              <text
                id="text93"
                style={{
                  lineHeight: "125%",
                  WebkitTextAlign: "end",
                  textAlign: "end",
                }}
                x="111.571"
                y="165.441"
                fill="#fff"
                stroke="#000"
                strokeOpacity="0.469"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="14.085"
                fontWeight="700"
                overflow="visible"
                stopColor="#000"
                textAnchor="end"
                transform="scale(1.00012 .99988)"
                writingMode="lr-tb"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan91"
                  style={{ WebkitTextAlign: "start", textAlign: "start" }}
                  x="111.571"
                  y="165.441"
                  fill="#fff"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="1.058"
                  fontFamily="'Alegreya Sans SC'"
                  fontSize="7.042"
                  fontStretch="normal"
                  fontStyle="normal"
                  fontVariant="normal"
                  fontWeight="700"
                  textAnchor="start"
                >
                  G
                </tspan>
              </text>
            </g>
            <path
              id="path97"
              fill="none"
              stroke="#7c7c7c"
              strokeOpacity="1"
              strokeWidth="1.058"
              d="M30.46 171.29h-9.54v-20.368m53.51 0v20.369H39.182"
              overflow="visible"
              stopColor="#000"
            />
          </g>
          <g id="g948" transform="matrix(-1 0 0 1 95.29 20.326)">
            <g
              id="g944"
              fillOpacity="1"
              transform="matrix(-1 0 0 1 160.693 -2.119)"
            >
              <circle
                id="circle938"
                cx="111.669"
                cy="163.155"
                r="5.717"
                fill="#7c7c7c"
                stroke="none"
                strokeOpacity="1"
                strokeWidth="0.529"
                overflow="visible"
                stopColor="#000"
              />
              <text
                x="109.571"
                y="165.441"
                fill="#fff"
                stroke="#000"
                strokeOpacity="0.469"
                strokeWidth="1.058"
                fontFamily="'Alegreya Sans SC'"
                fontSize="14.085"
                fontWeight="700"
                overflow="visible"
                stopColor="#000"
                textAnchor="end"
                transform="scale(1.00012 .99988)"
                writingMode="lr-tb"
                xmlSpace="preserve"
                style={{
                  lineHeight: "125%",
                  WebkitTextAlign: "end",
                  textAlign: "end",
                }}
                id="text942"
              >
                <tspan
                  x="109.571"
                  y="165.441"
                  fill="#fff"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="1.058"
                  fontFamily="'Alegreya Sans SC'"
                  fontSize="7.042"
                  fontStretch="normal"
                  fontStyle="normal"
                  fontVariant="normal"
                  fontWeight="700"
                  textAnchor="start"
                  style={{ WebkitTextAlign: "start", textAlign: "start" }}
                  id="tspan940"
                >
                  H
                </tspan>
              </text>
            </g>
            <path
              id="path946"
              fill="none"
              stroke="#7c7c7c"
              strokeOpacity="1"
              strokeWidth="1.058"
              d="M30.46 171.29h-9.54v-20.368m53.51 0v20.369H39.182"
              overflow="visible"
              stopColor="#000"
            />
          </g>
        </g>
        <use
          id="use103"
          width="100%"
          height="100%"
          x="0"
          y="0"
          transform="translate(42.576 12)"
          xlinkHref="#youAreHereIcon"
        />
      </g>
    </svg>
  );
}
