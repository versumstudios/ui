import { DarkTheme, globalCss as createGlobalCss, LightTheme } from './stitches';

export const globalCss = createGlobalCss({
  // Reset
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, hr, a, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, button, video':
    {
      margin: 0,
      padding: 0,
    },

  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
    display: 'block',
  },

  'h1, h2, h3, h4, h5, h6': { fontSize: '100%' },

  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },

  'strong, b, mark': {
    fontStyle: 'inherit',
    fontWeight: 'bold',
  },

  'em, i, cite, q, address, dfn, var': {
    fontStyle: 'normal',
    fontWeight: 'inherit',
  },

  ' abbr[title], dfn[title]': {
    borderBottom: '1px dotted',
    cursor: 'help',
  },

  ins: { borderBottom: '1px solid' },

  'a, u, ins': { textDecoration: 'none' },

  'del, s': { textDecoration: 'line-through' },

  'pre, code, samp, kbd': { fontFamily: 'monospace' },

  small: { fontSize: '0.75em' },

  img: {
    border: 'none',
    fontSize: 0,
    color: 'transparent',
    display: 'block',
    maxWidth: '100%',
  },

  'input,select, textarea': { font: 'inherit' },

  'h1, h2, h3, h4, h5': { fontWeight: 'normal' },

  select: {
    textAlign: 'left',
  },

  // Theme
  ':root': {
    '@media (prefers-color-scheme: dark)': DarkTheme,
    '@media (prefers-color-scheme: light)': LightTheme,
    '&[data-theme="dark"]': DarkTheme,
    '&[data-theme="light"]': LightTheme,
  },

  // Globals
  html: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    fontFamily: '$DMSans',
    fontSize: 16,
  },

  body: {
    backgroundColor: '$primaryBackground',
    color: '$primaryFill',
    fontFamily: '$DMSans',
  },

  '*': {
    boxSizing: 'border-box',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
  },

  i: {
    display: 'block',
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 1,
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr',
    color: '$primaryFill',
    userSelect: 'none',
  },

  'h1, h2, h3, h4, h5, h6, p': {
    lineHeight: 1,
    marginBottom: '1rem',
  },

  h1: { fontSize: '3.815rem' },

  h2: { fontSize: '3.052rem' },

  h3: { fontSize: '2.441rem' },

  h4: { fontSize: '1.953rem' },

  h5: { fontSize: '1.563rem' },

  h6: { fontSize: '1.250rem' },

  // browser defaults
  // h1: { fontSize: '2rem' },
  // h2: { fontSize: '1.5rem' },
  // h3: { fontSize: '1.17rem' },
  // h4: { fontSize: '1rem' },
  // h5: { fontSize: '0.83rem' },
  // h6: { fontSize: '0.67rem' },

  blockquotes: { fontSize: '2rem' },

  p: { fontSize: '1rem', lineHeight: 1.3 },

  a: { textDecoration: 'none', color: 'black' },

  hr: {
    border: 'none',
    width: '100%',
    height: '1px',
    background: 'rgba(180, 180, 180, 0.2)',
    marginTop: '20px',
    marginBottom: '20px',
  },

  pre: {
    backgroundColor: 'transparent',
    fontFamily: '$mono',
  },

  main: {
    flexGrow: 1,
    minHeight: 'calc(100vh - $space$1)',
  },

  kbd: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '$secondaryBackground',
    border: '1px solid $colors$primaryBorder',
    borderRadius: 5,
    color: '$secondaryFill',
    minWidth: 24,
    minHeight: 24,
    fontSize: 10,
    padding: '$space$5 $space$5',

    i: {
      fontSize: 14,
      color: '$secondaryFill',
    },
  },
});
