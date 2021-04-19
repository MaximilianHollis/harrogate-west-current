import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

  const useStyles = makeStyles((theme) => ({
    image: {
      maxWidth: '100%',
      height: 'auto',
      resizeMode: 'contain',
      borderRadius: '21px',
      },
    paperLight: {
      padding: theme.spacing(2),
      textAlign: 'center',
      height: 500,
      backgroundColor: theme.palette.background.light,
    },
    paperDark: {
      padding: theme.spacing(2),
      textAlign: 'center',
      height: 500,
      backgroundColor: theme.palette.background.dark,
      color: '#fff',
    },
    sheepChip: {
      margin: 'auto',
      transform: 'translateY(-7px)'
    }
  }));

function SheepCard(props) {
    const classes = useStyles();
    const color = props.dark ? classes.paperDark : classes.paperLight

    return (
      <Grid item xs={12} md={6}>
        <Paper className={color} square >
          <Typography variant="h4" gutterBottom>
            {props.title + " "}
            <Chip
              label={props.type == 'yearling' ? 'yearling ewe' : 'ewe lamb'}
              color={props.type == 'yearling' ? 'primary' : 'secondary'}
              className={classes.sheepChip}
            />
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {props.subtitle}
          </Typography>
          <img className={classes.image}
            src={props.img}
            alt={props.name}
          />
        </Paper>
      </Grid>  
    );
}

export default SheepCard;