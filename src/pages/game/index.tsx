import { Button, Group, Stack, Text } from "@mantine/core";
import { BingoCardWrapper } from "./wrappers/bingoCardWrapper";
import { useState } from "react";
import { useAtom } from "jotai";
import { BingoTilesArray, bingoWinAtom } from "../../state/jotai";

export const Game = () => {
  const [color, setColor] = useState("bilac");

  const [bingo] = useAtom(bingoWinAtom);

  return (
      <Stack align="center" mt={32}>
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
          <Text fz={64} fw={700} fs="italic">
            BINGO!
          </Text>
        )}
      </Stack>
  );
};
