import { Center } from "@mantine/core"
import { BingoCardWrapper } from "./wrappers/bingoCardWrapper"

export const Game = () => {
    return <Center h="100vh" w="100vw">
        <BingoCardWrapper scaleFactor={1} cardColor="bilac" columns={4}/>
    </Center>
}