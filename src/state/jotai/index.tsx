import { atom } from "jotai";

export const BingoTilesArray = [
    "Spill Over",
    "Let’s park it",
    "Let me share my screen",
    "Take this offline",
    "Stretch ourselves",
    "Blocker!",
    "I’m happy to help",
    "Can someone else take this up?",
    "I don’t have the Bandwidth",
  ];

export const bingoDimension = Math.sqrt(BingoTilesArray.length)

export const bingoStringAtom = atom("0".repeat(BingoTilesArray.length))

export const bingoWinAtom = atom(false)