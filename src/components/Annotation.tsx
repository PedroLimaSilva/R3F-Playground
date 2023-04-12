import { Html } from '@react-three/drei';
import { HtmlProps } from '@react-three/drei/web/Html';
import * as React from 'react';

export function Annotation(props: HtmlProps) {
  return (
    <Html {...props} transform occlude>
      <div className="annotation">{props.children}</div>
    </Html>
  );
}
