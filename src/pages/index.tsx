import { NextPage } from 'next';

import { Box } from '../components/box';
import { Button } from '../components/button';
import { Container } from '../components/container';

const Home: NextPage = () => {
  return (
    <Container>
      <Box>
        <Button>Button</Button>
      </Box>
    </Container>
  );
};

export default Home;
