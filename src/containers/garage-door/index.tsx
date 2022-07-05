import { FC, ReactNode } from 'react';

import * as Styles from './styles';

export interface IGarageDoor {
  children?: ReactNode;
}

export const GarageDoor: FC<IGarageDoor> = ({ children }) => {
  return <Styles.Container>{children}</Styles.Container>;
};
export const { Door } = Styles;

export const { Component } = Styles;
