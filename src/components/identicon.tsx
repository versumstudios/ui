import React, { FC } from 'react';

// original version https://github.com/varld/gradient-avatar
const stringHash = (str: string) => {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i); // eslint-disable-line
  }

  return hash >>> 0;
};

const hue = (p: number, q: number, t: number) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;

  return p;
};

const hslRgb = (h: number, s: number, l: number) => {
  let r;
  let g;
  let b;
  const h_ = h / 360; // eslint-disable-line

  if (s === 0) {
    r = l;
    g = l;
    b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue(p, q, h_ + 1 / 3);
    g = hue(p, q, h_);
    b = hue(p, q, h_ - 1 / 3);
  }

  return [
    Math.max(0, Math.min(Math.round(r * 255), 255)),
    Math.max(0, Math.min(Math.round(g * 255), 255)),
    Math.max(0, Math.min(Math.round(b * 255), 255)),
  ];
};

const hslTriad = (h: number, s: number, l: number) => {
  return [
    [h, s, l],
    [(h + 120) % 360, s, l],
    [(h + 240) % 360, s, l],
  ];
};

export interface IIdenticon {
  hash?: string;
}

export const Identicon: FC<IIdenticon> = ({ hash = 'default' }) => {
  const str = stringHash(hash);
  const colors = hslTriad(str % 360, 1, 0.5);
  const color1 = hslRgb(colors[0][0], colors[0][1], colors[0][2]);
  const color2 = hslRgb(colors[1][0], colors[1][1], colors[1][2]);
  const color1str = `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`;
  const color2str = `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`;

  return (
    <svg width="100%" height="100%" viewBox="0 0 80 80">
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id={hash}>
          <stop stopColor={color1str} offset="0%" />
          <stop stopColor={color2str} offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect fill={`url(#${hash})`} x="0" y="0" width="80" height="80" />
      </g>
    </svg>
  );
};
