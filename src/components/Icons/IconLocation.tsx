import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconLocation(props: any) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.894 17.394l-5.302 5.304a2.25 2.25 0 01-3.184 0l-5.302-5.304a9.75 9.75 0 1113.788 0zm-1.59-12.198A7.5 7.5 0 106.696 15.804L12 21.105l5.304-5.301a7.5 7.5 0 000-10.608zM12 13.5a3 3 0 11-.136-6 3 3 0 01.136 6z"
        fill="#999"
      />
    </Svg>
  );
}

export default IconLocation;
