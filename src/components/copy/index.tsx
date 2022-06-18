/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactNode, useEffect, useState } from 'react';

import * as Styles from './styles';

interface ICopy {
  value: string;
  children?: ReactNode;
}

export const Copy: FC<ICopy> = ({ value, children }) => {
  const [copied, setCopied] = useState(false);
  let timeout: number;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);

    timeout = window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Styles.Container>
      <Styles.Button onClick={handleCopy}>
        <Styles.Icon>{copied ? <i>done</i> : <i>content_copy</i>}</Styles.Icon>
      </Styles.Button>
      {children}
    </Styles.Container>
  );
};
