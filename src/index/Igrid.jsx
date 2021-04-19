import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import SheepCard from './SheepCard';
import Daisy from '../../Media/Daisy.jpg';
import Gigi from '../../Media/Gigi.jpg';
import Juley from '../../Media/Juley.jpg';
import Sammi from '../../Media/Sammi.jpg';
import Tanya from '../../Media/Tanya.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 400,
    backgroundColor: theme.palette.background.light,
  },
  paperLight: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 500,
    backgroundColor: theme.palette.background.light,
  },
  paperDark: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 500,
    backgroundColor: theme.palette.background.dark,
  },
}));

const sheep = [
  {
    id: 1,
    name: "Daisy",
    dark: true,
    title: "Daisy",
    type: 'lamb',
    subtitle: "HGT67 – Singleton - born April 2020 - $400.",
    img: Daisy
  },
  {
    id: 2,
    name: "Gigi",
    dark: false,
    title: "Gigi",
    type: 'lamb',
    subtitle: "HGT66 – Triplet - born Feb 2020 - $400.",
    img: Gigi
  },
  {
    id: 3,
    name: "Juley",
    dark: false,
    title: "Juley",
    type: 'yearling',
    subtitle: "HGT59 – Twin - born April 2019 - $400.",
    img: Juley
  },
  {
    id: 4,
    name: "Sammi",
    dark: true,
    title: "Sammi",
    type: 'lamb',
    subtitle: "HGT63 – Triplet - born Feb 2020 - $400.",
    img: Sammi
  },
  {
    id: 5,
    name: "Tanya",
    dark: true,
    title: "Tanya",
    type: 'yearling',
    subtitle: "HGT60 – Singleton - born April 2019 - $400.",
    img: Tanya
  }, 
]
const listSheep = sheep.map((sheep) => 
<SheepCard
 key={sheep.id}
  dark={sheep.dark}
  img={sheep.img}
  title={sheep.title}
  subtitle={sheep.subtitle} 
  type={sheep.type}
  />
)

function IGrid(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Paper className={classes.title} square >
            <Title/>
          </Paper>
        </Grid>
        <>{listSheep}</>
        <Hidden smDown>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperLight} square >
               {}
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

IGrid.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(IGrid);
