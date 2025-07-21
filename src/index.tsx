import React from "react";

const OffscreenType = Symbol.for('react.offscreen');

export function Freeze({ freeze, children }) {
  return React.createElement(
    OffscreenType,
    { mode: freeze ? 'unstable-defer-without-hiding' : 'visible' },
    children,
  );
}
