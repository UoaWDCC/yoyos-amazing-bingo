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
import weowth from "./weowth.webp";
import wewtwo from "./wewtwo.webp";
import wiglet from "./wiglet.webp";
import witto from "./witto.webp";
import wogepi from "./wogepi.webp";
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
    weowth,
    wiglet,
    wogepi,
  },
} as const;

export type CardNames = keyof typeof cards.images;