import React, { FC, ReactNode } from 'react';

import { Box } from '../../components/box';
import { keyframes } from '../../styles/stitches';

const scroll = keyframes({
  '0%': { transform: 'translateY(0)' },
  '30%': { transform: 'translateY(-210px)' },
  '100%': { transform: 'translateY(-210px)' },
});

export interface IBrowserFrame {
  children: ReactNode;
}

export const BrowserFrame: FC<IBrowserFrame> = ({ children }) => {
  return (
    <Box
      css={{
        flexDirection: 'column',
        border: '1px solid $colors$primaryBorder',
        borderRadius: 5,
        overflow: 'hidden',
        width: 300,
        height: 224,
      }}
    >
      <Box>
        <Box css={{ padding: '$space$4', '&>*': { marginRight: 4 } }}>
          <Box css={{ width: 8, height: 8, borderRadius: 9999, backgroundColor: '$secondaryBorder' }} />
          <Box css={{ width: 8, height: 8, borderRadius: 9999, backgroundColor: '$secondaryBorder' }} />
          <Box css={{ width: 8, height: 8, borderRadius: 9999, backgroundColor: '$secondaryBorder' }} />
        </Box>
      </Box>
      <Box css={{ width: 300, height: 200, overflow: 'hidden' }}>{children}</Box>
    </Box>
  );
};

export interface IThumb {
  height: number;
  info?: boolean;
  market?: boolean;
  labels?: boolean;
}

export const Thumb: FC<IThumb> = ({ height, info = false, market = false, labels = false }) => {
  return (
    <Box css={{ position: 'relative', flexDirection: 'column' }}>
      <Box
        css={{
          position: 'relative',
          backgroundColor: '$primaryBackground',
          width: '100%',
          height,
        }}
      />
      {labels && (
        <Box
          css={{
            position: 'absolute',
            bottom: 2,
            right: 2,
            width: 6,
            height: 3,
            backgroundColor: '$primaryBorder',
          }}
        />
      )}

      <Box
        css={{
          position: 'absolute',
          top: 'calc(100%)',
          left: 0,
          width: '100%',
          flexDirection: 'column',
        }}
      >
        {info && (
          <>
            <Box
              css={{ backgroundColor: '$primaryBorder', marginLeft: 2, marginBottom: 1, width: height / 2, height: 2 }}
            />
            <Box
              css={{ backgroundColor: '$primaryBorder', marginLeft: 2, marginBottom: 1, width: height / 3, height: 2 }}
            />
          </>
        )}

        {market && (
          <Box css={{ justifyContent: 'space-between' }}>
            <Box css={{ backgroundColor: '$secondaryBorder', marginLeft: 2, marginBottom: 1, width: 6, height: 2 }} />
            <Box css={{ backgroundColor: '$secondaryBorder', marginRight: 2, marginBottom: 1, width: 6, height: 2 }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

interface IMasonry {
  info?: boolean;
  market?: boolean;
  labels?: boolean;
}

export const Masonry: FC<IMasonry> = ({ info = false, market = false, labels = false }) => {
  return (
    <Box
      css={{
        columnCount: 5,
        columnGap: 10,
        width: '100%',
        animation: `${scroll} 3s ease-out infinite`,
      }}
    >
      <Box css={{ width: '20%', flexDirection: 'column', '&>*': { marginBottom: 10 } }}>
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={60} info={info} market={market} labels={labels} />
        <Thumb height={70} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={60} info={info} market={market} labels={labels} />
        <Thumb height={70} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: '20%', flexDirection: 'column', '&>*': { marginBottom: 10 } }}>
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={90} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: '20%', flexDirection: 'column', '&>*': { marginBottom: 10 } }}>
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={60} info={info} market={market} labels={labels} />
        <Thumb height={70} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={60} info={info} market={market} labels={labels} />
        <Thumb height={70} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: '20%', flexDirection: 'column', '&>*': { marginBottom: 10 } }}>
        <Thumb height={60} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={90} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={20} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: '20%', flexDirection: 'column', '&>*': { marginBottom: 10 } }}>
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={90} info={info} market={market} labels={labels} />
        <Thumb height={50} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
        <Thumb height={40} info={info} market={market} labels={labels} />
      </Box>
    </Box>
  );
};

interface IGrid {
  info?: boolean;
  market?: boolean;
  labels?: boolean;
}

export const Grid: FC<IGrid> = ({ info = false, market = false, labels = false }) => {
  const v = 33;
  const w = v;
  const h = v;
  const gap = 5;
  return (
    <Box
      css={{
        columnCount: 2,
        columnGap: gap,
        width: '100%',
        animation: `${scroll} 3s ease-out infinite`,
      }}
    >
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
      <Box css={{ width: w, flexDirection: 'column', '&>*': { marginBottom: gap } }}>
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
        <Thumb height={h} info={info} market={market} labels={labels} />
      </Box>
    </Box>
  );
};

interface IVertical {
  info?: boolean;
  market?: boolean;
  labels?: boolean;
}

export const Vertical: FC<IVertical> = ({ info = false, market = false, labels = false }) => {
  return (
    <Box
      css={{
        columnCount: 5,
        columnGap: 10,
        width: '100%',
        animation: `${scroll} 3s ease-out infinite`,
      }}
    >
      <Box
        css={{
          flexDirection: 'column',
          width: '40%',
          margin: '0 auto',
          '&>*': { marginBottom: 15 },
        }}
      >
        <Thumb height={100} info={info} market={market} labels={labels} />
        <Thumb height={70} info={info} market={market} labels={labels} />
        <Thumb height={100} info={info} market={market} labels={labels} />
        <Thumb height={70} info={info} market={market} labels={labels} />
      </Box>
    </Box>
  );
};
