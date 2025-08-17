import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconBackArrow(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 12h14M5 12l6-6m-6 6l6 6"
        stroke="#3097E1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconBackArrow;
