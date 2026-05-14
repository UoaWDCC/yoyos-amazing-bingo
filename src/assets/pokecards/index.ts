import alphaMask from "./alpha.webp";
import backImage from "./backside.webp";
import abbeyCard from "./abbey_card.webp";
import andrewCard from "./andrew_card.webp";
import brandonCard from "./brandon_card.webp";
import chrisCard from "./chris_card.webp";
import deasyCard from "./deasy_card.webp";
import eshanaCard from "./eshana_card.webp";
import henryCard from "./henry_card.webp";
import kotCard from "./kot_card.webp";
import kyleCard from "./kyle_card.webp";
import maternusCard from "./maternus_card.webp";
import matthewCard from "./matthew_card.webp";
import nancyCard from "./nancy_card.webp";
import nickCard from "./nick_card.webp";
import samCard from "./sam_card.webp";
import shuaibCard from "./shuaib_card.webp";
import tomCard from "./tom_card.webp";

export const cards = {
  mask: alphaMask,
  back: backImage,
  images: {
    abbey_card: abbeyCard,
    andrew_card: andrewCard,
    brandon_card: brandonCard,
    chris_card: chrisCard,
    deasy_card: deasyCard,
    eshana_card: eshanaCard,
    henry_card: henryCard,
    kot_card: kotCard,
    kyle_card: kyleCard,
    maternus_card: maternusCard,
    matthew_card: matthewCard,
    nancy_card: nancyCard,
    nick_card: nickCard,
    sam_card: samCard,
    shuaib_card: shuaibCard,
    tom_card: tomCard,
  },
} as const;

export type CardNames = keyof typeof cards.images;
