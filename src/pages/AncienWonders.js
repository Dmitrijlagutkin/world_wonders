import { createUseStyles } from "react-jss";
import Card from "../components/Card";
import KheopsImg from "../assets/images/Kheops-Pyramid.jpg";
import Gardens from "../assets/images/gardens.jpg";
import Zeus from "../assets/images/zeus.jpg";

const useStyles = createUseStyles((theme) => ({
  conteiner: {
    maxWidth: theme.container.width,
    ...theme.container.centering,
  },
  title: {},
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const ancientData = [
  {
    id: "1",
    name: "Pyramid of Cheops",
    bescription:
      "Is the largest of the Egyptian pyramids, a monument of the architectural art of Ancient Egypt",
    image: KheopsImg,
  },
  {
    id: "2",
    name: "Hanging Gardens of Babylon",
    bescription:
      "One of the Seven Wonders of the Ancient World , which was an engineering structure in Babylon with a cascade of multi-level gardens, where numerous species of trees, shrubs and vines grew.",
    image: Gardens,
  },
  {
    id: "3",
    name: "Statue of Zeus at Olympia",
    bescription:
      "Is the only one of the Seven Wonders of the World , which was located in mainland Europe (in the city of Olympia). The statue of Zeus at Olympia  is the third wonder of the ancient world. ",
    image: Zeus,
  },
  {
    id: "3",
    name: "Statue of Zeus at Olympia",
    bescription:
      "Is the only one of the Seven Wonders of the World , which was located in mainland Europe (in the city of Olympia). The statue of Zeus at Olympia  is the third wonder of the ancient world. ",
    image: Zeus,
  },
];

const AncientWondersPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.conteiner}>
      <h1>Seven Wonders of the Ancient World</h1>
      <div className={classes.cardWrapper}>
        {ancientData.map((item) => {
          return <Card key={item?.id} cardData={item} />;
        })}
      </div>
    </div>
  );
};

export default AncientWondersPage;
