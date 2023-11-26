import {
  Center,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  createStyles,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";

interface IBingoCardWrapperProps {
  cardColor: string;
  columns: number;
  bingoTiles: Array<string>;
}
interface IBingoTileProps {
  tileContent: string;
  isStamped: boolean;
  index: number;
  columns: number;
}

interface IResizeTextProps {
  element: HTMLElement | null;
  parent: HTMLElement | null;
}

const DEFAULT_TEXT_SIZE = 12;
const MAX_TEXT_SIZE = 64;

const useStyles = createStyles((theme) => ({
  textContainer: {
    width: "100%",
    height: "100%",
    padding: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
    color: theme.colors.beige[9],
    display: "block",
  },
}));

const BingoTile = ({
  tileContent,
  isStamped = false,
  index,
  columns,
}: IBingoTileProps) => {
  const { classes } = useStyles();
  const totalCells = columns * columns;
  const borderRadius: string =
    index === totalCells - columns
      ? "0 0 0 16px"
      : index === totalCells - 1
      ? "0 0 16px 0"
      : "";

  const isOverflown = (element: HTMLElement | null) => {
    if (!element) return false;
    return element.scrollHeight > element.clientHeight;
  };

  const resizeText = ({ element, parent }: IResizeTextProps) => {
    if (element === null || parent === null) return DEFAULT_TEXT_SIZE;
    let textSize = DEFAULT_TEXT_SIZE;
    let overflow = false;
    while (!overflow && textSize < MAX_TEXT_SIZE) {
      element.style.fontSize = `${textSize}px`;
      overflow = isOverflown(parent);
      if (!overflow) textSize++;
    }
    element.style.fontSize = `${textSize - 4}px`;
  };

  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText({ element: textRef.current, parent: containerRef.current });
  }, [textRef, containerRef]);

  return (
    <Center
      sx={(theme) => ({
        cursor: "pointer",
        width: 200,
        height: 200,
        boxShadow: `inset 0 0 0 3px ${theme.colors.beige[9]}`,
        borderRadius: borderRadius,
        "&:hover > div": { transform: "scale(1.05)" },
      })}
    >
      <div className={classes.textContainer} ref={containerRef}>
        <span className={classes.content} ref={textRef}>
          {tileContent}
        </span>
      </div>
    </Center>
  );
};

export const BingoCardWrapper = ({
  cardColor = "bink",
  columns = 3,
  bingoTiles,
}: IBingoCardWrapperProps) => {
  const cardWidth = 200 * columns;
  const cardHeight = 200 * (columns + 1) - 60;
  const [scaleFactor, setScaleFactor] = useState(1);
  useEffect(() => {
    const windoWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const widthScale =
      windoWidth > cardWidth ? 1 : windoWidth / (cardWidth + 80);
    const heightScale =
      windowHeight > cardHeight ? 1 : windowHeight / (cardHeight + 80);
    console.log(heightScale, widthScale);
    setScaleFactor(widthScale > heightScale ? heightScale : widthScale);
  }, []);
  return (
    <Stack
      spacing={0}
      sx={(theme) => ({
        transform: `scale(${scaleFactor})`,
        backgroundColor: theme.colors[cardColor][0],
        boxShadow: `inset 0 0 0 6px ${theme.colors.beige[9]}`,
        borderRadius: 16,
        height: cardHeight,
        width: cardWidth,
      })}
    >
      <Center
        sx={(theme) => ({
          border: `6px solid ${theme.colors.beige[9]}`,
          borderBottom: `3px solid ${theme.colors.beige[9]}`,
          backgroundColor: theme.colors[cardColor][5],
          height: 140,
          borderRadius: "16px 16px 0 0",
        })}
      >
        <Text fw={700} fs="italic" fz={48}>
          Sprint Planning
        </Text>
      </Center>
      <Flex
        sx={{ width: 200 * columns, height: 200 * columns, flexWrap: "wrap" }}
      >
        {bingoTiles.map((tile, index) => (
          <BingoTile
            key={index}
            tileContent={tile}
            isStamped={false}
            index={index}
            columns={columns}
          />
        ))}
      </Flex>
    </Stack>
  );
};
