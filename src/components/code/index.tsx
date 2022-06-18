import React, { FC, ReactNode } from 'react';

import { Copy } from '../copy';

import * as Styles from './styles';

interface ICode {
  children?: ReactNode;
}

export const Code: FC<ICode> = ({ children }) => {
  const formatted = JSON.stringify(children, null, 2);
  return (
    <Styles.Container>
      <pre>{formatted}</pre>
      <Copy value={formatted} />
    </Styles.Container>
  );
};
