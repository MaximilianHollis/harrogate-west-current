import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Copied to clipboard');
const copyEmail = () => {
  try {
    navigator.clipboard.writeText('harrogatewest@verizon.net')
  } catch {
    console.log('not https')
  }
  toast.success(t => (
    <span>
      Copied email to clipboard
      <a href='mailto:harrogatewest@verizon.net' target='_blank' rel='noopener noreferrer'><i></i> Email Us</a>
    </span>
  ))
}
const copyPhone = () => {
  try {
    navigator.clipboard.writeText('+14102625599')
  } catch {
    console.log('not https')
  }
  toast.success(t => (
    <span>
      Copied phone to clipboard
      <a href='tel://+14102625599'><i></i> Call now</a>
    </span>
  ))
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Courgette",
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toaster position="bottom-center" />
      <div>
        <Typography variant="h2" gutterBottom>
          Harrogate West
        </Typography>
        <Typography variant="h6" gutterBottom>
          Since 2011, we’ve been breeding our small flock of Registered 100% RR Katahdins in Sykesville, Maryland.
        </Typography>
        <div className={classes.buttons}>
          <Button variant="outlined" color="primary" onClick={() => copyPhone()}>
            Phone: 410-262-5599
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => copyEmail()}>
            Email: harrogatewest@verizon.net
          </Button>
        </div>
      </div>
    </div>
  );
}
