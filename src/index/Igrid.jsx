import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import SheepCard from './SheepCard';
import { Alert, AlertTitle } from '@material-ui/lab';
import sheep from '../data/sheep'
import Typography from "@material-ui/core/Typography";

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
    marginBottom: theme.spacing(2),
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
  message: {
    width: '100%'
  },
  alert: {
    textAlign: 'center'
  }
}));


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
            <Title />
          </Paper>
          <Alert severity="info" variant="filled" color="success" classes={{
            message: classes.message, // class name, e.g. `classes-nesting-root-x`
          }}>
            <AlertTitle variant='h4' className={classes.alert}>2021 Lamb Crop</AlertTitle>
            <Typography variant="h5" display="block" gutterBottom className={classes.alert}>
              Registered Ewes $400 — Registered Rams $350
            </Typography>
          </Alert>


        </Grid>
        <>{listSheep}</>
        {/* <Hidden smDown>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperLight} square >
              { }
            </Paper>
          </Grid>
        </Hidden> */}
      </Grid>
    </div>
  );
}

IGrid.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(IGrid);
