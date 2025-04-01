import React from "react";

const arrowTransforms = {
  down: "none",
  left: "rotate(90deg)",
  right: "rotate(270deg)"
};

export function Arrow({
  dirc = "down",
  style = {},
  onClick = () => {},
  transisitionColor = "white"
}) {
  const circleRef = React.useRef();
  const timeOutRef = React.useRef();
  const maxStroke = 175.92918860102841;

  const onPointerEnter = e => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
      timeOutRef.current = null;
    }
    let prev = +circleRef.current.getAttribute("stroke-dashoffset");
    const decr = () => {
      circleRef.current.setAttribute("stroke-dashoffset", prev);
      if (prev > 0) {
        prev -= 10;
        if (prev < 0) {
          prev = 0;
        }
        timeOutRef.current = setTimeout(decr, 15);
      } else {
        timeOutRef.current = null;
      }
    };
    timeOutRef.current = setTimeout(decr);
  };
  const onPointerLeave = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
      timeOutRef.current = null;
    }
    let prev = +circleRef.current.getAttribute("stroke-dashoffset");
    const incr = () => {
      circleRef.current.setAttribute("stroke-dashoffset", prev);
      if (prev < maxStroke) {
        prev += 10;
        if (prev > maxStroke) {
          prev = maxStroke;
        }
        timeOutRef.current = setTimeout(incr, 15);
      } else {
        timeOutRef.current = null;
      }
    };
    timeOutRef.current = setTimeout(incr);
  };
  React.useEffect(() => {
    return () => {
      clearTimeout(timeOutRef.current);
      timeOutRef.current = null;
    };
  }, []);
  return (
    <div style={{alignItems: "center"}}>
      <div
        onClick={onClick}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1"
        style={{
          position: "relative",
          display: "inline-flex",
          flex: "none",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.25rem",
          width: "3.5rem",
          height: "3.5rem"
        }}
      >
        <div
          className="absolute text-gray-200 dark:text-gray-600"
          style={{position: "absolute", ...style}}
        >
          <svg width="60" height="60">
            <circle
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
            ></circle>
            <circle
              ref={circleRef}
              className="text-primary"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
              style={{
                color: transisitionColor,
                strokeDasharray: "175.929, 175.929",
                transform: "rotate(-90deg)"
              }}
              strokeDashoffset="175.92918860102841"
              transform-origin="30px 30px"
            ></circle>
          </svg>
        </div>
        <span style={{transform: "none"}}>
          <svg
            style={{transform: arrowTransforms[dirc]}}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
