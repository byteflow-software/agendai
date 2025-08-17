import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconChat(props: any) {
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
        d="M12 3a9 9 0 00-9 9c0 1.624.429 3.145 1.18 4.459a.75.75 0 01.07.577L3.171 20.83l3.796-1.08a.75.75 0 01.577.071A9 9 0 1012 3zM1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5a10.46 10.46 0 01-4.92-1.222l-4.146 1.18a1.125 1.125 0 01-1.389-1.39l1.179-4.146A10.455 10.455 0 011.5 12zm6-2.25A.75.75 0 018.25 9h7.5a.75.75 0 110 1.5h-7.5a.75.75 0 01-.75-.75zm.75 3.75a.75.75 0 100 1.5h4.5a.75.75 0 100-1.5h-4.5z"
        fill="#3097E1"
      />
    </Svg>
  );
}

export default IconChat;
