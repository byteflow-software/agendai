import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconStethoscope(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M8.8 11.2a4 4 0 01-4-4V4a.8.8 0 01.8-.8h.8a.8.8 0 000-1.6h-.8A2.4 2.4 0 003.2 4v3.2a5.584 5.584 0 002.416 4.592A7.056 7.056 0 018 16.8a5.6 5.6 0 0011.2 0v-.912a3.2 3.2 0 10-1.6 0v.912a4 4 0 01-8 0 7.057 7.057 0 012.4-5.008A5.585 5.585 0 0014.4 7.2V4A2.4 2.4 0 0012 1.6h-.8a.8.8 0 100 1.6h.8a.8.8 0 01.8.8v3.2a4 4 0 01-4 4zm9.6 3.2a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2z"
        fill={props.color}
      />
    </Svg>
  );
}

export default IconStethoscope;
