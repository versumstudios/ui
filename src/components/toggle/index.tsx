import React, { FC, useEffect, useRef, useState } from 'react';

import * as Styles from './styles';

export interface IToggle {
  value?: boolean;
  onChange: (toggled: boolean) => void;
}

export const Toggle: FC<IToggle> = ({ value, onChange }) => {
  const rToggled = useRef(value);
  const [toggled, setToggled] = useState(value);

  useEffect(() => {
    if (value !== undefined) {
      if (rToggled.current !== value) {
        rToggled.current = value;
        setToggled(value);
      }
    }
  }, [value]);

  const onToggleClick = () => {
    rToggled.current = !toggled;
    setToggled(!toggled);
    onChange(!toggled);
  };

  return <Styles.Container toggled={toggled} onClick={onToggleClick} />;
};
