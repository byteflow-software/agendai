import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconArrowSelect(props: any) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 5H3a1.002 1.002 0 00-.823 1.569l9 13c.373.539 1.271.539 1.645 0l9-13A1 1 0 0021 5z"
        fill="#3097E1"
      />
    </Svg>
  );
}

export default IconArrowSelect;
