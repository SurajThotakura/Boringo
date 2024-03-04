import { Button, Group, Stack, Text } from "@mantine/core";
import { BingoCardWrapper } from "./wrappers/bingoCardWrapper";
import { useState } from "react";
import { useAtom } from "jotai";
import { BingoTilesArray, bingoWinAtom } from "../../state/jotai";
import { HeroButton, ThickButton } from "../../components/customButtons";

export const Game = () => {
  const [color, setColor] = useState("bilac");

  const [bingo] = useAtom(bingoWinAtom);

  return (
    <Group w="100vw" position="apart">
      <Stack align="center" w="calc(100vw - 420px)" mt={32}>
        <HeroButton disabled={!bingo}>
          Bingo
        </HeroButton>
        <BingoCardWrapper
          cardColor={color}
          bingoTiles={BingoTilesArray}
          bingoTitle="Sprint Planning"
        />
      </Stack>
      <Stack
        w={400}
        h="100vh"
        sx={(theme) => ({ backgroundColor: theme.colors.baqua[1] })}
      ></Stack>
    </Group>
  );
};
