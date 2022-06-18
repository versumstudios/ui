import React, { FC } from 'react';

import * as Styles from './styles';

export interface IStep {
  progress?: boolean;
  success?: boolean;
  error?: boolean;
  small?: boolean;
}

export const Step: FC<IStep> = ({ progress = false, success = false, error = false, small = false }) => {
  return (
    <Styles.Container progress={progress} success={success} error={error} small={small}>
      <i>
        {success && 'check'}
        {error && 'close'}
      </i>
    </Styles.Container>
  );
};
