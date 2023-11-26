import { Box, Group, Image, Stack, Text } from "@mantine/core";
import { HeroButton } from "../../components/HeroButton";
import { TextBG } from "../../components/TextBG";
import { ThickButton } from "../../components/ThickButton";
import { CardsAnimation } from "../../components/cardsAnimation";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            transform:
              "translate(calc(100vw - 720px), 400px) scale(1.4) rotate(-10deg)",
          }}
        >
          <CardsAnimation />
        </Box>
        <TextBG />
      </Box>
      <Stack>
        <Group position="apart" m={48}>
          <Image src="/assets/Boringo.svg" height={64} width={64} />
          <Group>
            <ThickButton size="lg" color="bellow">
              Sign Up
            </ThickButton>
            <ThickButton size="lg" color="bilac">
              Log In
            </ThickButton>
          </Group>
        </Group>
        <Stack ml={48} mt={64}>
          <Group spacing={32}>
            <Text fz={48} fw={300} fs="italic">
              Bored of
            </Text>
            <Box h={72}>
              <Box
                sx={(theme) => ({
                  height: 36,
                  width: 128,
                  position: "absolute",
                  transform: "translate(10px, 24px)",
                  zIndex: 0,
                  backgroundColor: theme.colors.baqua[3],
                })}
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
            <Box h={72} w={140}>
              <Box
                sx={(theme) => ({
                  height: 36,
                  width: 128,
                  position: "absolute",
                  transform: "translate(4px, 26px)",
                  zIndex: 0,
                  backgroundColor: theme.colors.bilac[3],
                })}
              />
              <Text
                fz={48}
                fw={600}
                fs="italic"
                sx={{ position: "absolute", zIndex: 1 }}
              >
                game;
              </Text>
            </Box>
            <Text fz={48} fw={300} fs="italic">
              Out of it
            </Text>
          </Group>
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
          <Link to="/game">
            <HeroButton>Play Now</HeroButton>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
