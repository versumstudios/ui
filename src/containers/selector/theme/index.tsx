import React, { useEffect, useState } from 'react';

import { Selector } from '../../../components/selector';
import { setItem } from '../../../utils/localstorage';

import * as Styles from './styles';

export enum SelectorThemeTypes {
  system = 'system',
  dark = 'dark',
  light = 'light',
}

export const SelectorTheme = () => {
  const [defaultValue, setDefaultValue] = useState<string>(SelectorThemeTypes.system);

  const changeTheme = (theme: string) => {
    setItem('--versum-theme', theme);
    setDefaultValue(theme);

    if (theme !== SelectorThemeTypes.system) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
  };

  useEffect(() => {
    setDefaultValue(document.documentElement.dataset.theme || SelectorThemeTypes.system);
  }, []);

  const list = [
    { value: SelectorThemeTypes.system, label: 'System', icon: 'computer' },
    { value: SelectorThemeTypes.dark, label: 'Dark', icon: 'dark_mode' },
    { value: SelectorThemeTypes.light, label: 'Light', icon: 'light_mode' },
  ];

  return (
    <Styles.Container>
      <Selector value={defaultValue} list={list} onChange={changeTheme} />
    </Styles.Container>
  );
};
