import { Image, createStyles, keyframes } from "@mantine/core";
import { useEffect, useState } from "react";

const cardOutAnimation = keyframes({
  "0%": {
    zIndex: 20,
    transform: "translateX(0px) rotate(-4deg)",
  },
  "50%": {
    transform: "translateX(120%) rotate(-5deg) translateY(-40px)",
  },
  "80%": {
    zIndex: 1,
  },
  "100%": {
    transform: "translateX(50px) rotate(8deg) translateY(-55px) scale(0.95)",
  },
});

const useStyles = createStyles(() => ({
  cards: {
    position: "relative",
    listStyleType: "none",
    padding: 0,
    margin: "0 auto 0",
  },
  card: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    padding: 40,
    transform: "translateY(0) rotate(4deg) translateX(25px) scale(1)",
    transformOrigin: "0px 0px",
    transition:
      "transform 0.6s cubic-bezier(.8,.2,.1,0.8) 0.1s, background 0.4s linear",
    userSelect: "none",

    "&:lastChild": { marginBottom: 0 },
  },
  cardNext: {
    zIndex: 5,
    transform: "translateY(-25px) rotate(4deg) translateX(25px) scale(1)",
  },
  cardOut: {
    animation: `${cardOutAnimation} 0.6s cubic-bezier(.8,.2,.1,0.8)`,
    transform: "translateX(50px) rotate(8deg) translateY(-55px) scale(0.95)",
    zIndex: 1,
  },
  cardCurrent: {
    position: "relative",
    zIndex: 10,
    opacity: 1,
    transform: "rotate(-1deg) translateX(0%) scale(1)",
  },
}));

const cardURLArray = [
  "assets/CardOne.svg",
  "assets/CardTwo.svg",
  "assets/CardThree.svg",
  "assets/CardFour.svg",
];

interface ICardProps {
  cardURL: string;
  index: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Card = ({
  cardURL,
  index,
  currentIndex,
}: ICardProps) => {
  const { classes } = useStyles();
  return (
    <li
      className={`${classes.card}
      ${index === currentIndex ? classes.cardCurrent : ""}
      ${
        index === currentIndex + 1 || (currentIndex === 0 && index === 3)
          ? classes.cardNext
          : ""
      }
      ${index === currentIndex - 1 ? classes.cardOut : ""}`}
    >
      <Image src={cardURL} width={606} height={726} />
    </li>
  );
};

export const CardsAnimation = () => {
  const { classes } = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevState) => (prevState < 3 ? prevState + 1 : 0));
    }, 10000);
    return ()=>clearInterval(interval)
  }, []);
  return (
    <ul className={classes.cards}>
      {cardURLArray.map((cardURL, i) => (
        <Card
          key={i}
          cardURL={cardURL}
          index={i}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ))}
    </ul>
  );
};
