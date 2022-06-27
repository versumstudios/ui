import React, { FC, ReactNode, useState } from 'react';
import { uniqueId } from 'lodash';

import { Tooltip } from '../tooltip';

import * as Styles from './styles';

export interface IField {
  uid: string;
  label?: string;
  tooltip?: string;
  children?: ReactNode;
  error?: boolean | string;
}

export const Field: FC<IField> = ({ uid, label, tooltip, children, error }) => {
  const [internalUID] = useState(uniqueId('vfield-'));
  return (
    <Styles.Container id={uid}>
      {label && (
        <Styles.LabelContainer>
          <Styles.Label htmlFor={internalUID}>{label}</Styles.Label>&nbsp;
          {tooltip && (
            <Tooltip description={tooltip}>
              <i>help</i>
            </Tooltip>
          )}
        </Styles.LabelContainer>
      )}
      <div id={internalUID}>{children}</div>
      {error && <Styles.Error>{error}</Styles.Error>}
    </Styles.Container>
  );
};
