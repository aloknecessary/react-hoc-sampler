// withStyle.js
//Author: Alok Ranjan Daftuar
//
const withStyle = (BaseComponent) => (props) =>
  <BaseComponent {...props} style={{ fontWeight: 700, color: "blue" }} />;

  export default withStyle;