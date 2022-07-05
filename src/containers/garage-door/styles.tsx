import { cloneElement, FC, ReactElement, ReactNode, useLayoutEffect, useRef, useState } from 'react';

import { styled } from '../../styles/stitches';

export interface IFactoryDoor {
  children?: ReactNode;
  className?: string;
}

const FactoryDoor: FC<IFactoryDoor> = ({ children, className }) => {
  const ref = useRef<HTMLElement>();
  return cloneElement(children as ReactElement, {
    ref,
    className,
  });
};

export interface IFactoryComponent {
  children?: ReactNode;
  className?: string;
  detail?: number;
}

const FactoryComponent: FC<IFactoryComponent> = ({ children, className, detail = 100 }) => {
  const ref = useRef<HTMLElement>(null);
  const [percentage, setPercentage] = useState(0);

  useLayoutEffect(() => {
    const boxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setPercentage(entry.intersectionRatio);
        });
      },
      {
        threshold: Array.from(
          {
            length: detail,
          },
          (_, i) => i / detail
        ),
      }
    );

    // Observing reference
    if (ref.current) {
      boxObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        boxObserver.unobserve(ref.current);
      }
      boxObserver.disconnect();
    };
  }, []);

  return cloneElement(children as ReactElement, {
    ref,
    className,
    percentage,
  });
};

export const Container = styled('div', {
  position: 'relative',
});

export const Door = styled(FactoryDoor, {
  position: 'relative',
  zIndex: 1,
});

export const Component = styled(FactoryComponent, {
  position: 'sticky',
  bottom: 0,
  zIndex: 0,
});
