import { Center } from "@mantine/core"
import { BingoCardWrapper } from "./wrappers/bingoCardWrapper"

const BingoTilesArray = [
    "Is this a fish market or what is this?",
    "Not my type",
    "Ok!",
    "",
    "",
    "",
    "",
    "",
    "",
    "Not my type",
    "Ok!",
    "",
    "",
    "",
    "",
    "",
  ];

export const Game = () => {
    return <Center h="100vh" w="100vw">
        <BingoCardWrapper cardColor="bilac" columns={Math.sqrt(BingoTilesArray.length)} bingoTiles={BingoTilesArray}/>
    </Center>
}