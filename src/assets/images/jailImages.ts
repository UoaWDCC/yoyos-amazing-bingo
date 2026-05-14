import abbeyJail from "./abbey_jail.png";
import andrewJail from "./andrew_jail.png";
import brandonJail from "./brandon_jail.png";
import chrisJail from "./chris_jail.png";
import deasyJail from "./deasy_jail.png";
import eshanaJail from "./eshana_jail.png";
import henryJail from "./henry_jail.png";
import kotJail from "./kot_jail.png";
import kyleJail from "./kyle_jail.png";
import maternusJail from "./maternus_jail.png";
import matthewJail from "./matthew_jail.png";
import nancyJail from "./nancy_jail.png";
import nickJail from "./nick_jail.png";
import samJail from "./sam_jail.png";
import shuaibJail from "./shuaib_jail.png";
import tomJail from "./tom_jail.png";

export const jailImages = {
  abbey_jail: abbeyJail,
  andrew_jail: andrewJail,
  brandon_jail: brandonJail,
  chris_jail: chrisJail,
  deasy_jail: deasyJail,
  eshana_jail: eshanaJail,
  henry_jail: henryJail,
  kot_jail: kotJail,
  kyle_jail: kyleJail,
  maternus_jail: maternusJail,
  matthew_jail: matthewJail,
  nancy_jail: nancyJail,
  nick_jail: nickJail,
  sam_jail: samJail,
  shuaib_jail: shuaibJail,
  tom_jail: tomJail,
} as const;

export type JailImageKey = keyof typeof jailImages;
