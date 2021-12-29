import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Login from './Login';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {

  return (
    <OverviewWrapper>
      <Helmet>
        <title>Waiwa Delivery</title>
      </Helmet>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 8, mb: 8, borderRadius: 12 }}>
          <Login />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
