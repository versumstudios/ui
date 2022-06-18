import { styled } from '../../styles/stitches';

export const Container = styled('div', {
  border: '1px solid $colors$primaryBorder',
  borderRadius: 5,
  overflow: 'auto',
});

export const Table = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
});

export const Thead = styled('thead', {
  // backgroundColor: '$secondaryBackground',

  th: {
    height: 50,
    whiteSpace: 'nowrap',
    padding: '0 $space$4',
  },
});

export const Tbody = styled('tbody', {
  tr: {
    height: 50,
    whiteSpace: 'nowrap',
    borderTop: '1px solid $colors$primaryBorder',

    // '&:nth-child(even)': {
    //   backgroundColor: '$secondaryBackground',
    // },
  },

  td: {
    whiteSpace: 'nowrap',
    padding: '0 $space$4',
  },
});
