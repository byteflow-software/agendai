import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconHome(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 10a1 1 0 00-2 0h2zM6 10a1 1 0 00-2 0h2zm14.293 2.707a1 1 0 001.414-1.414l-1.414 1.414zM12 3l.707-.707a1 1 0 00-1.414 0L12 3zm-9.707 8.293a1 1 0 101.414 1.414l-1.414-1.414zM7 22h10v-2H7v2zm13-3v-9h-2v9h2zM6 19v-9H4v9h2zm15.707-7.707l-9-9-1.414 1.414 9 9 1.414-1.414zm-10.414-9l-9 9 1.414 1.414 9-9-1.414-1.414zM17 22a3 3 0 003-3h-2a1 1 0 01-1 1v2zM7 20a1 1 0 01-1-1H4a3 3 0 003 3v-2z"
        fill="#3097E1"
      />
    </Svg>
  );
}

export default IconHome;
