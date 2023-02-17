import { NavLink } from "react-router-dom";
import { ROUTES_NAMES } from "../constants/routesNames";
import { createUseStyles } from "react-jss";
import cx from "classnames";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "24px 0",
  },
  navLink: {
    margin: "0px 40px",
    color: theme.colors.grey,
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  active: {
    color: theme.colors.activeBrown,
    textDecoration: "underline",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink
        className={({ isActive }) =>
          cx(classes.navLink, isActive && classes.active)
        }
        to={ROUTES_NAMES.home.path}
      >
        {ROUTES_NAMES.home.name}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cx(classes.navLink, isActive && classes.active)
        }
        to={ROUTES_NAMES.ancientWonders.path}
      >
        {ROUTES_NAMES.ancientWonders.name}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cx(classes.navLink, isActive && classes.active)
        }
        to={ROUTES_NAMES.modernWonders.path}
      >
        {ROUTES_NAMES.modernWonders.name}
      </NavLink>
    </div>
  );
};

export default Nav;
