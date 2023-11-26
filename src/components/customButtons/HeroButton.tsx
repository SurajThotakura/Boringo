import { Button, ButtonProps } from "@mantine/core";

export const HeroButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      mt={40}
      styles={(theme) => ({
        root: {
          height: 80,
          width: 256,
          backgroundColor: theme.colors.beige[1],
          border: `6px solid ${theme.colors.beige[9]}`,
          borderRadius: 8,
          boxShadow: `8px 8px 0px 0px ${theme.colors.bink[5]}`,
          transition: "background-color 150ms",
          "&:hover": {
            backgroundColor: theme.colors.bink[4],
            transition: "box-shadow 50ms",
          },
          "&:active": {
            boxShadow: `0px 0px 0px 0px ${theme.colors.bink[5]}`,
          },
        },
        label: {
          color: "#000000",
          fontSize: 36,
          fontStyle: "italic",
        },
      })}
    />
  );
};
