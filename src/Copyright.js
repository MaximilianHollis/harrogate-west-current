import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { makeStyles, withTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  statement: {
    padding: '12px',
  }
}));

export default function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.statement}>
      Harrogate West {" "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
