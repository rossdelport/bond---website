import type { Palette } from "./PixelSprite";

export type Sprite = { grid: string[]; palette: Palette };

/* ----------------------------------------------------------------------------
 * Blobby — the child-form shared pet. Soft teal blob, big eyes, gentle smile.
 * 16 x 16.
 * ------------------------------------------------------------------------- */
const blobbyPalette: Palette = {
  K: "#18564a", // outline (dark teal)
  T: "#2aaa8a", // body (warm teal)
  L: "#5fccae", // top highlight
  D: "#1f8a70", // bottom shadow
  W: "#ffffff", // eye white
  P: "#241d14", // pupil / mouth
  C: "#f2a7a0", // cheek
};

export const blobby: Sprite = {
  palette: blobbyPalette,
  grid: [
    "......KKKK......",
    "....KKLLLLKK....",
    "...KLLLLLLLLK...",
    "..KLLLLLLLLLLK..",
    ".KLLTTTTTTTTLLK.",
    ".KLTTTTTTTTTTTK.",
    "KLTTTTTTTTTTTTTK",
    "KTTWWWTTTTWWWTTK",
    "KTTWPWTTTTWPWTTK",
    "KTTWWWTTTTWWWTTK",
    "KTCTTTPTTPTTTCTK",
    "KTTTTTPPPPTTTTTK",
    ".KTTTTTTTTTTTTK.",
    "..KDTTTTTTTTDK..",
    "...KDDDDDDDDK...",
    "....KKKKKKKK....",
  ],
};

/* ----------------------------------------------------------------------------
 * The egg — "hatch together".  12 x 15.
 * ------------------------------------------------------------------------- */
export const egg: Sprite = {
  palette: {
    K: "#b89a78", // shell outline
    W: "#fbf6ec", // shell light
    P: "#2aaa8a", // teal speckle
    A: "#e8a020", // amber speckle
  },
  grid: [
    ".....KK.....",
    "....KWWK....",
    "...KWWWWK...",
    "...KWWWWK...",
    "..KWWWWWWK..",
    "..KWWPWWWK..",
    ".KWWWWWWWWK.",
    ".KWWWWWAWWK.",
    ".KWWWWWWWWK.",
    ".KWWPWWWWWK.",
    ".KWWWWWWWWK.",
    "..KWWWAWWK..",
    "..KWWWWWWK..",
    "...KWWWWK...",
    "....KKKK....",
  ],
};

/* ----------------------------------------------------------------------------
 * Shared care — two figures (teal + amber) with a small heart between them.
 * 16 x 14.
 * ------------------------------------------------------------------------- */
export const sharedCare: Sprite = {
  palette: {
    a: "#2aaa8a", // partner one
    b: "#e8a020", // partner two
    h: "#e0607a", // heart
  },
  grid: [
    "................",
    ".aaa........bbb.",
    ".aaa........bbb.",
    ".aaa........bbb.",
    "..a..........b..",
    "aaaaa......bbbbb",
    "aaaaa..h.h.bbbbb",
    "aaaaa..hhh.bbbbb",
    "aaaaa...h..bbbbb",
    "aaaaa......bbbbb",
    ".aaaaa....bbbbb.",
    ".aaaaa....bbbbb.",
    "..aaa......bbb..",
    "................",
  ],
};

/* ----------------------------------------------------------------------------
 * Evolution twinkle — "he becomes what you make him".  11 x 11.
 * ------------------------------------------------------------------------- */
export const evolutionStar: Sprite = {
  palette: {
    A: "#e8a020", // amber
    L: "#f7d27a", // light
    W: "#fff6dd", // shine
  },
  grid: [
    ".....A.....",
    ".....A.....",
    "....ALA....",
    "....ALA....",
    "AA.ALWLA.AA",
    ".AALWWWLAA.",
    "AA.ALWLA.AA",
    "....ALA....",
    "....ALA....",
    ".....A.....",
    ".....A.....",
  ],
};

/* ----------------------------------------------------------------------------
 * Small decorative sprites — single-colour, used as low-opacity wallpaper.
 * Colour is supplied at the call site.
 * ------------------------------------------------------------------------- */
export function decorStar(color: string): Sprite {
  return {
    palette: { s: color },
    grid: ["..s..", "..s..", "sssss", "..s..", "..s.."],
  };
}

export function decorHeart(color: string): Sprite {
  return {
    palette: { h: color },
    grid: [".h.h.", "hhhhh", "hhhhh", ".hhh.", "..h.."],
  };
}

/* A larger, shaded heart for the emotional-hook section.  13 x 11. */
export const bigHeart: Sprite = {
  palette: {
    H: "#e0607a", // body
    L: "#f4a4b6", // highlight
    D: "#c2466a", // shadow
  },
  grid: [
    "..LHH...HHH..",
    ".LLHHH.HHHHH.",
    "LLHHHHHHHHHHH",
    "HHHHHHHHHHHHH",
    "HHHHHHHHHHHHH",
    ".HHHHHHHHHHD.",
    "..HHHHHHHHD..",
    "...HHHHHHD...",
    "....HHHHD....",
    ".....HHD.....",
    "......D......",
  ],
};

export function decorFlower(petal: string, center: string): Sprite {
  return {
    palette: { p: petal, c: center },
    grid: ["..p..", ".ppp.", "ppcpp", ".ppp.", "..p.."],
  };
}

/* ----------------------------------------------------------------------------
 * Question mark — locked / mystery journey milestones.  7 x 9.
 * ------------------------------------------------------------------------- */
export function question(color: string): Sprite {
  return {
    palette: { q: color },
    grid: [
      ".qqqq..",
      "q....q.",
      "q....q.",
      "....q..",
      "...q...",
      "..q....",
      "..q....",
      ".......",
      "..q....",
    ],
  };
}

/* ----------------------------------------------------------------------------
 * Tiny flower for the journey grass.  5 x 6 (with stem).
 * ------------------------------------------------------------------------- */
export function grassFlower(petal: string, center: string, stem: string): Sprite {
  return {
    palette: { p: petal, c: center, s: stem },
    grid: ["p.p", "pcp", "psp", ".s.", ".s."],
  };
}

/* ----------------------------------------------------------------------------
 * Journey milestone icons.
 * ------------------------------------------------------------------------- */
export function cross(color: string): Sprite {
  return {
    palette: { c: color },
    grid: [
      "..ccc..",
      "..ccc..",
      "ccccccc",
      "ccccccc",
      "ccccccc",
      "..ccc..",
      "..ccc..",
    ],
  };
}

export function crescent(color: string): Sprite {
  return {
    palette: { k: color },
    grid: [
      "...kkk...",
      "..kkkkk..",
      ".kkk..k..",
      ".kk......",
      ".kk......",
      ".kk......",
      ".kkk..k..",
      "..kkkkk..",
      "...kkk...",
    ],
  };
}

export const flame: Sprite = {
  palette: { o: "#e8732a", y: "#f6b73a", w: "#fff0c0" },
  grid: [
    "...o...",
    "..ooo..",
    "..ooo..",
    ".ooyoo.",
    ".oyyyo.",
    "ooyyyoo",
    "ooywyoo",
    ".oyyyo.",
    "..ooo..",
  ],
};

export function check(color: string): Sprite {
  return {
    palette: { c: color },
    grid: ["......c", ".....cc", "c...cc.", "cc.cc..", ".ccc...", "..c...."],
  };
}
