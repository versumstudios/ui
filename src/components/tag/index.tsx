import React, { FC } from 'react';

import { CSS } from '@stitches/react';

import { Button } from '../button';

import * as Styles from './styles';

interface ITag {
  label: string;
  onClose?: (value: string) => void;
  css?: CSS;
}

export const Tag: FC<ITag> = ({ label, onClose, ...rest }) => {
  return (
    <Styles.Tag {...rest}>
      {label}
      {onClose && (
        <Button
          variant="basic"
          css={{
            padding: 0,
            width: 16,
            height: 16,
            borderRadius: 9999,
            backgroundColor: '$primaryBorder',
            marginLeft: '$space$4',
            i: { fontSize: 14 },
          }}
          onClick={() => onClose(label)}
        >
          <i>close</i>
        </Button>
      )}
    </Styles.Tag>
  );
};
