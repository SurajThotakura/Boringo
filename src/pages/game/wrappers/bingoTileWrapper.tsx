import { Box, Center, Image, createStyles } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {
  bingoDimension,
  bingoStringAtom,
  bingoWinAtom,
} from "../../../state/jotai";
import { useAtom } from "jotai";
import { validateBingoCard } from "../../../utils/validateBingo";

interface IBingoTileProps {
  tileContent: string;
  index: number;
  columns: number;
}

interface IResizeTextProps {
  element: HTMLElement | null;
  parent: HTMLElement | null;
}

const DEFAULT_TEXT_SIZE = 12;
const MAX_TEXT_SIZE = 56;

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

export const BingoTile = ({ tileContent, index, columns }: IBingoTileProps) => {
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
    return (
      element.scrollWidth > element.clientWidth ||
      element.scrollHeight > element.clientHeight
    );
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
    element.style.fontSize = `${textSize - 8}px`;
  };

  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText({ element: textRef.current, parent: containerRef.current });
  }, [textRef, containerRef]);

  const [isStamped, setIsStamped] = useState<boolean>(false);
  const [stampOffset, setStampOffset] = useState({ x: 0, y: 0 });

  const [bingoString, setBingoString] = useAtom(bingoStringAtom);
  const [_, setBingoWin] = useAtom(bingoWinAtom);

  const handleClick = () => {
    setStampOffset({
      x: Math.floor(Math.random() * 48),
      y: Math.floor(Math.random() * 48),
    });
    const bingoStringChar = isStamped ? "0" : "1";
    setIsStamped((prevState) => !prevState);
    setBingoString(
      bingoString.substring(0, index) +
        bingoStringChar +
        bingoString.substring(index + 1)
    );
  };

  useEffect(() => {
    setBingoWin(validateBingoCard(bingoString, bingoDimension));
  }, [bingoString, bingoDimension]);
  return (
    <Box onClick={handleClick}>
      <Box h={200} w={200} pos="absolute">
        {isStamped && (
          <Image
            src="/assets/StampStar.svg"
            width={160}
            sx={{
              position: "absolute",
              mixBlendMode: "multiply",
              transform: `translate(${stampOffset.x}px, ${stampOffset.y}px) rotate(${stampOffset.x}deg)`,
            }}
          />
        )}
      </Box>
      <Center
        sx={(theme) => ({
          cursor: "pointer",
          width: 200,
          height: 200,
          boxShadow: `inset 0 0 0 3px ${theme.colors.beige[9]}`,
          borderRadius: borderRadius,
          "&:hover > div": { transform: !isStamped ? "scale(1.05)" : "" },
        })}
      >
        <div className={classes.textContainer} ref={containerRef}>
          <span className={classes.content} ref={textRef}>
            {tileContent}
          </span>
        </div>
      </Center>
    </Box>
  );
};
