import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function IconClock(props: any) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_31_22)" fill="#999">
        <Path d="M12 5.25a.75.75 0 10-1.5 0v8.25a.75.75 0 00.378.651l5.25 3a.75.75 0 00.744-1.302L12 13.065V5.25z" />
        <Path d="M12 24a12 12 0 100-24 12 12 0 000 24zm10.5-12a10.5 10.5 0 11-21 0 10.5 10.5 0 0121 0z" />
      </G>
      <Defs>
        <ClipPath id="clip0_31_22">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default IconClock;
