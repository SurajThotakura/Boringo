import { Button, ButtonProps } from "@mantine/core";

export const ThickButton = ({ ...props }: ButtonProps) => {
  const currentColor = props.color ? props.color : "bink";
  return (
    <Button
      {...props}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.beige[1],
          border: `4px solid ${theme.colors.beige[9]}`,
          borderRadius: 8,
          boxShadow: `4px 4px 0px 0px ${theme.colors[currentColor][5]}`,
          transition: "background-color 150ms",
          "&:hover": {
            backgroundColor: theme.colors[currentColor][5],
            transition: "box-shadow 50ms",
          },
          "&:active": {
            boxShadow: `0px 0px 0px 0px ${theme.colors[currentColor][5]}`,
          },
        },
        label: {
          color: "#000000",
          fontSize: 20,
          fontStyle: "italic",
        },
      })}
    />
  );
};
