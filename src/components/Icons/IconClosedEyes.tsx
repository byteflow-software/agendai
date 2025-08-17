import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconClosedEyes(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0H24V24H0z" />
      <Path
        d="M12 6.5a9.77 9.77 0 018.82 5.5A9.76 9.76 0 0112 17.5 9.76 9.76 0 013.18 12 9.77 9.77 0 0112 6.5zm0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"
        fill="#C1C1C1"
      />
    </Svg>
  );
}

export default IconClosedEyes;
