import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Igrid from '../src/index/Igrid';
import TopAppBar from '../src/TopAppBar';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  const isSmallishScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
  
    const gutter = isSmallishScreen ? true : false;

  return (
    <>
      <TopAppBar/>
      <Container maxWidth="xl" disableGutters={gutter}>
        <Igrid/>
      </Container>
      <Copyright/>
    </>
  );
}
