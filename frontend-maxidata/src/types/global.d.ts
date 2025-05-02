import type React from "react";
declare global {
  namespace JSX {
    interface Element extends React.ReactElement {}
    interface ElementClass extends React.Component {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
