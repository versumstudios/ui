import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { globalCss } from '../src/styles/global';

export const decorators = [
  (Story) => {
    globalCss();

    document.documentElement.dataset.theme = useDarkMode() ? 'dark' : 'light';
    return <Story />;
  },
];

export const parameters = {
  chromatic: { disable: true },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal },
  },
};
