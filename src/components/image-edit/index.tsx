/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactNode } from 'react';

import * as Styles from './styles';

export interface IImageEdit {
  children?: ReactNode;
  onClick?: () => void;
  css?: any;
}

export const ImageEdit: FC<IImageEdit> = ({ children, onClick = () => null, ...rest }) => {
  return (
    <Styles.Container {...rest} onClick={onClick}>
      {children}
      <Styles.Overlay />
      <i>add_a_photo</i>
    </Styles.Container>
  );
};
