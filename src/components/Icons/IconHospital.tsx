import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconHospital(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M22 22H2"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16m14 0V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 00-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 01.552-.552C4.393 5 5.096 5 6.5 5"
        stroke={props.color}
        strokeWidth={1.5}
      />
      <Path
        d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M12 9V5m2 2h-4"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconHospital;
