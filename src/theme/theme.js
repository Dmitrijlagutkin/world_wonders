const container = {
  width: "90%",
  height: "100vh",
  centering: {
    textAlign: "center",
    margin: "0 auto",
  },
};

const colors = {
  activeBrown: "#ff1010",
  grey: "rgb(36, 41, 46)",
  white: "#fff",
};

const getAppTheme = () => {
  return {
    container,
    colors,
  };
};

export default getAppTheme;
