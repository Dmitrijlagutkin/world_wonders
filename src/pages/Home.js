import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  conteiner: {
    maxWidth: theme.container.width,
    ...theme.container.centering,
  },
  title: {
    fontSize: "40px",
    margin: "180px 0 40px 0",
    textTransform: "uppercase",
  },
  description: {
    maxWidth: "700px",
    margin: "0 auto",
    textTransform: "uppercase",
    fontSize: "18px",
    fontWeight: "900",
    textShadow: "2px 2px 5px #fff",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.conteiner}>
        <h1 className={classes.title}>wonders of the world</h1>
        <p className={classes.description}>
          Over the centuries, people have compiled a variety of lists of wonders
          of the worldin order to highlight the most outstanding creations of
          natural perfection from the total number. Most often, such lists were
          limited to seven laureates , following the ancient seven wonders of
          the world , but more extended or narrower lists are also found.
        </p>
      </div>
    </div>
  );
};

export default Home;
