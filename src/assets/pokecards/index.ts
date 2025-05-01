import alphaMask from "./alpha.webp";
import backImage from "./backside.webp";
import bulbasour from "./bulbasour.webp";
import jigglybuff from "./jigglybuff.webp";
import pikachoo from "./pikachoo.webp";
import pokewebster from "./pokewebster.webp";
import psyweb from "./psyweb.webp";
import snorelax from "./snorelax.webp";
import warill from "./warill.webp";
import warizard from "./warizard.webp";
import webbykarp from "./webbykarp.webp";
import wengar from "./wengar.webp";
import wewtwo from "./wewtwo.webp";
import witto from "./witto.webp";
import worterra from "./worterra.webp";

export const cards = {
  mask: alphaMask,
  back: backImage,
  images: {
    snorelax,
    bulbasour,
    jigglybuff,
    pikachoo,
    pokewebster,
    psyweb,
    warill,
    warizard,
    webbykarp,
    wengar,
    wewtwo,
    witto,
    worterra,
  } as const,
};

export type cardNames = keyof typeof cards.images;
