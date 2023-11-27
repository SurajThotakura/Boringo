import { Button, Center, Group, Stack, Text } from "@mantine/core";
import { BingoCardWrapper } from "./wrappers/bingoCardWrapper";
import { useState } from "react";
import { useAtom } from "jotai";
import { bingoDimensionAtom, bingoStringAtom, bingoWinAtom } from "../../state/jotai";

const BingoTilesArray = [
  "Spill Over",
  "Let’s park it",
  "Let me share my screen",
  "Take this offline",
  "Stretch ourselves",
  "Blocker!",
  "I’m happy to help",
  "Can someone else take this up?",
  "I don’t have the Bandwidth",
];

export const Game = () => {
  const [color, setColor] = useState("bilac");

  const [bingoDimension, setBingoDimension] = useAtom(bingoDimensionAtom);
  setBingoDimension(Math.sqrt(BingoTilesArray.length));

  const [_, setBingoString] = useAtom(bingoStringAtom);
  setBingoString("0".repeat(bingoDimension));

  const [bingo] = useAtom(bingoWinAtom);

  return (
    <Center h="100vh" w="100vw">
      <Stack align="center">
        <Group>
          <Button color="bink" onClick={() => setColor("bink")}>
            You
          </Button>
          <Button color="bilac" onClick={() => setColor("bilac")}>
            Can
          </Button>
          <Button color="bellow" c="beige.9" onClick={() => setColor("bellow")}>
            Change
          </Button>
          <Button color="baqua" onClick={() => setColor("baqua")}>
            Colour
          </Button>
        </Group>
        <BingoCardWrapper
          cardColor={color}
          bingoTiles={BingoTilesArray}
          bingoTitle="Sprint Planning"
        />
        {bingo && (
          <Text fz={32} fw={700} fs="italic">
            BINGO!
          </Text>
        )}
      </Stack>
    </Center>
  );
};
