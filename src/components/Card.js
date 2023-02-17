import { createUseStyles } from "react-jss";
import cx from "classnames";

const useStyles = createUseStyles((theme) => ({
  root: {
    height: "180px",
    width: "300px",
    backgroundColor: theme.colors.white,
    borderRadius: "10px",
    padding: "10px",
    textAlign: "start",
    boxShadow: "-1px 10px 31px -5px rgba(102,102,102,1)",
    margin: "15px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "50px",
    width: "50px",
    borderRadius: "5px",
  },
  title: {},
}));

const Card = ({ cardData }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img className={classes.img} src={cardData?.image} />
        <span>{cardData?.name}</span>
      </div>
      <div>{cardData?.bescription}</div>
    </div>
  );
};

export default Card;
