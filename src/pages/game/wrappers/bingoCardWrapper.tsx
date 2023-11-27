import {
  Center,
  Flex,
  Stack,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { BingoTile } from "./bingoTileWrapper";
import { bingoDimension } from "../../../state/jotai";

interface IBingoCardWrapperProps {
  cardColor: string;
  bingoTiles: Array<string>;
  bingoTitle: string;
}

export const BingoCardWrapper = ({
  cardColor = "bink",
  bingoTiles,
  bingoTitle,
}: IBingoCardWrapperProps) => {
  const columns = bingoDimension
  const cardWidth = 200 * columns;
  const cardHeight = 200 * (columns + 1) - 60;
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const widthScale =
      windowWidth > cardWidth ? 1 : windowWidth / (cardWidth + 80);
    const heightScale =
      windowHeight > cardHeight ? 1 : windowHeight / (cardHeight + 80);
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
          {bingoTitle}
        </Text>
      </Center>
      <Flex
        sx={{ width: 200 * columns, height: 200 * columns, flexWrap: "wrap" }}
      >
        {bingoTiles.map((tile, index) => (
          <BingoTile
            key={index}
            tileContent={tile}
            index={index}
            columns={columns}
          />
        ))}
      </Flex>
    </Stack>
  );
};
