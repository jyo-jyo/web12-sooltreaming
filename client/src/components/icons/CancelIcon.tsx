import React from 'react';
import type { iconPropsType } from '@components/icons';

const CancelIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: iconPropsType): React.ReactElement => {
  return (
    <svg
      width={width ?? 136}
      height={height ?? 36}
      viewBox="0 0 136 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H128C132.418 0 136 3.58172 136 8V28C136 32.4183 132.418 36 128 36H8C3.58172 36 0 32.4183 0 28V8Z"
        fill={fill ?? '#BED297'}
      />
      <path
        d="M56.9411 18.75C58.4391 18.414 59.4891 17.658 60.0351 16.65C60.5951 17.56 61.6171 18.26 63.0591 18.568L63.6331 17.448C61.8131 17.07 60.7491 16.076 60.7351 14.928H63.3811V13.794H60.7351V12.464H59.2791V13.794H56.6471V14.928H59.2931C59.2791 16.146 58.2011 17.238 56.3531 17.644L56.9411 18.75ZM64.0391 19.086C61.3231 19.464 58.1871 19.492 55.8351 19.492L56.0171 20.682C57.0111 20.682 58.1171 20.668 59.2931 20.626V24.714H60.7351V20.542C61.8551 20.486 63.0171 20.346 64.1231 20.15L64.0391 19.086ZM64.8511 12.436V25.092H66.2931V12.436H64.8511ZM79.676 18.414C77.184 17.994 75.154 16.118 75.154 14.158V13.206H73.628V14.158C73.628 16.104 71.598 17.994 69.092 18.414L69.708 19.618C71.766 19.212 73.558 17.952 74.398 16.272C75.21 17.952 77.002 19.212 79.074 19.618L79.676 18.414ZM75.098 22.32V19.366H73.656V22.32H68.714V23.51H80.166V22.32H75.098Z"
        fill={fill ?? 'white'}
      />
    </svg>
  );
};

export default CancelIcon;
