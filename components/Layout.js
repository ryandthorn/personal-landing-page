const layoutStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "98vw",
  margin: "0 auto",
  height: "90vh"
};

const Layout = props => <div style={layoutStyle}>{props.children}</div>;

export default Layout;
