import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { createUseStyles } from "react-jss";
import homeBG from "../assets/images/piramida.jpg";

const useStyles = createUseStyles((theme) => ({
  root: {
    position: "relative",
    ...theme.container.centering,
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      backgroundImage: `url(${homeBG})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100vw",
      height: "100vh",
      filter:
        "saturate(30%) opacity(35%) contrast(200%) drop-shadow(5px 5px 20px #a0a3a7)",
    },
  },
  main: {
    position: "relative",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: theme.colors.grey,
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <header>
          <Nav />
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        {/* <footer className={classes.footer}>footer</footer> */}
      </div>
    </div>
  );
};

export default Layout;
