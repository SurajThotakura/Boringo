import {
  Box,
  Button,
  Group,
  Image,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";

export const Home = () => {
  return (
    <Group
      sx={{ backgroundColor: "#F7F3E7", height: "100vh" }}
      align="top"
      position="apart"
    >
      <Stack m={48}>
        <Image src="/assets/Boringo.svg" height={64} width={64} />
        <Stack ml={48} mt={64}>
          <Box h={192}>
            <Box
              sx={{
                height: 97,
                width: 568,
                position: "absolute",
                transform: "translate(18px, 56px)",
                zIndex: 0,
                backgroundColor: "#FFCA45",
              }}
            />
            <Text
              fz={128}
              fw={600}
              fs="italic"
              sx={{ position: "absolute", zIndex: 1 }}
            >
              Boringo!
            </Text>
          </Box>
          <Group spacing={32}>
            <Text fz={48} fw={300} fs="italic">
              Bored of
            </Text>
            <Box h={72}>
              <Box
                sx={{
                  height: 36,
                  width: 128,
                  position: "absolute",
                  transform: "translate(10px, 24px)",
                  zIndex: 0,
                  backgroundColor: "#BEDCDA",
                }}
              />
              <Text
                fz={48}
                fw={600}
                fs="italic"
                sx={{ position: "absolute", zIndex: 1 }}
              >
                life?
              </Text>
            </Box>
          </Group>
          <Group spacing={32}>
            <Text fz={48} fw={300} fs="italic">
              Mage a
            </Text>
            <Text fz={48} fw={600} fs="italic">
              game;
            </Text>
            <Text fz={48} fw={300} fs="italic">
              Out of it
            </Text>
          </Group>
          <Button
            mt={40}
            styles={{
              root: {
                height: 80,
                width: 256,
                backgroundColor: "#F7F3E7",
                border: "6px solid #000000",
                borderRadius: 8,
                boxShadow: "8px 8px 0px 0px #C25D44",
                "&:hover": {
                  backgroundColor: "#e9e5da",
                },
              },
              label: {
                color: "#000000",
                fontSize: 36,
                fontStyle: "italic",
              },
            }}
          >
            Play Now
          </Button>
        </Stack>
      </Stack>
      <ScrollArea h="100vh" type="never">
        <Text fz={48} fw={300} fs="italic" w={800} c="#D9CBBE">
          But think not that this famous town has only all. Still new bedford is
          a queer place. Had it this day perhaps have been in as howling
          condition as the coast of labrador. As it is, parts of her back
          country are enough to frighten one, they look so bony. The town itself
          is perhaps the dearest place to live in, in all new england. It is a
          land of oil, true enough: but
        </Text>
      </ScrollArea>
    </Group>
  );
};
