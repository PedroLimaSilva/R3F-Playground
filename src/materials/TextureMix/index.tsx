export const DefaultVertex = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const TextureMixFragment = `
uniform float mixWeight;
uniform sampler2D textureA;
uniform sampler2D textureB;

varying vec2 vUv;

void main() {
  vec4 aColor = texture2D(textureA, vUv);
  vec4 bColor = texture2D(textureB, vUv);

  gl_FragColor.rgba = mix(aColor, bColor, mixWeight);
}
`

