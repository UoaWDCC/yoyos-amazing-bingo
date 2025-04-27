import React from "react";

const BlindBall = () => {
  return (
    <>
      <div className="blind-2 pointer-events-none fixed inset-0 z-50 size-full bg-white opacity-0" />
      <div className="blind blind-rad pointer-events-none fixed top-1/2 left-1/2 z-50 aspect-square h-[0dvh] -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
};

export default BlindBall;
