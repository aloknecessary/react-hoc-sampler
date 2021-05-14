// SayHelloComponent.js
//Author: Alok Ranjan Daftuar
//
const SayHelloComponent = ({ name, ...otherProps }) => (
  <div {...otherProps}>Hello {name}!</div>
);

export default SayHelloComponent;
