import { DefaultMantineColor } from "@mantine/core";

type TMantineCustomColors = Partial<
  Record<
    DefaultMantineColor,
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  >
>;

export const colors: TMantineCustomColors = {
  beige: [
    "#f7f3ee",
    "#f1eee0",
    "#e5dec8",
    "#dfd6bc",
    "#d9ceb0",
    "#b1a790",
    "#89816e",
    "#615b4c",
    "#39352a",
    "#110f08",
  ],
  bellow: [
    "#fff8e5",
    "#fff8e5",
    "#ffeebd",
    "#ffe295",
    "#ffd66d",
    "#ffca45",
    "#c59c33",
    "#8c6e22",
    "#534011",
    "#1a1200",
  ],
  bink: [
    "#fde8e9",
    "#fde8e9",
    "#fbced2",
    "#f8b5ba",
    "#f59ca2",
    "#f2838a",
    "#bc626a",
    "#854248",
    "#4e2226",
    "#170204",
  ],
  bilac: [
    "#e8e9fc",
    "#e8e9fc",
    "#d5d4f9",
    "#c0c0f7",
    "#abacf5",
    "#9698f3",
    "#7272bc",
    "#4d4d85",
    "#28284e",
    "#030317",
  ],
  baqua: [
    "#eff5f5",
    "#eff5f5",
    "#d5e6e6",
    "#b9d5d5",
    "#9dc4c4",
    "#81b3b3",
    "#648b8b",
    "#466262",
    "#283939",
    "#0a1010",
  ],
};
