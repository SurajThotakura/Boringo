import { Center } from "@mantine/core"
import { BingoCardWrapper } from "./wrappers/bingoCardWrapper"

const BingoTilesArray = [
    "Spill Over",
    "Let’s park it",
    "Let me share my screen",
    "Take this offline",
    "Free!",
    "Blocker!",
    "I’m happy to help",
    "Can someone else take this up?",
    "I don’t have the Bandwidth",
  ];

export const Game = () => {
    return <Center h="100vh" w="100vw">
        <BingoCardWrapper cardColor="bilac" columns={Math.sqrt(BingoTilesArray.length)} bingoTiles={BingoTilesArray}/>
    </Center>
}