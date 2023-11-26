import { Button, Center, Group, Stack } from "@mantine/core";
import { BingoCardWrapper } from "./wrappers/bingoCardWrapper";
import { useState } from "react";

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
          columns={Math.sqrt(BingoTilesArray.length)}
          bingoTiles={BingoTilesArray}
          bingoTitle="Sprint Planning"
        />
      </Stack>
    </Center>
  );
};
