import React, { FC } from 'react';

import { Box } from '../../box';
import { Text } from '../../text';

import * as Styles from './styles';

interface ILabel {
  label: string;
  onClick?: () => void;
  order?: number;
}

export const Label: FC<ILabel> = ({ label, onClick = () => null, order = 0 }) => {
  return (
    <Styles.Container onClick={onClick}>
      <Text unset>{label}</Text>
      <Box css={{ marginLeft: '$space$4' }}>
        {order === 0 && <i>&nbsp;</i>}
        {order === 1 && <i>arrow_drop_down</i>}
        {order === 2 && <i>arrow_drop_up</i>}
      </Box>
    </Styles.Container>
  );
};
