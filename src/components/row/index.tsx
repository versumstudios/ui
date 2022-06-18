import React, { FC, ReactNode } from 'react';

import { Box } from '../box';

import * as Styles from './styles';

export interface IRow {
  title: string;
  label: ReactNode;
  extra?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  // onChange?: (value: string) => void;
}

export const Row: FC<IRow> = ({ title, label, extra, children, disabled = false }) => {
  return (
    <Styles.Container disabled={disabled}>
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'column',

          '@bp1': {
            flexDirection: 'row',
          },
        }}
      >
        <Styles.Label>
          <h6>{title}</h6>
          {label}
        </Styles.Label>
        <Styles.Item>{children}</Styles.Item>
      </Box>
      {extra && <Box css={{ paddingTop: '$space$3' }}>{extra}</Box>}
    </Styles.Container>
  );
};
